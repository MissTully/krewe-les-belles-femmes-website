import { createFileRoute } from "@tanstack/react-router";
import { Ornament } from "@/components/ornament";
import { SoireeForm } from "@/components/soiree-form";
import { Ticket } from "@/components/ticket-link";
import { art, krewe, soiree, soireeIcsHref } from "@/lib/content";

export const Route = createFileRoute("/soiree")({ component: SoireePage });

function SoireePage() {
  return (
    <article className="pb-24">
      <section className="relative isolate overflow-hidden bg-wine text-cream">
        <img
          src={art.soiree}
          alt="Silver anniversary invitation with a windmill, champagne, and a Parisian skyline."
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-wine-deep/55 via-wine/70 to-wine-deep" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex min-h-[min(72vh,38rem)] w-min(62rem,calc(100%-2rem)) flex-col items-center justify-center px-4 py-24 text-center">
          <p className="kicker kicker-gold">Save the date</p>
          <h1 className="mt-3 font-display text-[clamp(3.2rem,9vw,6.4rem)] leading-[0.92] text-[#fff7e9]">
            {soiree.title}
          </h1>
          <p className="mt-4 font-display text-[clamp(1.4rem,3vw,2.1rem)] italic text-gold-soft">{soiree.dateLabel}</p>
          <p className="mt-1 text-sm tracking-[0.18em] text-cream/80 uppercase">{soiree.venue}</p>
          <Ornament gold className="mx-auto mt-6" />
          <p className="motto-row mt-5 text-gold-soft">
            {krewe.motto.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={soireeIcsHref()} download="lbf-silver-soiree-2026.ics" className="ticket ticket-gold">
              Add to calendar
            </a>
            <Ticket href="#invitation" variant="ghost">
              Request an invitation
            </Ticket>
          </div>
        </div>
      </section>

      <section className="wrap grid items-center gap-12 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20">
        <div>
          <p className="kicker">A quarter century</p>
          <h2 className="mt-3 font-display text-[clamp(2.2rem,4.5vw,3.5rem)]">Silver, feathers, and the women who made the legend.</h2>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed">{soiree.lede}</p>
          <p className="mt-4 max-w-xl text-muted">
            Looking across the ballroom — past the shimmering silver, the feathered headpieces, and the warm embraces of
            women who have walked side-by-side through decades — one truth is clear. LBF is defined by the quiet courage
            they inspire in one another.
          </p>
          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="border-l-[3px] border-gold pl-4">
              <dt className="kicker">When</dt>
              <dd className="mt-1 font-display text-2xl">{soiree.dateLabel}</dd>
            </div>
            <div className="border-l-[3px] border-gold pl-4">
              <dt className="kicker">Where</dt>
              <dd className="mt-1 font-display text-2xl">{soiree.venue}</dd>
            </div>
          </dl>
        </div>
        <img
          src={art.soireeInvite}
          alt="Formal Silver Soirée invitation, Saturday November 14, 2026 at Carrollwood Country Club."
          className="w-full shadow-[0_22px_50px_rgba(36,10,18,0.16)]"
        />
      </section>

      <section id="invitation" className="wrap grid scroll-mt-24 items-start gap-12 pb-8 md:grid-cols-[0.9fr_1.1fr]">
        <img
          src={art.silverStub}
          alt="Silver twenty-five anniversary ticket."
          className="mx-auto w-full max-w-[18rem] rotate-[-2deg] shadow-[0_18px_40px_rgba(36,10,18,0.14)]"
        />
        <div className="panel p-7 md:p-9">
          <SoireeForm />
        </div>
      </section>
    </article>
  );
}
