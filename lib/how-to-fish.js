import { rawHowToFishLongtailPages } from "./how-to-fish-longtail";

const HOW_TO_FISH_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://gamehintlab.com";

export function howToFishPath(slug = "") {
  const cleanSlug = String(slug).trim().replace(/^\/+|\/+$/g, "");
  return cleanSlug ? `/how-to-fish/${cleanSlug}/` : "/how-to-fish/";
}

export function howToFishAbsoluteUrl(slug = "") {
  return `${HOW_TO_FISH_SITE_URL.replace(/\/$/, "")}${howToFishPath(slug)}`;
}

export const howToFishGame = {
  name: "How to Fish",
  slug: "how-to-fish",
  appId: "4001890",
  platform: "Steam",
  developer: "Dazed Games",
  releaseDateIso: "2026-08-20",
  updatedAtIso: "2026-08-23",
  path: howToFishPath(),
  absoluteUrl: howToFishAbsoluteUrl(),
  officialGameUrl:
    "https://store.steampowered.com/app/4001890/How_to_Fish/",
  officialUrl:
    "https://store.steampowered.com/app/4001890/How_to_Fish/",
  artPath: "/how-to-fish/game-art.jpg",
  officialAchievementsUrl:
    "https://steamcommunity.com/stats/4001890/achievements/",
  description:
    "Source-checked How to Fish guides for quests, bosses, co-op, achievements, islands, Fishipedia progress, weapons and confusing controls.",
  officialSummary:
    "How to Fish is a physics fishing game about catching, killing and selling fish, buying gear and weapons, completing quests and bosses, unlocking islands and finding rare variants. The launch store copy says one to four players; official patch 1.0.4 later raised online lobbies to eight.",
  evidenceNote:
    "Official Steam pages are used for the game loop and achievements. Exact routes, item names and control behavior are attributed to Steam Community player guides or discussions when no developer documentation exists."
};

export const howToFishSources = {
  officialStore: {
    label: "Official How to Fish Steam store page",
    url: howToFishGame.officialGameUrl,
    type: "Official Steam source",
    note:
      "Developer-supplied description of the one-to-four-player loop, gear, weapons, quests, bosses, island unlocks and rare fish variants."
  },
  officialAchievements: {
    label: "Official How to Fish Steam achievements",
    url: howToFishGame.officialAchievementsUrl,
    type: "Official Steam source",
    note:
      "Official achievement names and conditions, including Collector, Fishipedia, Grillmaster, Fully Equipped and We Are So Back."
  },
  officialPatch104: {
    label: "Official How to Fish patch 1.0.4 notes",
    url: "https://store.steampowered.com/news/app/4001890/view/1841579228669389",
    type: "Official Steam announcement",
    note:
      "Developer patch notes that raised the maximum lobby size to eight and addressed the join-lobby black screen."
  },
  officialPatch105: {
    label: "Official How to Fish patch 1.0.5 notes",
    url: "https://store.steampowered.com/news/app/4001890/view/1841579228671636",
    type: "Official Steam announcement",
    note:
      "Developer patch notes that fixed the Fishipedia achievement requiring one extra drip creature after the collection was complete."
  },
  achievementGuide: {
    label: "Steam Community achievement guide",
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3788027308",
    type: "Player-authored Steam Community guide",
    note:
      "Player-written route used for the five-island sequence and the Island 3 shark-to-Grill-Master quest. It is not developer documentation."
  },
  itemIdGuide: {
    label: "Steam Community item ID guide",
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3788383213",
    type: "Player-authored Steam Community guide",
    note:
      "Player-extracted save item list used only to verify the current firearm and broader weapon names. It does not prove unlock locations."
  },
  inventoryControlsDiscussion: {
    label: "Steam Community inventory controls discussion",
    url: "https://steamcommunity.com/app/4001890/discussions/0/582806239606543025/",
    type: "Player discussion",
    note:
      "A player reports that E takes an item in hand and a number assigns it to an inventory slot. This is not an official default-key reference."
  },
  droppedItemsDiscussion: {
    label: "Steam Community dropped-items discussion",
    url: "https://steamcommunity.com/app/4001890/discussions/0/582805931178597369/",
    type: "Player discussion",
    note:
      "Players report that dropped equipment lands at the character's feet and can be difficult to see in grass or water."
  }
};

export const howToFishHub = {
  path: howToFishPath(),
  title: "How to Fish Guides",
  seoTitle: "How to Fish Guides: Islands, Fish, Guns & Shark",
  description: howToFishGame.description,
  intro:
    "How to Fish is moving fast, while many exact controls and item routes are still documented by players rather than the developer. This hub separates official mechanics from player-tested routes so you can get an answer without treating guesses as facts.",
  quickAnswer:
    "Start with the five-island route if you are progressing the story, use the Island 3 shark guide for Grillmaster, and use the Fishipedia checklist when you are cleaning up missing creatures. The inventory page deliberately does not guess a drop key that no authoritative source has confirmed.",
  updatedAtIso: "2026-08-23",
  sections: [
    {
      heading: "What is confirmed",
      type: "table",
      columns: ["Question", "Current answer", "Evidence"],
      rows: [
        ["What is the main loop?", "Catch, kill and sell fish; buy gear and weapons; clear quests and bosses", "Official Steam store"],
        ["Do islands unlock through progression?", "Yes", "Official Steam store"],
        ["How many islands are in the current route?", "Five", "Player-authored Steam guide"],
        ["Are Collector and Fishipedia different?", "Yes: all creatures versus all drip creatures", "Official Steam achievements"],
        ["Is there a verified universal drop key?", "No authoritative default confirmed", "Current source check"]
      ],
      note:
        "A player guide can document a useful route without becoming an official source. Each guide below keeps that distinction visible."
    },
    {
      heading: "Pick the guide that matches your block",
      type: "cards",
      items: [
        {
          title: "Inventory confusion",
          text: "See what players report for E, number slots and where dropped equipment appears, without a made-up G or Q key."
        },
        {
          title: "Missing Fishipedia entries",
          text: "Use an evidence-first checklist for regular and drip creatures while a trustworthy complete location table is still unavailable."
        },
        {
          title: "Weapons and attachments",
          text: "Check the five verified firearm names, the broader weapon list and what the official Fully Equipped achievement actually requires."
        },
        {
          title: "Island 3 shark quest",
          text: "Follow the player-documented Standard Boss Lure route to the Grill Master without confusing it with the pink Standard Lure."
        },
        {
          title: "Story route",
          text: "Use the five-island order and the current post-game access note, with the community-source caveat intact."
        }
      ]
    },
    {
      heading: "How this guide avoids bad answers",
      type: "checklist",
      items: [
        "Official Steam pages support game systems and achievement requirements.",
        "Player guides support exact routes only when the route is explicitly attributed.",
        "Discussion comments are labeled as player reports, not default-control documentation.",
        "Unknown fish locations, keybinds and weapon unlock locations remain unknown instead of being filled with guesses.",
        "Version-sensitive details are checked against the current game before they are presented as permanent rules."
      ]
    }
  ],
  faqs: [
    {
      q: "Is this an official How to Fish website?",
      a: "No. This is an independent guide hub. Official mechanics are linked to Steam, and player-tested details are labeled as community information."
    },
    {
      q: "How many islands are in How to Fish?",
      a: "A current Steam Community achievement guide documents five islands in the main route. The official store confirms that quests and bosses unlock islands but does not publish the count."
    },
    {
      q: "What is the difference between Collector and Fishipedia?",
      a: "The official achievements define Collector as finding and killing all creatures, while Fishipedia requires finding and killing all drip creatures."
    },
    {
      q: "Why are some exact answers marked as player-reported?",
      a: "Steam discussions and community guides can reveal useful current behavior, but they are not developer documentation and may change with a patch."
    }
  ],
  sources: [
    howToFishSources.officialStore,
    howToFishSources.officialPatch104,
    howToFishSources.officialAchievements,
    howToFishSources.achievementGuide
  ]
};

const rawHowToFishPages = [
  {
    slug: "how-to-drop-items",
    title: "How to Drop Items in How to Fish",
    seoTitle: "How to Drop Items in How to Fish: Inventory Controls",
    description:
      "No verified How to Fish drop key yet: see the player-reported E and number-slot controls, where dropped gear lands and how to avoid losing it.",
    intro:
      "A universal default drop key has not been confirmed by an official control reference or a reliable current source. Steam players do describe how pickup and inventory assignment work, and they warn that equipment dropped from your hands can be almost invisible at your feet.",
    quickAnswer:
      "Do not trust guides that guess G or Q. No authoritative default drop key is confirmed. One Steam player reports that E takes an item in hand and pressing a number assigns it to an inventory slot. Other players report that equipment released from your hands lands directly at your feet, where grass or water can hide it.",
    updatedAtIso: "2026-08-23",
    eyebrow: "Control answer without a guessed key",
    status: "No official drop key confirmed",
    statusTone: "amber",
    sections: [
      {
        heading: "What the current evidence actually says",
        type: "table",
        columns: ["Action", "Current evidence", "Confidence"],
        rows: [
          ["Take an item in hand", "Press E", "Player-reported"],
          ["Assign the held item to a slot", "Press an available number", "Player-reported"],
          ["Use more slots later", "A player says the slot count expands on later islands", "Player-reported"],
          ["Drop equipment", "No authoritative universal default key confirmed", "Unverified"],
          ["Find released equipment", "Look directly at the character's feet", "Multiple player reports"]
        ],
        note:
          "Player discussion is useful evidence of current PC behavior, but it is not an official keybind sheet. A patch, controller layout or custom binding can change the input."
      },
      {
        heading: "Safest way to move an item without losing it",
        type: "steps",
        items: [
          "Stand on flat, clear ground away from grass, water, lava and clutter before changing what you are holding.",
          "Use E to take the item in hand only if that matches the prompt or binding shown in your current build.",
          "Press a free number key to assign the held item to that inventory slot, following the player-reported PC workflow.",
          "Confirm that the item icon now appears in the intended slot before walking away.",
          "If the item leaves your hands instead, stop moving and inspect the ground directly around your feet before trying another input."
        ]
      },
      {
        heading: "If an item seems to have disappeared",
        type: "cards",
        items: [
          {
            title: "Check your feet first",
            text: "Players report that released equipment drops at the character's feet rather than being thrown far forward."
          },
          {
            title: "Move the camera, not the character",
            text: "Rotating the camera keeps the search centered. Running around can make a tiny item harder to relocate."
          },
          {
            title: "Search grass and water slowly",
            text: "The dropped-items discussion specifically warns that small food and equipment can disappear visually in grass or water."
          },
          {
            title: "Check the live binding",
            text: "Custom keyboard or controller layouts may not match a player's PC report. Use the input shown by your current game when available."
          }
        ]
      },
      {
        heading: "Controls this page will not invent",
        type: "table",
        columns: ["Claim", "Answer", "Reason"],
        rows: [
          ["G is the drop key", "Not confirmed", "No authoritative source found"],
          ["Q is the drop key", "Not confirmed", "No authoritative source found"],
          ["Every controller uses one drop button", "Not confirmed", "Layouts and bindings can differ"],
          ["Dropped gear is permanently deleted", "Not established", "Players instead report finding it at their feet"]
        ]
      }
    ],
    faqs: [
      {
        q: "What key drops items in How to Fish?",
        a: "No authoritative universal default drop key has been confirmed. Do not assume G or Q from an unsourced answer; check the binding or on-screen prompt in your current build."
      },
      {
        q: "How do I put an item in my inventory?",
        a: "A Steam player reports pressing E to take an item in hand, then pressing an available number to assign it to that slot. Treat this as a player-reported PC workflow."
      },
      {
        q: "Where did my dropped weapon go?",
        a: "Players report that released equipment lands directly at the character's feet. Search there slowly, especially in grass or shallow water."
      },
      {
        q: "Do I get more inventory slots?",
        a: "One player reports that the inventory expands on later islands. The exact timing and slot count are not established by an official source here."
      },
      {
        q: "Why does my control not match this page?",
        a: "The E and number-key workflow comes from a player discussion, not an official binding sheet. A custom layout, controller or game update may differ."
      }
    ],
    relatedSlugs: ["save-file-location", "all-guns-weapons", "complete-walkthrough"],
    sources: [
      howToFishSources.inventoryControlsDiscussion,
      howToFishSources.droppedItemsDiscussion,
      howToFishSources.officialStore
    ]
  },
  {
    slug: "all-fish-locations",
    title: "How to Fish: Fish Locations & Fishipedia Checklist",
    seoTitle: "How to Fish All Fish Locations: Fishipedia Checklist",
    description:
      "A no-fake-locations How to Fish Fishipedia guide: understand regular versus drip creatures, track missing entries and search each unlocked island efficiently.",
    intro:
      "A trustworthy, complete fish-to-island location map is not available in the verified sources used for this guide. Instead of filling a table with copied or guessed locations, this page gives you the official completion conditions and a repeatable way to isolate missing regular and drip creatures across the five-island route.",
    quickAnswer:
      "For Collector, the official achievement requires you to find and kill every creature. Fishipedia is separate: it requires every drip creature. Work island by island, record the normal and drip entries separately, and revisit completed areas after unlocking all five islands. Exact fish-to-island rows are left unpublished until they can be verified.",
    updatedAtIso: "2026-08-23",
    eyebrow: "Evidence-first completion guide",
    status: "Full location map not yet verified",
    statusTone: "amber",
    sections: [
      {
        heading: "Collector and Fishipedia are not the same task",
        type: "table",
        columns: ["Achievement", "Official condition", "What to track"],
        rows: [
          ["Collector", "Find and kill all creatures", "Every normal creature entry"],
          ["Fishipedia", "Find and kill all drip creatures", "The drip variant of every required creature"],
          ["Story completion", "Finish the game", "Island and quest progress, not collection proof"]
        ],
        note:
          "The official achievement wording supports the two collection goals. It does not publish a creature-by-island table or rare-variant rate."
      },
      {
        heading: "Current creature checklist from the save item list",
        type: "table",
        columns: ["IDs 0-16", "IDs 17-35", "IDs 36-52"],
        rows: [
          ["0 · Angelfish", "17 · Catfish", "36 · Parrotfish"],
          ["1 · Anglerfish", "18 · Clam", "37 · Perch"],
          ["2 · Bass", "19 · Clownfish", "38 · Pike"],
          ["3 · Blobfish", "20 · Cod", "39 · Piranha"],
          ["4 · Bluegill", "21 · Brown Crab", "40 · Red Snapper"],
          ["5 · Albatross", "22 · Dripper", "41 · Salmon"],
          ["6 · Blueshark", "23 · Eel", "42 · Sea Urchin"],
          ["7 · Bowhead Whale", "24 · Flying Fish", "43 · Seagull"],
          ["8 · The Old Pike", "25 · Footsnail", "44 · Seahorse"],
          ["9 · Giant Piranha", "26 · Gar", "45 · Sengarat"],
          ["10 · Goblin Shark", "27 · Goby", "46 · Shrimp"],
          ["11 · Mutated Bowhead Whale", "28 · Goldfish", "47 · Stonefish"],
          ["12 · Pufferfish", "29 · Halibut", "48 · Superdwarf Fish"],
          ["13 · Spidercrab", "32 · Lobster", "49 · Tigerfish"],
          ["14 · Sunfish", "33 · Mackerel", "50 · Triggerfish"],
          ["15 · Tuna", "34 · Needlefish", "51 · Voxelfish"],
          ["16 · Bowlfish", "35 · Oarfish", "52 · Yellow Boxfish"]
        ],
        note:
          "These 51 names come from a player-extracted save item list and include bosses, birds, crustaceans and other creatures—not 51 ordinary fish. The list verifies names only; it does not prove an island, lure, rate or legitimate unlock route."
      },
      {
        heading: "Five-pass island checklist",
        type: "steps",
        items: [
          "Finish enough quests and bosses to open the full five-island route before declaring an entry unobtainable.",
          "On Island 1, record which regular creatures you have killed and which drip counterparts remain missing.",
          "Repeat the same two-column check on Islands 2, 3 and 4 instead of relying on memory.",
          "Complete a separate pass on Island 5 - Volcano, the fifth island named in the player achievement guide.",
          "Return to earlier islands after story completion and target only blank entries; the player guide reports that all five islands remain open after the ending.",
          "Confirm progress from the achievement or in-game collection state after a kill, not merely after seeing or hooking a creature."
        ]
      },
      {
        heading: "How to isolate one missing entry",
        type: "cards",
        items: [
          {
            title: "Separate normal and drip",
            text: "A normal kill can advance Collector without satisfying the corresponding Fishipedia cleanup goal. Track them independently."
          },
          {
            title: "Finish island access first",
            text: "The official store says quests and bosses unlock islands. A missing entry may simply belong to an area you have not opened."
          },
          {
            title: "Change one variable at a time",
            text: "When revisiting a fishing area, keep a short note of the island and lure used so repeated attempts produce useful evidence."
          },
          {
            title: "Verify the kill",
            text: "Both collection achievements use the words find and kill. Hooking, seeing or carrying a creature is not the published completion condition."
          }
        ]
      },
      {
        heading: "What is known and what remains open",
        type: "table",
        columns: ["Question", "Reliable answer today", "Source level"],
        rows: [
          ["Are there rare variants?", "Yes", "Official Steam store"],
          ["Does Fishipedia require drip creatures?", "Yes", "Official achievements"],
          ["Does Collector require all creatures?", "Yes", "Official achievements"],
          ["How do players open the encyclopedia?", "Press Tab in the current guide's PC route", "Player achievement guide"],
          ["Does the island choose the catch?", "The current guide says lure choice determines the catch", "Player achievement guide"],
          ["Was the extra-drip achievement bug fixed?", "Yes, in official patch 1.0.5", "Official patch notes"],
          ["Are there five islands in the current route?", "Yes, according to a current player guide", "Steam Community guide"],
          ["Which exact fish is on each island?", "Complete mapping not verified", "Open question"],
          ["What are the exact spawn or lure rates?", "Not published here", "Open question"]
        ],
        note:
          "This page will add individual location rows only when a same-version source or repeatable gameplay evidence supports them."
      },
      {
        heading: "Before reporting a missing or bugged fish",
        type: "checklist",
        items: [
          "All five islands are unlocked.",
          "The creature was killed, not only seen or caught.",
          "Normal and drip variants are being tracked separately.",
          "Earlier islands were revisited after the story route.",
          "The same blank entry remains after restarting the game and checking current progress."
        ]
      }
    ],
    faqs: [
      {
        q: "Where are all fish in How to Fish?",
        a: "A complete verified fish-to-island map is not available in the sources used here. This guide therefore gives a five-island tracking method instead of publishing guessed locations."
      },
      {
        q: "What does Collector require?",
        a: "The official Steam achievement says to find and kill all creatures."
      },
      {
        q: "What does Fishipedia require?",
        a: "The official Steam achievement says to find and kill all drip creatures, making it a separate rare-variant cleanup task. Patch 1.0.5 fixed the bug that could require one extra drip after completing the collection."
      },
      {
        q: "Do I need to kill a fish for it to count?",
        a: "The official wording for both Collector and Fishipedia includes kill. Do not assume that seeing, hooking or carrying the creature completes the requirement."
      },
      {
        q: "Can I revisit old islands?",
        a: "A current player achievement guide reports that all five islands remain available after finishing the game, which makes post-game cleanup possible."
      }
    ],
    relatedSlugs: ["achievements-guide", "how-many-islands", "complete-walkthrough"],
    sources: [
      howToFishSources.officialAchievements,
      howToFishSources.officialPatch105,
      howToFishSources.officialStore,
      howToFishSources.achievementGuide
    ]
  },
  {
    slug: "all-guns-weapons",
    title: "How to Fish: All Guns, Weapons & Unlocks",
    seoTitle: "How to Fish All Guns & Weapons: Names and Unlocks",
    description:
      "The five How to Fish firearms, player-documented island unlock order, broader weapon names and the official Fully Equipped requirement.",
    intro:
      "The official Steam page confirms that How to Fish lets you buy gear and weapons, but it does not publish a catalog. A player-extracted item list verifies five firearm names, while a current achievement route documents the islands where those guns first become available. Both are community sources, so prices and exact shop stock remain version-sensitive.",
    quickAnswer:
      "The five verified firearm names are Pistol, Shotgun, SMG, Sniper Rifle and Assault Rifle. A current player route places Pistol and Shotgun on Island 2, SMG on Island 3, Sniper Rifle on Island 4 and Assault Rifle on Island 5. Treat that order as community-documented and patch-sensitive, not an official catalog.",
    updatedAtIso: "2026-08-23",
    eyebrow: "Verified names, honest location gaps",
    status: "5 firearms identified",
    statusTone: "green",
    sections: [
      {
        heading: "All verified firearms",
        type: "table",
        columns: ["Firearm", "Current player-documented island", "Evidence"],
        rows: [
          ["Pistol", "Island 2", "Item list + player achievement route"],
          ["Shotgun", "Island 2", "Item list + player achievement route"],
          ["SMG", "Island 3", "Item list + player achievement route"],
          ["Sniper Rifle", "Island 4", "Item list + player achievement route"],
          ["Assault Rifle", "Island 5", "Item list + player achievement route"]
        ],
        note:
          "The names come from a player-extracted item list; the island order comes from a current player achievement route. Neither source guarantees permanent prices, stock or unlock conditions after a patch."
      },
      {
        heading: "Other combat items in the same list",
        type: "cards",
        items: [
          {
            title: "Brass Knuckles",
            text: "A named melee item in the player-extracted list. No exact unlock route is claimed here."
          },
          {
            title: "Knife",
            text: "A named melee item in the same list. Its current purchase point and price still need reliable route evidence."
          },
          {
            title: "Dynamite",
            text: "A named explosive item in the list. The current player route places it on Island 2; do not count it as one of the five firearms."
          },
          {
            title: "SMG versus Uzi",
            text: "Players may call the compact automatic weapon an Uzi, but SMG is the verified item-list name used on this page."
          }
        ]
      },
      {
        heading: "How to check a weapon unlock safely",
        type: "steps",
        items: [
          "Progress quests and bosses to open new islands, following the official game loop.",
          "Inspect each newly available shop or gear offer and record the exact weapon name, price and island shown in your current build.",
          "Compare the displayed name with the five-firearm list rather than relying on a nickname.",
          "Buy only after confirming that the weapon or attachment is the one needed for your current goal.",
          "Recheck old shops after major progression if an upgrade or attachment is still missing; this page does not assume a fixed permanent stock table."
        ]
      },
      {
        heading: "Fully Equipped achievement",
        type: "table",
        columns: ["Question", "Reliable answer", "Evidence"],
        rows: [
          ["What does Fully Equipped require?", "Put all attachments on one weapon", "Official achievement"],
          ["How many slots are documented?", "Four: magazine, laser, sight and muzzle", "Current player guide"],
          ["Which sight fills the sight slot?", "Red Dot or Sniper Scope", "Current player guide"],
          ["Which muzzle fills the muzzle slot?", "Compensator or Suppressor", "Current player guide"],
          ["When are the later options available?", "The guide places Sniper Scope and Suppressor in the Island 4 route", "Current player guide"]
        ],
        note:
          "Fill all four slots on one compatible weapon. Red Dot and Sniper Scope are alternatives in one slot, as are Compensator and Suppressor; the guide does not say an Assault Rifle is mandatory."
      },
      {
        heading: "Details this guide does not guess",
        type: "checklist",
        items: [
          "A fixed island or shop location for every weapon.",
          "Current weapon prices or permanent stock order.",
          "Damage, ammunition or fire-rate values not shown by a reliable same-version source.",
          "A best-gun ranking without repeatable comparison data.",
          "A claim that Fully Equipped requires the Assault Rifle; the official condition only says one weapon."
        ]
      }
    ],
    faqs: [
      {
        q: "How many guns are in How to Fish?",
        a: "A current player-extracted item list contains five firearms: Pistol, Shotgun, SMG, Sniper Rifle and Assault Rifle."
      },
      {
        q: "Is the Uzi a separate gun?",
        a: "The verified item-list name is SMG. Players may use Uzi as a nickname, but this source does not establish a separate sixth firearm with that name."
      },
      {
        q: "What other weapons are in the game?",
        a: "The same player-extracted list includes Brass Knuckles, Knife and Dynamite in addition to the five firearms."
      },
      {
        q: "Where do I unlock every gun?",
        a: "A current player route places Pistol and Shotgun on Island 2, SMG on Island 3, Sniper Rifle on Island 4 and Assault Rifle on Island 5. This is community-documented and may change after a patch."
      },
      {
        q: "How do I get Fully Equipped?",
        a: "Fill four documented slots on one weapon: Extended Mag, Laser Sight, one sight such as Red Dot or Sniper Scope, and one muzzle such as Compensator or Suppressor. The official condition does not require owning every gun or using the Assault Rifle."
      }
    ],
    relatedSlugs: ["achievements-guide", "boat-engine-upgrades", "how-to-finish-game"],
    sources: [
      howToFishSources.itemIdGuide,
      howToFishSources.achievementGuide,
      howToFishSources.officialStore,
      howToFishSources.officialAchievements
    ]
  },
  {
    slug: "how-to-get-shark",
    title: "How to Get the Shark in How to Fish",
    seoTitle: "How to Get the Shark in How to Fish: Lure & Quest",
    description:
      "The Island 3 shark route in How to Fish: buy the $280 Standard Boss Lure, catch and kill the shark, then deliver it intact to the Grill Master.",
    intro:
      "A current Steam Community achievement guide documents a direct Island 3 route from the Standard Boss Lure to the Grill Master. This is a player-authored route rather than developer documentation, but its endpoint matches the official Grillmaster achievement.",
    quickAnswer:
      "On Island 3, buy the Standard Boss Lure for $280, equip and use it to catch the shark, kill the shark, and carry it intact to the Grill Master. Do not buy the pink Standard Lure by mistake. Completing the hand-in starts the grill and matches the official Grillmaster achievement condition.",
    updatedAtIso: "2026-08-23",
    eyebrow: "Island 3 quest route",
    status: "Player route + official achievement",
    statusTone: "green",
    sections: [
      {
        heading: "Shark quest requirements",
        type: "table",
        columns: ["Requirement", "Current route", "Evidence"],
        rows: [
          ["Island", "Island 3", "Player achievement guide"],
          ["Correct lure", "Standard Boss Lure", "Player achievement guide"],
          ["Reported price", "$280", "Player achievement guide"],
          ["Target", "Shark", "Player achievement guide"],
          ["Quest recipient", "Grill Master", "Player achievement guide"],
          ["Achievement endpoint", "Start the grill", "Official Grillmaster achievement"]
        ],
        note:
          "The exact route and price are community-documented and can change with a patch. Read the current shop label before buying."
      },
      {
        heading: "How to catch and deliver the shark",
        type: "steps",
        items: [
          "Reach Island 3 through the normal quest and boss progression.",
          "Find the lure purchase and select Standard Boss Lure, reported at $280 in the current player guide.",
          "Check the full item name before paying; the pink Standard Lure is not the boss lure used by this route.",
          "Equip and use the Standard Boss Lure to catch the shark.",
          "Kill the shark, then keep the shark intact instead of cooking, selling or otherwise consuming it.",
          "Carry the shark to the Grill Master and complete the hand-in to start the grill."
        ]
      },
      {
        heading: "Common reasons the route fails",
        type: "cards",
        items: [
          {
            title: "Wrong lure",
            text: "Standard Boss Lure is the documented item. The similarly named pink Standard Lure is not the same purchase."
          },
          {
            title: "Shark was altered",
            text: "The route requires an intact shark for the Grill Master hand-in. Avoid cooking, selling or losing it on the way."
          },
          {
            title: "Item dropped in terrain",
            text: "Players report that released equipment and items can land at their feet and become hard to see in grass or water."
          },
          {
            title: "Quest state not ready",
            text: "If the recipient does not accept the shark, recheck the live Island 3 quest prompt rather than buying a second lure immediately."
          }
        ]
      },
      {
        heading: "What is official and what is player-tested",
        type: "table",
        columns: ["Claim", "Source level", "Use it as"],
        rows: [
          ["The game has quests, bosses and island unlocks", "Official Steam store", "Confirmed game system"],
          ["Grillmaster requires starting the grill", "Official achievement", "Confirmed completion condition"],
          ["Island 3 and Standard Boss Lure route", "Player achievement guide", "Current community route"],
          ["$280 lure price", "Player achievement guide", "Version-sensitive reported price"],
          ["Permanent shark spawn or catch rate", "Not established", "Do not guess"]
        ]
      }
    ],
    faqs: [
      {
        q: "Where is the shark in How to Fish?",
        a: "A current Steam Community achievement guide places the shark quest on Island 3 and uses the Standard Boss Lure to catch it."
      },
      {
        q: "Which lure catches the shark?",
        a: "Use the Standard Boss Lure according to the player-authored route. Do not confuse it with the pink Standard Lure."
      },
      {
        q: "How much is the shark lure?",
        a: "The current player guide reports $280 for the Standard Boss Lure. Treat that price as version-sensitive and verify the live shop before buying."
      },
      {
        q: "What do I do with the shark?",
        a: "Kill it, keep it intact and carry it to the Grill Master for the hand-in. Do not cook or sell it first."
      },
      {
        q: "What does the Grillmaster achievement require?",
        a: "The official Steam achievement condition is to start the grill. The player guide connects that endpoint to the Island 3 shark hand-in."
      }
    ],
    relatedSlugs: ["how-to-cook-fish", "how-to-beat-pufferfish", "complete-walkthrough"],
    sources: [
      howToFishSources.achievementGuide,
      howToFishSources.officialAchievements,
      howToFishSources.officialStore,
      howToFishSources.droppedItemsDiscussion
    ]
  },
  {
    slug: "how-many-islands",
    title: "How Many Islands Are in How to Fish?",
    seoTitle: "How Many Islands Are in How to Fish? All 5 in Order",
    description:
      "How to Fish currently has five islands in the player-documented route: Islands 1 through 4, then Island 5 - Volcano, with post-game return access.",
    intro:
      "The official Steam store confirms that quests and bosses unlock new islands, but it does not state a number. A current Steam Community achievement guide documents five islands in the route and says all five remain accessible after the story ending.",
    quickAnswer:
      "There are five islands in the current player-documented route: Island 1, Island 2, Island 3, Island 4 and Island 5 - Volcano. The five-count and Volcano label come from a Steam Community guide, while the official store only confirms the island-unlock progression system.",
    updatedAtIso: "2026-08-23",
    eyebrow: "Current story route",
    status: "5 islands documented",
    statusTone: "green",
    sections: [
      {
        heading: "All islands in order",
        type: "table",
        columns: ["Order", "Current documented name", "Reliable detail"],
        rows: [
          ["1", "Island 1", "Opening island in the player route"],
          ["2", "Island 2", "Second island in the player route"],
          ["3", "Island 3", "Contains the player-documented shark and Grill Master route"],
          ["4", "Island 4", "Fourth island in the player route"],
          ["5", "Island 5 - Volcano", "Final named island in the player route"]
        ],
        note:
          "The count and sequence are from a player-authored Steam achievement guide. The developer does not publish an official island list on the store page."
      },
      {
        heading: "How island progression works",
        type: "steps",
        items: [
          "Catch, kill and sell fish to fund the gear needed for the next part of the route.",
          "Complete the active quests and bosses; the official store identifies both as the way to unlock new islands.",
          "Before leaving an island, note unfinished regular and drip creature entries if you are pursuing Collector or Fishipedia.",
          "On Island 3, complete the shark-to-Grill-Master route if you want the Grillmaster achievement.",
          "Continue through Island 4 to Island 5 - Volcano, the fifth island in the current player guide.",
          "After finishing the story, revisit earlier islands for collection cleanup; the same guide reports that all five remain open."
        ]
      },
      {
        heading: "What to finish before moving on",
        type: "cards",
        items: [
          {
            title: "Main quest and boss",
            text: "These are the official progression gates associated with unlocking additional islands. Follow the current objective rather than an old fixed-price route."
          },
          {
            title: "Useful gear check",
            text: "The official loop includes buying gear and weapons. Check current shops, but do not assume every item is permanently tied to one island."
          },
          {
            title: "Creature log",
            text: "Record normal and drip creatures separately so post-game cleanup does not become a blind search across five islands."
          },
          {
            title: "Unfinished side route",
            text: "Island 3 includes the current player-documented shark route for the Grillmaster achievement."
          }
        ]
      },
      {
        heading: "Confirmed facts versus route details",
        type: "table",
        columns: ["Question", "Answer", "Evidence level"],
        rows: [
          ["Do quests and bosses unlock islands?", "Yes", "Official Steam store"],
          ["How many islands are documented now?", "Five", "Player achievement guide"],
          ["What is the fifth island called?", "Island 5 - Volcano", "Player achievement guide"],
          ["Can all five be revisited after the ending?", "Yes, according to the guide", "Player achievement guide"],
          ["Will a future update add another island?", "Unknown", "No current official announcement cited"]
        ]
      }
    ],
    faqs: [
      {
        q: "How many islands are in How to Fish?",
        a: "A current Steam Community achievement guide documents five islands in the main route."
      },
      {
        q: "What are all the islands called?",
        a: "The guide lists Island 1, Island 2, Island 3, Island 4 and Island 5 - Volcano. It does not provide separate proper names for the first four."
      },
      {
        q: "How do I unlock the next island?",
        a: "The official Steam store says that completing quests and bosses unlocks new islands. Follow the current objective and boss route in your build."
      },
      {
        q: "Can I return to previous islands?",
        a: "The current player achievement guide says all five islands remain accessible after the story ending, allowing collection cleanup."
      },
      {
        q: "What is the final island?",
        a: "Island 5 - Volcano is the fifth and final island in the current player-documented route. A future game update could change the total."
      }
    ],
    relatedSlugs: ["complete-walkthrough", "how-to-use-boat-radar", "how-to-finish-game"],
    sources: [
      howToFishSources.achievementGuide,
      howToFishSources.officialStore,
      howToFishSources.officialAchievements
    ]
  }
];

export const howToFishPageList = [...rawHowToFishPages, ...rawHowToFishLongtailPages].map((page) => ({
  ...page,
  path: howToFishPath(page.slug)
}));

export const howToFishPages = Object.fromEntries(
  howToFishPageList.map((page) => [page.slug, page])
);
