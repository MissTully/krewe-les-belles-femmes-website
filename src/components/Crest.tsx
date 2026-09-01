import WindmillMark from "./WindmillMark";

type Props = {
  /* Pixel size of the outer gold ring. */
  size?: number;
  /* When true, hide from screen readers. Used next to visible headings. */
  decorative?: boolean;
};

/**
 * Gold-ringed house mark.
 * Shamrock puts the crest in a circle on the hero. We do the same with the windmill,
 * not a Paris nightclub logo.
 */
export default function Crest({ size = 96, decorative = false }: Props) {
  return (
    <div
      className="crest"
      style={{ width: size, height: size }}
      aria-hidden={decorative || undefined}
    >
      <WindmillMark size={Math.round(size * 0.52)} decorative={decorative} />
    </div>
  );
}
