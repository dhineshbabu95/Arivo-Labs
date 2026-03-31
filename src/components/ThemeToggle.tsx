"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  ThemeFirstSwitchNudge,
  hasSeenThemeSwitchNudge,
  markThemeSwitchNudgeSeen,
} from "@/components/ThemeFirstSwitchNudge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [themeNudgeOpen, setThemeNudgeOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  function handleThemeChange(value: string) {
    setTheme(value);
    if (value !== "light" && value !== "dark") return;
    if (hasSeenThemeSwitchNudge()) return;
    markThemeSwitchNudgeSeen();
    setThemeNudgeOpen(true);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "size-9 shrink-0 text-muted-foreground",
          className
        )}
        aria-label="Theme"
        disabled
      >
        <span className="size-[1.125rem] rounded-sm bg-muted" />
      </Button>
    );
  }

  return (
    <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "size-9 shrink-0 text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground",
            className
          )}
          aria-label="Choose color theme"
        >
          {theme === "system" ? (
            <Monitor className="size-[1.125rem]" strokeWidth={2} />
          ) : theme === "dark" ? (
            <Moon className="size-[1.125rem]" strokeWidth={2} />
          ) : (
            <Sun className="size-[1.125rem]" strokeWidth={2} />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[11rem]">
        <DropdownMenuLabel className="normal-case tracking-normal">
          Appearance
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={theme ?? "system"}
          onValueChange={handleThemeChange}
        >
          <DropdownMenuRadioItem value="light">
            <span className="flex items-center gap-2">
              <Sun className="size-3.5 shrink-0 opacity-70" strokeWidth={2} />
              Light
            </span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">
            <span className="flex items-center gap-2">
              <Moon className="size-3.5 shrink-0 opacity-70" strokeWidth={2} />
              Dark
            </span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">
            <span className="flex items-center gap-2">
              <Monitor className="size-3.5 shrink-0 opacity-70" strokeWidth={2} />
              System
            </span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    <ThemeFirstSwitchNudge
      open={themeNudgeOpen}
      onOpenChange={setThemeNudgeOpen}
    />
    </>
  );
}
