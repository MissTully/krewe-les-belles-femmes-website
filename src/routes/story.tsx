import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { PhotoFrame } from "@/components/photo-frame";
import { Ticket } from "@/components/ticket-link";
import { art, paradeNotes, timeline } from "@/lib/content";

export const Route = createFileRoute("/story")({ component: StoryPage });

function StoryPage() {
  return (
    <article className="pb-24">
      <PageHero
        kicker="Our story"
        title="Twenty-five years of Truth, Beauty, Freedom & Love"
        lede="Every great story in Tampa Bay has a heartbeat. For Les Belles Femmes, that heartbeat has been echoing down parade routes and through cozy living rooms since 2002."
      />

      <div className="wrap mt-12 grid items-start gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-xl">
          <p className="text-[1.05rem] leading-relaxed">
            A small group of women looked at the traditional parade scene and wanted something more. They didn’t just
            want to ride on floats. They wanted a sanctuary of sisterhood — a place where brilliant, college-educated
            women could leave the pressures of the boardroom, pin a feather into a top hat, and laugh until their ribs
            ached.
          </p>
          <p className="mt-4 text-muted">
            They chose a Moulin Rouge Parisian cabaret aesthetic, anchored by a motto that would guide them through the
            decades: Truth, Beauty, Freedom, and Love.
          </p>
          <p className="mt-6 font-display text-3xl italic text-cabaret">Truth. Beauty. Freedom. Love.</p>
          <Ticket to="/sisterhood" variant="wine" className="mt-8">
            Find your people
          </Ticket>
        </div>
        <PhotoFrame
          src={art.hero}
          alt="The Les Belles Femmes float with Eiffel Tower and Moulin Rouge windmill."
          caption="Pageantry is part of the story. Sisterhood is the heart of it."
          imgClassName="aspect-[16/11]"
        />
      </div>

      <section className="mt-20 bg-wine py-16 text-cream md:py-20">
        <div className="wrap">
          <p className="kicker kicker-gold">A spark on the Hillsborough</p>
          <h2 className="mt-3 max-w-3xl font-display text-[clamp(2rem,4vw,3.2rem)] text-[#fff7e9]">
            “We didn’t know what we were doing half the time. We were sewing sequins onto our boots by midnight. Then we
            rolled onto the Gasparilla route — and captured lightning in a bottle.”
          </h2>
          <p className="mt-6 text-sm tracking-wide text-gold-soft">Eleanor Vance, founder</p>
        </div>
      </section>

      <section className="wrap mt-20">
        <p className="kicker">The legacy</p>
        <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,3.3rem)]">A quarter century, in four acts</h2>
        <ol className="mt-12 grid list-none gap-10 p-0">
          {timeline.map((chapter) => (
            <li key={chapter.years} className="grid gap-4 border-t border-gold/30 pt-8 md:grid-cols-[10rem_1fr]">
              <p className="kicker m-0">{chapter.years}</p>
              <div>
                <h3 className="font-display text-3xl">{chapter.title}</h3>
                <p className="mt-3 max-w-3xl leading-relaxed text-muted">{chapter.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap mt-20">
        <p className="kicker">Parade season</p>
        <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,3.3rem)]">Dress the part. Ride together.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {paradeNotes.map((item) => (
            <section key={item.title} className="panel p-7">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.note}</p>
            </section>
          ))}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <PhotoFrame
            src={art.dressing}
            alt="Parisian cabaret costume pieces: top hat, feathers, beads, gloves, and boots."
            caption="Corsets, ruffles, boas, top hats, feathers, boots."
            imgClassName="aspect-[4/3]"
          />
          <PhotoFrame
            src={art.sunny}
            alt="Les Belles Femmes in costume on a sunny parade day."
            caption="Forget glass slippers. This princess wears boots."
            imgClassName="aspect-[4/3] object-[center_30%]"
          />
        </div>
      </section>
    </article>
  );
}
