"use client";

const STORAGE_KEY = "gamehintlab-measurement-consent-v3";

export function AnalyticsPreferencesButton() {
  function resetChoice(event) {
    event.stopPropagation();
    try {
      window.localStorage.removeItem(STORAGE_KEY);
      // Remove legacy ad-consent keys created before ads were removed.
      window.localStorage.removeItem("gamehintlab-ad-consent-v2");
      window.localStorage.removeItem("gamehintlab-ad-consent");
    } catch {
      // The event below still withdraws the session choice when storage is blocked.
    }
    window.dispatchEvent(new CustomEvent("gamehintlab-analytics-consent", { detail: "denied" }));
    document.cookie.split(";").forEach((cookie) => {
      const name = cookie.split("=")[0].trim();
      if (name === "_ga" || name.startsWith("_ga_")) {
        document.cookie = `${name}=; Max-Age=0; path=/`;
        document.cookie = `${name}=; Max-Age=0; path=/; domain=.gamehintlab.com`;
      }
    });
    window.location.reload();
  }

  return <button className="footer-preferences" type="button" onClick={resetChoice}>Analytics choices</button>;
}
