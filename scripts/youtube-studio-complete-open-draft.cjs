"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("C:/Users/WINDOWS/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright");

const CHANNEL_ID = "UC-SJS7kOStyuAAltmwNv5_A";
const PROJECT_ROOT = path.resolve(__dirname, "..");
const ASSETS = {
  "egg-video": {
    metadata: path.join(PROJECT_ROOT, "outputs", "autonomous-traffic", "egg-video", "metadata.md"),
    thumbnail: path.join(PROJECT_ROOT, "outputs", "autonomous-traffic", "egg-video", "thumbnail.png")
  },
  "fusion-video": {
    metadata: path.join(PROJECT_ROOT, "outputs", "autonomous-traffic", "fusion-video", "metadata.md"),
    thumbnail: path.join(PROJECT_ROOT, "outputs", "autonomous-traffic", "fusion-video", "fusion-thumbnail.png")
  },
  "egg-short": {
    metadata: path.join(PROJECT_ROOT, "outputs", "autonomous-traffic", "egg-short", "metadata.md"),
    thumbnail: path.join(PROJECT_ROOT, "outputs", "autonomous-traffic", "egg-short", "thumbnail.png")
  },
  "fusion-short": {
    metadata: path.join(PROJECT_ROOT, "outputs", "autonomous-traffic", "fusion-short", "metadata.md"),
    thumbnail: path.join(PROJECT_ROOT, "outputs", "autonomous-traffic", "fusion-short", "thumbnail.png")
  }
};

function section(markdown, headings) {
  const lines = markdown.split(/\r?\n/);
  const normalized = headings.map((value) => value.toLowerCase());
  let start = -1;
  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(/^##\s+(.+?)\s*$/);
    if (match && normalized.includes(match[1].trim().toLowerCase())) {
      start = index + 1;
      break;
    }
  }
  if (start < 0) return "";
  const result = [];
  for (let index = start; index < lines.length; index += 1) {
    if (/^##\s+/.test(lines[index])) break;
    result.push(lines[index]);
  }
  return result.join("\n").trim();
}

function cleanInline(value) {
  return value
    .replace(/^\d+\.\s+/, "")
    .replace(/^[-*]\s+/, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/->/g, "to")
    .trim();
}

function loadAsset(assetId) {
  const definition = ASSETS[assetId];
  if (!definition) throw new Error(`Unsupported asset: ${assetId}`);
  for (const file of Object.values(definition)) {
    if (!fs.existsSync(file)) throw new Error(`Missing asset file: ${file}`);
  }
  const markdown = fs.readFileSync(definition.metadata, "utf8");
  const title = cleanInline(section(markdown, ["Recommended title", "Title"]).split(/\r?\n/).find(Boolean) || "");
  const description = section(markdown, ["Description"])
    .split(/\r?\n/)
    .map((line) => cleanInline(line))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  const tags = section(markdown, ["Tags"])
    .replace(/`/g, "")
    .split(/[,\r\n]+/)
    .map((value) => cleanInline(value))
    .filter(Boolean)
    .slice(0, 25);
  if (!title || !description) throw new Error("Metadata title or description is empty");
  if (/[<>]/.test(description)) throw new Error("Description contains prohibited angle brackets");
  return { ...definition, title, description, tags };
}

async function visible(locator) {
  const count = await locator.count().catch(() => 0);
  for (let index = 0; index < count; index += 1) {
    const item = locator.nth(index);
    if (await item.isVisible().catch(() => false)) return item;
  }
  return null;
}

async function waitEnabled(locator, timeout = 30_000) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    if (await locator.isEnabled().catch(() => false)) return;
    await new Promise((resolve) => setTimeout(resolve, 400));
  }
  throw new Error("Required button did not become enabled");
}

async function fillEditable(locator, value) {
  await locator.click();
  await locator.fill(value);
  const actual = String(await locator.innerText()).trim();
  if (!actual.startsWith(value.slice(0, Math.min(30, value.length)))) {
    throw new Error("Studio did not retain supplied text");
  }
}

(async () => {
  const expectedVideoId = process.argv[2];
  const assetId = process.argv[3];
  if (!/^[A-Za-z0-9_-]{11}$/.test(expectedVideoId || "")) throw new Error("Expected exact 11-character video ID");
  const asset = loadAsset(assetId);

  const browser = await chromium.connectOverCDP("http://127.0.0.1:9223");
  const page = browser.contexts().flatMap((context) => context.pages())
    .find((candidate) => candidate.url().startsWith("https://studio.youtube.com"));
  if (!page || !page.url().includes(CHANNEL_ID)) throw new Error("Expected YouTube Studio channel is not open");
  page.on("dialog", async (dialog) => dialog.accept().catch(() => {}));

  const exactDialog = page.locator(`ytcp-uploads-dialog[video-id="${expectedVideoId}"]`).first();
  let dialog = (await exactDialog.count()) > 0 ? exactDialog : null;
  if (!dialog) {
    if ((await page.locator("ytcp-video-row").count().catch(() => 0)) === 0) {
      await page.goto(`https://studio.youtube.com/channel/${CHANNEL_ID}/videos/upload`, {
        waitUntil: "domcontentloaded",
        timeout: 30_000
      });
      await page.waitForTimeout(3_000);
    }
    const rows = page.locator("ytcp-video-row");
    let targetRow = null;
    const rowCount = await rows.count();
    for (let index = 0; index < rowCount; index += 1) {
      const row = rows.nth(index);
      const imageSources = await row.locator("img[src]").evaluateAll((nodes) => nodes.map((node) => node.src));
      if (imageSources.some((source) => source.includes(expectedVideoId))) {
        targetRow = row;
        break;
      }
    }
    if (!targetRow) throw new Error("Exact draft row not found; refusing to open another video");
    const editDraft = targetRow.getByRole("button", { name: "Edit draft" });
    if ((await editDraft.count()) === 0) throw new Error("Edit draft button not found on exact row");
    await editDraft.last().click();
    const openedDialog = page.locator(`ytcp-uploads-dialog[video-id="${expectedVideoId}"]`).first();
    await openedDialog.waitFor({ state: "attached", timeout: 30_000 });
    dialog = openedDialog;
  }
  const actualVideoId = await dialog.getAttribute("video-id");
  if (actualVideoId !== expectedVideoId) throw new Error(`Open draft ID mismatch: ${actualVideoId || "missing"}`);

  let step = String(await dialog.getAttribute("workflow-step") || "").toUpperCase();
  if (step === "DETAILS") {
    await dialog.locator('#title-textarea #textbox, [aria-label^="Add a title"]').first().waitFor({
      state: "visible",
      timeout: 90_000
    });
    const title = await visible(dialog.locator('#title-textarea #textbox, [aria-label^="Add a title"]'));
    const description = await visible(dialog.locator('#description-textarea #textbox, [aria-label^="Tell viewers"]'));
    if (!title || !description) throw new Error("Draft detail fields are missing");
    await fillEditable(title, asset.title);
    await fillEditable(description, asset.description);

    const notForKids = await visible(dialog.locator('tp-yt-paper-radio-button[name="VIDEO_MADE_FOR_KIDS_NOT_MFK"]'));
    if (!notForKids) throw new Error("Audience control not found");
    if ((await notForKids.getAttribute("aria-checked")) !== "true") await notForKids.click();

    let noAltered = await visible(dialog.locator('tp-yt-paper-radio-button[name="VIDEO_HAS_ALTERED_CONTENT_NO"]'));
    if (!noAltered) {
      const showMore = await visible(dialog.getByText(/^Show more$/i, { exact: true }));
      if (showMore) await showMore.click();
      noAltered = await visible(dialog.locator('tp-yt-paper-radio-button[name="VIDEO_HAS_ALTERED_CONTENT_NO"]'));
    }
    if (noAltered && (await noAltered.getAttribute("aria-checked")) !== "true") await noAltered.click();

    const imageInput = dialog.locator('input[type="file"][accept*="image"]').first();
    if ((await imageInput.count()) > 0) await imageInput.setInputFiles(asset.thumbnail);

    let tagsInput = await visible(dialog.locator('ytcp-free-text-chip-bar #text-input, #tags-container input[type="text"]'));
    if (!tagsInput) {
      const showMore = await visible(dialog.getByText(/^Show more$/i, { exact: true }));
      if (showMore) await showMore.click();
      tagsInput = await visible(dialog.locator('ytcp-free-text-chip-bar #text-input, #tags-container input[type="text"]'));
    }
    if (tagsInput && asset.tags.length) await tagsInput.fill(asset.tags.join(", "));

    const invalid = await visible(dialog.locator('[aria-invalid="true"]'));
    if (invalid) {
      const parentText = String(await invalid.locator("xpath=ancestor::ytcp-social-suggestions-textbox[1]").innerText().catch(() => "")).slice(-300);
      throw new Error(`Detail field is invalid: ${parentText || "unknown reason"}`);
    }
    const next = await visible(dialog.locator("ytcp-button#next-button"));
    if (!next) throw new Error("Details Next button not found");
    await waitEnabled(next);
    await next.click();
    await page.waitForFunction(() => document.querySelector("ytcp-uploads-dialog")?.getAttribute("workflow-step") === "VIDEO_ELEMENTS", null, { timeout: 15_000 });
    step = "VIDEO_ELEMENTS";
  }

  if (step === "VIDEO_ELEMENTS") {
    const next = await visible(dialog.locator("ytcp-button#next-button"));
    if (!next) throw new Error("Video elements Next button not found");
    await waitEnabled(next);
    await next.click();
    await page.waitForFunction(() => document.querySelector("ytcp-uploads-dialog")?.getAttribute("workflow-step") === "CHECKS", null, { timeout: 15_000 });
    step = "CHECKS";
  }

  if (step === "CHECKS") {
    const deadline = Date.now() + 30 * 60_000;
    let checks = "";
    while (Date.now() < deadline) {
      checks = String(await dialog.innerText()).replace(/\s+/g, " ").trim();
      if (/Copyright (claim|strike)|Checks failed|Blocked|Restricted|发现问题|版权声明|已屏蔽|受限/i.test(checks)) {
        throw new Error("YouTube reported a check warning; leaving draft private");
      }
      if (/Checks complete[.!]?\s*No issues found/i.test(checks)) break;
      await page.waitForTimeout(2_000);
    }
    if (!/Checks complete[.!]?\s*No issues found/i.test(checks)) throw new Error("Clean checks timed out");
    const next = await visible(dialog.locator("ytcp-button#next-button"));
    if (!next) throw new Error("Checks Next button not found");
    await waitEnabled(next);
    await next.click();
    await page.waitForFunction(() => {
      const value = document.querySelector("ytcp-uploads-dialog")?.getAttribute("workflow-step");
      return value === "VISIBILITY" || value === "REVIEW";
    }, null, { timeout: 15_000 });
    step = String(await dialog.getAttribute("workflow-step") || "").toUpperCase();
  }

  if (step !== "VISIBILITY" && step !== "REVIEW") throw new Error(`Unsupported workflow step: ${step}`);
  const privateChoice = await visible(dialog.locator('tp-yt-paper-radio-button[name="PRIVATE"]'));
  if (!privateChoice) throw new Error("Private visibility choice not found");
  if ((await privateChoice.getAttribute("aria-checked")) !== "true") await privateChoice.click();
  const done = await visible(dialog.locator("ytcp-button#done-button"));
  if (!done) throw new Error("Save button not found");
  await waitEnabled(done, 60_000);
  await done.click();
  await page.waitForTimeout(3_000);

  console.log(JSON.stringify({
    success: true,
    channelId: CHANNEL_ID,
    videoId: expectedVideoId,
    asset: assetId,
    visibility: "private",
    checks: "no issues found"
  }, null, 2));
  setTimeout(() => process.exit(0), 0);
})().catch((error) => {
  console.error(JSON.stringify({ success: false, error: error.message, safetyState: "draft-or-private" }, null, 2));
  process.exit(1);
});
