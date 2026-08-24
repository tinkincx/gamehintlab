import Link from "next/link";
import { AnalyticsPreferencesButton } from "@/components/AnalyticsPreferencesButton";
import { howToFishGame } from "@/lib/how-to-fish";
import { gamePath, navigation, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <div className="footer-brand">{site.name}</div>
          <p>Independent game guides with clearly attributed sources, current checks and no invented answers.</p>
        </div>
        <div>
          <h2>Game guides</h2>
          <div className="footer-links">
            <Link href="/how-to-fish/">How to Fish Steam Guides</Link>
            <Link href="/videos/">GACF Video Guides</Link>
            {navigation.map((item) => <Link href={gamePath(item.slug)} key={item.slug}>{item.label}</Link>)}
          </div>
          <Link className="footer-library-link" href="/#all-guides">See all GACF guides &rarr;</Link>
        </div>
        <div>
          <h2>About &amp; legal</h2>
          <nav className="footer-links" aria-label="Publisher and legal links">
            <Link href="/about/">About</Link>
            <Link href="/contact/">Contact</Link>
            <Link href="/privacy/">Privacy Policy</Link>
            <Link href="/terms/">Terms &amp; Disclaimer</Link>
            <AnalyticsPreferencesButton />
          </nav>
          <p>Game updates can change codes, rewards, prices and strategies.</p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>&copy; 2026 {site.name}. Unofficial fan site.</span>
        <a href={howToFishGame.officialUrl} target="_blank" rel="noreferrer">How to Fish official Steam page &rarr;</a>
      </div>
    </footer>
  );
}
