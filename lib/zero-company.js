const ZERO_COMPANY_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://gamehintlab.com";

export function zeroCompanyPath(slug = "") {
  const cleanSlug = String(slug).trim().replace(/^\/+|\/+$/g, "");
  return cleanSlug
    ? `/star-wars-zero-company/${cleanSlug}/`
    : "/star-wars-zero-company/";
}

export function zeroCompanyAbsoluteUrl(slug = "") {
  return `${ZERO_COMPANY_SITE_URL.replace(/\/$/, "")}${zeroCompanyPath(slug)}`;
}

export const zeroCompanyGame = {
  name: "STAR WARS Zero Company",
  shortName: "Zero Company",
  slug: "star-wars-zero-company",
  appId: "2075800",
  developer: "Bit Reactor",
  publisher: "Electronic Arts",
  releaseDateIso: "2026-08-27",
  updatedAtIso: "2026-09-01",
  path: zeroCompanyPath(),
  absoluteUrl: zeroCompanyAbsoluteUrl(),
  officialUrl:
    "https://store.steampowered.com/app/2075800/STAR_WARS_Zero_Company/",
  officialEaUrl: "https://www.ea.com/en/games/starwars/zero-company",
  artPath: "/star-wars-zero-company/game-art.jpg",
  description:
    "Source-checked STAR WARS Zero Company answers for enemy-turn soft locks, crashes and stuttering, SteamOS and Steam Deck support, manual saves and Beskar Mode."
};

export const zeroCompanySources = {
  eaGame: {
    label: "Official STAR WARS Zero Company game page",
    url: zeroCompanyGame.officialEaUrl,
    note:
      "EA's official overview confirms the developer, single-player tactics format, platforms and August 27, 2026 launch."
  },
  steamStore: {
    label: "Official STAR WARS Zero Company Steam store",
    url: zeroCompanyGame.officialUrl,
    note:
      "The live store page is used for the current PC release, system requirements and Steam availability."
  },
  launchFaq: {
    label: "Official STAR WARS Zero Company launch FAQ",
    url: "https://www.ea.com/games/starwars/zero-company/faq",
    note:
      "Bit Reactor's launch FAQ covers PC targets, CPU-bound performance, upscalers, Steam Deck status, ultrawide support and Permadeath."
  },
  issueUpdates: {
    label: "Official STAR WARS Zero Company issue updates",
    url: "https://steamcommunity.com/app/2075800/discussions/0/590687864233291254/",
    note:
      "A pinned EA Star Wars developer post acknowledges crashes and CPU threading work and gives current NVIDIA and Intel crash guidance."
  },
  troubleshooting: {
    label: "Official EA troubleshooting guide",
    url: "https://help.ea.com/en/articles/star-wars/zero-company/troubleshoot-common-issues/",
    note:
      "EA's current fix order for startup failures, crashes, freezes, black screens, stuttering and low frame rate."
  },
  eaForumReports: {
    label: "EA Forum Zero Company bug reports",
    url: "https://forums.ea.com/category/star-wars-games-en/discussions/star-wars-zero-company-en",
    note:
      "Multiple players reported enemy turns that never resolve across different missions on EA's hosted community forum. These reports establish the symptom, not a developer-confirmed cause or fix."
  },
  pcGamerReview: {
    label: "PC Gamer launch review",
    url: "https://www.pcgamer.com/games/strategy/star-wars-zero-company-review/",
    note:
      "The reviewer recorded a long hang while an enemy turn tried to resolve, providing an independent launch-period observation rather than an official diagnosis."
  },
  combatGuide: {
    label: "Official EA campaign and combat guide",
    url: "https://help.ea.com/en/articles/star-wars/zero-company/turn-based-tactics-basics/",
    note:
      "EA defines a Campaign as a game save and explains the permanent Permadeath and Beskar Mode choices."
  },
  accessibility: {
    label: "Official EA accessibility resources",
    url: "https://www.ea.com/able/resources/star-wars-zero-company",
    note:
      "EA lists the four difficulty levels as Story, Normal, Hard and Expert and confirms that Permadeath can be toggled before a Campaign."
  },
  deckReport: {
    label: "Live Steam Deck compatibility report",
    url: "https://store.steampowered.com/saleaction/ajaxgetdeckappcompatibilityreport?nAppID=2075800",
    note:
      "Valve's live compatibility response currently resolves the game to the Unsupported category and says SteamOS does not support it."
  },
  pcGamerDeckTest: {
    label: "PC Gamer launch review and Steam Deck test",
    url: "https://www.pcgamer.com/games/strategy/star-wars-zero-company-review/",
    note:
      "A launch-period independent test reported roughly 15–20 FPS after using the lowest settings and maximum FSR on Steam Deck."
  },
  gamingOnLinuxTest: {
    label: "GamingOnLinux SteamOS and Proton 11 test",
    url: "https://www.gamingonlinux.com/2026/08/star-wars-zero-company-is-out-now/",
    note:
      "A launch test found that Proton 11 could start the game on a more powerful Valve Steam Machine. That does not establish usable Steam Deck performance."
  },
  rpgSiteDeckTest: {
    label: "RPG Site Steam Deck test",
    url: "https://www.rpgsite.net/feature/21167-star-wars-zero-company-steam-deck-recommended-settings-full-game-rog-ally-performance",
    note:
      "Testing on Deck OLED and LCD with Proton 11 and Experimental found about 11 FPS in battle-camera movement and sub-15 FPS later, even at extremely low render scale."
  }
};

const rawZeroCompanyPages = [
  {
    slug: "enemy-turn-stuck",
    title: "STAR WARS Zero Company Enemy Turn Stuck: What to Try",
    seoTitle: "Zero Company Enemy Turn Stuck: Fixes & Patch Status",
    breadcrumbLabel: "Enemy turn stuck",
    cardTitle: "Enemy turn stuck or not ending?",
    cardSummary:
      "Separate a slow AI turn from a repeatable combat soft lock, preserve the useful evidence and use the safest recovery order while no dedicated patch is published.",
    label: "NEW SOFT LOCK",
    description:
      "STAR WARS Zero Company enemy turn stuck or not ending? Check the current bug and patch status, safe recovery steps, save warning and EA reporting details.",
    intro:
      "Players are now reporting enemy turns that hang or never resolve in several missions. The symptom is real enough to track, but the evidence has limits: the reports are from players on EA's official community forum, while EA's pinned developer update still names broader crashes and CPU-threading issues rather than this specific combat soft lock.",
    quickAnswer:
      "If the enemy animation has finished and the turn still never advances, treat it as a soft lock rather than ordinary low FPS. Record the mission, round and last enemy action, then exit and load the most recent available save or checkpoint. Restart the game, install pending updates and verify or repair the files before retrying. If it repeats, preserve any usable earlier save and report the reproduction details to EA. As of September 1, EA has not published a dedicated enemy-turn fix, patch version or ETA, and Beskar Mode's one-save rule means recovery cannot be guaranteed.",
    evidenceTitle: "Reported by several players; not separately confirmed by EA",
    evidenceNote:
      "EA-hosted forum reports and an independent review establish that enemy-turn hangs are occurring. They do not establish one root cause. The official issue post currently acknowledges crashes and CPU threading only, so no community workaround is presented as an official fix.",
    publishedAtIso: "2026-09-01",
    updatedAtIso: "2026-09-01",
    sections: [
      {
        heading: "What is confirmed about the enemy-turn soft lock",
        type: "table",
        columns: ["Signal", "What the evidence shows", "What it does not show"],
        rows: [
          ["EA-hosted community reports", "Multiple players describe enemy turns that never finish in different missions", "The posts are player reports, not a developer-confirmed diagnosis"],
          ["Independent launch review", "PC Gamer recorded a long hang while an enemy turn tried to resolve", "A long hang is not proof that every delayed turn is permanently stuck"],
          ["Pinned developer status", "EA Star Wars acknowledges crashes and CPU-threading work", "The post does not name enemy-turn soft locks or promise that the broader fixes cover them"],
          ["Dedicated patch status", "No official enemy-turn fix, patch number or ETA is published as of September 1", "A mod, forum tip or changed setting is not a shipped fix"]
        ],
        note:
          "The correct current label is a reported combat soft lock with no dedicated official fix—not an officially diagnosed AI, graphics or save-system bug."
      },
      {
        heading: "Try these recovery steps in the safest order",
        type: "steps",
        items: [
          "Give an unusually slow enemy action a brief chance to finish. If characters or effects are still resolving, a delay is not yet proof of a permanent soft lock.",
          "If the menu still responds, note the mission name, round, last enemy that acted and the exact action or animation on screen. Capture a short clip or screenshot before leaving.",
          "Exit to the main menu if possible; otherwise close the game. Reopen the most recent available save or checkpoint. This is a recovery attempt, not a guaranteed fix.",
          "Preserve any earlier manual save that opens before the stuck turn. Do not overwrite the only usable fallback while trying to reproduce the problem.",
          "Restart the game and platform, then install pending game, Steam, EA app, Windows or console updates before retrying the mission.",
          "On PC, verify the files in Steam or Epic, or use Repair from the game's tile in the EA app. EA lists missing or corrupted files as a cause of freezes and unexpected errors.",
          "If the same mission and action still lock, send EA the platform, hardware, mission, round, last enemy action, reproduction steps and any save, video or exact error the report form accepts."
        ]
      },
      {
        heading: "Slow turn, soft lock or full freeze?",
        type: "table",
        columns: ["What you see", "Most accurate label", "Useful next move"],
        rows: [
          ["Enemy actions are slow but the next actor eventually moves", "Long AI resolution or performance delay", "Record how long and where it happens; check updates and performance separately"],
          ["Ambient animation continues and menus may open, but the enemy turn never advances", "Combat soft lock", "Capture the last action, exit and reload, then test for a repeat"],
          ["The whole program and menus stop responding", "Application freeze", "Restart, update, verify files and use the broader crash/freeze guide"],
          ["The same enemy, mission or action locks after every reload", "Repeatable bug report", "Preserve the save and submit exact reproduction steps to EA"]
        ],
        note:
          "These labels describe symptoms. They do not claim the game has one shared technical cause for every stuck turn."
      },
      {
        heading: "Do not turn an unverified workaround into a bigger loss",
        type: "cards",
        items: [
          {
            title: "Do not delete the Campaign",
            text: "No official source says deleting saves fixes the enemy-turn problem. Preserve the last usable state until EA publishes specific recovery guidance."
          },
          {
            title: "Beskar Mode has no manual fallback",
            text: "EA says Beskar Mode uses one game save and disables manual saving. A stuck state may therefore have fewer recovery options, and this page cannot promise restoration."
          },
          {
            title: "Graphics changes are not a proven logic fix",
            text: "Lower settings can help low frame rate, but EA has not said they repair an enemy-turn soft lock. Keep performance troubleshooting separate from the turn-state bug."
          },
          {
            title: "Mods are not the official patch",
            text: "Do not install a mod, change CPU affinity or edit hidden files solely because a forum comment claims success. None is a dedicated EA fix for this symptom."
          }
        ]
      },
      {
        heading: "Include this in an EA bug report",
        type: "checklist",
        items: [
          "Platform and storefront: Steam, EA app, Epic, PlayStation 5 or Xbox Series X|S.",
          "Mission name, Campaign cycle, round number and objective state.",
          "The last enemy, ability, item or animation before the turn stopped.",
          "Whether the menu, camera and ambient character animations still responded.",
          "Whether loading the same save reproduces the lock and whether the Campaign uses Beskar Mode.",
          "Game version, device hardware, graphics-driver version on PC and the updates or file checks already tried.",
          "A short video, screenshot and save file if the EA report channel allows attachments."
        ]
      }
    ],
    faqs: [
      {
        q: "Why is STAR WARS Zero Company stuck on the enemy turn?",
        a: "Several players have reported enemy turns that never resolve, but EA has not published one confirmed root cause. The current official status post only names broader crashes and CPU-threading work."
      },
      {
        q: "What do I do if the enemy turn is not ending?",
        a: "Record the mission, round and last enemy action, then exit and load the most recent available save or checkpoint. Restart and update the game, verify or repair files on PC, and report the exact reproduction steps if it happens again."
      },
      {
        q: "Has EA fixed the Zero Company enemy-turn soft lock?",
        a: "No dedicated enemy-turn patch, version or ETA is published as of September 1, 2026. Install official updates when they appear, but do not assume a broader crash note has fixed this separate symptom."
      },
      {
        q: "Is a long enemy turn always a soft lock?",
        a: "No. PC Gamer observed a long hang while a turn tried to resolve, and a delayed turn may eventually continue. Call it a soft lock when the action has finished but control never advances."
      },
      {
        q: "Can I recover a stuck turn in Beskar Mode?",
        a: "Recovery is not guaranteed. EA says Beskar Mode uses one save and disables manual saving, so it lacks the normal fallback of loading a separate manual save."
      },
      {
        q: "Where should I report a repeatable enemy-turn bug?",
        a: "The official launch FAQ directs bug reports to EA's Zero Company forum. Include the mission, round, last action, platform, save mode, reproduction steps and any clip or save the form accepts."
      }
    ],
    relatedSlugs: ["crash-stutter-fix", "difficulty-permadeath", "steam-deck"],
    sources: [
      zeroCompanySources.eaForumReports,
      zeroCompanySources.pcGamerReview,
      zeroCompanySources.issueUpdates,
      zeroCompanySources.troubleshooting,
      zeroCompanySources.launchFaq,
      zeroCompanySources.combatGuide
    ]
  },
  {
    slug: "crash-stutter-fix",
    title: "STAR WARS Zero Company Crashing? Official Fixes & CPU Threading Status",
    seoTitle: "STAR WARS Zero Company Crash Fixes & CPU Threading Status",
    breadcrumbLabel: "Crash and stutter fixes",
    cardTitle: "Crashing, stuttering or stuck on a black screen?",
    cardSummary:
      "Use EA's official fix order, then separate CPU-bound frame-rate limits from damaged files, old drivers and launcher problems.",
    label: "PC FIXES",
    description:
      "Fix STAR WARS Zero Company crashes, stuttering, black screens and launch failures in the safest order using EA's official PC troubleshooting steps.",
    intro:
      "EA has acknowledged launch crashes and CPU threading problems, but an acknowledged issue is not the cause of every failure. Start with the current official status, then use the reversible checks EA recommends to separate a known launch issue from damaged files, a driver, background load or unsupported hardware.",
    quickAnswer:
      "EA Star Wars says it is working on fixes for crashes and CPU threading, but the pinned status post does not name a patch or release time as of September 1. If you use DLSS with NVIDIA Game Ready Driver 610.88 or older, update the driver; EA says that may help. Some Intel 13th/14th Gen desktop crashes may improve after a manufacturer-supported BIOS update. For other cases, restart and update, verify files, close background apps, update drivers and test the official graphics path before contacting support.",
    evidenceTitle: "Officially acknowledged, not universally diagnosed",
    evidenceNote:
      "EA has confirmed crash and CPU-threading work, but it has not said every crash shares that cause. Driver and BIOS changes are described as things that may help, not guaranteed fixes. Avoid firmware, clock or security changes you do not understand.",
    publishedAtIso: "2026-08-30",
    updatedAtIso: "2026-09-01",
    sections: [
      {
        heading: "Official crash and CPU threading status",
        type: "table",
        columns: ["Issue", "Official status on September 1", "Safe next action"],
        rows: [
          ["Crashes and CPU threading", "EA says fixes are being implemented; no patch version or ETA is published", "Install official updates when released and avoid treating user workarounds as a shipped fix"],
          ["NVIDIA crash while using DLSS", "Driver 610.88 or older may be involved on some PCs", "Update to the latest stable Game Ready Driver; EA says this may help"],
          ["Intel 13th/14th Gen desktop crash", "Processor instability may cause crashes on some systems", "Use the latest manufacturer-supported BIOS guidance before considering advanced tuning"],
          ["Low FPS or stutter", "The game is officially described as CPU-bound", "Use TSR, DLSS or FSR for the published target and test CPU/background load separately"],
          ["Other launch or black-screen failure", "No single root cause is confirmed", "Follow the reversible troubleshooting order below"]
        ],
        note:
          "CPU-bound performance and the acknowledged CPU-threading issue are related topics, but the official posts do not say they are the same cause in every situation."
      },
      {
        heading: "Try the safe crash and stutter fixes in this order",
        type: "steps",
        items: [
          "Exit the game, restart the PC, then launch it again. This clears a one-session failure before you change anything else.",
          "Install pending STAR WARS Zero Company, Steam or EA app, Windows and console updates. A mixed game-and-platform version can cause launch or loading problems.",
          "Compare your PC with the official minimum target: Windows 10 or 11, an i5-8400 or Ryzen 5 2600X, 16 GB RAM, a GTX 1080, RX 5600 XT or Intel Arc B580, and 50 GB free storage.",
          "Close nonessential background apps and overlays. This matters more when the CPU or memory is already near the minimum target.",
          "Verify the files in Steam or Epic, or choose Repair from the three-dot menu on the game's tile in the EA app. Corrupt or missing files can cause crashes, freezes, startup failures and unexpected errors.",
          "Install the latest stable graphics driver. NVIDIA DLSS users on Game Ready Driver 610.88 or older should update; if the GPU is Intel Arc, EA also recommends enabling Resizable BAR through the hardware manufacturer's supported method.",
          "If the PC uses an affected Intel 13th or 14th Gen desktop processor, check the system or motherboard maker's latest BIOS guidance. A BIOS update can carry risk, so do not improvise beyond the supported instructions.",
          "Open Options → Graphics and lower the Display and Anti-aliasing & Upscaling groups. Use the recommended TSR, DLSS or FSR path before assuming an Ultra preset should hold the published frame-rate target.",
          "If the issue remains, record the exact error, platform, start time, hardware and the fixes already tried before contacting EA support."
        ]
      },
      {
        heading: "Match the symptom to the next useful check",
        type: "table",
        columns: ["Symptom", "Check first", "Why"],
        rows: [
          ["Will not launch", "Updates, requirements, file verification", "EA lists pending updates, unsupported hardware and missing files as common causes"],
          ["Black screen", "Graphics driver, files, minimum specs", "EA names all three in its black-screen answer"],
          ["Crash or freeze", "Background apps, files, driver", "Each can interrupt loading or active play"],
          ["Low FPS or stutter", "CPU load, upscaler, driver, graphics groups", "The developer describes the game as CPU-bound and recommends upscaling for its targets"],
          ["Intel Arc low FPS", "Resizable BAR and current driver", "EA specifically calls out Resizable BAR for Intel Arc"],
          ["Download or update failure", "Connection, platform status and cache", "EA separates installation problems from in-game performance problems"]
        ],
        note:
          "Change one layer at a time and retest the same scene. If five settings change together, you will not know which one mattered."
      },
      {
        heading: "Why a high-end GPU can still stutter",
        type: "cards",
        items: [
          {
            title: "The official FAQ calls the game CPU-bound",
            text: "Bit Reactor says individual graphics settings may have less effect on frame rate than they do in more GPU-bound games. A powerful GPU does not automatically remove a CPU or frame-pacing bottleneck."
          },
          {
            title: "The published targets use upscaling",
            text: "The launch FAQ says the recommended 1440p/60 target is best reached with TSR or a vendor upscaler such as DLSS or FSR. Native rendering is not the stated target."
          },
          {
            title: "A damaged file looks different from low FPS",
            text: "A repeatable crash at launch or during the same load can justify file verification. Broad frame-rate dips across busy scenes point more toward load, settings, drivers or CPU limits."
          },
          {
            title: "Do not start with dangerous changes",
            text: "The official guide warns that advanced PC changes can cause harm when done incorrectly. Do the reversible checks first and contact support with evidence if they fail."
          }
        ]
      },
      {
        heading: "Capture this before asking for support",
        type: "checklist",
        items: [
          "Exact error text or a screenshot of the black screen or crash dialog.",
          "PC platform: Steam, EA app or Epic Games, plus the account or platform ID requested by EA.",
          "CPU, GPU, RAM, Windows version and current graphics-driver version.",
          "Whether the failure happens at launch, while loading a save, in The Den, exploration or tactical combat.",
          "Date and time the issue began and whether it started after an update.",
          "A short list of the fixes already tried so support does not send you through the same loop."
        ]
      }
    ],
    faqs: [
      {
        q: "Has EA acknowledged STAR WARS Zero Company crashes and the CPU threading issue?",
        a: "Yes. A pinned EA Star Wars developer post says the team is aware of emerging crashes and CPU threading issues and is implementing fixes."
      },
      {
        q: "Is there an official STAR WARS Zero Company crash patch yet?",
        a: "The current pinned status post does not name a released patch version or ETA. Install official updates when they appear rather than treating a community workaround as the finished fix."
      },
      {
        q: "What should NVIDIA DLSS users try if the game crashes?",
        a: "EA says PCs using DLSS with NVIDIA Game Ready Driver 610.88 or older may benefit from updating to the latest Game Ready Driver. The wording is 'might help,' not a guarantee."
      },
      {
        q: "What should Intel 13th or 14th Gen desktop users try?",
        a: "EA says instability on some of those processors may cause crashes and that updating the system BIOS may help. Follow the PC or motherboard manufacturer's supported instructions because firmware changes carry risk."
      },
      {
        q: "How do I fix STAR WARS Zero Company crashing on PC?",
        a: "Use the reversible official order: restart, install updates, confirm the system requirements, close background apps, verify or repair files, update the graphics driver and test lower graphics settings. If the crash remains, collect the exact error and hardware details for EA support."
      },
      {
        q: "Why does STAR WARS Zero Company stutter on a good GPU?",
        a: "Bit Reactor says the game is CPU-bound, so individual graphics settings may not change frame rate as much as expected. The developer recommends TSR, DLSS or FSR for the published performance targets."
      },
      {
        q: "How do I fix a black screen in STAR WARS Zero Company?",
        a: "EA says an old graphics driver, corrupted game files or a PC below the minimum requirements can cause a black screen. Check those after restarting and installing pending updates."
      },
      {
        q: "Should Intel Arc players enable Resizable BAR?",
        a: "Yes. EA specifically recommends turning on Resizable BAR for Intel Arc cards to improve FPS, using the supported instructions from the PC or motherboard manufacturer."
      },
      {
        q: "Does STAR WARS Zero Company need the EA app on Steam?",
        a: "No. The official launch FAQ says the Steam version is Steam-native and does not require the EA app launcher."
      }
    ],
    relatedSlugs: ["enemy-turn-stuck", "steam-deck", "difficulty-permadeath"],
    sources: [
      zeroCompanySources.issueUpdates,
      zeroCompanySources.troubleshooting,
      zeroCompanySources.launchFaq,
      zeroCompanySources.steamStore
    ]
  },
  {
    slug: "steam-deck",
    title: "Does STAR WARS Zero Company Support SteamOS or Steam Deck?",
    seoTitle: "STAR WARS Zero Company SteamOS & Steam Deck Status",
    breadcrumbLabel: "SteamOS and Steam Deck status",
    cardTitle: "Does Zero Company support SteamOS or Steam Deck?",
    cardSummary:
      "Separate Valve's current Unsupported badge, Proton launch evidence and Deck-specific frame-rate tests before buying for SteamOS or Deck.",
    label: "STEAMOS + DECK",
    description:
      "STAR WARS Zero Company SteamOS and Steam Deck status: Valve currently says Unsupported, while Proton can boot on some SteamOS hardware but Deck performance remains poor.",
    intro:
      "SteamOS support and Steam Deck playability are not the same question. Valve's live compatibility response currently marks the game Unsupported for Deck, SteamOS and Steam Machine. A separate Proton 11 test shows the game can boot on a more powerful SteamOS device, while multiple Deck tests show the handheld still falls far below a useful performance target.",
    quickAnswer:
      "Do not buy STAR WARS Zero Company specifically for native Steam Deck play today. Valve's live report returns Unsupported for Deck, SteamOS and Steam Machine, and Bit Reactor did not promise launch verification. Proton 11 has booted the game on a more powerful Valve Steam Machine, so 'Unsupported' does not prove that every SteamOS device is unable to start it. But Deck-specific tests found roughly 11–25 FPS at extremely low settings or render scale. Use Windows PC or console for the reliable native path, or stream from a stronger PC to Deck.",
    evidenceTitle: "Booting through Proton is not the same as Deck playability",
    evidenceNote:
      "Valve's badge is the current support signal. Independent tests explain the edge cases: one stronger SteamOS machine can launch through Proton, while the Deck's hardware still produces poor native performance. Neither test overrides the live Unsupported rating.",
    publishedAtIso: "2026-08-30",
    updatedAtIso: "2026-09-01",
    sections: [
      {
        heading: "Current SteamOS and Steam Deck support status",
        type: "table",
        columns: ["Signal", "Current result", "What it means"],
        rows: [
          ["Valve live Steam Deck category", "Unsupported", "Valve's program defines this as currently not functional on Steam Deck"],
          ["Valve live SteamOS / Steam Machine result", "Unsupported", "The compatibility response also returns the SteamOS-not-supported result"],
          ["Developer launch FAQ", "Not Steam Deck Verified at launch", "Bit Reactor promised to update the community if that changes"],
          ["Proton on stronger SteamOS hardware", "Can boot in one launch test", "GamingOnLinux ran Proton 11 on a Valve Steam Machine; this was not a Steam Deck test"],
          ["Steam Deck launch tests", "Roughly 11–25 FPS in demanding scenes", "RPG Site and PC Gamer found very poor results even at extremely low settings or render scale"],
          ["Purchase recommendation", "Avoid native Deck play", "Use another platform or stream from a stronger PC while the live status and measured performance remain poor"]
        ],
        note:
          "Status can change after patches. The Valve compatibility response is live, while the developer and media observations are launch-period evidence."
      },
      {
        heading: "What to do if you already own the game",
        type: "steps",
        items: [
          "Check the live compatibility result before testing; do not rely on an old social post or a launch-day screenshot.",
          "Install all game and SteamOS updates. A later patch can change behavior even before the formal badge changes.",
          "Treat any Proton launch as an experiment, not a supported configuration. A successful boot on a stronger SteamOS machine does not predict Deck frame rate.",
          "Keep the platform refund window and play-time limit in mind if Steam Deck is your only device. Do not spend the entire window troubleshooting.",
          "Use a Windows PC, PlayStation 5 or Xbox Series console for the reliable native path, or Remote Play from a stronger PC if the Deck screen is the goal."
        ]
      },
      {
        heading: "Why the current answer is no",
        type: "cards",
        items: [
          {
            title: "Valve says Unsupported today",
            text: "The live compatibility endpoint resolves to category 1 for Deck, SteamOS and Steam Machine. Valve defines Unsupported as currently not functional on Deck, although individual unsupported setups can still behave differently."
          },
          {
            title: "The developer did not promise launch support",
            text: "Bit Reactor's official FAQ says the game would not be Steam Deck Verified at launch and that the community would be updated if anything changed."
          },
          {
            title: "Proton can boot on stronger SteamOS hardware",
            text: "GamingOnLinux reported an out-of-box Proton 11 launch on a Valve Steam Machine. This means Proton itself is not a universal launch blocker, but it is not evidence of usable Deck performance."
          },
          {
            title: "Deck-specific tests remain far below target",
            text: "RPG Site recorded about 11 FPS while moving the battle camera and later dips to 15 FPS or less at 25% render scale. PC Gamer separately found about 15–20 FPS at the lowest settings with maximum FSR."
          }
        ]
      },
      {
        heading: "What would change this recommendation",
        type: "checklist",
        items: [
          "Valve moves the live compatibility category from Unsupported to Playable or Verified.",
          "Bit Reactor publishes a Deck or SteamOS support update.",
          "Repeatable post-patch tests show stable performance across combat, exploration, The Den and cutscenes.",
          "Text, controller prompts and input no longer require workarounds that block normal play.",
          "The recommendation is rechecked after a major game or SteamOS update rather than copied from launch day."
        ]
      }
    ],
    faqs: [
      {
        q: "Is STAR WARS Zero Company Steam Deck Verified?",
        a: "No. Valve's live report currently marks it Unsupported, and Bit Reactor said it would not be Steam Deck Verified at launch."
      },
      {
        q: "Can STAR WARS Zero Company run on Steam Deck?",
        a: "It can start in some unsupported configurations, but current Deck tests do not make native play recommendable. RPG Site saw roughly 11 FPS during battle-camera movement at 25% render scale, while PC Gamer reported about 15–20 FPS at the lowest settings with maximum FSR."
      },
      {
        q: "Does STAR WARS Zero Company run on SteamOS?",
        a: "Valve's live compatibility report currently returns Unsupported for SteamOS and Steam Machine. However, GamingOnLinux launched it with Proton 11 on a more powerful Valve Steam Machine. That proves some SteamOS hardware can boot the game, not that the setup is officially supported or that Steam Deck performance is usable."
      },
      {
        q: "Does Proton Experimental fix STAR WARS Zero Company on Steam Deck?",
        a: "No reliable performance fix is established. RPG Site tested Proton 11 and Experimental on Deck and still found very poor frame rates at extremely low render scale."
      },
      {
        q: "Why is STAR WARS Zero Company Unsupported on Steam Deck?",
        a: "Valve's compatibility response says SteamOS does not support the game. The public result does not identify one single technical cause, so claims about a specific anti-cheat, launcher or graphics feature would be speculation."
      },
      {
        q: "Will STAR WARS Zero Company get Steam Deck support later?",
        a: "No date or promise is published. The developer only said it would update the community if the launch status changed."
      },
      {
        q: "What platforms currently support STAR WARS Zero Company?",
        a: "The official release covers PC through Steam, EA app and Epic Games, plus PlayStation 5 and Xbox Series X|S."
      }
    ],
    relatedSlugs: ["crash-stutter-fix", "difficulty-permadeath"],
    sources: [
      zeroCompanySources.deckReport,
      zeroCompanySources.launchFaq,
      zeroCompanySources.gamingOnLinuxTest,
      zeroCompanySources.rpgSiteDeckTest,
      zeroCompanySources.pcGamerDeckTest,
      zeroCompanySources.eaGame
    ]
  },
  {
    slug: "difficulty-permadeath",
    title: "STAR WARS Zero Company Difficulty & Permadeath Explained",
    seoTitle: "STAR WARS Zero Company Difficulty & Permadeath Guide",
    breadcrumbLabel: "Difficulty and Permadeath",
    cardTitle: "Which difficulty and Permadeath setting should you choose?",
    cardSummary:
      "Compare Story, Normal, Hard and Expert, then understand the locked Permadeath and one-save Beskar Mode choices before starting.",
    label: "DIFFICULTY",
    description:
      "STAR WARS Zero Company difficulty explained: Story, Normal, Hard and Expert, plus Permadeath injuries, Beskar Mode saves and locked Campaign choices.",
    intro:
      "Difficulty, Permadeath and Beskar Mode are separate decisions. EA confirms four difficulty levels, while the Campaign screen separately controls permanent Operator loss and one-save rules. Read all three before you press Start Campaign because the selected settings are locked for that run.",
    quickAnswer:
      "Choose Story for the most forgiving story-focused run, Normal for the intended middle ground, Hard for more tactical pressure, or Expert for the highest listed difficulty. Permadeath is a separate toggle: with it on, an Operator who reaches three injuries becomes Killed in Action. Beskar Mode is also separate and restricts the Campaign to one save with no manual saves. EA says these Campaign choices cannot be changed after you start, so a different setup requires a new Campaign.",
    evidenceTitle: "Difficulty, Permadeath and Beskar are separate",
    evidenceNote:
      "EA publishes the level names and the permanent Campaign rules, but it does not provide a complete numeric table for enemy health, aim or damage at each level. No hidden percentages are invented here.",
    publishedAtIso: "2026-08-30",
    updatedAtIso: "2026-08-30",
    sections: [
      {
        heading: "Difficulty levels, Permadeath and Beskar Mode compared",
        type: "table",
        columns: ["Choice", "Current official rule", "Use it when"],
        rows: [
          ["Story", "The most forgiving of EA's four listed difficulty levels", "The story matters more than tactical punishment"],
          ["Normal", "The middle starting point between Story and Hard", "You want a first run without choosing either extreme"],
          ["Hard", "A higher-pressure option below Expert", "You already understand turn-based tactics and want mistakes to matter more"],
          ["Expert", "The highest difficulty level listed by EA", "You deliberately want the hardest named ruleset"],
          ["Permadeath on", "Three injuries can make an Operator Killed in Action and permanently remove them", "Roster loss is part of the run you want"],
          ["Beskar Mode on", "One game save and no manual saving; consequences are permanent", "A no-save-scumming challenge is the point of the Campaign"]
        ],
        note:
          "EA lists the four difficulty names but does not publish a complete numeric modifier table. Permadeath and Beskar Mode are separate switches, not automatic parts of a named level."
      },
      {
        heading: "Choose the right first-Campaign setup",
        type: "steps",
        items: [
          "Choose New Campaign, then pick Story, Normal, Hard or Expert. If this is your first tactics game, start with Story or Normal rather than using permanent-loss settings to prove a point.",
          "Decide on Permadeath separately. Leave it off if losing an authored Operator would make you stop playing; turn it on only if adapting to roster loss is part of the experience you want.",
          "Decide on Beskar Mode separately. Leave it off if you want manual saves; turn it on only when a one-save run with permanent consequences is intentional.",
          "Read the final Difficulty Settings screen before selecting Start Campaign. EA says the choices cannot be changed after the Campaign begins.",
          "If the combination feels wrong later, keep the existing Campaign and create another one with different settings. There is no confirmed mid-Campaign switch."
        ]
      },
      {
        heading: "How Permadeath actually works",
        type: "cards",
        items: [
          {
            title: "Downed is not automatically dead",
            text: "A Downed Operator cannot act, but a teammate can Rally them back into the mission. Being Downed also causes an Injury."
          },
          {
            title: "Three injuries can become permanent",
            text: "With Permadeath on, an Operator who suffers three injuries becomes Killed in Action and is permanently removed from the squad."
          },
          {
            title: "Hawks follows a different rule",
            text: "Hawks cannot be permanently removed. If Hawks is defeated, the mission fails and must be restarted whether Permadeath is on or off."
          },
          {
            title: "Beskar Mode controls saves, not the injury counter",
            text: "Beskar Mode's confirmed effect is the one-save, no-manual-save restriction. Permadeath determines permanent Operator loss."
          }
        ]
      },
      {
        heading: "Avoid the four expensive setup mistakes",
        type: "checklist",
        items: [
          "Do not confuse Expert with Permadeath; the difficulty level and permanent-loss toggle are separate choices.",
          "Do not enable Beskar Mode for a first run unless a one-save challenge is the point of that run.",
          "Do not assume Permadeath can be disabled after an important Operator is injured; the setting is Campaign-locked.",
          "Create a second Campaign when testing different difficulty or Permadeath rules.",
          "Do not trust a table of exact enemy modifiers unless the values can be checked in the current build or official notes.",
          "Check the live mode description after a major patch because difficulty and save behavior are version-sensitive."
        ]
      }
    ],
    faqs: [
      {
        q: "How many difficulty levels are in STAR WARS Zero Company?",
        a: "EA lists four levels: Story, Normal, Hard and Expert. Permadeath and Beskar Mode are separate Campaign options."
      },
      {
        q: "What difficulty should I choose in STAR WARS Zero Company?",
        a: "Use Story for the most forgiving story-first run, Normal for a balanced first choice, Hard if you already understand tactics games, and Expert only when you deliberately want the highest listed difficulty."
      },
      {
        q: "How does Permadeath work in STAR WARS Zero Company?",
        a: "With Permadeath on, an Operator who suffers three injuries becomes Killed in Action and is permanently removed. A Downed Operator can first be Rallied; Hawks follows a mission-failure rule instead."
      },
      {
        q: "Can you turn Permadeath off mid-Campaign?",
        a: "No. Permadeath remains on or off for the entire Campaign. A different setting requires a new Campaign."
      },
      {
        q: "Can you manually save in Beskar Mode?",
        a: "No. EA describes Beskar Mode as one game save with no manual saving. The setting cannot be turned off after the Campaign starts."
      },
      {
        q: "Does a Downed Operator die immediately?",
        a: "No. A teammate can Rally a Downed Operator. With Permadeath on, the permanent-loss rule applies after three injuries; Hawks instead causes an immediate mission failure when defeated."
      }
    ],
    relatedSlugs: ["crash-stutter-fix", "steam-deck"],
    sources: [
      zeroCompanySources.accessibility,
      zeroCompanySources.combatGuide,
      zeroCompanySources.launchFaq,
      zeroCompanySources.eaGame
    ]
  }
];

export const zeroCompanyPageList = rawZeroCompanyPages.map((page) => ({
  ...page,
  path: zeroCompanyPath(page.slug)
}));

export const zeroCompanyPages = Object.fromEntries(
  zeroCompanyPageList.map((page) => [page.slug, page])
);
