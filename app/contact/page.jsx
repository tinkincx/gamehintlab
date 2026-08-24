import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = {
  title: "Contact Game Hint Lab",
  description: "Contact Game Hint Lab about factual corrections, broken links, privacy questions and business matters.",
  alternates: { canonical: "/contact/" }, robots: { index: true, follow: true },
  openGraph: { type: "website", title: "Contact Game Hint Lab", description: "Send a correction, privacy question or business inquiry.", url: absoluteUrl("contact") }
};

export default function ContactPage() {
  const schema = { "@context": "https://schema.org", "@type": "ContactPage", name: "Contact Game Hint Lab", url: absoluteUrl("contact"), isPartOf: { "@type": "WebSite", name: site.name, url: site.url } };
  return (
    <><JsonLd data={schema} /><main>
      <div className="article-hero-wrap"><div className="hero-grid-bg" /><div className="shell article-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Contact</span></nav>
        <p className="eyebrow">Get in touch</p><h1>Contact Game Hint Lab</h1><p className="article-intro">Send factual corrections, broken-link reports, privacy questions or business inquiries to the address below.</p>
      </div></div>
      <div className="shell article-layout"><article className="article-body">
        <section className="quick-answer"><div><strong>Email</strong></div><p><a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></p></section>
        <section className="article-section" id="corrections"><div className="section-heading"><span>01</span><h2>Report a correction</h2></div><p>To help us check a report efficiently, include:</p>
          <ul className="check-list"><li><span aria-hidden="true">✓</span>The Game Hint Lab page URL</li><li><span aria-hidden="true">✓</span>The exact statement that may be wrong</li><li><span aria-hidden="true">✓</span>The game version or date observed</li><li><span aria-hidden="true">✓</span>A first-party source, screenshot or other evidence when available</li></ul>
          <p>We may update, clarify or remove a claim after reviewing the available evidence.</p>
        </section>
        <section className="article-section" id="other"><div className="section-heading"><span>02</span><h2>Other inquiries</h2></div><div className="info-grid">
          <article className="info-card"><h3>Privacy</h3><p>Use the subject line “Privacy Request” and describe the request clearly. See our <Link href="/privacy/">Privacy Policy</Link>.</p></article>
          <article className="info-card"><h3>Copyright or trademarks</h3><p>Identify the protected work or mark, the relevant URL and the action you are requesting.</p></article>
          <article className="info-card"><h3>Business</h3><p>Clearly identify your organization and the purpose of the proposal. Advertising does not buy editorial conclusions.</p></article>
          <article className="info-card"><h3>Game support</h3><p>We cannot access player accounts, restore purchases or fix game bugs. Contact the game developer or Roblox support for those issues.</p></article>
        </div></section>
        <section className="article-section" id="safety"><div className="section-heading"><span>03</span><h2>Safety note</h2></div><p>Do not email passwords, authentication codes, payment-card numbers, government identifiers or other sensitive information. Game Hint Lab will never ask for your Roblox password.</p></section>
      </article><aside className="article-sidebar"><nav className="side-card" aria-label="On this page"><p className="eyebrow">On this page</p><a href="#corrections">Corrections</a><a href="#other">Other inquiries</a><a href="#safety">Safety note</a></nav></aside></div>
    </main></>
  );
}
