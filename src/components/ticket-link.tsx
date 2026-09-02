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
  onClick?: () => void;
};

export function Ticket({
  children,
  variant = "gold",
  className,
  to,
  href,
  type = "button",
  onClick,
}: Props) {
  const classes = cn("ticket", variants[variant], className);

  if (to) {
    return (
      <Link to={to as "/"} className={classes} onClick={onClick}>
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
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
