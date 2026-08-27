import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = {
  title: "Contact Game Hint Lab",
  description: "Use the public Game Hint Lab GitHub repository to report factual corrections, broken links and site issues.",
  alternates: { canonical: "/contact/" }, robots: { index: true, follow: true },
  openGraph: { type: "website", title: "Contact Game Hint Lab", description: "Open a public GitHub issue about a correction or site problem.", url: absoluteUrl("contact") }
};

const repositoryUrl = "https://github.com/tinkincx/gamehintlab";
const issuesUrl = `${repositoryUrl}/issues`;

export default function ContactPage() {
  const schema = { "@context": "https://schema.org", "@type": "ContactPage", name: "Contact Game Hint Lab", url: absoluteUrl("contact"), isPartOf: { "@type": "WebSite", name: site.name, url: site.url } };
  return (
    <><JsonLd data={schema} /><main>
      <div className="article-hero-wrap"><div className="hero-grid-bg" /><div className="shell article-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Contact</span></nav>
        <p className="eyebrow">Public contact channel</p><h1>Contact Game Hint Lab</h1><p className="article-intro">Report factual corrections, broken links and site problems through the public Game Hint Lab GitHub repository.</p>
      </div></div>
      <div className="shell article-layout"><article className="article-body">
        <section className="quick-answer"><div><strong>GitHub Issues</strong></div><p><a href={issuesUrl} target="_blank" rel="noreferrer">Open or review a public issue</a></p><p>Source and revision history: <a href={repositoryUrl} target="_blank" rel="noreferrer">github.com/tinkincx/gamehintlab</a></p></section>
        <section className="article-section" id="corrections"><div className="section-heading"><span>01</span><h2>Report a correction</h2></div><p>To help us check a report efficiently, include:</p>
          <ul className="check-list"><li><span aria-hidden="true">✓</span>The Game Hint Lab page URL</li><li><span aria-hidden="true">✓</span>The exact statement that may be wrong</li><li><span aria-hidden="true">✓</span>The game version or date observed</li><li><span aria-hidden="true">✓</span>A first-party source, screenshot or other evidence when available</li></ul>
          <p>Open a new issue in the <a href={issuesUrl} target="_blank" rel="noreferrer">repository issue tracker</a>. The issue and any attachments will be public. A report may lead to a clarification, source change or removal of the disputed claim.</p>
        </section>
        <section className="article-section" id="other"><div className="section-heading"><span>02</span><h2>Other inquiries</h2></div><div className="info-grid">
          <article className="info-card"><h3>Privacy</h3><p>GitHub issues are public. Do not post personal information. If a privacy concern can be described without private details, identify the relevant page and requested action. See our <Link href="/privacy/">Privacy Policy</Link>.</p></article>
          <article className="info-card"><h3>Copyright or trademarks</h3><p>Identify the protected work or mark, the relevant Game Hint Lab URL and the requested action without posting confidential material.</p></article>
          <article className="info-card"><h3>Website code</h3><p>Use the repository to report a broken page, accessibility problem or other reproducible website issue.</p></article>
          <article className="info-card"><h3>Game support</h3><p>We cannot access player accounts, restore purchases or fix game bugs. Contact the game developer or Roblox support for those issues.</p></article>
        </div></section>
        <section className="article-section" id="safety"><div className="section-heading"><span>03</span><h2>Public-channel safety</h2></div><p>GitHub issues can be viewed by anyone. Do not post email addresses, passwords, authentication codes, payment-card numbers, government identifiers, account screenshots or other sensitive information. Game Hint Lab will never ask for your Roblox password.</p></section>
      </article><aside className="article-sidebar"><nav className="side-card" aria-label="On this page"><p className="eyebrow">On this page</p><a href="#corrections">Corrections</a><a href="#other">Other inquiries</a><a href="#safety">Safety note</a></nav></aside></div>
    </main></>
  );
}
