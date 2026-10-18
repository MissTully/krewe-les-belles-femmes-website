import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { soiree } from "@/lib/content";

const DISMISS_KEY = "lbf-soiree-badge-dismissed";

/**
 * Floating seal that pops out on the home page to promote the Silver Soirée.
 * It mounts after hydration (so the server and client markup match) and stays
 * closed for the rest of the visit once a guest dismisses it.
 */
export function SoireeBadge() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      // Storage can be blocked (private windows); show the badge anyway.
    }
    if (dismissed) return;
    const timer = window.setTimeout(() => setOpen(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  if (!open) return null;

  function dismiss() {
    setOpen(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Ignore: the badge simply returns on the next page load.
    }
  }

  return (
    <aside
      aria-label={`${soiree.title} announcement`}
      className="soiree-badge fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6"
    >
      <Link
        to="/soiree"
        className="soiree-badge-seal flex flex-col items-center justify-center text-center no-underline"
      >
        <span className="text-[0.5rem] font-semibold tracking-[0.24em] sm:text-[0.6rem] text-wine uppercase">
          25 Years
        </span>
        <span className="mt-1 font-display text-[1.15rem] sm:text-[1.55rem] leading-[0.95] text-wine-deep">
          Silver
          <br />
          Soirée
        </span>
        <span className="mt-1 text-[0.5rem] font-semibold tracking-[0.16em] sm:mt-1.5 sm:text-[0.62rem] text-cabaret uppercase">
          November 14
        </span>
      </Link>
      <button
        type="button"
        onClick={dismiss}
        aria-label={`Close ${soiree.title} announcement`}
        className="absolute -top-1 -right-1 grid size-8 place-items-center rounded-full border border-gold bg-wine-deep text-base leading-none text-gold-soft shadow-md"
      >
        ×
      </button>
    </aside>
  );
}
