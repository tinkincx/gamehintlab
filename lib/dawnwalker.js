const DAWNWALKER_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://gamehintlab.com";

export function dawnwalkerPath(slug = "") {
  const cleanSlug = String(slug).trim().replace(/^\/+|\/+$/g, "");
  return cleanSlug
    ? `/the-blood-of-dawnwalker/${cleanSlug}/`
    : "/the-blood-of-dawnwalker/";
}

export function dawnwalkerAbsoluteUrl(slug = "") {
  return `${DAWNWALKER_SITE_URL.replace(/\/$/, "")}${dawnwalkerPath(slug)}`;
}

export const dawnwalkerGame = {
  name: "The Blood of Dawnwalker",
  shortName: "Dawnwalker",
  slug: "the-blood-of-dawnwalker",
  appId: "3751260",
  developer: "Rebel Wolves",
  publisher: "Bandai Namco Entertainment",
  releaseDateIso: "2026-09-03",
  updatedAtIso: "2026-09-03",
  path: dawnwalkerPath(),
  absoluteUrl: dawnwalkerAbsoluteUrl(),
  officialUrl:
    "https://store.steampowered.com/app/3751260/The_Blood_of_Dawnwalker/",
  officialGameUrl: "https://en.bandainamcoent.eu/dawnwalker/the-blood-of-dawnwalker",
  artPath: "/the-blood-of-dawnwalker/game-art.jpg",
  description:
    "Source-checked The Blood of Dawnwalker answers for the 30-day timer, PC stuttering and frame generation, and early Swordmastery, Witchcraft and Vampirism skills."
};

export const dawnwalkerSources = {
  officialStore: {
    label: "Official The Blood of Dawnwalker Steam store",
    url: dawnwalkerGame.officialUrl,
    note:
      "The live store page establishes the PC release, developer, publisher, gameplay description and current minimum and recommended requirements."
  },
  officialGame: {
    label: "Official The Blood of Dawnwalker website",
    url: dawnwalkerGame.officialGameUrl,
    note:
      "Rebel Wolves' official site confirms the premise, supported platforms and the human-by-day, vampire-by-night structure."
  },
  officialAma: {
    label: "Rebel Wolves developer AMA",
    url: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1qjwxdc/the_blood_of_dawnwalker_ama/",
    note:
      "The verified RebelWolvesDevs account explains which actions advance time, the 30-day deadline, exploration, day/night opportunities and the non-linear quest structure."
  },
  officialTimer: {
    label: "Official time-passing mechanic answer",
    url: "https://en.bandainamcoent.eu/dawnwalker/news/community-bulletin-board-2-svartrau-town-crier",
    note:
      "Bandai Namco and Rebel Wolves confirm 30 days and nights, no continuous clock, free exploration and combat, marked action costs and story consequences after the deadline."
  },
  officialSkills: {
    label: "Official Skills & Power bulletin",
    url: "https://en.bandainamcoent.eu/dawnwalker/news/community-bulletin-board-11-skills-power",
    note:
      "Rebel Wolves explains the three skill trees, their day/night availability, shared XP and skill points, learning costs, manuals and corruption gates."
  },
  officialSword: {
    label: "Official Swordmastery bulletin",
    url: "https://en.bandainamcoent.eu/dawnwalker/news/community-bulletin-board-10-swordmastery",
    note:
      "Rebel Wolves describes sword types, manuals and the choice between defense, counters, mobility and offensive pressure."
  },
  pcGamerTimer: {
    label: "PC Gamer launch review",
    url: "https://www.pcgamer.com/games/rpg/the-blood-of-dawnwalker-review/",
    note:
      "A launch-build review provides an independent observation of how the visible time-unit economy affects quests and skill learning."
  },
  techRadarTimer: {
    label: "TechRadar launch review",
    url: "https://www.techradar.com/gaming/the-blood-of-dawnwalker-review",
    note:
      "A second launch-build review independently describes the time pressure and the cost of learning many perks."
  },
  skillsGuide: {
    label: "GamesRadar current skills guide",
    url: "https://www.gamesradar.com/games/action-rpg/blood-of-dawnwalker-perks-skills-abilities/",
    note:
      "This current third-party guide supplies named perk recommendations. They are labeled as editorial advice, not official balance rankings."
  },
  pcGamerSettings: {
    label: "PC Gamer repeatable settings benchmark",
    url: "https://www.pcgamer.com/hardware/the-blood-of-dawnwalker-best-settings-to-tweak/",
    note:
      "A 90-second RTX 4060 and Ryzen 7 7700X test at 1440p compares High, selected quality reductions, DLSS modes and experimental 2x frame generation."
  },
  pcGamerTips: {
    label: "PC Gamer launch tips",
    url: "https://www.pcgamer.com/games/rpg/blood-of-dawnwalker-tips/",
    note:
      "An 80-hour launch guide recommends pairing Perfect Riposte with Perfect Block and taking Endless Hunger early. These are editorial build suggestions, not official rankings."
  },
  frameGenReports: {
    label: "Steam player frame-generation reports",
    url: "https://steamcommunity.com/app/3751260/discussions/0/588436698284787804/",
    note:
      "Launch-day player reports describe systems where a restart changed frame-generation behavior. This is a troubleshooting lead, not a universal developer fix."
  },
  stutterReports: {
    label: "Steam player stuttering reports",
    url: "https://steamcommunity.com/app/3751260/discussions/0/588436698284790255/",
    note:
      "Launch-day reports establish that traversal and frame-time stutter occurs on some PCs, while the varied hardware and results show there is no proven single cause."
  },
  flickerReports: {
    label: "Steam player flicker reports",
    url: "https://steamcommunity.com/app/3751260/discussions/0/588436698284799057/",
    note:
      "Player reports connect some visual flicker to frame generation on their systems. They do not establish that every flicker has the same cause."
  }
};

const rawDawnwalkerPages = [
  {
    slug: "30-day-timer",
    title: "The Blood of Dawnwalker 30-Day Timer: Does Time Run Out?",
    seoTitle: "Dawnwalker 30-Day Timer: What Advances Time?",
    breadcrumbLabel: "30-day timer",
    cardTitle: "How does the 30-day timer actually work?",
    cardSummary:
      "See what advances time, what does not, how the game warns you about a cost and what happens if Coen misses the family deadline.",
    label: "TIME SYSTEM",
    description:
      "How The Blood of Dawnwalker's 30-day timer works: actions that advance time, free exploration, day/night opportunities and what happens when time runs out.",
    intro:
      "The 30-day deadline looks like a real-time countdown, but Rebel Wolves describes it as a resource attached to specific choices. The important decision is not how fast you move through the map; it is whether the next marked quest step, dialogue option or learning action is worth its displayed time cost.",
    quickAnswer:
      "Coen has 30 days and 30 nights, but this is not a real-time clock or a 30-mission limit. Free exploration and combat do not advance time. Finishing quests and certain marked actions or dialogue choices do, and the interface tells you the cost before it is paid. Missing the deadline affects Coen's goal of saving his family, but Rebel Wolves says the game itself does not end. Use the on-screen cost—not a generic walkthrough count—as the authority for your current choice.",
    evidenceTitle: "The core timer rules come directly from Rebel Wolves",
    evidenceNote:
      "The developer AMA establishes the rules below. Launch reviews are used only to describe how the shipped interface felt in play; they do not override the cost shown in your build.",
    publishedAtIso: "2026-09-03",
    updatedAtIso: "2026-09-03",
    sections: [
      {
        heading: "What advances time and what does not",
        type: "table",
        columns: ["Activity", "Does time advance?", "What to check"],
        rows: [
          ["Exploration and ordinary combat", "No, according to Rebel Wolves", "Travel, scout and fight before committing to a marked action"],
          ["Completing a specific quest stage", "Sometimes", "Read the time indicator before turning in or completing the stage"],
          ["Choosing certain dialogue options", "Sometimes", "The interface should show the amount before the choice"],
          ["Other parts of the same quest", "Not always", "Do not assume every objective in a quest has a cost"],
          ["Learning or improving many abilities", "Can cost time", "Check both the skill-point requirement and displayed time cost"],
          ["Waiting for the real-world clock", "No", "The deadline is not a real-time countdown"]
        ],
        note:
          "A quest name alone is not enough to calculate the cost. The specific stage or choice determines whether time moves."
      },
      {
        heading: "Use the 30 days as a budget",
        type: "steps",
        items: [
          "Explore first. Opening routes, finding locations and checking vendors does not consume the story deadline according to the developer.",
          "Before a quest turn-in, dialogue choice or skill purchase, stop and read the time symbol and amount shown by the game.",
          "Compare the cost with the outcome you actually need: information, an ally, equipment, progression or access to another route.",
          "Keep a manual save before an expensive choice when the game allows it. A save protects the decision; it does not create more time.",
          "Use day and night deliberately. Some people, routes and powers are available only at one time, while many quests allow more than one approach.",
          "Do not try to clear every marker in one run. Rebel Wolves designed the story around choosing which opportunities matter to your Coen."
        ]
      },
      {
        heading: "What happens when the deadline expires",
        type: "cards",
        items: [
          {
            title: "The game does not simply end",
            text: "Rebel Wolves says missing the 30-day family deadline does not end the game. It still matters to the story and the outcome of Coen's goal."
          },
          {
            title: "It is not a completion checklist",
            text: "There is no single linear main quest that requires every side story. The campaign is built from the storylines and alliances you choose."
          },
          {
            title: "Inaction is still a choice",
            text: "The deadline creates consequences for priorities. Skipping one opportunity can preserve time for another, but the world may react to what you leave undone."
          },
          {
            title: "Your route is defined by priorities",
            text: "The campaign is non-linear, and Rebel Wolves says your choices and alliances shape the story. Treat the timer as a decision budget instead of a checklist timer."
          }
        ]
      },
      {
        heading: "Day versus night planning",
        type: "table",
        columns: ["Situation", "Day option", "Night option"],
        rows: [
          ["Information", "An awake NPC may answer directly", "The same NPC may be unavailable, forcing another route or a return later"],
          ["Traversal", "Human routes and ordinary access", "Vampiric movement can open different approaches"],
          ["Combat tools", "Swordmastery and Witchcraft", "Swordmastery and Vampirism"],
          ["Quest access", "Some opportunities exist only by day", "Other opportunities or solutions appear only at night"]
        ],
        note:
          "These are planning categories, not promises that every quest has both solutions. Check the current objective and time-of-day marker."
      }
    ],
    faqs: [
      {
        q: "Is The Blood of Dawnwalker timer real time?",
        a: "No. Rebel Wolves says time advances through specific marked actions such as some quest stages and dialogue choices, not while you freely explore or wait in real time."
      },
      {
        q: "Does exploring waste days in Dawnwalker?",
        a: "No. The developer says exploration itself does not advance time, so scouting and route planning are safe until you commit to an action with a displayed cost."
      },
      {
        q: "Does combat advance time in The Blood of Dawnwalker?",
        a: "No. Rebel Wolves' official timer answer says exploration and combat do not push time forward. A marked quest completion or other timed choice can still advance it afterward."
      },
      {
        q: "Does every quest consume time?",
        a: "No. Some quest stages advance time and other stages do not. Read the indicator on the exact action rather than assigning one cost to the whole quest."
      },
      {
        q: "Does the game end after 30 days?",
        a: "Rebel Wolves says the game does not end when the 30-day family deadline is missed, although the deadline still affects the story and Coen's goal."
      },
      {
        q: "Can I complete every quest in one playthrough?",
        a: "Do not assume every storyline belongs in one route. Rebel Wolves describes a non-linear campaign shaped by the quests, choices and alliances you pursue, so use the displayed time costs to protect your priorities."
      }
    ],
    relatedSlugs: ["best-skills-beginner-build", "stuttering-pc-settings"],
    sources: [
      dawnwalkerSources.officialTimer,
      dawnwalkerSources.officialAma,
      dawnwalkerSources.officialSkills,
      dawnwalkerSources.pcGamerTimer,
      dawnwalkerSources.techRadarTimer
    ]
  },
  {
    slug: "stuttering-pc-settings",
    title: "The Blood of Dawnwalker PC Stutter Guide & Best Settings",
    seoTitle: "Dawnwalker PC Stutter Guide & Frame Generation Status",
    breadcrumbLabel: "PC stuttering",
    cardTitle: "Stuttering or frame generation not working on PC?",
    cardSummary:
      "Use a reversible test order, compare your PC with the official requirements and separate traversal stutter, low FPS and frame-generation flicker.",
    label: "PC PERFORMANCE",
    description:
      "The Blood of Dawnwalker stuttering and PC settings guide: official requirements, frame generation, flicker, file verification, FPS caps and safe test order.",
    intro:
      "Launch-day reports describe several different symptoms as 'stutter': low average frame rate, traversal frame-time spikes, frame generation that appears inactive and visual flicker. Those problems do not have one proven cause. Start with the official hardware floor, then change one reversible setting at a time so you can tell what actually helped.",
    quickAnswer:
      "Install the game on an SSD, confirm 16 GB RAM and enough GPU memory, install the current stable GPU driver, restart the PC and verify the game files. Begin at High rather than Ultra, disable overlays, use one upscaler, then test frame generation both off and on with a full game restart after changing it. If frame generation adds flicker, latency or no measurable gain, leave it off and use a stable FPS cap. These are diagnostic steps—not a confirmed universal patch—and current player reports conflict across hardware.",
    evidenceTitle: "Official requirements are facts; launch-day settings results are reports",
    evidenceNote:
      "Rebel Wolves and Steam establish the hardware requirements. The restart, preset and frame-generation observations come from individual player systems, so this page presents them as controlled tests rather than guaranteed fixes.",
    publishedAtIso: "2026-09-03",
    updatedAtIso: "2026-09-03",
    sections: [
      {
        heading: "Check the official PC floor first",
        type: "table",
        columns: ["Part", "Minimum", "Recommended"],
        rows: [
          ["Operating system", "Windows 10, DirectX 12", "Windows 10, DirectX 12"],
          ["Processor", "Intel Core i5-11400F or AMD Ryzen 7 2700X", "Intel Core i7-11700K or AMD Ryzen 7 5700X"],
          ["Memory", "16 GB RAM", "16 GB RAM"],
          ["Graphics", "GeForce GTX 1060 or Radeon RX 580", "GeForce RTX 4060, Radeon RX 7600 XT or Intel Arc B580"],
          ["GPU memory", "6 GB VRAM", "8 GB VRAM"],
          ["Storage", "60 GB on SSD", "60 GB on SSD"]
        ],
        note:
          "These are compatibility requirements, not a guarantee of one target resolution or perfectly flat frame times on every scene. Check the live Steam page for later revisions."
      },
      {
        heading: "Test stuttering in this order",
        type: "steps",
        items: [
          "Restart Windows, close capture tools and unnecessary overlays, and install any fully downloaded game update before benchmarking.",
          "Verify the game files in Steam. Do not delete saves, change firmware or install an unofficial DLL as a first step.",
          "Use an SSD and confirm that RAM and VRAM meet the official floor. Close memory-heavy background apps if usage is near the limit.",
          "Start from the High preset, keep only one resolution upscaler active and test the same 30–60 second route. Record average FPS and the worst spikes.",
          "Change frame generation, then fully restart the game before retesting. Some players report that the setting behaved differently only after a restart.",
          "If frame generation causes flicker, unstable pacing or no clear gain, turn it off. Test a frame cap you can hold consistently instead of chasing the highest counter.",
          "Move one expensive option at a time. If High is smooth but Ultra is not, keep the working preset and wait for measured patch notes before assuming a hardware fault."
        ]
      },
      {
        heading: "A measured RTX 4060 starting point",
        type: "table",
        columns: ["Setting or result", "PC Gamer test value", "How to use it"],
        rows: [
          ["Test system", "RTX 4060, Ryzen 7 7700X, 2560 × 1440", "Do not apply its FPS numbers to every GPU"],
          ["Upscaler", "DLSS Balanced", "Use the equivalent supported upscaler on your GPU and judge image quality"],
          ["Shadow Quality", "Low", "This was the final change that lifted the repeatable route to a 62 FPS average"],
          ["Light, Foliage and Detail Quality", "Medium", "These three plus Low shadows formed the tested custom preset"],
          ["High + DLSS Balanced", "50 FPS average, 35 FPS 1% low", "Baseline in the same 90-second route"],
          ["Custom + DLSS Balanced", "62 FPS average, 46 FPS 1% low", "A larger gain than switching High from Balanced to Performance"],
          ["High + DLSS Balanced + 2× FG", "73 FPS average, 42 FPS 1% low", "Smoother output, but it did not double real performance and added measured latency"]
        ],
        note:
          "This is one repeatable launch test, not a universal preset. The same writer still measured a 53 FPS average in a heavier nighttime fight with the custom settings."
      },
      {
        heading: "Match the fix to the symptom",
        type: "table",
        columns: ["Symptom", "First useful test", "What it proves"],
        rows: [
          ["Low FPS everywhere", "Lower preset or resolution scale and retest", "A meaningful gain points to a GPU or settings limit"],
          ["Brief spikes while moving through the world", "Repeat the same route after restart with overlays off", "A repeatable location suggests traversal or shader-related frame-time behavior, not simply low average FPS"],
          ["Frame generation looks inactive", "Toggle it, apply, restart the game and compare recorded FPS", "Only a measured change establishes that it is active on your system"],
          ["Flicker or artifacts with frame generation", "Disable frame generation while keeping other settings fixed", "If the artifact disappears, leave it off; it does not prove every flicker shares that cause"],
          ["Smooth FPS counter but uneven input", "Disable frame generation and test a stable cap", "Frame pacing or added latency can feel bad even when the average counter rises"]
        ]
      },
      {
        heading: "Avoid fixes that create a second problem",
        type: "cards",
        items: [
          {
            title: "Do not stack upscalers",
            text: "Use one in-game upscaling path at a time. Multiple driver and game overrides make the result impossible to diagnose."
          },
          {
            title: "Do not assume Ultra is the baseline",
            text: "Ultra exists to trade performance for visual quality. High is the better diagnostic starting point on launch builds."
          },
          {
            title: "Do not roll back blindly",
            text: "Current player reports disagree about drivers. Prefer a current stable release unless Rebel Wolves or the GPU vendor names a specific known issue."
          },
          {
            title: "Do not call a forum tip a patch",
            text: "A setting that helps one PC is evidence for a test, not proof of the game's root cause or an official fix."
          }
        ]
      }
    ],
    faqs: [
      {
        q: "What are the best PC settings for The Blood of Dawnwalker?",
        a: "There is no verified universal preset. Start at High, use one upscaler, test frame generation after a full restart and lower one expensive option at a time while repeating the same scene."
      },
      {
        q: "Why is Dawnwalker stuttering on a powerful PC?",
        a: "Launch reports cover different causes and hardware. Separate low average FPS from traversal spikes, overlays, a full VRAM budget and frame-generation pacing before drawing a conclusion."
      },
      {
        q: "How do I make frame generation work in Dawnwalker?",
        a: "Apply the setting, close the game completely, relaunch and compare recorded performance in the same scene. Some players report that a restart was required, but this is not a developer-confirmed fix for every system."
      },
      {
        q: "Should I disable frame generation?",
        a: "Disable it if it causes flicker, unstable pacing, uncomfortable latency or no measurable improvement. A stable native or upscaled FPS cap can feel better than a higher unstable counter."
      },
      {
        q: "Does The Blood of Dawnwalker require an SSD?",
        a: "Yes. The current official minimum and recommended specifications both list 60 GB on an SSD."
      }
    ],
    relatedSlugs: ["30-day-timer", "best-skills-beginner-build"],
    sources: [
      dawnwalkerSources.officialStore,
      dawnwalkerSources.pcGamerSettings,
      dawnwalkerSources.frameGenReports,
      dawnwalkerSources.stutterReports,
      dawnwalkerSources.flickerReports
    ]
  },
  {
    slug: "best-skills-beginner-build",
    title: "The Blood of Dawnwalker Best Skills & Beginner Build",
    seoTitle: "Dawnwalker Best Skills: Beginner Build & Perks",
    breadcrumbLabel: "Best early skills",
    cardTitle: "Which skills should a beginner unlock first?",
    cardSummary:
      "Build a reliable day-and-night core, understand manuals and corruption gates, and avoid spending scarce time on abilities your route cannot use.",
    label: "BEGINNER BUILD",
    description:
      "The Blood of Dawnwalker best early skills and beginner build: Swordmastery core, Witchcraft and Vampirism picks, manuals, corruption and time costs.",
    intro:
      "Dawnwalker has one shared experience bar and one type of skill point, but the three trees do not have equal uptime. Swordmastery works during both day and night, Witchcraft is a daytime discipline and Vampirism awakens at night. That makes a dependable sword core the safest first investment before you specialize around your preferred route.",
    quickAnswer:
      "For a first playthrough, build Swordmastery first because it remains available by day and night. Perfect Block into Perfect Riposte is a strong current editorial pairing if you can land the timing, while Endless Hunger is an efficient early night pick because ordinary kills do not spend story time. Add one daytime Witchcraft tool and one night movement or sustain tool instead of spreading points across every branch. Every unlock can also require time, a manual or enough corruption, so read the full cost before confirming.",
    evidenceTitle: "Tree rules are official; named 'best' perks are editorial recommendations",
    evidenceNote:
      "Rebel Wolves establishes how the three trees, shared points, manuals, corruption and time costs work. Named perk priorities come from a current launch guide and are choices, not developer rankings or permanent balance facts.",
    publishedAtIso: "2026-09-03",
    updatedAtIso: "2026-09-03",
    sections: [
      {
        heading: "What each skill tree is for",
        type: "table",
        columns: ["Tree", "Availability", "Unlock gate", "Beginner role"],
        rows: [
          ["Swordmastery", "Day and night", "Skill points, time and manuals found or bought", "Reliable defense, counters and damage in every time state"],
          ["Witchcraft", "Day", "Skill points, time and magic manuals from ruins, haunted places or practitioners", "Control, damage over time, buffs and debuffs"],
          ["Vampirism", "Night", "Skill points, time and enough corruption from feeding on blood", "Traversal, aggression, feeding and supernatural sustain"]
        ],
        note:
          "All three use the same XP bar and skill-point pool. Spending points in one tree therefore delays an unlock in another."
      },
      {
        heading: "A safe first-build order",
        type: "steps",
        items: [
          "Buy a Swordmastery foundation first. It protects your investment because the tree functions during both day and night.",
          "If your parry timing is reliable, pair Perfect Block with Perfect Riposte for a repeatable defensive-to-critical-hit loop. Otherwise, take a consistency perk such as Sustained Focus first.",
          "Take Endless Hunger early when available if you fight often at night. It rewards normal combat without consuming the 30-day story budget.",
          "Add awareness or reliable group damage next. Sharp Eye and Broad Swing are current editorial recommendations, but your found manuals determine the real order available to you.",
          "Choose one daytime Witchcraft tool that solves a gap—crowd control, a damage-over-time effect or a useful buff—rather than unlocking several overlapping spells.",
          "Choose one night Vampirism tool for movement or sustain. Shapeshift, Voracious Bite and Nourishing Blood are current guide recommendations when their gates fit your route.",
          "Stop before every purchase and check all three costs: skill points, the required manual or corruption level, and the displayed time. The strongest perk is not worth breaking a more important story plan."
        ]
      },
      {
        heading: "Current perk shortlist by job",
        type: "table",
        columns: ["Job", "Current candidates", "Why consider them"],
        rows: [
          ["Core consistency", "Sustained Focus, Endless Effort", "Supports repeated actions instead of one narrow combo"],
          ["Defense and counters", "Perfect Block, Master Fencer", "Rewards timing and the sword tree's defensive route"],
          ["Awareness and pressure", "Sharp Eye, Broad Swing, Swiftness", "Helps reading fights, groups or mobility depending on the encounter"],
          ["Efficient daytime magic", "Frugal Witchcraft, Mercurial Fervour", "Reduces the cost or improves the pace of a Witchcraft-focused approach"],
          ["Daytime control", "Forbidden Sigils, Amalgam, Life Lock", "Adds control, combinations or survivability when the specific spell is available"],
          ["Night movement and sustain", "Shapeshift, Voracious Bite, Nourishing Blood", "Gives Vampirism a clear traversal, feeding or recovery purpose"],
          ["Night aggression", "Death From Above, Endless Hunger, Hastened Corruption", "Supports a more committed corruption and attack route"]
        ],
        note:
          "These names come from a current third-party guide. Availability, balance and prerequisites can change; inspect the live tooltip before spending."
      },
      {
        heading: "Do not waste time or skill points",
        type: "cards",
        items: [
          {
            title: "Do not split evenly",
            text: "A point in every branch produces many weak options. Build one reliable combat loop, then add a tool only when it solves a real problem."
          },
          {
            title: "Do not ignore uptime",
            text: "A powerful Witchcraft or Vampirism ability cannot replace a baseline skill you need in the opposite time state."
          },
          {
            title: "Do not forget the manual gate",
            text: "Leveling alone does not unlock every technique. Sword and magic manuals determine which upgrades are actually available."
          },
          {
            title: "Do not pay time automatically",
            text: "Learning can move the story clock. Compare the displayed cost with the quest or route you are preserving before confirming."
          }
        ]
      }
    ],
    faqs: [
      {
        q: "What is the best first skill tree in The Blood of Dawnwalker?",
        a: "Swordmastery is the safest first foundation because Rebel Wolves says it works during both day and night. Add focused Witchcraft and Vampirism tools after the core is reliable."
      },
      {
        q: "Do Swordmastery, Witchcraft and Vampirism use separate skill points?",
        a: "No. Rebel Wolves says there is one shared experience bar and one type of skill point that can be assigned across all three trees."
      },
      {
        q: "How do I unlock more Swordmastery skills?",
        a: "Find manuals left by soldiers or bandits, or buy them from fencers, then pay the shown skill-point and time requirements."
      },
      {
        q: "How do I unlock more Witchcraft spells?",
        a: "Search ancient ruins and haunted places for magic manuals or find practitioners who sell them, then check the skill-point and time cost."
      },
      {
        q: "How do I unlock Vampirism abilities?",
        a: "Increase Coen's corruption by feeding on blood and embracing the vampiric route. Stronger abilities can require deeper corruption and may demand a sacrifice."
      }
    ],
    relatedSlugs: ["30-day-timer", "stuttering-pc-settings"],
    sources: [
      dawnwalkerSources.officialSkills,
      dawnwalkerSources.officialSword,
      dawnwalkerSources.skillsGuide,
      dawnwalkerSources.pcGamerTips,
      dawnwalkerSources.officialAma
    ]
  }
];

export const dawnwalkerPageList = rawDawnwalkerPages.map((page) => ({
  ...page,
  path: dawnwalkerPath(page.slug)
}));

export const dawnwalkerPages = Object.fromEntries(
  dawnwalkerPageList.map((page) => [page.slug, page])
);
