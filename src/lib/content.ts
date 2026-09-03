export const krewe = {
  name: "Les Belles Femmes",
  fullName: "Krewe of Les Belles Femmes",
  short: "LBF",
  city: "Tampa Bay",
  founded: 2002,
  motto: ["Truth", "Beauty", "Freedom", "Love"] as const,
  tagline: "Come find your people.",
  philosophy: "Wear the hat, add the sparkle, and choose kindness.",
  boardNote: "Dream big, laugh loudly, and never dull your sparkle.",
};

export const links = {
  facebook: "https://www.facebook.com/KreweLBF",
  shop: "https://krewe-of-les-belles-femmes.square.site/",
  email: "dkwmw@verizon.net",
  mailing: "c/o Arena Law Firm, 1005 N Marion St., Tampa, FL 33602",
};

export const art = {
  hero: "/photos/krewe-float.jpg",
  cover: "/art/ballroom.jpg",
  mark: "/art/lbf-mark.png",
  sunny: "/photos/krewe-sunny.jpg",
  poster: "/art/poster.jpg",
  dressing: "/art/dressing.jpg",
  parade: "/art/parade.jpg",
  giving: "/art/giving.jpg",
  gift: "/art/gift.png",
  beads: "/art/beads.jpg",
  windmill: "/art/windmill.jpg",
  soiree: "/art/soiree.jpg",
  soireeInvite: "/art/soiree-invite.jpg",
  silverStub: "/art/silver-stub.jpg",
  tickets: "/art/tickets.jpg",
  curtain: "/art/curtain.jpg",
  playbill: "/art/playbill.jpg",
  playbillOrnament: "/art/playbill-ornament.png",
  stageDoor: "/art/stage-door.jpg",
  stagePoster: "/art/stage-poster.jpg",
  tampaDusk: "/art/tampa-dusk.png",
  pinwheel: "/art/pinwheel.png",
  walking: "/art/walking.png",
  velvet: "/art/velvet.jpg",
  ornaments: "/art/ornaments.jpg",
  ladiesPainting: "/art/ladies-painting.png",
  tote: "/art/tote.jpg",
  tee: "/art/tee.jpg",
} as const;

export const nav = [
  { to: "/story", label: "Our Story" },
  { to: "/sisterhood", label: "Sisterhood" },
  { to: "/giving", label: "Giving Back" },
  { to: "/events", label: "Events" },
  { to: "/shop", label: "Shop" },
  { to: "/soiree", label: "Silver Soirée" },
  { to: "/membership", label: "Membership" },
] as const;

export const pillars = [
  {
    to: "/story",
    kicker: "Our Story",
    title: "Twenty-five years of sisterhood",
    copy: "Founded in 2002, Les Belles Femmes grew from a whispered idea over red wine into a Tampa Bay krewe with a signature float, a chosen family, and a motto that still holds.",
    image: art.hero,
    alt: "Les Belles Femmes gathered on the Eiffel Tower and Moulin Rouge float.",
  },
  {
    to: "/sisterhood",
    kicker: "Sisterhood",
    title: "Come find your people",
    copy: "Book clubs, socials, galas, and the friendships that make every gathering feel like coming home. A judgement-free zone where you can drop your armor and be cheered on for it.",
    image: art.sunny,
    alt: "Krewe members in Parisian cabaret costumes, smiling together before a parade.",
  },
  {
    to: "/giving",
    kicker: "Giving Back",
    title: "Beauty with purpose",
    copy: "Beyond the parties and parades, we stand shoulder-to-shoulder for Tampa organizations that matter — including The Spring, the Humane Society, Best Buddies, and the Pediatric Cancer Foundation.",
    image: art.gift,
    alt: "Gloved hands offering a small wrapped gift, drawn as a lithograph.",
  },
] as const;

export const yearRhythm = [
  {
    when: "Year-round",
    title: "Socials, book club & galas",
    note: "Seasonal mixers, passionate book discussions, themed balls, and the quiet Tuesday dinners that turn acquaintances into sisters.",
  },
  {
    when: "November 2026",
    title: "The Silver Soirée",
    note: "Saturday, November 14 at Carrollwood Country Club — a quarter-century of Truth, Beauty, Freedom, and Love.",
  },
  {
    when: "Parade season",
    title: "Gasparilla, Sant’ Yago & more",
    note: "Boots on, feathers up. The signature Eiffel Tower and Moulin Rouge windmill float rolls through Tampa’s great parades.",
  },
  {
    when: "May–September",
    title: "Recruitment season",
    note: "Prospective members come as guests of current members. Three socials, genuine conversation, and no stuffy interviews.",
  },
] as const;

export const houseLines = [
  "Wear the hat.",
  "Add the sparkle.",
  "Buy the boots.",
  "Dream big.",
  "Laugh loudly.",
  "Never dull your sparkle.",
  "Be generous.",
  "Choose kindness.",
  "Be unapologetically you.",
] as const;

export const reasons = [
  {
    kicker: "01",
    title: "Intellect meets play",
    copy: "We love a sharp conversation just as much as a great night out. Book clubs and socials filled with women who have big minds, bigger hearts, and stories worth staying late for.",
  },
  {
    kicker: "02",
    title: "The magic of the parade route",
    copy: "Nothing matches the rush of standing atop our Eiffel Tower and Moulin Rouge windmill float — tossing beads, feeling the music, and looking down the line to see your best friends smiling back.",
  },
  {
    kicker: "03",
    title: "A safe space to shine",
    copy: "Wear the hat, add the sparkle, and choose kindness. LBF is a judgement-free zone where you can drop your armor, be entirely yourself, and be cheered on for it.",
  },
  {
    kicker: "04",
    title: "Heartfelt giving",
    copy: "We care deeply about Tampa. Beyond the parties and parades, we stand shoulder-to-shoulder for organizations that make a real difference.",
  },
] as const;

export const stories = [
  {
    chapter: "Chapter One",
    title: "Finding my anchor",
    byline: "Claire, member since 2018",
    quote:
      "I walked in expecting polite small talk. Instead I found myself sitting cross-legged on a rug, laughing so hard my ribs ached. These women didn’t care about titles. They cared about me.",
    body: "I joined LBF during a season of my life when I felt like I was running on empty — balancing work, family, and everything in between. The first informal book club gathering reminded me how much fun it is to be alive. In LBF I didn’t just find a social group. I found women who celebrate my wins, hold my hand through hard days, and remind me to add a little extra sparkle to ordinary Tuesdays.",
  },
  {
    chapter: "Chapter Two",
    title: "The night the boulevard belonged to us",
    byline: "Elena, Parade Committee",
    quote:
      "Watching the neon lights reflect off our boots while the crowd cheered, I caught the eye of a new member standing next to me, her face completely lit up with joy. That moment is everything LBF is about.",
    body: "If you’ve ever watched the Sant’ Yago Knight Parade from the sidewalk, it’s magical. When you’re up on our float — velvet corset, feathered hat, closest friends on every side — it is electric. Stepping out of your comfort zone, embracing the pageantry, and realizing you are part of something magnificent, surrounded by women who adore you.",
  },
] as const;

export const timeline = [
  {
    years: "2002–2010",
    title: "The first roll",
    copy: "A small group of women looked at Tampa’s parade scene and wanted a sanctuary of sisterhood — a place where brilliant women could leave the boardroom, strap on a velvet corset, and laugh until their ribs ached. Founder Eleanor Vance still jokes about the first makeshift float: a modest trailer, paper roses, and sheer grit. Membership grew from a dozen dreamers to a tight-knit collective. Les Beaux, the male auxiliary, was established so the men who love and support the krewe could share the pageantry.",
  },
  {
    years: "2010–2018",
    title: "Book clubs, champagne, midnight epiphanies",
    copy: "LBF became a lifeline for women navigating the messy, beautiful middle chapters of life. Monthly gatherings grew legendary — including the “Great Austen Debate of 2014,” when a casual book club over French pastries became a wine-fueled backyard Pride and Prejudice. In the same era the krewe poured fierce compassion into Tampa: The Spring of Tampa Bay, the Humane Society, and the Pediatric Cancer Foundation.",
  },
  {
    years: "2018–2024",
    title: "The tower rises",
    copy: "Artistic ambitions scaled. The signature masterpiece arrived: a towering float with a miniature Eiffel Tower and a spinning Moulin Rouge windmill. Ybor at night, historic brick, the scent of roasting Cuban bread, boas catching the wind. Doctors, entrepreneurs, scientists, and creatives screaming old pop songs, arm-in-arm, as the windmill turned against the Florida stars. The clubhouse creed: Forget glass slippers. This princess wears boots.",
  },
  {
    years: "2026",
    title: "Silver Soirée and the next horizon",
    copy: "In November 2026, Les Belles Femmes marks a quarter century at Carrollwood Country Club. LBF is not defined by the corsets, the beads, or even the Eiffel Tower float. It is defined by 2 a.m. phone calls, fierce professional support, roaring laughter across crowded tables, and the belief that life should be celebrated with style, empathy, and an unshakeable squad of friends.",
  },
] as const;

export const paradeNotes = [
  {
    title: "The look",
    note: "Turn-of-the-century Parisian cabaret: corsets, fluffy ruffled skirts, boas, top hats, feathers, and boots. Theatrical, never costume-store kitsch — and always worn with joy.",
  },
  {
    title: "The float",
    note: "A miniature Eiffel Tower and a Moulin Rouge windmill, dressed in curtains, lights, and enough beads to make a boulevard glitter.",
  },
  {
    title: "The parades",
    note: "Gasparilla Pirate Fest, the Sant’ Yago Knight Parade in Ybor City, and Tampa holiday parades — with the sisterhood on every deck.",
  },
] as const;

export const partners = [
  {
    name: "The Spring of Tampa Bay",
    note: "Standing with survivors of domestic violence through fundraising and hands-on support.",
    href: "https://thespring.org/",
  },
  {
    name: "Humane Society of Tampa Bay",
    note: "A long friendship with the animals and people who need a little extra care.",
    href: "https://humanesocietytampabay.org/",
  },
  {
    name: "Pediatric Cancer Foundation",
    note: "Raising funds and spirits for families walking through the hardest seasons.",
    href: "https://www.gopf.org/",
  },
  {
    name: "Best Buddies International",
    note: "Friendship and inclusion for people with intellectual and developmental disabilities.",
    href: "https://www.bestbuddies.org/",
  },
] as const;

export const joiningSteps = [
  {
    step: "01",
    title: "Come as a guest",
    note: "Prospective members are invited to seasonal mixers and socials as guests of current members. Recruitment typically runs May through September.",
  },
  {
    step: "02",
    title: "Meet the sisterhood",
    note: "Attend at least three recruitment socials in the application year (prior parade guesting or security work can substitute). No stuffy interviews — genuine connection.",
  },
  {
    step: "03",
    title: "Reach out",
    note: "Send a note through this site, speak with a member at a community event, or write the membership chair. We keep the circle intimate so everyone is truly known.",
  },
] as const;

export const membershipFacts = [
  {
    label: "Sisterhood",
    value: "50–75 women",
    note: "Intentionally intimate so everyone is known, missed, and celebrated.",
  },
  {
    label: "Auxiliary",
    value: "Les Beaux",
    note: "The men who love and support the krewe share in pageantry and fellowship.",
  },
  {
    label: "Annual dues",
    value: "$450",
    note: "As listed with the Inter-Krewe Council. Confirm current figures with membership — costumes, beads, and events are additional.",
  },
  {
    label: "Season",
    value: "May–September",
    note: "New applications typically open in May. Three recruitment socials in the application year.",
  },
] as const;

export const membershipFaq = [
  {
    q: "Do I need a member to invite me?",
    a: "Yes — prospective members come as guests of current members. If you do not yet know someone in the krewe, send a note and we will help you find a first gathering.",
  },
  {
    q: "Is there an interview?",
    a: "No stuffy interviews. Come to at least three recruitment socials in the application year. Prior parade guesting or security work can substitute.",
  },
  {
    q: "What about Les Beaux?",
    a: "Les Beaux is the male auxiliary. The men who love and support the sisterhood share in the pageantry, the fellowship, and the work of showing up for Tampa.",
  },
  {
    q: "When does recruitment happen?",
    a: "Typically May through September. Come as a guest, meet the sisterhood, and see if the sparkle matches yours.",
  },
] as const;

export const soiree = {
  title: "Silver Soirée",
  dateLabel: "Saturday, November 14, 2026",
  date: "2026-11-14",
  venue: "Carrollwood Country Club",
  city: "Tampa, Florida",
  lede: "Celebrating over twenty-five years of Truth, Beauty, Freedom, and Love — a night of silver, feathers, and the women who made the legend.",
};

export const hearAbout = [
  "Guest of a current member",
  "Community event or parade",
  "Facebook",
  "Inter-Krewe Council",
  "A friend outside the krewe",
  "Other",
] as const;

export type EventAudience = "public" | "members" | "invite";
export type EventKind = "ball" | "parade" | "social" | "service" | "recruiting";
export type DateCertainty = "confirmed" | "month" | "window";

export type KreweEvent = {
  id: string;
  title: string;
  whenLabel: string;
  start: string;
  end?: string;
  where: string;
  audience: EventAudience;
  kind: EventKind;
  certainty: DateCertainty;
  to?: string;
  notes?: string;
};

export const events: KreweEvent[] = [
  {
    id: "silver-soiree-2026",
    title: "Silver Soirée",
    whenLabel: "Saturday, November 14, 2026",
    start: "2026-11-14",
    where: "Carrollwood Country Club",
    audience: "invite",
    kind: "ball",
    certainty: "confirmed",
    to: "/soiree",
    notes: "Celebrating over 25 years of Truth, Beauty, Freedom, and Love.",
  },
  {
    id: "fall-book-club-2026",
    title: "Fall Book Club",
    whenLabel: "November 2026",
    start: "2026-11-01",
    where: "Tampa Bay · members’ homes",
    audience: "members",
    kind: "social",
    certainty: "month",
    to: "/sisterhood",
    notes: "An informal seasonal gathering following the summer book club.",
  },
  {
    id: "gasparilla-2027",
    title: "Gasparilla Pirate Fest",
    whenLabel: "Late January 2027",
    start: "2027-01-24",
    where: "Tampa Bay",
    audience: "public",
    kind: "parade",
    certainty: "month",
    notes: "Exact 2027 roll date to be confirmed with the official festival calendar.",
  },
  {
    id: "sant-yago-2027",
    title: "Sant’ Yago Knight Parade",
    whenLabel: "Mid-February 2027",
    start: "2027-02-14",
    where: "Ybor City, Tampa",
    audience: "public",
    kind: "parade",
    certainty: "month",
    notes: "Ybor at night — historic brick, neon, and the windmill against the Florida sky.",
  },
  {
    id: "recruitment-2027",
    title: "Recruitment season",
    whenLabel: "May–September 2027",
    start: "2027-05-01",
    end: "2027-09-30",
    where: "Tampa Bay · seasonal mixers",
    audience: "public",
    kind: "recruiting",
    certainty: "window",
    to: "/membership",
    notes: "Come as a guest of a current member. Three socials, then a conversation about joining.",
  },
];

export const lesBeaux = {
  name: "Les Beaux",
  title: "The Les Beaux auxiliary",
  copy: "Les Belles Femmes is a women’s krewe with Les Beaux, its male auxiliary. The men who love and support the sisterhood share in the pageantry, the fellowship, and the work of showing up for Tampa.",
};

export const audienceLabel: Record<EventAudience, string> = {
  public: "Public",
  members: "Members",
  invite: "Invitation",
};

export const kindLabel: Record<EventKind, string> = {
  ball: "Gala",
  parade: "Parade",
  social: "Social",
  service: "Service",
  recruiting: "Recruiting",
};

export const certaintyLabel: Record<DateCertainty, string> = {
  confirmed: "Date confirmed",
  month: "Month window",
  window: "Seasonal window",
};

export function soireeIcsHref() {
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Les Belles Femmes//Silver Soiree 2026//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    "UID:silver-soiree-2026@lesbellesfemmes",
    "DTSTAMP:20260902T000000Z",
    "DTSTART;VALUE=DATE:20261114",
    "DTEND;VALUE=DATE:20261115",
    "SUMMARY:Les Belles Femmes Silver Soirée",
    "LOCATION:Carrollwood Country Club, Tampa, Florida",
    "DESCRIPTION:Celebrating over 25 years of Truth, Beauty, Freedom, and Love.",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`;
}

export function mailtoInquiry(subject: string, body: string) {
  return `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
