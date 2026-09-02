type Props = {
  size?: number;
  title?: string;
  decorative?: boolean;
};

export function WindmillMark({
  size = 36,
  title = "Les Belles Femmes windmill mark",
  decorative = false,
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : title}
    >
      {decorative ? null : <title>{title}</title>}
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path d="M32 18 L32 43" />
        <rect x="23" y="42" width="18" height="11" rx="1" />
        <path d="M32 24 L51 15" />
        <path d="M32 24 L13 15" />
        <path d="M32 24 L51 33" />
        <path d="M32 24 L13 33" />
      </g>
      <rect x="30" y="44.5" width="4" height="6" fill="#8f2032" />
    </svg>
  );
}
