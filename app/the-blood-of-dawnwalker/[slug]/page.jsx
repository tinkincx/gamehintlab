import { notFound } from "next/navigation";
import { DawnwalkerGuidePage } from "@/components/DawnwalkerGuidePage";
import {
  dawnwalkerAbsoluteUrl,
  dawnwalkerGame,
  dawnwalkerPageList,
  dawnwalkerPages
} from "@/lib/dawnwalker";

export const dynamicParams = false;

export function generateStaticParams() {
  return dawnwalkerPageList.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = dawnwalkerPages[slug];
  if (!page) return {};

  const pageUrl = dawnwalkerAbsoluteUrl(page.slug);
  return {
    title: { absolute: `${page.seoTitle} | Game Hint Lab` },
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
      publishedTime: page.publishedAtIso,
      modifiedTime: page.updatedAtIso,
      images: [{
        url: dawnwalkerGame.artPath,
        width: 616,
        height: 353,
        alt: "Official The Blood of Dawnwalker Steam artwork"
      }]
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.description,
      images: [dawnwalkerGame.artPath]
    }
  };
}

export default async function DawnwalkerArticleRoute({ params }) {
  const { slug } = await params;
  const page = dawnwalkerPages[slug];
  if (!page) notFound();
  return <DawnwalkerGuidePage page={page} />;
}
