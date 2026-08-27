import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = {
  title: "Terms of Use & Disclaimer",
  description: "Terms of use, independence disclosure and game-information disclaimer for Game Hint Lab.",
  alternates: { canonical: "/terms/" }, robots: { index: true, follow: true },
  openGraph: { type: "website", title: "Terms of Use & Disclaimer", description: "Terms and important limitations for using Game Hint Lab.", url: absoluteUrl("terms") }
};

export default function TermsPage() {
  const repositoryUrl = "https://github.com/tinkincx/gamehintlab";
  const issuesUrl = `${repositoryUrl}/issues`;
  const schema = { "@context": "https://schema.org", "@type": "WebPage", name: "Game Hint Lab Terms of Use and Disclaimer", url: absoluteUrl("terms"), dateModified: "2026-08-28", isPartOf: { "@type": "WebSite", name: site.name, url: site.url } };
  return (
    <><JsonLd data={schema} /><main>
      <div className="article-hero-wrap"><div className="hero-grid-bg" /><div className="shell article-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Terms &amp; Disclaimer</span></nav>
        <p className="eyebrow">Legal</p><h1>Terms of Use &amp; Disclaimer</h1><p className="article-intro">Last updated: August 28, 2026</p>
      </div></div>
      <div className="shell article-layout"><article className="article-body">
        <section className="article-section" id="acceptance"><div className="section-heading"><span>01</span><h2>Acceptance and permitted use</h2></div><p>By using Game Hint Lab, you agree to these terms. You may use the site for lawful, personal and informational purposes. You may link to our pages and quote brief portions with clear attribution, but you may not reproduce, republish, scrape at scale, sell or misrepresent site content without permission.</p><p>The website source and revision history are visible in a <a href={repositoryUrl} target="_blank" rel="noreferrer">public GitHub repository</a>. Public visibility does not grant additional rights beyond any license or notice included in that repository.</p></section>
        <section className="article-section" id="independence"><div className="section-heading"><span>02</span><h2>Independent, unofficial publication</h2></div>
          <p>Game Hint Lab is an independent guide website. It is not affiliated with, endorsed by, sponsored by or operated by Roblox Corporation, Sergio Verse Games or any other developer, publisher or platform referenced here. References to “official” identify a linked first-party source; they do not describe this website.</p>
          <p>Roblox, game titles, character names, logos and other trademarks or copyrighted materials belong to their respective owners. Their limited use is for identification, commentary and informational reference.</p>
        </section>
        <section className="article-section" id="information"><div className="section-heading"><span>03</span><h2>Game-information disclaimer</h2></div>
          <p>Live-service games can change without notice. Codes may expire, rewards may change, links may break and strategies may stop working. We aim to label evidence and review dates accurately, but we do not guarantee that every statement is complete, current or error-free. Verify important actions inside the current game before spending money, currency or time.</p>
          <p>Content is general information, not financial, legal, security or professional advice. Game Hint Lab cannot access accounts, restore purchases, issue in-game items or provide official technical support.</p>
        </section>
        <section className="article-section" id="links"><div className="section-heading"><span>04</span><h2>External links and services</h2></div><p>The site links to third-party services for evidence or convenience. A link does not mean Game Hint Lab endorses, guarantees or controls the destination, offer, product or data practice. You use external websites under their own terms and at your own risk.</p></section>
        <section className="article-section" id="warranties"><div className="section-heading"><span>05</span><h2>No warranties and limitation of liability</h2></div><p>To the fullest extent permitted by applicable law, the site and its content are provided “as is” and “as available,” without warranties of accuracy, availability, fitness for a particular purpose or non-infringement. Game Hint Lab will not be liable for indirect, incidental, special, consequential or punitive loss arising from use of the site or reliance on its content. Nothing in these terms excludes liability that cannot legally be excluded.</p></section>
        <section className="article-section" id="changes"><div className="section-heading"><span>06</span><h2>Changes, severability and contact</h2></div><p>We may update the site and these terms. The date above identifies the current version. If a provision is unenforceable, the remaining provisions continue to apply to the extent permitted by law. The current public contact method is described on our <Link href="/contact/">contact page</Link>; corrections and rights-holder notices may be opened in the <a href={issuesUrl} target="_blank" rel="noreferrer">GitHub issue tracker</a> without including confidential information.</p></section>
      </article><aside className="article-sidebar"><nav className="side-card" aria-label="On this page"><p className="eyebrow">On this page</p><a href="#acceptance">Permitted use</a><a href="#independence">Independence</a><a href="#information">Game information</a><a href="#links">External links</a><a href="#warranties">Liability</a><a href="#changes">Changes</a></nav></aside></div>
    </main></>
  );
}
