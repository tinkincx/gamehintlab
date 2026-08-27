import { pages, site } from "./site";

export const videoLibrary = {
  "egg-index-guide": {
    slug: "egg-index-guide",
    guideSlug: "eggs",
    eyebrow: "Egg Index video",
    title: "How to Find a Chicken's Source Egg",
    seoTitle: "How to Find a Chicken's Source Egg (Video)",
    intro:
      "A 67-second animated explainer of the Flock to Index route reported in linked gameplay, the live fields to inspect and the facts that still need an in-game check. It is not gameplay footage.",
    durationLabel: "1:07",
    video: pages.eggs.video,
    chapters: [
      { time: "0:00", title: "Use the live Index", text: "Why a current in-game screen is safer than an old static chart." },
      { time: "0:10", title: "Open Flock and Index", text: "Find the chicken and hover its card to inspect the reported source egg." },
      { time: "0:21", title: "Read visible egg fields", text: "Check the pool and rarity information shown in the current server." },
      { time: "0:31", title: "Separate official facts", text: "The developer confirms hatching chickens and offline egg production." },
      { time: "0:40", title: "Treat rewards as changeable", text: "Community and event rewards shown in recordings are examples, not guarantees." },
      { time: "0:55", title: "Use the spending check", text: "Verify the target, source egg, visible pool or rarity and your progression goal." }
    ],
    transcript: [
      "Trying to find which egg produces the chicken you want? Skip static charts. Use the game's live evidence.",
      "Open Flock, choose Index, find the chicken and hover over its card. Recorded gameplay shows the source egg there.",
      "Next, check the egg's visible pool and rarity information. These live fields can change after updates, so recheck them.",
      "The official description confirms the main loop: hatch eggs to collect chickens, while your chickens can keep laying eggs when you are offline.",
      "Rewards need caution. Recorded gameplay shows joining the official community, then Rewards and Community, but the reward can rotate. An event drop is only an example.",
      "Before spending, verify the target, source egg, visible pool or rarity and your goal. No fixed complete list is claimed here."
    ],
    boundaries: [
      "No complete current egg list is claimed.",
      "No fixed pool, odds, price or reward is claimed.",
      "Use the live Index after every game update."
    ]
  },
  "fusion-screen-guide": {
    slug: "fusion-screen-guide",
    guideSlug: "fusion-mutations",
    eyebrow: "Fuse screen video",
    title: "How to Read the Fuse Screen Before Confirming",
    seoTitle: "How to Read the Grow a Chicken Fighter Fuse Screen (Video)",
    intro:
      "A 72-second animated explainer of the two-chicken Fuse route reported in linked gameplay, the displayed cost, the preview and the limits of what one recorded interface can prove. It is not gameplay footage.",
    durationLabel: "1:12",
    video: pages["fusion-mutations"].video,
    chapters: [
      { time: "0:00", title: "Treat Fuse as a live decision screen", text: "Do not assume a fixed recipe from one recording." },
      { time: "0:14", title: "Select both chickens", text: "Recorded gameplay opens Flock, selects a chicken, chooses Fuse and adds a second chicken." },
      { time: "0:22", title: "Read the displayed cost", text: "Use the amount visible in your current server instead of an old fixed number." },
      { time: "0:33", title: "Inspect the observed controls", text: "One route shows base and donor roles, a lockable trait field and a result preview." },
      { time: "0:48", title: "Run the four-point check", text: "Verify the first chicken, second chicken, displayed cost and full preview." },
      { time: "0:58", title: "Keep the evidence boundary", text: "No recipe, odds, unlock requirement or input-consumption rule is verified here." }
    ],
    transcript: [
      "Fusion looks like a recipe system. The safer way to read it is as a live decision screen.",
      "The developer says Fusion combines two chickens into a mutated monster. Recorded gameplay shows this route: open Flock, select a chicken, choose Fuse, then select a second chicken.",
      "Before any confirmation, read the cost displayed on your screen. That number is evidence on that screen; this video does not claim a fixed price.",
      "One recorded route shows two roles: base and donor, a lockable trait field and a result preview. Those are observed interface elements, not a permanent recipe, and may not describe every version.",
      "Pause and verify four things you can actually see: the first chicken, the second chicken, the displayed cost and the full preview.",
      "Do not turn one recording into a rule. No recipe, mutation odds, unlock requirement or input-consumption rule is verified here. Use your live Fuse screen."
    ],
    boundaries: [
      "No fixed fusion recipe or mutation odds are claimed.",
      "No unlock requirement, price or input-consumption rule is claimed.",
      "Use the full preview shown in the current server before confirming."
    ]
  }
};

export const videoList = Object.values(videoLibrary);

export function videoPath(slug = "") {
  const clean = slug ? `${slug.replace(/^\//, "").replace(/\/$/, "")}/` : "";
  return `/videos/${clean}`;
}

export function videoAbsoluteUrl(slug = "") {
  return `${site.url}${videoPath(slug)}`;
}
