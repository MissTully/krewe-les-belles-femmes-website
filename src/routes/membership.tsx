import { createFileRoute } from "@tanstack/react-router";
import { ApplyForm } from "@/components/apply-form";
import { PageHero } from "@/components/page-hero";
import { PhotoFrame } from "@/components/photo-frame";
import { Ticket } from "@/components/ticket-link";
import { art, joiningSteps, lesBeaux, membershipFacts, membershipFaq } from "@/lib/content";

export const Route = createFileRoute("/membership")({ component: MembershipPage });

function MembershipPage() {
  return (
    <article className="pb-24">
      <PageHero
        kicker="Membership"
        title="Come sit with us"
        lede="We know that putting yourself out there can feel intimidating. We want to make it warm and easy — no stuffy interviews, just genuine connection."
      />

      <section className="wrap mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
          <p className="kicker">Our recruitment approach</p>
          <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,3.3rem)]">No pressure. Just connection.</h2>
          <ol className="mt-8 grid list-none gap-6 p-0">
            {joiningSteps.map((step) => (
              <li key={step.step} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-gold/30 pt-5">
                <span className="font-display text-2xl text-cabaret">{step.step}</span>
                <div>
                  <h3 className="font-display text-2xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.note}</p>
                </div>
              </li>
            ))}
          </ol>
          <Ticket href="https://www.facebook.com/KreweLBF" variant="ink" className="mt-8">
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
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)]">{lesBeaux.title}</h2>
          <p className="mt-4 leading-relaxed text-muted">{lesBeaux.copy}</p>
          <dl className="mt-10 grid gap-6">
            {membershipFaq.map((item) => (
              <div key={item.q}>
                <dt className="font-display text-xl">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </article>
  );
}
