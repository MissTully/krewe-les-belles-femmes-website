import { cn } from "@/lib/utils";

export function Ornament({ className, gold = false }: { className?: string; gold?: boolean }) {
  return (
    <div className={cn("ornament", gold && "ornament-gold", className)} aria-hidden="true">
      <span />
      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
        <path d="M7 0.6 8.4 5.6 13.4 7 8.4 8.4 7 13.4 5.6 8.4 0.6 7 5.6 5.6Z" />
      </svg>
      <span />
    </div>
  );
}
