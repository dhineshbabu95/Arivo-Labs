import { Container } from "@/components/Container";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";
import { home } from "@/content";

export function Trust() {
  const { trust } = home;

  return (
    <section
      id="trust"
      className="site-divider site-section-pad scroll-mt-20 border-border/50 sm:scroll-mt-24"
    >
      <Container>
        <Reveal variant="fadeBlur" className="mx-auto max-w-3xl text-center">
          <p className="site-eyebrow">{trust.eyebrow}</p>
          <h2 className="site-section-title mt-4 sm:mt-5">{trust.title}</h2>
        </Reveal>

        {"stats" in trust && trust.stats && trust.stats.length > 0 ? (
          <Reveal variant="fadeUp" className="mt-12 sm:mt-14">
            <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
              {trust.stats.map((s) => (
                <li
                  key={s.label}
                  className="rounded-2xl border border-border/70 bg-card px-6 py-6 text-center shadow-[var(--card-shadow)]"
                >
                  <p className="font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-2 font-diagram text-sm font-medium text-muted-foreground">
                    {s.label}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}

        <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-start lg:gap-14">
          <Reveal variant="fadeBlur">
            <p className="site-body editorial-measure max-w-xl">
              {trust.body}
            </p>
            <p className="site-body mt-6 max-w-xl font-medium text-foreground/95">
              {trust.closing}
            </p>
            {"logoStripNote" in trust && trust.logoStripNote ? (
              <p className="mt-8 rounded-xl border border-dashed border-border/80 bg-muted/30 px-4 py-3 font-diagram text-sm text-muted-foreground">
                {trust.logoStripNote}
              </p>
            ) : null}
          </Reveal>

          <div className="flex flex-col gap-8">
            {"testimonials" in trust && trust.testimonials?.length ? (
              <RevealStagger
                className="space-y-4"
                stagger={0.08}
                delayChildren={0.05}
              >
                {trust.testimonials.map((t) => (
                  <RevealItem key={t.quote.slice(0, 24)}>
                    <blockquote className="rounded-xl border border-border/70 bg-card/80 p-5 shadow-[var(--card-shadow)] dark:bg-card/40">
                      <p className="text-[0.9375rem] leading-relaxed text-foreground/95">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <footer className="mt-4 font-diagram text-xs font-medium text-muted-foreground">
                        — {t.attribution}
                      </footer>
                    </blockquote>
                  </RevealItem>
                ))}
              </RevealStagger>
            ) : null}

            <RevealStagger
              className="space-y-4 rounded-xl border border-border/70 bg-muted/25 p-6 dark:bg-muted/15"
              stagger={0.08}
              delayChildren={0.05}
            >
              {trust.dont.map((line) => (
                <RevealItem key={line}>
                  <p className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-green"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </p>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
