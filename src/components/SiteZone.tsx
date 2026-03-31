import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

type SiteZoneProps = {
  variant: "build" | "beyond";
  children: ReactNode;
  className?: string;
};

/**
 * Visual "world" wrapper: cooler / more technical for build work,
 * softer / more human for story & beyond.
 */
export function SiteZone({ variant, children, className }: SiteZoneProps) {
  return (
    <div
      className={cn(
        "relative",
        variant === "build" ? "site-zone-build" : "site-zone-beyond",
        className
      )}
    >
      {children}
    </div>
  );
}
