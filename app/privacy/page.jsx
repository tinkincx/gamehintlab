import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description: "Read the Game Hint Lab privacy policy and current data practices for this independent game-guide website.",
  alternates: { canonical: "/privacy/" }, robots: { index: true, follow: true },
  openGraph: { type: "website", title: "Privacy Policy", description: "Current data practices for Game Hint Lab.", url: absoluteUrl("privacy") }
};

export default function PrivacyPage() {
  const repositoryUrl = "https://github.com/tinkincx/gamehintlab";
  const issuesUrl = `${repositoryUrl}/issues`;
  const schema = { "@context": "https://schema.org", "@type": "WebPage", name: "Game Hint Lab Privacy Policy", url: absoluteUrl("privacy"), dateModified: "2026-08-28", isPartOf: { "@type": "WebSite", name: site.name, url: site.url } };
  return (
    <><JsonLd data={schema} /><main>
      <div className="article-hero-wrap"><div className="hero-grid-bg" /><div className="shell article-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Privacy Policy</span></nav>
        <p className="eyebrow">Legal</p><h1>Privacy Policy</h1><p className="article-intro">Last updated: August 28, 2026</p>
      </div></div>
      <div className="shell article-layout"><article className="article-body">
        <section className="article-section" id="overview"><div className="section-heading"><span>01</span><h2>Overview</h2></div><p>This Privacy Policy explains how Game Hint Lab handles information when you visit this website. At the date shown above, this is a read-only guide site: it does not offer user accounts, comments, purchases or an on-site contact form.</p></section>
        <section className="article-section" id="current-practices"><div className="section-heading"><span>02</span><h2>Current data practices</h2></div>
          <p>Game Hint Lab uses Google Analytics 4 with measurement ID <code>G-MQTW3X7Y7F</code> to understand visits, traffic sources and page use. Google Consent Mode defaults analytics storage, advertising storage, advertising user data and advertising personalization to denied. In that state, Google may receive cookieless measurement pings for basic reporting and modeling, but this site does not permit Analytics storage. Google Signals and Google ad-personalization signals are disabled.</p>
          <p>The site currently includes a Google AdSense ownership-verification declaration and an <code>ads.txt</code> publisher declaration. These are used to identify the site and publisher during review. The site does not currently load AdSense ad-display scripts, request AdSense advertisements or display AdSense ad units.</p>
          <p>Like most websites, the hosting and delivery infrastructure may automatically process limited technical data needed to serve and secure the site. This may include an IP address, browser and device information, requested URLs, timestamps, referring pages and security-event data. Such processing is controlled in part by the relevant infrastructure provider and may be retained in technical logs for security, reliability and abuse prevention.</p>
          <p>We store the visitor&apos;s analytics choice in browser local storage under <code>gamehintlab-measurement-consent-v3</code>. When permission is granted, Google Analytics may use first-party identifiers such as <code>_ga</code> cookies for audience measurement. Advertising storage, advertising user data and advertising personalization remain denied.</p>
        </section>
        <section className="article-section" id="github"><div className="section-heading"><span>03</span><h2>Public GitHub contact</h2></div><p>Game Hint Lab uses a <a href={repositoryUrl} target="_blank" rel="noreferrer">public GitHub repository</a> and <a href={issuesUrl} target="_blank" rel="noreferrer">public issue tracker</a> for corrections and site reports. Information submitted in an issue, including a GitHub username, issue text and attachments, is publicly visible and is processed by GitHub under its own terms and privacy policy. Do not submit passwords, account details or other sensitive information.</p></section>
        <section className="article-section" id="external"><div className="section-heading"><span>04</span><h2>External links and third parties</h2></div><p>Guides may link to Roblox, YouTube, GitHub, Google and other external websites. Those services operate under their own privacy policies. Following an external link may allow that service to receive technical information under its own terms. Game Hint Lab does not control third-party privacy practices.</p></section>
        <section className="article-section" id="analytics"><div className="section-heading"><span>05</span><h2>Analytics and your choice</h2></div>
          <p>Choosing <strong>Essential only</strong> does not restrict access to any guide. Analytics storage remains denied, and Google may send only cookieless basic-measurement pings under Consent Mode. Choosing <strong>Allow analytics</strong> permits Google Analytics measurement storage while Google advertising storage and personalization remain disabled.</p>
          <p>A saved choice can be withdrawn at any time with the <strong>Analytics choices</strong> button in the footer. Withdrawing permission denies future Analytics storage and removes accessible Google Analytics cookies. Read <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google&apos;s Privacy Policy</a> for details about Google&apos;s data practices.</p>
        </section>
        <section className="article-section" id="rights"><div className="section-heading"><span>06</span><h2>Your choices and privacy requests</h2></div><p>You may request correction or deletion where applicable. Legal rights vary by location and may be subject to exceptions. The current contact channel is the public <a href={issuesUrl} target="_blank" rel="noreferrer">GitHub issue tracker</a>; describe the relevant page and requested action without including private data. If a matter cannot be described safely in public, do not post the sensitive details.</p></section>
        <section className="article-section" id="children"><div className="section-heading"><span>07</span><h2>Children&apos;s privacy</h2></div><p>This site provides general game information and is not designed to collect personal information from children. Visitors can continue reading every guide with Analytics storage denied by choosing <strong>Essential only</strong>. Children should not submit personal information through the public issue tracker.</p></section>
        <section className="article-section" id="changes"><div className="section-heading"><span>08</span><h2>Policy changes and contact</h2></div><p>We may revise this policy when the site, its providers or applicable requirements change. The “Last updated” date identifies the current version. The current public contact method is described on our <Link href="/contact/">contact page</Link>.</p></section>
      </article><aside className="article-sidebar"><nav className="side-card" aria-label="On this page"><p className="eyebrow">On this page</p><a href="#overview">Overview</a><a href="#current-practices">Current practices</a><a href="#github">GitHub contact</a><a href="#external">External links</a><a href="#analytics">Analytics</a><a href="#rights">Your choices</a><a href="#children">Children</a><a href="#changes">Changes</a></nav></aside></div>
    </main></>
  );
}
