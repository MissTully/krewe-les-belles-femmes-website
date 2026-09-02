export const krewe = {
  name: "Les Belles Femmes",
  fullName: "Krewe of Les Belles Femmes",
  city: "Tampa Bay",
  founded: 2002,
  motto: ["Truth", "Beauty", "Freedom", "Love"] as const,
  tagline: "A sisterhood of women who celebrate life, friendship, pageantry, and service.",
};

export const art = {
  ladies: "/art/Ladies.png",
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
  { to: "/heritage", label: "Our Story" },
  { to: "/fellowship", label: "Sisterhood" },
  { to: "/giving-back", label: "Giving Back" },
  { to: "/calendar", label: "Events" },
  { to: "/soiree", label: "Silver Soirée" },
  { to: "/executive-producers", label: "Support LBF" },
  { to: "/apply", label: "Membership" },
] as const;

export const acts = [
  { to: "/heritage", act: "Our Story", title: "25 Years of LBF", copy: "Founded in 2002, Les Belles Femmes has grown into a Tampa Bay sisterhood rooted in Truth, Beauty, Freedom, and Love.", image: art.parade, alt: "Les Belles Femmes parade imagery." },
  { to: "/fellowship", act: "Sisterhood", title: "Come Find Your People", copy: "Book clubs, socials, galas, themed balls, and the friendships that make every gathering feel like coming home.", image: art.dressing, alt: "Parisian-inspired costume pieces including a top hat, feathers, beads, gloves, and boots." },
  { to: "/giving-back", act: "Giving Back", title: "Beauty With Purpose", copy: "The krewe carries its spirit of celebration into service, fundraising, and support for organizations across Tampa Bay.", image: art.givingStill, alt: "A celebratory gift representing the krewe's spirit of giving." },
] as const;

export const partners = [
  { name: "The Spring of Tampa Bay", note: "A local organization supported by the krewe through fundraising and community involvement." },
  { name: "Pediatric Cancer Foundation", note: "A Tampa Bay cause supported through the krewe's charitable efforts." },
  { name: "Best Buddies International", note: "A community organization included among the causes supported by LBF." },
  { name: "Humane Society of Tampa Bay", note: "A local organization supported through the krewe's giving and volunteer spirit." },
] as const;

export const producerLevels = [] as const;

export const yearRhythm = [
  { when: "Year-round", title: "Socials, book clubs & gatherings", note: "The calendar includes seasonal socials, book club, galas, and themed events throughout the year." },
  { when: "November 2026", title: "Silver Soirée", note: "A 25th-anniversary celebration at Carrollwood Country Club on Saturday, November 14, 2026." },
  { when: "Parade season", title: "Tampa Bay parades", note: "LBF participates in Gasparilla, Sant' Yago, and holiday parades, with the krewe's signature Eiffel Tower and Moulin Rouge windmill float." },
  { when: "May–September", title: "Recruitment season", note: "Prospective members may be welcomed as guests at seasonal mixers and social events with current members." },
] as const;

export const firstYearCosts = [
  { item: "Membership details", amount: "Ask membership", note: "The supplied organization information does not publish a current dues amount. Membership details should come directly from LBF." },
  { item: "Costume", amount: "Parisian cabaret", note: "Corsets, ruffles, boas, top hats, feathers, and boots are part of the krewe's signature parade style." },
  { item: "Events", amount: "Year-round", note: "Members participate in socials, book club, galas, themed balls, and parade activities." },
] as const;

export const joiningSteps = [
  { step: "1", title: "Come as a guest", note: "Prospective members are warmly invited to seasonal mixers and social events as guests of current members." },
  { step: "2", title: "Meet the sisterhood", note: "Share a drink, conversation, laughter, and the experience of an LBF gathering." },
  { step: "3", title: "Reach out", note: "Use the site's membership inquiry or speak with a current member at a community event to learn about joining." },
] as const;

export const lesBeaux = {
  name: "Les Beaux",
  title: "The Les Beaux Auxiliary",
  copy: "Les Belles Femmes is a women's krewe with Les Beaux, its male auxiliary. The men who love and support the krewe can share in the pageantry, fellowship, and community spirit.",
};

export const houseLines = [
  "Wear the damn outfit.", "Add the sparkle.", "Buy the boots.", "Dream big.", "Laugh loudly.", "Never dull your sparkle.", "Be generous.", "Choose kindness.", "Be unapologetically you.",
] as const;

export const interKrewe = [
  { name: "Notorious Krewe of the Peg Leg Pirates", note: "LBF participates in inter-krewe fellowship and shared community events, including Bingo Night." },
] as const;

export const paradeWeekend = [
  { title: "The Look", note: "The krewe's signature style is turn-of-the-century Parisian cabaret: corsets, fluffy ruffled skirts, boas, top hats, feathers, and boots." },
  { title: "The Float", note: "The signature float features a miniature Eiffel Tower and Moulin Rouge windmill motif." },
  { title: "The Parades", note: "LBF participates in major Tampa Bay events including the Gasparilla Pirate Fest, the Sant' Yago Knight Parade in Ybor City, and local holiday parades." },
] as const;

export const memoryCall = {
  title: "The story belongs to the women who lived it",
  copy: "LBF honors its heritage through member spotlights, founder memories, and stories from longtime members. The site can continue to grow as approved memories and photographs are shared.",
};

export const benefitStance = "Beyond the parties and parades, Les Belles Femmes gives back through fundraising, volunteering, and support for local organizations including The Spring of Tampa Bay, the Pediatric Cancer Foundation, Best Buddies International, and the Humane Society of Tampa Bay.";

export type EventAudience = "public" | "members" | "invite";
export type EventKind = "ball" | "parade" | "social" | "service" | "recruiting";
export type DateCertainty = "confirmed" | "month" | "window";
export type KreweEvent = { id: string; title: string; whenLabel: string; start: string; end?: string; timeLabel?: string; where: string; audience: EventAudience; kind: EventKind; certainty: DateCertainty; to?: string; onHome?: boolean; notes?: string };

export const events: KreweEvent[] = [
  { id: "silver-soiree-2026", title: "Silver Soirée", whenLabel: "Saturday, November 14, 2026", start: "2026-11-14", where: "Carrollwood Country Club", audience: "invite", kind: "ball", certainty: "confirmed", to: "/soiree", onHome: true, notes: "Celebrating over 25 years of Truth, Beauty, Freedom, and Love." },
  { id: "fall-book-club-2026", title: "Fall Book Club", whenLabel: "November 2026", start: "2026-11-01", where: "Tampa Bay", audience: "members", kind: "social", certainty: "month", to: "/fellowship", onHome: true, notes: "An informal seasonal member social following the summer book club gathering." },
  { id: "gasparilla-2027", title: "Gasparilla Pirate Fest", whenLabel: "Late January 2027", start: "2027-01-01", where: "Tampa Bay", audience: "public", kind: "parade", certainty: "month", to: "/heritage", onHome: true, notes: "The supplied information gives a late-January window rather than a specific day." },
  { id: "sant-yago-2027", title: "Sant' Yago Knight Parade", whenLabel: "Mid-February 2027", start: "2027-02-01", where: "Ybor City, Tampa", audience: "public", kind: "parade", certainty: "month", to: "/heritage", onHome: true, notes: "The supplied information gives mid-February rather than a specific 2027 date." },
  { id: "recruitment-2027", title: "Recruitment season", whenLabel: "May–September 2027", start: "2027-05-01", end: "2027-09-30", where: "Tampa Bay · seasonal mixers and social events", audience: "public", kind: "recruiting", certainty: "window", to: "/apply", onHome: true, notes: "Prospective members are invited to attend as guests of current members." },
] as const;

export const season = events.filter((event) => event.onHome).map((event) => ({ when: event.whenLabel, title: event.title, where: event.where, to: event.to ?? "/calendar" }));

export const links = { facebook: "", shop: "https://krewe-of-les-belles-femmes.square.site/", mailing: "Tampa Bay, Florida" };
