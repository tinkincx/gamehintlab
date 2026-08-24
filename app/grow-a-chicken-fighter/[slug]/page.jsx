import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/ArticlePage";
import { indexableGuideSlugs } from "@/lib/publishing";
import { getGuideSocialCard } from "@/lib/social-cards";
import { allRoutes, gameAbsoluteUrl, gamePath, pages, site } from "@/lib/site";

export function generateStaticParams() {
  return allRoutes.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return {};
  const metadataTitle = page.seoTitle || page.title;
  const socialCard = getGuideSocialCard(slug);
  const noIndex = !indexableGuideSlugs.has(slug);
  const robots = noIndex
    ? { index: false, follow: true }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-video-preview": -1,
          "max-snippet": -1
        }
      };
  return {
    title: metadataTitle,
    description: page.description,
    alternates: { canonical: gamePath(page.slug) },
    robots,
    openGraph: {
      type: "article",
      title: metadataTitle,
      description: page.description,
      url: gameAbsoluteUrl(page.slug),
      modifiedTime: page.updatedAtIso || site.checkedAtIso,
      images: [{ url: socialCard.url, width: 1200, height: 630, alt: socialCard.alt }],
      ...(page.video
        ? {
            videos: [
              {
                url: `${site.url}${page.video.src}`,
                secureUrl: `${site.url}${page.video.src}`,
                type: "video/mp4",
                width: page.video.width,
                height: page.video.height
              }
            ]
          }
        : {})
    },
    twitter: { card: "summary_large_image", title: metadataTitle, description: page.description, images: [socialCard.url] }
  };
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  return <ArticlePage page={page} />;
}
