import { notFound } from "next/navigation";
import { HowToFishGuidePage } from "@/components/HowToFishGuidePage";
import {
  howToFishAbsoluteUrl,
  howToFishGame,
  publishedHowToFishPageList,
  publishedHowToFishPages
} from "@/lib/how-to-fish";

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedHowToFishPageList.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = publishedHowToFishPages[slug];
  if (!page) return {};

  const pageUrl = howToFishAbsoluteUrl(page.slug);
  return {
    title: { absolute: page.seoTitle },
    description: page.description,
    alternates: { canonical: page.path },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1
      }
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: pageUrl,
      siteName: "Game Hint Lab",
      title: page.seoTitle,
      description: page.description,
      publishedTime: page.publishedAtIso || "2026-08-23",
      modifiedTime: page.updatedAtIso,
      images: [{
        url: howToFishGame.artPath,
        width: 1232,
        height: 706,
        alt: "Official artwork for the How to Fish Steam game"
      }]
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.description,
      images: [howToFishGame.artPath]
    }
  };
}

export default async function HowToFishArticleRoute({ params }) {
  const { slug } = await params;
  const page = publishedHowToFishPages[slug];
  if (!page) notFound();
  return <HowToFishGuidePage page={page} />;
}
