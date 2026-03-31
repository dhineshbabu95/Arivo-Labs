"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/Container";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { home, site } from "@/content";

const NAV = [
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#before-after", label: "Before & after" },
  { href: "/#audience", label: "Who it's for" },
  { href: "/#results", label: "Results" },
  { href: "/#process", label: "Process" },
  { href: "/#trust", label: "Trust" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 shadow-[var(--nav-shadow)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/75 dark:border-border/50 dark:bg-background/85">
      <Container>
        <nav className="flex min-h-[3.5rem] items-center justify-between gap-2 py-2 sm:min-h-0 sm:h-[4.25rem] sm:py-0">
          <Link
            href="/"
            className="flex shrink-0 items-center outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <span className="sr-only">{site.name}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/arivo-labs-horizontal-light.svg"
              alt=""
              aria-hidden
              className="h-8 w-auto dark:hidden sm:h-9"
              width={200}
              height={44}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/arivo-labs-horizontal-dark.svg"
              alt=""
              aria-hidden
              className="hidden h-8 w-auto dark:block sm:h-9"
              width={200}
              height={44}
            />
          </Link>

          <div className="flex items-center gap-0.5">
            <div className="hidden items-center gap-0.5 xl:flex">
              {NAV.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  asChild
                  className="h-9 overflow-visible px-2 hover:bg-transparent"
                >
                  <Link href={item.href} className="nav-link text-sm">
                    {item.label}
                  </Link>
                </Button>
              ))}
              <ThemeToggle className="ml-1" />
              <Button asChild size="sm" className="ml-2 shrink-0">
                <Link href="/contact">{home.hero.primaryCta}</Link>
              </Button>
            </div>

            <div className="flex items-center gap-1 xl:hidden">
              <ThemeToggle />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-11 shrink-0"
                onClick={() => setOpen((o) => !o)}
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </Button>
            </div>
          </div>
        </nav>

        <div
          className={cn(
            "border-t border-border/60 bg-muted/30 xl:hidden dark:bg-muted/20",
            open ? "block" : "hidden"
          )}
        >
          <div className="flex flex-col gap-0.5 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            {NAV.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="h-12 w-full justify-start rounded-lg px-3 text-base text-muted-foreground hover:text-foreground"
                asChild
                onClick={() => setOpen(false)}
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
            <Button asChild className="mt-3 h-12 w-full">
              <Link href="/contact" onClick={() => setOpen(false)}>
                {home.hero.primaryCta}
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
