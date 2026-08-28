import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  howToFishGame,
  howToFishPath,
  publishedHowToFishPageList
} from "@/lib/how-to-fish";
import { site } from "@/lib/site";

const description = "Current, source-checked answers for the How to Fish Steam game: Spider Crab boat keys, Pufferfish, 8-player co-op, console plans and Steam Deck support.";

export const metadata = {
  title: { absolute: "How to Fish Game Guides: Bosses, Multiplayer & Platforms | Game Hint Lab" },
  description,
  alternates: { canonical: "/how-to-fish/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-video-preview": -1, "max-snippet": -1 }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${site.url}/how-to-fish/`,
    siteName: site.name,
    title: "How to Fish Game Guides",
    description,
    images: [{ url: howToFishGame.artPath, width: 1232, height: 706, alt: "Official artwork for the How to Fish Steam game" }]
  },
  twitter: { card: "summary_large_image", title: "How to Fish Game Guides", description, images: [howToFishGame.artPath] }
};

const labels = {
  "console-crossplay": "PLATFORMS",
  "how-to-get-boat-keys": "FIRST BOSS",
  "how-to-beat-pufferfish": "ISLAND 3 BOSS",
  "multiplayer-player-count": "CO-OP"
};

const hubFaqs = [
  {
    q: "What is the How to Fish game?",
    a: "How to Fish is a physics-based fishing and combat game by Dazed Games, released for Windows on Steam on August 20, 2026. This section is about that game, not real-world fishing advice."
  },
  {
    q: "How many players can play How to Fish?",
    a: "Official Patch 1.0.4 raised online lobbies to eight players. Patch 1.0.5 added invite-only private lobbies."
  },
  {
    q: "Is How to Fish coming to PS5, Xbox, Switch or Mac?",
    a: "Dazed Games says console and Mac versions are planned, but has not named the console platforms or announced a release date."
  },
  {
    q: "Does How to Fish support crossplay?",
    a: "No official cross-platform multiplayer details have been announced. The current released multiplayer version is the Windows Steam version."
  },
  {
    q: "Is How to Fish Steam Deck Verified?",
    a: "Yes. Steam currently marks How to Fish as Verified and reports that its controller, glyph, interface-text and default-performance checks pass."
  }
];

export default function HowToFishHubPage() {
  const game = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: howToFishGame.name,
    url: `${site.url}/how-to-fish/`,
    sameAs: [howToFishGame.officialUrl, "https://dazed.games/"],
    identifier: `Steam App ${howToFishGame.appId}`,
    image: `${site.url}${howToFishGame.artPath}`,
    description,
    gamePlatform: "Windows PC (Steam)",
    operatingSystem: "Windows 10 or newer",
    applicationCategory: "Game",
    numberOfPlayers: { "@type": "QuantitativeValue", minValue: 1, maxValue: 8 },
    author: { "@type": "Organization", name: howToFishGame.developer },
    datePublished: howToFishGame.releaseDateIso
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "How to Fish game guides", item: `${site.url}/how-to-fish/` }
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
              <nav className="steam-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>How to Fish game</span></nav>
              <div className="steam-badges"><span>STEAM GAME</span><span>CHECKED AUG 28</span><span>4 LIVE ANSWERS</span></div>
              <h1>How to Fish game guides<br />{" "}<em>current answers, no filler.</em></h1>
              <p>This is the guide hub for Dazed Games&apos; How to Fish on Steam. It focuses on four questions people can act on now: the first boat keys, the Pufferfish route, current co-op limits and platform support.</p>
              <div className="steam-hub-actions">
                <a href="#answers">Choose a guide <span>↓</span></a>
                <a href={howToFishGame.officialUrl} target="_blank" rel="noreferrer">View the official Steam page ↗</a>
              </div>
              <dl className="steam-hub-stats">
                <div><dt>RELEASED</dt><dd>August 20, 2026</dd></div>
                <div><dt>LATEST CHECK</dt><dd>Patch 1.0.10</dd></div>
                <div><dt>ONLINE LOBBY</dt><dd>Up to 8 players</dd></div>
                <div><dt>STEAM DECK</dt><dd>Verified</dd></div>
              </dl>
            </div>
            <figure className="steam-hub-art">
              <img src={howToFishGame.artPath} alt="Official artwork for the How to Fish Steam game" width="1232" height="706" />
              <figcaption><span>OFFICIAL STORE ART</span><b>Steam App 4001890</b></figcaption>
            </figure>
          </div>
        </section>

        <section className="shell steam-hub-section" id="answers">
          <header className="steam-section-header">
            <div><p className="hub-kicker">CURRENT SEARCH ANSWERS</p><h2>Start with the exact problem</h2></div>
            <p>{publishedHowToFishPageList.length} pages are live. Unverified save paths, incomplete fish lists and stale walkthrough claims stay unpublished until they can answer the title honestly.</p>
          </header>
          <div className="steam-question-grid">
            {publishedHowToFishPageList.map((page, index) => (
              <Link href={howToFishPath(page.slug)} className="steam-question-card" key={page.slug}>
                <div><span>{labels[page.slug]}</span><b>{String(index + 1).padStart(2, "0")}</b></div>
                <h2>{page.cardTitle || page.title}</h2>
                <p>{page.cardSummary || page.description}</p>
                <strong>Read the answer →</strong>
              </Link>
            ))}
          </div>
        </section>

        <section className="steam-route-band">
          <div className="shell steam-hub-section">
            <header className="steam-section-header light">
              <div><p className="hub-kicker">WHAT CHANGED AFTER LAUNCH</p><h2>Store copy is not always the newest source</h2></div>
              <p>Official patch notes override older launch wording when they describe a newer game state.</p>
            </header>
            <div className="steam-loop-grid">
              <article><span>1.0.4</span><h3>Eight-player lobbies</h3><p>The official patch raised the online lobby limit from the older four-player store wording to eight.</p></article>
              <article><span>1.0.5</span><h3>Private sessions</h3><p>Invite-only lobbies and an in-game session-type setting were added; changing type requires a restart.</p></article>
              <article><span>1.0.9</span><h3>Difficulty choices</h3><p>Easy, Normal and Hard now change creature health and damage, including boss fights.</p></article>
              <article><span>NOW</span><h3>Deck Verified</h3><p>Steam&apos;s current compatibility report passes controller, glyph, text and default-performance checks.</p></article>
            </div>
          </div>
        </section>

        <section className="shell steam-hub-section steam-source-method">
          <div>
            <p className="hub-kicker">EVIDENCE RULE</p>
            <h2>Official facts and player routes are not the same thing.</h2>
          </div>
          <div className="steam-method-list">
            <article><span>1</span><div><h3><a href={howToFishGame.officialUrl} target="_blank" rel="noreferrer">Steam store ↗</a></h3><p>Release, Windows support, feature list, developer and the basic game loop.</p></div></article>
            <article><span>2</span><div><h3><a href="https://steamcommunity.com/app/4001890/allnews/" target="_blank" rel="noreferrer">Official patches ↗</a></h3><p>Current lobby, difficulty, connection and balance changes checked through Patch 1.0.10.</p></div></article>
            <article><span>3</span><div><h3><a href="https://dazed.games/" target="_blank" rel="noreferrer">Developer FAQ ↗</a></h3><p>Console and Mac versions are planned, but platforms and timing remain unannounced.</p></div></article>
          </div>
        </section>

        <section className="shell steam-hub-section hub-faq">
          <header className="steam-section-header"><div><p className="hub-kicker">QUICK ANSWERS</p><h2>How to Fish game FAQ</h2></div><p>Short answers based on the latest source checked on August 28, 2026.</p></header>
          <div className="faq-list">{hubFaqs.map((item) => <details key={item.q}><summary>{item.q}<span>+</span></summary><p>{item.a}</p></details>)}</div>
        </section>
      </main>
    </>
  );
}
