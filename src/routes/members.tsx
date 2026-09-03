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
  const [status, setStatus] = useState("Loading the circle…");

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
        kicker="The Circle"
        title="Meet the house"
        lede="A quiet directory for Belles and Les Beaux to share a face and a few sentences. Not a public yearbook. Not the Stage Door login yet."
      />

      <div className="wrap mt-8 flex flex-wrap items-center gap-3">
        <Ticket to="/members/edit" variant="wine">
          Create my card
        </Ticket>
        <p className="m-0 max-w-xl text-sm text-muted">
          Email stays off the card. You keep an edit code so you can change the photo or the note later.
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
