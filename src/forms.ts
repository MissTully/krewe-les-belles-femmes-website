const keys = {
  soiree: "lbf-soiree-interest",
  apply: "lbf-apply",
} as const;

export type SoireeInterest = {
  name: string;
  email: string;
  party: string;
  at: string;
};

export type ApplyInquiry = {
  name: string;
  email: string;
  sponsor: string;
  why: string;
  at: string;
};

function read<T>(key: string): T | null {
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

export function getSoireeInterest() {
  return read<SoireeInterest>(keys.soiree);
}

export function saveSoireeInterest(entry: Omit<SoireeInterest, "at">) {
  const saved: SoireeInterest = { ...entry, at: new Date().toISOString() };
  write(keys.soiree, saved);
  return saved;
}

export function getApplyInquiry() {
  return read<ApplyInquiry>(keys.apply);
}

export function saveApplyInquiry(entry: Omit<ApplyInquiry, "at">) {
  const saved: ApplyInquiry = { ...entry, at: new Date().toISOString() };
  write(keys.apply, saved);
  return saved;
}
