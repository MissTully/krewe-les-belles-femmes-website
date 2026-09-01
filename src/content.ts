export const krewe = {
  name: "Les Belles Femmes",
  fullName: "Krewe of Les Belles Femmes",
  city: "Tampa",
  founded: 2002,
  motto: ["Truth", "Beauty", "Freedom", "Love"] as const,
  tagline: "Beauty with purpose.",
};

export const nav = [
  { to: "/heritage", label: "Heritage" },
  { to: "/fellowship", label: "Fellowship" },
  { to: "/giving-back", label: "Giving Back" },
  { to: "/soiree", label: "Silver Soirée" },
  { to: "/underwriters", label: "Underwriters" },
  { to: "/apply", label: "Apply" },
] as const;

export const acts = [
  {
    to: "/heritage",
    act: "Act I",
    title: "Heritage",
    copy: "Founded in 2002. A quarter century of parade nights, founders, and Tampa memory.",
    image: "/art/windmill.jpg",
    alt: "Original house mark: a wooden windmill with a cabaret-red door on cream paper.",
  },
  {
    to: "/fellowship",
    act: "Act II",
    title: "Fellowship",
    copy: "Belles and Les Beaux. Ages mixed. The room is a sisterhood, not a chorus line.",
    image: "/art/dressing.jpg",
    alt: "Top hat, crimson feathers, silver beads, and cream gloves on a dressing table.",
  },
  {
    to: "/giving-back",
    act: "Act III",
    title: "Giving Back",
    copy: "Beauty with purpose. The Spring, Best Buddies, Pediatric Cancer Foundation, and more.",
    image: "/art/giving.jpg",
    alt: "A still life of books, a ribbon, and a basin of spring water on cream linen.",
  },
] as const;

export const partners = [
  {
    name: "The Spring of Tampa Bay",
    note: "Shelter and advocacy for people leaving domestic violence.",
  },
  {
    name: "Best Buddies",
    note: "Friendship and inclusion for people with intellectual and developmental disabilities.",
  },
  {
    name: "Pediatric Cancer Foundation",
    note: "Support for children and families facing pediatric cancer.",
  },
  {
    name: "Humane Society of Tampa Bay",
    note: "Care for animals across the bay — a quiet partner in a loud season.",
  },
  {
    name: "Koncert 4 Kids",
    note: "Music and community events that raise money for children in care.",
  },
] as const;

export const underwriterLevels = [
  {
    name: "Friend of the Anniversary",
    amount: "$25",
    note: "Named in the digital program.",
  },
  {
    name: "Family or Business Underwriter",
    amount: "$350",
    note: "Named with a short line in the program. No homepage banner.",
  },
] as const;

export const season = [
  {
    when: "Saturday, 14 November 2026",
    title: "The Silver Soirée",
    where: "Carrollwood Country Club, Tampa",
    to: "/soiree",
  },
  {
    when: "November 2026",
    title: "Fall Book Club",
    where: "A seasonal gathering of the krewe",
    to: "/fellowship",
  },
  {
    when: "Late January 2027",
    title: "Gasparilla Pirate Fest",
    where: "Tampa",
    to: "/heritage",
  },
  {
    when: "Mid-February 2027",
    title: "Sant' Yago Knight Parade",
    where: "Ybor City",
    to: "/heritage",
  },
] as const;

export const links = {
  facebook: "https://www.facebook.com/KreweLBF",
  shop: "https://krewe-of-les-belles-femmes.square.site",
  mailing: "c/o Arena Law Firm, 1005 N Marion St., Tampa, FL 33602",
};
