import { createFileRoute, Link } from "@tanstack/react-router";
import { Crest } from "@/components/crest";
import { Ornament } from "@/components/ornament";
import { PhotoFrame } from "@/components/photo-frame";
import { Ticket } from "@/components/ticket-link";
import {
  art,
  events,
  houseLines,
  krewe,
  pillars,
  stories,
  yearRhythm,
} from "@/lib/content";
import { money, products } from "@/lib/shop";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <section className="relative isolate min-h-[min(92vh,54rem)] overflow-hidden text-cream">
        <img
          src={art.cover}
          alt="Women in scarlet and black gowns at a Belle Époque ball, chandelier light blooming behind them."
          className="absolute inset-0 h-full w-full object-cover object-[42%_36%] saturate-[1.04] contrast-[1.06] md:object-[center_38%]"
        />
        <div className="hero-veil absolute inset-0" aria-hidden="true" />
        <div className="rise relative z-10 mx-auto flex min-h-[min(92vh,54rem)] w-min(62rem,calc(100%-2rem)) flex-col items-center justify-end px-4 pb-16 pt-28 text-center">
          <Crest size={108} decorative />
          <p className="kicker kicker-gold mt-6">
            Tampa Bay · Est. {krewe.founded}
          </p>
          <p className="mt-2 font-display text-[0.95rem] tracking-[0.28em] text-gold-soft uppercase">
            Krewe of
          </p>
          <h1 className="mt-1 font-display text-[clamp(3.1rem,9vw,6.6rem)] leading-[0.95] text-[#fff8ee]">
            {krewe.name}
          </h1>
          <p className="mt-3 font-display text-[clamp(1.45rem,3vw,2.2rem)] font-medium italic text-[#fff6e9]">
            {krewe.tagline}
          </p>
          <p className="motto-row mt-4 text-gold-soft">
            {krewe.motto.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </p>
          <Ornament gold className="mx-auto mt-5" />
          <p className="mt-5 max-w-xl text-[1.02rem] text-cream/88">
            A vibrant women’s krewe celebrating friendship, pageantry,
            community, and the joy of living boldly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Ticket to="/membership" variant="gold">
              Meet LBF
            </Ticket>
            <Ticket to="/events" variant="ghost">
              Explore events
            </Ticket>
          </div>
        </div>
      </section>

      <section className="border-y border-gold/50 bg-wine">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 py-3.5 text-[0.72rem] font-semibold tracking-[0.28em] text-gold-soft uppercase">
          {krewe.motto.map((word, i) => (
            <span key={word} className="flex items-center gap-5">
              {i > 0 ? <i className="not-italic opacity-50">·</i> : null}
              {word}
            </span>
          ))}
        </div>
      </section>

      <section className="wrap grid items-center gap-12 py-20 md:grid-cols-[1.05fr_0.85fr] md:py-28">
        <div>
          <p className="kicker">We’ve been looking for you</p>
          <h2 className="section-title mt-3 font-display text-[clamp(2.3rem,5vw,3.8rem)]">
            A sisterhood with a little sparkle.
          </h2>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink">
            Life is busy, demanding, and often far too serious. LBF is a place
            to put down the armor, gather with remarkable women, laugh loudly,
            and make memories together.
          </p>
          <p className="mt-4 max-w-xl text-muted">
            Founded in Tampa Bay in 2002, Les Belles Femmes blends year-round
            friendship with the pageantry of parade season, and a commitment to
            giving back. Growing older does not mean outgrowing your sense of
            wonder.
          </p>
          <Link
            to="/story"
            className="mt-6 inline-flex min-h-11 items-center border-b border-gold font-semibold text-cabaret no-underline"
          >
            Discover our story
          </Link>
        </div>
        <PhotoFrame
          src={art.sunny}
          alt="Krewe members in cabaret costumes gathered on the float."
          caption="Wear the hat. Add the sparkle. Choose kindness."
          imgClassName="aspect-[4/5] md:aspect-[4/5]"
        />
      </section>

      <section className="wrap pb-8">
        <p className="kicker">The heart of LBF</p>
        <h2 className="mt-3 max-w-3xl font-display text-[clamp(2.1rem,4.5vw,3.3rem)]">
          More than a parade. More than a party.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Link
              key={pillar.to}
              to={pillar.to}
              className="act-card group flex flex-col overflow-hidden bg-paper no-underline shadow-[0_18px_50px_rgba(36,10,18,0.1)] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.alt}
                  className="aspect-[5/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="kicker">{pillar.kicker}</p>
                <h3 className="mt-2 font-display text-[1.85rem] leading-tight">
                  {pillar.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {pillar.copy}
                </p>
                <span className="mt-4 font-semibold text-cabaret">Explore</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap py-20 md:py-24">
        <p className="kicker">The year at a glance</p>
        <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,3.3rem)]">
          There’s always a reason to gather.
        </h2>
        <div className="mt-10 grid border-t border-gold/30 md:grid-cols-4">
          {yearRhythm.map((beat, i) => (
            <article
              key={beat.title}
              className={`border-gold/30 px-0 py-8 md:px-6 md:py-8 ${i < yearRhythm.length - 1 ? "md:border-r" : ""} border-b md:border-b-0`}
            >
              <p className="kicker">{beat.when}</p>
              <h3 className="mt-2 font-display text-2xl">{beat.title}</h3>
              <p className="mt-3 text-sm text-muted">{beat.note}</p>
            </article>
          ))}
        </div>
        <Ticket to="/events" variant="wine" className="mt-8">
          See the calendar
        </Ticket>
      </section>

      <section className="bg-wine py-20 text-cream md:py-24">
        <div className="wrap grid items-center gap-12 md:grid-cols-[1fr_16rem]">
          <div>
            <p className="kicker kicker-gold">Save the date</p>
            <h2 className="mt-2 font-display text-[clamp(3rem,6vw,5rem)] text-[#fff7e9]">
              Silver Soirée
            </h2>
            <p className="mt-2 font-display text-2xl italic text-gold-soft">
              Saturday, November 14, 2026 · Carrollwood Country Club
            </p>
            <p className="mt-5 max-w-xl text-[1.05rem] text-cream/85">
              Join us as we celebrate over twenty-five years of Truth, Beauty,
              Freedom, and Love: a night of silver, feathers, and the women who
              made the legend.
            </p>
            <Ticket to="/soiree" variant="gold" className="mt-8">
              Silver Soirée
            </Ticket>
          </div>
          <img
            src={art.silverStub}
            alt="Silver twenty-five anniversary ticket."
            className="mx-auto w-full max-w-[16rem] rotate-2 shadow-[0_20px_50px_rgba(0,0,0,0.28)]"
          />
        </div>
      </section>

      <section className="wrap py-20 md:py-24">
        <p className="kicker">The boutique</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-xl font-display text-[clamp(2.1rem,4.5vw,3.3rem)]">
            Tote, tee, a little sparkle.
          </h2>
          <Ticket to="/shop" variant="ink">
            Shop LBF
          </Ticket>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <Link
              key={product.id}
              to="/shop"
              className="group grid grid-cols-[7.5rem_1fr] overflow-hidden bg-paper no-underline shadow-[0_18px_50px_rgba(36,10,18,0.1)] sm:grid-cols-[11rem_1fr]"
            >
              <img
                src={product.image}
                alt=""
                className="h-full min-h-[9.5rem] w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
              />
              <div className="flex flex-col justify-center p-5 sm:p-7">
                <p className="kicker">{product.kicker}</p>
                <h3 className="mt-1 font-display text-[1.7rem] leading-tight">
                  {product.name}
                </h3>
                <p className="mt-2 font-display text-xl text-cabaret">
                  {money(product.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap py-20 md:py-24">
        <p className="kicker">Stories from the sisterhood</p>
        <h2 className="mt-3 max-w-3xl font-display text-[clamp(2.1rem,4.5vw,3.3rem)]">
          The quiet courage they inspire in one another.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {stories.map((story) => (
            <blockquote key={story.title} className="panel p-8">
              <p className="kicker">{story.chapter}</p>
              <h3 className="mt-2 font-display text-3xl">{story.title}</h3>
              <p className="mt-5 font-display text-xl italic leading-snug text-ink">
                “{story.quote}”
              </p>
              <footer className="mt-5 text-sm text-muted">
                {story.byline}
              </footer>
            </blockquote>
          ))}
        </div>
        <Link
          to="/sisterhood"
          className="mt-8 inline-flex min-h-11 items-center border-b border-gold font-semibold text-cabaret no-underline"
        >
          Read more from the sisterhood
        </Link>
      </section>

      <section className="wrap pb-20">
        <p className="kicker">The house philosophy</p>
        <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,3.3rem)]">
          Live boldly. Laugh loudly.
        </h2>
        <ul className="mt-8 grid list-none gap-3 p-0 sm:grid-cols-2 md:grid-cols-3">
          {houseLines.map((line) => (
            <li
              key={line}
              className="border-l-[3px] border-gold bg-paper px-5 py-4 font-display text-[1.35rem] italic text-ink"
            >
              {line}
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap pb-24">
        <p className="kicker">Coming up</p>
        <div className="mt-6 border-t border-gold/30">
          {events.map((event) => (
            <div
              key={event.id}
              className="grid gap-1 border-b border-gold/30 py-5 md:grid-cols-[11rem_1fr_12rem] md:items-center md:gap-6"
            >
              <p className="kicker m-0">{event.whenLabel}</p>
              {event.to ? (
                <Link
                  to={event.to}
                  className="font-display text-2xl text-wine no-underline"
                >
                  {event.title}
                </Link>
              ) : (
                <p className="m-0 font-display text-2xl text-wine">
                  {event.title}
                </p>
              )}
              <p className="m-0 text-sm text-muted">{event.where}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
