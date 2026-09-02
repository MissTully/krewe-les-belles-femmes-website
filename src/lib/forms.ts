const APPLY_KEY = "lbf-apply-inquiry";
const SOIREE_KEY = "lbf-soiree-interest";

export type ApplyInquiry = {
  name: string;
  email: string;
  how: string;
  note: string;
  savedAt: string;
};

export type SoireeInterest = {
  name: string;
  email: string;
  party: string;
  savedAt: string;
};

function read<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function write(key: string, value: unknown) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getApplyInquiry() {
  return read<ApplyInquiry>(APPLY_KEY);
}

export function saveApplyInquiry(data: Omit<ApplyInquiry, "savedAt">) {
  write(APPLY_KEY, { ...data, savedAt: new Date().toISOString() });
}

export function getSoireeInterest() {
  return read<SoireeInterest>(SOIREE_KEY);
}

export function saveSoireeInterest(data: Omit<SoireeInterest, "savedAt">) {
  write(SOIREE_KEY, { ...data, savedAt: new Date().toISOString() });
}
