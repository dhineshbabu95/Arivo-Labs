import Link from "next/link";

import { Container } from "@/components/Container";
import { footer, site } from "@/content";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-16 sm:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent dark:via-primary/35"
        aria-hidden
      />
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
          <div>
            <Link
              href="/"
              className="inline-flex outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <span className="sr-only">{site.name}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/arivo-labs-horizontal-light.svg"
                alt=""
                aria-hidden
                className="h-9 w-auto dark:hidden"
                width={200}
                height={44}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/arivo-labs-horizontal-dark.svg"
                alt=""
                aria-hidden
                className="hidden h-9 w-auto dark:block"
                width={200}
                height={44}
              />
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {footer.tagline}
            </p>
            <p className="mt-2 text-sm text-muted-foreground/95">
              {footer.companyLine}
            </p>
            <p className="mt-2 text-xs text-muted-foreground/90">
              {site.location}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 sm:gap-x-10 sm:gap-y-3">
            {footer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline decoration-primary/40"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-10 border-t border-border/50 pt-6 text-sm text-muted-foreground sm:mt-14 sm:pt-8">
          © {new Date().getFullYear()} {site.company}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
