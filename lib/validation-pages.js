export const validationPages = [
  {
    gameSlug: "cheating-during-testing",
    intentSlug: "guide",
    path: "/cheating-during-testing/guide/",
    gameName: "Cheating During Testing",
    title: "Cheating During Testing Roblox Guide",
    summary:
      "A source-checked starter guide to exams, Credits, gadgets, Snitches, Hunger and Anxiousness.",
    updatedAtIso: "2026-08-23",
    officialGameUrl:
      "https://www.roblox.com/games/98894876188248/Cheating-During-Testing",
    iconUrl:
      "https://tr.rbxcdn.com/180DAY-3c6a42c5dd0be58ecafc0078d2c269a3/512/512/Image/Png/noFilter",
    socialImageUrl:
      "https://tr.rbxcdn.com/180DAY-a2103f37a242ae2f8107be8c6d37275b/768/432/Image/Png/noFilter"
  }
];

export function validationPageAbsoluteUrl(page, siteUrl) {
  return `${siteUrl}${page.path}`;
}
