const defaultSocialCard = {
  url: "/social-card.png",
  alt: "Grow a Chicken Fighter codes and guides"
};

const guideSocialCards = {
  codes: {
    url: "/social-card-codes.png",
    alt: "Grow a Chicken Fighter codes guide with the current WELCOME code"
  },
  eggs: {
    url: "/social-card-eggs.png",
    alt: "Grow a Chicken Fighter egg guide covering the Index, rewards and drops"
  },
  "fusion-mutations": {
    url: "/social-card-fusion.png",
    alt: "Grow a Chicken Fighter fusion guide covering the Fuse screen, traits and cost"
  }
};

export function getGuideSocialCard(slug) {
  return guideSocialCards[slug] || defaultSocialCard;
}
