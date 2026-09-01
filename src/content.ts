export const krewe = {
  name: "Les Belles Femmes",
  fullName: "Krewe of Les Belles Femmes",
  city: "Tampa",
  founded: 2002,
  motto: ["Truth", "Beauty", "Freedom", "Love"] as const,
  tagline: "Beauty with purpose.",
};

/** Paths under public/art/. Long generated filenames stay as uploaded. */
export const art = {
  poster: "/art/Krewe of Les Belles Femmes.jpg",
  banner: "/art/grok-f219f352-e5c8-47dc-a0a7-6fe8d299c230.jpg",
  stageDoorPoster: "/art/grok-212a8b39-9dad-4e2b-85de-2eabefac73b1.jpg",
  threeActs: "/art/grok-5b33df19-a356-4d9e-b699-af5155f9a1d5.jpg",
  soireeInvite: "/art/grok-8f27e4be-4de2-465e-b6ca-142522c80ca9.jpg",
  ornaments: "/art/grok-b7ed9399-426d-46c6-b748-972eba36cdde.jpg",
  tickets: "/art/2AumF.jpg",
  curtain: "/art/3f9SB.jpg",
  stub25: "/art/DmdZw.jpg",
  dusk: "/art/mtully_Lithograph_of_a_Tampa_parade_street_at_dusk_drawn_as_1_3b169271-d7ca-4a2a-9309-ae67c20e5633_3.png",
  pinwheel: "/art/mtully_45_Paper_windmill_toy_held_in_an_adult_hand_lithograph_5fccd41f-2016-4115-aa65-77d40358f8dc_3.png",
  gift: "/art/mtully_45_Two_gloved_hands_offering_a_small_wrapped_gift_and__020750ad-68f1-4e72-9dda-b8a72c58e852_1.png",
  stageFrame: "/art/mtully_Cream_aged_playbill_centered_in_a_thin_silver_filigree_69764229-80e5-4e3a-942b-b27ddff12ad1_2.png",
  walking: "/art/mtully_45_Two_female_figures_walking_side_by_side_in_ink_one__c39fd07e-9ce3-4dd6-bc0b-907ebd0f60f6_2.png",
  parade: "/art/parade.jpg",
  windmill: "/art/windmill.jpg",
  dressing: "/art/dressing.jpg",
  givingStill: "/art/giving.jpg",
  beads: "/art/beads.jpg",
  playbillStill: "/art/playbill-still.jpg",
  velvet: "/art/velvet.jpg",
} as const;

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
    image: art.pinwheel,
    alt: "A silver paper windmill with a red ribbon, held in a hand.",
  },
  {
    to: "/fellowship",
    act: "Act II",
    title: "Fellowship",
    copy: "Belles and Les Beaux. Ages mixed. The room is a sisterhood, not a chorus line.",
    image: art.dressing,
    alt: "Top hat, crimson feathers, silver beads, and cream gloves on a dressing table.",
  },
  {
    to: "/giving-back",
    act: "Act III",
    title: "Giving Back",
    copy: "Beauty with purpose. The Spring, Best Buddies, Pediatric Cancer Foundation, and more.",
    image: art.gift,
    alt: "Gloved hands offering a wrapped gift and a bouquet of red flowers.",
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
