import { publishedGuides } from "@/lib/publishing";
import {
  howToFishGame,
  publishedHowToFishPageList
} from "@/lib/how-to-fish";
import { gameAbsoluteUrl, pages, site } from "@/lib/site";
import { videoAbsoluteUrl, videoList } from "@/lib/videos";
import {
  zeroCompanyGame,
  zeroCompanyPageList
} from "@/lib/zero-company";
import {
  dawnwalkerGame,
  dawnwalkerPageList
} from "@/lib/dawnwalker";

export const dynamic = "force-static";

export default function sitemap() {
  const homeLastModified = [
    ...publishedGuides.map((guide) => pages[guide.slug].updatedAtIso || site.checkedAtIso),
    howToFishGame.updatedAtIso,
    ...publishedHowToFishPageList.map((page) => page.updatedAtIso),
    zeroCompanyGame.updatedAtIso,
    ...zeroCompanyPageList.map((page) => page.updatedAtIso),
    dawnwalkerGame.updatedAtIso,
    ...dawnwalkerPageList.map((page) => page.updatedAtIso)
  ].reduce((latest, current) => current > latest ? current : latest, site.checkedAtIso);

  return [
    { url: `${site.url}/`, lastModified: homeLastModified, changeFrequency: "daily", priority: 1 },
    ...publishedGuides.map((guide) => ({
      url: gameAbsoluteUrl(guide.slug),
      lastModified: pages[guide.slug].updatedAtIso || site.checkedAtIso,
      changeFrequency: guide.changeFrequency,
      priority: guide.priority
    })),
    { url: `${site.url}/how-to-fish/`, lastModified: howToFishGame.updatedAtIso, changeFrequency: "daily", priority: 0.92 },
    ...publishedHowToFishPageList.map((page) => ({
      url: `${site.url}${page.path}`,
      lastModified: page.updatedAtIso,
      changeFrequency: "weekly",
      priority: 0.86
    })),
    { url: zeroCompanyGame.absoluteUrl, lastModified: zeroCompanyGame.updatedAtIso, changeFrequency: "daily", priority: 0.95 },
    ...zeroCompanyPageList.map((page) => ({
      url: `${site.url}${page.path}`,
      lastModified: page.updatedAtIso,
      changeFrequency: "daily",
      priority: 0.9
    })),
    { url: dawnwalkerGame.absoluteUrl, lastModified: dawnwalkerGame.updatedAtIso, changeFrequency: "daily", priority: 0.95 },
    ...dawnwalkerPageList.map((page) => ({
      url: `${site.url}${page.path}`,
      lastModified: page.updatedAtIso,
      changeFrequency: "daily",
      priority: 0.9
    })),
    { url: `${site.url}/videos/`, lastModified: "2026-08-19", changeFrequency: "weekly", priority: 0.75 },
    ...videoList.map((video) => ({
      url: videoAbsoluteUrl(video.slug),
      lastModified: video.video.uploadDate,
      changeFrequency: "weekly",
      priority: 0.82
    })),
    { url: `${site.url}/shadow-dungeon/difficulty/`, lastModified: "2026-08-28", changeFrequency: "daily", priority: 0.84 },
    { url: `${site.url}/about/`, lastModified: "2026-08-28", changeFrequency: "monthly", priority: 0.4 },
    { url: `${site.url}/contact/`, lastModified: "2026-08-28", changeFrequency: "monthly", priority: 0.4 },
    { url: `${site.url}/privacy/`, lastModified: "2026-08-28", changeFrequency: "monthly", priority: 0.3 },
    { url: `${site.url}/terms/`, lastModified: "2026-08-28", changeFrequency: "monthly", priority: 0.3 }
  ];
}
