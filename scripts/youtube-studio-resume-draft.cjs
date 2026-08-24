"use strict";

const { chromium } = require("C:/Users/WINDOWS/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright");

const CHANNEL_ID = "UC-SJS7kOStyuAAltmwNv5_A";
const EXPECTED_VIDEO_ID = process.argv[2] || "fqUHJRLJaaU";

async function firstVisible(locators) {
  for (const locator of locators) {
    const count = await locator.count().catch(() => 0);
    for (let index = 0; index < count; index += 1) {
      const item = locator.nth(index);
      if (await item.isVisible().catch(() => false)) return item;
    }
  }
  return null;
}

(async () => {
  const browser = await chromium.connectOverCDP("http://127.0.0.1:9223");
  const page = browser.contexts().flatMap((context) => context.pages())
    .find((candidate) => candidate.url().startsWith("https://studio.youtube.com"));
  if (!page) throw new Error("YouTube Studio page not found");
  if (!page.url().includes(CHANNEL_ID)) throw new Error("Unexpected YouTube channel");

  page.on("dialog", async (dialog) => {
    await dialog.accept().catch(() => {});
  });

  const dialog = await firstVisible([page.locator("ytcp-uploads-dialog")]);
  if (!dialog) throw new Error("Visible upload draft dialog not found");
  const videoId = await dialog.getAttribute("video-id");
  if (videoId !== EXPECTED_VIDEO_ID) {
    throw new Error(`Unexpected draft video ID: ${videoId || "missing"}`);
  }

  let step = String(await dialog.getAttribute("workflow-step") || "").toUpperCase();
  if (step === "CHECKS") {
    const checks = String(await dialog.innerText()).replace(/\s+/g, " ").trim();
    if (!/Checks complete[.!]?\s*No issues found/i.test(checks)) {
      throw new Error("Checks are not complete and clean; leaving draft private");
    }
    const next = await firstVisible([
      dialog.locator("ytcp-button#next-button"),
      dialog.getByRole("button", { name: "Next" })
    ]);
    if (!next || !(await next.isEnabled())) throw new Error("Checks Next button is not ready");
    await next.click();
    await page.waitForFunction(
      () => document.querySelector("ytcp-uploads-dialog")?.getAttribute("workflow-step") === "VISIBILITY",
      null,
      { timeout: 15_000 }
    );
    step = "VISIBILITY";
  }

  if (step !== "VISIBILITY") throw new Error(`Unsupported draft step: ${step || "unknown"}`);
  const privateChoice = await firstVisible([
    dialog.locator('tp-yt-paper-radio-button[name="PRIVATE"]'),
    dialog.getByText(/^Private$/i, { exact: true })
  ]);
  if (!privateChoice) throw new Error("Private visibility choice not found");
  if ((await privateChoice.getAttribute("aria-checked")) !== "true") await privateChoice.click();

  const done = await firstVisible([
    dialog.locator("ytcp-button#done-button"),
    dialog.getByRole("button", { name: /^(Save|Publish)$/i })
  ]);
  if (!done) throw new Error("Save button not found");
  const deadline = Date.now() + 30_000;
  while (!(await done.isEnabled().catch(() => false)) && Date.now() < deadline) {
    await page.waitForTimeout(500);
  }
  if (!(await done.isEnabled().catch(() => false))) throw new Error("Save button did not become enabled");
  await done.click();
  await page.waitForTimeout(2_500);

  const stillVisible = await dialog.isVisible().catch(() => false);
  console.log(JSON.stringify({
    channelId: CHANNEL_ID,
    videoId,
    savedAs: "private",
    dialogStillVisible: stillVisible
  }, null, 2));
  setTimeout(() => process.exit(0), 0);
})().catch((error) => {
  console.error(JSON.stringify({ error: error.message, safetyState: "draft-or-private" }, null, 2));
  process.exit(1);
});
