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
    copy: "Beyond the parties and parades, we stand shoulder-to-shoulder for Tampa organizations that matter — from The Spring and the Pediatric Cancer Foundation to children’s hospital visits with the ReliaQuest Bowl.",
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
    copy: "Susan King wanted to start a new krewe and was advised to do something other than pirates. So she worked with her daughter Erin Martin West and a circle of friends to design costumes inspired by the Moulin Rouge — the real Parisian cabaret behind the movie — and, ooh la la, Les Belles Femmes was born in Tampa in 2002. Founding members Pat Smith and Nora Lee Smith stood beside them; Raymond King served as the krewe’s first and only King, the seed of the Les Beaux male auxiliary; and Ellen Arena became the very first recruit. In 2004 the krewe held its first charity event at the Tampa Museum — sponsored by Mumm Cordon Rouge Champagne — beside touring lithographs by Toulouse-Lautrec, the artist who lived above the Moulin Rouge and first put its dancers on a poster.",
  },
  {
    years: "The middle chapters",
    title: "Showing up, in costume",
    copy: "The krewe became a fixture of Tampa Bay giving. For years with the Pediatric Cancer Foundation’s “Fashion Funds a Cure,” members chauffeured moms and children to the Day of Pampering, helped them pick outfits for the show, and assisted with “Cuts for a Cure” and the gala dinner. They entertained crews and viewers at ABC’s Extreme Home Makeover build on Davis Island, cheered kids at the Steve Yerrid Foundation Kid’s Fishing Derby hosted by Hall of Famer Wade Boggs at the Vinoy Basin, and rode in the Children’s Parade after the Bonefish Grill–sponsored luncheon that dressed the moms in LBF outfits and beads. Concert 4 Kidz cancer research benefits rounded out the era.",
  },
  {
    years: "2018–2024",
    title: "The tower rises",
    copy: "Artistic ambitions scaled. The signature masterpiece arrived: “The Tampa Bay Moulin Rouge,” a towering float with a miniature Eiffel Tower and a spinning windmill. Ybor at night, historic brick, boas catching the wind — and the giving kept pace: NFL Alumni tournaments, the ReliaQuest Bowl’s Ybor New Year’s Eve parade and children’s hospital visits, Chow Down for Ryan’s Animal Rescue Foundation, and Handbags & Happy Hour for The Spring. The clubhouse creed: Forget glass slippers. This princess wears boots.",
  },
  {
    years: "2026",
    title: "Silver Soirée and the next horizon",
    copy: "In November 2026, Les Belles Femmes marks a quarter century at Carrollwood Country Club, with Her Royal Highness Jennifer Silence Rankin reigning as Queen. LBF is not defined by the corsets, the beads, or even the Eiffel Tower float. It is defined by 2 a.m. phone calls, fierce professional support, roaring laughter across crowded tables, and the belief that life should be celebrated with style, empathy, and an unshakeable squad of friends.",
  },
] as const;

export const paradeNotes = [
  {
    title: "The look",
    note: "Individual creativity is encouraged, but the standards hold: a black top hat or fancy fascinator, boned corset, dance skirt above the knee, feather boas, black boots — and lots and lots of bling.",
  },
  {
    title: "The float",
    note: "“The Tampa Bay Moulin Rouge” — a miniature Eiffel Tower and a turning windmill, dressed in curtains, lights, and enough beads to make a boulevard glitter.",
  },
  {
    title: "The parades",
    note: "Gasparilla Pirate Fest, the Sant’ Yago Knight Parade in Ybor City, and Tampa holiday parades — with the sisterhood on every deck.",
  },
] as const;

export const partners = [
  {
    name: "The Spring of Tampa Bay",
    note: "Standing with survivors of domestic violence — participating and donating at the annual Handbags & Happy Hour at the Bryan Glazer Family JCC, plus clothing drives.",
    href: "https://thespring.org/",
  },
  {
    name: "Pediatric Cancer Foundation",
    note: "Years alongside “Fashion Funds a Cure” — chauffeuring moms and children to the Day of Pampering, assisting “Cuts for a Cure,” and supporting the gala dinner.",
    href: "https://www.gopf.org/",
  },
  {
    name: "ReliaQuest Bowl",
    note: "A 501(c)(3) that gives millions back to Tampa Bay. LBF was among the first krewes in its Ybor New Year’s Eve parade and joins hospital visits to bring beads to children.",
    href: "https://www.reliaquestbowl.com/",
  },
  {
    name: "Ryan’s Animal Rescue Foundation",
    note: "Founded by Buccaneers alumnus Logan Ryan and his wife Ashley — LBF raised funds and joined Tampa’s first Chow Down event.",
    href: "https://www.rarf.org/",
  },
] as const;

export const givingMoments = [
  {
    title: "ABC’s Extreme Home Makeover",
    note: "Invited to entertain viewers and construction crews during the Davis Island remodel — and recorded a “Welcome Home!” video for the owners.",
  },
  {
    title: "Steve Yerrid Foundation Kid’s Fishing Derby",
    note: "Hosted by Hall of Fame baseball player Wade Boggs at the Vinoy Basin, where children with cancer and their families learn to fish and lunch with tournament celebrities.",
  },
  {
    title: "Children’s Parade luncheon",
    note: "Sponsored by Bonefish Grill for many years — moms dressed in LBF outfits, beads in hand, before rolling in the Children’s Parade together.",
  },
  {
    title: "NFL Alumni Association, Tampa Bay Chapter",
    note: "Lee Roy Selmon’s bowling tournament, the annual Super Bowl of Golf supporting Caring for Children and Women of Color Golf, and NFL Vets & Corvettes honoring military veterans.",
  },
  {
    title: "Concert 4 Kidz",
    note: "Years of participation in this cancer research charity’s events.",
  },
  {
    title: "Broken for Better",
    note: "Kurt and Denette Schaer’s marriage-coaching nonprofit — the silent auction recipient at the 2023 annual ball.",
  },
  {
    title: "Clothing & school drives",
    note: "Recruiting parties and the annual Krewe Ball collect for Dream a Dress, Dress for Success, homecoming and prom dresses for local high schools, and school supplies for A Kids Place.",
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
    note: "Lively ladies from their 20s through their 70s — professional working and retired women, intentionally intimate so everyone is known.",
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
    notes:
      "Exact 2027 roll date to be confirmed with the official festival calendar.",
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
    notes:
      "Ybor at night — historic brick, neon, and the windmill against the Florida sky.",
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
    to: "/sisterhood",
    notes:
      "Come as a guest of a current member. Three socials, then a conversation about joining.",
  },
];

export const lesBeaux = {
  name: "Les Beaux",
  title: "The Les Beaux auxiliary",
  copy: "Les Belles Femmes is a women’s krewe with Les Beaux, its male auxiliary. The men who love and support the sisterhood share in the pageantry, the fellowship, and the work of showing up for Tampa. Founding member Raymond King served as the krewe’s first — and only — King.",
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
