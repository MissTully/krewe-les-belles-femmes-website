import { createFileRoute } from "@tanstack/react-router";
import { ApplyForm } from "@/components/apply-form";
import { PageHero } from "@/components/page-hero";
import { PhotoFrame } from "@/components/photo-frame";
import { Ticket } from "@/components/ticket-link";
import {
  art,
  joiningSteps,
  lesBeaux,
  membershipFacts,
  membershipFaq,
  reasons,
  stories,
} from "@/lib/content";

export const Route = createFileRoute("/sisterhood")({
  component: SisterhoodPage,
});

function SisterhoodPage() {
  return (
    <article className="pb-24">
      <PageHero
        kicker="Sisterhood"
        title="Come find your people"
        lede="We aren’t just a social club. We are a chosen family: brilliant, warm women who balance deep intellect with an absolute zest for fun. Life is busy and often far too serious. LBF is where you put the armor down, laugh loudly, and belong."
      />

      <div className="wrap mt-12 grid items-start gap-12 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-[1.05rem] leading-relaxed">
            Whether we are diving into a wine-fueled book debate, cheering each
            other through life’s milestones, or strapping on boots and feathered
            top hats to rule the parade route, we do it together.
          </p>
          <p className="mt-4 text-muted">
            Founded in Tampa Bay in 2002, Les Belles Femmes keeps the circle
            intentionally intimate so everyone is known, missed, and celebrated.
            Growing older does not mean outgrowing your sense of wonder.
          </p>
          <p className="mt-6 font-display text-2xl italic text-cabaret">
            Never dull your sparkle.
          </p>
        </div>
        <PhotoFrame
          src={art.sunny}
          alt="Krewe members in cabaret costumes smiling together."
          caption="If you are craving genuine connection, you have finally found home."
          imgClassName="aspect-[4/5] object-[center_28%]"
        />
      </div>

      <section className="wrap mt-20">
        <p className="kicker">Why members stay</p>
        <h2 className="mt-3 title-section">Four reasons the circle holds.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {reasons.map((reason) => (
            <article key={reason.kicker} className="panel p-7">
              <p className="kicker">{reason.kicker}</p>
              <h3 className="mt-2 font-display text-2xl">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {reason.copy}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {membershipFacts.map((fact) => (
          <article key={fact.label} className="panel p-6">
            <p className="kicker">{fact.label}</p>
            <p className="mt-2 font-display text-3xl">{fact.value}</p>
            <p className="mt-3 text-sm text-muted">{fact.note}</p>
          </article>
        ))}
      </section>

      <section className="wrap mt-20 grid items-start gap-12 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="kicker">How to join</p>
          <h2 className="mt-3 title-section">No pressure. Just connection.</h2>
          <p className="mt-4 max-w-xl text-muted">
            Putting yourself out there can feel intimidating. We keep
            recruitment warm and easy: no stuffy interviews, only genuine
            conversation.
          </p>
          <ol className="mt-8 grid list-none gap-6 p-0">
            {joiningSteps.map((step) => (
              <li
                key={step.step}
                className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-gold/30 pt-5"
              >
                <span className="font-display text-2xl text-cabaret">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-display text-2xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.note}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <Ticket
            href="https://www.facebook.com/KreweLBF"
            variant="ink"
            className="mt-8"
          >
            See us on Facebook
          </Ticket>
        </div>
        <PhotoFrame
          src={art.walking}
          alt="Two women in Belle Époque dress walking together."
          caption="Come have a drink, share some laughs, and see if our sparkle matches yours."
          imgClassName="aspect-[4/5]"
        />
      </section>

      <section className="wrap mt-20 grid items-start gap-12 md:grid-cols-2">
        <div className="panel p-7 md:p-9">
          <ApplyForm />
        </div>
        <div>
          <p className="kicker">{lesBeaux.name}</p>
          <h2 className="mt-3 title-section">{lesBeaux.title}</h2>
          <p className="mt-4 leading-relaxed text-muted">{lesBeaux.copy}</p>
          <dl className="mt-10 grid gap-6">
            {membershipFaq.map((item) => (
              <div key={item.q}>
                <dt className="font-display text-xl">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="wrap mt-20">
        <p className="kicker">Stories from the sisterhood</p>
        <h2 className="mt-3 max-w-3xl title-section">
          The quiet courage they inspire in one another.
        </h2>
        <div className="mt-12 grid gap-10">
          {stories.map((story) => (
            <blockquote key={story.title} className="panel p-8 md:p-10">
              <p className="kicker">{story.chapter}</p>
              <h3 className="mt-2 font-display text-4xl">{story.title}</h3>
              <p className="mt-6 font-display text-2xl italic leading-snug text-ink">
                “{story.quote}”
              </p>
              <p className="mt-5 max-w-3xl leading-relaxed text-muted">
                {story.body}
              </p>
              <footer className="mt-6 text-sm text-muted">
                {story.byline}
              </footer>
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
          <h2 className="mt-3 title-section">Dream big. Laugh loudly.</h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed">
            LBF is defined less by the corsets and the Eiffel Tower float than
            by 2 a.m. phone calls, fierce professional support, and the belief
            that life should be celebrated with style, empathy, and an
            unshakeable squad of friends.
          </p>
          <p className="mt-4 text-muted">
            If the sparkle feels like yours, come as a guest this recruitment
            season. We have been looking for you.
          </p>
        </div>
      </section>
    </article>
  );
}
