import { Link } from "@tanstack/react-router";
import { art, krewe, links, nav } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-0 border-t border-gold bg-wine-deep px-4 py-16 text-cream/75 md:px-7">
      <div className="wrap grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3 text-gold-soft">
            <img
              src={art.mark}
              alt=""
              width={40}
              height={40}
              className="brand-crest"
              draggable={false}
            />
            <strong className="font-display text-2xl font-semibold text-cream">{krewe.fullName}</strong>
          </div>
          <p className="max-w-md text-sm leading-relaxed">
            {krewe.city} · Established {krewe.founded}. A women’s krewe with Les Beaux, the male auxiliary — and a
            year-round sisterhood guided by Truth, Beauty, Freedom, and Love.
          </p>
          <p className="mt-4 font-display text-xl italic text-gold-soft">{krewe.motto.join(" · ")}</p>
        </div>

        <div className="grid gap-2 self-start text-sm">
          <p className="kicker kicker-gold mb-2">Playbill</p>
          {nav.map((item) => (
            <Link key={item.to} to={item.to} className="min-h-10 text-cream no-underline hover:text-gold-soft">
              {item.label}
            </Link>
          ))}
          <Link to="/stage-door" className="min-h-10 text-cream no-underline hover:text-gold-soft">
            Stage Door
          </Link>
        </div>

        <div className="grid gap-2 self-start text-sm">
          <p className="kicker kicker-gold mb-2">Connect</p>
          <a href={links.facebook} className="min-h-10 text-cream no-underline hover:text-gold-soft" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href={links.shop} className="min-h-10 text-cream no-underline hover:text-gold-soft" target="_blank" rel="noreferrer">
            LBF shop
          </a>
          <a href={`mailto:${links.email}`} className="min-h-10 text-cream no-underline hover:text-gold-soft">
            Membership inquiry
          </a>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-cream/55">{links.mailing}</p>
        </div>
      </div>
      <p className="wrap mt-12 text-xs tracking-wide text-cream/45">
        {krewe.boardNote}
      </p>
    </footer>
  );
}
