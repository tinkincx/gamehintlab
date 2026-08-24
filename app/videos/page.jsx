import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { gamePath, site } from "@/lib/site";
import { videoAbsoluteUrl, videoList, videoPath } from "@/lib/videos";

export const metadata = {
  title: "Grow a Chicken Fighter Video Guides",
  description:
    "Watch original Grow a Chicken Fighter video guides for the live Egg Index and Fuse screen, with English narration, captions and written evidence notes.",
  alternates: { canonical: "/videos/" },
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
    title: "Grow a Chicken Fighter Video Guides",
    description: "Original captioned videos for the Egg Index and Fuse screen.",
    url: `${site.url}/videos/`,
    type: "website",
    images: [{ url: `${site.url}/social-card.png`, width: 1200, height: 630, alt: "Game Hint Lab video guides" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow a Chicken Fighter Video Guides",
    description: "Original captioned videos for the Egg Index and Fuse screen.",
    images: [`${site.url}/social-card.png`]
  }
};

export default function VideoLibraryPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Grow a Chicken Fighter Video Guides",
    description: metadata.description,
    url: `${site.url}/videos/`,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url }
  };
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: videoList.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: videoAbsoluteUrl(item.slug)
    }))
  };

  return (
    <main className="video-library-page">
      <JsonLd data={pageSchema} />
      <JsonLd data={listSchema} />
      <section className="shell video-library-hero">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>→</span><span>Videos</span>
        </nav>
        <p className="eyebrow">Original visual guides</p>
        <h1>Grow a Chicken Fighter video guides</h1>
        <p className="video-library-intro">
          Two short, captioned walkthroughs built from the same source boundaries as the written guides.
          They show what to check on the live screen without inventing fixed odds, recipes or rewards.
        </p>
        <dl className="video-library-facts">
          <div><dt>VIDEOS</dt><dd>{videoList.length}</dd></div>
          <div><dt>LANGUAGE</dt><dd>English</dd></div>
          <div><dt>CAPTIONS</dt><dd>Included</dd></div>
          <div><dt>UPDATED</dt><dd>{site.checkedAt}</dd></div>
        </dl>
      </section>

      <section className="shell video-library-grid" aria-label="Video guides">
        {videoList.map((item) => (
          <article className="video-library-card" key={item.slug}>
            <Link className="video-library-poster" href={videoPath(item.slug)}>
              <img src={item.video.poster} alt={`${item.title} video poster`} width="1280" height="720" />
              <span>{item.durationLabel}</span>
            </Link>
            <div>
              <p className="eyebrow">{item.eyebrow}</p>
              <h2><Link href={videoPath(item.slug)}>{item.title}</Link></h2>
              <p>{item.intro}</p>
              <div className="video-library-actions">
                <Link className="hub-primary" href={videoPath(item.slug)}>Watch video <span>→</span></Link>
                <Link href={gamePath(item.guideSlug)}>Read full guide</Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="shell video-library-note">
        <p className="hub-kicker">WHAT THESE VIDEOS DO</p>
        <h2>Use the screen in front of you</h2>
        <p>
          Grow a Chicken Fighter can change after an update. Each video separates developer-listed systems
          from controls observed in recorded gameplay, then points you back to the current in-game screen for changing values.
        </p>
      </section>
    </main>
  );
}
