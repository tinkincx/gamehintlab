"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const CONSENT_KEY = "gamehintlab-measurement-consent-v3";
const GUIDE_CTA_SELECTOR = [
  "a[data-ga-event='guide_cta_click']",
  "a.hub-primary",
  "a.goal-card",
  "a.hub-video-card",
  "a.hub-guide-card",
  "a.steam-question-card",
  "a.steam-trending-card",
  ".quick-answer-links a",
  ".article-more-guides a",
  ".side-guide-card a",
  "a.video-library-poster",
  ".video-library-actions a",
  ".watch-actions a",
  ".watch-next a"
].join(",");

function updateAnalyticsConsent(value) {
  window.gtag?.("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: value === "granted" ? "granted" : "denied"
  });
}

function storedAnalyticsConsent() {
  try {
    return window.localStorage.getItem(CONSENT_KEY) === "granted";
  } catch {
    return false;
  }
}

function pagePath() {
  return `${window.location.pathname}${window.location.search}`;
}

function shortText(value, limit = 100) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, limit);
}

function ctaLocation(anchor) {
  if (anchor.dataset.gaLocation) return anchor.dataset.gaLocation;
  if (anchor.closest(".hub-actions")) return "home_masthead";
  if (anchor.closest(".goal-grid")) return "home_goals";
  if (anchor.closest(".hub-video-grid")) return "home_videos";
  if (anchor.closest(".all-guide-grid")) return "home_guide_library";
  if (anchor.closest(".steam-question-grid")) return "steam_hub_questions";
  if (anchor.closest(".steam-trending-card")) return "home_steam_trending";
  if (anchor.closest(".quick-answer-links")) return "guide_quick_answer";
  if (anchor.closest(".article-more-guides")) return "guide_continue";
  if (anchor.closest(".side-guide-card")) return "guide_sidebar";
  if (anchor.closest(".video-library-card")) return "video_library";
  if (anchor.closest(".watch-actions")) return "video_watch_actions";
  if (anchor.closest(".watch-next")) return "video_watch_next";
  return "content_cta";
}

function videoParameters(video, percent) {
  const source = video.currentSrc || video.querySelector("source")?.src || "";

  return {
    video_id: video.dataset.gaVideoId || source,
    video_title: video.dataset.gaVideoTitle || "Guide video",
    video_url: source,
    video_current_time: Math.round(Number(video.currentTime) || 0),
    video_duration: Math.round(Number(video.duration) || 0),
    video_percent: percent,
    page_path: pagePath()
  };
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const analyticsGranted = useRef(false);

  useEffect(() => {
    analyticsGranted.current = storedAnalyticsConsent();
    const videoMilestones = new WeakMap();

    function sendEvent(name, parameters) {
      if (!analyticsGranted.current || typeof window.gtag !== "function") return false;
      window.gtag("event", name, parameters);
      return true;
    }

    function onConsent(event) {
      updateAnalyticsConsent(event.detail);
      analyticsGranted.current = event.detail === "granted";
    }

    function milestonesFor(video) {
      let milestones = videoMilestones.get(video);
      if (!milestones) {
        milestones = new Set();
        videoMilestones.set(video, milestones);
      }
      return milestones;
    }

    function sendVideoMilestone(video, name, percent) {
      const milestones = milestonesFor(video);
      if (milestones.has(name)) return;
      if (sendEvent(name, videoParameters(video, percent))) milestones.add(name);
    }

    function onVideoPlay(event) {
      if (!(event.target instanceof HTMLVideoElement)) return;
      sendVideoMilestone(event.target, "video_start", 0);
    }

    function onVideoTimeUpdate(event) {
      const video = event.target;
      if (!(video instanceof HTMLVideoElement) || !Number.isFinite(video.duration) || video.duration <= 0) return;
      sendVideoMilestone(video, "video_start", 0);
      if (video.currentTime / video.duration >= 0.25) {
        sendVideoMilestone(video, "video_25", 25);
      }
    }

    function onVideoEnded(event) {
      const video = event.target;
      if (!(video instanceof HTMLVideoElement)) return;
      sendVideoMilestone(video, "video_start", 0);
      sendVideoMilestone(video, "video_25", 25);
      sendVideoMilestone(video, "video_complete", 100);
    }

    function onClick(event) {
      const target = event.target instanceof Element ? event.target : event.target?.parentElement;
      const anchor = target?.closest("a[href]");
      if (!anchor) return;

      let url;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      const linkText = shortText(anchor.textContent || anchor.getAttribute("aria-label"));
      const isRobloxGame = /(^|\.)roblox\.com$/i.test(url.hostname) && /^\/games(?:\/|$)/i.test(url.pathname);
      if (isRobloxGame) {
        sendEvent("external_play_click", {
          game_platform: "roblox",
          link_domain: url.hostname,
          link_url: url.href,
          link_text: linkText,
          cta_location: ctaLocation(anchor),
          page_path: pagePath()
        });
        return;
      }

      const isSteamGame = /(^|\.)steampowered\.com$/i.test(url.hostname) && /^\/app(?:\/|$)/i.test(url.pathname);
      if (isSteamGame) {
        sendEvent("external_play_click", {
          game_platform: "steam",
          link_domain: url.hostname,
          link_url: url.href,
          link_text: linkText,
          cta_location: ctaLocation(anchor),
          page_path: pagePath()
        });
        return;
      }

      const isGuideDestination = url.origin === window.location.origin &&
        (/^\/grow-a-chicken-fighter(?:\/|$)/.test(url.pathname) || /^\/how-to-fish(?:\/|$)/.test(url.pathname) || /^\/videos(?:\/|$)/.test(url.pathname));
      if (isGuideDestination && anchor.matches(GUIDE_CTA_SELECTOR)) {
        sendEvent("guide_cta_click", {
          link_path: `${url.pathname}${url.search}`,
          link_text: linkText,
          cta_location: ctaLocation(anchor),
          page_path: pagePath()
        });
      }
    }

    window.addEventListener("gamehintlab-analytics-consent", onConsent);
    document.addEventListener("play", onVideoPlay, true);
    document.addEventListener("timeupdate", onVideoTimeUpdate, true);
    document.addEventListener("ended", onVideoEnded, true);
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("gamehintlab-analytics-consent", onConsent);
      document.removeEventListener("play", onVideoPlay, true);
      document.removeEventListener("timeupdate", onVideoTimeUpdate, true);
      document.removeEventListener("ended", onVideoEnded, true);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.gtag?.("event", "page_view", {
        page_title: document.title,
        page_location: window.location.href,
        page_path: `${pathname}${window.location.search}`
      });
    }, 0);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
