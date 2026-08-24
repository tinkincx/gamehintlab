"use strict";

const { chromium } = require("C:/Users/WINDOWS/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright");

const CHANNEL_ID = "UC-SJS7kOStyuAAltmwNv5_A";

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
  throw new Error("Save control did not become enabled");
}

(async () => {
  const videoId = process.argv[2];
  const visibility = String(process.argv[3] || "").toLowerCase();
  if (!/^[A-Za-z0-9_-]{11}$/.test(videoId || "")) throw new Error("Expected exact video ID");
  if (!new Set(["private", "public", "unlisted"]).has(visibility)) throw new Error("Visibility must be private, public, or unlisted");

  const browser = await chromium.connectOverCDP("http://127.0.0.1:9223");
  const page = browser.contexts().flatMap((context) => context.pages())
    .find((candidate) => candidate.url().startsWith("https://studio.youtube.com"));
  if (!page) throw new Error("YouTube Studio page not found");
  page.on("dialog", async (dialog) => dialog.accept().catch(() => {}));

  await page.goto(`https://studio.youtube.com/video/${videoId}/edit`, {
    waitUntil: "domcontentloaded",
    timeout: 30_000
  });
  await page.locator("ytcp-video-metadata-editor").waitFor({ state: "visible", timeout: 45_000 });
  const headerText = String(await page.locator("body").innerText()).replace(/\s+/g, " ");
  if (!headerText.includes(videoId) && !page.url().includes(videoId)) throw new Error("Editor video ID mismatch");

  const visibilityEditor = await visible([
    page.locator("ytcp-video-metadata-visibility"),
    page.locator("#visibility")
  ].reduce((combined, locator) => combined ? combined.or(locator) : locator, null));
  if (!visibilityEditor) throw new Error("Visibility editor not found");
  await visibilityEditor.click();

  const targetName = visibility.toUpperCase();
  const option = await visible(page.locator(`tp-yt-paper-radio-button[name="${targetName}"]`));
  if (!option) throw new Error(`Visibility option not found: ${visibility}`);
  if ((await option.getAttribute("aria-checked")) !== "true") await option.click();

  const popupDone = await visible(page.locator("ytcp-video-visibility-edit-popup ytcp-button#save-button"));
  if (!popupDone) throw new Error("Visibility popup Done button not found");
  await waitEnabled(popupDone);
  await popupDone.click();
  await page.locator("ytcp-video-visibility-edit-popup").waitFor({ state: "hidden", timeout: 15_000 }).catch(() => {});

  const save = await visible(page.locator("ytcp-button#save-button"));
  if (!save) throw new Error("Main editor Save button not found");
  await waitEnabled(save);
  await save.click();
  await page.waitForTimeout(2_500);
  await page.reload({ waitUntil: "domcontentloaded", timeout: 30_000 });
  await page.locator("ytcp-video-metadata-editor").waitFor({ state: "visible", timeout: 45_000 });
  const editorText = String(await page.locator("ytcp-video-metadata-editor").innerText()).replace(/\s+/g, " ");
  const pattern = visibility === "public" ? /\bPublic\b/i : visibility === "private" ? /\bPrivate\b/i : /\bUnlisted\b/i;
  if (!pattern.test(editorText)) throw new Error(`Studio did not visibly confirm ${visibility}`);

  console.log(JSON.stringify({ success: true, channelId: CHANNEL_ID, videoId, visibility }, null, 2));
  setTimeout(() => process.exit(0), 0);
})().catch((error) => {
  console.error(JSON.stringify({ success: false, error: error.message }, null, 2));
  process.exit(1);
});
