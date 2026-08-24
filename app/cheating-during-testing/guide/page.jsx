import Link from "next/link";
import { ArticleSections } from "@/components/ArticleSections";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { validationPages, validationPageAbsoluteUrl } from "@/lib/validation-pages";

const page = validationPages.find((item) => item.gameSlug === "cheating-during-testing");
const pageUrl = validationPageAbsoluteUrl(page, site.url);
const checkedAt = "August 23, 2026";

const description =
  "Cheating During Testing Roblox guide to the Phone update, Credits, gadgets, Snitches, Hunger, Anxiousness, console support and current codes status.";

export const metadata = {
  title: { absolute: "Cheating During Testing Roblox Guide (2026) | Game Hint Lab" },
  description,
  alternates: { canonical: page.path },
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
    title: "Cheating During Testing Roblox Guide: Phone Update & Codes",
    description,
    images: [
      {
        url: page.socialImageUrl,
        width: 768,
        height: 432,
        alt: "Official Cheating During Testing Roblox game artwork"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheating During Testing Roblox Guide",
    description,
    images: [page.socialImageUrl]
  }
};

const sections = [
  {
    heading: "How the official gameplay loop works",
    type: "timeline",
    items: [
      {
        title: "Finish the test before time runs out",
        text: "The exam timer is the main pressure. Completing tests is the developer-confirmed way to earn Credits."
      },
      {
        title: "Keep the teacher from seeing you",
        text: "The official objective is to cheat without being seen. Roblox does not publish the teacher's exact detection range or caught penalty."
      },
      {
        title: "Protect the grade",
        text: "Higher grades give bigger rewards, according to the developer description. Exact grade thresholds and Credit payouts are not published."
      },
      {
        title: "Build the next loadout",
        text: "Credits can buy cheating gadgets, snacks and equipment. Read the live item text because prices and effects can change."
      }
    ]
  },
  {
    heading: "Latest Phone and console updates",
    type: "table",
    columns: ["Official update", "Confirmed change", "What is not published"],
    rows: [
      ["Massive Shop Update · Aug 19", "New Phone item, new Phone features and controls", "Exact Phone controls, price and every feature"],
      ["Massive Shop Update · Aug 19", "Eligible shop items can have color options", "Which items qualify and whether color affects play"],
      ["Massive Shop Update · Aug 19", "Discontinued items were removed from the shop", "Complete discontinued-item list"],
      ["Console Compatibility · Aug 20", "The developer says the game now supports console", "Separate Xbox or PlayStation support details"]
    ],
    note:
      "These changes come from the creator's current Roblox event posts. Use the live shop and control prompts for version-specific details."
  },
  {
    heading: "Credits, Snitches and survival meters",
    type: "table",
    columns: ["System", "What the developer confirms", "What to check in game"],
    rows: [
      ["Credits", "Complete tests to earn them", "Current payout and shop prices"],
      ["Grades", "Higher grades pay bigger rewards", "Grade thresholds and reward amounts"],
      ["Snitches", "They can sell you out for Credits", "Whether the Snitch is a player or NPC in your round"],
      ["Hunger", "It must be managed during the exam", "Drain rate, food effects and failure penalty"],
      ["Anxiousness", "It must be managed during the exam", "What raises it and the exact penalty"],
      ["Friends", "Players can team up, but trust matters", "How rewards and betrayal work in the current server"]
    ]
  },
  {
    heading: "A sensible first-run plan",
    type: "steps",
    items: [
      "Use the first attempt to learn the timer and teacher movement. Finishing one test is more useful than gambling the whole run on a perfect grade.",
      "Watch the teacher before using an item. The game description confirms detection matters but does not publish a universal safe distance.",
      "After the test, note the grade and Credits you actually received. Those live values are more reliable than an old guide's payout table.",
      "Compare the Phone, gadgets, snacks and equipment by their current shop text before spending. Do not assume an older item is still available after the shop update.",
      "On the next run, watch Hunger and Anxiousness alongside the exam timer instead of treating either meter as decoration.",
      "If you team with friends, plan around Snitches. The developer explicitly frames trust as part of the match."
    ]
  },
  {
    heading: "Current codes status",
    type: "table",
    columns: ["Check", "Result on Aug 23", "Safe conclusion"],
    rows: [
      ["Official Roblox description", "No redemption code listed", "No developer-listed code found"],
      ["Massive Shop Update post", "No code listed", "Do not invent a Phone update code"],
      ["Console Compatibility post", "No code listed", "Do not invent a console code"],
      ["Redemption menu", "Not documented by official sources", "Do not claim a code button exists"]
    ],
    note:
      "This does not prove the game can never add codes. It means no developer-published code was found in the official sources checked for this page."
  },
  {
    heading: "Details we are not going to guess",
    type: "cards",
    items: [
      {
        title: "Teacher detection",
        text: "No official vision cone, safe distance or caught penalty is published."
      },
      {
        title: "Exact payouts",
        text: "The developer confirms Credits and grade-based rewards, not fixed amounts."
      },
      {
        title: "Best loadout",
        text: "The Phone is new and the shop changed. There is not enough current evidence for a real tier list."
      },
      {
        title: "Meter thresholds",
        text: "Hunger and Anxiousness are official systems, but their rates and penalties are not documented."
      }
    ]
  }
];

const faqs = [
  {
    q: "How do you earn Credits in Cheating During Testing?",
    a: "Complete tests. The developer also says higher grades give bigger rewards, but does not publish fixed payout amounts."
  },
  {
    q: "Are there Cheating During Testing codes?",
    a: "No developer-listed code was found in the official Roblox description or the current Phone and console update posts when checked August 23, 2026. That is not a claim that codes can never be added."
  },
  {
    q: "What do Snitches do?",
    a: "The official description says Snitches can sell you out for Credits. It does not explain every Snitch rule or payout."
  },
  {
    q: "Can you play Cheating During Testing on console?",
    a: "Yes. The creator's August 20 Console Compatibility post says console play is supported, without listing separate Xbox or PlayStation details."
  },
  {
    q: "How many players fit in one server?",
    a: "The official Roblox games API listed a maximum server size of 24 players when checked August 23, 2026."
  }
];

const sources = [
  {
    label: "Official Roblox game page",
    url: page.officialGameUrl,
    note: "Developer description for the core loop, Credits, grades, shop, Snitches, meters and friends."
  },
  {
    label: "Official Roblox games API",
    url: "https://games.roblox.com/v1/games?universeIds=9780429221",
    note: "Creator, category, server size, dates and the live game snapshot."
  },
  {
    label: "Massive Shop Update",
    url: "https://www.roblox.com/events/3496816460607652418",
    note: "Creator-published Phone, color-option and discontinued-shop-item changes."
  },
  {
    label: "Console Compatibility",
    url: "https://www.roblox.com/events/4562634661041406737",
    note: "Creator-published confirmation that console play is supported."
  },
  {
    label: "Official virtual-events API",
    url: "https://apis.roblox.com/virtual-events/v1/universes/9780429221/virtual-events",
    note: "Machine-readable source for both current creator update posts."
  }
];

export default function CheatingDuringTestingGuidePage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: page.gameName, item: pageUrl }
    ]
  };
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cheating During Testing Roblox Guide: Phone Update & Codes Status",
    description,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    datePublished: "2026-08-23",
    dateModified: page.updatedAtIso,
    inLanguage: "en",
    image: page.socialImageUrl,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    about: {
      "@type": "VideoGame",
      name: "Cheating During Testing [BETA]",
      url: page.officialGameUrl,
      gamePlatform: "Roblox"
    }
  };
  const game = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Cheating During Testing [BETA]",
    url: page.officialGameUrl,
    image: page.iconUrl,
    gamePlatform: "Roblox",
    applicationCategory: "Survival game",
    numberOfPlayers: { "@type": "QuantitativeValue", maxValue: 24 },
    author: {
      "@type": "Person",
      name: "ebenxzy",
      url: "https://www.roblox.com/users/10197139721/profile"
    },
    dateCreated: "2026-02-22"
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
                <Link href="/">Home</Link><span>/</span><span>Cheating During Testing</span>
              </nav>
              <p className="eyebrow">RISING GAME · SOURCE CHECKED</p>
              <h1>Cheating During Testing Roblox Guide: Phone Update &amp; Codes Status</h1>
              <p className="article-intro">
                The confirmed exam loop, current Phone and console changes, and the details Roblox still does not publish.
              </p>
              <div className="article-meta">
                <span>Last checked {checkedAt}</span><span>Official-source first</span><span>6 sections</span>
              </div>
            </div>
            <img
              className="validation-hero-icon"
              src={page.iconUrl}
              alt="Cheating During Testing Roblox game icon"
              width="512"
              height="512"
            />
          </div>
        </div>

        <div className="shell article-layout">
          <article className="article-body">
            <section className="quick-answer">
              <div><span aria-hidden="true">!</span><strong>Quick answer</strong></div>
              <p>
                Finish the exam before the timer expires, keep the teacher from seeing you cheat, and earn Credits. Higher grades pay more. Spend Credits on gadgets, snacks and equipment while managing Hunger, Anxiousness and the risk of Snitches. The latest official update adds a Phone and shop changes; no developer-listed redemption code was found on August 23.
              </p>
              <nav className="quick-answer-links" aria-label="Primary actions">
                <a href={page.officialGameUrl} target="_blank" rel="noreferrer">Play the official game <span aria-hidden="true">↗</span></a>
                <a href="#section-5">Check codes status <span aria-hidden="true">↓</span></a>
              </nav>
            </section>

            <section className="validation-snapshot" aria-labelledby="live-snapshot-heading">
              <div className="validation-snapshot-copy">
                <p className="eyebrow">OFFICIAL API SNAPSHOT</p>
                <h2 id="live-snapshot-heading">A rising game, not a proven search market yet</h2>
                <p>Checked August 23 at 02:49 UTC. Live counts move continuously.</p>
              </div>
              <dl>
                <div><dt>PLAYING</dt><dd>9,681</dd></div>
                <div><dt>VISITS</dt><dd>2.20M</dd></div>
                <div><dt>SERVER</dt><dd>24 max</dd></div>
                <div><dt>CATEGORY</dt><dd>Survival</dd></div>
              </dl>
            </section>

            <nav className="article-mobile-toc" aria-label="On this page">
              <strong>On this page</strong>
              {sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}>{section.heading}</a>)}
              <a href="#sources">Sources</a>
            </nav>

            <ArticleSections sections={sections} />

            <section className="article-section faq-section">
              <div className="section-heading"><span>FAQ</span><h2>Frequently asked questions</h2></div>
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
              <h2>Where this guide comes from</h2>
              <p className="sources-policy">Official Roblox pages and APIs only. No exploit or copied-code sites were used.</p>
              <ul>
                {sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noreferrer">{source.label} &nearr;</a>
                    <span>{source.note}</span>
                  </li>
                ))}
              </ul>
              <p className="updated-note">Checked {checkedAt}. Update-specific controls and values can change.</p>
            </section>
          </article>

          <aside className="article-sidebar">
            <div className="side-card">
              <p className="eyebrow">On this page</p>
              {sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}>{section.heading}</a>)}
              <a href="#sources">Sources</a>
            </div>
            <div className="side-card side-guide-card validation-side-card">
              <img src={page.iconUrl} alt="" width="64" height="64" />
              <h2>Cheating During Testing</h2>
              <a href={page.officialGameUrl} target="_blank" rel="noreferrer">Play on Roblox <span>↗</span></a>
              <Link href="/">Game Hint Lab home <span>→</span></Link>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
