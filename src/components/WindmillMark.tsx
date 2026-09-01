type Props = {
  size?: number;
  title?: string;
  decorative?: boolean;
};

/** Original house mark. Not a Paris nightclub logo. */
export default function WindmillMark({
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
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round">
        <path d="M32 16 L32 42" />
        <rect x="23" y="41" width="18" height="11" rx="1" />
        <path d="M32 22 L50 14" />
        <path d="M32 22 L14 14" />
        <path d="M32 22 L50 30" />
        <path d="M32 22 L14 30" />
      </g>
      <rect x="30" y="43.5" width="4" height="6" fill="#8B1E2D" />
    </svg>
  );
}
