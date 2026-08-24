import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const host = "gamehintlab.com";
const key = "94d7908dd8ac454483956c9e2452d28a";
const keyLocation = `https://${host}/${key}.txt`;
const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sitemapPath = resolve(projectRoot, "out", "sitemap.xml");
const sitemap = await readFile(sitemapPath, "utf8");
const urlList = [...sitemap.matchAll(/<loc>(https:\/\/gamehintlab\.com\/[^<]*)<\/loc>/g)].map(
  ([, url]) => url
);

if (!urlList.length) {
  throw new Error(`No ${host} URLs found in ${sitemapPath}`);
}

const response = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation, urlList })
});

if (!response.ok) {
  const body = await response.text();
  throw new Error(`IndexNow submission failed (${response.status}): ${body}`);
}

console.log(`IndexNow accepted ${urlList.length} updated URLs for ${host} (${response.status}).`);
