import WindmillMark from "./WindmillMark";

export default function Ornament({ className }: { className?: string }) {
  return (
    <div className={["ornament", className].filter(Boolean).join(" ")} aria-hidden="true">
      <span />
      <WindmillMark size={18} decorative />
      <span />
    </div>
  );
}
