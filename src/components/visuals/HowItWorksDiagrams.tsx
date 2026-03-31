/** Simple left-to-right flow diagrams for non-technical audiences. */

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const node =
  "rounded-lg border-2 border-brand-blue/40 bg-card px-2 py-2 text-center font-diagram text-[11px] font-semibold leading-tight text-foreground shadow-sm sm:text-xs";
const arrow = "text-brand-blue";
const cap = "font-diagram text-[10px] font-medium text-muted-foreground sm:text-[11px]";

function DiagramFrame({
  children,
  caption,
}: {
  children: ReactNode;
  caption: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
        {children}
      </div>
      <p className={cn(cap, "text-center")}>{caption}</p>
    </div>
  );
}

export function DiagramWebsiteToDashboard() {
  return (
    <DiagramFrame caption="Leads, bookings, sources — in one view">
      <div className={node}>Website</div>
      <span className={`${arrow} text-lg font-bold`} aria-hidden>
        →
      </span>
      <div className={`${node} border-primary/50 bg-primary/5`}>
        Enquiries & visits
      </div>
      <span className={`${arrow} text-lg font-bold`} aria-hidden>
        →
      </span>
      <div className={`${node} border-success/50 bg-success/5`}>Dashboard</div>
    </DiagramFrame>
  );
}

export function DiagramUserAutomationOutcome() {
  return (
    <DiagramFrame caption="Less copy‑paste, fewer missed leads">
      <div className={node}>Customer action</div>
      <span className={`${arrow} text-lg font-bold`} aria-hidden>
        →
      </span>
      <div className={`${node} border-primary/60 bg-primary/8`}>Automation</div>
      <span className={`${arrow} text-lg font-bold`} aria-hidden>
        →
      </span>
      <div className={`${node} border-success/50 bg-success/5`}>
        Faster follow‑up
      </div>
    </DiagramFrame>
  );
}

export function DiagramMarketingToInsights() {
  return (
    <DiagramFrame caption="See which channels bring enquiries">
      <div className={node}>Marketing</div>
      <span className={`${arrow} text-lg font-bold`} aria-hidden>
        →
      </span>
      <div className={`${node} border-primary/50 bg-primary/5`}>Tracking</div>
      <span className={`${arrow} text-lg font-bold`} aria-hidden>
        →
      </span>
      <div className={`${node} border-success/50 bg-success/5`}>Insights</div>
    </DiagramFrame>
  );
}
