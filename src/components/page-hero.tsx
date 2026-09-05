import { Ornament } from "@/components/ornament";

type Props = {
  kicker: string;
  title: string;
  lede?: string;
};

export function PageHero({ kicker, title, lede }: Props) {
  return (
    <header className="wrap pt-12 pb-4 md:pt-16">
      <p className="kicker">{kicker}</p>
      <h1 className="mt-3 max-w-4xl title-hero text-ink">{title}</h1>
      <Ornament className="mt-6" />
      {lede ? (
        <p className="mt-6 max-w-2xl font-display text-xl font-medium italic leading-snug text-ink md:text-2xl">
          {lede}
        </p>
      ) : null}
    </header>
  );
}
