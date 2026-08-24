import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found shell">
      <span aria-hidden="true">404</span>
      <p className="eyebrow">404</p>
      <h1>This guide is not in the lab.</h1>
      <p>The requested page is not part of the current guide library.</p>
      <Link className="primary-cta" href="/">Return to Game Hint Lab</Link>
    </main>
  );
}
