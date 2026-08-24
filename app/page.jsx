import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { howToFishGame, howToFishPageList, howToFishPages, howToFishPath } from "@/lib/how-to-fish";
import { indexableGuideSlugs } from "@/lib/publishing";
import { gamePath, pageList, pages, researchPageList, site } from "@/lib/site";
import { validationPages } from "@/lib/validation-pages";
import { videoPath } from "@/lib/videos";

const liveSlugs = indexableGuideSlugs;
const trendingGuide = validationPages[0];

function formatIsoDate(isoDate) {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" })
    .format(new Date(`${isoDate}T00:00:00Z`));
}

const codesCheckedAt = formatIsoDate(pages.codes.updatedAtIso);

export const metadata = {
  title: { absolute: "Game Hint Lab: Fresh Game Guides & Search Answers" },
  description: site.description,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-video-preview": -1, "max-snippet": -1 }
  }
};

const goals = [
  { tag: "STARTER", status: "LIVE", title: "I'm new to the game", text: "Follow a recorded first-session route through Recycler cash, Feeder levels, Tower fights, fusion and rebirth.", slug: "beginner-guide" },
  { tag: "CODES", status: "LIVE", title: "Check the WELCOME code", text: `See the developer-listed code, its ${codesCheckedAt} check date, EGGSCELLENT reports and quick redemption fixes.`, slug: "codes" },
  { tag: "UPDATE", status: "LIVE", title: "Unlock the Ascension Egg", text: "See the official Arena, trophy, Rebirth milestone and Admin Abuse details before the event ends August 29.", slug: "arena-ascension-egg" },
  { tag: "EGGS", status: "LIVE", title: "Find Thunder & Nest routes", text: "Check the reported community reward and event routes, then verify the live Index before spending.", slug: "eggs" },
  { tag: "FUSION", status: "LIVE", title: "Preview fusion safely", text: "Choose two chickens, inspect the trait lock, result preview and displayed cost before confirming.", slug: "fusion-mutations" },
  { tag: "PROGRESSION", status: "LIVE", title: "Prepare for rebirth", text: "See what the developer confirms, what a current guide reports resets, and what to verify on the live screen.", slug: "rebirth-guide" },
];

const summaries = {
  codes: "The developer-listed code, reported alternatives and redemption fixes.",
  "arena-ascension-egg": "Official Arena, trophy, Rebirth milestone, Ascension Egg and Admin Abuse details.",
  "official-links": "The Roblox experience, creator group and reported community destination.",
  "beginner-guide": "Recycler, Feeder, Tower, Index, Fuse and Rebirth for a first session.",
  chickens: "What chickens do, how Index shows egg sources and how to compare units.",
  eggs: "Flock and Index, source eggs, community rewards, event drops and offline eggs.",
  abilities: "Cross-checked ability consensus for Tower, Pit, survival and control.",
  "fusion-mutations": "How to open Fuse, select two chickens, inspect traits, preview the result and check cost.",
  "rebirth-guide": "Official purpose, current guide-reported resets and a pre-confirmation checklist.",
  "best-chickens-tier-list": "The comparisons still needed before naming a best chicken."
};

const categories = {
  codes: "UTILITY",
  "arena-ascension-egg": "UPDATE",
  "official-links": "OFFICIAL",
  "beginner-guide": "STARTER",
  chickens: "COLLECTION",
  eggs: "COLLECTION",
  abilities: "COMBAT",
  "fusion-mutations": "PROGRESSION",
  "rebirth-guide": "PROGRESSION",
  "best-chickens-tier-list": "RANKINGS"
};

const homeFaqs = [
  { q: "What is the current Grow a Chicken Fighter code?", a: `WELCOME appeared in the developer's Roblox description when checked on ${codesCheckedAt}. The official description did not state its reward.` },
  { q: "How do I get the Ascension Egg?", a: "The official Arena event ties the Ascension Egg to new Rebirth milestones. Check the live milestone panel because Roblox does not publish the exact required Rebirth count in the event description." },
  { q: "What should a new player do first?", a: "A recorded fresh-account route starts by collecting recyclables for Recycler cash, then upgrading Recycler for money or Feeder for chicken levels before pushing the Tower." },
  { q: "How does fusion work?", a: "The official description confirms two chicken inputs and a mutated result. Current gameplay also shows a base, donor, locked fields, a preview and a displayed cost; read all of them before confirming." },
  { q: "What resets when I rebirth?", a: "A current third-party guide reports that money and troop level reset while the chicken collection remains. Verify the complete list and earning benefit on the live Rebirth screen." }
];

const allGuides = [...pageList, ...researchPageList];

export default function HomePage() {
  const website = { "@context": "https://schema.org", "@type": "WebSite", name: site.name, url: site.url, description: site.description, inLanguage: "en" };
  const game = { "@context": "https://schema.org", "@type": "VideoGame", name: site.gameName, url: site.officialGameUrl, gamePlatform: "Roblox", applicationCategory: "Game", author: { "@type": "Organization", name: "Sergio Verse Games" } };
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: homeFaqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };

  return (
    <>
      <JsonLd data={website} /><JsonLd data={game} /><JsonLd data={faq} />
      <main className="guide-hub">
        <section className="hub-masthead shell">
          <div className="hub-masthead-art" aria-hidden="true">
            <img src="/game-grow-chicken-fighter.svg" alt="" width="330" height="330" />
            <i /><i /><i />
          </div>
          <div className="hub-masthead-copy">
            <div className="hub-badges"><span>UNOFFICIAL FAN GUIDE</span><span>ROBLOX</span><span>{indexableGuideSlugs.size} LIVE GUIDES</span></div>
            <h1>Grow a Chicken Fighter</h1>
            <p className="hub-tagline">Codes, chickens, eggs, Tower progression, fusion and rebirth guides.</p>
            <dl className="hub-facts">
              <div><dt>CREATOR</dt><dd>Sergio Verse Games</dd></div>
              <div><dt>START HERE</dt><dd>Recycler cash → Feeder levels → Tower</dd></div>
              <div><dt>CURRENT CODE</dt><dd className="fact-highlight">WELCOME</dd></div>
              <div><dt>CODE CHECKED</dt><dd>{codesCheckedAt}</dd></div>
            </dl>
            <div className="hub-actions">
              <Link className="hub-primary" href={gamePath("beginner-guide")}>Start here <span>→</span></Link>
              <Link href={gamePath("codes")}>Check WELCOME code</Link>
              <a href={site.officialGameUrl} target="_blank" rel="noreferrer">Play on Roblox ↗</a>
              <Link href="#all-guides">All guides</Link>
            </div>
          </div>
        </section>

        <section className="shell hub-block steam-trending-block">
          <header className="hub-block-header"><div><p className="hub-kicker">HOT ON STEAM</p><h2>How to Fish just launched</h2></div><p>We published the pages now and will use the next 72 hours to expand the queries that earn real impressions.</p></header>
          <Link className="steam-trending-card" href="/how-to-fish/">
            <img src={howToFishGame.artPath} alt="Official How to Fish Steam artwork" width="1232" height="706" />
            <div>
              <p><span>NEW RELEASE</span><b>AUG 20 · STEAM</b></p>
              <h3>How to Fish</h3>
              <p>Controls, fish collection, weapons, the shark quest and all five islands—without guessing unverified keys or locations.</p>
              <ul>
                <li>Current co-op guide</li><li>28 achievements</li><li>{howToFishPageList.length} focused answers live</li>
              </ul>
              <strong>Open the How to Fish guide hub →</strong>
            </div>
          </Link>
          <div className="steam-trending-links" aria-label="Popular How to Fish answers">
            <Link href={howToFishPath("complete-walkthrough")}>{howToFishPages["complete-walkthrough"]?.cardTitle || "Complete walkthrough"} →</Link>
            <Link href={howToFishPath("how-to-get-boat-keys")}>{howToFishPages["how-to-get-boat-keys"]?.cardTitle || "Get the boat keys"} →</Link>
            <Link href={howToFishPath("multiplayer-player-count")}>{howToFishPages["multiplayer-player-count"]?.cardTitle || "Multiplayer player count"} →</Link>
          </div>
        </section>

        <section className="shell hub-block">
          <header className="hub-block-header"><div><p className="hub-kicker">CHOOSE A GOAL</p><h2>What do you need?</h2></div><p>Open the guide that answers the decision in front of you.</p></header>
          <div className="goal-grid">
            {goals.map((goal, index) => (
              <Link className="goal-card" href={gamePath(goal.slug)} key={goal.slug}>
                <div><span>{goal.tag}</span><b>{goal.status} · {String(index + 1).padStart(2, "0")}</b></div>
                <h3>{goal.title}</h3><p>{goal.text}</p><strong>Open guide →</strong>
              </Link>
            ))}
          </div>
        </section>

        <section className="shell hub-block">
          <header className="hub-block-header"><div><p className="hub-kicker">CORE LOOP</p><h2>How the systems connect</h2></div><p>Official systems paired with steps shown in current gameplay recordings. Live values can change.</p></header>
          <div className="mechanic-grid">
            <article><span>01 · COLLECT</span><h3>Hatch eggs</h3><p>Collect chickens and use Flock → Index to check which egg a chicken comes from.</p></article>
            <article><span>02 · EARN</span><h3>Fight and upgrade</h3><p>Use Recycler cash, Feeder levels and Pit income to improve the unit you are actively pushing.</p></article>
            <article><span>03 · PROGRESS</span><h3>Climb, fuse, rebirth</h3><p>Push the Tower while fights remain reliable, preview every fusion, then read the Rebirth panel.</p></article>
          </div>
        </section>

        <section className="shell hub-block">
          <header className="hub-block-header"><div><p className="hub-kicker">ORIGINAL VIDEO GUIDES</p><h2>Watch the 60-second walkthroughs</h2></div><p>Short visual explainers with English narration and captions. No fixed odds, recipes or rewards are invented.</p></header>
          <div className="hub-video-grid">
            <Link className="hub-video-card" href={videoPath("egg-index-guide")}>
              <div className="hub-video-poster">
                <img src="/media/grow-a-chicken-fighter-egg-index-guide-poster.png" alt="Grow a Chicken Fighter egg Index video guide" width="1280" height="720" />
                <span>1:07</span>
              </div>
              <div><small>EGG INDEX</small><h3>Find a chicken's source egg</h3><p>Open Flock and Index, then check the live pool before spending.</p><strong>Watch guide →</strong></div>
            </Link>
            <Link className="hub-video-card" href={videoPath("fusion-screen-guide")}>
              <div className="hub-video-poster">
                <img src="/media/grow-a-chicken-fighter-fusion-guide-poster.png" alt="Grow a Chicken Fighter Fuse screen video guide" width="1280" height="720" />
                <span>1:12</span>
              </div>
              <div><small>FUSE SCREEN</small><h3>Check before you confirm fusion</h3><p>Review both chickens, the displayed cost and the full result preview.</p><strong>Watch guide →</strong></div>
            </Link>
          </div>
        </section>

        <section className="hub-guide-band" id="all-guides">
          <div className="shell hub-block">
            <header className="hub-block-header"><div><p className="hub-kicker">GUIDE LIBRARY</p><h2>All guides</h2></div><p>{indexableGuideSlugs.size} live guides · {allGuides.length - indexableGuideSlugs.size} pages still being verified.</p></header>
            <div className="all-guide-grid">
              {allGuides.map((page) => (
                <Link className="hub-guide-card" href={gamePath(page.slug)} key={page.slug}>
                  <div><span>{categories[page.slug]}</span><b>{liveSlugs.has(page.slug) ? "LIVE" : "LIMITED DATA"}</b></div>
                  <h3>{page.title}</h3><p>{summaries[page.slug]}</p>
                  <footer><small>Checked {formatIsoDate(page.updatedAtIso || site.checkedAtIso)}</small><strong>{liveSlugs.has(page.slug) ? "Read guide →" : "See known facts →"}</strong></footer>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="shell hub-block validation-test-block">
          <header className="hub-block-header"><div><p className="hub-kicker">TRENDING NOW</p><h2>A new Roblox guide</h2></div><p>One current game, one source-checked answer page.</p></header>
          <Link className="validation-test-card" href={trendingGuide.path}>
            <img src={trendingGuide.iconUrl} alt="Cheating During Testing Roblox game icon" width="512" height="512" />
            <div>
              <p><span>NEW GUIDE</span><b>UPDATED AUG 23</b></p>
              <h3>{trendingGuide.gameName}</h3>
              <p>{trendingGuide.summary}</p>
              <strong>Open the Roblox guide →</strong>
            </div>
          </Link>
        </section>

        <section className="shell hub-block hub-faq">
          <header className="hub-block-header"><div><p className="hub-kicker">QUICK ANSWERS</p><h2>Common questions</h2></div><p>Short answers first; changing values should be checked in the live game.</p></header>
          <div className="faq-list">{homeFaqs.map((item) => <details key={item.q}><summary>{item.q}<span>+</span></summary><p>{item.a}</p></details>)}</div>
        </section>

        <section className="hub-trust-band"><div className="shell trust-grid-new">
          <article><span>01</span><h2>Unofficial</h2><p>Independent fan guide, not affiliated with Roblox or Sergio Verse Games.</p></article>
          <article><span>02</span><h2>Straight answers</h2><p>Each guide starts with the next useful action, then explains the details.</p></article>
          <article><span>03</span><h2>Current checks</h2><p>Every changing fact carries a check date, so you can spot old advice quickly.</p></article>
        </div></section>
      </main>
    </>
  );
}
