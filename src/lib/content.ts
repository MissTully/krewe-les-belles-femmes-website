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
