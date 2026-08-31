const retiredHowToFishPaths = new Set([
  "/how-to-fish/achievements-guide/",
  "/how-to-fish/all-guns-weapons/",
  "/how-to-fish/black-screen-fix/",
  "/how-to-fish/boat-engine-upgrades/",
  "/how-to-fish/complete-walkthrough/",
  "/how-to-fish/how-many-islands/",
  "/how-to-fish/how-to-beat-terrorizing-bird/",
  "/how-to-fish/how-to-beat-volcano-boss/",
  "/how-to-fish/how-to-cook-fish/",
  "/how-to-fish/how-to-drop-items/",
  "/how-to-fish/how-to-finish-game/",
  "/how-to-fish/how-to-get-leeches/",
  "/how-to-fish/how-to-get-shark/",
  "/how-to-fish/how-to-use-boat-radar/",
  "/how-to-fish/save-file-location/"
]);

function normalizePathname(pathname) {
  if (pathname === "/") return pathname;
  return `${pathname.replace(/\/+$/, "")}/`;
}

function retiredResponse(request) {
  const headers = new Headers({
    "Cache-Control": "public, max-age=0, must-revalidate",
    "Content-Type": "text/html; charset=UTF-8",
    "X-Content-Type-Options": "nosniff",
    "X-Robots-Tag": "noindex, nofollow"
  });

  if (request.method === "HEAD") {
    return new Response(null, { status: 410, headers });
  }

  return new Response(
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex,nofollow">
    <title>Guide retired | Game Hint Lab</title>
  </head>
  <body>
    <main>
      <h1>This guide has been retired.</h1>
      <p>It did not meet our current sourcing standard.</p>
      <p><a href="/how-to-fish/">Browse the verified How to Fish guides</a>.</p>
    </main>
  </body>
</html>`,
    { status: 410, headers }
  );
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (retiredHowToFishPaths.has(normalizePathname(url.pathname))) {
      return retiredResponse(request);
    }

    return env.ASSETS.fetch(request);
  }
};
