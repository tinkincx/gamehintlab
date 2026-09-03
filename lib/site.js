import { publishedGuides } from "./publishing";

export const site = {
  name: "Game Hint Lab",
  gameName: "Grow a Chicken Fighter",
  gameSlug: "grow-a-chicken-fighter",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gamehintlab.com",
  description:
    "Source-checked guides, fixes and current answers for new and actively updated games, with changing facts clearly dated and linked to evidence.",
  gameDescription:
    "Grow a Chicken Fighter Roblox guides for codes, progression, chickens, eggs, abilities, fusion and rebirth.",
  publishedAtIso: "2026-08-12",
  checkedAt: "August 19, 2026",
  checkedAtIso: "2026-08-19",
  officialGameUrl:
    "https://www.roblox.com/games/94640181989498/Grow-a-Chicken-Fighter"
};

export const officialSource = {
  label: "Official Roblox game page",
  url: site.officialGameUrl,
  note: "Developer description and current official code."
};

export const sources = {
  official: officialSource,
  gameApi: {
    label: "Roblox games API",
    url: "https://games.roblox.com/v1/games?universeIds=10338952197",
    note: "Creator, dates and live game snapshot."
  },
  arenaEventApi: {
    label: "Official Roblox virtual-events API",
    url: "https://apis.roblox.com/virtual-events/v1/universes/10338952197/virtual-events",
    note: "Official Arena + Admin Abuse description, event window and scheduled next-update window."
  },
  arenaEventPage: {
    label: "Official Arena + Admin Abuse event page",
    url: "https://www.roblox.com/events/6702823392082526789",
    note: "Player-facing Roblox event page for the August 22–29 Arena event."
  },
  nextUpdateEventPage: {
    label: "Official NEXT UPDATE! event page",
    url: "https://www.roblox.com/events/4714578632423637779",
    note: "Roblox schedules this event for August 29; its current description does not reveal the update content."
  },
  votesApi: {
    label: "Roblox votes API",
    url: "https://games.roblox.com/v1/games/votes?universeIds=10338952197",
    note: "Vote snapshot."
  },
  group: {
    label: "Official Grow a Chicken Fighter Roblox group",
    url: "https://www.roblox.com/communities/180466034/Grow-a-Chicken-Fighter",
    note: "Verified creator group, renamed from Sergio Verse Games; its public description advertises early codes, perks, rewards and update previews."
  },
  groupApi: {
    label: "Roblox group API",
    url: "https://groups.roblox.com/v1/groups/180466034",
    note: "Official group name, description and dynamic member count."
  },
  discord: {
    label: "Reported Grow a Chicken Fighter community Discord",
    url: "https://discord.com/invite/qmrbZSHf7n",
    note: "MrGuider reports this invite. It resolved to a same-named server, but developer ownership is not independently proven."
  },
  discordApi: {
    label: "Discord invite API",
    url: "https://discord.com/api/v10/invites/qmrbZSHf7n?with_counts=true&with_expiration=true",
    note: "Destination name and dynamic approximate member counts only; this does not prove developer ownership."
  },
  redditCodes: {
    label: "Current community code report",
    url: "https://www.reddit.com/r/RobloxCodesUnite/comments/1vi0hgd/grow_a_chicken_fighter_codes_for_roblox/",
    note: "Repost that links back to MrGuider; not an independent corroborating source."
  },
  mrGuiderCodes: {
    label: "MrGuider code listing",
    url: "https://www.mrguider.org/roblox/grow-a-chicken-fighter-codes/",
    note: "Single third-party report for additional codes, reward details and a community invite."
  },
  nerdsChalkCodes: {
    label: "NerdsChalk code listing",
    url: "https://nerdschalk.com/grow-a-chicken-fighter-codes/",
    note: "Third-party report updated August 15, 2026; additional codes and rewards are not confirmed by the current developer description."
  },
  destructoidCodes: {
    label: "Destructoid current code listing",
    url: "https://www.destructoid.com/grow-a-chicken-fighter-codes/",
    note: "Updated August 27, 2026; reports 50MVISITS and ASCEND as new, six codes as active and 40KCCU as expired."
  },
  proGameGuidesCodes: {
    label: "Pro Game Guides current code listing",
    url: "https://progameguides.com/roblox/grow-a-chicken-fighter-codes/",
    note: "Updated August 24, 2026; independently reports the same six active codes and classifies 40KCCU as inactive."
  },
  gamesRadarCodes: {
    label: "GamesRadar+ current code listing",
    url: "https://www.gamesradar.com/games/simulation/grow-a-chicken-fighter-codes/",
    note: "Updated September 1, 2026; reports seven active codes, including BATTLEREADY, and classifies 40KCCU as expired."
  },
  dexertoCodes: {
    label: "Dexerto current code listing",
    url: "https://www.dexerto.com/roblox/grow-a-chicken-fighter-codes-3396192/",
    note: "Checked September 3, 2026; reports seven active codes and independently confirms BATTLEREADY, although current sources disagree on its exact Charm Dust amount."
  },
  spaceQt: {
    label: "SpaceQT current full guide",
    url: "https://www.youtube.com/watch?v=GzYqqlyb6as",
    note: "Recorded route used for Recycler and Feeder decisions, Tower fallback, Fuse previews and the Rebirth panel; live values can change."
  },
  itzVexo: {
    label: "ItzVexo current full guide",
    url: "https://www.youtube.com/watch?v=u1x_Ty3IBpg",
    note: "Gameplay observation for Rewards to Community, Flock to Index and Fuse; rewards and collection counts can change."
  },
  abilitiesVideo: {
    label: "F. DROF abilities video",
    url: "https://www.youtube.com/watch?v=TRuwhrB9scg",
    note: "Gameplay video focused on special abilities."
  },
  proGameGuidesAbilities: {
    label: "Pro Game Guides chicken and skills tier list",
    url: "https://progameguides.com/roblox/grow-a-chicken-fighter-tier-list-best-chickens-skills/",
    note: "Updated September 1, 2026 for Promotions & Charms; ranks Black Sun Cataclysm, Reaction Ring and Stormcall above the older sustain meta."
  },
  techWiserAbilities: {
    label: "TechWiser current chicken and skills tier list",
    url: "https://techwiser.com/grow-a-chicken-fighter-tier-list/",
    note: "Updated September 2, 2026; keeps Stormcall, Cycle of Ash, Voodoo and Rebirth in S tier and lists Black Sun as a strong Arena ability."
  },
  allThingsAbilities: {
    label: "AllThings.How skills tier list",
    url: "https://allthings.how/every-grow-a-chicken-fighter-skill-tier-list/",
    note: "Third-party August 2026 ranking used to cross-check skill effects and Tower or Pit use cases."
  },
  gamezeboAbilities: {
    label: "Gamezebo ability tier list",
    url: "https://www.gamezebo.com/walkthroughs/grow-a-chicken-fighter-ability-tier-list/",
    note: "Third-party list updated August 20, 2026; useful for identifying where community rankings disagree."
  },
  allThingsPromotions: {
    label: "AllThings.How Promotions and Battle Charms guide",
    url: "https://allthings.how/grow-a-chicken-fighter-how-chicken-promotions-and-battle-charms-work/",
    note: "Updated August 31, 2026; documents the new Promotions and Battle Charms systems that can change combat comparisons."
  },
  fusionVideo: {
    label: "VendoPlus fusion video",
    url: "https://www.youtube.com/watch?v=ldrKmBVQsyQ",
    note: "Gameplay video focused on fusion and mutations."
  },
  thunderVideo: {
    label: "VendoPlus Thunder Egg video",
    url: "https://www.youtube.com/watch?v=SAvJ5uVxFoo",
    note: "Gameplay video about the Thunder Egg."
  },
  rebirthVideo: {
    label: "VendoPlus rebirth and Tower video",
    url: "https://www.youtube.com/watch?v=MraEAQ-LEHY",
    note: "Recorded third-party gameplay about rebirth and the Tower; interface details can change."
  },
  roonbyRebirth: {
    label: "Roonby current rebirth guide",
    url: "https://roonby.com/2026/08/14/how-to-rebirth-fast-in-grow-a-chicken-fighter-guide/",
    note: "Third-party guide dated August 14, 2026; it reports the preparation route and reset scope below. The live confirmation screen remains the final authority."
  },
  fusionMenuVideo: {
    label: "VendoPlus Fuse menu guide (0:01)",
    url: "https://www.youtube.com/watch?v=ldrKmBVQsyQ&t=1s",
    note: "The guide describes a Flock-to-Fuse menu path; interface details can change after an update."
  },
  fusionCostVideo: {
    label: "ItzVexo Fuse and cost guide (2:03)",
    url: "https://www.youtube.com/watch?v=u1x_Ty3IBpg&t=123s",
    note: "An independent guide that describes a second chicken selection and a fusion cost."
  },
  fusionPreviewVideo: {
    label: "SpaceQT fusion preview guide (4:04)",
    url: "https://www.youtube.com/watch?v=GzYqqlyb6as&t=244s",
    note: "One guide describes a base, donor, trait lock, preview and displayed cost; treat it as a version-sensitive route, not a fixed recipe."
  },
  eggIndexVideo: {
    label: "ItzVexo Flock and Index guide (3:04)",
    url: "https://www.youtube.com/watch?v=u1x_Ty3IBpg&t=184s",
    note: "The guide describes a Flock-to-Index path and hover view for a chicken's source egg."
  },
  eggPoolVideo: {
    label: "SpaceQT egg pool and rarity guide (1:31)",
    url: "https://www.youtube.com/watch?v=GzYqqlyb6as&t=91s",
    note: "An independent guide describing the in-game Index as a source for egg pools and rarity information."
  },
  communityRewardVideo: {
    label: "ItzVexo Community reward guide (1:03)",
    url: "https://www.youtube.com/watch?v=u1x_Ty3IBpg&t=63s",
    note: "The guide reports a Rewards-to-Community route and a Thunder Egg reward at that time; the current reward can change."
  },
  eventEggVideo: {
    label: "ItzVexo event egg drop guide (3:35)",
    url: "https://www.youtube.com/watch?v=u1x_Ty3IBpg&t=215s",
    note: "The guide reports an event that produced Nest Eggs; it does not establish a guaranteed drop or rate."
  }
};

export const navigation = publishedGuides.map(({ slug, label }) => ({ slug, label }));

export const researchNavigation = [
  { slug: "chickens", label: "Chickens" },
  { slug: "best-chickens-tier-list", label: "Tier List" }
];

const officialLoop = [
  "Hatch eggs and collect rare chickens.",
  "Send chickens to the Pit to fight and earn money.",
  "Climb the Tower and defeat bosses.",
  "Fuse two chickens into a mutated monster.",
  "Rebirth to earn faster.",
  "Use special abilities and collect offline egg production."
];

export const pages = {
  codes: {
    slug: "codes",
    updatedAtIso: "2026-09-03",
    checkedAtIso: "2026-09-03",
    eyebrow: "Codes checked September 3",
    title: "Grow a Chicken Fighter Codes (September 2026)",
    seoTitle: "Grow a Chicken Fighter Codes (September 2026): BATTLEREADY",
    shortTitle: "Codes",
    description:
      "Seven Grow a Chicken Fighter codes are currently reported active, including BATTLEREADY, 50MVISITS and ASCEND. Status checked September 3, 2026.",
    intro:
      "BATTLEREADY is the newest code repeated by several guides updated after the Promotions & Charms release. WELCOME remains the only code visible in the public Roblox game description. Current sources disagree on some reward quantities, so this page keeps the code status separate from the exact reward claim.",
    status: "7 currently reported codes",
    statusTone: "green",
    answer:
      "Try BATTLEREADY first, then 50MVISITS, ASCEND, EGGSCELLENT, LETMECOOK, SERGIOVERSE and WELCOME. Multiple guides checked September 1–3 report those seven codes active. WELCOME is the only one still shown in the public Roblox description; current sources classify 40KCCU as expired or inactive.",
    sections: [
      {
        heading: "Grow a Chicken Fighter codes reported active",
        type: "table",
        columns: ["Code", "Current evidence", "Reported reward", "What to do"],
        rows: [
          ["BATTLEREADY", "Newest · 2 current September guides", "Charm Dust + Royal Egg + 2x Hatch Luck for 15 minutes; sources disagree between 100 and 200 Dust", "Try first; use before hatching"],
          ["50MVISITS", "4 current guides", "Cash + Thunder Egg + timed 2x Money; cash and duration differ by source", "Try"],
          ["ASCEND", "4 current guides", "Cash + Thunder Egg + timed 2x Money; duration differs by source", "Try"],
          ["EGGSCELLENT", "3 current guides", "50 Cash + Thunder Egg + 2x Corn for 30 minutes", "Try"],
          ["WELCOME", "Roblox description + current guides", "50 Cash + Nest Egg reported; Roblox does not state the reward", "Try"],
          ["LETMECOOK", "3 current guides", "50 Cash + Thunder Egg + 2x Money for 30 minutes", "Try"],
          ["SERGIOVERSE", "3 current guides", "50 Cash + Scratch Egg + 2x Corn for 30 minutes", "Try"]
        ],
        note:
          "Checked September 3, 2026. GamesRadar+, Dexerto and other current guides agree on the seven code strings, but BATTLEREADY reward reports conflict on whether it gives 100 or 200 Charm Dust. Only WELCOME appears in the public Roblox description. We have not independently redeemed the codes."
      },
      {
        heading: "Expired or inactive code",
        type: "table",
        columns: ["Code", "Current evidence", "Old reported reward", "Status"],
        rows: [
          ["40KCCU", "Current guides", "Blazing Egg", "Inactive / expired"],
          ["40KCCU!", "Older unsupported spelling", "Free rewards", "Do not rely on it"]
        ],
        note:
          "GamesRadar+ and other current trackers classify 40KCCU as expired or inactive. An older source used 40KCCU! with punctuation, but no current source in this check supports that spelling."
      },
      {
        heading: "How to redeem codes",
        type: "steps",
        items: [
          "Open the official Roblox experience and wait for the interface to finish loading.",
          "Open the code redemption control in the game menu.",
          "Enter the code exactly as shown, with no extra spaces.",
          "Submit it once and check your cash, boosts and egg inventory.",
          "If nothing changes, rejoin a fresh server and try once more."
        ]
      },
      {
        heading: "Why a code may not work",
        type: "cards",
        items: [
          { title: "Typing mismatch", text: "Copy the code exactly. Hidden spaces are a common failure point." },
          { title: "Old server", text: "Rejoin a newer public server after an update, then try the code again." },
          { title: "Already redeemed", text: "Most codes can only be claimed once per account." },
          { title: "Expired or removed", text: "Community pages can remain indexed after a developer disables a code." }
        ]
      }
    ],
    faqs: [
      { q: "What is the newest Grow a Chicken Fighter code?", a: "BATTLEREADY is the newest code repeated by current guides checked September 1–3, 2026. Reports agree on a Royal Egg and 15 minutes of 2x Hatch Luck but disagree on whether it gives 100 or 200 Charm Dust." },
      { q: "What Grow a Chicken Fighter codes are reported active?", a: "The current cross-site list is BATTLEREADY, 50MVISITS, ASCEND, EGGSCELLENT, LETMECOOK, SERGIOVERSE and WELCOME. Redeem BATTLEREADY only when you are ready to use its timed Hatch Luck." },
      { q: "What is the developer-listed Grow a Chicken Fighter code?", a: "WELCOME is still shown in the official Roblox game description as of September 3, 2026. The description does not state its reward." },
      { q: "What does BATTLEREADY give?", a: "Current sources agree on Charm Dust, one Royal Egg and 2x Hatch Luck for 15 minutes. They disagree between 100 and 200 Charm Dust, so check the amount delivered in your inventory." },
      { q: "What does 50MVISITS give?", a: "Current guides report Cash, one Thunder Egg and a timed 2x Money boost, but the exact cash and duration differ. Redeem it before relying on one site's amount." },
      { q: "What does ASCEND give?", a: "Current guides report Cash, one Thunder Egg and a timed 2x Money boost, but the exact duration differs across current reports." },
      { q: "Is 40KCCU expired?", a: "Current trackers classify 40KCCU as expired or inactive. Treat it as expired unless the live game accepts it." }
    ],
    relatedSlugs: ["arena-ascension-egg", "beginner-guide", "eggs", "official-links"],
    sources: [sources.official, sources.gamesRadarCodes, sources.dexertoCodes, sources.destructoidCodes, sources.proGameGuidesCodes]
  },

  "arena-ascension-egg": {
    slug: "arena-ascension-egg",
    updatedAtIso: "2026-08-23",
    eyebrow: "Live Roblox event",
    title: "Grow a Chicken Fighter Arena Update & Ascension Egg Guide",
    seoTitle: "Grow a Chicken Fighter Ascension Egg Guide",
    shortTitle: "Arena Update",
    description:
      "Official Grow a Chicken Fighter Arena update details: trophies, ranks, Rebirth milestones, the Ascension Egg, Admin Abuse water hint and August 29 end time.",
    intro:
      "The official Arena + Admin Abuse event is active from August 22 through August 29, 2026. Roblox confirms Arena fights, trophies, ranked rewards, new Rebirth milestones, the Ascension Egg and a water-related Admin Abuse surprise, but it does not publish the exact milestone numbers, egg pool or reward table.",
    status: "Official event · August 22–29",
    statusTone: "green",
    answer:
      "Enter the new Chicken Arena, win fights to earn trophies and climb the ranks, then check the new Rebirth milestones for the Ascension Egg. The official event ends August 29 at 2:00 p.m. UTC (10:00 p.m. UTC+8). During Admin Abuse, watch the water—but the official description does not reveal the exact surprise or its timing.",
    sections: [
      {
        heading: "Arena update at a glance",
        type: "table",
        columns: ["Feature", "Officially confirmed", "Not published by Roblox"],
        rows: [
          ["Chicken Arena", "Build a chicken team and battle through the new Arena", "Matchmaking rules and exact opponent scaling"],
          ["Trophies and ranks", "Wins award trophies and rank progress for rewards", "Trophy amounts, rank thresholds and full reward table"],
          ["Rebirth milestones", "New milestones are tied to continued Rebirth progress", "Exact Rebirth count required for each milestone"],
          ["Ascension Egg", "A new egg is available through the Rebirth milestone path", "Hatch pool, odds and whether the reward is repeatable"],
          ["New chickens", "The event description says new chickens are included", "Names, rarities, stats and egg sources"],
          ["Admin Abuse", "The event hints that something may appear in the water", "Exact schedule, item and drop rate"]
        ]
      },
      {
        heading: "How to use the Arena update",
        type: "steps",
        items: [
          "Join a fresh public server so the current Arena and milestone interface can load.",
          "Open the Chicken Arena and read the live rank and reward panels before choosing a team.",
          "Win Arena fights to earn the trophies and rank progress shown in your current server.",
          "Open the Rebirth milestone screen and check the exact live requirement for the Ascension Egg.",
          "During an Admin Abuse session, watch the water as the official hint suggests, but do not assume a guaranteed reward.",
          "Recheck every number after the next update begins on August 29."
        ]
      },
      {
        heading: "Ascension Egg: confirmed facts and open questions",
        type: "table",
        columns: ["Question", "Reliable answer today", "Where to verify"],
        rows: [
          ["Does the Ascension Egg exist?", "Yes; the official event names it", "Roblox event description"],
          ["How is it unlocked?", "By pushing Rebirths and reaching a new milestone", "Live Rebirth milestone panel"],
          ["How many Rebirths are needed?", "Not stated in the official event description", "Current server requirement"],
          ["What can hatch from it?", "Not stated in the official event description", "Live egg preview or Index"],
          ["What are the hatch odds?", "Not stated in the official event description", "Live egg pool or rarity display"],
          ["Can it be earned more than once?", "Not confirmed", "Live milestone reward state"]
        ]
      },
      {
        heading: "Event schedule and next update",
        type: "timeline",
        items: [
          { title: "August 22, 2026", text: "Arena + Admin Abuse event started at 2:00 p.m. UTC (10:00 p.m. UTC+8)." },
          { title: "August 23–29", text: "The official event remains active; use the live Arena and Rebirth panels for changing values." },
          { title: "August 29, 2026", text: "The Arena event ends and the official NEXT UPDATE! event is scheduled to begin at 2:00 p.m. UTC (10:00 p.m. UTC+8). Its description is still only question marks." }
        ]
      }
    ],
    faqs: [
      { q: "How do I get the Ascension Egg in Grow a Chicken Fighter?", a: "The official event says to keep pushing Rebirths to unlock new milestones and obtain the Ascension Egg. It does not publish the exact Rebirth requirement, so use the live milestone panel." },
      { q: "What does the new Arena give?", a: "The official description confirms wins, trophies, ranks and rewards. Exact trophy amounts, rank thresholds and the complete reward table are not published there." },
      { q: "When does the Arena + Admin Abuse event end?", a: "The official window ends August 29, 2026 at 2:00 p.m. UTC, which is 10:00 p.m. in UTC+8." },
      { q: "What happens during Admin Abuse?", a: "Roblox only hints that players should watch the water because something may be waiting there. The exact time, item and chance are not stated." },
      { q: "Is there a new Arena update code?", a: "No new developer-listed code was found after the update. WELCOME remained the only code in the official game description when checked August 23, 2026." },
      { q: "When is the next Grow a Chicken Fighter update?", a: "Roblox schedules the NEXT UPDATE! event for August 29, 2026 at 2:00 p.m. UTC (10:00 p.m. UTC+8), but its official description does not reveal the content yet." }
    ],
    relatedSlugs: ["rebirth-guide", "eggs", "codes", "abilities"],
    sources: [sources.arenaEventPage, sources.nextUpdateEventPage, sources.arenaEventApi, sources.official, sources.gameApi]
  },

  "official-links": {
    slug: "official-links",
    updatedAtIso: "2026-08-12",
    eyebrow: "Source-checked destinations",
    title: "Grow a Chicken Fighter Official Roblox Links",
    shortTitle: "Official Links",
    description:
      "Grow a Chicken Fighter Roblox game, creator group and reported community Discord links.",
    intro:
      "Use the Roblox game and verified Grow a Chicken Fighter creator-group links below. The same group ID previously displayed as Sergio Verse Games. The Discord invite opens a same-named community server, but it is not linked from a developer-owned page.",
    status: "Official Roblox links",
    statusTone: "amber",
    answer:
      "The official Roblox experience is published by the verified Grow a Chicken Fighter group, formerly displayed as Sergio Verse Games. The reported Discord invite is qmrbZSHf7n, but its developer ownership is not confirmed.",
    sections: [
      {
        heading: "Game and community links",
        type: "table",
        columns: ["Destination", "Identity check", "Use"],
        rows: [
          ["Roblox game", "Grow a Chicken Fighter by the verified creator group", "Play and check the current developer description"],
          ["Roblox group", "Grow a Chicken Fighter, formerly Sergio Verse Games, group ID 180466034", "Early codes, update previews, group perks and rewards"],
          ["Community Discord report", "MrGuider reports qmrbZSHf7n; destination name matched", "Open the named server only after your own identity check"]
        ],
        note: "Identity checked August 12, 2026. A destination can change after this date; verify the displayed name before joining."
      },
      {
        heading: "Open the correct link",
        type: "cards",
        items: [
          { title: "Official game", text: "Open the Roblox experience with place ID 94640181989498 and verify that it links to the Grow a Chicken Fighter group, ID 180466034." },
          { title: "Creator group", text: "Use Roblox group ID 180466034. Its public description mentions early codes and update previews." },
          { title: "Reported community server", text: "MrGuider reports invite qmrbZSHf7n. The destination name matched, but developer ownership is not independently proven." },
          { title: "Dynamic counts", text: "Member, online, favorite and playing counts change continuously and should always carry a check date." }
        ]
      },
      {
        heading: "How to avoid copied or fake links",
        type: "steps",
        items: [
          "Start from the official Roblox experience or the verified creator group whenever possible.",
          "Confirm the game points to the verified Grow a Chicken Fighter group, ID 180466034, before following an update link.",
          "For Discord, verify the destination server name before accepting the invite.",
          "Do not enter Roblox credentials on a non-Roblox domain; a Discord invite does not require your Roblox password.",
          "Recheck this page after an update if the developer rotates the invite or group links."
        ]
      }
    ],
    faqs: [
      { q: "What Grow a Chicken Fighter Discord invite is being reported?", a: "MrGuider reports qmrbZSHf7n. It resolved to a same-named server on August 12, 2026, but this check does not prove it is controlled by the developer." },
      { q: "Who made Grow a Chicken Fighter?", a: "The official Roblox experience links to the verified Grow a Chicken Fighter group, ID 180466034. The same group was previously displayed as Sergio Verse Games." },
      { q: "Where are new codes announced?", a: "The verified Grow a Chicken Fighter group description advertises early codes and update previews. The current game description can also display a code." }
    ],
    relatedSlugs: ["codes", "beginner-guide", "eggs", "fusion-mutations"],
    sources: [sources.official, sources.gameApi, sources.group, sources.groupApi, sources.mrGuiderCodes, sources.discord, sources.discordApi]
  },

  "beginner-guide": {
    slug: "beginner-guide",
    updatedAtIso: "2026-08-13",
    eyebrow: "First-session route",
    title: "Grow a Chicken Fighter Beginner Guide (First Session)",
    seoTitle: "Grow a Chicken Fighter Beginner Guide",
    shortTitle: "Beginner Guide",
    description:
      "A practical Grow a Chicken Fighter beginner route using the Recycler, Feeder, Flock Index, Tower, Fuse and Rebirth panel.",
    intro:
      "This first-session route follows current gameplay recordings and the systems named in the official Roblox description. It uses the live screen as the source of truth because prices, rewards and requirements can change between updates.",
    status: "Beginner overview",
    statusTone: "green",
    answer:
      "On the recorded fresh-account route, collect recyclables from the ground and take them to the Recycler for cash. Upgrade the Recycler if money is slow, or the Feeder if your active chicken needs levels, then push the Tower while wins remain quick and reliable.",
    sections: [
      {
        heading: "The basic game loop",
        type: "steps",
        items: officialLoop
      },
      {
        heading: "A sensible first-session route",
        type: "timeline",
        items: [
          { title: "1. Collect and recycle", text: "Pick up recyclables from the ground and take them to the Recycler for your first cash." },
          { title: "2. Fix the current bottleneck", text: "Upgrade the Recycler when cash is slow; upgrade the Feeder when your active chicken needs more levels." },
          { title: "3. Check the egg path", text: "Open Flock, then Index, and hover over a chicken to see which egg it comes from before hatching blindly." },
          { title: "4. Push the Tower until progress slows", text: "Keep climbing while wins are quick and reliable. If a floor becomes slow or you repeatedly lose, return to the Feeder, level your active chicken and improve your cash loop." },
          { title: "5. Preview every fusion", text: "In Fuse, choose a base and donor, lock the field you need, then inspect the preview and displayed cost before confirming." },
          { title: "6. Read the Rebirth panel", text: "Check the current requirement and reset details in the live Rebirth panel before confirming." }
        ]
      },
      {
        heading: "What not to do early",
        type: "cards",
        items: [
          { title: "Do not hatch blindly", text: "Use Flock to Index to check which egg contains the chicken you want." },
          { title: "Do not upgrade everything", text: "Spend on the current bottleneck: Recycler for cash or Feeder for chicken levels." },
          { title: "Do not fuse without a preview", text: "Check the locked field, full result preview and displayed cost before using a valuable chicken." },
          { title: "Do not use a fixed Tower level", text: "A recorded level and floor are only examples; use fight speed and repeated losses as your live signal." }
        ]
      }
    ],
    faqs: [
      { q: "What should a beginner do first?", a: "On the recorded fresh-account route, collect ground recyclables, exchange them at the Recycler, then upgrade the Recycler or Feeder according to the current bottleneck." },
      { q: "How should I use fusion?", a: "Open Fuse, choose a base and donor, lock the field you need, and inspect the preview and displayed cost before confirming." },
      { q: "When should I stop pushing the Tower?", a: "Stop when fights become very slow or you repeatedly lose. Improve the Feeder, active chicken levels and cash loop, then return." }
    ],
    relatedSlugs: ["codes", "eggs", "fusion-mutations", "rebirth-guide"],
    sources: [sources.official, sources.spaceQt, sources.itzVexo]
  },

  chickens: {
    slug: "chickens",
    eyebrow: "Collection database",
    title: "Grow a Chicken Fighter Chickens",
    shortTitle: "Chickens",
    description:
      "What chickens do, how to compare them and when to keep one out of fusion.",
    intro:
      "Chickens come from eggs, fight in the Pit and can be combined through fusion. A complete current list of names, rarities and stats is not available here yet.",
    status: "Collection guide",
    statusTone: "amber",
    answer:
      "Chickens are your collectible fighters. Compare units in the same activity, and keep your only copy of an unfamiliar rare chicken until you know whether it is more useful in combat or fusion.",
    sections: [
      {
        heading: "Find a chicken's egg source",
        type: "steps",
        items: [
          "Open Flock, then open Index.",
          "Hover over the chicken you want to identify.",
          "Read the egg source shown in the Index before spending on more hatches.",
          "Treat the live Index as current; collection counts and egg pools can change after updates."
        ]
      },
      {
        heading: "What chickens do",
        type: "cards",
        items: [
          { title: "Acquisition", text: "The official description states that players hatch eggs and collect rare chickens." },
          { title: "Combat", text: "Chickens are sent to the Pit to fight for money." },
          { title: "Fusion input", text: "Two chickens can be fused into a mutated result." },
          { title: "Offline loop", text: "The official description includes offline egg production, connecting collection progress to time away." }
        ]
      },
      {
        heading: "How to judge a new chicken safely",
        type: "steps",
        items: [
          "Read the live name, rarity and stat card before changing the unit.",
          "Compare it with a chicken tested in the same activity and under the same account bonuses.",
          "Separate raw combat output from acquisition cost and replacement difficulty.",
          "Preserve the only copy of an unfamiliar rare unit until you understand the fusion result.",
          "Retest after an update; a static tier label can become wrong when balancing changes."
        ]
      }
    ],
    faqs: [
      { q: "Is there a complete Grow a Chicken Fighter chicken list?", a: "Not here yet. The game can change, and the current names, rarities and stats have not all been confirmed." },
      { q: "What are chickens used for?", a: "The official description confirms that chickens fight in the Pit for money and that two chickens can be used in fusion." },
      { q: "Are there rare chickens?", a: "Yes. The developer description tells players to collect rare chickens, although the full rarity ladder is not confirmed here yet." }
    ],
    sources: [sources.official, sources.spaceQt, sources.itzVexo]
  },

  "best-chickens-tier-list": {
    slug: "best-chickens-tier-list",
    eyebrow: "Ranking audit",
    title: "Grow a Chicken Fighter Best Chickens Tier List",
    shortTitle: "Tier List",
    description:
      "Grow a Chicken Fighter tier list verification status and the evidence standard used to rank chickens without fabricated placements.",
    intro:
      "Players are actively searching for the best chickens, but a trustworthy tier list requires more than names copied from a video title. Every placement needs a current chicken identity, comparable performance evidence, acquisition context and a game-version date.",
    status: "Tier placements: verification in progress",
    statusTone: "amber",
    answer:
      "No chicken currently has a published tier placement on this site. The ranking demand is verified; the comparative facts required to answer it are not yet complete.",
    sections: [
      {
        heading: "Current tier board",
        type: "table",
        columns: ["Tier", "Published placements", "Why"],
        rows: [
          ["S", "Verification in progress", "Requires repeatable top-end performance evidence"],
          ["A", "Verification in progress", "Requires strong performance plus acquisition context"],
          ["B", "Verification in progress", "Requires a verified role or efficient progression use"],
          ["C / D", "Verification in progress", "Weakness claims require fair, same-version comparisons"]
        ],
        note: "A blank tier is more useful than a confident fake ranking that wastes a player's limited units."
      },
      {
        heading: "How each placement will be scored",
        type: "cards",
        items: [
          { title: "Pit output", text: "Comparable performance in the official money-earning combat loop." },
          { title: "Tower utility", text: "Evidence from the official Tower and boss progression loop." },
          { title: "Acquisition cost", text: "Power must be weighed against the egg, rarity and replacement effort." },
          { title: "Fusion opportunity cost", text: "Using a chicken as fusion input may be worse than keeping it for combat." },
          { title: "Progression window", text: "An early-game unit and a late-game unit should not be judged as if availability were equal." },
          { title: "Version stability", text: "Every score needs a check date because balance can change after updates." }
        ]
      },
      {
        heading: "Evidence required before the first ranking",
        type: "checklist",
        items: [
          "Verify the English chicken name and rarity from a current readable frame.",
          "Capture the stat panel or repeatable combat comparison.",
          "Record the egg or acquisition route.",
          "Separate account-wide bonuses from the chicken itself.",
          "Cross-check surprising placements against a second current source."
        ]
      },
      {
        heading: "What you can do meanwhile",
        type: "steps",
        items: [
          "Keep the only copy of any unfamiliar rare chicken.",
          "Compare units in the same Pit conditions rather than relying on color or rarity alone.",
          "Record acquisition difficulty before sacrificing a unit to fusion.",
          "Use the live game version as the final authority when a guide conflicts with the interface."
        ]
      }
    ],
    faqs: [
      { q: "What is the best chicken in Grow a Chicken Fighter?", a: "There is not enough verified, same-version comparative evidence to name one responsibly yet." },
      { q: "Why is the tier list not filled in?", a: "Chicken names, rarities, stats and comparable performance still need frame-level verification. Inventing placements would be worse than stating the evidence gap." },
      { q: "What will determine S tier?", a: "Repeatable performance, Pit and Tower utility, acquisition cost, fusion opportunity cost and the current game version will all be considered." }
    ],
    sources: [sources.official, sources.spaceQt, sources.itzVexo]
  },

  eggs: {
    slug: "eggs",
    updatedAtIso: "2026-08-19",
    eyebrow: "Egg lookup and rewards",
    title: "Grow a Chicken Fighter Egg Guide: Index, Rewards & Drops",
    seoTitle: "Grow a Chicken Fighter Egg Guide",
    shortTitle: "Egg Guide",
    description:
      "Find a chicken's source egg with Flock and Index, check egg pools, and follow recorded Thunder Egg and Nest Egg routes.",
    intro:
      "The in-game Index is the safest way to check which egg contains a chicken. This guide also separates official egg mechanics from recorded community rewards and event drops, so a one-time video result is not mistaken for a permanent drop table.",
    status: "Guide routes cross-checked",
    statusTone: "amber",
    answer:
      "Open Flock, choose Index, then hover the chicken you want. One guide describes its source egg there; another guide describes the Index displaying an egg's pool and rarity information. Check those live fields before spending because pools and rewards can change.",
    sections: [
      {
        heading: "Find which egg contains a chicken",
        type: "steps",
        items: [
          "Open Flock from the main game interface.",
          "Open Index and locate the chicken you want to find.",
          "Hover over that chicken. One current guide describes the Index naming its source egg.",
          "Open that egg's Index entry and read the visible pool and rarity information before hatching.",
          "Recheck the live Index after an update instead of relying on an old static list."
        ]
      },
      {
        heading: "Egg routes seen in current recordings",
        type: "table",
        columns: ["Egg", "Recorded or reported route", "Evidence level", "Important limit"],
        rows: [
          ["Thunder Egg", "Join the official community, then check Rewards → Community", "Guide-reported example", "The reward can rotate; verify the live panel"],
          ["Nest Egg", "One timed event guide reports two Nest Eggs", "Guide-reported example", "This does not prove a fixed quantity or drop rate"],
          ["Nest Egg", "Reported as the WELCOME reward by MrGuider", "Single community listing", "The developer lists WELCOME but not its reward"],
          ["Scratch Egg", "Reported as part of the SERGIOVERSE code reward", "Single community listing", "The code and reward are not independently confirmed"]
        ],
        note:
          "These are evidence-labelled sightings, not a complete all-eggs list. Use Flock → Index for the current egg pool in your server."
      },
      {
        heading: "How eggs enter the progression loop",
        type: "cards",
        items: [
          { title: "Hatching", text: "The developer description says players hatch eggs to collect rare chickens." },
          { title: "Offline eggs", text: "The same official description says chickens keep laying eggs while the player is offline." },
          { title: "Community rewards", text: "The official creator group advertises free member rewards. One guide reports a Thunder Egg in Rewards → Community." },
          { title: "Timed events", text: "One current guide reports Nest Eggs during an event. Treat that as an example, not a guaranteed schedule or rate." }
        ]
      },
      {
        heading: "Check before spending on an egg",
        type: "steps",
        items: [
          "Use Index to confirm that the chicken you want is actually in the egg's visible pool.",
          "Read the current price and any displayed rarity or odds in your own server.",
          "Decide whether the target solves your current problem: Pit income, Tower progress, a fusion trait or collection progress.",
          "Keep enough currency for Recycler or Feeder upgrades if several hatches would empty your balance.",
          "After hatching, compare the new chicken's live card before buying the same egg again."
        ]
      }
    ],
    faqs: [
      { q: "How do I find which egg a chicken comes from?", a: "Open Flock → Index and hover the chicken. One current guide describes the Index displaying its source egg; another describes egg pool and rarity information." },
      { q: "How do I get the Thunder Egg?", a: "One current guide reports joining the official community and then opening Rewards → Community to receive a Thunder Egg. Check the live reward first because it can change." },
      { q: "Do eggs generate offline?", a: "Yes. Offline egg production is explicitly listed in the current official game description." },
      { q: "What is the best egg in Grow a Chicken Fighter?", a: "There is no universal best egg confirmed here. Use the live Index to compare the visible pool with the chicken or trait that solves your current progression bottleneck." },
      { q: "Is this a complete Grow a Chicken Fighter egg list?", a: "No. It is an evidence-labelled guide to the live Index, community rewards and recorded drops. Use the current Index for the complete pool shown in your server." }
    ],
    video: {
      name: "Grow a Chicken Fighter Egg Guide: Use the Live Index",
      description:
        "This original visual explainer covers the recorded Flock to Index route, where to inspect visible egg-pool and rarity information, and why the live screen should be checked before spending. It is not gameplay footage and does not claim fixed pools, odds, prices or rewards.",
      src: "/media/grow-a-chicken-fighter-egg-index-guide.mp4",
      poster: "/media/grow-a-chicken-fighter-egg-index-guide-poster.png",
      captions: "/media/grow-a-chicken-fighter-egg-index-guide.en.vtt",
      uploadDate: "2026-08-19",
      duration: "PT1M7S",
      width: 1920,
      height: 1080
    },
    relatedSlugs: ["arena-ascension-egg", "fusion-mutations", "beginner-guide", "codes"],
    sources: [sources.official, sources.group, sources.eggIndexVideo, sources.eggPoolVideo, sources.communityRewardVideo, sources.eventEggVideo, sources.mrGuiderCodes]
  },

  abilities: {
    slug: "abilities",
    updatedAtIso: "2026-09-03",
    checkedAtIso: "2026-09-03",
    eyebrow: "September meta, source-compared",
    title: "Grow a Chicken Fighter Best Skills & Abilities Tier List",
    seoTitle: "Grow a Chicken Fighter Skills Tier List (September 2026)",
    shortTitle: "Best Skills",
    description:
      "Black Sun Cataclysm, Reaction Ring and Stormcall lead the newest Grow a Chicken Fighter skills ranking. Compare the September meta with older proven abilities.",
    intro:
      "The August 29 Promotions & Charms update changed how current guides judge combat builds. One ranking refreshed specifically for that update now puts Black Sun Cataclysm, Reaction Ring and Stormcall above the previous Cycle of Ash, Voodoo and Rebirth meta. A second September ranking agrees on Stormcall and still keeps the older trio in S tier, so this page shows both the new ceiling and the safer cross-source picks.",
    status: "September 3 meta comparison",
    statusTone: "green",
    answer:
      "Black Sun Cataclysm is the clearest current top-end pick: the newest Promotions & Charms ranking calls it the best skill, while another September list also treats Black Sun as a strong Arena ability. Stormcall is the strongest cross-source consensus pick. Reaction Ring is a new top-tier claim from one post-update ranking, while Voodoo, Cycle of Ash and Rebirth remain strong fallback choices across both old and new lists.",
    sections: [
      {
        heading: "Grow a Chicken Fighter September skill tier list",
        type: "table",
        columns: ["Ability", "September evidence", "Current read", "Best fit"],
        rows: [
          ["Black Sun Cataclysm", "S+ in the Promotions & Charms refresh; Black Sun is a strong Arena pick in the second September list", "Highest current ceiling, but exact damage is single-source", "Tower, Pit Events and Arena openings"],
          ["Stormcall", "S+ in the update-specific list and S in the second September list", "Best current cross-source consensus", "AoE, Tower and Arena"],
          ["Reaction Ring", "S+ in the update-specific list; absent from the second list", "Promising new-meta pick that needs another current confirmation", "Ranged AoE and trapping"],
          ["Voodoo", "S in both September lists", "Stable proven fallback below the new ceiling", "Counter damage and burst"],
          ["Cycle of Ash", "S in both September lists", "Stable sustain-and-damage fallback", "Long Tower fights"],
          ["Rebirth", "S in both September lists", "Safest survival specialist", "First-death recovery"],
          ["Za Warudo", "B in both September lists", "Useful control, no longer a top-tier default", "Early and mid-game control"]
        ],
        note:
          "The two September sources are Pro Game Guides, updated for Promotions & Charms on September 1, and TechWiser, updated September 2. These are community rankings, not official developer tiers."
      },
      {
        heading: "Which skill should you use now?",
        type: "cards",
        items: [
          { title: "Highest current ceiling", text: "Use Black Sun Cataclysm when you have access to it. The newest update-specific ranking puts it first for Tower, Pit Events and Arena." },
          { title: "Safest agreement pick", text: "Use Stormcall when you want a current top option supported by both September lists." },
          { title: "New option to test", text: "Reaction Ring is ranked beside Black Sun and Stormcall by the update-specific source, but the second September list does not include it. Verify its live tooltip before a costly fusion." },
          { title: "Proven fallbacks", text: "Voodoo, Cycle of Ash and Rebirth remain S-tier in both September lists even though one source says they are no longer the absolute meta." }
        ]
      },
      {
        heading: "What changed after Promotions & Charms",
        type: "table",
        columns: ["Change", "Why it matters", "Evidence limit"],
        rows: [
          ["Promotions raise base stats", "A promoted fighter can beat an older unpromoted comparison", "Exact gains depend on the live promotion level"],
          ["Battle Charms add permanent boosts", "Skill rankings now interact with HP, defense, crit and ability boosts", "Rolls and slot access vary by account"],
          ["New chickens add new skills", "Black Sun Cataclysm, Reaction Ring and Stormcall change the top-end shortlist", "Only one current source ranks all three together"],
          ["Old combinations still work", "Voodoo, Cycle of Ash and Rebirth remain useful while rare new units are unavailable", "They are no longer the ceiling in the update-specific list"]
        ]
      },
      {
        heading: "How to make the final choice in game",
        type: "steps",
        items: [
          "Choose the job first: Tower survival, Pit or Arena pressure, control or area damage.",
          "If you own the carrier, compare Black Sun Cataclysm and Stormcall before spending on an older donor.",
          "Use Reaction Ring only after checking its live carrier, effect and fusion preview because its top placement currently has one fresh ranking source.",
          "Keep Voodoo, Cycle of Ash or Rebirth when replacing them would consume a rare fighter for a small practical gain.",
          "Compare two builds at similar promotion and charm levels; otherwise you are measuring account investment instead of the skill."
        ]
      },
      {
        heading: "What is official and what is community-sourced",
        type: "table",
        columns: ["Claim", "Evidence level", "How to use it"],
        rows: [
          ["Grow a Chicken Fighter has special abilities", "Developer description", "Confirmed game system"],
          ["Promotions and Battle Charms changed the build system", "Current post-update guides", "Confirmed across multiple current reports; check live values"],
          ["Ability names and described effects above", "Current community guides", "Useful comparison; verify the live tooltip"],
          ["S+, S and B placements", "Community opinion", "Use cross-source agreement and the update date"],
          ["Exact cooldowns and balance numbers", "Not established here", "Read the current server interface"]
        ]
      }
    ],
    faqs: [
      { q: "What is the best ability in Grow a Chicken Fighter?", a: "Black Sun Cataclysm is the clearest current top-end answer: the newest Promotions & Charms ranking calls it the best skill. Stormcall has stronger cross-source agreement across both September lists." },
      { q: "What are the best skills in Grow a Chicken Fighter?", a: "The newest update-specific top tier is Black Sun Cataclysm, Reaction Ring and Stormcall. Voodoo, Cycle of Ash and Rebirth remain strong S-tier fallbacks in both September lists." },
      { q: "Does Grow a Chicken Fighter have abilities?", a: "Yes. Special abilities are explicitly listed in the current official description." },
      { q: "Is Reaction Ring the best skill?", a: "Reaction Ring is S+ in one ranking refreshed for Promotions & Charms, but it is absent from the second September list. Treat it as a high-potential new-meta pick rather than a settled universal number one." },
      { q: "Is Stormcall good?", a: "Yes. Stormcall is S+ in the update-specific ranking and S in the second September list, making it the strongest current cross-source agreement pick." },
      { q: "Is Rebirth still good?", a: "Yes. Both September lists still place Rebirth in S tier for survival, although the update-specific ranking puts three newer offensive skills above it." },
      { q: "Is Za Warudo good?", a: "Za Warudo still offers control and burst for early or mid-game use, but both September lists place it in B tier rather than the current top group." },
      { q: "Is there an official ability tier list?", a: "No official tier list was found. The developer confirms special abilities as a game system; the named effects and rankings on this page are cross-checked community guidance." },
      { q: "Why are cooldowns not listed?", a: "The compared pages do not establish permanent current cooldown values. Use the live timer and effect text in your server." }
    ],
    relatedSlugs: ["fusion-mutations", "rebirth-guide", "beginner-guide", "eggs"],
    sources: [sources.official, sources.proGameGuidesAbilities, sources.techWiserAbilities, sources.allThingsPromotions, sources.allThingsAbilities, sources.gamezeboAbilities]
  },

  "fusion-mutations": {
    slug: "fusion-mutations",
    updatedAtIso: "2026-08-19",
    eyebrow: "Fuse screen walkthrough",
    title: "Grow a Chicken Fighter Fusion Guide: Fuse, Traits & Cost",
    seoTitle: "Grow a Chicken Fighter Fusion Guide",
    shortTitle: "Fusion Guide",
    description:
      "How to open Fuse, select two chickens, check the trait lock, preview the result and read the displayed fusion cost.",
    intro:
      "The developer describes fusion as combining two chickens into a mutated monster. Current guides also describe the Fuse entry, a second chicken, a displayed cost and—on one version-sensitive route—a base, donor, trait lock and result preview. Those controls are documented below without inventing recipes or mutation odds.",
    status: "Guide routes cross-checked",
    statusTone: "amber",
    answer:
      "Select a chicken in Flock and open Fuse, then choose the second chicken. Before confirming, read the displayed cost and every field in the result preview. One guide treats the first chicken as the base, the second as a donor and lets the player lock a trait field; verify that the same controls still appear in your build.",
    sections: [
      {
        heading: "What the current evidence confirms",
        type: "table",
        columns: ["Fusion detail", "Current evidence", "Confidence"],
        rows: [
          ["Inputs and result", "Two chickens are combined into a mutated monster", "Developer description"],
          ["Fuse entry", "One guide opens Flock, selects a chicken and chooses Fuse", "Guide report"],
          ["Second chicken", "Two independent guides describe selecting another chicken", "Two guide reports"],
          ["Fusion cost", "Two independent guides describe a displayed cash cost before confirmation", "Two guide reports"],
          ["Base, donor and trait lock", "One guide uses these fields and checks the inherited result preview", "Version-sensitive guide"]
        ],
        note:
          "Specific recipes, mutation odds, the unlock requirement and what happens to every input are not established by these sources."
      },
      {
        heading: "How to use the Fuse screen",
        type: "steps",
        items: [
          "Open Flock and select the chicken you intend to use first.",
          "Choose Fuse, then select the second chicken requested by the screen.",
          "If your current interface shows base and donor roles, confirm that the valuable chicken is in the role you intended.",
          "If a trait field can be locked, select only the field you need and read every unlocked field in the preview.",
          "Read the complete result preview and displayed cash cost before confirming.",
          "Use a replaceable pair first when the preview does not make the outcome clear."
        ]
      },
      {
        heading: "What to inspect in the preview",
        type: "cards",
        items: [
          { title: "Base chicken", text: "One guide uses a base chicken as the unit being developed. Check the labels in your current interface." },
          { title: "Donor chicken", text: "The same route uses a donor carrying the target trait. Do not assume every unlocked field will copy from it." },
          { title: "Locked trait", text: "A lock is useful only if the preview shows the field you intend to preserve. Read the other inherited fields too." },
          { title: "Displayed cost", text: "Independent guides agree that fusion costs money. Use the amount shown on your own confirmation screen." }
        ]
      },
      {
        heading: "Fusion recipes and mutation odds",
        type: "table",
        columns: ["Question", "Reliable answer today", "Why"],
        rows: [
          ["Are there verified recipes here?", "No", "A recipe needs a readable same-version input and output"],
          ["What are the mutation odds?", "Not published here", "One result cannot establish a probability"],
          ["Are both inputs consumed?", "Check the live warning", "The developer description does not document input retention"],
          ["Does every result start at level 1?", "Not established", "One guide reported level 1, which is not enough to make a universal rule"],
          ["What is the unlock requirement?", "Check the live prompt", "No current requirement was confirmed by two sources"]
        ]
      }
    ],
    faqs: [
      { q: "How do I fuse chickens in Grow a Chicken Fighter?", a: "A current guide opens Flock, selects a chicken and chooses Fuse. Select the second chicken, then inspect the trait fields, preview and displayed cost before confirming." },
      { q: "Does fusion cost money?", a: "Two independent guides describe a displayed fusion cost. Use the live amount because a fixed number can change." },
      { q: "What are the Grow a Chicken Fighter fusion recipes?", a: "No same-version recipes are published here yet. A valid recipe needs readable inputs, output and version evidence; the live preview remains the safest answer." },
      { q: "What are the mutation odds?", a: "No current official rate is published here. A single successful fusion cannot establish a probability." }
    ],
    video: {
      name: "Grow a Chicken Fighter Fusion Guide: What the Fuse Screen Shows",
      description:
        "This original visual explainer separates the developer's two-chicken fusion description from interface details reported in recorded gameplay: the Fuse route, second chicken, displayed cost and one version-sensitive base, donor, trait-lock and preview layout. It is not gameplay footage and claims no fixed recipe, odds, price, unlock requirement or input-consumption rule.",
      src: "/media/grow-a-chicken-fighter-fusion-guide.mp4",
      poster: "/media/grow-a-chicken-fighter-fusion-guide-poster.png",
      captions: "/media/grow-a-chicken-fighter-fusion-guide.en.vtt",
      uploadDate: "2026-08-19",
      duration: "PT1M12S",
      width: 1920,
      height: 1080
    },
    relatedSlugs: ["eggs", "abilities", "beginner-guide", "rebirth-guide"],
    sources: [sources.official, sources.fusionMenuVideo, sources.fusionCostVideo, sources.fusionPreviewVideo]
  },

  "rebirth-guide": {
    slug: "rebirth-guide",
    updatedAtIso: "2026-08-19",
    eyebrow: "Current reset checklist",
    title: "How to Rebirth Fast in Grow a Chicken Fighter",
    seoTitle: "Grow a Chicken Fighter Rebirth Guide: What Resets",
    shortTitle: "Rebirth Guide",
    description:
      "What resets in Grow a Chicken Fighter, what one current guide reports stays, and how to prepare for rebirth without relying on fixed requirements.",
    intro:
      "The developer only says that rebirth helps you earn faster. A current third-party guide reports that money and troop level reset while the chicken collection remains, and recommends a Tower, Feeder and pre-reset spending route. Those details are version-sensitive, so the live confirmation screen is still the final answer.",
    status: "Official purpose + current guide report",
    statusTone: "amber",
    answer:
      "The developer only confirms that rebirth lets you earn faster. A current third-party guide reports that money and troop level reset while your chicken collection remains. Check every requirement, benefit and retained item on the live confirmation screen before proceeding.",
    sections: [
      {
        heading: "What is confirmed and what is reported",
        type: "table",
        columns: ["Rebirth detail", "Current answer", "Evidence"],
        rows: [
          ["Purpose", "Earn faster", "Developer description"],
          ["Money", "Reported to reset", "Current third-party guide"],
          ["Troop level", "Reported to reset", "Current third-party guide"],
          ["Chicken collection", "Reported to remain", "Current third-party guide"],
          ["Requirement and earning benefit", "Read the live panel", "No fixed value confirmed"]
        ],
        note:
          "Only the purpose is developer-confirmed. Reset and retention details are attributed to a third-party guide dated August 14, 2026 and should be checked against the current in-game warning."
      },
      {
        heading: "A faster pre-rebirth route",
        type: "steps",
        items: [
          "Open the current Rebirth panel first. Record its displayed requirement, benefit and full reset warning before spending toward the reset.",
          "One current third-party guide recommends pushing the Tower as part of the route toward rebirth. Keep progressing while fights remain reliable; this page does not claim a fixed target floor.",
          "The same guide recommends improving the Feeder while working through Tower progress. Treat that as a recorded route, not a universal requirement.",
          "If the live warning still says money will reset, use temporary money before confirming. The guide recommends chicken upgrades and fusion, but verify which purchases actually remain in your version.",
          "Return to the Rebirth panel and compare the displayed earning benefit with everything the warning says will reset. Confirm only when that trade is acceptable to you."
        ]
      },
      {
        heading: "Read these fields before confirming",
        type: "cards",
        items: [
          { title: "Requirement", text: "Use the number or milestone shown in your current Rebirth panel. No fixed requirement is claimed here." },
          { title: "Reset list", text: "Read each item in the confirmation warning instead of assuming every server matches a third-party guide." },
          { title: "Retained progress", text: "The chicken collection is reported to remain, but verify that wording and every other retained item live." },
          { title: "Earning benefit", text: "The official description promises faster earning but does not state a fixed multiplier. Use the current preview." }
        ]
      },
      {
        heading: "Values this guide does not guess",
        type: "table",
        columns: ["Question", "Reliable answer today", "Why"],
        rows: [
          ["What is the exact rebirth requirement?", "Check the live panel", "No current fixed requirement is confirmed"],
          ["What is the earning multiplier?", "Check the live preview", "The developer gives no number"],
          ["What Tower floor should I reach?", "No universal floor", "A route recommendation is not a requirement"],
          ["Do eggs or building upgrades remain?", "Check the reset warning", "The available sources do not establish those items"],
          ["When is the single best time?", "Depends on the live trade", "Requirements and account progress differ"]
        ]
      }
    ],
    faqs: [
      { q: "What does rebirth do in Grow a Chicken Fighter?", a: "The current developer description only confirms that rebirth helps the player earn faster. It does not state a fixed multiplier." },
      { q: "What resets when you rebirth?", a: "A current third-party guide reports that money and troop level reset. Verify both items and the complete reset list on the live confirmation screen before proceeding." },
      { q: "Do I keep my chickens after rebirth?", a: "The same current third-party guide reports that the chicken collection remains. Treat that as version-sensitive and check the live reset warning." },
      { q: "When should I rebirth?", a: "Rebirth when you meet the current live requirement and the displayed earning benefit is worth the reset list shown on your screen. There is no fixed Tower floor or universal timing rule confirmed here." },
      { q: "Should I spend my money before rebirth?", a: "If the current warning still says money resets, one current guide recommends using it on chicken upgrades or fusion first. Confirm what those purchases retain before spending." }
    ],
    relatedSlugs: ["arena-ascension-egg", "fusion-mutations", "eggs", "codes"],
    sources: [sources.official, sources.roonbyRebirth, sources.spaceQt, sources.rebirthVideo]
  }
};

export const pageList = navigation.map((item) => pages[item.slug]);
export const researchPageList = researchNavigation.map((item) => pages[item.slug]);
export const allRoutes = [...navigation, ...researchNavigation];

export function absoluteUrl(path = "") {
  const cleanPath = path ? `/${path.replace(/^\//, "").replace(/\/$/, "")}` : "";
  return `${site.url}${cleanPath}/`;
}

export function gamePath(path = "") {
  const cleanPath = path ? `/${path.replace(/^\//, "").replace(/\/$/, "")}` : "";
  return `/${site.gameSlug}${cleanPath}/`;
}

export function gameAbsoluteUrl(path = "") {
  return absoluteUrl(gamePath(path));
}
