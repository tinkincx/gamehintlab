import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = {
  title: "About Game Hint Lab",
  description: "Learn what Game Hint Lab publishes, how sources are labeled and how to report a correction.",
  alternates: { canonical: "/about/" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", title: "About Game Hint Lab", description: "Our current focus, source policy and public correction channel.", url: absoluteUrl("about") }
};

const repositoryUrl = "https://github.com/tinkincx/gamehintlab";
const issuesUrl = `${repositoryUrl}/issues`;

export default function AboutPage() {
  const schema = { "@context": "https://schema.org", "@type": "AboutPage", name: "About Game Hint Lab", url: absoluteUrl("about"), isPartOf: { "@type": "WebSite", name: site.name, url: site.url } };
  return (
    <>
      <JsonLd data={schema} />
      <main>
        <div className="article-hero-wrap"><div className="hero-grid-bg" /><div className="shell article-hero">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>About</span></nav>
          <p className="eyebrow">About the publisher</p><h1>About Game Hint Lab</h1>
          <p className="article-intro">Game Hint Lab is an independent guide site currently focused on <em>Grow a Chicken Fighter</em> on Roblox.</p>
        </div></div>
        <div className="shell article-layout">
          <article className="article-body">
            <section className="article-section" id="mission"><div className="section-heading"><span>01</span><h2>Our mission</h2></div>
              <p>The site organizes practical answers about codes, progression, eggs, abilities, fusion and rebirth. The goal is to show what a linked source establishes, what is reported by third parties and what remains uncertain.</p>
              <p>Game details can change after an update. Dates and evidence labels describe the state of a page when it was prepared; they are not a promise that every live value will remain unchanged.</p>
            </section>
            <section className="article-section" id="method"><div className="section-heading"><span>02</span><h2>How pages are prepared</h2></div>
              <div className="info-grid">
                <article className="info-card"><h3>Sources are identified</h3><p>Official Roblox pages and developer material are distinguished from third-party guides, videos and community reports.</p></article>
                <article className="info-card"><h3>Claims stay within the evidence</h3><p>A citation supports only the fact described beside it. A third-party report is not presented as an official announcement.</p></article>
                <article className="info-card"><h3>Unknowns remain visible</h3><p>If a reward, recipe, ranking or update-sensitive value is not established by the available material, the page labels that limit instead of inventing a result.</p></article>
                <article className="info-card"><h3>Tools are not sources</h3><p>Software tools may assist with organizing material, drafting and formatting. Their output is not treated as evidence; readers can inspect the links listed on each guide.</p></article>
              </div>
            </section>
            <section className="article-section" id="independence"><div className="section-heading"><span>03</span><h2>Editorial independence and affiliation</h2></div>
              <p>Game Hint Lab is independently operated. It is not affiliated with, endorsed by or sponsored by Roblox Corporation, Sergio Verse Games or any other game developer or publisher mentioned on this site. Game names, platform names, logos and related marks belong to their respective owners.</p>
              <p>Game Hint Lab uses privacy-controlled Google Analytics for audience measurement. The site currently includes Google AdSense ownership verification and an <code>ads.txt</code> declaration, but it does not load AdSense ad-display scripts or show AdSense advertisements. Measurement and verification details are explained in our <Link href="/privacy/">Privacy Policy</Link>.</p>
            </section>
            <section className="article-section" id="corrections"><div className="section-heading"><span>04</span><h2>Corrections and feedback</h2></div>
              <p>The website source and revision history are available in the <a href={repositoryUrl} target="_blank" rel="noreferrer">public GitHub repository</a>. If you find a broken link, expired code or factual error, follow the instructions on our <Link href="/contact/">contact page</Link> and open a <a href={issuesUrl} target="_blank" rel="noreferrer">GitHub issue</a>. Issues are public, so do not include passwords, account details or other sensitive information.</p>
            </section>
          </article>
          <aside className="article-sidebar"><nav className="side-card" aria-label="On this page"><p className="eyebrow">On this page</p><a href="#mission">Our mission</a><a href="#method">Research method</a><a href="#independence">Independence</a><a href="#corrections">Corrections</a></nav></aside>
        </div>
      </main>
    </>
  );
}
