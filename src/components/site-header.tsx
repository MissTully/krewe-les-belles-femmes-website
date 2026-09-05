import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { art, krewe, nav } from "@/lib/content";
import { circleNav } from "@/lib/nav-circle";
import { ShopBagButton } from "@/components/shop-cart";

const items = [...nav, circleNav];

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-7">
          <Link
            to="/"
            className="flex min-h-11 items-center gap-3 no-underline"
          >
            <img
              src={art.mark}
              alt=""
              width={40}
              height={40}
              className="brand-crest"
              draggable={false}
            />
            <span className="leading-tight">
              <span className="block font-display text-[1.2rem] text-cream md:text-[1.32rem]">
                {krewe.name}
              </span>
              <span className="block font-sans text-[0.62rem] font-medium tracking-[0.18em] text-gold-soft uppercase">
                Tampa Bay · Est. {krewe.founded}
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-x-4 gap-y-1 xl:flex"
            aria-label="Main navigation"
          >
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="inline-flex min-h-11 items-center text-[0.72rem] font-medium tracking-[0.14em] text-cream/85 no-underline uppercase transition-colors hover:text-gold-soft"
                activeProps={{ className: "text-gold-soft" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/stage-door"
              className="inline-flex min-h-11 items-center rounded-full border border-gold px-3 text-[0.68rem] font-semibold tracking-[0.14em] text-gold-soft no-underline uppercase"
            >
              Stage Door
            </Link>
          </nav>

          <div className="flex items-center gap-1">
            <ShopBagButton />
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-gold text-[0.72rem] tracking-[0.14em] text-gold-soft uppercase xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <nav
          id="mobile-nav"
          className="fixed inset-x-0 top-[4.35rem] z-30 grid gap-1 border-b border-gold bg-wine-deep px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.28)] xl:hidden"
          aria-label="Main navigation"
        >
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex min-h-12 items-center font-display text-2xl text-cream no-underline"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/stage-door"
            className="mt-2 flex min-h-12 items-center font-display text-2xl text-gold-soft no-underline"
          >
            Stage Door
          </Link>
        </nav>
      ) : null}
    </>
  );
}
