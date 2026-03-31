"use client";

import { useEffect } from "react";

const STORAGE_KEY = "dhinesh-theme-first-switch-nudge-v1";

export function hasSeenThemeSwitchNudge(): boolean {
  if (typeof window === "undefined") return true;
  return window.localStorage.getItem(STORAGE_KEY) === "1";
}

export function markThemeSwitchNudgeSeen(): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, "1");
}

type ThemeFirstSwitchNudgeProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

/**
 * One-time friendly popup after the user first picks Light or Dark (not System).
 */
export function ThemeFirstSwitchNudge({
  open,
  onOpenChange,
}: ThemeFirstSwitchNudgeProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-end justify-center p-4 pb-8 sm:items-center sm:pb-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-foreground/20 backdrop-blur-[2px] dark:bg-black/50"
        aria-label="Dismiss message"
        onClick={() => onOpenChange(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="theme-nudge-title"
        aria-describedby="theme-nudge-desc"
        className="relative z-10 w-full max-w-md rounded-xl border border-border/80 bg-card/95 p-6 shadow-[var(--elevated-shadow)] backdrop-blur-md dark:border-border/60 dark:bg-card/95"
      >
        <p
          id="theme-nudge-title"
          className="font-display text-lg font-semibold tracking-tight text-foreground"
        >
          We feel you.
        </p>
        <p
          id="theme-nudge-desc"
          className="mt-3 text-sm leading-relaxed text-muted-foreground"
        >
          Colours on a screen can be a lot for the eyes — bright at night, gloomy in
          daylight, or just &quot;why is everything yelling at me.&quot; Switching themes
          is self-care. You&apos;re allowed to change your mind again in five minutes.
        </p>
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-bright sm:w-auto"
        >
          Ha, thanks
        </button>
      </div>
    </div>
  );
}
