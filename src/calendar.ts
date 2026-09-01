import type { KreweEvent } from "./content";

/** Tampa sits in the America/New_York time zone, Eastern Time. */
export const TAMPA_TIME_ZONE = "America/New_York";

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** Split a YYYY-MM-DD string without using Date, so midnight UTC cannot shift the day. */
export function splitIsoDate(iso: string): { year: number; month: number; day: number } {
  const [year, month, day] = iso.split("-").map(Number);
  return { year, month, day };
}

export function monthKey(iso: string): string {
  return iso.slice(0, 7);
}

export function monthTitle(iso: string): string {
  const { year, month } = splitIsoDate(iso);
  return `${MONTH_NAMES[month - 1]} ${year}`;
}

/** Number of days in a month. Month is 1-12. */
export function daysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

/**
 * Weekday of the first of the month. 0 is Sunday, matching a US playbill calendar.
 * Date.UTC is safe here because we only ask for the weekday of a known civil date.
 */
export function firstWeekday(year: number, month: number): number {
  return new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
}

export function isSameDay(iso: string, year: number, month: number, day: number): boolean {
  const parts = splitIsoDate(iso);
  return parts.year === year && parts.month === month && parts.day === day;
}

/** True when a calendar cell falls on or inside the event's start/end window. */
export function eventTouchesDay(event: KreweEvent, year: number, month: number, day: number): boolean {
  if (event.certainty !== "confirmed") return false;
  const start = splitIsoDate(event.start);
  const end = event.end ? splitIsoDate(event.end) : start;
  const cell = year * 10000 + month * 100 + day;
  const from = start.year * 10000 + start.month * 100 + start.day;
  const to = end.year * 10000 + end.month * 100 + end.day;
  return cell >= from && cell <= to;
}

export function sortEvents(list: KreweEvent[]): KreweEvent[] {
  return [...list].sort((a, b) => {
    if (a.start !== b.start) return a.start.localeCompare(b.start);
    return a.title.localeCompare(b.title);
  });
}

export function eventsInMonth(list: KreweEvent[], year: number, month: number): KreweEvent[] {
  const key = `${year}-${String(month).padStart(2, "0")}`;
  return list.filter((event) => {
    const startKey = monthKey(event.start);
    const endKey = event.end ? monthKey(event.end) : startKey;
    return key >= startKey && key <= endKey;
  });
}

export function uniqueMonths(list: KreweEvent[]): string[] {
  const keys = new Set<string>();
  for (const event of list) {
    keys.add(monthKey(event.start));
    if (event.end) keys.add(monthKey(event.end));
  }
  return [...keys].sort();
}

export function kindLabel(kind: KreweEvent["kind"]): string {
  if (kind === "ball") return "Gala";
  if (kind === "parade") return "Street show";
  if (kind === "social") return "House night";
  if (kind === "service") return "Benefit";
  return "Casting";
}

export function audienceLabel(audience: KreweEvent["audience"]): string {
  if (audience === "public") return "Front of house";
  if (audience === "members") return "Members";
  return "House seats";
}

export function certaintyLabel(certainty: KreweEvent["certainty"]): string {
  if (certainty === "confirmed") return "Date locked";
  if (certainty === "month") return "Month only";
  return "Run of show";
}
