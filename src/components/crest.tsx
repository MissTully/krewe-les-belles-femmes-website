import { art } from "@/lib/content";

type Props = {
  size?: number;
  decorative?: boolean;
};

export function Crest({ size = 96, decorative = false }: Props) {
  return (
    <img
      src={art.mark}
      width={size}
      height={size}
      alt={decorative ? "" : "Les Belles Femmes twenty-five year mark"}
      aria-hidden={decorative || undefined}
      className="lbf-crest"
      style={{ width: size, height: size }}
      draggable={false}
    />
  );
}
