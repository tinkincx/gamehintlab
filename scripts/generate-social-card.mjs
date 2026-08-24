import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const chickenSvg = await fs.readFile(path.join(projectRoot, "public", "game-grow-chicken-fighter.svg"));
const chickenData = `data:image/svg+xml;base64,${chickenSvg.toString("base64")}`;
const brandSvg = await fs.readFile(path.join(projectRoot, "public", "brand-mark.svg"));
const brandData = `data:image/svg+xml;base64,${brandSvg.toString("base64")}`;

const card = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b2018"/>
      <stop offset="0.58" stop-color="#143e2b"/>
      <stop offset="1" stop-color="#0a281d"/>
    </linearGradient>
    <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
      <path d="M42 0H0V42" fill="none" stroke="#ffffff" stroke-opacity="0.08"/>
    </pattern>
    <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#06130e" flood-opacity="0.48"/>
    </filter>
  </defs>
  <rect width="1200" height="630" rx="0" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <circle cx="966" cy="174" r="260" fill="#b8e538" fill-opacity="0.08"/>
  <circle cx="966" cy="174" r="210" fill="none" stroke="#b8e538" stroke-opacity="0.25" stroke-width="2"/>
  <circle cx="966" cy="174" r="142" fill="none" stroke="#b8e538" stroke-opacity="0.23" stroke-width="2"/>
  <rect x="72" y="62" width="266" height="38" rx="19" fill="#b8e538" fill-opacity="0.14" stroke="#b8e538" stroke-opacity="0.46"/>
  <text x="94" y="87" fill="#e4ff91" font-family="Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="1.5">UNOFFICIAL ROBLOX GUIDE</text>
  <text x="72" y="190" fill="#ffffff" font-family="Arial, sans-serif" font-size="68" font-weight="800">Grow a Chicken</text>
  <text x="72" y="265" fill="#ffffff" font-family="Arial, sans-serif" font-size="68" font-weight="800">Fighter</text>
  <text x="72" y="322" fill="#cbdad0" font-family="Arial, sans-serif" font-size="27" font-weight="600">Codes, beginner route, chickens, eggs,</text>
  <text x="72" y="359" fill="#cbdad0" font-family="Arial, sans-serif" font-size="27" font-weight="600">fusion and rebirth.</text>
  <rect x="72" y="410" width="224" height="76" rx="14" fill="#081b13" fill-opacity="0.72" stroke="#ffffff" stroke-opacity="0.14"/>
  <text x="94" y="438" fill="#8eaa99" font-family="Arial, sans-serif" font-size="14" font-weight="700">CURRENT CODE</text>
  <text x="94" y="472" fill="#b8e538" font-family="Arial, sans-serif" font-size="29" font-weight="800">WELCOME</text>
  <rect x="312" y="410" width="330" height="76" rx="14" fill="#081b13" fill-opacity="0.72" stroke="#ffffff" stroke-opacity="0.14"/>
  <text x="334" y="438" fill="#8eaa99" font-family="Arial, sans-serif" font-size="14" font-weight="700">CREATOR</text>
  <text x="334" y="472" fill="#ffffff" font-family="Arial, sans-serif" font-size="22" font-weight="700">Sergio Verse Games</text>
  <text x="72" y="566" fill="#eaf5ee" font-family="Arial, sans-serif" font-size="21" font-weight="700">gamehintlab.com</text>
  <image href="${chickenData}" x="785" y="70" width="340" height="340" filter="url(#shadow)"/>
</svg>`;

await sharp(Buffer.from(card)).png({ compressionLevel: 9 }).toFile(path.join(projectRoot, "public", "social-card.png"));
console.log("Generated public/social-card.png (1200x630)");

const guideCards = [
  {
    file: "social-card-codes.png",
    accent: "#b8e538",
    eyebrow: "WORKING CODE + REDEMPTION ROUTE",
    title: "CODES",
    subtitle: "Current rewards, where to enter them, and what is verified.",
    factLabel: "CURRENT VERIFIED CODE",
    factValue: "WELCOME",
    motif: `
      <rect x="857" y="389" width="236" height="104" rx="20" fill="#071b13" stroke="#b8e538" stroke-opacity="0.72" stroke-width="3"/>
      <text x="885" y="430" fill="#e4ff91" font-family="Arial, sans-serif" font-size="17" font-weight="700" letter-spacing="2">ENTER CODE</text>
      <path d="M884 458h176" stroke="#b8e538" stroke-width="4" stroke-linecap="round"/>
      <path d="m1028 446 18 12-18 12" fill="none" stroke="#b8e538" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    `
  },
  {
    file: "social-card-eggs.png",
    accent: "#ffc83d",
    eyebrow: "INDEX, REWARDS &amp; DROPS",
    title: "EGG GUIDE",
    subtitle: "Find the source, inspect the pool, then check rarity before spending.",
    factLabel: "FAST ROUTE",
    factValue: "FLOCK  /  INDEX  /  HOVER",
    motif: `
      <ellipse cx="892" cy="442" rx="42" ry="56" fill="#fffef8" stroke="#ffc83d" stroke-width="5"/>
      <ellipse cx="975" cy="427" rx="47" ry="63" fill="#fffef8" stroke="#ffc83d" stroke-width="5"/>
      <ellipse cx="1062" cy="446" rx="39" ry="52" fill="#fffef8" stroke="#ffc83d" stroke-width="5"/>
      <path d="m958 405 17 18-12 16 23 18" fill="none" stroke="#17243a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M844 498c80-31 190-31 270 0" fill="none" stroke="#ffc83d" stroke-opacity="0.72" stroke-width="8" stroke-linecap="round"/>
    `
  },
  {
    file: "social-card-fusion.png",
    accent: "#68d4c2",
    eyebrow: "FUSE SCREEN, TRAITS &amp; COST",
    title: "FUSION GUIDE",
    subtitle: "A source-led walkthrough without invented recipes or odds.",
    factLabel: "CORE RULE",
    factValue: "2 CHICKENS  TO  1 MUTATION",
    motif: `
      <circle cx="883" cy="443" r="40" fill="#e2f4e8" stroke="#68d4c2" stroke-width="5"/>
      <circle cx="958" cy="443" r="40" fill="#e2f4e8" stroke="#68d4c2" stroke-width="5"/>
      <path d="M1008 443h42" stroke="#68d4c2" stroke-width="7" stroke-linecap="round"/>
      <path d="m1036 426 22 17-22 17" fill="none" stroke="#68d4c2" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m883 425 11 13-9 12 14 14M958 425l-11 13 9 12-14 14" fill="none" stroke="#17243a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="1094" cy="443" r="49" fill="#68d4c2" fill-opacity="0.22" stroke="#68d4c2" stroke-width="5"/>
      <path d="m1076 443 12 12 25-28" fill="none" stroke="#d9fff7" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    `
  }
];

function createGuideCard({ accent, eyebrow, title, subtitle, factLabel, factValue, motif }) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="guide-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#081a13"/>
      <stop offset="0.58" stop-color="#123d2b"/>
      <stop offset="1" stop-color="#071f17"/>
    </linearGradient>
    <pattern id="guide-grid" width="42" height="42" patternUnits="userSpaceOnUse">
      <path d="M42 0H0V42" fill="none" stroke="#ffffff" stroke-opacity="0.075"/>
    </pattern>
    <filter id="guide-shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#020b07" flood-opacity="0.56"/>
    </filter>
  </defs>
  <rect width="1200" height="630" fill="url(#guide-bg)"/>
  <rect width="1200" height="630" fill="url(#guide-grid)"/>
  <path d="M760 0h440v630H692c66-78 87-166 64-265-21-92-20-216 4-365Z" fill="${accent}" fill-opacity="0.055"/>
  <circle cx="981" cy="191" r="205" fill="none" stroke="${accent}" stroke-opacity="0.22" stroke-width="2"/>
  <circle cx="981" cy="191" r="144" fill="none" stroke="${accent}" stroke-opacity="0.17" stroke-width="2"/>

  <rect x="72" y="58" width="360" height="38" rx="19" fill="${accent}" fill-opacity="0.14" stroke="${accent}" stroke-opacity="0.56"/>
  <text x="94" y="83" fill="${accent}" font-family="Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="1.5">${eyebrow}</text>
  <text x="72" y="158" fill="#a7beaf" font-family="Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="1.6">GROW A CHICKEN FIGHTER</text>
  <text x="72" y="272" fill="#ffffff" font-family="Arial, sans-serif" font-size="88" font-weight="800" letter-spacing="-2">${title}</text>
  <text x="72" y="331" fill="#d2e0d7" font-family="Arial, sans-serif" font-size="25" font-weight="600">${subtitle}</text>

  <rect x="72" y="382" width="638" height="104" rx="18" fill="#061710" fill-opacity="0.74" stroke="#ffffff" stroke-opacity="0.14"/>
  <rect x="72" y="382" width="8" height="104" rx="4" fill="${accent}"/>
  <text x="104" y="421" fill="#8fa99a" font-family="Arial, sans-serif" font-size="14" font-weight="700" letter-spacing="1.5">${factLabel}</text>
  <text x="104" y="462" fill="${accent}" font-family="Arial, sans-serif" font-size="29" font-weight="800">${factValue}</text>

  <image href="${chickenData}" x="830" y="72" width="302" height="302" filter="url(#guide-shadow)"/>
  ${motif}

  <image href="${brandData}" x="72" y="536" width="42" height="42"/>
  <text x="128" y="565" fill="#edf7f1" font-family="Arial, sans-serif" font-size="21" font-weight="700">GAME HINT LAB</text>
  <text x="1029" y="565" fill="#a7beaf" font-family="Arial, sans-serif" font-size="18" font-weight="700" text-anchor="end">gamehintlab.com</text>
</svg>`;
}

for (const guideCard of guideCards) {
  const output = path.join(projectRoot, "public", guideCard.file);
  await sharp(Buffer.from(createGuideCard(guideCard))).png({ compressionLevel: 9 }).toFile(output);
  console.log(`Generated public/${guideCard.file} (1200x630)`);
}
