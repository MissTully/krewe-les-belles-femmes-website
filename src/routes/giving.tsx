import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { PhotoFrame } from "@/components/photo-frame";
import { Ticket } from "@/components/ticket-link";
import { art, partners } from "@/lib/content";

export const Route = createFileRoute("/giving")({ component: GivingPage });

function GivingPage() {
  return (
    <article className="pb-24">
      <PageHero
        kicker="Giving back"
        title="Beauty with purpose"
        lede="We aren’t here only to party. We are here to stand shoulder-to-shoulder for Tampa — fundraising, volunteering, and showing up when it counts."
      />

      <div className="wrap mt-12 grid items-start gap-12 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-[1.05rem] leading-relaxed">
            From the earliest years, Les Belles Femmes poured fierce compassion into the city we love. The pageantry is
            the sparkle. The giving is the heart.
          </p>
          <p className="mt-4 text-muted">
            Members raise funds and volunteer together — because the same women who laugh until their ribs ache also
            know how to show up for families, animals, and neighbors walking through harder seasons.
          </p>
        </div>
        <PhotoFrame
          src={art.gift}
          alt="Gloved hands offering a small wrapped gift."
          caption="Be generous. Choose kindness."
          imgClassName="aspect-[4/5] bg-paper object-contain p-6"
        />
      </div>

      <section className="wrap mt-20">
        <p className="kicker">Partners in Tampa Bay</p>
        <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,3.3rem)]">Organizations we stand with.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noreferrer"
              className="panel group flex flex-col p-7 no-underline transition-transform duration-200 hover:-translate-y-1"
            >
              <h3 className="font-display text-2xl text-wine">{partner.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{partner.note}</p>
              <span className="mt-5 font-semibold text-cabaret">Visit their site</span>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-20 bg-wine py-16 text-cream md:py-20">
        <div className="wrap grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="kicker kicker-gold">Heartfelt giving</p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.2rem)] text-[#fff7e9]">
              The same sisterhood on the boulevard is the one writing checks, packing bags, and holding the line.
            </h2>
            <Ticket to="/membership" variant="gold" className="mt-8">
              Join the work
            </Ticket>
          </div>
          <img
            src={art.giving}
            alt="A woman in a cabaret costume offering a wrapped gift beside a windmill."
            className="w-full shadow-[0_20px_50px_rgba(0,0,0,0.28)]"
          />
        </div>
      </section>
    </article>
  );
}
