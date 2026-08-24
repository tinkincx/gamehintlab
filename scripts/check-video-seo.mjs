import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "out");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const videos = [
  {
    slug: "eggs",
    watchSlug: "egg-index-guide",
    src: "/media/grow-a-chicken-fighter-egg-index-guide.mp4",
    poster: "/media/grow-a-chicken-fighter-egg-index-guide-poster.png",
    captions: "/media/grow-a-chicken-fighter-egg-index-guide.en.vtt",
    duration: "PT1M7S"
  },
  {
    slug: "fusion-mutations",
    watchSlug: "fusion-screen-guide",
    src: "/media/grow-a-chicken-fighter-fusion-guide.mp4",
    poster: "/media/grow-a-chicken-fighter-fusion-guide-poster.png",
    captions: "/media/grow-a-chicken-fighter-fusion-guide.en.vtt",
    duration: "PT1M12S"
  }
];

for (const expected of videos) {
  const guideHtml = fs.readFileSync(path.join(out, "grow-a-chicken-fighter", expected.slug, "index.html"), "utf8");
  const watchHtml = fs.readFileSync(path.join(out, "videos", expected.watchSlug, "index.html"), "utf8");
  for (const [pageType, html] of [["guide", guideHtml], ["watch", watchHtml]]) {
    assert(html.includes("<video"), `${expected.slug} ${pageType}: missing video element`);
    assert(html.includes(`src=\"${expected.src}\"`), `${expected.slug} ${pageType}: missing MP4 source`);
    assert(html.includes(`poster=\"${expected.poster}\"`), `${expected.slug} ${pageType}: missing poster`);
    assert(html.includes(`src=\"${expected.captions}\"`), `${expected.slug} ${pageType}: missing captions track`);
  }

  assert(watchHtml.includes('name="robots" content="index, follow"'), `${expected.watchSlug}: not indexable`);
  assert(watchHtml.includes(`rel="canonical" href="https://gamehintlab.com/videos/${expected.watchSlug}/"`), `${expected.watchSlug}: wrong canonical`);
  assert((watchHtml.match(/<h1/g) || []).length === 1, `${expected.watchSlug}: expected one H1`);

  const jsonBlocks = [...watchHtml.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
    .map((match) => JSON.parse(match[1]));
  const video = jsonBlocks.find((item) => item["@type"] === "VideoObject");
  assert(video, `${expected.slug}: missing VideoObject`);
  assert(video.contentUrl === `https://gamehintlab.com${expected.src}`, `${expected.slug}: wrong contentUrl`);
  assert(video.thumbnailUrl === `https://gamehintlab.com${expected.poster}`, `${expected.slug}: wrong thumbnailUrl`);
  assert(video.duration === expected.duration, `${expected.slug}: wrong duration`);
  assert(video.uploadDate === "2026-08-19T00:00:00+08:00", `${expected.slug}: wrong uploadDate`);
  assert(video.mainEntityOfPage?.["@id"] === `https://gamehintlab.com/videos/${expected.watchSlug}/#webpage`, `${expected.slug}: wrong watch-page entity link`);

  for (const publicPath of [expected.src, expected.poster, expected.captions]) {
    const filePath = path.join(out, ...publicPath.split("/").filter(Boolean));
    assert(fs.existsSync(filePath), `${expected.slug}: missing exported ${publicPath}`);
    assert(fs.statSync(filePath).size > 0, `${expected.slug}: empty exported ${publicPath}`);
  }
}

const sitemap = fs.readFileSync(path.join(out, "video-sitemap.xml"), "utf8");
assert((sitemap.match(/<video:video>/g) || []).length === 2, "video sitemap must contain exactly two videos");
for (const expected of videos) {
  assert(sitemap.includes(`https://gamehintlab.com${expected.src}`), `video sitemap missing ${expected.src}`);
  assert(sitemap.includes(`https://gamehintlab.com${expected.poster}`), `video sitemap missing ${expected.poster}`);
  assert(sitemap.includes(`<loc>https://gamehintlab.com/videos/${expected.watchSlug}/</loc>`), `video sitemap missing watch page ${expected.watchSlug}`);
}

const regularSitemap = fs.readFileSync(path.join(out, "sitemap.xml"), "utf8");
assert(regularSitemap.includes("https://gamehintlab.com/videos/"), "regular sitemap missing video library");
for (const expected of videos) {
  assert(regularSitemap.includes(`https://gamehintlab.com/videos/${expected.watchSlug}/`), `regular sitemap missing ${expected.watchSlug}`);
}

const robots = fs.readFileSync(path.join(out, "robots.txt"), "utf8");
assert(robots.includes("Sitemap: https://gamehintlab.com/sitemap.xml"), "robots missing regular sitemap");
assert(robots.includes("Sitemap: https://gamehintlab.com/video-sitemap.xml"), "robots missing video sitemap");

console.log("Video SEO QA passed: 2 guide embeds, 2 watch pages, 2 caption tracks, 2 VideoObjects and both sitemaps.");
