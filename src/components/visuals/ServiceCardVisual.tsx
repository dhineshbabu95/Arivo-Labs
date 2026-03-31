import { BarChart3, GitBranch, LayoutTemplate } from "lucide-react";

type ServiceId = "websites" | "analytics" | "automation";

export function ServiceCardVisual({ id }: { id: ServiceId }) {
  if (id === "websites") {
    return (
      <div
        className="relative mt-2 overflow-hidden rounded-lg border border-border/80 bg-gradient-to-br from-muted/50 to-background p-4 shadow-inner"
        aria-hidden
      >
        <div className="mx-auto flex max-w-[200px] gap-2">
          <div className="flex flex-1 flex-col gap-1.5 rounded-md border border-border/70 bg-card p-2 shadow-sm">
            <div className="h-1.5 w-8 rounded-full bg-primary" />
            <div className="h-1 w-full rounded bg-muted" />
            <div className="h-1 w-[80%] rounded bg-muted" />
            <div className="mt-1 h-6 w-full rounded bg-primary/15" />
          </div>
          <div className="w-[38%] rounded-md border border-border/70 bg-card p-1.5 shadow-sm">
            <LayoutTemplate className="mx-auto size-8 text-brand-blue/80" strokeWidth={1.25} />
          </div>
        </div>
        <p className="mt-3 text-center font-diagram text-[10px] font-medium text-muted-foreground">
          Website mockup · laptop + mobile
        </p>
      </div>
    );
  }

  if (id === "analytics") {
    return (
      <div
        className="relative mt-2 overflow-hidden rounded-lg border border-border/80 bg-gradient-to-br from-muted/50 to-background p-4 shadow-inner"
        aria-hidden
      >
        <div className="mx-auto grid max-w-[220px] grid-cols-3 gap-1.5">
          {[
            { label: "Leads", h: 40 },
            { label: "Bookings", h: 28 },
            { label: "Sources", h: 34 },
          ].map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-center gap-1 rounded-md border border-border/60 bg-card p-2 shadow-sm"
            >
              <div
                className="w-full max-w-[2rem] rounded-t bg-brand-blue/85"
                style={{ height: `${b.h}px` }}
              />
              <span className="font-diagram text-[9px] font-semibold text-muted-foreground">
                {b.label}
              </span>
            </div>
          ))}
        </div>
        <BarChart3 className="absolute right-3 top-3 size-5 text-primary/35" strokeWidth={1.25} />
        <p className="mt-3 text-center font-diagram text-[10px] font-medium text-muted-foreground">
          Dashboard UI · calm charts
        </p>
      </div>
    );
  }

  return (
    <div
      className="relative mt-2 overflow-hidden rounded-lg border border-border/80 bg-gradient-to-br from-muted/50 to-background p-4 shadow-inner"
      aria-hidden
    >
      <div className="mx-auto flex max-w-[220px] items-center justify-between gap-1 px-1">
        <div className="rounded-md border border-dashed border-border bg-card px-2 py-2 font-diagram text-[9px] font-semibold text-muted-foreground">
          Form
        </div>
        <GitBranch className="size-4 shrink-0 text-brand-blue" strokeWidth={2} />
        <div className="rounded-md border border-primary/40 bg-primary/10 px-2 py-2 font-diagram text-[9px] font-semibold text-foreground">
          Auto
        </div>
        <span className="text-lg font-bold text-brand-blue">→</span>
        <div className="rounded-md border border-success/40 bg-success/10 px-2 py-2 font-diagram text-[9px] font-semibold text-foreground">
          Done
        </div>
      </div>
      <p className="mt-3 text-center font-diagram text-[10px] font-medium text-muted-foreground">
        Automation flow · simple boxes
      </p>
    </div>
  );
}
