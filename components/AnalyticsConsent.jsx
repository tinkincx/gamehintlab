"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "gamehintlab-measurement-consent-v3";
const CONSENT_EVENT = "gamehintlab-analytics-consent";

export function AnalyticsConsent() {
  const [choice, setChoice] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      setChoice(window.localStorage.getItem(STORAGE_KEY));
    } catch {
      setChoice(null);
    } finally {
      setReady(true);
    }
  }, []);

  function saveChoice(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // The visitor can still make a session-only choice when storage is blocked.
    }
    setChoice(value);
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
  }

  if (!ready || choice) return null;

  return (
    <aside className="consent-banner" aria-label="Analytics choice">
      <div>
        <strong>Analytics choice</strong>
        <p>
          Allow Google Analytics to store measurement data so we can understand which guides are useful?
          Advertising storage and ad personalization stay disabled. Choosing essential-only access does not limit any guide. <Link href="/privacy/">Privacy</Link>.
        </p>
      </div>
      <div className="consent-actions">
        <button type="button" className="consent-reject" onClick={() => saveChoice("denied")}>Essential only</button>
        <button type="button" className="consent-accept" onClick={() => saveChoice("granted")}>Allow analytics</button>
      </div>
    </aside>
  );
}
