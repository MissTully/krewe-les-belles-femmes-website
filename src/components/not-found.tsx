import { Link } from "@tanstack/react-router";
import { Ornament } from "@/components/ornament";

export function NotFound() {
  return (
    <main className="paper-stage flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="kicker">Lost on the boulevard</p>
      <h1 className="mt-3 font-display text-5xl text-ink md:text-6xl">
        This page has left the parade.
      </h1>
      <Ornament className="mx-auto mt-6" />
      <p className="mt-5 max-w-md text-muted">
        The address you followed is not on the LBF playbill. Come back to the
        foyer; we have been looking for you.
      </p>
      <Link to="/" className="ticket ticket-wine mt-8">
        Return home
      </Link>
    </main>
  );
}
