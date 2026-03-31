import { Container } from "@/components/Container";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";
import { home } from "@/content";

const accent = [
  "text-destructive",
  "text-brand-blue",
  "text-success",
  "text-primary",
] as const;

export function WhoItsFor() {
  const { audience } = home;

  return (
    <section
      id="audience"
      className="site-divider site-section-pad scroll-mt-20 border-border/50 bg-muted/30 sm:scroll-mt-24"
    >
      <Container>
        <Reveal variant="fadeUp" className="max-w-3xl">
          <p className="site-eyebrow">{audience.eyebrow}</p>
          <h2 className="site-section-title mt-4 sm:mt-5">{audience.title}</h2>
          <p className="site-body editorial-measure mt-5 sm:mt-6">
            {audience.intro}
          </p>
        </Reveal>

        <RevealStagger
          className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
          stagger={0.1}
          delayChildren={0.06}
        >
          {audience.pains.map((pain, i) => (
            <RevealItem key={pain.title}>
              <div className="site-card-premium group h-full rounded-xl border border-border/70 bg-card/80 p-6 ring-1 ring-inset ring-black/[0.03] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[var(--elevated-shadow)] dark:ring-white/[0.04] dark:border-border/60 dark:bg-card/45 dark:hover:bg-card/80">
                <p
                  className={`font-display text-sm font-semibold tracking-tight ${accent[i % accent.length]}`}
                >
                  {pain.title}
                </p>
                <p className="site-body mt-3 text-[0.9375rem] leading-relaxed sm:text-[0.9375rem]">
                  {pain.text}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal variant="fadeBlur" className="mt-12 sm:mt-14">
          <p className="site-body max-w-2xl text-foreground/95">
            {audience.closing}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
