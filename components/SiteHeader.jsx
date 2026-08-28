import Link from "next/link";
import { gamePath, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label={`${site.name} home`}>
          <span className="brand-mark" aria-hidden="true">
            <img src="/brand-mark.svg" alt="" width="30" height="30" />
          </span>
          <span>
            <strong>Game Hint Lab</strong>
            <small>Fresh game answers, source checked</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Game guides">
          <Link href="/">Guide Hub</Link>
          <Link href="/how-to-fish/">How to Fish</Link>
          <Link href={gamePath("abilities")}>Best Skills</Link>
          <Link href={gamePath("codes")}>Codes</Link>
          <Link href="/videos/">Videos</Link>
        </nav>
        <Link className="play-button" href="/#current-games">Current games <span aria-hidden="true">↓</span></Link>
      </div>
    </header>
  );
}
