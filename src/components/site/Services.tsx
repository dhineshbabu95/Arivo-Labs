import { Container } from "@/components/Container";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { home, services } from "@/content";

export function Services() {
  return (
    <section
      id="services"
      className="site-divider site-section-pad scroll-mt-20 border-border/50 sm:scroll-mt-24"
    >
      <Container>
        <Reveal variant="fadeBlur" className="mb-14 max-w-3xl sm:mb-16 xl:max-w-4xl">
          <p className="site-eyebrow">{home.services.title}</p>
          <h2 className="site-section-title mt-4 sm:mt-5">
            {home.services.heading}
          </h2>
          <p className="site-body editorial-measure mt-5 sm:mt-6">
            {home.services.intro}
          </p>
        </Reveal>

        <RevealStagger
          className="grid gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6"
          stagger={0.13}
          delayChildren={0.06}
        >
          {services.items.map((s) => (
            <RevealItem key={s.id}>
              <Card className="site-card-premium h-full border-border/70 bg-card/90 ring-1 ring-inset ring-black/[0.03] hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-[var(--elevated-shadow)] hover:shadow-primary/12 dark:ring-white/[0.04] dark:border-border/60 dark:bg-card/50 dark:hover:bg-card/88 dark:hover:shadow-primary/[0.1]">
                <CardHeader>
                  <CardTitle className="font-sans text-lg font-semibold text-foreground sm:text-xl">
                    {s.title}
                  </CardTitle>
                  <p className="text-sm leading-snug text-muted-foreground">
                    {s.who}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5 text-[0.9375rem] leading-relaxed text-muted-foreground sm:space-y-3 sm:text-sm">
                    {s.what.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/80" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-border/50 pt-5 text-sm leading-relaxed text-foreground/90">
                    {s.outcome}
                  </p>
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
