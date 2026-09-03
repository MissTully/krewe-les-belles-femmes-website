import { initials, type PublicProfile } from "@/lib/profiles";

export function ProfileCard({ profile }: { profile: PublicProfile }) {
  return (
    <article className="panel profile-card">
      {profile.photoDataUrl ? (
        <img src={profile.photoDataUrl} alt="" className="profile-card-photo" />
      ) : (
        <div className="profile-card-fallback" aria-hidden="true">
          {initials(profile.preferredName)}
        </div>
      )}
      <div className="profile-card-body">
        <p className="kicker">{profile.role}</p>
        <h3 className="mt-1 font-display text-3xl">{profile.preferredName}</h3>
        <p className="mt-1 text-sm text-muted">
          {[profile.city, profile.yearJoined ? `Joined ${profile.yearJoined}` : ""]
            .filter(Boolean)
            .join(" \u00b7 ") || "Les Belles Femmes"}
        </p>
        <p className="mt-4 text-sm leading-relaxed">{profile.bio}</p>
      </div>
    </article>
  );
}
