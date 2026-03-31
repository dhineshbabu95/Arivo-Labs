import { cn } from "@/lib/utils";

export type LogoProps = {
  variant?: "icon" | "horizontal";
  size?: "sm" | "md" | "lg";
  className?: string;
  /** Kept for API compatibility with image-based logos; SVG paints immediately. */
  priority?: boolean;
};

const ICON_CLASS = {
  sm: "size-6",
  md: "size-7",
  lg: "size-8",
} as const;

const HORIZONTAL_CLASS = {
  sm: "h-7 w-[7.95rem] sm:h-7 sm:w-[8rem]",
  md: "h-[1.875rem] w-[9.625rem] sm:h-8 sm:w-[10.25rem]",
  lg: "h-[2.25rem] w-[11rem] sm:h-[2.4375rem] sm:w-[12.5rem]",
} as const;

/**
 * Theme-aware Arivo Labs mark: bars and wordmark use `currentColor` (foreground),
 * so light mode reads as dark and dark mode as light. Orange accent uses `fill-primary`.
 * No mounted theme hook → no hydration flicker; switches follow `html` class like the rest of the UI.
 */
export function Logo({
  variant = "horizontal",
  size = "md",
  className,
  priority: _priority,
}: LogoProps) {
  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "shrink-0 text-foreground transition-colors duration-200 ease-out",
          ICON_CLASS[size],
          className
        )}
        aria-hidden
        focusable="false"
      >
        <g className="text-foreground">
          <rect x="14" y="4" width="16" height="36" rx="3" fill="currentColor" />
          <rect
            x="14"
            y="4"
            width="16"
            height="36"
            rx="3"
            fill="currentColor"
            transform="rotate(60 22 22)"
          />
          <rect
            x="14"
            y="4"
            width="16"
            height="36"
            rx="3"
            fill="currentColor"
            transform="rotate(120 22 22)"
          />
        </g>
        <circle cx="22" cy="22" r="8" className="fill-background" />
        <circle cx="22" cy="22" r="3" className="fill-primary" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 200 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "shrink-0 text-foreground transition-colors duration-200 ease-out",
        HORIZONTAL_CLASS[size],
        className
      )}
      aria-hidden
      focusable="false"
    >
      <g className="text-foreground">
        <rect x="0" y="4" width="16" height="36" rx="3" fill="currentColor" />
        <rect
          x="0"
          y="4"
          width="16"
          height="36"
          rx="3"
          fill="currentColor"
          transform="rotate(60 8 22)"
        />
        <rect
          x="0"
          y="4"
          width="16"
          height="36"
          rx="3"
          fill="currentColor"
          transform="rotate(120 8 22)"
        />
      </g>
      <circle cx="8" cy="22" r="8" className="fill-background" />
      <circle cx="8" cy="22" r="3" className="fill-primary" />
      <text
        x="58"
        y="28"
        fill="currentColor"
        style={{
          fontFamily: "var(--font-sora), var(--font-inter), system-ui, sans-serif",
          fontSize: 30,
          fontWeight: 500,
          letterSpacing: "-0.03em",
        }}
      >
        Arivo
      </text>
      <text
        x="140"
        y="28"
        fill="currentColor"
        opacity={0.45}
        style={{
          fontFamily: "var(--font-sora), var(--font-inter), system-ui, sans-serif",
          fontSize: 30,
          fontWeight: 300,
          letterSpacing: "-0.015em",
        }}
      >
        Labs
      </text>
    </svg>
  );
}
