import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleVideo } from "@/components/ArticleVideo";
import { JsonLd } from "@/components/JsonLd";
import { gamePath, site } from "@/lib/site";
import { videoAbsoluteUrl, videoLibrary, videoList, videoPath } from "@/lib/videos";

export const dynamicParams = false;

export function generateStaticParams() {
  return videoList.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = videoLibrary[slug];
  if (!item) return {};

  const url = videoAbsoluteUrl(item.slug);
  const videoUrl = `${site.url}${item.video.src}`;
  const posterUrl = `${site.url}${item.video.poster}`;

  return {
    title: item.seoTitle,
    description: item.intro,
    alternates: { canonical: videoPath(item.slug) },
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
      type: "video.other",
      title: item.title,
      description: item.intro,
      url,
      images: [{ url: posterUrl, width: 1280, height: 720, alt: `${item.title} video poster` }],
      videos: [{ url: videoUrl, secureUrl: videoUrl, type: "video/mp4", width: item.video.width, height: item.video.height }]
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.intro,
      images: [posterUrl]
    }
  };
}

export default async function VideoWatchPage({ params }) {
  const { slug } = await params;
  const item = videoLibrary[slug];
  if (!item) notFound();

  const url = videoAbsoluteUrl(item.slug);
  const otherVideo = videoList.find((candidate) => candidate.slug !== item.slug);
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Video guides", item: `${site.url}/videos/` },
      { "@type": "ListItem", position: 3, name: item.title, item: url }
    ]
  };
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: item.title,
    description: item.intro,
    datePublished: item.video.uploadDate,
    dateModified: item.video.uploadDate,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url }
  };
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${url}#video`,
    name: item.video.name,
    description: item.video.description,
    thumbnailUrl: `${site.url}${item.video.poster}`,
    uploadDate: `${item.video.uploadDate}T00:00:00+08:00`,
    duration: item.video.duration,
    contentUrl: `${site.url}${item.video.src}`,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    inLanguage: "en",
    isFamilyFriendly: true,
    isAccessibleForFree: true,
    publisher: { "@type": "Organization", name: site.name, url: site.url }
  };

  return (
    <main className="watch-page">
      <JsonLd data={breadcrumb} />
      <JsonLd data={pageSchema} />
      <JsonLd data={videoSchema} />

      <article className="shell watch-page-inner">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>→</span><Link href="/videos/">Videos</Link><span>→</span><span>{item.title}</span>
        </nav>
        <header className="watch-header">
          <p className="eyebrow">{item.eyebrow}</p>
          <h1>{item.title}</h1>
          <p>{item.intro}</p>
          <div className="watch-meta">
            <span>{item.durationLabel}</span>
            <span>English narration</span>
            <span>Captions included</span>
            <span>Updated {site.checkedAt}</span>
          </div>
        </header>

        <ArticleVideo video={item.video} showHeading={false} />

        <div className="watch-actions">
          <Link className="hub-primary" href={gamePath(item.guideSlug)}>Read the full written guide <span>→</span></Link>
          <a href={item.video.src} download>Download MP4</a>
        </div>

        <section className="watch-section" id="chapters">
          <p className="hub-kicker">VIDEO CHAPTERS</p>
          <h2>What the walkthrough covers</h2>
          <div className="watch-chapters">
            {item.chapters.map((chapter) => (
              <article key={chapter.time}>
                <span>{chapter.time}</span>
                <div><h3>{chapter.title}</h3><p>{chapter.text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="watch-section watch-boundaries">
          <p className="hub-kicker">CHECK BEFORE YOU ACT</p>
          <h2>What this video does not assume</h2>
          <ul>{item.boundaries.map((boundary) => <li key={boundary}>{boundary}</li>)}</ul>
        </section>

        <section className="watch-section watch-transcript">
          <details>
            <summary>Read the full English transcript <span>+</span></summary>
            <div>{item.transcript.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </details>
        </section>

        <nav className="watch-next" aria-label="More video guides">
          <div><span>MORE VIDEOS</span><Link href="/videos/">View the video library</Link></div>
          {otherVideo ? <div><span>NEXT WATCH</span><Link href={videoPath(otherVideo.slug)}>{otherVideo.title} →</Link></div> : null}
        </nav>
      </article>
    </main>
  );
}
