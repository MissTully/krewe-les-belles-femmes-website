/**
 * Calling cards for The Company page.
 * Every name here is fictional sample voice. Do not treat a handle, office,
 * or year as krewe record. Replace a card only after the woman (or Beau)
 * asks for it and names the social accounts she wants public.
 *
 * No photographs. Initials only. Generated faces stay off this site.
 */

export type SocialKind =
  | "instagram"
  | "facebook"
  | "threads"
  | "tiktok"
  | "linkedin"
  | "website";

export type MemberRole = "belle" | "beau" | "officer";

export type SocialLink = {
  kind: SocialKind;
  /** Username without @, or a full https address. */
  handle: string;
};

export type CallingCard = {
  id: string;
  name: string;
  role: MemberRole;
  /** Short office if she holds one. Leave blank for a rider. */
  office?: string;
  /** Year she joined, or "First season". */
  seasonJoined?: string;
  /** One sentence a sister can remember. */
  line: string;
  /** One of the house lines already on the dressing-room mirror. */
  houseLine?: string;
  socials: SocialLink[];
};

export const socialLabels: Record<SocialKind, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  threads: "Threads",
  tiktok: "TikTok",
  linkedin: "LinkedIn",
  website: "Website",
};

/** How a guest should read the role on the playbill. */
export function roleLabel(role: MemberRole) {
  if (role === "beau") return "Les Beaux";
  if (role === "officer") return "Officer";
  return "Belle";
}

/** Two-letter monogram. No portrait. */
export function monogram(name: string) {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return "LB";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function stripAt(handle: string) {
  return handle.trim().replace(/^@/, "");
}

/**
 * Turn a typed handle into a URL the browser can open.
 * If the woman already pasted a full address, keep it.
 */
export function socialUrl(link: SocialLink) {
  const raw = stripAt(link.handle);
  if (!raw) return "";
  if (/^https?:\/\//i.test(raw)) return raw;

  if (link.kind === "instagram") return `https://instagram.com/${raw}`;
  if (link.kind === "facebook") return `https://facebook.com/${raw}`;
  if (link.kind === "threads") return `https://www.threads.net/@${raw}`;
  if (link.kind === "tiktok") return `https://www.tiktok.com/@${raw}`;
  if (link.kind === "linkedin") return `https://www.linkedin.com/in/${raw}`;
  if (raw.includes(".")) return `https://${raw}`;
  return "";
}

export function socialDisplay(link: SocialLink) {
  const raw = stripAt(link.handle);
  if (/^https?:\/\//i.test(raw)) {
    try {
      return new URL(raw).hostname.replace(/^www\./, "");
    } catch {
      return raw;
    }
  }
  return raw.startsWith("@") ? raw : `@${raw}`;
}

/** Sample company for the public playbill. Handles are invented. */
export const company: CallingCard[] = [
  {
    id: "ada-fontaine",
    name: "Ada Fontaine",
    role: "officer",
    office: "Book club chair",
    seasonJoined: "2009",
    line: "She will lend you the novel and the extra gloves.",
    houseLine: "Be generous.",
    socials: [
      { kind: "instagram", handle: "ada.reads.bellwether" },
      { kind: "facebook", handle: "AdaFontaineBooks" },
    ],
  },
  {
    id: "maris-cole",
    name: "Maris Cole",
    role: "officer",
    office: "Costume table",
    seasonJoined: "2011",
    line: "A tablecloth becomes a skirt if you give her an evening.",
    houseLine: "Wear the outfit.",
    socials: [
      { kind: "instagram", handle: "maris.makes" },
      { kind: "tiktok", handle: "mariscole.stitches" },
    ],
  },
  {
    id: "june-waverly",
    name: "June Waverly",
    role: "belle",
    office: "Dance floor",
    seasonJoined: "2016",
    line: "First on the floor, last to surrender the boa.",
    houseLine: "Laugh loudly.",
    socials: [
      { kind: "instagram", handle: "june.waverly.nights" },
      { kind: "threads", handle: "junewaverly" },
    ],
  },
  {
    id: "cleo-march",
    name: "Cleo March",
    role: "officer",
    office: "Captain of Mabel the Moon",
    seasonJoined: "2007",
    line: "She holds the float call and will not invent the hour on a website.",
    houseLine: "Dream big.",
    socials: [{ kind: "facebook", handle: "CleoMarchBellwether" }],
  },
  {
    id: "nora-bell",
    name: "Nora Bell",
    role: "belle",
    office: "First-year rider",
    seasonJoined: "First season",
    line: "She asked her manager in October. The corset still surprised her.",
    houseLine: "Buy the boots.",
    socials: [{ kind: "instagram", handle: "nora.bell.firstyear" }],
  },
  {
    id: "theo-vale",
    name: "Theo Vale",
    role: "beau",
    office: "Water and the extra bag",
    seasonJoined: "2018",
    line: "He does not become a Belle. He shows up on time.",
    houseLine: "Choose kindness.",
    socials: [{ kind: "linkedin", handle: "theo-vale-bellwether" }],
  },
];

const CARD_QUERY = "card";

function toBase64Url(value: string) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function fromBase64Url(value: string) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/");
  const pad = padded.length % 4 === 0 ? "" : "=".repeat(4 - (padded.length % 4));
  const binary = atob(padded + pad);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

/** Keep the shared payload small enough for a text message. */
function slimCard(card: CallingCard): CallingCard {
  return {
    id: card.id || `shared-${Date.now()}`,
    name: card.name.trim().slice(0, 80),
    role: card.role,
    office: card.office?.trim().slice(0, 60) || undefined,
    seasonJoined: card.seasonJoined?.trim().slice(0, 24) || undefined,
    line: card.line.trim().slice(0, 180),
    houseLine: card.houseLine?.trim().slice(0, 80) || undefined,
    socials: card.socials
      .filter((item) => item.handle.trim())
      .slice(0, 6)
      .map((item) => ({ kind: item.kind, handle: item.handle.trim().slice(0, 80) })),
  };
}

export function encodeCard(card: CallingCard) {
  return toBase64Url(JSON.stringify(slimCard(card)));
}

export function decodeCard(payload: string): CallingCard | null {
  try {
    const parsed = JSON.parse(fromBase64Url(payload)) as CallingCard;
    if (!parsed || typeof parsed.name !== "string" || !parsed.name.trim()) return null;
    if (!parsed.line || typeof parsed.line !== "string") return null;
    const role: MemberRole =
      parsed.role === "beau" || parsed.role === "officer" ? parsed.role : "belle";
    return slimCard({
      id: typeof parsed.id === "string" ? parsed.id : `shared-${Date.now()}`,
      name: parsed.name,
      role,
      office: parsed.office,
      seasonJoined: parsed.seasonJoined,
      line: parsed.line,
      houseLine: parsed.houseLine,
      socials: Array.isArray(parsed.socials) ? parsed.socials : [],
    });
  } catch {
    return null;
  }
}

export function cardSharePath(card: CallingCard) {
  return `/company?${CARD_QUERY}=${encodeCard(card)}`;
}

export function readSharedCard(search: string) {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  const payload = params.get(CARD_QUERY);
  if (!payload) return null;
  return decodeCard(payload);
}

export const emptyCard = (): CallingCard => ({
  id: "mine",
  name: "",
  role: "belle",
  office: "",
  seasonJoined: "",
  line: "",
  houseLine: "",
  socials: [
    { kind: "instagram", handle: "" },
    { kind: "facebook", handle: "" },
  ],
});
