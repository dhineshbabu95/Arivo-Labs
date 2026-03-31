import { Container } from "@/components/Container";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";
import { home } from "@/content";

export function Results() {
  const { results } = home;

  return (
    <section
      id="results"
      className="site-divider site-section-pad scroll-mt-20 border-border/50 sm:scroll-mt-24"
    >
      <Container>
        <Reveal variant="fadeBlur" className="mb-14 max-w-3xl sm:mb-16">
          <p className="site-eyebrow">{results.eyebrow}</p>
          <h2 className="site-section-title mt-4 sm:mt-5">{results.title}</h2>
          <p className="site-body editorial-measure mt-5 sm:mt-6">
            {results.intro}
          </p>
        </Reveal>

        <RevealStagger
          className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
          stagger={0.11}
          delayChildren={0.05}
        >
          {results.outcomes.map((o) => (
            <RevealItem key={o.label}>
              <article className="site-card-premium flex h-full flex-col rounded-xl border border-border/70 bg-card/85 p-6 ring-1 ring-inset ring-black/[0.02] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--elevated-shadow)] dark:ring-white/[0.03] dark:border-border/60 dark:bg-card/50 dark:hover:bg-card/85">
                <p className="font-display text-2xl font-semibold tracking-tight text-primary sm:text-[1.65rem]">
                  {o.stat}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {o.label}
                </p>
                <p className="site-body mt-4 flex-1 text-[0.9375rem] leading-relaxed">
                  {o.text}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal variant="fadeUp" className="mt-10 sm:mt-12">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {results.footnote}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
