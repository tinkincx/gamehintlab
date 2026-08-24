const base = "https://gamehintlab.com";

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
  const pageUrl = `${base}/videos/${expected.watchSlug}/`;
  const response = await fetch(pageUrl);
  const html = await response.text();
  assert(response.status === 200, `${expected.watchSlug}: page HTTP ${response.status}`);
  assert(html.includes(`<link rel="canonical" href="${pageUrl}"`), `${expected.watchSlug}: wrong canonical`);
  assert(html.includes('name="robots" content="index, follow"'), `${expected.watchSlug}: not indexable`);
  assert(html.includes("<video"), `${expected.slug}: missing video element`);
  assert(html.includes(`src=\"${expected.src}\"`), `${expected.slug}: missing MP4 source`);
  assert(html.includes(`poster=\"${expected.poster}\"`), `${expected.slug}: missing poster`);
  assert(html.includes(`src=\"${expected.captions}\"`), `${expected.slug}: missing captions track`);
  assert(
    html.includes(`<meta property=\"og:video\" content=\"${base}${expected.src}\"`),
    `${expected.slug}: missing Open Graph video`
  );

  const jsonBlocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
    .map((match) => JSON.parse(match[1]));
  const video = jsonBlocks.find((item) => item["@type"] === "VideoObject");
  assert(video, `${expected.slug}: missing VideoObject`);
  assert(video.contentUrl === `${base}${expected.src}`, `${expected.slug}: wrong contentUrl`);
  assert(video.thumbnailUrl === `${base}${expected.poster}`, `${expected.slug}: wrong thumbnailUrl`);
  assert(video.duration === expected.duration, `${expected.slug}: wrong duration`);
  assert(video.mainEntityOfPage?.["@id"] === `${pageUrl}#webpage`, `${expected.slug}: wrong watch-page entity link`);

  const guideResponse = await fetch(`${base}/grow-a-chicken-fighter/${expected.slug}/`);
  const guideHtml = await guideResponse.text();
  assert(guideResponse.status === 200 && guideHtml.includes("<video"), `${expected.slug}: guide embed failed`);

  const media = await fetch(`${base}${expected.src}`, { headers: { Range: "bytes=0-1023" } });
  assert(media.status === 206, `${expected.slug}: MP4 range HTTP ${media.status}`);
  assert(media.headers.get("content-type") === "video/mp4", `${expected.slug}: wrong MP4 content type`);
  assert(media.headers.get("content-range")?.startsWith("bytes 0-1023/"), `${expected.slug}: missing range support`);
  await media.arrayBuffer();

  const poster = await fetch(`${base}${expected.poster}`, { method: "HEAD" });
  const captions = await fetch(`${base}${expected.captions}`, { method: "HEAD" });
  assert(poster.status === 200 && poster.headers.get("content-type") === "image/png", `${expected.slug}: poster failed`);
  assert(captions.status === 200 && captions.headers.get("content-type")?.startsWith("text/vtt"), `${expected.slug}: captions failed`);
}

const videoSitemapResponse = await fetch(`${base}/video-sitemap.xml`);
const videoSitemap = await videoSitemapResponse.text();
assert(videoSitemapResponse.status === 200, "video sitemap failed");
assert((videoSitemap.match(/<video:video>/g) || []).length === 2, "video sitemap entry mismatch");
for (const expected of videos) {
  assert(videoSitemap.includes(`<loc>${base}/videos/${expected.watchSlug}/</loc>`), `video sitemap missing ${expected.watchSlug}`);
}

const regularSitemap = await (await fetch(`${base}/sitemap.xml`)).text();
assert(regularSitemap.includes(`${base}/videos/`), "regular sitemap missing video library");
for (const expected of videos) {
  assert(regularSitemap.includes(`${base}/videos/${expected.watchSlug}/`), `regular sitemap missing ${expected.watchSlug}`);
}

const robots = await (await fetch(`${base}/robots.txt`)).text();
assert(robots.includes(`Sitemap: ${base}/video-sitemap.xml`), "robots missing video sitemap");

const homeResponse = await fetch(`${base}/`);
const home = await homeResponse.text();
assert(homeResponse.status === 200, "homepage failed");
assert((home.match(/class="hub-video-card"/g) || []).length === 2, "homepage video cards missing");
assert(home.includes("August 19, 2026"), "homepage check date is stale");

console.log("Live video SEO QA passed: homepage cards, guide embeds, dedicated watch pages, MP4 ranges, captions, VideoObjects and both sitemaps are public.");
