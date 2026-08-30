import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  zeroCompanyGame,
  zeroCompanyPageList,
  zeroCompanySources
} from "@/lib/zero-company";
import { site } from "@/lib/site";

const description =
  "Current, source-checked STAR WARS Zero Company answers for crashes and stuttering, Steam Deck support, manual saves, Permadeath and Beskar Mode.";

export const metadata = {
  title: { absolute: "STAR WARS Zero Company Guides: Fixes, Deck & Difficulty | Game Hint Lab" },
  description,
  alternates: { canonical: zeroCompanyGame.path },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-video-preview": -1, "max-snippet": -1 }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: zeroCompanyGame.absoluteUrl,
    siteName: site.name,
    title: "STAR WARS Zero Company Guides",
    description,
    images: [{ url: zeroCompanyGame.artPath, width: 616, height: 353, alt: "Official STAR WARS Zero Company Steam artwork" }]
  },
  twitter: { card: "summary_large_image", title: "STAR WARS Zero Company Guides", description, images: [zeroCompanyGame.artPath] }
};

const hubFaqs = [
  {
    q: "When did STAR WARS Zero Company release?",
    a: "Electronic Arts released STAR WARS Zero Company on August 27, 2026 for PC, PlayStation 5 and Xbox Series X|S."
  },
  {
    q: "Is STAR WARS Zero Company Steam Deck Verified?",
    a: "No. Valve's live compatibility result currently marks the game Unsupported and says SteamOS does not support it."
  },
  {
    q: "Why does STAR WARS Zero Company stutter on PC?",
    a: "There is no single cause for every PC. Bit Reactor describes the game as CPU-bound and recommends TSR, DLSS or FSR for its published targets. EA also recommends checking updates, background apps, files and drivers."
  },
  {
    q: "Can you manually save in Beskar Mode?",
    a: "No. EA says Beskar Mode limits the Campaign to one game save and disables manual saving. The choice cannot be changed after the Campaign starts."
  },
  {
    q: "Is this an official STAR WARS Zero Company website?",
    a: "No. Game Hint Lab is an independent guide site. Official EA, Steam and developer sources are linked on every page."
  }
];

export default function ZeroCompanyHubPage() {
  const game = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: zeroCompanyGame.name,
    url: zeroCompanyGame.officialEaUrl,
    sameAs: [zeroCompanyGame.officialEaUrl, zeroCompanyGame.officialUrl],
    identifier: `Steam App ${zeroCompanyGame.appId}`,
    image: `${site.url}${zeroCompanyGame.artPath}`,
    description,
    gamePlatform: ["Windows PC", "PlayStation 5", "Xbox Series X|S"],
    operatingSystem: "Windows 10 or Windows 11",
    applicationCategory: "Game",
    playMode: "SinglePlayer",
    author: { "@type": "Organization", name: zeroCompanyGame.developer },
    publisher: { "@type": "Organization", name: zeroCompanyGame.publisher },
    datePublished: zeroCompanyGame.releaseDateIso
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "STAR WARS Zero Company guides", item: zeroCompanyGame.absoluteUrl }
    ]
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hubFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  };

  return (
    <>
      <JsonLd data={game} />
      <JsonLd data={breadcrumb} />
      <JsonLd data={faq} />
      <main className="steam-hub-page">
        <section className="steam-hub-hero">
          <div className="shell steam-hub-hero-grid">
            <div className="steam-hub-copy">
              <nav className="steam-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>STAR WARS Zero Company</span></nav>
              <div className="steam-badges"><span>NEW RELEASE</span><span>CHECKED AUG 30</span><span>{zeroCompanyPageList.length} LIVE ANSWERS</span></div>
              <h1>STAR WARS Zero Company<br /> <em>fix the problem in front of you.</em></h1>
              <p>This launch-week guide hub starts with three decisions that can cost time or money: whether the PC fix order matches your symptom, whether Steam Deck is a sensible platform, and which difficulty, Permadeath and Beskar settings you actually want.</p>
              <div className="steam-hub-actions">
                <a href="#answers">Choose an answer <span>↓</span></a>
                <a href={zeroCompanyGame.officialUrl} target="_blank" rel="noreferrer">View the official Steam page ↗</a>
              </div>
              <dl className="steam-hub-stats">
                <div><dt>RELEASED</dt><dd>August 27, 2026</dd></div>
                <div><dt>PLATFORMS</dt><dd>PC · PS5 · Xbox Series</dd></div>
                <div><dt>MODE</dt><dd>Single-player tactics</dd></div>
                <div><dt>STEAM DECK</dt><dd>Unsupported</dd></div>
              </dl>
            </div>
            <figure className="steam-hub-art">
              <img src={zeroCompanyGame.artPath} alt="Official STAR WARS Zero Company Steam artwork" width="616" height="353" />
              <figcaption><span>OFFICIAL STORE ART</span><b>Steam App 2075800</b></figcaption>
            </figure>
          </div>
        </section>

        <section className="shell steam-hub-section" id="answers">
          <header className="steam-section-header">
            <div><p className="hub-kicker">CURRENT SEARCH ANSWERS</p><h2>Start with the exact problem</h2></div>
            <p>{zeroCompanyPageList.length} focused pages are live. Broad build rankings stay unpublished until the site sees a real query or can add something the current search results do not already answer.</p>
          </header>
          <div className="steam-question-grid">
            {zeroCompanyPageList.map((page, index) => (
              <Link href={page.path} className="steam-question-card" key={page.slug}>
                <div><span>{page.label}</span><b>{String(index + 1).padStart(2, "0")}</b></div>
                <h2>{page.cardTitle}</h2>
                <p>{page.cardSummary}</p>
                <strong>Read the current answer →</strong>
              </Link>
            ))}
          </div>
        </section>

        <section className="steam-route-band">
          <div className="shell steam-hub-section">
            <header className="steam-section-header light">
              <div><p className="hub-kicker">THREE DECISIONS, THREE DIFFERENT SIGNALS</p><h2>Do not mix support status, performance and game rules</h2></div>
              <p>Each answer uses the source that can actually establish it.</p>
            </header>
            <div className="steam-loop-grid">
              <article><span>PC</span><h3>Crash and stutter order</h3><p>EA's reversible troubleshooting sequence comes before random launch-week tweaks.</p></article>
              <article><span>DECK</span><h3>Live compatibility status</h3><p>Valve currently says Unsupported; an independent test explains why a forced boot is not enough.</p></article>
              <article><span>DIFFICULTY</span><h3>Campaign choices lock</h3><p>EA lists four difficulty levels and confirms one-save Beskar Mode plus Campaign-locked Permadeath.</p></article>
              <article><span>NEXT</span><h3>GSC decides expansion</h3><p>New pages are added only after search queries reveal a specific unanswered player problem.</p></article>
            </div>
          </div>
        </section>

        <section className="shell steam-hub-section steam-source-method">
          <div>
            <p className="hub-kicker">EVIDENCE RULE</p>
            <h2>The source must match the claim.</h2>
          </div>
          <div className="steam-method-list">
            <article><span>1</span><div><h3><a href={zeroCompanySources.troubleshooting.url} target="_blank" rel="noreferrer">EA troubleshooting ↗</a></h3><p>Official fix order for crashes, black screens, stuttering and low frame rates.</p></div></article>
            <article><span>2</span><div><h3><a href={zeroCompanySources.deckReport.url} target="_blank" rel="noreferrer">Valve compatibility ↗</a></h3><p>The live Steam Deck category, checked separately from anecdotes about whether the game can boot.</p></div></article>
            <article><span>3</span><div><h3><a href={zeroCompanySources.combatGuide.url} target="_blank" rel="noreferrer">EA campaign rules ↗</a></h3><p>Campaign saves, locked Permadeath choices, Beskar Mode and the three-injury rule.</p></div></article>
          </div>
        </section>

        <section className="shell steam-hub-section hub-faq">
          <header className="steam-section-header"><div><p className="hub-kicker">QUICK ANSWERS</p><h2>STAR WARS Zero Company FAQ</h2></div><p>Short answers checked on August 30, 2026.</p></header>
          <div className="faq-list">{hubFaqs.map((item) => <details key={item.q}><summary>{item.q}<span>+</span></summary><p>{item.a}</p></details>)}</div>
        </section>
      </main>
    </>
  );
}
