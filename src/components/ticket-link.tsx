import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type Variant = "gold" | "wine" | "ghost" | "ink";

const variants: Record<Variant, string> = {
  gold: "ticket-gold",
  wine: "ticket-wine",
  ghost: "ticket-ghost",
  ink: "ticket-ink",
};

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  to?: string;
  href?: string;
  type?: "button" | "submit";
};

export function Ticket({
  children,
  variant = "gold",
  className,
  to,
  href,
  type = "button",
}: Props) {
  const classes = cn("ticket", variants[variant], className);

  if (to) {
    return (
      <Link to={to as "/"} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
