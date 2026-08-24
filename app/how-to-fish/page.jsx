import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  howToFishGame,
  howToFishPageList,
  howToFishPath
} from "@/lib/how-to-fish";
import { site } from "@/lib/site";

const description = "Fresh, source-checked How to Fish Steam guides for quests, bosses, controls, co-op, achievements, fish, weapons and all five islands.";

export const metadata = {
  title: { absolute: "How to Fish Steam Guides, Controls & Locations | Game Hint Lab" },
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
    title: "How to Fish Steam Guides",
    description,
    images: [{ url: howToFishGame.artPath, width: 1232, height: 706, alt: "Official How to Fish Steam artwork" }]
  },
  twitter: { card: "summary_large_image", title: "How to Fish Steam Guides", description, images: [howToFishGame.artPath] }
};

const labels = {
  "how-to-drop-items": "CONTROLS",
  "all-fish-locations": "COLLECTION",
  "all-guns-weapons": "WEAPONS",
  "how-to-get-shark": "QUEST",
  "how-many-islands": "PROGRESSION",
  "complete-walkthrough": "WALKTHROUGH",
  "how-to-get-boat-keys": "FIRST BOSS",
  "how-to-get-leeches": "QUEST",
  "how-to-beat-pufferfish": "BOSS",
  "how-to-finish-game": "ENDING",
  "achievements-guide": "ACHIEVEMENTS",
  "multiplayer-player-count": "CO-OP",
  "black-screen-fix": "FIX",
  "how-to-beat-terrorizing-bird": "BOSS",
  "how-to-beat-volcano-boss": "FINAL BOSS",
  "boat-engine-upgrades": "UPGRADES",
  "how-to-cook-fish": "COOKING",
  "save-file-location": "SAVE FILE",
  "how-to-use-boat-radar": "NAVIGATION",
  "console-crossplay": "PLATFORMS"
};

const hubFaqs = [
  {
    q: "What is How to Fish on Steam?",
    a: "How to Fish is a physics-based fishing game by Dazed Games. The launch store copy says 1–4 players, while official patch 1.0.4 raised online lobbies to a maximum of eight. Its loop is to catch, kill and sell fish, buy gear and weapons, complete quests, fight bosses and reach new islands."
  },
  {
    q: "How many islands are in How to Fish?",
    a: "The current player-documented progression route contains five islands, ending at the Volcano area. That count is based on the release-version route and may change in a later update."
  },
  {
    q: "Does How to Fish have achievements?",
    a: "Yes. The official Steam page lists 28 achievements, including Collector, Fishipedia, Grillmaster, Fully Equipped and We Are So Back."
  },
  {
    q: "How many players can play How to Fish?",
    a: "Official patch 1.0.4 raised the maximum online lobby size to eight. The older 1–4-player wording still appears in the launch store description, so the current patch notes are the newer source."
  },
  {
    q: "Are these guides official?",
    a: "No. Game Hint Lab is an independent guide site. Official Steam facts and player-reported discoveries are clearly separated on every page."
  }
];

export default function HowToFishHubPage() {
  const game = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: howToFishGame.name,
    url: howToFishGame.officialUrl,
    image: `${site.url}${howToFishGame.artPath}`,
    description: howToFishGame.description,
    gamePlatform: "Windows PC (Steam)",
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
      { "@type": "ListItem", position: 2, name: "How to Fish", item: `${site.url}/how-to-fish/` }
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
              <nav className="steam-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>How to Fish</span></nav>
              <div className="steam-badges"><span>JUST RELEASED</span><span>STEAM</span><span>UP TO 8 ONLINE</span></div>
              <h1>How to Fish<br /><em>answers that do not guess.</em></h1>
              <p>Controls, fish collection, weapons, the shark quest and island progression—checked against Steam and current player evidence while the launch build is still changing.</p>
              <div className="steam-hub-actions">
                <Link href={howToFishPath("complete-walkthrough")}>Open the walkthrough <span>→</span></Link>
                <a href={howToFishGame.officialUrl} target="_blank" rel="noreferrer">View on Steam ↗</a>
              </div>
              <dl className="steam-hub-stats">
                <div><dt>RELEASED</dt><dd>Aug 20, 2026</dd></div>
                <div><dt>ONLINE LOBBY</dt><dd>Up to 8 in patch 1.0.4</dd></div>
                <div><dt>ACHIEVEMENTS</dt><dd>28</dd></div>
                <div><dt>ISLANDS</dt><dd>5 in current route</dd></div>
              </dl>
            </div>
            <figure className="steam-hub-art">
              <img src={howToFishGame.artPath} alt="Official How to Fish Steam artwork" width="1232" height="706" />
              <figcaption><span>OFFICIAL STORE ART</span><b>Steam App 4001890</b></figcaption>
            </figure>
          </div>
        </section>

        <section className="shell steam-hub-section" id="answers">
          <header className="steam-section-header">
            <div><p className="hub-kicker">LAUNCH-WEEK QUESTIONS</p><h2>Pick the answer you need</h2></div>
            <p>{howToFishPageList.length} focused answers built around distinct search questions, not duplicate keyword-swapped pages.</p>
          </header>
          <div className="steam-question-grid">
            {howToFishPageList.map((page, index) => (
              <Link href={howToFishPath(page.slug)} className="steam-question-card" key={page.slug}>
                <div><span>{labels[page.slug] || "GUIDE"}</span><b>{String(index + 1).padStart(2, "0")}</b></div>
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
              <div><p className="hub-kicker">THE CONFIRMED LOOP</p><h2>What the developer actually promises</h2></div>
              <p>The store description gives the shape of the game. It does not publish every control, price or spawn table.</p>
            </header>
            <div className="steam-loop-grid">
              <article><span>01</span><h3>Catch, kill, sell</h3><p>Fish creatures, deal with them, then sell the result to fund the next upgrade.</p></article>
              <article><span>02</span><h3>Buy gear and weapons</h3><p>You begin without equipment and earn money for stronger fishing gear and firearms.</p></article>
              <article><span>03</span><h3>Quest and fight bosses</h3><p>Quests and bosses move the campaign forward and unlock more dangerous islands.</p></article>
              <article><span>04</span><h3>Fill the collection</h3><p>The official goal includes finding the rare variant of every fish; Steam calls the broad milestones Collector and Fishipedia.</p></article>
            </div>
          </div>
        </section>

        <section className="shell steam-hub-section steam-source-method">
          <div>
            <p className="hub-kicker">WHY SOME ANSWERS SAY “NOT CONFIRMED”</p>
            <h2>A useful answer is better than a made-up key.</h2>
          </div>
          <div className="steam-method-list">
            <article><span>1</span><div><h3>Developer-confirmed</h3><p>Steam store copy, official achievements and update notes.</p></div></article>
            <article><span>2</span><div><h3>Player-documented</h3><p>Current Steam guides and discussions, labeled with their limits.</p></div></article>
            <article><span>3</span><div><h3>Still unknown</h3><p>No invented drop key, spawn location, price or unlock condition just to fill a table.</p></div></article>
          </div>
        </section>

        <section className="shell steam-hub-section hub-faq">
          <header className="steam-section-header"><div><p className="hub-kicker">QUICK ANSWERS</p><h2>How to Fish FAQ</h2></div><p>Short answers with the uncertainty left intact.</p></header>
          <div className="faq-list">{hubFaqs.map((item) => <details key={item.q}><summary>{item.q}<span>+</span></summary><p>{item.a}</p></details>)}</div>
        </section>
      </main>
    </>
  );
}
