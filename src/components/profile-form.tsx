import { useState } from "react";
import { Ticket } from "@/components/ticket-link";
import { saveMemberProfile } from "@/lib/profile-actions";
import {
  PROFILE_LIMITS,
  PROFILE_ROLES,
  compressPhoto,
  emptyDraft,
  writeLocalProfile,
  type ProfileDraft,
  type PublicProfile,
} from "@/lib/profiles";

type Props = {
  onSaved?: (profile: PublicProfile) => void;
};

export function ProfileForm({ onSaved }: Props) {
  const [draft, setDraft] = useState<ProfileDraft>(emptyDraft);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState<PublicProfile | null>(null);

  function setField<K extends keyof ProfileDraft>(key: K, value: ProfileDraft[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  async function onPickPhoto(file: File | undefined) {
    if (!file) return;
    setError("");
    try {
      const photoDataUrl = await compressPhoto(file);
      setField("photoDataUrl", photoDataUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not use that photo.");
    }
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    setBusy(true);
    try {
      const profile = await saveMemberProfile({ data: draft });
      writeLocalProfile(profile);
      setSaved(profile);
      onSaved?.(profile);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save the profile.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit} noValidate>
      <label className="form-field">
        <span className="kicker">Name the circle should use</span>
        <input
          name="preferredName"
          autoComplete="nickname"
          value={draft.preferredName}
          maxLength={PROFILE_LIMITS.name}
          onChange={(event) => setField("preferredName", event.target.value)}
          required
        />
      </label>

      <label className="form-field">
        <span className="kicker">I am a</span>
        <select
          name="role"
          value={draft.role}
          onChange={(event) => setField("role", event.target.value as ProfileDraft["role"])}
        >
          {PROFILE_ROLES.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="form-field">
          <span className="kicker">Year joined</span>
          <input
            name="yearJoined"
            inputMode="numeric"
            placeholder="2019"
            value={draft.yearJoined}
            maxLength={PROFILE_LIMITS.year}
            onChange={(event) => setField("yearJoined", event.target.value.replace(/\D/g, ""))}
          />
        </label>
        <label className="form-field">
          <span className="kicker">City</span>
          <input
            name="city"
            autoComplete="address-level2"
            placeholder="Tampa"
            value={draft.city}
            maxLength={PROFILE_LIMITS.city}
            onChange={(event) => setField("city", event.target.value)}
          />
        </label>
      </div>

      <label className="form-field">
        <span className="kicker">A little about you</span>
        <textarea
          name="bio"
          maxLength={PROFILE_LIMITS.bio}
          value={draft.bio}
          onChange={(event) => setField("bio", event.target.value)}
          placeholder="Book club addict. Still looking for the perfect boots. Always first in line for beads."
          required
        />
        <span className="text-xs text-muted">{draft.bio.length} / {PROFILE_LIMITS.bio}</span>
      </label>

      <label className="form-field">
        <span className="kicker">Photograph</span>
        <input
          name="photo"
          type="file"
          accept="image/*"
          onChange={(event) => void onPickPhoto(event.target.files?.[0])}
        />
      </label>

      {draft.photoDataUrl ? (
        <div className="flex items-center gap-4">
          <img src={draft.photoDataUrl} alt="Your profile preview" className="profile-avatar" />
          <button type="button" className="text-sm underline-offset-4 hover:underline" onClick={() => setField("photoDataUrl", "")}>
            Remove photo
          </button>
        </div>
      ) : (
        <p className="m-0 text-sm text-muted">Optional. We shrink the file in the browser so it can live with the profile.</p>
      )}

      <label className="form-field">
        <span className="kicker">Email (not shown on the card)</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          value={draft.email}
          onChange={(event) => setField("email", event.target.value)}
          required
        />
      </label>

      <label className="form-field">
        <span className="kicker">Edit code</span>
        <input
          name="editCode"
          type="password"
          autoComplete="new-password"
          value={draft.editCode}
          onChange={(event) => setField("editCode", event.target.value)}
          required
        />
        <span className="text-xs text-muted">
          Four or more characters. Use the same code later to change this card. This is not a full member login yet.
        </span>
      </label>

      {error ? (
        <p className="m-0 text-sm text-cabaret" role="alert">
          {error}
        </p>
      ) : null}

      {saved ? (
        <div className="banner-ok" role="status">
          Saved, {saved.preferredName.split(" ")[0]}. The circle can see your card on The Circle page.
        </div>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <Ticket type="submit" variant="wine">
          {busy ? "Saving\u2026" : saved ? "Update profile" : "Publish my card"}
        </Ticket>
        <Ticket to="/members" variant="ink">
          See the circle
        </Ticket>
      </div>
    </form>
  );
}
