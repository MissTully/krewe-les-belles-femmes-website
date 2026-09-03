// Server functions for The Circle.
// These run on the server (or in the preview database). Do not call getSql()
// from a React component. Always go through these functions.
import { createHash, randomUUID } from "node:crypto";
import { createServerFn } from "@tanstack/react-start";
import { getSql } from "@/lib/db";
import {
  PROFILE_LIMITS,
  PROFILE_ROLES,
  type ProfileDraft,
  type ProfileRole,
  type PublicProfile,
} from "@/lib/profiles";

type ProfileRow = {
  id: string;
  email: string;
  edit_code_hash: string;
  preferred_name: string;
  role: string;
  year_joined: string | null;
  city: string | null;
  bio: string;
  photo_data_url: string | null;
  updated_at: string;
};

function hashEditCode(email: string, code: string) {
  return createHash("sha256")
    .update(`${email.trim().toLowerCase()}::${code.trim()}`)
    .digest("hex");
}

function isRole(value: string): value is ProfileRole {
  return (PROFILE_ROLES as readonly string[]).includes(value);
}

function toPublic(row: ProfileRow): PublicProfile {
  return {
    id: row.id,
    preferredName: row.preferred_name,
    role: isRole(row.role) ? row.role : "Belle",
    yearJoined: row.year_joined ?? "",
    city: row.city ?? "",
    bio: row.bio,
    photoDataUrl: row.photo_data_url ?? "",
    updatedAt: row.updated_at,
  };
}

function cleanDraft(input: ProfileDraft) {
  const preferredName = input.preferredName.trim();
  const email = input.email.trim().toLowerCase();
  const editCode = input.editCode.trim();
  const bio = input.bio.trim();
  const role = input.role;
  const yearJoined = input.yearJoined.trim().slice(0, PROFILE_LIMITS.year);
  const city = input.city.trim().slice(0, PROFILE_LIMITS.city);
  const photoDataUrl = input.photoDataUrl.startsWith("data:image/")
    ? input.photoDataUrl
    : "";

  if (preferredName.length < 2) throw new Error("Please share the name sisters should use.");
  if (!isRole(role)) throw new Error("Choose Belle, Les Beaux, or Friend of the Krewe.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Please share a valid email.");
  if (editCode.length < 4) throw new Error("Choose an edit code of at least four characters.");
  if (bio.length < 12) throw new Error("Tell the circle a little more about yourself.");
  if (bio.length > PROFILE_LIMITS.bio) throw new Error("Please keep the note under 500 characters.");
  if (photoDataUrl.length > PROFILE_LIMITS.photoBytes) {
    throw new Error("That photo is too large. Choose a smaller picture.");
  }

  return { preferredName, email, editCode, bio, role, yearJoined, city, photoDataUrl };
}

export const listMemberProfiles = createServerFn({ method: "GET" }).handler(async () => {
  const sql = await getSql();
  const rows = await sql<ProfileRow>`
    select id, email, edit_code_hash, preferred_name, role, year_joined, city, bio, photo_data_url, updated_at
    from member_profiles
    order by preferred_name asc
  `;
  return rows.map(toPublic);
});

export const saveMemberProfile = createServerFn({ method: "POST" })
  .validator((input: unknown) => input as ProfileDraft)
  .handler(async ({ data }) => {
    const draft = cleanDraft(data);
    const sql = await getSql();
    const existing = await sql<ProfileRow>`
      select id, email, edit_code_hash, preferred_name, role, year_joined, city, bio, photo_data_url, updated_at
      from member_profiles
      where email = ${draft.email}
      limit 1
    `;

    const codeHash = hashEditCode(draft.email, draft.editCode);

    if (existing[0]) {
      if (existing[0].edit_code_hash !== codeHash) {
        throw new Error("That email already has a profile. Use the same edit code to update it.");
      }
      const updated = await sql<ProfileRow>`
        update member_profiles
        set preferred_name = ${draft.preferredName},
            role = ${draft.role},
            year_joined = ${draft.yearJoined || null},
            city = ${draft.city || null},
            bio = ${draft.bio},
            photo_data_url = ${draft.photoDataUrl || null},
            updated_at = now()
        where email = ${draft.email}
        returning id, email, edit_code_hash, preferred_name, role, year_joined, city, bio, photo_data_url, updated_at
      `;
      return toPublic(updated[0]);
    }

    const id = randomUUID();
    const inserted = await sql<ProfileRow>`
      insert into member_profiles (
        id, email, edit_code_hash, preferred_name, role, year_joined, city, bio, photo_data_url
      ) values (
        ${id}, ${draft.email}, ${codeHash}, ${draft.preferredName}, ${draft.role},
        ${draft.yearJoined || null}, ${draft.city || null}, ${draft.bio}, ${draft.photoDataUrl || null}
      )
      returning id, email, edit_code_hash, preferred_name, role, year_joined, city, bio, photo_data_url, updated_at
    `;
    return toPublic(inserted[0]);
  });
