import { createFileRoute } from "@tanstack/react-router";
import { ApplyForm } from "@/components/apply-form";
import { Crest } from "@/components/crest";
import { Ornament } from "@/components/ornament";
import { Ticket } from "@/components/ticket-link";
import { art, events, houseLines, krewe, links } from "@/lib/content";

export const Route = createFileRoute("/stage-door")({
  component: StageDoorPage,
});

function StageDoorPage() {
  return (
    <article className="pb-20 text-cream">
      <section className="relative isolate overflow-hidden">
        <img
          src={art.stageDoor}
          alt="An ornate Parisian stage door marked Les Belles Femmes, Stage Door."
          className="absolute inset-0 h-full w-full object-cover object-center opacity-55"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-velvet/40 via-velvet/55 to-velvet"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto flex min-h-[min(70vh,36rem)] w-min(62rem,calc(100%-2rem)) flex-col items-center justify-end px-4 pb-16 pt-24 text-center">
          <Crest size={96} decorative />
          <p className="kicker kicker-gold mt-5">Backstage</p>
          <h1 className="mt-2 font-display text-[clamp(3rem,8vw,5.8rem)] leading-[0.92] text-[#fff7e9]">
            Stage Door
          </h1>
          <p className="mt-4 max-w-xl font-display text-xl italic text-gold-soft">
            The show is sold out. The sisterhood is not.
          </p>
          <Ornament gold className="mx-auto mt-6" />
        </div>
      </section>

      <section className="wrap py-16">
        <p className="kicker kicker-gold">Tonight’s playbill</p>
        <h2 className="mt-3 title-section text-[#fff7e9]">
          The season, in five acts.
        </h2>
        <ol className="mt-10 grid list-none gap-0 p-0">
          {events.map((event, i) => (
            <li
              key={event.id}
              className="grid gap-1 border-t border-gold/35 py-6 md:grid-cols-[4rem_1fr_auto] md:items-baseline"
            >
              <span className="font-display text-2xl text-gold-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="m-0 font-display text-2xl text-[#fff7e9]">
                  {event.title}
                </p>
                <p className="m-0 mt-1 text-sm text-cream/65">{event.where}</p>
              </div>
              <p className="m-0 text-sm tracking-wide text-gold-soft">
                {event.whenLabel}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap grid items-start gap-12 pb-8 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="kicker kicker-gold">House philosophy</p>
          <ul className="mt-6 grid list-none gap-2 p-0">
            {houseLines.map((line) => (
              <li
                key={line}
                className="border-l-2 border-gold pl-4 font-display text-xl italic text-gold-soft"
              >
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Ticket href={links.shop} variant="gold">
              LBF shop
            </Ticket>
            <Ticket href={links.facebook} variant="ghost">
              Facebook
            </Ticket>
          </div>
        </div>
        <div className="border border-gold/40 bg-wine-deep/70 p-7 md:p-9">
          <ApplyForm
            heading="Leave a note at the stage door"
            lede="A hello, a membership inquiry, or a question for the board. Save it here, then send the email so it reaches us."
            subject="Stage door note: Les Belles Femmes"
            dark
          />
        </div>
      </section>

      <p className="wrap mt-10 text-center font-display text-xl italic text-gold-soft">
        {krewe.boardNote}
      </p>
    </article>
  );
}
