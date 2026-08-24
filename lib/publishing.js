export const publishedGuides = [
  { slug: "codes", label: "Codes", priority: 0.95, changeFrequency: "daily" },
  { slug: "arena-ascension-egg", label: "Arena Update", priority: 0.94, changeFrequency: "daily" },
  { slug: "beginner-guide", label: "Beginner Guide", priority: 0.9, changeFrequency: "weekly" },
  { slug: "eggs", label: "Egg Guide", priority: 0.88, changeFrequency: "weekly" },
  { slug: "abilities", label: "Abilities", priority: 0.9, changeFrequency: "weekly" },
  { slug: "fusion-mutations", label: "Fusion Guide", priority: 0.88, changeFrequency: "weekly" },
  { slug: "rebirth-guide", label: "Rebirth Guide", priority: 0.86, changeFrequency: "weekly" },
  { slug: "official-links", label: "Official Links", priority: 0.7, changeFrequency: "weekly" }
];

export const indexableGuideSlugList = publishedGuides.map((guide) => guide.slug);
export const indexableGuideSlugs = new Set(indexableGuideSlugList);
