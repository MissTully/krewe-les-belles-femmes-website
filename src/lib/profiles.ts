// Shared types and small helpers for member profiles.
// Keep this file safe for the browser. Database work lives in profile-actions.ts.

export const PROFILE_ROLES = ["Belle", "Les Beaux", "Friend of the Krewe"] as const;

export type ProfileRole = (typeof PROFILE_ROLES)[number];

export type PublicProfile = {
  id: string;
  preferredName: string;
  role: ProfileRole;
  yearJoined: string;
  city: string;
  bio: string;
  // A compressed JPEG data URL, or empty when the member skipped a photo.
  photoDataUrl: string;
  updatedAt: string;
};

export type ProfileDraft = {
  preferredName: string;
  role: ProfileRole;
  yearJoined: string;
  city: string;
  bio: string;
  photoDataUrl: string;
  email: string;
  editCode: string;
};

export const PROFILE_LIMITS = {
  name: 80,
  city: 80,
  year: 4,
  bio: 500,
  // Keep photos small so they can live with the profile.
  photoBytes: 180000,
};

const LOCAL_KEY = "lbf-member-profiles";

export function emptyDraft(): ProfileDraft {
  return {
    preferredName: "",
    role: "Belle",
    yearJoined: "",
    city: "",
    bio: "",
    photoDataUrl: "",
    email: "",
    editCode: "",
  };
}

export function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "LBF";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function readLocalProfiles(): PublicProfile[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(LOCAL_KEY);
    const parsed = raw ? (JSON.parse(raw) as PublicProfile[]) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function writeLocalProfile(profile: PublicProfile) {
  const next = readLocalProfiles().filter((item) => item.id !== profile.id);
  next.unshift(profile);
  window.localStorage.setItem(LOCAL_KEY, JSON.stringify(next));
}

export function mergeProfiles(server: PublicProfile[], local: PublicProfile[]) {
  const byId = new Map<string, PublicProfile>();
  for (const profile of [...local, ...server]) {
    byId.set(profile.id, profile);
  }
  return [...byId.values()].sort((a, b) => a.preferredName.localeCompare(b.preferredName));
}

/**
 * Shrink a chosen photo so it can travel with the profile.
 * Steps a beginner often misses: wait for the image to load, draw to a canvas,
 * then export JPEG (not the original iPhone HEIC or a 4 megabyte PNG).
 */
export function compressPhoto(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) {
      reject(new Error("Please choose a photograph (JPEG or PNG)."));
      return;
    }
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Could not read that file."));
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const maxSide = 480;
        const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
        const width = Math.max(1, Math.round(image.width * scale));
        const height = Math.max(1, Math.round(image.height * scale));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("This browser cannot resize photos."));
          return;
        }
        ctx.drawImage(image, 0, 0, width, height);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.72);
        if (dataUrl.length > PROFILE_LIMITS.photoBytes) {
          reject(new Error("That photo is still too large. Try a closer crop or a smaller file."));
          return;
        }
        resolve(dataUrl);
      };
      image.onerror = () => reject(new Error("That file did not open as a picture."));
      image.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  });
}
