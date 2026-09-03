import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { ProfileCard } from "@/components/profile-card";
import { Ticket } from "@/components/ticket-link";
import { listMemberProfiles } from "@/lib/profile-actions";
import { mergeProfiles, readLocalProfiles, type PublicProfile } from "@/lib/profiles";
import "@/styles/profiles.css";

export const Route = createFileRoute("/members")({ component: MembersPage });

function MembersPage() {
  const [profiles, setProfiles] = useState<PublicProfile[]>([]);
  const [status, setStatus] = useState("Loading the cards\u2026");

  useEffect(() => {
    let cancelled = false;
    listMemberProfiles()
      .then((server) => {
        if (cancelled) return;
        setProfiles(mergeProfiles(server, readLocalProfiles()));
        setStatus("");
      })
      .catch(() => {
        if (cancelled) return;
        const local = readLocalProfiles();
        setProfiles(local);
        setStatus(
          local.length
            ? "Showing cards saved on this device. The shared house database was not reachable."
            : "No cards yet. Create yours. If the shared database is offline, it will stay on this device until hosting is connected.",
        );
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <article className="pb-24">
      <PageHero
        kicker="Comp cards"
        title="Put a face to the circle"
        lede="A photograph, a name, and a few lines — so sisters can recognize one another on the boulevard and around the table."
      />

      <div className="wrap mt-8 flex flex-wrap items-center gap-3">
        <Ticket to="/members/edit" variant="wine">
          Make my card
        </Ticket>
        <p className="m-0 max-w-xl text-sm text-muted">
          Email stays off the card. Keep an edit code so you can change the photograph or the lines later.
        </p>
      </div>

      {status ? (
        <p className="wrap mt-8 text-sm text-muted" role="status">
          {status}
        </p>
      ) : null}

      {profiles.length > 0 ? (
        <section className="wrap mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </section>
      ) : null}
    </article>
  );
}
