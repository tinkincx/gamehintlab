import { publishedGuides } from "@/lib/publishing";
import { howToFishAbsoluteUrl, howToFishGame, howToFishPageList } from "@/lib/how-to-fish";
import { gameAbsoluteUrl, pages, site } from "@/lib/site";
import { validationPages, validationPageAbsoluteUrl } from "@/lib/validation-pages";
import { videoAbsoluteUrl, videoList } from "@/lib/videos";

export const dynamic = "force-static";

export default function sitemap() {
  return [
    { url: `${site.url}/`, lastModified: howToFishGame.updatedAtIso, changeFrequency: "daily", priority: 1 },
    { url: howToFishAbsoluteUrl(), lastModified: howToFishGame.updatedAtIso, changeFrequency: "daily", priority: 0.95 },
    ...howToFishPageList.map((page) => ({
      url: howToFishAbsoluteUrl(page.slug),
      lastModified: page.updatedAtIso,
      changeFrequency: "daily",
      priority: 0.9
    })),
    ...publishedGuides.map((guide) => ({
      url: gameAbsoluteUrl(guide.slug),
      lastModified: pages[guide.slug].updatedAtIso || site.checkedAtIso,
      changeFrequency: guide.changeFrequency,
      priority: guide.priority
    })),
    ...validationPages.map((page) => ({
      url: validationPageAbsoluteUrl(page, site.url),
      lastModified: page.updatedAtIso,
      changeFrequency: "daily",
      priority: 0.8
    })),
    { url: `${site.url}/videos/`, lastModified: "2026-08-19", changeFrequency: "weekly", priority: 0.75 },
    ...videoList.map((video) => ({
      url: videoAbsoluteUrl(video.slug),
      lastModified: video.video.uploadDate,
      changeFrequency: "weekly",
      priority: 0.82
    })),
    { url: `${site.url}/about/`, lastModified: "2026-08-13", changeFrequency: "monthly", priority: 0.4 },
    { url: `${site.url}/contact/`, lastModified: "2026-08-13", changeFrequency: "monthly", priority: 0.4 },
    { url: `${site.url}/privacy/`, lastModified: "2026-08-19", changeFrequency: "monthly", priority: 0.3 },
    { url: `${site.url}/terms/`, lastModified: "2026-08-13", changeFrequency: "monthly", priority: 0.3 }
  ];
}
