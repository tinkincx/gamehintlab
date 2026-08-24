const path = require("node:path");
const fs = require("node:fs");
const { chromium } = require("C:/Users/WINDOWS/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright");

const baseUrl = process.argv[2] || "http://127.0.0.1:4173";
const outputDir = path.resolve("qa-how-to-fish");
fs.mkdirSync(outputDir, { recursive: true });

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
  });
  const checks = [
    { name: "hub-desktop", url: "/how-to-fish/", viewport: { width: 1440, height: 1200 } },
    { name: "hub-mobile", url: "/how-to-fish/", viewport: { width: 390, height: 844 } },
    { name: "walkthrough-desktop", url: "/how-to-fish/complete-walkthrough/", viewport: { width: 1440, height: 1200 } },
    { name: "achievements-desktop", url: "/how-to-fish/achievements-guide/", viewport: { width: 1440, height: 1200 } },
    { name: "radar-mobile", url: "/how-to-fish/how-to-use-boat-radar/", viewport: { width: 390, height: 844 } },
    { name: "console-mobile", url: "/how-to-fish/console-crossplay/", viewport: { width: 390, height: 844 } }
  ];
  const results = [];

  for (const check of checks) {
    const page = await browser.newPage({ viewport: check.viewport, deviceScaleFactor: 1 });
    page.setDefaultTimeout(60000);
    await page.addInitScript(() => {
      window.localStorage.setItem("gamehintlab-measurement-consent-v3", "denied");
    });
    await page.route(/googleapis\.com|gstatic\.com|googletagmanager\.com/, (route) => route.abort());
    const errors = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(`${baseUrl}${check.url}`, { waitUntil: "domcontentloaded", timeout: 15000 });
    await page.waitForTimeout(900);
    const dimensions = await page.evaluate(() => ({
      documentWidth: document.documentElement.scrollWidth,
      viewportWidth: document.documentElement.clientWidth,
      title: document.title,
      h1: document.querySelector("h1")?.textContent?.trim() || ""
    }));
    const screenshot = path.join(outputDir, `${check.name}.png`);
    await page.screenshot({ path: screenshot, fullPage: false, timeout: 60000 });
    results.push({
      name: check.name,
      status: response?.status(),
      overflow: dimensions.documentWidth > dimensions.viewportWidth,
      ...dimensions,
      consoleErrors: errors,
      screenshot
    });
    await page.close();
  }

  await browser.close();
  process.stdout.write(`${JSON.stringify(results, null, 2)}\n`);
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
