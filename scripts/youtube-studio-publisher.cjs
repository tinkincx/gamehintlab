"use strict";

const fs = require("node:fs");
const path = require("node:path");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const OUTPUT_ROOT = path.join(PROJECT_ROOT, "outputs", "autonomous-traffic");
const DEFAULT_CDP_ENDPOINT = "http://127.0.0.1:9223";
const DEFAULT_TIMEOUT_MINUTES = 30;

const ASSET_DEFINITIONS = Object.freeze({
  "egg-short": {
    kind: "short",
    video: path.join(OUTPUT_ROOT, "egg-short", "final.mp4"),
    thumbnail: path.join(OUTPUT_ROOT, "egg-short", "thumbnail.png"),
    captions: path.join(OUTPUT_ROOT, "egg-short", "captions.srt"),
    metadata: path.join(OUTPUT_ROOT, "egg-short", "metadata.md"),
    titleHeadings: ["Recommended title", "Title"],
    relatedAsset: "egg-video"
  },
  "fusion-short": {
    kind: "short",
    video: path.join(OUTPUT_ROOT, "fusion-short", "final.mp4"),
    thumbnail: path.join(OUTPUT_ROOT, "fusion-short", "thumbnail.png"),
    captions: path.join(OUTPUT_ROOT, "fusion-short", "captions.srt"),
    metadata: path.join(OUTPUT_ROOT, "fusion-short", "metadata.md"),
    titleHeadings: ["Title", "Recommended title"],
    relatedAsset: "fusion-video"
  },
  "egg-video": {
    kind: "long",
    video: path.join(OUTPUT_ROOT, "egg-video", "final.mp4"),
    thumbnail: path.join(OUTPUT_ROOT, "egg-video", "thumbnail.png"),
    captions: path.join(OUTPUT_ROOT, "egg-video", "subtitles.srt"),
    metadata: path.join(OUTPUT_ROOT, "egg-video", "metadata.md"),
    titleHeadings: ["Recommended title", "Title"]
  },
  "fusion-video": {
    kind: "long",
    video: path.join(
      OUTPUT_ROOT,
      "fusion-video",
      "grow-a-chicken-fighter-fusion-explainer.mp4"
    ),
    thumbnail: path.join(OUTPUT_ROOT, "fusion-video", "fusion-thumbnail.png"),
    captions: path.join(OUTPUT_ROOT, "fusion-video", "captions.srt"),
    metadata: path.join(OUTPUT_ROOT, "fusion-video", "metadata.md"),
    titleHeadings: ["Recommended title", "Title"]
  }
});

const HELP = `YouTube Studio CDP publisher (safe by default)

Default, read-only inspection:
  node scripts/youtube-studio-publisher.cjs
  node scripts/youtube-studio-publisher.cjs inspect

Publish exactly one prepared asset:
  node scripts/youtube-studio-publisher.cjs publish --asset=egg-short --confirm-channel=UCxxxxxxxxxxxxxxxxxxxxxx --visibility=private --audience=not-made-for-kids

Required in publish mode:
  --asset=egg-short|fusion-short|egg-video|fusion-video
  --confirm-channel=<exact UC channel ID>
  --visibility=private|public
  --audience=not-made-for-kids|made-for-kids

Optional:
  --cdp=http://127.0.0.1:9223
  --timeout-minutes=30

Safety properties:
  * Only loopback CDP endpoints are accepted.
  * The channel ID is verified before the file chooser is touched.
  * Each invocation handles one video only.
  * The video is first saved Private. Public is a separate verified step.
  * Any public-promotion error triggers a best-effort rollback to Private.
  * Cookies, OAuth tokens and CDP WebSocket URLs are never printed.
`;

class PublisherError extends Error {
  constructor(code, message, details = {}) {
    super(message);
    this.name = "PublisherError";
    this.code = code;
    this.details = details;
  }
}

function parseArgs(argv) {
  const options = {
    mode: "inspect",
    cdp: DEFAULT_CDP_ENDPOINT,
    timeoutMinutes: DEFAULT_TIMEOUT_MINUTES
  };
  const args = [...argv];
  if (args[0] === "inspect" || args[0] === "publish") {
    options.mode = args.shift();
  }

  for (const raw of args) {
    if (raw === "--help" || raw === "-h") {
      options.help = true;
      continue;
    }
    if (!raw.startsWith("--") || !raw.includes("=")) {
      throw new PublisherError("INVALID_ARGUMENT", `Unknown argument: ${raw}`);
    }
    const [key, ...rest] = raw.slice(2).split("=");
    const value = rest.join("=").trim();
    if (!value) {
      throw new PublisherError("INVALID_ARGUMENT", `Missing value for --${key}`);
    }
    if (key === "mode") options.mode = value;
    else if (key === "cdp") options.cdp = value;
    else if (key === "asset") options.asset = value;
    else if (key === "confirm-channel") options.confirmChannel = value;
    else if (key === "visibility") options.visibility = value;
    else if (key === "audience") options.audience = value;
    else if (key === "timeout-minutes") options.timeoutMinutes = Number(value);
    else throw new PublisherError("INVALID_ARGUMENT", `Unknown option: --${key}`);
  }

  if (!new Set(["inspect", "publish"]).has(options.mode)) {
    throw new PublisherError("INVALID_MODE", "--mode must be inspect or publish");
  }
  options.cdp = validateCdpEndpoint(options.cdp);
  if (
    !Number.isFinite(options.timeoutMinutes) ||
    options.timeoutMinutes < 1 ||
    options.timeoutMinutes > 120
  ) {
    throw new PublisherError(
      "INVALID_TIMEOUT",
      "--timeout-minutes must be between 1 and 120"
    );
  }
  options.timeoutMs = Math.round(options.timeoutMinutes * 60_000);

  if (options.mode === "publish") {
    if (!ASSET_DEFINITIONS[options.asset]) {
      throw new PublisherError(
        "INVALID_ASSET",
        `--asset must be one of: ${Object.keys(ASSET_DEFINITIONS).join(", ")}`
      );
    }
    if (!/^UC[A-Za-z0-9_-]{20,}$/.test(options.confirmChannel || "")) {
      throw new PublisherError(
        "INVALID_CHANNEL_ID",
        "publish requires --confirm-channel=<exact UC channel ID>"
      );
    }
    if (!new Set(["private", "public"]).has(options.visibility)) {
      throw new PublisherError(
        "INVALID_VISIBILITY",
        "publish requires --visibility=private|public"
      );
    }
    if (!new Set(["not-made-for-kids", "made-for-kids"]).has(options.audience)) {
      throw new PublisherError(
        "INVALID_AUDIENCE",
        "publish requires --audience=not-made-for-kids|made-for-kids"
      );
    }
  }
  return options;
}

function validateCdpEndpoint(value) {
  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    throw new PublisherError("INVALID_CDP_ENDPOINT", "--cdp must be a valid HTTP URL");
  }
  const loopbackHosts = new Set(["127.0.0.1", "localhost", "[::1]"]);
  if (
    parsed.protocol !== "http:" ||
    !loopbackHosts.has(parsed.hostname) ||
    parsed.username ||
    parsed.password ||
    parsed.search ||
    parsed.hash ||
    parsed.pathname !== "/"
  ) {
    throw new PublisherError(
      "UNSAFE_CDP_ENDPOINT",
      "CDP must be plain HTTP on loopback with no credentials, path, query or fragment"
    );
  }
  if (!parsed.port) {
    throw new PublisherError("INVALID_CDP_ENDPOINT", "CDP URL must include an explicit port");
  }
  return parsed.origin;
}

function sanitizeReportUrl(value) {
  try {
    const parsed = new URL(value);
    // Login URLs can carry opaque continuation/session parameters. The path is enough
    // to explain browser state, so never copy its query or fragment into logs.
    parsed.search = "";
    parsed.hash = "";
    return parsed.toString();
  } catch {
    return null;
  }
}

function loadChromium() {
  const candidates = [
    process.env.CODEX_PLAYWRIGHT_PATH,
    process.env.LOCALAPPDATA
      ? path.join(
          process.env.LOCALAPPDATA,
          "npm-cache",
          "_npx",
          "e41f203b7505f1fb",
          "node_modules",
          "playwright"
        )
      : null,
    "playwright",
    process.env.USERPROFILE
      ? path.join(
          process.env.USERPROFILE,
          ".cache",
          "codex-runtimes",
          "codex-primary-runtime",
          "dependencies",
          "node",
          "node_modules",
          "playwright"
        )
      : null
  ].filter(Boolean);

  const failures = [];
  for (const candidate of candidates) {
    try {
      const loaded = require(candidate);
      if (loaded?.chromium?.connectOverCDP) return loaded.chromium;
    } catch (error) {
      failures.push(`${candidate}: ${error.code || error.name}`);
    }
  }
  throw new PublisherError(
    "PLAYWRIGHT_NOT_FOUND",
    "Playwright was not found in the project or bundled Codex runtime",
    { attempts: failures }
  );
}

function cleanInlineMarkdown(value) {
  return value
    .replace(/^```(?:text)?\s*/i, "")
    .replace(/```\s*$/i, "")
    .replace(/^[-*]\s+/, "")
    .replace(/^\d+\.\s+/, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/`([^`]*)`/g, "$1")
    .trim();
}

function extractSection(markdown, headingNames) {
  const escaped = headingNames.map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const matcher = new RegExp(
    `(?:^|\\r?\\n)##\\s+(?:${escaped.join("|")})\\s*\\r?\\n([\\s\\S]*?)(?=\\r?\\n##\\s+|$)`,
    "i"
  );
  const match = markdown.match(matcher);
  return match ? match[1].trim() : "";
}

function parseTitle(markdown, headings) {
  const section = extractSection(markdown, headings);
  const title = section
    .split(/\r?\n/)
    .map(cleanInlineMarkdown)
    .find((line) => line && !line.startsWith("#"));
  if (!title) throw new PublisherError("METADATA_TITLE_MISSING", "Metadata has no title");
  if (title.length > 100) {
    throw new PublisherError(
      "METADATA_TITLE_TOO_LONG",
      `YouTube title is ${title.length} characters; maximum is 100`
    );
  }
  return title;
}

function parseDescription(markdown) {
  const section = extractSection(markdown, ["Description"]);
  if (!section) {
    throw new PublisherError("METADATA_DESCRIPTION_MISSING", "Metadata has no description");
  }
  const description = section
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/`([^`]*)`/g, "$1")
    .trim();
  if (description.length > 5_000) {
    throw new PublisherError(
      "METADATA_DESCRIPTION_TOO_LONG",
      `YouTube description is ${description.length} characters; maximum is 5000`
    );
  }
  return description;
}

function parseTags(markdown) {
  const section = extractSection(markdown, ["Tags"]);
  if (!section) return [];
  return cleanInlineMarkdown(section)
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean)
    .slice(0, 40);
}

function loadAsset(assetId) {
  const definition = ASSET_DEFINITIONS[assetId];
  const requiredFiles = [
    ["video", definition.video],
    ["thumbnail", definition.thumbnail],
    ["captions", definition.captions],
    ["metadata", definition.metadata]
  ];
  const missing = requiredFiles.filter(([, file]) => !fs.existsSync(file));
  if (missing.length) {
    throw new PublisherError("ASSET_FILE_MISSING", "Prepared upload asset is incomplete", {
      missing: missing.map(([name, file]) => ({ name, file }))
    });
  }
  const markdown = fs.readFileSync(definition.metadata, "utf8");
  const videoBytes = fs.statSync(definition.video).size;
  if (videoBytes <= 0) {
    throw new PublisherError("EMPTY_VIDEO", `Video file is empty: ${definition.video}`);
  }
  return {
    id: assetId,
    ...definition,
    title: parseTitle(markdown, definition.titleHeadings),
    description: parseDescription(markdown),
    tags: parseTags(markdown),
    videoBytes
  };
}

function choosePage(browser) {
  const pages = browser.contexts().flatMap((context) => context.pages());
  if (!pages.length) {
    throw new PublisherError(
      "NO_BROWSER_PAGE",
      "The CDP browser has no page. Open the dedicated YouTube Studio profile first."
    );
  }
  const score = (page) => {
    const url = page.url();
    if (url.startsWith("https://studio.youtube.com")) return 30;
    if (url.includes("youtube.com")) return 20;
    if (url.includes("accounts.google.com")) return 10;
    return 0;
  };
  return [...pages].sort((left, right) => score(right) - score(left))[0];
}

async function inspectPage(page) {
  await page.waitForLoadState("domcontentloaded", { timeout: 8_000 }).catch(() => {});
  await page.waitForTimeout(350);

  const result = await page.evaluate(() => {
    const clean = (value) => {
      if (typeof value !== "string") return null;
      const text = value.replace(/\s+/g, " ").trim();
      return text && text.length <= 160 ? text : null;
    };
    const channelIdFrom = (value) => {
      if (typeof value !== "string") return null;
      const match = value.match(/UC[A-Za-z0-9_-]{20,}/);
      return match ? match[0] : null;
    };
    const cfg = window.ytcfg?.data_ || {};
    const getCfg = (key) => {
      try {
        return window.ytcfg?.get?.(key) ?? cfg[key];
      } catch {
        return cfg[key];
      }
    };

    const idCandidates = [
      location.pathname,
      getCfg("CHANNEL_ID"),
      getCfg("EXTERNAL_CHANNEL_ID"),
      getCfg("DELEGATED_SESSION_ID"),
      document.querySelector('meta[itemprop="channelId"]')?.content,
      document.querySelector('link[rel="canonical"]')?.href,
      ...Array.from(document.querySelectorAll('a[href*="/channel/UC"]'), (node) => node.href)
    ];
    const channelId = idCandidates.map(channelIdFrom).find(Boolean) || null;

    const nameCandidates = [
      getCfg("CHANNEL_NAME"),
      getCfg("CHANNEL_TITLE"),
      document.querySelector("ytcp-navigation-drawer #channel-name")?.textContent,
      document.querySelector("ytcp-app-header #account-name")?.textContent,
      document.querySelector("#account-name")?.textContent,
      document.querySelector("#channel-title")?.textContent,
      document.querySelector("#channel-name")?.textContent,
      document.querySelector("ytcp-entity-page-header #title")?.textContent,
      document.querySelector('a[href*="/channel/UC"]')?.textContent
    ];
    const channelName = nameCandidates.map(clean).find(Boolean) || null;
    const host = location.hostname;
    const onAccounts = host === "accounts.google.com";
    const hasEmailInput = Boolean(
      document.querySelector('input[type="email"], input[name="identifier"]')
    );
    const studioShell = Boolean(
      document.querySelector("ytcp-app, ytcp-app-header, ytcp-entity-page-manager")
    );
    const signInLink = Boolean(
      document.querySelector('a[href*="accounts.google.com"][href*="signin"]')
    );
    const loggedIn =
      host === "studio.youtube.com" && !onAccounts && !hasEmailInput && studioShell && !signInLink;

    return {
      loggedIn,
      channelId,
      channelName,
      currentUrl: location.href,
      pageTitle: document.title || null
    };
  });
  return result;
}

async function connectToBrowser(chromium, endpoint) {
  try {
    return await chromium.connectOverCDP(endpoint, {
      timeout: 10_000,
      isLocal: true,
      noDefaults: true
    });
  } catch (error) {
    throw new PublisherError(
      "CDP_CONNECTION_FAILED",
      `Cannot connect to the dedicated browser at ${endpoint}`,
      { cause: error.message }
    );
  }
}

async function firstVisible(locators) {
  for (const locator of locators) {
    const count = await locator.count().catch(() => 0);
    for (let index = 0; index < Math.min(count, 8); index += 1) {
      const candidate = locator.nth(index);
      if (await candidate.isVisible().catch(() => false)) return candidate;
    }
  }
  return null;
}

async function firstExisting(locators) {
  for (const locator of locators) {
    if ((await locator.count().catch(() => 0)) > 0) return locator.first();
  }
  return null;
}

async function clickFirstVisible(locators, code, message, timeout = 15_000) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    const locator = await firstVisible(locators);
    if (locator) {
      await locator.click({ timeout: Math.min(10_000, timeout) });
      return locator;
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  throw new PublisherError(code, message);
}

async function waitForEnabled(locator, timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (
      (await locator.isVisible().catch(() => false)) &&
      (await locator.isEnabled().catch(() => false))
    ) {
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new PublisherError("CONTROL_NOT_READY", "YouTube Studio control did not become ready");
}

async function openUploadDialog(page, channelId) {
  const directUrl = `https://studio.youtube.com/channel/${channelId}/videos/upload?d=ud`;
  await page.goto(directUrl, { waitUntil: "domcontentloaded", timeout: 30_000 });
  const inputLocators = [
    page.locator('ytcp-uploads-dialog input[type="file"][accept*="video"]'),
    page.locator('input[type="file"][accept*="video"]'),
    page.locator('ytcp-uploads-dialog input[type="file"]')
  ];
  let input = null;
  const directDeadline = Date.now() + 10_000;
  while (!input && Date.now() < directDeadline) {
    input = await firstExisting(inputLocators);
    if (!input) await page.waitForTimeout(300);
  }
  if (input) return input;

  const openDialog = await firstVisible([page.locator("ytcp-uploads-dialog")]);
  if (openDialog) {
    throw new PublisherError(
      "VIDEO_INPUT_NOT_FOUND",
      "The upload dialog opened, but its file input did not become available"
    );
  }

  await clickFirstVisible(
    [
      page.locator("ytcp-button#create-icon"),
      page.locator("#create-icon"),
      page.getByRole("button", { name: /^(Create|创建)$/i })
    ],
    "CREATE_BUTTON_NOT_FOUND",
    "Could not find YouTube Studio Create button"
  );
  await clickFirstVisible(
    [
      page.getByText(/^(Upload videos|上传视频)$/i, { exact: true }),
      page.locator('tp-yt-paper-item:has-text("Upload videos")'),
      page.locator('tp-yt-paper-item:has-text("上传视频")')
    ],
    "UPLOAD_MENU_NOT_FOUND",
    "Could not find Upload videos menu item"
  );
  const menuDeadline = Date.now() + 10_000;
  while (!input && Date.now() < menuDeadline) {
    input = await firstExisting(inputLocators);
    if (!input) await page.waitForTimeout(300);
  }
  if (!input) {
    throw new PublisherError("VIDEO_INPUT_NOT_FOUND", "Could not find the video file input");
  }
  return input;
}

async function fillContentEditable(locator, value, code) {
  await locator.waitFor({ state: "visible", timeout: 30_000 });
  await locator.click();
  await locator.fill(value);
  const actual = (await locator.innerText().catch(() => "")).trim();
  if (!actual || !actual.includes(value.slice(0, Math.min(20, value.length)))) {
    throw new PublisherError(code, "YouTube Studio did not retain the supplied text");
  }
}

async function fillDetails(page, asset, audience) {
  let title = await firstVisible([
    page.locator("ytcp-social-suggestions-textbox#title-textarea #textbox"),
    page.locator("#title-textarea #textbox"),
    page.locator('[aria-label^="Add a title"]'),
    page.locator('[aria-label^="添加标题"]')
  ]);
  let description = await firstVisible([
    page.locator("ytcp-social-suggestions-textbox#description-textarea #textbox"),
    page.locator("#description-textarea #textbox"),
    page.locator('[aria-label^="Tell viewers"]'),
    page.locator('[aria-label^="向观看者介绍"]')
  ]);
  const fieldDeadline = Date.now() + 30_000;
  while ((!title || !description) && Date.now() < fieldDeadline) {
    title = title || await firstVisible([
      page.locator("ytcp-social-suggestions-textbox#title-textarea #textbox"),
      page.locator("#title-textarea #textbox"),
      page.locator('[aria-label^="Add a title"]')
    ]);
    description = description || await firstVisible([
      page.locator("ytcp-social-suggestions-textbox#description-textarea #textbox"),
      page.locator("#description-textarea #textbox"),
      page.locator('[aria-label^="Tell viewers"]')
    ]);
    if (!title || !description) await page.waitForTimeout(300);
  }
  if (!title || !description) {
    throw new PublisherError(
      "DETAIL_FIELDS_NOT_FOUND",
      "Could not find title and description fields; upload was not published"
    );
  }
  await fillContentEditable(title, asset.title, "TITLE_NOT_RETAINED");
  await fillContentEditable(description, asset.description, "DESCRIPTION_NOT_RETAINED");

  const audienceName =
    audience === "made-for-kids" ? "VIDEO_MADE_FOR_KIDS_MFK" : "VIDEO_MADE_FOR_KIDS_NOT_MFK";
  await clickFirstVisible(
    [
      page.locator(`tp-yt-paper-radio-button[name="${audienceName}"]`),
      audience === "made-for-kids"
        ? page.getByText(/Yes,.*made for kids|是，面向儿童/i)
        : page.getByText(/No,.*not made for kids|否，不是面向儿童/i)
    ],
    "AUDIENCE_CONTROL_NOT_FOUND",
    "Could not set the required audience choice"
  );

  // These explainers use clearly non-realistic motion graphics and ordinary
  // synthesized narration; they do not depict a real person or event as altered.
  // Studio currently requires an explicit answer before enabling Next.
  let noAlteredContent = await firstVisible([
    page.locator('tp-yt-paper-radio-button[name="VIDEO_HAS_ALTERED_CONTENT_NO"]'),
    page.locator('[aria-label="No, AI wasn’t used"]')
  ]);
  if (!noAlteredContent) {
    const showAdvanced = await firstVisible([
      page.getByText(/^Show more$/i, { exact: true }),
      page.locator('ytcp-button#toggle-button[aria-label="Show advanced settings"]')
    ]);
    if (showAdvanced) {
      await showAdvanced.click();
      noAlteredContent = await firstVisible([
        page.locator('tp-yt-paper-radio-button[name="VIDEO_HAS_ALTERED_CONTENT_NO"]'),
        page.locator('[aria-label="No, AI wasn’t used"]')
      ]);
    }
  }
  if (noAlteredContent) {
    const checked = await noAlteredContent.getAttribute("aria-checked").catch(() => null);
    if (checked !== "true") await noAlteredContent.click();
  }

  const warnings = [];
  const thumbnailInput = await firstExisting([
    page.locator('ytcp-thumbnails-compact-editor input[type="file"][accept*="image"]'),
    page.locator('input[type="file"][accept*="image"]')
  ]);
  if (thumbnailInput) {
    await thumbnailInput.setInputFiles(asset.thumbnail);
  } else if (asset.kind === "short") {
    warnings.push({
      area: "thumbnail",
      status: "pending",
      reason: "The desktop Shorts upload UI did not expose a custom-thumbnail file input."
    });
  } else {
    throw new PublisherError(
      "THUMBNAIL_INPUT_NOT_FOUND",
      "Long-form upload requires a thumbnail input; upload remains draft/private"
    );
  }

  if (asset.tags.length) {
    let tagsInput = await firstVisible([
      page.locator("ytcp-free-text-chip-bar #text-input"),
      page.locator('#tags-container input[type="text"]')
    ]);
    if (!tagsInput) {
      const showMore = await firstVisible([
        page.getByText(/^(Show more|显示更多)$/i, { exact: true }),
        page.locator('ytcp-button#toggle-button[aria-label="Show advanced settings"]')
      ]);
      if (showMore) await showMore.click();
      tagsInput = await firstVisible([
        page.locator("ytcp-free-text-chip-bar #text-input"),
        page.locator('#tags-container input[type="text"]')
      ]);
    }
    if (tagsInput) {
      await tagsInput.fill(asset.tags.join(", "));
    } else {
      warnings.push({ area: "tags", status: "pending", reason: "Tags input not found." });
    }
  }
  return warnings;
}

async function nextStep(page, label) {
  const button = await firstVisible([
    page.locator("ytcp-button#next-button"),
    page.getByRole("button", { name: /^(Next|下一步)$/i })
  ]);
  if (!button) {
    throw new PublisherError("NEXT_BUTTON_NOT_FOUND", `Next button not found after ${label}`);
  }
  await waitForEnabled(button, 30_000);
  await button.click();
  await page.waitForTimeout(500);
}

async function checksText(page) {
  const containers = [
    page.locator("ytcp-video-checks"),
    page.locator("ytcp-video-checks-status"),
    page.locator("#checks"),
    page.locator("#checks-status")
  ];
  const values = [];
  for (const locator of containers) {
    const count = await locator.count().catch(() => 0);
    for (let index = 0; index < Math.min(count, 6); index += 1) {
      const item = locator.nth(index);
      if (await item.isVisible().catch(() => false)) {
        const text = await item.innerText().catch(() => "");
        if (text) values.push(text);
      }
    }
  }
  if (!values.length) {
    const dialog = await firstVisible([page.locator("ytcp-uploads-dialog")]);
    if (dialog) {
      const text = await dialog.innerText().catch(() => "");
      if (text) values.push(text);
    }
  }
  return values.join("\n").replace(/\s+/g, " ").trim().slice(0, 5_000);
}

async function waitForCleanChecks(page, timeoutMs) {
  const positive = [
    /Checks complete[.!]?\s*No issues found/i,
    /No issues found/i,
    /检查完毕[。！]?\s*未发现问题/i,
    /未发现任何问题/i,
    /未发现问题/i
  ];
  const negative = [
    /Issue(?:s)? found/i,
    /Copyright (?:claim|strike)/i,
    /Checks failed/i,
    /Blocked|Restricted/i,
    /发现问题/i,
    /版权(?:声明|警示|申诉)/i,
    /检查失败/i,
    /已屏蔽|受限/i
  ];
  const deadline = Date.now() + timeoutMs;
  let lastStatus = "";
  while (Date.now() < deadline) {
    lastStatus = await checksText(page);
    if (positive.some((pattern) => pattern.test(lastStatus))) return lastStatus;
    if (negative.some((pattern) => pattern.test(lastStatus))) {
      throw new PublisherError(
        "YOUTUBE_CHECK_WARNING",
        "YouTube reported an upload/check warning; the video was not published",
        { statusSummary: lastStatus.slice(0, 400) }
      );
    }

    const fatalUi = await firstVisible([
      page.locator("ytcp-error-message"),
      page.locator('[role="alert"]:has-text("failed")'),
      page.locator('[role="alert"]:has-text("失败")')
    ]);
    if (fatalUi) {
      const message = (await fatalUi.innerText().catch(() => "Upload failed")).slice(0, 300);
      throw new PublisherError("YOUTUBE_UPLOAD_ERROR", message);
    }
    await page.waitForTimeout(2_000);
  }
  throw new PublisherError(
    "CHECKS_TIMEOUT",
    "YouTube checks did not reach a verified no-issues state before timeout",
    { lastStatus: lastStatus.slice(0, 400) }
  );
}

async function selectVisibility(page, visibility) {
  const name = visibility.toUpperCase();
  await clickFirstVisible(
    [
      page.locator(`tp-yt-paper-radio-button[name="${name}"]`),
      page.getByText(new RegExp(`^${visibility}$`, "i"), { exact: true }),
      visibility === "private"
        ? page.getByText(/^私享$/i, { exact: true })
        : page.getByText(/^公开$/i, { exact: true })
    ],
    "VISIBILITY_CONTROL_NOT_FOUND",
    `Could not select ${visibility} visibility`
  );
}

async function clickDone(page) {
  const button = await firstVisible([
    page.locator("ytcp-button#done-button"),
    page.getByRole("button", { name: /^(Save|Publish|保存|发布)$/i })
  ]);
  if (!button) {
    throw new PublisherError("DONE_BUTTON_NOT_FOUND", "Save/Publish button not found");
  }
  await waitForEnabled(button, 60_000);
  await button.click();
}

async function extractVideoId(page, timeoutMs = 45_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const candidates = await page.evaluate(() => {
      const values = [location.href];
      for (const node of document.querySelectorAll('a[href*="youtu.be/"], a[href*="watch?v="], input')) {
        if (node.href) values.push(node.href);
        if (node.value && /youtu(?:\.be|be\.com)/.test(node.value)) values.push(node.value);
      }
      return values.slice(0, 80);
    });
    for (const value of candidates) {
      const match = String(value).match(/(?:youtu\.be\/|[?&]v=|\/video\/)([A-Za-z0-9_-]{11})/);
      if (match) return match[1];
    }
    await page.waitForTimeout(750);
  }
  throw new PublisherError(
    "VIDEO_ID_NOT_FOUND",
    "The upload was saved Private, but its video ID could not be read from the completion UI"
  );
}

async function dismissCompletion(page) {
  const close = await firstVisible([
    page.locator("ytcp-button#close-button"),
    page.getByRole("button", { name: /^(Close|关闭)$/i })
  ]);
  if (close) await close.click().catch(() => {});
}

async function editVisibility(page, videoId, visibility) {
  await page.goto(`https://studio.youtube.com/video/${videoId}/edit`, {
    waitUntil: "domcontentloaded",
    timeout: 30_000
  });
  await page.locator("ytcp-video-metadata-editor, ytcp-video-metadata-visibility").first().waitFor({
    state: "visible",
    timeout: 30_000
  });

  const visibilityEditor = await firstVisible([
    page.locator("ytcp-video-metadata-visibility"),
    page.locator("#visibility"),
    page.getByText(/^(Private|Public|私享|公开)$/i, { exact: true })
  ]);
  if (!visibilityEditor) {
    throw new PublisherError(
      "EDIT_VISIBILITY_NOT_FOUND",
      "Could not open the saved video's visibility editor"
    );
  }
  await visibilityEditor.click();
  await selectVisibility(page, visibility);
  const save = await firstVisible([
    page.locator("ytcp-button#save-button"),
    page.getByRole("button", { name: /^(Save|保存)$/i })
  ]);
  if (!save) throw new PublisherError("EDIT_SAVE_NOT_FOUND", "Video edit Save button not found");
  await waitForEnabled(save, 30_000);
  await save.click();
  await page.waitForTimeout(1_500);

  await page.reload({ waitUntil: "domcontentloaded", timeout: 30_000 });
  const summary = await firstVisible([
    page.locator("ytcp-video-metadata-visibility #visibility"),
    page.locator("ytcp-video-metadata-visibility"),
    page.locator("#visibility")
  ]);
  const bodyText = summary ? await summary.innerText().catch(() => "") : "";
  const expected =
    visibility === "public" ? /\bPublic\b|公开/i : /\bPrivate\b|私享/i;
  if (!expected.test(bodyText)) {
    throw new PublisherError(
      "VISIBILITY_NOT_VERIFIED",
      `Studio did not visibly confirm ${visibility} after save`
    );
  }
}

async function rollbackPrivate(page, videoId) {
  try {
    await editVisibility(page, videoId, "private");
    return { attempted: true, verified: true };
  } catch (error) {
    return {
      attempted: true,
      verified: false,
      error: error instanceof Error ? error.message : String(error)
    };
  }
}

async function publishOne(page, state, options, asset) {
  const pending = [];
  const existingDialog = await firstVisible([page.locator("ytcp-uploads-dialog")]);
  const existingDetails = await firstVisible([
    page.locator("ytcp-uploads-dialog #title-textarea #textbox"),
    page.locator('ytcp-uploads-dialog [aria-label^="Add a title"]')
  ]);
  const existingCleanChecks = await firstVisible([
    page.getByText(/Checks complete[.!]?\s*No issues found/i),
    page.getByText(/^No issues found$/i, { exact: true })
  ]);
  if (!existingDialog) {
    const videoInput = await openUploadDialog(page, state.channelId);
    await videoInput.setInputFiles(asset.video);
  }

  let checkSummary = "";
  if (existingCleanChecks) {
    checkSummary = await checksText(page);
    await nextStep(page, "checks");
  } else {
    const detailWarnings = await fillDetails(page, asset, options.audience);
    pending.push(...detailWarnings);
    await nextStep(page, "details");
    await nextStep(page, "video elements");
    checkSummary = await waitForCleanChecks(page, options.timeoutMs);
    await nextStep(page, "checks");
  }

  // Fail closed: every upload is first committed as Private, regardless of requested visibility.
  await selectVisibility(page, "private");
  await clickDone(page);
  const videoId = await extractVideoId(page);
  await dismissCompletion(page);

  let finalVisibility = "private";
  let rollback = null;
  if (options.visibility === "public") {
    try {
      await editVisibility(page, videoId, "public");
      finalVisibility = "public";
    } catch (error) {
      rollback = await rollbackPrivate(page, videoId);
      throw new PublisherError(
        "PUBLIC_PROMOTION_FAILED",
        "The video was uploaded Private, but Public promotion failed",
        {
          videoId,
          rollback,
          cause: error instanceof Error ? error.message : String(error)
        }
      );
    }
  }

  pending.push({
    area: "captions",
    status: "pending",
    file: asset.captions,
    reason:
      "Studio caption-upload selectors are not verified in the current signed-out QA session; burned captions remain in the video."
  });
  if (asset.kind === "short") {
    pending.push({
      area: "related-video",
      status: "pending",
      relatedAsset: asset.relatedAsset,
      reason: "The Shorts Related video control is not exposed through a verified stable selector."
    });
  }

  return {
    mode: "publish",
    success: true,
    asset: asset.id,
    channelId: state.channelId,
    channelName: state.channelName,
    requestedVisibility: options.visibility,
    finalVisibility,
    videoId,
    videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
    title: asset.title,
    audience: options.audience,
    checks: {
      status: "passed",
      summary: checkSummary.slice(0, 300)
    },
    thumbnail: detailWarnings.some((item) => item.area === "thumbnail")
      ? "pending"
      : "uploaded",
    pendingActions: pending,
    rollback
  };
}

function safeErrorPayload(error, mode) {
  const known = error instanceof PublisherError;
  return {
    mode,
    success: false,
    code: known ? error.code : "UNEXPECTED_ERROR",
    message: error instanceof Error ? error.message : String(error),
    safetyState: mode === "publish" ? "private-or-draft-unless-explicitly-verified" : "read-only",
    details: known ? error.details : {}
  };
}

async function main() {
  let options;
  try {
    options = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(JSON.stringify(safeErrorPayload(error, "unknown"), null, 2));
    return 2;
  }
  if (options.help) {
    console.log(HELP);
    return 0;
  }

  let browser;
  try {
    const chromium = loadChromium();
    browser = await connectToBrowser(chromium, options.cdp);
    const page = choosePage(browser);
    const state = await inspectPage(page);

    if (options.mode === "inspect") {
      console.log(
        JSON.stringify(
          {
            mode: "inspect",
            connected: true,
            endpoint: options.cdp,
            loggedIn: state.loggedIn,
            channelId: state.channelId,
            channelName: state.channelName,
            currentUrl: sanitizeReportUrl(state.currentUrl),
            pageTitle: state.pageTitle
          },
          null,
          2
        )
      );
      return 0;
    }

    if (!state.loggedIn) {
      throw new PublisherError(
        "NOT_LOGGED_IN",
        "The dedicated browser is not logged in to YouTube Studio. Complete login in the visible profile first."
      );
    }
    if (!state.channelId) {
      throw new PublisherError(
        "CHANNEL_ID_UNAVAILABLE",
        "Studio is logged in, but the exact UC channel ID could not be verified. Open that channel's Studio dashboard and inspect again."
      );
    }
    if (state.channelId !== options.confirmChannel) {
      throw new PublisherError(
        "CHANNEL_MISMATCH",
        "The connected Studio channel does not match --confirm-channel; no file was selected",
        { detectedChannelId: state.channelId, confirmedChannelId: options.confirmChannel }
      );
    }

    const asset = loadAsset(options.asset);
    const result = await publishOne(page, state, options, asset);
    console.log(JSON.stringify(result, null, 2));
    return 0;
  } catch (error) {
    console.error(JSON.stringify(safeErrorPayload(error, options.mode), null, 2));
    return 1;
  } finally {
    // Do not call browser.close(): on a CDP connection that could close the user's dedicated Edge.
    // The process exits below, which only drops this script's WebSocket connection.
    void browser;
  }
}

main()
  .then((code) => {
    // Force-close only this Node process so the remote Edge remains open.
    setTimeout(() => process.exit(code), 0);
  })
  .catch((error) => {
    console.error(JSON.stringify(safeErrorPayload(error, "unknown"), null, 2));
    setTimeout(() => process.exit(1), 0);
  });
