import { useRouterState } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const velvet = pathname === "/stage-door";

  return (
    <div className={cn(velvet ? "velvet-stage" : "paper-stage", "flex min-h-svh flex-col")}>
      <SiteHeader />
      <div id="main" className="flex-1">
        {children}
      </div>
      {velvet ? null : <SiteFooter />}
    </div>
  );
}
