export const photos = {
  closing: { src: "/images/bangladesh-fields-aerial.webp", alt: "Aerial view of green fields, tree-lined ponds, and a train in Bangladesh" },
  hero: { src: "/images/dhaka-river-market.webp", alt: "Wooden boats moored along a busy riverbank with people and market buildings" },
  market: { src: "/images/dhaka-street-market.webp", alt: "A street stall surrounded by people moving through the market" },
  rural: { src: "/images/chandpur-landscape.webp", alt: "A narrow path and waterway running between green fields and trees" },
  farming: { src: "/images/bangladesh-rice-fields.webp", alt: "People working among rows of bright green rice plants" },
  women: { src: "/images/bangladesh-kans-grass.webp", alt: "A woman sitting beside tall white kans grass" },
  city: { src: "/images/dhaka-market-street.webp", alt: "People and rickshaws moving through a densely built market street" },
  boats: { src: "/images/dhaka-fruit-market.webp", alt: "Boats carrying fruit beside a crowded river market" },
  paddy: { src: "/images/bangladesh-harvest.webp", alt: "People gathering rice in an open green field" },
};

export const heroMotion = {
  src: "/images/hero-river-motion.webp",
  gif: "/images/hero-river-motion.gif",
  poster: "/images/dhaka-river-market.webp",
  alt: "Wooden country boats carrying passengers and moving across the river in Bangladesh",
};

export interface MotionScene {
  id: string;
  number: string;
  shortTitle: string;
  title: string;
  location: string;
  tag: string;
  summary: string;
  srcWebp: string;
  srcGif: string;
  poster: string;
  alt: string;
}

export const motionScenes: MotionScene[] = [
  {
    id: "community-dialogue",
    number: "01",
    shortTitle: "Community Dialogue",
    title: "Rural Focus Group & Community Inquiry",
    location: "Rural Chandpur",
    tag: "Qualitative Fieldwork",
    summary: "Field researchers engaging directly with community members and household decision-makers in an open-air village courtyard to understand lived realities beyond survey questionnaires.",
    srcWebp: "/images/field-research-motion.webp",
    srcGif: "/images/field-research-motion.gif",
    poster: "/images/chandpur-landscape.webp",
    alt: "Field research focus group discussion under an open veranda in rural Bangladesh",
  },
  {
    id: "river-transit",
    number: "02",
    shortTitle: "River Transit",
    title: "Riverway Commuting & Everyday Mobility",
    location: "Buriganga River, Dhaka",
    tag: "Urban & Riverine Transit",
    summary: "Traditional wooden country boats crossing busy river corridors, capturing the continuous movement of commuters and the indispensable role of waterways in regional connectivity.",
    srcWebp: "/images/hero-river-motion.webp",
    srcGif: "/images/hero-river-motion.gif",
    poster: "/images/dhaka-river-market.webp",
    alt: "Traditional wooden country passenger boats crossing the river in Bangladesh",
  },
  {
    id: "digital-trade",
    number: "03",
    shortTitle: "Digital Trade",
    title: "Neighborhood Retail & Mobile Transactions",
    location: "Neighborhoods, Dhaka",
    tag: "Financial Inclusion & FMCG",
    summary: "Micro-merchants and local consumers using mobile phone payments at neighborhood stores, illustrating everyday adoption of mobile financial services in informal commerce.",
    srcWebp: "/images/market-digital-motion.webp",
    srcGif: "/images/market-digital-motion.gif",
    poster: "/images/dhaka-street-market.webp",
    alt: "Shopkeeper and consumer conducting mobile transactions at a street store in Dhaka",
  },
  {
    id: "wholesale-logistics",
    number: "04",
    shortTitle: "Wholesale Logistics",
    title: "River Ghat Produce & Cargo Loading",
    location: "River Wholesale Market",
    tag: "Supply Chain & Value Chains",
    summary: "Laborers carrying woven produce baskets and loading riverboats along busy ghats, forming the vital link between agricultural producers and metropolitan consumer markets.",
    srcWebp: "/images/river-ghat-trade-motion.webp",
    srcGif: "/images/river-ghat-trade-motion.gif",
    poster: "/images/dhaka-fruit-market.webp",
    alt: "Laborers carrying woven produce baskets and loading river boats at river market",
  },
  {
    id: "agrarian-waterways",
    number: "05",
    shortTitle: "Agrarian Waterways",
    title: "Irrigation Channels & Agrarian Livelihoods",
    location: "Floodplain Agriculture",
    tag: "Rural Livelihoods",
    summary: "Water flowing through a small-scale irrigation canal between lush green rice fields, depicting the ecological backbone sustaining agricultural yield and food security.",
    srcWebp: "/images/rural-canal-motion.webp",
    srcGif: "/images/rural-canal-motion.gif",
    poster: "/images/chandpur-landscape.webp",
    alt: "Water canal through green paddy fields in rural Bangladesh",
  },
];

export type Photo = (typeof photos)[keyof typeof photos];
