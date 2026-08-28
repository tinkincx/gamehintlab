import Link from "next/link";
import { ArticleSections } from "@/components/ArticleSections";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const pagePath = "/shadow-dungeon/difficulty/";
const pageUrl = `${site.url}${pagePath}`;
const checkedAt = "August 28, 2026";
const officialGameUrl = "https://store.steampowered.com/app/4423580/Shadow_Dungeon/";
const officialNewsUrl = "https://steamcommunity.com/app/4423580/allnews/";
const steamCommunityUrl = "https://steamcommunity.com/app/4423580/discussions/";
const steamDbUrl = "https://steamdb.info/app/4423580/charts/";
const headerImage = "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4423580/c7169de56a893cba3b8dba5674f6c4fe34ca96ab/header.jpg?t=1787744876";
const portraitImage = "/shadow-dungeon/game-art.jpg";

const title = "How to Increase Difficulty in Shadow Dungeon: Greater Rifts";
const description =
  "How to increase difficulty in Shadow Dungeon: campaign map scaling, when Greater Rifts unlock, Normal through Inferno, level 100 and Paragon.";

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pagePath },
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
    type: "article",
    locale: "en_US",
    url: pageUrl,
    siteName: site.name,
    title,
    description,
    images: [{ url: headerImage, width: 460, height: 215, alt: "Official Shadow Dungeon Steam artwork" }]
  },
  twitter: { card: "summary_large_image", title, description, images: [headerImage] }
};

const sections = [
  {
    heading: "Campaign difficulty versus Greater Rifts",
    type: "table",
    columns: ["Part of the game", "How difficulty changes", "What is officially confirmed"],
    rows: [
      ["Main story", "Advance to later maps", "Monster levels and item drops are tied to the map, not your character level"],
      ["After the main story", "Enter Greater Rifts", "Greater Rifts unlock after the story is complete"],
      ["Greater Rifts", "Climb Normal → Master → Nightmare → Inferno", "Higher difficulties improve rare-item odds and can add more weapon affixes"]
    ],
    note:
      "The developer's current 1.0 notes do not document a separate campaign-wide difficulty selector. That is why this page does not claim a hidden menu or keybind exists."
  },
  {
    heading: "How to increase the difficulty",
    type: "steps",
    items: [
      "During the campaign, keep advancing to later maps. Officially, each map determines monster level and item drops, so your own level does not make an early map scale up around you.",
      "Complete the full main story. The launch notes list 160 story maps and estimate roughly 30–50 hours for the campaign.",
      "Open Greater Rifts after the story. This is the developer-documented difficulty ladder, rather than an announced global campaign toggle.",
      "Start with Normal, then move through Master, Nightmare and Inferno as your build can clear each tier reliably.",
      "Use the higher tiers for their confirmed reward benefit: a better chance at rare items and the possibility of weapons rolling more affixes."
    ]
  },
  {
    heading: "All four Greater Rift difficulties",
    type: "table",
    columns: ["Order", "Difficulty", "Published reward rule"],
    rows: [
      ["1", "Normal", "Entry tier; no official numeric drop-rate table is published"],
      ["2", "Master", "Higher tiers increase the chance of rare items"],
      ["3", "Nightmare", "Weapons can roll more affixes at higher difficulties"],
      ["4", "Inferno", "Highest named Greater Rift tier in the 1.0 announcement"]
    ],
    note:
      "No official enemy-health multiplier, damage multiplier, unlock score or recommended gear number is published for these four tiers. Treat precise numbers on unsourced pages as unverified."
  },
  {
    heading: "Max level, story length and Paragon",
    type: "cards",
    items: [
      { title: "Level cap: 100", text: "The full-release maximum character level is 100." },
      { title: "Story target: 99–100", text: "The campaign was rebalanced so players should finish near level 99–100, according to the developer." },
      { title: "160 story maps", text: "The official content announcement estimates about 30–50 hours across the main story." },
      { title: "Paragon after 100", text: "Reaching the cap unlocks Paragon Levels and the Paragon Talent Tree for further attributes." }
    ]
  },
  {
    heading: "What higher difficulty actually changes",
    type: "table",
    columns: ["System", "Confirmed effect", "Not published"],
    rows: [
      ["Rare items", "Higher Greater Rift difficulties improve the chance", "Exact percentage by tier"],
      ["Weapon affixes", "Weapons can roll more affixes at higher difficulties", "Exact affix count by tier"],
      ["Rift-only loot", "Runes, Socketing Stones, Super Enhancement Stones and other listed items are Greater Rift rewards", "Individual drop rates and recipes"],
      ["Paragon", "Unlocks at character level 100", "A requirement to clear Inferno first"]
    ],
    note:
      "The official rift-only list also names Talent Skill Runes, Equipment Skill Runes, Attribute Runes, Essence Stones, Permanent Magic Stones, Golden Hammer and Divine Mirror."
  },
  {
    heading: "If the campaign feels too easy",
    type: "checklist",
    items: [
      "Move forward instead of farming an early map and expecting it to scale to your level.",
      "Check that you are playing the full release, not treating demo progression as the complete 1.0 campaign.",
      "Do not confuse character level 100 with the end of progression; Paragon and Greater Rifts are the documented post-story systems.",
      "Do not rely on an unsourced claim that a campaign difficulty button exists. The published launch notes only name the four Greater Rift tiers.",
      "Check new developer announcements before assuming the rules are permanent; this page reflects the sources available on August 28, 2026."
    ]
  }
];

const faqs = [
  {
    q: "How do you increase difficulty in Shadow Dungeon?",
    a: "During the main story, advance to later maps because monster levels and drops are map-based. The documented selectable difficulty ladder is Greater Rifts, unlocked after completing the main story: Normal, Master, Nightmare and Inferno."
  },
  {
    q: "Does Shadow Dungeon have a campaign difficulty setting?",
    a: "The current official 1.0 content announcement does not document a global campaign difficulty selector. It documents map-based campaign scaling and four Greater Rift difficulties after the story."
  },
  {
    q: "When do Greater Rifts unlock?",
    a: "After you complete the main story. The developer lists 160 story maps and estimates roughly 30–50 hours."
  },
  {
    q: "What is the max level in Shadow Dungeon?",
    a: "The maximum character level is 100. Reaching it unlocks Paragon Levels and the Paragon Talent Tree."
  },
  {
    q: "What are the Shadow Dungeon Greater Rift difficulties?",
    a: "Normal, Master, Nightmare and Inferno, in that order. Higher tiers improve rare-item chances and can give weapons more affixes."
  },
  {
    q: "Does Inferno unlock Paragon?",
    a: "No such requirement is stated in the official notes. Paragon is tied to reaching level 100; Greater Rift difficulty is a separate progression and loot system."
  }
];

const sources = [
  {
    label: "Complete Official Version Content",
    url: officialNewsUrl,
    note: "Developer announcement for 160 maps, campaign scaling, Greater Rifts, difficulty order, loot rules, level 100 and Paragon."
  },
  {
    label: "Official Shadow Dungeon Steam page",
    url: officialGameUrl,
    note: "Publisher, platform, release information and official artwork."
  },
  {
    label: "Shadow Dungeon Steam discussions",
    url: steamCommunityUrl,
    note: "Current player questions, including the launch-day difficulty and scaling question this page answers."
  },
  {
    label: "SteamDB charts",
    url: steamDbUrl,
    note: "Independent release-date and Steam activity snapshot used to confirm that this was a current launch question."
  }
];

export default function ShadowDungeonDifficultyPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Shadow Dungeon", item: pageUrl },
      { "@type": "ListItem", position: 3, name: "Difficulty", item: pageUrl }
    ]
  };
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    inLanguage: "en",
    image: headerImage,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    about: { "@type": "VideoGame", name: "Shadow Dungeon", url: officialGameUrl, gamePlatform: "Windows PC" }
  };
  const game = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Shadow Dungeon",
    url: officialGameUrl,
    image: headerImage,
    gamePlatform: "Windows PC",
    applicationCategory: "Action role-playing game",
    author: { "@type": "Organization", name: "OO Cat" },
    datePublished: "2026-08-26"
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
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
      <main>
        <div className="article-hero-wrap validation-hero-wrap">
          <div className="hero-grid-bg" />
          <div className="shell article-hero validation-hero">
            <div>
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span>/</span><span>Shadow Dungeon</span><span>/</span><span>Difficulty</span>
              </nav>
              <p className="eyebrow">NEW STEAM RELEASE · OFFICIAL-SOURCE ANSWER</p>
              <h1>Shadow Dungeon Difficulty Explained: When It Gets Harder &amp; Greater Rifts</h1>
              <p className="article-intro">
                The direct answer to campaign scaling, the four post-story difficulty tiers, level 100 and Paragon—without invented multipliers.
              </p>
              <div className="article-meta">
                <span>Last checked {checkedAt}</span><span>Official notes first</span><span>6 sections</span>
              </div>
            </div>
            <img className="validation-hero-icon" src={portraitImage} alt="Official Shadow Dungeon Steam artwork" width="300" height="450" />
          </div>
        </div>

        <div className="shell article-layout">
          <article className="article-body">
            <section className="quick-answer">
              <div><span aria-hidden="true">!</span><strong>Quick answer</strong></div>
              <p>
                Shadow Dungeon&apos;s documented difficulty ladder starts in <strong>Greater Rifts after the main story</strong>. During the 160-map campaign, monster level and item drops are tied to each map, so advancing is what raises the documented challenge. Finish the story, then progress through <strong>Normal, Master, Nightmare and Inferno</strong>. Higher rift tiers improve rare-item chances and can roll more weapon affixes. The developer has not published a separate campaign-wide difficulty toggle in the current 1.0 notes.
              </p>
              <nav className="quick-answer-links" aria-label="Primary actions">
                <a href={officialGameUrl} target="_blank" rel="noreferrer">Open the official Steam page <span aria-hidden="true">↗</span></a>
                <a href="#section-2">See the exact progression <span aria-hidden="true">↓</span></a>
              </nav>
            </section>

            <section className="validation-snapshot" aria-labelledby="release-snapshot-heading">
              <div className="validation-snapshot-copy">
                <p className="eyebrow">OFFICIAL 1.0 STRUCTURE</p>
                <h2 id="release-snapshot-heading">The progression path at a glance</h2>
                <p>From the developer's complete-version announcement, checked August 28.</p>
              </div>
              <dl>
                <div><dt>RELEASED</dt><dd>Aug 26</dd></div>
                <div><dt>STORY MAPS</dt><dd>160</dd></div>
                <div><dt>MAX LEVEL</dt><dd>100</dd></div>
                <div><dt>RIFT TIERS</dt><dd>4</dd></div>
              </dl>
            </section>

            <nav className="article-mobile-toc" aria-label="On this page">
              <strong>On this page</strong>
              {sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}>{section.heading}</a>)}
              <a href="#sources">Sources</a>
            </nav>

            <ArticleSections sections={sections} />

            <section className="article-section faq-section">
              <div className="section-heading"><span>FAQ</span><h2>Shadow Dungeon difficulty questions</h2></div>
              <div className="faq-list">
                {faqs.map((item) => (
                  <details key={item.q}>
                    <summary>{item.q}<span aria-hidden="true">+</span></summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="sources-panel" id="sources">
              <p className="eyebrow">Sources</p>
              <h2>Where this answer comes from</h2>
              <p className="sources-policy">Developer-published rules are separated from the SteamDB demand snapshot. No difficulty values were guessed from other ARPGs.</p>
              <ul>
                {sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noreferrer">{source.label} &nearr;</a>
                    <span>{source.note}</span>
                  </li>
                ))}
              </ul>
              <p className="updated-note">Checked {checkedAt}. Future patches can change progression and difficulty rules.</p>
            </section>
          </article>

          <aside className="article-sidebar">
            <nav className="side-card" aria-label="On this page">
              <p className="eyebrow">On this page</p>
              {sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}>{section.heading}</a>)}
              <a href="#sources">Sources</a>
            </nav>
            <div className="side-card side-guide-card validation-side-card">
              <img src={portraitImage} alt="" width="64" height="64" />
              <h2>Shadow Dungeon</h2>
              <a href={officialGameUrl} target="_blank" rel="noreferrer">Open on Steam <span>↗</span></a>
              <Link href="/">Game Hint Lab home <span>→</span></Link>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
