import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { howToFishGame } from "@/lib/how-to-fish";
import { indexableGuideSlugs } from "@/lib/publishing";
import { gamePath, pageList, pages, site } from "@/lib/site";
import { videoPath } from "@/lib/videos";
import { zeroCompanyGame } from "@/lib/zero-company";
import { dawnwalkerGame, dawnwalkerPath } from "@/lib/dawnwalker";

function formatIsoDate(isoDate) {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" })
    .format(new Date(`${isoDate}T00:00:00Z`));
}

const codesCheckedAt = formatIsoDate(pages.codes.updatedAtIso);
const shadowDungeonPath = "/shadow-dungeon/difficulty/";
const shadowDungeonImage = "/shadow-dungeon/game-art.jpg";

export const metadata = {
  title: { absolute: "Game Hint Lab: Current Game Guides, Fixes & Codes" },
  description: site.description,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-video-preview": -1, "max-snippet": -1 }
  }
};

const goals = [
  { tag: "STARTER", status: "LIVE", title: "I'm new to the game", text: "Follow a source-checked first-session route through Recycler cash, Feeder levels, Tower fights, fusion and rebirth.", slug: "beginner-guide" },
  { tag: "CODES", status: "UPDATED", title: "Check the current codes", text: `Open the dedicated tracker for new reports, developer-listed evidence, expired codes and the ${codesCheckedAt} check.`, slug: "codes" },
  { tag: "EGGS", status: "LIVE", title: "Find Thunder & Nest routes", text: "Check the reported community reward and event routes, then verify the live Index before spending.", slug: "eggs" },
  { tag: "COMBAT", status: "UPDATED", title: "Compare the best skills", text: "See where three current rankings agree, where they conflict and which abilities fit survival or control.", slug: "abilities" },
  { tag: "FUSION", status: "LIVE", title: "Preview fusion safely", text: "Choose two chickens, inspect the trait lock, result preview and displayed cost before confirming.", slug: "fusion-mutations" },
  { tag: "PROGRESSION", status: "LIVE", title: "Prepare for rebirth", text: "See what the developer confirms, what a current guide reports resets, and what to verify on the live screen.", slug: "rebirth-guide" },
];

const summaries = {
  codes: "New reports, developer-listed evidence, expired codes and redemption fixes in one tracker.",
  "beginner-guide": "Recycler, Feeder, Tower, Index, Fuse and Rebirth for a first session.",
  eggs: "Flock and Index, source eggs, community rewards, event drops and offline eggs.",
  abilities: "The best skills and abilities for Tower, Pit, survival and control, cross-checked across three current rankings.",
  "fusion-mutations": "How to open Fuse, select two chickens, inspect traits, preview the result and check cost.",
  "rebirth-guide": "Official purpose, current guide-reported resets and a pre-confirmation checklist."
};

const categories = {
  codes: "UTILITY",
  "beginner-guide": "STARTER",
  eggs: "COLLECTION",
  abilities: "COMBAT",
  "fusion-mutations": "PROGRESSION",
  "rebirth-guide": "PROGRESSION"
};

const homeFaqs = [
  { q: "Where can I check current Grow a Chicken Fighter codes?", a: `Use the dedicated codes guide, checked on ${codesCheckedAt}. It separates developer-listed evidence from cross-site reports and expired codes instead of repeating an undated list on the homepage.` },
  { q: "What should a new player do first?", a: "Current gameplay guides start by collecting recyclables for Recycler cash, then upgrading Recycler for money or Feeder for chicken levels before pushing the Tower." },
  { q: "How does fusion work?", a: "The official description confirms two chicken inputs and a mutated result. Current gameplay also shows a base, donor, locked fields, a preview and a displayed cost; read all of them before confirming." },
  { q: "What resets when I rebirth?", a: "A current third-party guide reports that money and troop level reset while the chicken collection remains. Verify the complete list and earning benefit on the live Rebirth screen." }
];

const allGuides = pageList;

export default function HomePage() {
  const website = { "@context": "https://schema.org", "@type": "WebSite", name: site.name, url: site.url, description: site.description, inLanguage: "en" };
  const game = { "@context": "https://schema.org", "@type": "VideoGame", name: site.gameName, url: site.officialGameUrl, gamePlatform: "Roblox", applicationCategory: "Game", author: { "@type": "Organization", name: "Grow a Chicken Fighter" } };
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
            <div className="hub-badges"><span>INDEPENDENT GAME GUIDES</span><span>5 GAMES TESTING</span><span>SOURCE CHECKED</span></div>
            <h1>Game Hint Lab</h1>
            <p className="hub-tagline">Direct answers for current games—built only when search demand and verifiable sources justify the page.</p>
            <dl className="hub-facts">
              <div><dt>ACTIVE TESTS</dt><dd>Roblox + new Steam releases</dd></div>
              <div><dt>METHOD</dt><dd>Search signal → source check → direct answer</dd></div>
              <div><dt>GROW GUIDES</dt><dd className="fact-highlight">{indexableGuideSlugs.size} live · 7 reported codes</dd></div>
              <div><dt>LATEST CHECK</dt><dd>September 3, 2026</dd></div>
            </dl>
            <div className="hub-actions">
              <a className="hub-primary" href="#current-games">Choose a game <span>→</span></a>
              <Link href={gamePath("beginner-guide")}>Grow beginner guide</Link>
              <Link href={gamePath("codes")}>Open current codes</Link>
              <Link href={dawnwalkerPath("30-day-timer")}>Dawnwalker timer</Link>
              <Link href={zeroCompanyGame.path}>Zero Company issues</Link>
            </div>
          </div>
        </section>

        <section className="shell hub-block">
          <header className="hub-block-header"><div><p className="hub-kicker">GROW A CHICKEN FIGHTER</p><h2>Choose a current answer</h2></div><p>Open the guide that answers the decision in front of you.</p></header>
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
          <header className="hub-block-header"><div><p className="hub-kicker">CORE LOOP</p><h2>How the systems connect</h2></div><p>Official systems paired with steps checked against linked gameplay sources. Live values can change.</p></header>
          <div className="mechanic-grid">
            <article><span>01 · COLLECT</span><h3>Hatch eggs</h3><p>Collect chickens and use Flock → Index to check which egg a chicken comes from.</p></article>
            <article><span>02 · EARN</span><h3>Fight and upgrade</h3><p>Use Recycler cash, Feeder levels and Pit income to improve the unit you are actively pushing.</p></article>
            <article><span>03 · PROGRESS</span><h3>Climb, fuse, rebirth</h3><p>Push the Tower while fights remain reliable, preview every fusion, then read the Rebirth panel.</p></article>
          </div>
        </section>

        <section className="shell hub-block validation-test-block" id="current-games">
          <header className="hub-block-header"><div><p className="hub-kicker">CURRENT GAME ANSWERS</p><h2>New releases under active testing</h2></div><p>Each game earns more pages only after search impressions or real player questions show demand.</p></header>
          <div className="validation-test-list">
            <Link className="validation-test-card" href={dawnwalkerGame.path}>
              <img src={dawnwalkerGame.artPath} alt="Official The Blood of Dawnwalker Steam artwork" width="616" height="353" />
              <div>
                <p><span>STEAM · RELEASED SEP 3</span><b>CHECKED SEP 3</b></p>
                <h3>The Blood of Dawnwalker current answers</h3>
                <p>The 30-day timer and deadline, PC stuttering and frame-generation tests, plus a day-and-night beginner skill foundation.</p>
                <strong>Open 3 launch-day answers →</strong>
              </div>
            </Link>
            <Link className="validation-test-card" href={zeroCompanyGame.path}>
              <img src={zeroCompanyGame.artPath} alt="Official STAR WARS Zero Company Steam artwork" width="616" height="353" />
              <div>
                <p><span>STEAM · RELEASED AUG 27</span><b>CHECKED SEP 3</b></p>
                <h3>STAR WARS Zero Company current answers</h3>
                <p>Official issue and patch status, crash and CPU-threading guidance, PC fix order, SteamOS support, four difficulty levels, Permadeath and Beskar Mode.</p>
                <strong>Open 5 launch-week answers →</strong>
              </div>
            </Link>
            <Link className="validation-test-card" href={howToFishGame.path}>
              <img src={howToFishGame.artPath} alt="Official How to Fish Steam artwork" width="1232" height="706" />
              <div>
                <p><span>STEAM · RELEASED AUG 20</span><b>CHECKED AUG 31</b></p>
                <h3>How to Fish game guides</h3>
                <p>Drip Voxelfish and Triggerfish routes, boat keys, Pufferfish, eight-player and private lobbies, console plans, crossplay and Steam Deck verification.</p>
                <strong>Open 5 current answers →</strong>
              </div>
            </Link>
            <Link className="validation-test-card" href={shadowDungeonPath}>
              <img src={shadowDungeonImage} alt="Official Shadow Dungeon Steam artwork" width="300" height="450" />
              <div>
                <p><span>STEAM · RELEASED AUG 26</span><b>CHECKED AUG 28</b></p>
                <h3>How does difficulty work in Shadow Dungeon?</h3>
                <p>Campaign map scaling, Greater Rifts, Normal through Inferno, the level 100 cap and Paragon—based on the developer&apos;s 1.0 notes.</p>
                <strong>Read the difficulty answer →</strong>
              </div>
            </Link>
          </div>
        </section>

        <section className="shell hub-block">
          <header className="hub-block-header"><div><p className="hub-kicker">ORIGINAL VIDEO GUIDES</p><h2>Watch the 60-second explainers</h2></div><p>Short animated explainers—not gameplay footage—with English narration and captions. No fixed odds, recipes or rewards are invented.</p></header>
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
            <header className="hub-block-header"><div><p className="hub-kicker">GUIDE LIBRARY</p><h2>Core guides</h2></div><p>{allGuides.length} focused guides, each with a direct answer, evidence links and a visible check date.</p></header>
            <div className="all-guide-grid">
              {allGuides.map((page) => (
                <Link className="hub-guide-card" href={gamePath(page.slug)} key={page.slug}>
                  <div><span>{categories[page.slug]}</span><b>SOURCE CHECKED</b></div>
                  <h3>{page.title}</h3><p>{summaries[page.slug]}</p>
                  <footer><small>Checked {formatIsoDate(page.updatedAtIso || site.checkedAtIso)}</small><strong>Read guide →</strong></footer>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="shell hub-block hub-faq">
          <header className="hub-block-header"><div><p className="hub-kicker">QUICK ANSWERS</p><h2>Common questions</h2></div><p>Short answers first; changing values should be checked in the live game.</p></header>
          <div className="faq-list">{homeFaqs.map((item) => <details key={item.q}><summary>{item.q}<span>+</span></summary><p>{item.a}</p></details>)}</div>
        </section>

        <section className="hub-trust-band"><div className="shell trust-grid-new">
          <article><span>01</span><h2>Unofficial</h2><p>Independent guide site, not affiliated with the games, developers, publishers or platforms covered.</p></article>
          <article><span>02</span><h2>Straight answers</h2><p>Each guide starts with the next useful action, then explains the details.</p></article>
          <article><span>03</span><h2>Current checks</h2><p>Every changing fact carries a check date, so you can spot old advice quickly.</p></article>
        </div></section>
      </main>
    </>
  );
}
