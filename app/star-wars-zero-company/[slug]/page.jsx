import { notFound } from "next/navigation";
import { ZeroCompanyGuidePage } from "@/components/ZeroCompanyGuidePage";
import {
  zeroCompanyAbsoluteUrl,
  zeroCompanyGame,
  zeroCompanyPageList,
  zeroCompanyPages
} from "@/lib/zero-company";

export const dynamicParams = false;

export function generateStaticParams() {
  return zeroCompanyPageList.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = zeroCompanyPages[slug];
  if (!page) return {};

  const pageUrl = zeroCompanyAbsoluteUrl(page.slug);
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
        url: zeroCompanyGame.artPath,
        width: 616,
        height: 353,
        alt: "Official STAR WARS Zero Company Steam artwork"
      }]
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.description,
      images: [zeroCompanyGame.artPath]
    }
  };
}

export default async function ZeroCompanyArticleRoute({ params }) {
  const { slug } = await params;
  const page = zeroCompanyPages[slug];
  if (!page) notFound();
  return <ZeroCompanyGuidePage page={page} />;
}
