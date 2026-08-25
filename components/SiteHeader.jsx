import Link from "next/link";
import { howToFishGame } from "@/lib/how-to-fish";
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
          <Link href="/how-to-fish/">How to Fish</Link>
          <Link href="/">GACF Hub</Link>
          <Link href={gamePath("abilities")}>GACF Best Skills</Link>
          <Link href={gamePath("codes")}>GACF Codes</Link>
          <Link href={gamePath("beginner-guide")}>GACF Beginner Guide</Link>
        </nav>
        <a className="play-button" href={howToFishGame.officialUrl} target="_blank" rel="noreferrer">How to Fish on Steam <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}
