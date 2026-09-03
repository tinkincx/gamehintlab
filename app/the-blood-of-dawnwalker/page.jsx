import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  dawnwalkerGame,
  dawnwalkerPageList,
  dawnwalkerSources
} from "@/lib/dawnwalker";
import { site } from "@/lib/site";

const description =
  "Current, source-checked The Blood of Dawnwalker guides for the 30-day timer, PC stuttering and frame generation, and the best early Swordmastery, Witchcraft and Vampirism skills.";

export const metadata = {
  title: { absolute: "The Blood of Dawnwalker Guides & Wiki | Game Hint Lab" },
  description,
  alternates: { canonical: dawnwalkerGame.path },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-video-preview": -1, "max-snippet": -1 }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: dawnwalkerGame.absoluteUrl,
    siteName: site.name,
    title: "The Blood of Dawnwalker Guides",
    description,
    images: [{ url: dawnwalkerGame.artPath, width: 616, height: 353, alt: "Official The Blood of Dawnwalker Steam artwork" }]
  },
  twitter: { card: "summary_large_image", title: "The Blood of Dawnwalker Guides", description, images: [dawnwalkerGame.artPath] }
};

const hubFaqs = [
  {
    q: "When did The Blood of Dawnwalker release?",
    a: "The Blood of Dawnwalker launched globally on September 3, 2026 for PC, PlayStation 5 and Xbox Series X|S. Steam may display September 2 in some time zones."
  },
  {
    q: "Does the Dawnwalker 30-day timer run in real time?",
    a: "No. Rebel Wolves says free exploration and combat do not advance it. Only marked quest completions and certain actions or dialogue choices pay a displayed time cost."
  },
  {
    q: "Does The Blood of Dawnwalker end after 30 days?",
    a: "No. The developer says missing the deadline does not end the game, although Coen's family may face story consequences."
  },
  {
    q: "What should I try first for Dawnwalker stuttering?",
    a: "Install it on an SSD, verify files, close overlays, use one upscaler and begin at High. Change one setting at a time; some players report that restarting after changing frame generation made the result measurable on their systems."
  },
  {
    q: "What is the best first skill tree in Dawnwalker?",
    a: "Swordmastery is the safest beginner foundation because it remains usable during both day and night. Witchcraft is available by day and Vampirism by night."
  },
  {
    q: "Is Game Hint Lab an official Dawnwalker website?",
    a: "No. Game Hint Lab is an independent guide site. Official Rebel Wolves, Bandai Namco and Steam sources are linked and separated from reviews or player reports."
  }
];

export default function DawnwalkerHubPage() {
  const game = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: dawnwalkerGame.name,
    url: dawnwalkerGame.officialGameUrl,
    sameAs: [dawnwalkerGame.officialGameUrl, dawnwalkerGame.officialUrl],
    identifier: `Steam App ${dawnwalkerGame.appId}`,
    image: `${site.url}${dawnwalkerGame.artPath}`,
    description,
    gamePlatform: ["Windows PC", "PlayStation 5", "Xbox Series X|S"],
    operatingSystem: "Windows 10 or later",
    applicationCategory: "Game",
    playMode: "SinglePlayer",
    author: { "@type": "Organization", name: dawnwalkerGame.developer },
    publisher: { "@type": "Organization", name: dawnwalkerGame.publisher },
    datePublished: dawnwalkerGame.releaseDateIso
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "The Blood of Dawnwalker guides", item: dawnwalkerGame.absoluteUrl }
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
              <nav className="steam-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>The Blood of Dawnwalker</span></nav>
              <div className="steam-badges"><span>NEW RELEASE</span><span>CHECKED SEP 3</span><span>{dawnwalkerPageList.length} SEARCH TESTS</span></div>
              <h1>The Blood of Dawnwalker<br /> <em>spend time on the choice that matters.</em></h1>
              <p>This launch guide hub begins with three high-intent questions: what actually moves the 30-day clock, how to diagnose PC stuttering and frame generation, and which skills give a beginner a reliable day-and-night foundation.</p>
              <div className="steam-hub-actions">
                <a href="#answers">Choose an answer <span>↓</span></a>
                <a href={dawnwalkerGame.officialUrl} target="_blank" rel="noreferrer">View the official Steam page ↗</a>
              </div>
              <dl className="steam-hub-stats">
                <div><dt>RELEASED</dt><dd>September 3, 2026</dd></div>
                <div><dt>PLATFORMS</dt><dd>PC · PS5 · Xbox Series</dd></div>
                <div><dt>MODE</dt><dd>Single-player action RPG</dd></div>
                <div><dt>CORE CHOICE</dt><dd>Human by day · Vampire by night</dd></div>
              </dl>
            </div>
            <figure className="steam-hub-art">
              <img src={dawnwalkerGame.artPath} alt="Official The Blood of Dawnwalker Steam artwork" width="616" height="353" />
              <figcaption><span>OFFICIAL STORE ART</span><b>Steam App 3751260</b></figcaption>
            </figure>
          </div>
        </section>

        <section className="shell steam-hub-section" id="answers">
          <header className="steam-section-header">
            <div><p className="hub-kicker">FIRST SEARCH TESTS</p><h2>Start with the exact decision</h2></div>
            <p>{dawnwalkerPageList.length} focused pages are live. More pages are added only if real search impressions or player questions justify them.</p>
          </header>
          <div className="steam-question-grid">
            {dawnwalkerPageList.map((page, index) => (
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
              <div><p className="hub-kicker">THREE PROBLEMS, DIFFERENT EVIDENCE</p><h2>Do not mix game rules, hardware facts and player reports</h2></div>
              <p>Each answer uses the evidence that can actually support it.</p>
            </header>
            <div className="steam-loop-grid">
              <article><span>TIME</span><h3>The clock is event-driven</h3><p>Rebel Wolves explains which choices move time, when the cost appears and why exploration is free.</p></article>
              <article><span>PC</span><h3>Measure one change</h3><p>Official requirements set the floor; repeatable tests and labeled reports guide the troubleshooting order.</p></article>
              <article><span>BUILD</span><h3>Cover day and night</h3><p>Official tree rules define availability and gates; named perk priorities remain editorial choices.</p></article>
            </div>
          </div>
        </section>

        <section className="shell steam-hub-section steam-source-method">
          <div>
            <p className="hub-kicker">EVIDENCE RULE</p>
            <h2>The source must match the claim.</h2>
          </div>
          <div className="steam-method-list">
            <article><span>1</span><div><h3><a href={dawnwalkerSources.officialTimer.url} target="_blank" rel="noreferrer">Rebel Wolves timer answer ↗</a></h3><p>The 30-day deadline, marked time costs, free exploration and what happens after the deadline.</p></div></article>
            <article><span>2</span><div><h3><a href={dawnwalkerSources.officialStore.url} target="_blank" rel="noreferrer">Official Steam requirements ↗</a></h3><p>The current hardware floor, storage requirement, release and platform facts.</p></div></article>
            <article><span>3</span><div><h3><a href={dawnwalkerSources.officialSkills.url} target="_blank" rel="noreferrer">Official skills bulletin ↗</a></h3><p>Tree availability, shared points, manuals, corruption and learning costs.</p></div></article>
            <article><span>4</span><div><h3><a href={dawnwalkerSources.stutterReports.url} target="_blank" rel="noreferrer">Current player reports ↗</a></h3><p>Useful launch symptoms, kept separate from developer-confirmed causes or fixes.</p></div></article>
          </div>
        </section>

        <section className="shell steam-hub-section hub-faq">
          <header className="steam-section-header"><div><p className="hub-kicker">QUICK ANSWERS</p><h2>The Blood of Dawnwalker FAQ</h2></div><p>Short answers checked on September 3, 2026.</p></header>
          <div className="faq-list">{hubFaqs.map((item) => <details key={item.q}><summary>{item.q}<span>+</span></summary><p>{item.a}</p></details>)}</div>
        </section>
      </main>
    </>
  );
}
