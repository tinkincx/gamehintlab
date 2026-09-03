import Link from "next/link";
import { ArticleSections } from "@/components/ArticleSections";
import { JsonLd } from "@/components/JsonLd";
import {
  dawnwalkerAbsoluteUrl,
  dawnwalkerGame,
  dawnwalkerPages,
  dawnwalkerPath
} from "@/lib/dawnwalker";
import { site } from "@/lib/site";

function formatDate(isoDate) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "UTC"
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

export function DawnwalkerGuidePage({ page }) {
  const pageUrl = dawnwalkerAbsoluteUrl(page.slug);
  const checkedAt = formatDate(page.updatedAtIso);
  const relatedPages = (page.relatedSlugs || [])
    .map((slug) => dawnwalkerPages[slug])
    .filter(Boolean);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: dawnwalkerGame.name, item: dawnwalkerGame.absoluteUrl },
      { "@type": "ListItem", position: 3, name: page.title, item: pageUrl }
    ]
  };
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    datePublished: page.publishedAtIso,
    dateModified: page.updatedAtIso,
    inLanguage: "en",
    image: `${site.url}${dawnwalkerGame.artPath}`,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    about: {
      "@type": "VideoGame",
      name: dawnwalkerGame.name,
      url: dawnwalkerGame.officialGameUrl,
      sameAs: [dawnwalkerGame.officialGameUrl, dawnwalkerGame.officialUrl],
      identifier: `Steam App ${dawnwalkerGame.appId}`,
      gamePlatform: ["Windows PC", "PlayStation 5", "Xbox Series X|S"]
    }
  };
  const game = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: dawnwalkerGame.name,
    url: dawnwalkerGame.officialGameUrl,
    sameAs: [dawnwalkerGame.officialGameUrl, dawnwalkerGame.officialUrl],
    identifier: `Steam App ${dawnwalkerGame.appId}`,
    image: `${site.url}${dawnwalkerGame.artPath}`,
    gamePlatform: ["Windows PC", "PlayStation 5", "Xbox Series X|S"],
    operatingSystem: "Windows 10 or later",
    applicationCategory: "Game",
    playMode: "SinglePlayer",
    author: { "@type": "Organization", name: dawnwalkerGame.developer },
    publisher: { "@type": "Organization", name: dawnwalkerGame.publisher },
    datePublished: dawnwalkerGame.releaseDateIso
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

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={article} />
      <JsonLd data={game} />
      <JsonLd data={faq} />
      <main className="steam-guide-page">
        <div className="article-hero-wrap steam-article-hero-wrap">
          <div className="hero-grid-bg" />
          <div className="shell article-hero steam-article-hero">
            <div>
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span>/</span>
                <Link href={dawnwalkerGame.path}>Dawnwalker</Link><span>/</span>
                <span>{page.breadcrumbLabel || page.title}</span>
              </nav>
              <p className="eyebrow">THE BLOOD OF DAWNWALKER · CURRENT ANSWER</p>
              <h1>{page.title}</h1>
              <p className="article-intro">{page.intro}</p>
              <div className="article-meta">
                <span>Checked {checkedAt}</span>
                <span>Official facts separated from reports</span>
                <span>{page.sections.length} sections</span>
              </div>
            </div>
            <img
              className="steam-article-art"
              src={dawnwalkerGame.artPath}
              alt="Official The Blood of Dawnwalker Steam artwork"
              width="616"
              height="353"
            />
          </div>
        </div>

        <div className="shell article-layout">
          <article className="article-body">
            <section className="quick-answer steam-quick-answer">
              <div><span aria-hidden="true">!</span><strong>Quick answer</strong></div>
              <p>{page.quickAnswer}</p>
              <nav className="quick-answer-links" aria-label="Primary actions">
                <a href={dawnwalkerGame.officialUrl} target="_blank" rel="noreferrer">Open the official Steam page <span aria-hidden="true">↗</span></a>
                <a href="#section-1">See the evidence <span aria-hidden="true">↓</span></a>
              </nav>
            </section>

            <div className="steam-evidence-note">
              <strong>{page.evidenceTitle}</strong>
              <span>{page.evidenceNote}</span>
            </div>

            <nav className="article-mobile-toc" aria-label="On this page">
              <strong>On this page</strong>
              {page.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}>{section.heading}</a>)}
              <a href="#sources">Sources</a>
            </nav>

            <ArticleSections sections={page.sections} />

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
              <h2>What this answer is based on</h2>
              <p className="sources-policy">Official Rebel Wolves, Bandai Namco and Steam material establishes game rules and requirements. Reviews and player reports are labeled and never presented as developer guarantees.</p>
              <ul>
                {page.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noreferrer">{source.label} <span aria-hidden="true">↗</span></a>
                    <span>{source.note}</span>
                  </li>
                ))}
              </ul>
              <p className="updated-note">Checked {checkedAt}. Launch-week settings, fixes and balance can change quickly.</p>
            </section>

            {relatedPages.length ? (
              <section className="article-more-guides">
                <h2>Continue with The Blood of Dawnwalker</h2>
                <div>
                  {relatedPages.map((related) => (
                    <Link href={dawnwalkerPath(related.slug)} key={related.slug}>
                      <small>Related answer</small><span>{related.cardTitle || related.title}</span><b>→</b>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}
          </article>

          <aside className="article-sidebar">
            <div className="side-card">
              <p className="eyebrow">On this page</p>
              {page.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}>{section.heading}</a>)}
              <a href="#sources">Sources</a>
            </div>
            <div className="side-card side-guide-card steam-side-card">
              <img src={dawnwalkerGame.artPath} alt="" width="616" height="353" />
              <h2>The Blood of Dawnwalker</h2>
              <a href={dawnwalkerGame.officialUrl} target="_blank" rel="noreferrer">View on Steam <span>↗</span></a>
              <Link href={dawnwalkerGame.path}>All Dawnwalker answers <span>→</span></Link>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
