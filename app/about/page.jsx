import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = {
  title: "About Game Hint Lab",
  description: "Learn how Game Hint Lab researches, verifies and updates independent game guides.",
  alternates: { canonical: "/about/" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", title: "About Game Hint Lab", description: "Our mission, evidence policy and editorial independence.", url: absoluteUrl("about") }
};

export default function AboutPage() {
  const schema = { "@context": "https://schema.org", "@type": "AboutPage", name: "About Game Hint Lab", url: absoluteUrl("about"), isPartOf: { "@type": "WebSite", name: site.name, url: site.url } };
  return (
    <>
      <JsonLd data={schema} />
      <main>
        <div className="article-hero-wrap"><div className="hero-grid-bg" /><div className="shell article-hero">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>About</span></nav>
          <p className="eyebrow">About the publisher</p><h1>About Game Hint Lab</h1>
          <p className="article-intro">Game Hint Lab is an independent game-guide website built to turn scattered game information into clear, useful and evidence-labeled answers.</p>
        </div></div>
        <div className="shell article-layout">
          <article className="article-body">
            <section className="article-section" id="mission"><div className="section-heading"><span>01</span><h2>Our mission</h2></div>
              <p>Players should be able to find the answer they need without sorting through copied lists, hidden assumptions or outdated claims. We publish concise guides that distinguish confirmed facts from reports that still need testing.</p>
              <p>This site currently focuses on <em>Grow a Chicken Fighter</em> on Roblox: its codes, first-session route and the systems players need to understand before spending or resetting.</p>
            </section>
            <section className="article-section" id="method"><div className="section-heading"><span>02</span><h2>How we research guides</h2></div>
              <div className="info-grid">
                <article className="info-card"><h3>Official sources first</h3><p>Developer descriptions, official game pages and platform data take priority over third-party reports.</p></article>
                <article className="info-card"><h3>Claims are scoped</h3><p>A source supports only the specific fact it demonstrates. It does not automatically validate an entire guide.</p></article>
                <article className="info-card"><h3>Uncertainty is visible</h3><p>Untested rewards, rankings, recipes and update-sensitive details are labeled instead of presented as settled facts.</p></article>
                <article className="info-card"><h3>Updates are dated</h3><p>Evidence-review dates show when information was last checked, because live-service games can change quickly.</p></article>
              </div>
            </section>
            <section className="article-section" id="independence"><div className="section-heading"><span>03</span><h2>Editorial independence and affiliation</h2></div>
              <p>Game Hint Lab is independently operated. It is not affiliated with, endorsed by or sponsored by Roblox Corporation, Sergio Verse Games or any other game developer or publisher mentioned on this site. Game names, platform names, logos and related marks belong to their respective owners.</p>
              <p>Game Hint Lab uses privacy-controlled Google Analytics to understand which guides are useful. Analytics does not determine our editorial coverage, and advertising scripts are not currently loaded on this site. Measurement details and visitor controls are explained in our <Link href="/privacy/">Privacy Policy</Link>.</p>
            </section>
            <section className="article-section" id="corrections"><div className="section-heading"><span>04</span><h2>Corrections and feedback</h2></div>
              <p>Game information changes. If you find a broken link, expired code or factual error, send the page URL, the disputed claim and any supporting evidence through our <Link href="/contact/">contact page</Link>. We review corrections against the strongest available source and update the affected page when warranted.</p>
            </section>
          </article>
          <aside className="article-sidebar"><nav className="side-card" aria-label="On this page"><p className="eyebrow">On this page</p><a href="#mission">Our mission</a><a href="#method">Research method</a><a href="#independence">Independence</a><a href="#corrections">Corrections</a></nav></aside>
        </div>
      </main>
    </>
  );
}
