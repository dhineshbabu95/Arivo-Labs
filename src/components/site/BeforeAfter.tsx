import { Check, X } from "lucide-react";

import { Container } from "@/components/Container";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";
import { home } from "@/content";

export function BeforeAfter() {
  const { beforeAfter } = home;

  return (
    <section
      id="before-after"
      className="site-divider site-section-pad scroll-mt-20 border-border/50 sm:scroll-mt-24"
    >
      <Container>
        <Reveal variant="fadeUp" className="mx-auto max-w-3xl text-center">
          <p className="site-eyebrow">{beforeAfter.eyebrow}</p>
          <h2 className="site-section-title mt-4 sm:mt-5">{beforeAfter.title}</h2>
          <p className="site-body mx-auto mt-5 max-w-2xl sm:mt-6">
            {beforeAfter.intro}
          </p>
        </Reveal>

        <RevealStagger
          className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-2"
          stagger={0.14}
          delayChildren={0.08}
        >
          {beforeAfter.comparisons.map((row) => (
            <RevealItem key={row.id}>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-0 sm:overflow-hidden sm:rounded-2xl sm:border sm:border-border/70 sm:shadow-[var(--card-shadow)]">
                <div className="flex flex-col rounded-2xl border border-border/70 bg-muted/40 p-5 sm:rounded-none sm:border-0 sm:border-r sm:border-border/60">
                  <div className="flex items-center gap-2 text-destructive">
                    <X className="size-4 shrink-0" strokeWidth={2.5} aria-hidden />
                    <span className="font-diagram text-xs font-bold uppercase tracking-wider">
                      {row.beforeLabel}
                    </span>
                  </div>
                  <h3 className="font-display mt-3 text-base font-semibold text-foreground">
                    {row.beforeTitle}
                  </h3>
                  <ul className="mt-4 space-y-2 font-diagram text-sm text-muted-foreground">
                    {row.beforePoints.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-diagram text-[11px] text-muted-foreground/90">
                    {row.beforeVisualHint}
                  </p>
                </div>
                <div className="flex flex-col rounded-2xl border border-success/30 bg-success/5 p-5 sm:rounded-none sm:border-0">
                  <div className="flex items-center gap-2 text-success">
                    <Check className="size-4 shrink-0" strokeWidth={2.5} aria-hidden />
                    <span className="font-diagram text-xs font-bold uppercase tracking-wider">
                      {row.afterLabel}
                    </span>
                  </div>
                  <h3 className="font-display mt-3 text-base font-semibold text-foreground">
                    {row.afterTitle}
                  </h3>
                  <ul className="mt-4 space-y-2 font-diagram text-sm text-foreground/90">
                    {row.afterPoints.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-success" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-diagram text-[11px] text-muted-foreground">
                    {row.afterVisualHint}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
