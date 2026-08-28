const UPDATED_AT = "2026-08-28";

const longtailSources = {
  officialStore: {
    label: "Official How to Fish Steam store page",
    url: "https://store.steampowered.com/app/4001890/How_to_Fish/",
    type: "Official Steam source",
    note:
      "Developer-supplied release, feature, platform, language and PC system-requirement information."
  },
  officialAchievements: {
    label: "Official How to Fish Steam achievements",
    url: "https://steamcommunity.com/stats/4001890/achievements/",
    type: "Official Steam source",
    note:
      "Official names and conditions for all 28 achievements; it does not provide walkthrough steps."
  },
  patch104: {
    label: "Official How to Fish Patch 1.0.4 notes",
    url: "https://store.steampowered.com/news/app/4001890/view/1841579228669389",
    type: "Official developer patch notes",
    note:
      "Adds support for lobbies of up to eight players and reports an attempted fix for the join-lobby black screen."
  },
  patch105: {
    label: "Official How to Fish Patch 1.0.5 notes",
    url: "https://store.steampowered.com/news/app/4001890/view/1841579228671636",
    type: "Official developer patch notes",
    note:
      "Adds invite-only private lobbies and an in-game session-type setting that takes effect after a restart."
  },
  patch108: {
    label: "Official How to Fish Patch 1.0.8 notes",
    url: "https://store.steampowered.com/news/app/4001890/view/1841579228674959",
    type: "Official developer patch notes",
    note:
      "Fixes the PlayStation controller glyphs shown by the Windows version. It does not announce a PlayStation console release."
  },
  patch109: {
    label: "Official How to Fish Patch 1.0.9 notes",
    url: "https://store.steampowered.com/news/app/4001890/view/1841579228676115",
    type: "Official developer patch notes",
    note:
      "Adds Easy and Hard difficulty choices plus a Steam connection diagnostic in the main menu."
  },
  patch110: {
    label: "Official How to Fish Patch 1.0.10 notes",
    url: "https://store.steampowered.com/news/app/4001890/view/1842212951300687",
    type: "Official developer patch notes",
    note:
      "Extends connection time and adds more loading and lobby fixes, while using cautious rather than guaranteed language."
  },
  developerFaq: {
    label: "Dazed Games official FAQ",
    url: "https://dazed.games/",
    type: "Official developer source",
    note:
      "The developer says How to Fish is coming to consoles and Mac, but does not name console platforms or give a release date."
  },
  achievementRoute: {
    label: "Steam Community 1.0.4 achievement route",
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3788027308",
    type: "Player-authored Steam Community guide",
    note:
      "Player-written route completed on version 1.0.4 and updated with a 1.0.5 warning. Prices and exact tactics are community evidence, not developer documentation."
  },
  pcGamerSpiderCrab: {
    label: "PC Gamer Spider Crab boss guide",
    url: "https://www.pcgamer.com/games/sim/how-to-fish-spider-crab/",
    type: "Independent hands-on guide",
    note:
      "Published August 25, 2026 after hands-on solo and co-op runs; confirms the Beer-to-Empty-Beer-Can exchange, summon route, charge-stun opening and boat-key hand-in."
  },
  allThingsSpiderCrab: {
    label: "All Things How Spider Crab quest guide",
    url: "https://allthings.how/how-to-fish-how-to-defeat-the-spider-crab-who-stole-my-beer/",
    type: "Independent hands-on guide",
    note:
      "Updated August 23, 2026; independently confirms the Empty Beer Can lure, sideways dodge, post-charge stun and exact-boss-drop hand-in."
  },
  pcGamerPufferfish: {
    label: "PC Gamer Pufferfish boss guide",
    url: "https://www.pcgamer.com/games/sim/how-to-fish-pufferfish/",
    type: "Independent hands-on guide",
    note:
      "Published August 25, 2026 after solo and co-op attempts; documents the Island 3 swimmer quest, endangered-creature hand-in, Carrot Bait and run-and-gun boss strategy."
  },
  islandWalkthrough: {
    label: "Current independent island progression walkthrough",
    url: "https://allthings.how/how-to-fish-full-island-and-boss-progression-walkthrough/",
    type: "Third-party launch-week walkthrough",
    note:
      "Used only for the conflicting launch-week claim that the Radar is a $10 purchase. The direct Steam discussion instead describes collecting it near the starting fisherman."
  },
  saveItemGuide: {
    label: "Steam Community save and item ID guide",
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3788383213",
    type: "Player-authored Steam Community guide",
    note:
      "Used here only for the reported Windows save-folder path and slot-file naming. This site does not provide save editing instructions."
  },
  cloudSaveDiscussion: {
    label: "Steam Community cloud-save request",
    url: "https://steamcommunity.com/app/4001890/discussions/0/582805931178519332/",
    type: "Player discussion",
    note:
      "Shows player demand for cloud saves; it is not an official feature announcement."
  },
  discussions: {
    label: "How to Fish Steam discussions",
    url: "https://steamcommunity.com/app/4001890/discussions/0/",
    type: "Steam Community discussions",
    note:
      "Current player reports are useful for spotting recurring problems, but individual posts are not confirmed fixes."
  },
  blackScreenDiscussion: {
    label: "Current join-lobby black-screen discussion",
    url: "https://steamcommunity.com/app/4001890/discussions/0/582806239606504842/",
    type: "Player discussion",
    note:
      "A current report that the join-lobby black screen can persist after Patch 1.0.4; one player reports hosting as a temporary workaround, not a confirmed universal fix."
  },
  radarDiscussion: {
    label: "Current Steam discussion about using the Radar",
    url: "https://steamcommunity.com/app/4001890/discussions/0/582805931178507386/",
    type: "Player discussion",
    note:
      "A player answer says to collect the Radar near the starting fisherman after the first area and hold it to see the next location. This is current community evidence, not an official control guide."
  },
  radarDotDiscussion: {
    label: "Current Steam discussion about the Radar dot",
    url: "https://steamcommunity.com/app/4001890/discussions/0/582805931178593083/",
    type: "Player discussion",
    note:
      "A current player report explicitly describes following the dot shown on the Radar. It supports the navigation cue, not a universal control binding."
  },
  steamLaunchSupport: {
    label: "Steam Support: games do not run after Preparing to Launch",
    url: "https://help.steampowered.com/en/faqs/view/5814-D9A3-BE42-62DF",
    type: "Official Steam Support",
    note:
      "Steam's general Windows checklist covers OS and driver updates, file verification, conflicting software and system requirements."
  },
  steamVerifyFiles: {
    label: "Steam Support: verify integrity of game files",
    url: "https://help.steampowered.com/en/faqs/view/0C48-FCBD-DA71-93EB",
    type: "Official Steam Support",
    note:
      "Official steps for checking an installed game's local files without deleting saves."
  },
  storeApi: {
    label: "Official Steam store API data for How to Fish",
    url: "https://store.steampowered.com/api/appdetails?appids=4001890&l=english&cc=us",
    type: "Official Steam data",
    note:
      "Current platform and full-controller-support fields, including DualShock and DualSense support."
  },
  deckCompatibility: {
    label: "Official Steam Deck compatibility report",
    url: "https://store.steampowered.com/saleaction/ajaxgetdeckappcompatibilityreport?nAppID=4001890",
    type: "Official Steam data",
    note:
      "Steam currently categorizes the game as Verified and reports that its Deck controller, glyph, text and performance checks pass."
  }
};

export const rawHowToFishLongtailPages = [
  {
    slug: "complete-walkthrough",
    title: "How to Fish Complete Walkthrough",
    seoTitle: "How to Fish Story Walkthrough: Main Route & Ending",
    description:
      "A spoiler-marked How to Fish story route from the lighthouse and Spider Crab through all five islands, the Lava Whale and the RHIB ending.",
    intro:
      "The story is a chain of NPC requests, boss lures and trophy hand-ins. The official store confirms that quests and bosses unlock new islands; the exact order below comes from a player-authored route completed on version 1.0.4. Its later 1.0.5 edit only adds a warning about the Bean route, not a full retest of every price or mechanic.",
    quickAnswer:
      "Clear the lighthouse keeper's Spider Crab quest, take the shell back for the boat keys, then progress through the Island 2 leech and piranha quest, the Island 3 shark and pufferfish routes, the Island 4 tuna and terrorizing bird fight, and the Island 5 whale chain. After the Lava Whale, return its tail to the scientist, collect the RHIB keys and start the RHIB to finish.",
    updatedAtIso: UPDATED_AT,
    eyebrow: "Spoiler-marked five-island route",
    status: "v1.0.4 player route; 1.0.5 warning noted",
    statusTone: "green",
    sections: [
      {
        heading: "Story route at a glance",
        type: "table",
        columns: ["Stage", "Progression task", "What moves the story"],
        rows: [
          ["Island 1", "Spider Crab", "Return its shell to the lighthouse keeper for boat keys"],
          ["Island 2", "Three leeches and Giant Piranha", "Return the piranha tail to the forest lady"],
          ["Island 3", "Shark, tourist and Pufferfish", "Unlock the grill, earn the carrot bait and defeat the island boss"],
          ["Island 4", "Tuna and terrorizing bird", "Use the tuna as bait and win the bird fight"],
          ["Island 5 - Volcano", "Whale and Lava Whale", "Return the final tail, take the RHIB keys and start the RHIB"]
        ],
        note:
          "The island-by-island actions and prices are from the community route, not an official quest manual."
      },
      {
        heading: "Starting island to Island 2",
        type: "steps",
        items: [
          "Complete the opening fishing tasks and prepare a weapon before summoning the first boss.",
          "Use beer as the player guide's documented bait for the Spider Crab, dodge its charge and attack during the stun window.",
          "Pick up the shell and hand that trophy—not ordinary meat—to the lighthouse keeper for the boat keys.",
          "Finish the lighthouse keeper dialogue, confirm the boat keys were awarded and continue to the next story area.",
          "On Island 2, collect three leeches from the forest floor, give them to the lady, defeat the Giant Piranha and return its tail."
        ]
      },
      {
        heading: "Islands 3 and 4",
        type: "steps",
        items: [
          "On Island 3, use the Standard Boss Lure route to bring an intact shark to the Grill Master and unlock the grill.",
          "Give the tourist an endangered fish to receive the carrot used as Pufferfish boss bait.",
          "Keep moving during the Pufferfish fight; the player guide reports a poison trail beginning at half health.",
          "On Island 4, fish up a tuna with the Professional Boss Lure, then place the tuna on the ground to attract the terrorizing bird.",
          "Use a building for cover from the bird's dive and ranged attacks, then continue to the Volcano."
        ]
      },
      {
        heading: "Volcano and ending",
        type: "steps",
        items: [
          "Give the scientist five fish to receive the community-documented whale bait.",
          "Catch and kill the regular whale, then throw it into the volcano to start the final Lava Whale encounter.",
          "Avoid the boss and the lava pools; phase two adds more frequent stomps and attacks from above.",
          "Take the Lava Whale tail back to the scientist after the kill.",
          "Use the RHIB keys he gives you and start the RHIB; the boss kill alone does not trigger the ending."
        ]
      },
      {
        heading: "Version and evidence limits",
        type: "checklist",
        items: [
          "The five-island order and exact tactics are attributed to a player-authored version 1.0.4 guide.",
          "The guide's 1.0.5 update does not provide a current Bean route, so this walkthrough does not invent one.",
          "Official Steam pages confirm the broad quest, boss and island-unlock loop, not individual prices or NPC routes.",
          "Check current objective text before spending money because patches can change prices and balance.",
          "Keep distinct boss trophies until the relevant NPC accepts them; a kill by itself may not advance the quest."
        ]
      }
    ],
    faqs: [
      {
        q: "What is the correct story order in How to Fish?",
        a: "The current community route runs from Spider Crab to Giant Piranha, Pufferfish, the terrorizing bird, the regular whale and finally the Lava Whale, with NPC hand-ins between stages."
      },
      {
        q: "Does killing a boss unlock the next island immediately?",
        a: "Not always. The player route repeatedly requires carrying the boss trophy back to the quest giver before travel or the next objective unlocks."
      },
      {
        q: "Does this walkthrough cover every story island?",
        a: "It follows the player-documented main route through the starting area, Islands 2 through 4 and Island 5 - Volcano. The separate island-count guide owns the exact count and revisit details."
      },
      {
        q: "Can I use this walkthrough for the Bean achievement?",
        a: "No. Bean requires finishing within one hour, and the community guide says its previous shortcut was patched in version 1.0.5."
      },
      {
        q: "What actually triggers the ending?",
        a: "After the Lava Whale, return its tail to the scientist, take the RHIB keys and start the RHIB."
      }
    ],
    relatedSlugs: ["how-to-get-boat-keys", "how-to-get-leeches", "how-to-beat-pufferfish", "how-to-finish-game", "how-many-islands"],
    sources: [longtailSources.officialStore, longtailSources.achievementRoute, longtailSources.officialAchievements]
  },
  {
    slug: "how-to-get-boat-keys",
    title: "How to Get Boat Keys and Beat the Spider Crab",
    seoTitle: "How to Get Boat Keys in How to Fish: Spider Crab Boss",
    description:
      "Get the first boat keys by turning Beer into an Empty Beer Can lure, beating the Spider Crab and returning its exact drop to the lighthouse keeper.",
    intro:
      "Boat access on the starting island is tied to the lighthouse keeper's culprit quest. The official achievement names that objective Who stole my beer. Two current hands-on guides independently confirm the Beer-to-Empty-Beer-Can exchange, the charge-and-stun fight pattern and the final hand-in.",
    quickAnswer:
      "Buy the Beer and give the full can to the lighthouse keeper. He drinks it and returns an Empty Beer Can; equip that empty can as your lure to summon the Spider Crab. Dodge sideways when it charges, attack during the dazed window, then take the exact item dropped by the defeated boss back to the keeper for the first boat keys.",
    updatedAtIso: "2026-08-28",
    eyebrow: "Starting-island progression",
    status: "Current hands-on route, official achievement endpoint",
    statusTone: "green",
    sections: [
      {
        heading: "Boat-key requirements",
        type: "table",
        columns: ["Requirement", "Current answer", "Evidence"],
        rows: [
          ["Quest", "Who stole my beer", "Official achievement name"],
          ["Boss", "Spider Crab", "Current hands-on guides"],
          ["Exchange", "Give the full Beer to the keeper", "Current hands-on guides"],
          ["Boss lure", "Empty Beer Can", "Current hands-on guides"],
          ["Required hand-in", "The exact Spider Crab drop", "Current hands-on guides"],
          ["Reward", "Boat keys", "Current hands-on guides"]
        ]
      },
      {
        heading: "How to get the first boat keys",
        type: "steps",
        items: [
          "Finish the opening tasks, buy a melee weapon and keep enough money for the Beer sold by the lighthouse keeper.",
          "Buy the Beer, give the full can to the keeper, then take back the Empty Beer Can he returns.",
          "Equip the Empty Beer Can as your rod lure and cast to summon the Spider Crab.",
          "Fish up the Spider Crab and keep moving when it charges.",
          "Dodge to the side, get behind it during the stun window and deal damage before it recovers.",
          "After the kill, pick up the boss's exact drop and carry it to the lighthouse keeper to receive the keys."
        ]
      },
      {
        heading: "Spider Crab fight pattern",
        type: "cards",
        items: [
          {
            title: "Bait the charge",
            text: "Give the crab room to commit, then move sideways rather than backing straight away from it."
          },
          {
            title: "Use the stun",
            text: "Current hands-on guides document a short dazed window after a missed charge. That is the safe time to attack."
          },
          {
            title: "Repeat the safe pattern",
            text: "Bait another charge, dodge and use the next stun window instead of trading damage face to face."
          },
          {
            title: "Protect the quest drop",
            text: "Pick up the exact item the boss drops. Current sources use different labels for it, so do not substitute an ordinary catch from your inventory."
          }
        ]
      },
      {
        heading: "If the boat is still locked",
        type: "checklist",
        items: [
          "Confirm that the Spider Crab is defeated and the trophy has dropped.",
          "Look for and pick up the boss's quest drop after the fight.",
          "Carry that exact drop to the lighthouse keeper; do not substitute another catch.",
          "Finish the dialogue and check that the keys were awarded.",
          "Open the boat only after the key reward appears; defeating the boss alone is not the final quest step.",
          "Ignore old island-skip advice: Patch 1.0.5 fixed traveling to islands before they were unlocked.",
          "If the fight is blocking progress, Patch 1.0.9 lets you switch to Easy; it lowers creature health by 25% and damage by 50%."
        ]
      }
    ],
    faqs: [
      {
        q: "Where do I get boat keys in How to Fish?",
        a: "The lighthouse keeper awards them after you defeat the Spider Crab and return the exact item the boss drops."
      },
      {
        q: "What bait catches the Spider Crab?",
        a: "Use the Empty Beer Can. Buy the full Beer, give it to the lighthouse keeper, and equip the empty can he returns as your lure."
      },
      {
        q: "Why did killing the Spider Crab not unlock the boat?",
        a: "Pick up the exact boss drop and give it to the lighthouse keeper. Killing the crab alone is not the final hand-in step."
      },
      {
        q: "What do the first boat keys unlock?",
        a: "They unlock the boat used to leave the starting area and continue island progression."
      },
      {
        q: "Can I lower the Spider Crab difficulty?",
        a: "Yes. Patch 1.0.9 added an Easy setting that lowers every creature's health by 25% and damage by 50%."
      }
    ],
    relatedSlugs: ["how-to-beat-pufferfish", "multiplayer-player-count", "console-crossplay"],
    sources: [longtailSources.officialAchievements, longtailSources.pcGamerSpiderCrab, longtailSources.allThingsSpiderCrab, longtailSources.patch105, longtailSources.patch109, longtailSources.officialStore]
  },
  {
    slug: "how-to-get-leeches",
    title: "Where to Find Leeches and Beat the Giant Piranha",
    seoTitle: "Where to Find All 3 Leeches in How to Fish",
    description:
      "Find all three Island 2 leeches hidden on the forest floor, finish the forest lady's bait step and return the Giant Piranha tail.",
    intro:
      "The current version 1.0.4 community route says the Island 2 forest task requires three leeches. They are ground pickups hidden by tall grass, not fish caught from the water. That route is player-authored, so use the live objective counter as the final authority after a patch.",
    quickAnswer:
      "Search the Island 2 forest floor for three leeches and watch for the pickup prompt because grass hides the models. Give all three to the forest lady for the boss bait, catch and kill the Giant Piranha, then take its tail back to her. Returning the tail completes the documented route for Dinnertime.",
    updatedAtIso: UPDATED_AT,
    eyebrow: "Island 2 blocker",
    status: "3 leeches in current community route",
    statusTone: "green",
    sections: [
      {
        heading: "Leech quest facts",
        type: "table",
        columns: ["Question", "Current answer", "Source level"],
        rows: [
          ["How many?", "Three", "Version 1.0.4 player guide"],
          ["Where?", "On the forest floor on Island 2", "Player guide"],
          ["Caught with a rod?", "No; collected from the ground", "Player guide"],
          ["Who receives them?", "The lady in the forest", "Player guide"],
          ["What comes next?", "Giant Piranha bait and boss fight", "Player guide"]
        ]
      },
      {
        heading: "How to find all three leeches",
        type: "steps",
        items: [
          "Activate the forest lady's request and read the live counter before searching.",
          "Lower the camera toward the Island 2 forest floor instead of checking the water.",
          "Walk a slow perimeter through the grass and look for the pickup prompt.",
          "Check the counter after every pickup so you do not search an already-cleared patch.",
          "Keep the three leeches and return directly to the forest lady."
        ]
      },
      {
        heading: "If you cannot find the last leech",
        type: "checklist",
        items: [
          "Confirm the quest is active and use its displayed total rather than an older guide's number.",
          "Search by prompt, not by model; the dark pickup can disappear visually in tall grass.",
          "Sweep the whole forest floor once in a fixed direction instead of running random loops.",
          "Check that a collected leech is still in your inventory before repeating the route.",
          "If the active counter cannot be completed after a restart, report the version and save state in the Steam discussion hub rather than editing the save."
        ]
      },
      {
        heading: "Finish Dinnertime after the leeches",
        type: "steps",
        items: [
          "Give the leeches to the forest lady and take the boss bait she provides.",
          "Use that quest bait to fish up the Giant Piranha.",
          "Keep moving while attacking; the player guide reports that it produces smaller piranhas and does not use the Spider Crab's stun pattern.",
          "Kill the boss and pick up its tail.",
          "Return the tail to the forest lady; the official Dinnertime condition is to catch dinner for her."
        ]
      }
    ],
    faqs: [
      {
        q: "How many leeches are in How to Fish?",
        a: "The current version 1.0.4 player route says the Island 2 quest uses three. Check the live objective counter after any patch."
      },
      {
        q: "Are the leeches in the water?",
        a: "No. The community route places them on the forest floor, where tall grass can hide them."
      },
      {
        q: "What do I get for giving the leeches to the lady?",
        a: "The documented route says she provides the bait used to summon the Giant Piranha."
      },
      {
        q: "What finishes the Dinnertime achievement?",
        a: "The player route says to return the Giant Piranha tail to the forest lady; the official achievement condition is Catch dinner for the lady in the forest."
      },
      {
        q: "Why can I not see the last leech?",
        a: "Search for the pickup prompt while sweeping the grass slowly. The model is easy to lose against the forest floor."
      }
    ],
    relatedSlugs: ["complete-walkthrough", "how-to-get-boat-keys", "how-to-beat-pufferfish", "how-to-drop-items"],
    sources: [longtailSources.achievementRoute, longtailSources.officialAchievements, longtailSources.discussions]
  },
  {
    slug: "how-to-beat-pufferfish",
    title: "How to Beat the Pufferfish in How to Fish: Carrot Bait and Swimmer Quest",
    seoTitle: "How to Beat the Pufferfish in How to Fish",
    description:
      "Complete the Island 3 swimmer quest to obtain Carrot Bait, then beat the Pufferfish with current route and Easy-mode guidance.",
    intro:
      "Carrot Bait is not a normal shop lure. A current hands-on guide connects it to the swimmer in yellow floaties on Island 3 and an endangered-creature hand-in. Official Patch 1.0.4 nerfed the Pufferfish, and Patch 1.0.9 added Easy and Hard modes, so this guide avoids fixed health values that can age badly.",
    quickAnswer:
      "On Island 3, speak to the swimmer in yellow floaties, buy the Fishing Rod and Standard Lure, then examine each catch with F before selling it. Give the swimmer any catch the game labels endangered creature to receive Carrot Bait. Use the carrot to summon the Pufferfish, keep moving while firing, and use trees or the merchant's shop to break up its path.",
    updatedAtIso: "2026-08-28",
    eyebrow: "Island 3 boss route",
    status: "Route documented; boss nerfed in 1.0.4",
    statusTone: "green",
    sections: [
      {
        heading: "What you need before the fight",
        type: "table",
        columns: ["Requirement", "Current hands-on answer", "Why it matters"],
        rows: [
          ["Island", "Island 3", "Tourist and boss route"],
          ["Quest giver", "Swimmer in yellow floaties", "Starts the bait exchange"],
          ["Quest catch", "Any catch labeled endangered creature", "Completes the swimmer's request"],
          ["Fishing lure", "Standard Lure", "Used while searching for the quest catch"],
          ["Boss bait", "Carrot Bait", "Swimmer reward used for Pufferfish"]
        ]
      },
      {
        heading: "How to get the carrot bait",
        type: "steps",
        items: [
          "Reach Island 3 and speak with the swimmer in yellow floaties so the request is active.",
          "Buy the Fishing Rod and Standard Lure, then fish for the requested creature.",
          "Examine every catch with F before selling it and keep one the game labels endangered creature.",
          "Bring that labeled catch to the swimmer.",
          "Take the carrot reward and reserve it for the Pufferfish boss."
        ]
      },
      {
        heading: "How to beat the Pufferfish",
        type: "cards",
        items: [
          {
            title: "Keep moving and firing",
            text: "The current hands-on route recommends the SMG with upgrades and warns against stopping to shoot while the boss is chasing you."
          },
          {
            title: "Watch the purple poison",
            text: "The hands-on guide reports that the boss leaves purple poison while pursuing you; its damage becomes lethal quickly."
          },
          {
            title: "Do not cross the trail",
            text: "Keep trees between you and the boss, and route around the merchant's shop instead of crossing the purple path."
          },
          {
            title: "Start fed and healthy",
            text: "Top off health and hunger with seafood before summoning the boss so one early mistake does not end the attempt."
          },
          {
            title: "Use the official Easy mode",
            text: "Patch 1.0.9 says Easy gives every creature 25% less health and 50% less damage. You can change difficulty in the main menu or in-game."
          }
        ]
      },
      {
        heading: "Common route mistakes",
        type: "checklist",
        items: [
          "Do not rely on a fish name alone; examine the catch and look for the endangered creature label.",
          "Use the Standard Lure for this quest, not a differently named boss lure.",
          "Do not sell or cook the labeled quest catch before the swimmer accepts it.",
          "Do not stop to fire while the boss has a clear path to you, and do not cross its purple poison.",
          "If the boss still stops your run, use the official Easy setting instead of relying on outdated balance or skip advice.",
          "Use the live patch balance as the authority; official Patch 1.0.4 says the Pufferfish was nerfed."
        ]
      }
    ],
    faqs: [
      {
        q: "How do I get carrot bait in How to Fish?",
        a: "Give the swimmer in yellow floaties a catch that the game labels endangered creature; the swimmer rewards you with Carrot Bait."
      },
      {
        q: "Which fish works for the swimmer quest?",
        a: "Use the on-screen label, not a memorized species list. Examine catches with F and keep one marked endangered creature."
      },
      {
        q: "What lure should I use for the tourist quest?",
        a: "The current hands-on route uses the Standard Lure while searching for an endangered creature."
      },
      {
        q: "How do I survive the Pufferfish's purple poison?",
        a: "Keep running and firing, place trees between you and the boss, and route around the merchant's shop instead of crossing the purple poison."
      },
      {
        q: "Was the Pufferfish nerfed?",
        a: "Yes. The official Patch 1.0.4 notes say the Pufferfish was nerfed, without publishing exact values."
      },
      {
        q: "Can I make the Pufferfish fight easier?",
        a: "Yes. Official Patch 1.0.9 added an Easy setting that gives all creatures 25% less health and 50% less damage."
      }
    ],
    relatedSlugs: ["how-to-get-boat-keys", "multiplayer-player-count", "console-crossplay"],
    sources: [longtailSources.pcGamerPufferfish, longtailSources.patch109, longtailSources.patch104, longtailSources.officialAchievements]
  },
  {
    slug: "how-to-finish-game",
    title: "How to Get the RHIB Keys and Finish How to Fish",
    seoTitle: "How to Get RHIB Keys and Trigger the How to Fish Ending",
    description:
      "What to do after the final boss: return the Lava Whale tail, collect the RHIB keys, start the RHIB and understand the post-game state.",
    intro:
      "This page starts after the Lava Whale is dead. The separate Volcano boss guide owns the summon and combat route. Here, the remaining job is to protect the tail, hand it to the scientist, collect the RHIB keys and start the correct boat so the ending actually fires.",
    quickAnswer:
      "Pick up the Lava Whale tail after the final fight and take it to the scientist in the hazmat suit. Finish his dialogue, collect the RHIB keys, enter the RHIB and start it. The boss kill alone does not trigger the ending or We are so back.",
    updatedAtIso: UPDATED_AT,
    eyebrow: "Final quest and ending trigger",
    status: "Player-authored ending route",
    statusTone: "green",
    sections: [
      {
        heading: "Ending trigger at a glance",
        type: "table",
        columns: ["Checkpoint", "Required action", "Result"],
        rows: [
          ["Final boss defeated", "Pick up the Lava Whale tail", "Keep the required trophy"],
          ["Scientist hand-in", "Give the tail to the scientist", "Receive the RHIB keys"],
          ["RHIB ready", "Enter and start the RHIB", "Trigger the ending"],
          ["Credits complete", "Return to the game", "Resume on Island 1 with gear retained"]
        ],
        note: "The official achievement says only to finish the game. These final trigger steps come from a player-authored version 1.0.4 route."
      },
      {
        heading: "Do these steps after the boss",
        type: "checklist",
        items: [
          "Pick up the Lava Whale tail before leaving the final arena.",
          "Keep the tail intact; do not sell, cook or discard the quest trophy.",
          "Return to the scientist in the hazmat suit and finish the tail hand-in dialogue.",
          "Confirm the RHIB keys were awarded before walking away.",
          "Enter the RHIB and start it; simply standing near the boat is not the ending trigger."
        ]
      },
      {
        heading: "If the ending does not start",
        type: "cards",
        items: [
          {
            title: "Tail still in the arena",
            text: "Go back and look for the Lava Whale tail. The player route requires the trophy hand-in after the kill."
          },
          {
            title: "Scientist dialogue unfinished",
            text: "Continue the dialogue until the tail is accepted and the RHIB keys are actually awarded."
          },
          {
            title: "Wrong boat",
            text: "The ending uses the RHIB unlocked by the scientist, not the earlier progression boat."
          },
          {
            title: "Achievement still locked",
            text: "Start the RHIB and allow the ending sequence to complete before checking We are so back."
          }
        ]
      },
      {
        heading: "What happens after the credits",
        type: "steps",
        items: [
          "The community guide reports that the game returns you to Island 1.",
          "Your equipment remains available for cleanup tasks.",
          "All five story islands remain open in that route.",
          "Use post-game access for Collector, Fishipedia and optional achievement cleanup.",
          "Treat the retained-gear and island-access details as version-sensitive community behavior."
        ]
      }
    ],
    faqs: [
      {
        q: "How do I trigger the ending in How to Fish?",
        a: "Return the Lava Whale tail to the scientist, collect the RHIB keys and start the RHIB."
      },
      {
        q: "What should I do with the Lava Whale tail?",
        a: "Take it directly to the scientist in the hazmat suit. Do not sell, cook or discard it."
      },
      {
        q: "Where do the RHIB keys come from?",
        a: "The scientist gives them to you after you return the Lava Whale tail, according to the version 1.0.4 community guide."
      },
      {
        q: "Does killing the Lava Whale finish the game immediately?",
        a: "No. You still need the tail hand-in and RHIB start."
      },
      {
        q: "Can I revisit islands after the ending?",
        a: "The player guide reports that all five islands remain open after the credits."
      }
    ],
    relatedSlugs: ["how-to-beat-volcano-boss", "complete-walkthrough", "achievements-guide", "how-many-islands"],
    sources: [longtailSources.achievementRoute, longtailSources.officialAchievements, longtailSources.officialStore]
  },
  {
    slug: "achievements-guide",
    title: "All 28 How to Fish Achievements",
    seoTitle: "How to Fish Achievements Guide: All 28 Unlocks",
    description:
      "Every official How to Fish achievement name and condition, plus a source-labeled route for story, combat and cleanup goals.",
    intro:
      "Steam lists 28 achievements. The names and conditions below are official; the suggested order comes from a player-authored route completed on version 1.0.4. Its updated Bean section does not provide a current version 1.0.5 route, so this page does not invent one.",
    quickAnswer:
      "Finish the story first, then use your endgame gear for collection, trick-shot and fast-kill cleanup. Story achievements run from Who stole my beer through We are so back. Collector and Fishipedia are separate. Bean still requires a sub-one-hour finish, but this page does not claim a working post-1.0.5 route.",
    updatedAtIso: UPDATED_AT,
    eyebrow: "Official list plus sourced cleanup plan",
    status: "28 official achievements",
    statusTone: "green",
    sections: [
      {
        heading: "All official achievements and conditions",
        type: "table",
        columns: ["Achievement", "Official condition", "Best route bucket"],
        rows: [
          ["Getting started", "Kill your first creature", "Opening island"],
          ["Drip", "Kill a drip creature", "Natural play"],
          ["Who stole my beer", "Find and kill the culprit, and bring it to the lighthouse keeper", "Island 1 story"],
          ["Noob", "Get a kill with no kill score multiplier", "Post-game combat"],
          ["Getting an upgrade", "Upgrade the engine on the boat", "Island 2 equipment"],
          ["Let me go", "Get picked up by a seagull", "Post-game cleanup"],
          ["Dinnertime", "Catch dinner for the lady in the forest", "Island 2 story"],
          ["Impressive", "Get a 5x killscore multiplier", "Post-game combat"],
          ["Grillmaster", "Start the grill", "Island 3 story"],
          ["GOLD GOLD GOLD", "Unlock a legendary skin from the slot machine", "Post-game RNG"],
          ["360 no scope", "Kill a creature with a 360 no scope", "Post-game combat"],
          ["Vacation", "Help the tourist swim on his vacation", "Island 3 story"],
          ["I am speed", "Buy the best engine for the boat", "Island 4 equipment"],
          ["Fully equipped", "Apply all attachments to a single weapon", "Late-game equipment"],
          ["Yummy in my tummy", "Eat a burnt creature", "Cooking cleanup"],
          ["Terrorizing bird", "Defend the scared islanders from the terrorizing bird", "Island 4 story"],
          ["Deadliest catch", "Help the military defeat the big creature they located", "Final boss"],
          ["We are so back", "Finish the game", "Ending"],
          ["All in", "Bet on green and win at roulette", "Post-game RNG"],
          ["Competitive eating", "Eat a mini-boss", "Cooking cleanup"],
          ["I'm the bird now", "Make the boat fly", "Post-game cleanup"],
          ["Easy", "Kill a boss within 10 seconds", "Post-game combat"],
          ["Collector", "Find and kill all the creatures", "Collection"],
          ["Rich! Millionaire", "Sell something worth 100,000 or more", "Economy cleanup"],
          ["Everyone's dream", "Kill a seagull with dynamite", "Post-game cleanup"],
          ["Handyman", "Defeat the final boss with your bare hands", "Final boss replay"],
          ["Fishipedia", "Find and kill all drip creatures", "Collection"],
          ["Bean", "Finish the game within 1 hour", "Separate speedrun"]
        ],
        note: "Names and conditions are transcribed from the official Steam achievements page."
      },
      {
        heading: "Do these during the story",
        type: "checklist",
        items: [
          "Return the Spider Crab shell for Who stole my beer.",
          "Buy an engine upgrade for Getting an upgrade and keep the best-engine purchase for I am speed.",
          "Finish the forest lady's tail hand-in for Dinnertime.",
          "Complete the shark and tourist routes for Grillmaster and Vacation.",
          "Finish the bird, final-boss and RHIB sequences for Terrorizing bird, Deadliest catch and We are so back."
        ]
      },
      {
        heading: "Leave these for post-game cleanup",
        type: "cards",
        items: [
          {
            title: "Combat challenges",
            text: "Noob, Impressive, 360 no scope and Easy are simpler with late-game weapons and open island access."
          },
          {
            title: "Collections",
            text: "Collector tracks all creatures; Fishipedia separately tracks every drip creature."
          },
          {
            title: "Cooking and gambling",
            text: "Yummy in my tummy, Competitive eating, GOLD GOLD GOLD, All in and Rich! Millionaire can be grouped around late-game resources."
          },
          {
            title: "Special actions",
            text: "Let me go, I'm the bird now, Everyone's dream and Handyman require deliberate setups rather than normal progression."
          }
        ]
      },
      {
        heading: "Bean warning for version 1.0.5",
        type: "table",
        columns: ["Fact", "Current answer", "Source"],
        rows: [
          ["Official condition", "Finish the game within 1 hour", "Official achievements"],
          ["Current 1.0.5 community route", "Not provided by the cited guide", "Player-authored guide update"],
          ["Working route", "Not claimed on this page", "Evidence boundary"],
          ["Recommended save", "Use a separate run only after a current route is verified", "Practical caution"]
        ],
        note: "Only the official one-hour condition is presented as confirmed."
      }
    ],
    faqs: [
      {
        q: "How many achievements are in How to Fish?",
        a: "Steam lists 28 official achievements."
      },
      {
        q: "Are Collector and Fishipedia the same achievement?",
        a: "No. Collector requires all creatures; Fishipedia requires all drip creatures."
      },
      {
        q: "Should I finish the story before achievement cleanup?",
        a: "The player route recommends it because post-game access and late weapons make most optional tasks easier."
      },
      {
        q: "Is there a verified Bean route for version 1.0.5?",
        a: "Not in the cited community guide. This page confirms the official one-hour condition but does not claim a current route."
      },
      {
        q: "Does Handyman require fighting the whole boss bare-handed?",
        a: "The official condition says defeat the final boss with your bare hands. A player guide reports that a bare-handed killing blow is enough, but that is community behavior and can change."
      }
    ],
    relatedSlugs: ["complete-walkthrough", "all-fish-locations", "all-guns-weapons", "how-to-cook-fish"],
    sources: [longtailSources.officialAchievements, longtailSources.achievementRoute, longtailSources.patch104]
  },
  {
    slug: "multiplayer-player-count",
    title: "How to Fish Multiplayer and Player Count",
    seoTitle: "How Many Players Can Play How to Fish? 8-Player Lobbies",
    description:
      "How to Fish now supports lobbies of up to eight players after Patch 1.0.4, despite the launch store description still saying 1-4.",
    intro:
      "The store's launch description calls How to Fish a 1-4 player game, but official Patch 1.0.4 later added support for lobbies of up to eight. Patch 1.0.5 then added invite-only private lobbies. Those patch notes are newer and more specific than the store paragraph as of August 28, 2026.",
    quickAnswer:
      "How to Fish supports up to eight players in an online lobby. You can host a public session or use the private-lobby option added in Patch 1.0.5 for invite-only play. Steam lists Single-player and Online Co-op, but not shared-screen or split-screen co-op.",
    updatedAtIso: "2026-08-28",
    eyebrow: "Current post-launch lobby limit",
    status: "Up to 8 players in Patch 1.0.4",
    statusTone: "green",
    sections: [
      {
        heading: "Current multiplayer facts",
        type: "table",
        columns: ["Question", "Current answer", "Official evidence"],
        rows: [
          ["Maximum lobby size", "Up to 8 players", "Patch 1.0.4"],
          ["Can I play alone?", "Yes", "Single-player Steam feature"],
          ["Online co-op?", "Yes", "Steam feature list"],
          ["Private lobby?", "Yes, invite-only", "Patch 1.0.5"],
          ["Why does the description say 1-4?", "It predates the 1.0.4 lobby increase", "Store description versus newer patch"],
          ["Local split-screen?", "Not listed", "No official claim on the store page"]
        ]
      },
      {
        heading: "Why some pages still say four players",
        type: "cards",
        items: [
          {
            title: "Launch copy",
            text: "The official store description still says 1-4 players. That was accurate before the later patch."
          },
          {
            title: "Newer patch note",
            text: "Patch 1.0.4 explicitly says support was added for up to eight-player lobbies."
          },
          {
            title: "Current answer",
            text: "Use eight as the present lobby ceiling, while recognizing that a future patch can change it again."
          },
          {
            title: "No couch claim",
            text: "Online Co-op does not prove split-screen. Steam does not currently list a local co-op feature."
          }
        ]
      },
      {
        heading: "Before building a larger lobby",
        type: "checklist",
        items: [
          "Make sure every player has the same current game version before joining.",
          "Use the private-lobby option when you want an invite-only session; changing session type in-game requires a restart.",
          "Remember that the official minimum requirements include a broadband internet connection.",
          "If the Steam relay text turns red in the main menu, use the Patch 1.0.9 diagnostic guidance before changing save data.",
          "Do not treat the eight-player cap as evidence of console crossplay; future console versions are planned, but crossplay is not confirmed."
        ]
      },
      {
        heading: "What the multiplayer patches changed",
        type: "table",
        columns: ["Patch item", "Official wording summarized", "Practical meaning"],
        rows: [
          ["Lobby size", "Support for up to 8 players", "More than the launch description's four"],
          ["Private sessions", "Invite-only lobby option", "Added in Patch 1.0.5"],
          ["Session type", "Can be changed in server settings", "Restart required after changing"],
          ["Connection check", "Steam relay diagnostic in the main menu", "Added in Patch 1.0.9"],
          ["Connection window", "More time allowed to connect", "Patch 1.0.10 says this should reduce instant disconnects"],
          ["Join black screen", "Hopefully fixed", "Update first, but do not assume every case is solved"],
          ["Revive text", "Permanent revive text fixed", "Addresses a multiplayer UI state"],
          ["Server names", "Special characters blocked because they broke save files", "Use ordinary server names"]
        ]
      }
    ],
    faqs: [
      {
        q: "How many people can play How to Fish?",
        a: "Official Patch 1.0.4 supports lobbies of up to eight players."
      },
      {
        q: "Why does Steam say How to Fish is 1-4 players?",
        a: "That text is the launch description. The newer official patch raised lobby support to eight."
      },
      {
        q: "Can I play How to Fish solo?",
        a: "Yes. Steam lists Single-player as well as Online Co-op."
      },
      {
        q: "Does How to Fish have split-screen?",
        a: "Steam does not currently list shared-screen or local co-op, so there is no official basis to claim split-screen support."
      },
      {
        q: "Can I make a private How to Fish lobby?",
        a: "Yes. Patch 1.0.5 added a private lobby that is joinable only through an invite."
      },
      {
        q: "Does eight-player support mean crossplay?",
        a: "No. The patch changes Steam lobby size. The developer plans future console versions, but has not announced cross-platform play."
      }
    ],
    relatedSlugs: ["console-crossplay", "how-to-get-boat-keys", "how-to-beat-pufferfish"],
    sources: [longtailSources.patch104, longtailSources.patch105, longtailSources.patch109, longtailSources.patch110, longtailSources.officialStore, longtailSources.steamLaunchSupport]
  },
  {
    slug: "black-screen-fix",
    title: "How to Fix the How to Fish Co-op Black Screen",
    seoTitle: "How to Fish Black Screen When Joining Friends: Fixes",
    description:
      "Safe Steam troubleshooting for a black screen when joining a How to Fish lobby, including the official 1.0.4 fix and file verification.",
    intro:
      "Official Patch 1.0.4 says it hopefully fixed the black screen when joining a lobby, but current player discussions still include black-screen reports. There is no single confirmed fix for every machine, so use the reversible checks below and do not delete saves.",
    quickAnswer:
      "Update How to Fish to version 1.0.4 or newer, restart Steam and verify the game files. Update Windows and graphics drivers, then test whether you can host a fresh lobby even if joining a friend still fails. Back up your Saves folder before deeper troubleshooting, and never delete it as a first step.",
    updatedAtIso: UPDATED_AT,
    eyebrow: "Safe Windows and Steam checks",
    status: "Official fix attempted; reports still possible",
    statusTone: "amber",
    sections: [
      {
        heading: "What is confirmed",
        type: "table",
        columns: ["Fact", "Current answer", "Source"],
        rows: [
          ["Known join-lobby black screen", "Addressed in Patch 1.0.4", "Official patch notes"],
          ["Was the fix guaranteed?", "No; the developer wrote Hopefully fixed", "Official patch wording"],
          ["Current platform", "Windows 10 or newer", "Official store requirements"],
          ["Safe first repair", "Verify installed files", "Official Steam Support"],
          ["Delete saves?", "No", "Not part of official basic troubleshooting"]
        ]
      },
      {
        heading: "Try these checks in order",
        type: "steps",
        items: [
          "Close the game, let Steam install every How to Fish update and confirm you are on 1.0.4 or later.",
          "Restart the PC and Steam before testing the same lobby again.",
          "In Steam, open How to Fish Properties, choose Installed Files and run Verify integrity of game files.",
          "Install pending Windows updates and the current graphics driver for your hardware, following Steam's general launch guidance.",
          "Create a fresh lobby yourself. If hosting works but joining does not, record that distinction for the bug report."
        ]
      },
      {
        heading: "Do not destroy useful evidence",
        type: "checklist",
        items: [
          "Do not delete the Saves folder or individual slot files.",
          "Do not download a stranger's replacement save or executable.",
          "Do not edit slot text to test a connection problem.",
          "Do not assume reinstalling the game will repair an account, lobby or remote host issue.",
          "Before any advanced change, copy the entire Saves folder to a separate backup location."
        ]
      },
      {
        heading: "What to include in a useful bug report",
        type: "table",
        columns: ["Detail", "Example", "Why it helps"],
        rows: [
          ["Game version", "1.0.4 or later", "Separates pre-patch cases"],
          ["Failure point", "Joining lobby versus starting game", "Identifies different black screens"],
          ["Host test", "Hosting works / also fails", "Narrows the network path"],
          ["PC details", "Windows version, GPU and driver", "Checks system-specific patterns"],
          ["Repair result", "File verification found or did not find an issue", "Avoids repeated advice"]
        ]
      }
    ],
    faqs: [
      {
        q: "Did Patch 1.0.4 fix the black screen?",
        a: "The developer said it hopefully fixed the join-lobby black screen. That wording is not a guarantee for every setup."
      },
      {
        q: "How do I verify How to Fish files?",
        a: "Open the game in your Steam Library, choose Properties, open Installed Files and select Verify integrity of game files."
      },
      {
        q: "Should I delete my save to fix a black screen?",
        a: "No. Save deletion is not part of Steam's basic repair checklist and can destroy progress."
      },
      {
        q: "Why should I try hosting?",
        a: "It is a reversible diagnostic. If hosting works while joining fails, you have a clearer lobby-specific report."
      },
      {
        q: "What if verification and updates do not help?",
        a: "Record the version, exact failure point, system details and host test, then report it through the game's Steam discussion or developer support channel."
      }
    ],
    relatedSlugs: ["multiplayer-player-count", "save-file-location", "console-crossplay", "complete-walkthrough"],
    sources: [longtailSources.patch104, longtailSources.blackScreenDiscussion, longtailSources.steamVerifyFiles, longtailSources.steamLaunchSupport]
  },
  {
    slug: "how-to-beat-terrorizing-bird",
    title: "How to Beat the Terrorizing Bird on Island 4",
    seoTitle: "How to Fish Island 4 Boss: Terrorizing Bird Guide",
    description:
      "Fish the tuna bait, summon the terrorizing bird and use Island 4 building cover against the boss's dive and ranged attacks.",
    intro:
      "The official achievement says to defend the scared islanders from the terrorizing bird. The Professional Boss Lure, tuna bait and fight tactics below come from a player-authored version 1.0.4 route and can change with balance patches.",
    quickAnswer:
      "On Island 4, buy the Professional Boss Lure for the community-reported $1,200 and use it to catch the tuna mini-boss. Kill the tuna and place it on the ground as bait. When the bird arrives, shelter inside a building during its dive and ranged windup, then step out to shoot when the attack has passed.",
    updatedAtIso: UPDATED_AT,
    eyebrow: "Island 4 boss route",
    status: "Player-authored tactic",
    statusTone: "green",
    sections: [
      {
        heading: "Bird-fight requirements",
        type: "table",
        columns: ["Requirement", "Community route", "Note"],
        rows: [
          ["Island", "Island 4", "Story stage"],
          ["Lure", "Professional Boss Lure", "Reported at $1,200"],
          ["First target", "Tuna mini-boss", "Kill it before using it as bait"],
          ["Bird bait", "Tuna placed on the ground", "Tuna is consumed"],
          ["Safe cover", "A building", "Casino suggested by the player guide"]
        ]
      },
      {
        heading: "How to start the encounter",
        type: "steps",
        items: [
          "Buy the Professional Boss Lure listed in the current community route.",
          "Use it to fish up the tuna mini-boss and finish that fight.",
          "Keep the tuna instead of selling or cooking it.",
          "Drop the tuna on clear ground where you can reach nearby cover.",
          "Move into a building when the terrorizing bird arrives."
        ]
      },
      {
        heading: "Read the bird's two attacks",
        type: "cards",
        items: [
          {
            title: "Dive",
            text: "The bird attacks your position directly. Stay inside cover until the pass is complete."
          },
          {
            title: "Ranged shot",
            text: "The guide reports an audible windup. Treat the sound as the cue to get behind a wall."
          },
          {
            title: "Track from safety",
            text: "The enemy marker remains visible through terrain in the community route, letting you time the next opening."
          },
          {
            title: "Short damage windows",
            text: "Step outside after an attack, fire a controlled burst and return before the next windup."
          }
        ]
      },
      {
        heading: "Common reasons the fight fails",
        type: "checklist",
        items: [
          "The tuna was sold, cooked or lost before being placed as bait.",
          "The encounter was started too far from a usable building.",
          "The player remained outside during the ranged windup.",
          "Long automatic bursts wasted the opening or became difficult to control.",
          "A guide price or weapon suggestion was treated as permanent instead of checking the current patch."
        ]
      }
    ],
    faqs: [
      {
        q: "How do I summon the terrorizing bird?",
        a: "The player route says to catch and kill a tuna with the Professional Boss Lure, then place the tuna on the ground as bait."
      },
      {
        q: "How much is the Professional Boss Lure?",
        a: "The version 1.0.4 community route reports $1,200. Verify the live price after patches."
      },
      {
        q: "Where should I fight the bird?",
        a: "Near a building. The player guide recommends the casino because it provides cover and visibility."
      },
      {
        q: "What attacks does the bird use?",
        a: "The community route describes a direct dive and a ranged attack with an audible windup."
      }
    ],
    relatedSlugs: ["how-to-beat-pufferfish", "how-to-beat-volcano-boss", "complete-walkthrough", "all-guns-weapons"],
    sources: [longtailSources.achievementRoute, longtailSources.officialAchievements, longtailSources.officialStore]
  },
  {
    slug: "how-to-beat-volcano-boss",
    title: "How to Beat the Volcano Boss in How to Fish",
    seoTitle: "How to Fish Volcano Boss: Lava Whale & Deadliest Catch",
    description:
      "Complete the scientist's whale setup, summon the Lava Whale and survive the final Volcano boss fight for the Deadliest catch achievement.",
    intro:
      "The official Deadliest catch condition only says to help the military defeat the big creature they located. A player-authored route identifies that encounter as the Lava Whale and the hazmat scientist as the contact. Treat the exact setup and tactics as version-sensitive community evidence.",
    quickAnswer:
      "Give the Volcano scientist five fish, use his whale bait, kill the regular whale and throw it into the volcano. The Lava Whale then becomes the final boss. Avoid its rolls, stomps, meteorites and persistent lava pools; phase two becomes more aggressive and adds attacks from above. Bring an upgraded, fully attached weapon and plenty of lava-cooked food.",
    updatedAtIso: UPDATED_AT,
    eyebrow: "Island 5 final boss",
    status: "Community route + official achievement",
    statusTone: "green",
    sections: [
      {
        heading: "How to summon the Lava Whale",
        type: "steps",
        items: [
          "Reach Island 5 - Volcano and find the scientist in the hazmat suit.",
          "Give him five fish, following the player-authored route.",
          "Take the whale bait, fish up the regular whale and kill it.",
          "Carry the regular whale to the volcano and throw it in.",
          "Prepare immediately for the Lava Whale encounter that follows."
        ]
      },
      {
        heading: "Regular whale and final boss are different",
        type: "table",
        columns: ["Creature", "Role in the route", "Key point"],
        rows: [
          ["Regular whale", "Quest catch", "Throw it into the volcano"],
          ["Lava Whale", "Final boss", "Drops the tail used for the ending"],
          ["Deadliest catch target", "Lava Whale in the community guide", "Official wording does not name it"],
          ["Military contact", "Hazmat scientist in the community guide", "No separate fight is documented"]
        ]
      },
      {
        heading: "Lava Whale attack plan",
        type: "cards",
        items: [
          {
            title: "Roll and stomp",
            text: "Keep lateral room and do not let the arena edge trap you when the boss closes distance."
          },
          {
            title: "Lava meteorites",
            text: "Move away from impact zones and do not step back into the pools they leave behind."
          },
          {
            title: "Phase two",
            text: "The player guide reports more frequent stomps and attacks launched from above. Save healing for this phase."
          },
          {
            title: "Sustained damage",
            text: "A fully attached assault rifle is the community recommendation, not an official required weapon."
          }
        ]
      },
      {
        heading: "Before you trigger the fight",
        type: "checklist",
        items: [
          "Fill available slots with fish cooked in lava to the documented 1.5x multiplier.",
          "Upgrade and attach your chosen late-game weapon before summoning the boss.",
          "Leave room to move around existing lava pools.",
          "If attempting Handyman, remember the official condition and treat any killing-blow tactic as player-reported behavior.",
          "After the kill, protect the tail and continue to the scientist; the fight alone is not the ending."
        ]
      }
    ],
    faqs: [
      {
        q: "How do I spawn the Volcano boss?",
        a: "The community route says to give the scientist five fish, kill the whale summoned by his bait and throw that whale into the volcano."
      },
      {
        q: "Is the regular whale the final boss?",
        a: "No. It is used to summon the Lava Whale, which the player guide identifies as the final boss."
      },
      {
        q: "How do I get Deadliest catch?",
        a: "The official condition is to help the military defeat the big creature they located. The community route connects it to the Lava Whale fight."
      },
      {
        q: "What happens after the Lava Whale?",
        a: "Pick up its tail, return it to the scientist, collect the RHIB keys and start the RHIB."
      },
      {
        q: "What weapon is required?",
        a: "The official achievement names no weapon. A fully attached assault rifle is a community recommendation, not a requirement."
      }
    ],
    relatedSlugs: ["how-to-finish-game", "how-to-cook-fish", "all-guns-weapons", "achievements-guide"],
    sources: [longtailSources.achievementRoute, longtailSources.officialAchievements, longtailSources.patch104]
  },
  {
    slug: "boat-engine-upgrades",
    title: "Boat Engine Upgrades and I Am Speed",
    seoTitle: "How to Fish Boat Engine Upgrades: Best Engine Guide",
    description:
      "Get the $230 Island 2 boat engine upgrade, then buy the $860 Dual Motors on Island 4 for the I am speed achievement and fastest engine.",
    intro:
      "Steam confirms two engine achievements but does not publish a shop table. The $230 Island 2 upgrade and $860 Dual Motors route come from a version 1.0.4 player guide, where prices were recorded in multiplayer and may change.",
    quickAnswer:
      "For Getting an upgrade, the cheapest player-documented route is the $230 engine at the Island 2 shack beside the old man. For I am speed, buy Dual Motors for the guide-reported $860 at the Island 4 shack by the grill. A mid-tier Island 3 upgrade can satisfy the first achievement, but the route says Island 2 is cheaper.",
    updatedAtIso: UPDATED_AT,
    eyebrow: "Two official engine achievements",
    status: "$230 and $860 player-reported prices",
    statusTone: "green",
    sections: [
      {
        heading: "Current engine route",
        type: "table",
        columns: ["Upgrade", "Player-documented location", "Reported price", "Achievement"],
        rows: [
          ["First engine upgrade", "Island 2 shack beside the old man", "$230", "Getting an upgrade"],
          ["Mid-tier option", "Island 3", "Not claimed here", "Also reported to satisfy Getting an upgrade"],
          ["Dual Motors", "Island 4 shack by the grill", "$860", "I am speed"]
        ],
        note:
          "The official achievements confirm the goals; locations and prices are from a multiplayer community route."
      },
      {
        heading: "Cheapest progression plan",
        type: "steps",
        items: [
          "Reach Island 2 and check the shack beside the old man.",
          "Confirm the live price and buy the $230 upgrade if it still matches your build.",
          "Continue story progression rather than buying every intermediate engine solely for achievements.",
          "On Island 4, find the shack by the grill and verify Dual Motors is shown at $860.",
          "Buy Dual Motors to meet the official best-engine condition for I am speed."
        ]
      },
      {
        heading: "Which purchase unlocks which achievement?",
        type: "cards",
        items: [
          {
            title: "Getting an upgrade",
            text: "The official condition is simply to upgrade the boat engine. The Island 2 purchase is the cheapest documented route."
          },
          {
            title: "I am speed",
            text: "The official condition is to buy the best engine. The community guide identifies Dual Motors on Island 4."
          },
          {
            title: "Island 3 option",
            text: "The guide says a mid-tier Island 3 engine can unlock the first achievement if Island 2 was skipped."
          },
          {
            title: "Patch caution",
            text: "Recorded prices came from multiplayer version 1.0.4. Recheck the shop before budgeting exactly."
          }
        ]
      },
      {
        heading: "Avoid wasting progression money",
        type: "checklist",
        items: [
          "Do not buy a second early engine if Getting an upgrade has already unlocked.",
          "The recorded engine prices come from a multiplayer route; whether engine prices vary in solo play is not confirmed.",
          "Keep enough money for the weapons, lures and food needed to clear the next story gate.",
          "Check the exact shop label before buying the best engine.",
          "Treat every price on this page as checked on August 23, 2026, not permanent."
        ]
      }
    ],
    faqs: [
      {
        q: "Where is the first boat engine upgrade?",
        a: "The community route places a $230 upgrade at the Island 2 shack beside the old man."
      },
      {
        q: "What is the best engine in How to Fish?",
        a: "The version 1.0.4 player guide identifies Dual Motors on Island 4 as the best engine."
      },
      {
        q: "How much are Dual Motors?",
        a: "The community guide reports $860 in multiplayer. Verify the current shop price."
      },
      {
        q: "Can an Island 3 engine unlock Getting an upgrade?",
        a: "The player route says yes, but it recommends the cheaper Island 2 purchase."
      }
    ],
    relatedSlugs: ["how-to-use-boat-radar", "how-many-islands", "complete-walkthrough", "achievements-guide"],
    sources: [longtailSources.officialAchievements, longtailSources.achievementRoute, longtailSources.officialStore]
  },
  {
    slug: "how-to-cook-fish",
    title: "How to Cook and Burn a Creature in How to Fish",
    seoTitle: "How to Cook Fish in How to Fish: Burnt Creature Guide",
    description:
      "Unlock the grill, watch the cooking multiplier reach 1.5x, avoid burning valuable catches and prepare one burnt mini-boss for two achievements.",
    intro:
      "Cooking is documented by a version 1.0.4 player guide rather than the official store. That guide reports a 1.5x peak multiplier on the grill, a collapse to zero when food burns black, and an exact 1.5x result in Volcano lava.",
    quickAnswer:
      "Unlock the Island 3 grill through the shark hand-in. Hold a creature over the flame and press F to inspect it: the player guide says the cooking multiplier rises to 1.5x, then falls to zero when the creature turns solid black. Remove normal food at 1.5x. Burn only one mini-boss deliberately, then eat it to target Yummy in my tummy and Competitive eating together.",
    updatedAtIso: UPDATED_AT,
    eyebrow: "Cooking value and achievement timing",
    status: "1.5x community-tested multiplier",
    statusTone: "green",
    sections: [
      {
        heading: "Cooking states",
        type: "table",
        columns: ["State", "Player-reported multiplier", "What to do"],
        rows: [
          ["Raw", "1x", "Start cooking"],
          ["Cooked", "Up to 1.5x", "Remove it at the peak"],
          ["Burnt black", "0", "Use only for the burnt-creature achievement"],
          ["Volcano lava", "Exactly 1.5x", "Late-game cooking without grill timing"]
        ],
        note: "These values come from a player guide completed on version 1.0.4."
      },
      {
        heading: "How to cook on the grill",
        type: "steps",
        items: [
          "Complete the Island 3 shark hand-in so the Grill Master lets you use the grill.",
          "Hold the creature over the flame.",
          "Press F to inspect its live value and cooking multiplier, following the player guide's control report.",
          "Remove it when the multiplier reaches 1.5x if you want value and useful food.",
          "Do not leave ordinary stock over the flame until it turns solid black."
        ]
      },
      {
        heading: "Cooked versus burnt",
        type: "cards",
        items: [
          {
            title: "Cooked for sale",
            text: "The documented 1.5x peak raises value before selling. Check the live number rather than estimating by color."
          },
          {
            title: "Cooked for healing",
            text: "The community route recommends carrying cooked fish through later boss fights."
          },
          {
            title: "Burnt for one achievement",
            text: "Yummy in my tummy officially requires eating a burnt creature; the guide says solid black is the clear state."
          },
          {
            title: "Burnt mini-boss combo",
            text: "Eating one burnt mini-boss can satisfy the official burnt-creature and mini-boss-eating conditions together, according to the route."
          }
        ]
      },
      {
        heading: "Volcano lava cooking",
        type: "checklist",
        items: [
          "The player guide reports that lava applies exactly 1.5x without a timing window.",
          "Use it on Island 5 when preparing food and sale stock for the ending.",
          "Keep cooked healing items separate from the final boss trophy.",
          "Do not assume every future patch will preserve the same multiplier.",
          "Avoid dropping unrelated equipment into hazards solely because the guide reports that items can cook."
        ]
      }
    ],
    faqs: [
      {
        q: "What is the best cooking multiplier in How to Fish?",
        a: "The version 1.0.4 community guide reports a peak of 1.5x."
      },
      {
        q: "How do I know when fish is cooked?",
        a: "The player route says to press F and watch the live multiplier, removing the item at 1.5x."
      },
      {
        q: "What happens when fish burns?",
        a: "The guide reports that it turns solid black and its multiplier falls to zero."
      },
      {
        q: "How do I get Yummy in my tummy?",
        a: "The official condition is to eat a burnt creature. The community route says to cook it until solid black first."
      },
      {
        q: "Can one creature unlock Competitive eating too?",
        a: "Yes, if the burnt creature is a mini-boss: the two official conditions are eat a burnt creature and eat a mini-boss."
      }
    ],
    relatedSlugs: ["how-to-get-shark", "how-to-beat-volcano-boss", "achievements-guide", "how-to-drop-items"],
    sources: [longtailSources.achievementRoute, longtailSources.officialAchievements]
  },
  {
    slug: "save-file-location",
    title: "How to Find and Back Up Your How to Fish Save",
    seoTitle: "How to Fish Save File Location & Backup Guide",
    description:
      "Find the Windows LocalLow How to Fish Saves folder and copy the complete folder before troubleshooting, without editing slot data.",
    intro:
      "A Steam Community item and save guide reports that How to Fish stores Windows saves under the user's LocalLow folder as named slot text files. The Steam store currently does not display a Steam Cloud feature, so a separate manual copy is prudent before troubleshooting.",
    quickAnswer:
      "Close the game, open C:\\Users\\%USERNAME%\\AppData\\LocalLow\\Dazed Games\\How to Fish\\Saves, and copy the entire Saves folder to a different, clearly dated backup folder. Slot files use the .txt extension. Do not edit their contents, and do not assume there is a manual in-game save key that no official source confirms.",
    updatedAtIso: UPDATED_AT,
    eyebrow: "Windows save backup",
    status: "Community-documented LocalLow path",
    statusTone: "amber",
    sections: [
      {
        heading: "Reported Windows save location",
        type: "table",
        columns: ["Item", "Current community-documented value", "Caution"],
        rows: [
          ["Folder", "C:\\Users\\%USERNAME%\\AppData\\LocalLow\\Dazed Games\\How to Fish\\Saves", "Windows path"],
          ["Slot format", "Same-name slot files with .txt extension", "Do not edit"],
          ["Steam Cloud feature", "Not currently shown on the store page", "Absence is not a permanent promise"],
          ["Manual save key", "Not confirmed", "Do not invent a binding"]
        ]
      },
      {
        heading: "How to make a safe backup",
        type: "steps",
        items: [
          "Exit How to Fish completely so no slot is being written.",
          "Open File Explorer and paste the reported LocalLow path into the address bar, replacing %USERNAME% automatically through Windows expansion.",
          "Select the complete Saves folder rather than one file whose role may be unclear.",
          "Copy it to a different folder or drive and add the date to the backup folder name.",
          "Open the backup location and confirm the copied .txt slot files are present before troubleshooting."
        ]
      },
      {
        heading: "What this backup does and does not do",
        type: "cards",
        items: [
          {
            title: "Protects a snapshot",
            text: "A closed-game folder copy preserves the slot files that existed at that moment."
          },
          {
            title: "Does not add Steam Cloud",
            text: "A local copy is separate from online synchronization and must be stored somewhere you control."
          },
          {
            title: "Does not repair a bug",
            text: "Backing up protects evidence and progress; it does not fix a black screen, connection or item-loss problem."
          },
          {
            title: "Does not require editing",
            text: "There is no need to open or modify the slot text. This page covers backup copies only."
          }
        ]
      },
      {
        heading: "Backup cautions",
        type: "checklist",
        items: [
          "Do not copy while the game is saving or closing.",
          "Do not keep the only backup inside the live Saves folder.",
          "Do not rename or edit live slot files as a troubleshooting experiment.",
          "Do not download replacement saves from strangers.",
          "Recheck the official store after updates because Steam Cloud support could change later."
        ]
      }
    ],
    faqs: [
      {
        q: "Where is the How to Fish save file?",
        a: "A Steam Community guide reports C:\\Users\\%USERNAME%\\AppData\\LocalLow\\Dazed Games\\How to Fish\\Saves on Windows."
      },
      {
        q: "What file type does How to Fish use for save slots?",
        a: "The community guide reports same-name slot files with a .txt extension. Do not edit them."
      },
      {
        q: "Does How to Fish have Steam Cloud?",
        a: "The official store page does not currently display a Steam Cloud feature as of August 23, 2026. That can change in a future update."
      },
      {
        q: "How do I manually save in How to Fish?",
        a: "No authoritative manual-save key is confirmed here. Close the game normally before copying the save folder."
      },
      {
        q: "Should I edit the save text file?",
        a: "No. This guide only covers locating and copying a backup, not changing game data."
      }
    ],
    relatedSlugs: ["black-screen-fix", "multiplayer-player-count", "complete-walkthrough", "how-to-drop-items"],
    sources: [longtailSources.saveItemGuide, longtailSources.officialStore, longtailSources.cloudSaveDiscussion]
  },
  {
    slug: "how-to-use-boat-radar",
    title: "How to Use the Boat Radar in How to Fish",
    seoTitle: "How to Use the Boat Radar in How to Fish",
    description:
      "Find the Radar after the first area, hold it and follow its displayed dot, with conflicting launch-week price claims clearly labeled.",
    intro:
      "The official store confirms that quests and bosses unlock new islands, but it does not document the Radar controls. A current Steam discussion says to collect the Radar near the starting fisherman after the first area, hold it and follow the dot it displays. One independent walkthrough instead lists a $10 purchase, so that price is treated as conflicting launch-week evidence rather than a permanent fact.",
    quickAnswer:
      "Finish the starting-area boat-key quest, then look beside the starting fisherman for the Radar. A current player answer says to pick it up, hold it and travel toward the dot shown on the display. Use the pickup prompt or binding shown by your own build; no universal Radar key is confirmed.",
    updatedAtIso: UPDATED_AT,
    eyebrow: "First-island navigation unlock",
    status: "Player-reported dot navigation",
    statusTone: "amber",
    sections: [
      {
        heading: "What the current evidence supports",
        type: "table",
        columns: ["Question", "Current answer", "Evidence"],
        rows: [
          ["When does it become relevant?", "After completing the first area", "Current player discussion"],
          ["Where should I look?", "Near the starting fisherman", "Current player discussion"],
          ["How is it used?", "Hold it and follow the displayed dot", "Current player discussion"],
          ["Does it cost $10?", "One independent walkthrough says yes; the player discussion describes picking it up", "Conflicting community evidence"],
          ["Which button uses it?", "No authoritative universal button confirmed", "Use the live prompt or binding"]
        ],
        note: "The displayed dot is the strongest direct current answer. The acquisition wording differs between two launch-week sources, so check the live interaction prompt instead of assuming a fixed price."
      },
      {
        heading: "How to use the Radar",
        type: "steps",
        items: [
          "Finish the first-area progression and confirm that the boat-key quest is complete.",
          "Return to the starting fisherman and look around the nearby interaction area for the Radar.",
          "Use the pickup prompt shown in your build and keep the Radar in hand.",
          "Watch the Radar display for its dot.",
          "Steer toward the dot and recheck the display as your direction changes."
        ]
      },
      {
        heading: "If no dot or route appears",
        type: "checklist",
        items: [
          "Make sure the first-area quest is complete and the boat keys were actually awarded.",
          "Check that the Radar itself is in your hands rather than only nearby or stored.",
          "Look for the interaction prompt beside the starting fisherman again.",
          "Use the control prompt or current binding shown by the game instead of a guessed keyboard key.",
          "If the display remains blank, record the game version before asking in the linked Steam discussion."
        ]
      },
      {
        heading: "Do not confuse these separate steps",
        type: "cards",
        items: [
          {
            title: "Boat keys",
            text: "The Spider Crab trophy route unlocks the boat. The separate boat-key guide owns those boss steps."
          },
          {
            title: "Radar item",
            text: "The current discussion places it near the starting fisherman after the first area."
          },
          {
            title: "Displayed dot",
            text: "The player answer says the dot—not a written coordinate list—is the navigation cue to follow."
          },
          {
            title: "Price claim",
            text: "A separate walkthrough lists $10, but the direct discussion uses pickup wording. Verify the current prompt before paying."
          }
        ]
      }
    ],
    faqs: [
      {
        q: "Where is the Radar in How to Fish?",
        a: "A current Steam discussion says to look near the starting fisherman after completing the first area."
      },
      {
        q: "How do I use the Radar?",
        a: "Pick it up, hold it and follow the dot shown on its display, according to the current player discussion."
      },
      {
        q: "Does the Radar cost $10?",
        a: "One independent launch-week walkthrough says $10, while a current Steam discussion describes collecting it near the fisherman. Check the live prompt because the sources conflict."
      },
      {
        q: "What button opens the Radar?",
        a: "No authoritative universal button is confirmed here. Use the prompt or binding shown in your current build."
      },
      {
        q: "What should appear on the Radar?",
        a: "The current player answer describes a dot that you follow toward the next route."
      }
    ],
    relatedSlugs: ["how-to-get-boat-keys", "boat-engine-upgrades", "how-many-islands", "complete-walkthrough"],
    sources: [longtailSources.radarDiscussion, longtailSources.radarDotDiscussion, longtailSources.islandWalkthrough, longtailSources.achievementRoute]
  },
  {
    slug: "console-crossplay",
    title: "How to Fish on Console, Steam Deck and Crossplay",
    seoTitle: "Is How to Fish on PS5 or Xbox? Console Plans & Crossplay",
    description:
      "How to Fish is on Windows and Steam Deck Verified now. The developer confirms future console and Mac versions, but no platform, date or crossplay details yet.",
    intro:
      "As of August 28, 2026, the released version is for Windows through Steam. Dazed Games says How to Fish is coming to consoles and Mac, but the developer has not named PS5, Xbox or Switch, supplied a date, or announced cross-platform multiplayer. Steam Deck verification and controller support apply to the current PC release.",
    quickAnswer:
      "You can play How to Fish now on Windows through Steam, and Steam classifies it as Verified on Steam Deck. Dazed Games has confirmed that console and Mac versions are planned, but has not identified the console platforms or release timing. Crossplay has not been confirmed.",
    updatedAtIso: "2026-08-28",
    eyebrow: "Current official platform status",
    status: "Windows PC now; console and Mac timing unknown",
    statusTone: "amber",
    sections: [
      {
        heading: "Platform status today",
        type: "table",
        columns: ["Platform or feature", "Current official status", "What that means"],
        rows: [
          ["Windows PC", "Released on Steam", "Official store requires Windows 10 or newer"],
          ["PlayStation 5", "No PS5 version or date named", "A general future console release is confirmed"],
          ["Xbox", "No Xbox version or date named", "A general future console release is confirmed"],
          ["Nintendo Switch", "No Switch version or date named", "A general future console release is confirmed"],
          ["Mac", "Future version confirmed", "No release date announced"],
          ["Steam Deck", "Verified", "Steam's four current Deck checks pass"]
        ]
      },
      {
        heading: "Controller support is not console support",
        type: "cards",
        items: [
          {
            title: "Full controller support",
            text: "Official Steam data marks controller support as full for the PC version."
          },
          {
            title: "DualShock and DualSense",
            text: "Steam lists these controller families, and Patch 1.0.8 fixed their on-screen glyphs in the Windows game."
          },
          {
            title: "Console version planned",
            text: "Dazed Games confirms a future console release, but has not named PS5, Xbox or Switch or published a date."
          },
          {
            title: "Crossplay still unknown",
            text: "A planned console version does not prove cross-platform multiplayer. No official crossplay details are published."
          }
        ]
      },
      {
        heading: "Steam Deck compatibility",
        type: "table",
        columns: ["Check", "Steam result", "Caution"],
        rows: [
          ["Overall category", "Verified", "All current Deck checks pass"],
          ["Default controls", "Tested successfully", "A future update can change the report"],
          ["Controller icons", "Tested successfully", "Some prompts may still vary"],
          ["Performance", "Tested successfully", "Not a guarantee for every setting"],
          ["Interface text", "Legible", "Steam's current compatibility result"]
        ]
      },
      {
        heading: "What crossplay would require",
        type: "checklist",
        items: [
          "The developer has confirmed future console and Mac versions, but not the console platforms or dates.",
          "The developer or platform holder would need to confirm cross-platform matchmaking.",
          "Eight-player Steam lobbies do not prove console crossplay.",
          "Do not rely on storefront wishlists, controller support or rumor pages as release confirmation.",
          "Recheck the official Steam news and developer channels after future updates."
        ]
      }
    ],
    faqs: [
      {
        q: "Is How to Fish on PS5?",
        a: "Not as a released or specifically named version. Dazed Games says consoles are planned, but has not identified PS5 or given a date."
      },
      {
        q: "Is How to Fish on Xbox?",
        a: "Not as a released or specifically named version. Dazed Games says consoles are planned, but has not identified Xbox or given a date."
      },
      {
        q: "Does How to Fish support crossplay?",
        a: "There is no official console-to-PC crossplay announcement. Current multiplayer support refers to Steam lobbies."
      },
      {
        q: "Can I use a PS5 controller on PC?",
        a: "Official Steam data lists full controller support and DualSense support for the Windows version."
      },
      {
        q: "Is How to Fish Steam Deck Verified?",
        a: "Yes. Steam currently classifies it as Verified and reports successful controller, glyph, interface-text and performance checks."
      }
    ],
    relatedSlugs: ["multiplayer-player-count", "how-to-get-boat-keys", "how-to-beat-pufferfish"],
    sources: [longtailSources.developerFaq, longtailSources.officialStore, longtailSources.storeApi, longtailSources.deckCompatibility, longtailSources.patch108, longtailSources.patch104]
  }
];
