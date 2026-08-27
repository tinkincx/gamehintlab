import Link from "next/link";
import { ArticleSections } from "@/components/ArticleSections";
import { ArticleVideo } from "@/components/ArticleVideo";
import { JsonLd } from "@/components/JsonLd";
import { publishedGuides } from "@/lib/publishing";
import { getGuideSocialCard } from "@/lib/social-cards";
import { absoluteUrl, gameAbsoluteUrl, gamePath, pages, site } from "@/lib/site";

const publishedGuideSlugs = new Set(publishedGuides.map((guide) => guide.slug));

const relatedGuideLabels = {
  codes: "Open current codes",
  "arena-ascension-egg": "Open the Arena update",
  "beginner-guide": "Follow the beginner route",
  eggs: "Find Thunder & Nest routes",
  abilities: "Compare the best skills",
  "fusion-mutations": "Preview fusion safely",
  "rebirth-guide": "Prepare for rebirth",
  "official-links": "Open verified game links"
};

function formatIsoDate(isoDate) {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" })
    .format(new Date(`${isoDate}T00:00:00Z`));
}

export function ArticlePage({ page }) {
  const guideRoutes = publishedGuides;
  const currentIndex = guideRoutes.findIndex((item) => item.slug === page.slug);
  const previousGuide = currentIndex > 0 ? guideRoutes[currentIndex - 1] : null;
  const nextGuide = currentIndex >= 0 && currentIndex < guideRoutes.length - 1 ? guideRoutes[currentIndex + 1] : null;
  const relatedGuides = (page.relatedSlugs || guideRoutes.map((item) => item.slug))
    .filter((slug) => slug !== page.slug && pages[slug] && publishedGuideSlugs.has(slug))
    .slice(0, 4);
  const inlineRelatedGuides = publishedGuideSlugs.has(page.slug) ? relatedGuides.slice(0, 3) : [];
  const pageUpdatedAtIso = page.updatedAtIso || site.checkedAtIso;
  const pageCheckedAtIso = page.checkedAtIso || pageUpdatedAtIso;
  const pagePublishedAt = formatIsoDate(site.publishedAtIso);
  const pageUpdatedAt = formatIsoDate(pageUpdatedAtIso);
  const pageCheckedAt = formatIsoDate(pageCheckedAtIso);
  const socialCard = getGuideSocialCard(page.slug);
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() },
      { "@type": "ListItem", position: 2, name: page.shortTitle, item: gameAbsoluteUrl(page.slug) }
    ]
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  };
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    url: gameAbsoluteUrl(page.slug),
    mainEntityOfPage: gameAbsoluteUrl(page.slug),
    datePublished: site.publishedAtIso,
    dateModified: pageUpdatedAtIso,
    inLanguage: "en",
    image: {
      "@type": "ImageObject",
      url: `${site.url}${socialCard.url}`,
      width: 1200,
      height: 630
    },
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    about: { "@type": "VideoGame", name: site.gameName, gamePlatform: "Roblox" }
  };
  const videoId = page.video ? `${gameAbsoluteUrl(page.slug)}#video` : null;
  if (videoId) article.video = { "@id": videoId };
  const video = page.video
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "@id": videoId,
        name: page.video.name,
        description: page.video.description,
        thumbnailUrl: `${site.url}${page.video.poster}`,
        uploadDate: `${page.video.uploadDate}T00:00:00+08:00`,
        duration: page.video.duration,
        contentUrl: `${site.url}${page.video.src}`,
        mainEntityOfPage: gameAbsoluteUrl(page.slug),
        inLanguage: "en",
        isFamilyFriendly: true,
        publisher: { "@type": "Organization", name: site.name, url: site.url }
      }
    : null;
  const game = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: site.gameName,
    url: site.officialGameUrl,
    gamePlatform: "Roblox",
    applicationCategory: "Game",
    author: { "@type": "Organization", name: "Sergio Verse Games" },
    dateCreated: "2026-06-16"
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={faq} />
      <JsonLd data={article} />
      <JsonLd data={game} />
      {video ? <JsonLd data={video} /> : null}
      <main>
        <div className="article-hero-wrap">
          <div className="hero-grid-bg" />
          <div className="shell article-hero">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span>{page.shortTitle}</span>
            </nav>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className="article-intro">{page.intro}</p>
            <div className="article-meta">
              <span>Published by <Link href="/about/">Game Hint Lab</Link></span>
              <span>First published {pagePublishedAt}</span>
              <span>Evidence checked {pageCheckedAt}</span>
              {pageCheckedAtIso !== pageUpdatedAtIso ? <span>Updated {pageUpdatedAt}</span> : null}
              <span>{page.sections.length} sections</span>
            </div>
          </div>
        </div>

        <div className="shell article-layout">
          <article className="article-body">
            <section className="quick-answer">
              <div><span aria-hidden="true">!</span><strong>Quick answer</strong></div>
              <p>{page.answer}</p>
              {inlineRelatedGuides.length ? (
                <nav className="quick-answer-links" aria-label="Related guides">
                  {inlineRelatedGuides.map((slug) => (
                    <Link href={gamePath(slug)} key={slug}>
                      {relatedGuideLabels[slug] || pages[slug].shortTitle}<span aria-hidden="true">&rarr;</span>
                    </Link>
                  ))}
                </nav>
              ) : null}
            </section>

            <ArticleVideo video={page.video} />

            <nav className="article-mobile-toc" aria-label="On this page">
              <strong>On this page</strong>
              {page.video ? <a href="#video-guide">Video walkthrough</a> : null}
              {page.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}>{section.heading}</a>)}
            </nav>

            <ArticleSections sections={page.sections.slice(0, 1)} />

            <ArticleSections sections={page.sections.slice(1)} startIndex={1} />

            <section className="article-section faq-section">
              <div className="section-heading"><span>FAQ</span><h2>Frequently asked questions</h2></div>
              <div className="faq-list">
                {page.faqs.map((item) => (
                  <details key={item.q}>
                    <summary>{item.q}<span aria-hidden="true">+</span></summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="sources-panel" id="sources">
              <p className="eyebrow">Sources</p>
              <h2>Where this information comes from</h2>
              <ul>
                {page.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noreferrer">{source.label} &nearr;</a>
                    <span>{source.note}</span>
                  </li>
                ))}
              </ul>
              <p className="updated-note">Evidence checked {pageCheckedAt}. Game updates can change details.</p>
              <p className="updated-note">Prepared by Game Hint Lab from the cited official pages, current guide reports and timestamped gameplay sources. Software may assist organization and drafting, but it is not treated as evidence. Read our <Link href="/about/#method">editorial and verification method</Link>.</p>
            </section>

            <nav className="article-more-guides" aria-label="Previous and next guides">
              <h2>Continue with</h2>
              <div>
                {previousGuide ? <Link href={gamePath(previousGuide.slug)}><small>Previous</small><span>{pages[previousGuide.slug].shortTitle}</span><b>←</b></Link> : null}
                {nextGuide ? <Link href={gamePath(nextGuide.slug)}><small>Next</small><span>{pages[nextGuide.slug].shortTitle}</span><b>→</b></Link> : null}
              </div>
            </nav>
          </article>

          <aside className="article-sidebar">
            <div className="side-card">
              <p className="eyebrow">On this page</p>
              {page.video ? <a href="#video-guide">Video walkthrough</a> : null}
              {page.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}>{section.heading}</a>)}
              <a href="#sources">Sources</a>
            </div>
            <div className="side-card side-guide-card">
              <img className="side-guide-icon" src="/game-grow-chicken-fighter.svg" alt="" width="56" height="56" />
              <h2>Continue the guide</h2>
              {relatedGuides.map((slug) => (
                <Link href={gamePath(slug)} key={slug}>{pages[slug].shortTitle}<span>&rarr;</span></Link>
              ))}
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
