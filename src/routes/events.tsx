import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Ticket } from "@/components/ticket-link";
import {
  audienceLabel,
  certaintyLabel,
  events,
  kindLabel,
  type EventAudience,
  yearRhythm,
} from "@/lib/content";

export const Route = createFileRoute("/events")({ component: EventsPage });

const filters: { id: "all" | EventAudience; label: string }[] = [
  { id: "all", label: "All" },
  { id: "public", label: "Public" },
  { id: "members", label: "Members" },
  { id: "invite", label: "Invitation" },
];

function EventsPage() {
  const [audience, setAudience] = useState<"all" | EventAudience>("all");
  const visible = useMemo(
    () =>
      audience === "all"
        ? events
        : events.filter((event) => event.audience === audience),
    [audience],
  );

  return (
    <article className="pb-24">
      <PageHero
        kicker="The playbill"
        title="There’s always a reason to gather"
        lede="Galas, book clubs, parade season, and the recruitment mixers that turn guests into sisters. Confirmed dates sit beside honest windows; we never pretend a month is a Tuesday."
      />

      <section className="wrap mt-10">
        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter events by audience"
        >
          {filters.map((filter) => {
            const active = audience === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={active}
                className={`filter-chip ${active ? "filter-chip-on" : ""}`}
                onClick={() => setAudience(filter.id)}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 border-t border-gold/30">
          {visible.length === 0 ? (
            <p className="py-10 text-muted">
              Nothing on this part of the playbill just now.
            </p>
          ) : (
            visible.map((event) => (
              <article
                key={event.id}
                className="grid gap-2 border-b border-gold/30 py-7 md:grid-cols-[12rem_1fr_11rem] md:items-start md:gap-8"
              >
                <div>
                  <p className="kicker m-0">{event.whenLabel}</p>
                  <p className="mt-2 text-xs tracking-wide text-muted uppercase">
                    {certaintyLabel[event.certainty]}
                  </p>
                </div>
                <div>
                  {event.to ? (
                    <Link
                      to={event.to as "/"}
                      className="font-display text-3xl text-wine no-underline"
                    >
                      {event.title}
                    </Link>
                  ) : (
                    <h2 className="m-0 font-display text-3xl text-wine">
                      {event.title}
                    </h2>
                  )}
                  <p className="mt-2 text-sm text-muted">{event.where}</p>
                  {event.notes ? (
                    <p className="mt-3 max-w-xl text-sm leading-relaxed">
                      {event.notes}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  <span className="chip">{kindLabel[event.kind]}</span>
                  <span className="chip">{audienceLabel[event.audience]}</span>
                </div>
              </article>
            ))
          )}
        </div>
      </section>

      <section className="wrap mt-20">
        <p className="kicker">The year at a glance</p>
        <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,3.3rem)]">
          A rhythm, not a rigid calendar.
        </h2>
        <div className="mt-10 grid border-t border-gold/30 md:grid-cols-2">
          {yearRhythm.map((beat, i) => (
            <article
              key={beat.title}
              className={`border-gold/30 py-8 md:px-8 ${i % 2 === 0 ? "md:pl-0 md:border-r" : ""} ${i < 2 ? "border-b" : ""}`}
            >
              <p className="kicker">{beat.when}</p>
              <h3 className="mt-2 font-display text-2xl">{beat.title}</h3>
              <p className="mt-3 text-sm text-muted">{beat.note}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Ticket to="/soiree" variant="wine">
            Silver Soirée
          </Ticket>
          <Ticket to="/membership" variant="ink">
            Recruitment
          </Ticket>
        </div>
      </section>
    </article>
  );
}
