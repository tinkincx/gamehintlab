import { publishedGuides } from "@/lib/publishing";
import { gameAbsoluteUrl, pages, site } from "@/lib/site";
import { videoAbsoluteUrl, videoList } from "@/lib/videos";

export const dynamic = "force-static";

export default function sitemap() {
  const homeLastModified = [
    ...publishedGuides.map((guide) => pages[guide.slug].updatedAtIso || site.checkedAtIso)
  ].reduce((latest, current) => current > latest ? current : latest, site.checkedAtIso);

  return [
    { url: `${site.url}/`, lastModified: homeLastModified, changeFrequency: "daily", priority: 1 },
    ...publishedGuides.map((guide) => ({
      url: gameAbsoluteUrl(guide.slug),
      lastModified: pages[guide.slug].updatedAtIso || site.checkedAtIso,
      changeFrequency: guide.changeFrequency,
      priority: guide.priority
    })),
    { url: `${site.url}/videos/`, lastModified: "2026-08-19", changeFrequency: "weekly", priority: 0.75 },
    ...videoList.map((video) => ({
      url: videoAbsoluteUrl(video.slug),
      lastModified: video.video.uploadDate,
      changeFrequency: "weekly",
      priority: 0.82
    })),
    { url: `${site.url}/about/`, lastModified: "2026-08-28", changeFrequency: "monthly", priority: 0.4 },
    { url: `${site.url}/contact/`, lastModified: "2026-08-28", changeFrequency: "monthly", priority: 0.4 },
    { url: `${site.url}/privacy/`, lastModified: "2026-08-28", changeFrequency: "monthly", priority: 0.3 },
    { url: `${site.url}/terms/`, lastModified: "2026-08-28", changeFrequency: "monthly", priority: 0.3 }
  ];
}
