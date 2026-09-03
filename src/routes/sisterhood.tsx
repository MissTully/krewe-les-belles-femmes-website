import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { PhotoFrame } from "@/components/photo-frame";
import { Ticket } from "@/components/ticket-link";
import { art, reasons, stories } from "@/lib/content";

export const Route = createFileRoute("/sisterhood")({ component: SisterhoodPage });

function SisterhoodPage() {
  return (
    <article className="pb-24">
      <PageHero
        kicker="Sisterhood"
        title="Come find your people"
        lede="We aren’t just a social club. We are a chosen family — a circle of brilliant, warm women who know how to balance deep intellect with an absolute zest for fun."
      />

      <div className="wrap mt-12 grid items-start gap-12 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-[1.05rem] leading-relaxed">
            Life is busy, demanding, and often far too serious. Finding your true village can feel impossible. That is
            why Les Belles Femmes exists: genuine connection, roaring laughter, and a community that welcomes you with
            open arms.
          </p>
          <p className="mt-4 text-muted">
            Whether we are diving into a wine-fueled book debate, cheering each other through life’s milestones, or
            putting on boots and feather-adorned top hats to rule the parade route — we do it together.
          </p>
          <Ticket to="/membership" variant="wine" className="mt-8">
            Join
          </Ticket>
        </div>
        <PhotoFrame
          src={art.sunny}
          alt="Krewe members in cabaret costumes smiling together."
          caption="If you are craving genuine connection, you have finally found home."
          imgClassName="aspect-[4/5] object-[center_28%]"
        />
      </div>

      <section className="wrap mt-20">
        <p className="kicker">Why you’ll fall in love</p>
        <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,3.3rem)]">Four reasons members stay.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {reasons.map((reason) => (
            <article key={reason.kicker} className="panel p-7">
              <p className="kicker">{reason.kicker}</p>
              <h3 className="mt-2 font-display text-2xl">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{reason.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap mt-20">
        <p className="kicker">Stories from the sisterhood</p>
        <h2 className="mt-3 max-w-3xl font-display text-[clamp(2.1rem,4.5vw,3.3rem)]">
          The quiet courage they inspire in one another.
        </h2>
        <div className="mt-12 grid gap-10">
          {stories.map((story) => (
            <blockquote key={story.title} className="panel p-8 md:p-10">
              <p className="kicker">{story.chapter}</p>
              <h3 className="mt-2 font-display text-4xl">{story.title}</h3>
              <p className="mt-6 font-display text-2xl italic leading-snug text-ink">“{story.quote}”</p>
              <p className="mt-5 max-w-3xl leading-relaxed text-muted">{story.body}</p>
              <footer className="mt-6 text-sm text-muted">{story.byline}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="wrap mt-20 grid items-center gap-12 md:grid-cols-2">
        <PhotoFrame
          src={art.ladiesPainting}
          alt="A painterly portrait of three women in Belle Époque dress."
          caption="A judgement-free zone. Be entirely yourself."
          imgClassName="aspect-[4/5]"
        />
        <div>
          <p className="kicker">A note from the board</p>
          <h2 className="mt-3 font-display text-[clamp(2.2rem,4vw,3.4rem)]">Dream big. Laugh loudly.</h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed">
            Growing older does not mean outgrowing your sense of wonder. LBF keeps the circle intimate — about fifty to
            seventy-five women — so everyone is known, missed, and celebrated.
          </p>
          <p className="mt-4 font-display text-2xl italic text-cabaret">Never dull your sparkle.</p>
          <Ticket to="/membership" variant="wine" className="mt-8">
            Join
          </Ticket>
        </div>
      </section>
    </article>
  );
}
