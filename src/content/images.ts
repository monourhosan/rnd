export const photos = {
  hero: { src: "/images/dhaka-river-market.webp", alt: "Wooden boats moored along a busy riverbank with people and market buildings" },
  market: { src: "/images/dhaka-street-market.webp", alt: "A street stall surrounded by people moving through the market" },
  rural: { src: "/images/chandpur-landscape.webp", alt: "A narrow path and waterway running between green fields and trees" },
  farming: { src: "/images/bangladesh-rice-fields.webp", alt: "People working among rows of bright green rice plants" },
  women: { src: "/images/bangladesh-kans-grass.webp", alt: "A woman sitting beside tall white kans grass" },
  city: { src: "/images/dhaka-market-street.webp", alt: "People and rickshaws moving through a densely built market street" },
  boats: { src: "/images/dhaka-fruit-market.webp", alt: "Boats carrying fruit beside a crowded river market" },
  paddy: { src: "/images/bangladesh-harvest.webp", alt: "People gathering rice in an open green field" },
};
export type Photo = (typeof photos)[keyof typeof photos];
