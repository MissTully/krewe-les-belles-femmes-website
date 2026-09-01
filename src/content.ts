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
  { to: "/heritage", label: "Overture" },
  { to: "/fellowship", label: "Sisterhood" },
  { to: "/giving-back", label: "Benefit" },
  { to: "/calendar", label: "Playbill" },
  { to: "/soiree", label: "Soir\u00e9e" },
  { to: "/executive-producers", label: "Producers" },
  { to: "/apply", label: "Casting" },
] as const;

export const acts = [
  {
    to: "/heritage",
    act: "Act I",
    title: "The Overture",
    copy: "Founded in 2002. A quarter century of parade nights, founders, and Tampa memory.",
    image: art.pinwheel,
    alt: "A silver paper windmill with a red ribbon, held in a hand.",
  },
  {
    to: "/fellowship",
    act: "Act II",
    title: "Sisterhood",
    copy: "Belles and Les Beaux. Ages mixed. The room is a sisterhood, not a chorus line.",
    image: art.dressing,
    alt: "Top hat, crimson feathers, silver beads, and cream gloves on a dressing table.",
  },
  {
    to: "/giving-back",
    act: "Act III",
    title: "The Benefit",
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
    note: "Care for animals across the bay. A quiet partner in a loud season.",
  },
  {
    name: "Koncert 4 Kids",
    note: "Music and community events that raise money for children in care.",
  },
] as const;

export const producerLevels = [
  {
    name: "Friend of the House",
    amount: "$25",
    note: "Named in the digital program.",
  },
  {
    name: "Family or Business Producer",
    amount: "$350",
    note: "Named with a short line in the program. No homepage banner.",
  },
] as const;

/**
 * Rhythm of a public year. Months only. Do not invent parade call times here.
 * Keep this short enough for the home page.
 */
export const yearRhythm = [
  {
    when: "May through September",
    title: "Casting season",
    note: "Recruitment socials. A guest who wants to join should be in the room at least three times.",
  },
  {
    when: "November",
    title: "Book club and the Silver Soir\u00e9e",
    note: "A quiet member night, then opening night of the silver season. The ball is not the whole year.",
  },
  {
    when: "Late January",
    title: "Gasparilla",
    note: "Children's route and the Parade of Pirates. City days are on the Playbill. House call time is not.",
  },
  {
    when: "February",
    title: "Sant' Yago in Ybor",
    note: "Night parade on Seventh Avenue when the Knights post the date.",
  },
  {
    when: "Holiday routes",
    title: "Local holiday parades",
    note: "Smaller crowds. Good first rides if the float captain has a spot.",
  },
] as const;

/**
 * First-year money. Only dues are a published number.
 * Everything else is a category the treasurer or membership chair still prices.
 */
export const firstYearCosts = [
  {
    item: "Annual dues",
    amount: "$450",
    note: "Invited by an officer. Do not send dues through this site.",
  },
  {
    item: "Costume and boots",
    amount: "Plan for it",
    note: "Corset, ruffles, boa, hat, feathers, boots. Borrow before you buy if a sister offers.",
  },
  {
    item: "Ball ticket",
    amount: "Separate from dues",
    note: "Silver Soir\u00e9e is its own seat. A woman who skips the gala can still belong.",
  },
  {
    item: "Parade weekend time",
    amount: "Days, not dollars",
    note: "Gasparilla weekend is a work problem for nurses and teachers. Ask before you promise the float.",
  },
] as const;

/** Steps a guest follows before dues. */
export const joiningSteps = [
  {
    step: "1",
    title: "Be asked",
    note: "Someone already in the krewe should know your name. Cold forms get a polite wait.",
  },
  {
    step: "2",
    title: "Come to three socials",
    note: "May through September. Prior parade guesting or security work can stand in. Ask membership.",
  },
  {
    step: "3",
    title: "Leave your name here",
    note: "Casting collects a reach-back. It does not admit you and it does not take money.",
  },
  {
    step: "4",
    title: "Wait for an officer",
    note: "Dues and the roster come from membership, not from a button.",
  },
] as const;

/** Les Beaux is the gentlemen's auxiliary. Keep this visible, not a footnote. */
export const lesBeaux = {
  name: "Les Beaux",
  title: "How a man becomes a Beau",
  copy: "Les Beaux is the gentlemen's auxiliary of a women's krewe. A husband, brother, or friend belongs in the room with the same dignity as a Belle. He does not become a Belle. Ask a member to walk him to membership the same way a woman is asked.",
};

/** Lines that already live on the dressing-room mirror. Do not invent new slogans. */
export const houseLines = [
  "Wear the outfit.",
  "Add the sparkle.",
  "Buy the boots.",
  "Dream big.",
  "Laugh loudly.",
  "Never dull your sparkle.",
  "Be generous.",
  "Choose kindness.",
  "Be unapologetically you.",
] as const;

/** Other Tampa krewes we already stand next to. Confirm each night before printing a flyer. */
export const interKrewe = [
  {
    name: "Notorious Krewe of the Peg Leg Pirates",
    note: "Bingo and other shared nights. Fellowship across the bay, not only inside this house.",
  },
] as const;

/**
 * What a first ride feels like when call time is still missing.
 * Do not put a clock or a street corner staging lot here.
 */
export const paradeWeekend = [
  {
    title: "Costume",
    note: "Parisian cabaret: corset, ruffles, boa, top hat, feathers, boots. The float carries the windmill and a small Eiffel Tower.",
  },
  {
    title: "The day",
    note: "Standing, weather, beads, and a long wait before the first turn. Ask who watches whose bag.",
  },
  {
    title: "Call time",
    note: "The float captain still holds invasion brunch and float call. This page will not guess a Saturday morning hour.",
  },
] as const;

/** Placeholder until founders send approved memories. */
export const memoryCall = {
  title: "The house is collecting its own story",
  copy: "Founders and longtime members are being asked for short memories, not a polished history. When a sister approves a paragraph and a photograph, it will live on The Overture. Until then this page will not invent a name.",
};

export const benefitStance =
  "Partners below are the public list. A dollar figure or a named drive waits for the board. Guests should judge us by what reached those partners, not by a logo row.";

/**
 * Who may see the event on the public Front Stage.
 * members = krewe only; still listed here so the page can filter,
 * but the copy must not leak addresses or call times.
 */
export type EventAudience = "public" | "members" | "invite";

/** Kind of night. Used for the small playbill label, not for color coding. */
export type EventKind = "ball" | "parade" | "social" | "service" | "recruiting";

/**
 * How sure we are of the day.
 * confirmed = a real calendar day the board or the city has published.
 * month = we know the month, not the day.
 * window = a range such as "May through September."
 */
export type DateCertainty = "confirmed" | "month" | "window";

export type KreweEvent = {
  id: string;
  title: string;
  /** Sentence a guest can read. Do not invent a clock time here. */
  whenLabel: string;
  /**
   * First calendar day this event occupies, as YYYY-MM-DD in Tampa time.
   * Use the first of the month when the day is still unknown.
   */
  start: string;
  /** Last calendar day if this is a window. Leave blank for a single night. */
  end?: string;
  timeLabel?: string;
  where: string;
  audience: EventAudience;
  kind: EventKind;
  certainty: DateCertainty;
  /** Internal page to open. Leave blank for city parades with no house page. */
  to?: string;
  /** Shown on the home season list. Keep this list short. */
  onHome?: boolean;
  notes?: string;
};

/**
 * Source of truth for The Playbill page and the home list.
 * Update this file. Do not type dates into page components.
 * Board meetings stay off this list until Stage Door opens.
 */
export const events: KreweEvent[] = [
  {
    id: "silver-soiree-2026",
    title: "The Silver Soir\u00e9e",
    whenLabel: "Saturday, 14 November 2026",
    start: "2026-11-14",
    timeLabel: "Evening. Doors and dinner time still with the ball chair.",
    where: "Carrollwood Country Club, Tampa",
    audience: "invite",
    kind: "ball",
    certainty: "confirmed",
    to: "/soiree",
    onHome: true,
    notes:
      "Silver-season opening night. Interest form is live. Paid tickets wait for the treasurer's processor.",
  },
  {
    id: "fall-book-club-2026",
    title: "Fall Book Club",
    whenLabel: "November 2026",
    start: "2026-11-01",
    where: "A seasonal gathering of the krewe. House and host still unset.",
    audience: "members",
    kind: "social",
    certainty: "month",
    to: "/fellowship",
    onHome: true,
    notes: "Ask the fellowship chair for the title, host, and whether guests may come.",
  },
  {
    id: "childrens-gasparilla-2027",
    title: "Ashley Children's Gasparilla",
    whenLabel: "Saturday, 23 January 2027",
    start: "2027-01-23",
    where: "Tampa. City children's parade route.",
    audience: "public",
    kind: "parade",
    certainty: "confirmed",
    to: "/heritage",
    notes:
      "City date from Ye Mystic Krewe of Gasparilla and the City of Tampa. Confirm whether Les Belles Femmes rolls this year before treating it as a house call time.",
  },
  {
    id: "gasparilla-pirate-fest-2027",
    title: "Gasparilla Pirate Fest",
    whenLabel: "Saturday, 30 January 2027",
    start: "2027-01-30",
    where: "Bayshore Boulevard, Tampa",
    audience: "public",
    kind: "parade",
    certainty: "confirmed",
    to: "/heritage",
    onHome: true,
    notes:
      "City Parade of Pirates date. Invasion brunch and float call time are separate and still need the float captain.",
  },
  {
    id: "sant-yago-2027",
    title: "Sant' Yago Illuminated Knight Parade",
    whenLabel: "February 2027",
    start: "2027-02-01",
    where: "Seventh Avenue, Ybor City",
    audience: "public",
    kind: "parade",
    certainty: "month",
    to: "/heritage",
    onHome: true,
    notes:
      "Usually the Saturday about two weeks after Gasparilla. The 2027 night is not posted on the Knights of Sant' Yago site yet. Do not invent a day.",
  },
  {
    id: "membership-window-2027",
    title: "Casting season opens",
    whenLabel: "May 2027",
    start: "2027-05-01",
    end: "2027-09-30",
    where: "Inquiry through this site. Recruitment socials May through September.",
    audience: "public",
    kind: "recruiting",
    certainty: "window",
    to: "/apply",
    notes:
      "Month taken from the Inter Krewe Council public profile. Confirm with the membership chair before printing it on paper invitations.",
  },
];

/** Home page still wants a short list. Built from events marked onHome. */
export const season = events
  .filter((event) => event.onHome)
  .map((event) => ({
    when: event.whenLabel,
    title: event.title,
    where: event.where,
    to: event.to ?? "/calendar",
  }));

export const links = {
  facebook: "https://www.facebook.com/KreweLBF",
  shop: "https://krewe-of-les-belles-femmes.square.site",
  mailing: "c/o Arena Law Firm, 1005 N Marion St., Tampa, FL 33602",
};
