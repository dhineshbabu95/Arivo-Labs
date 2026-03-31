import Link from "next/link";
import { ClipboardList, Headphones, Rocket, Wrench } from "lucide-react";

import { Container } from "@/components/Container";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { home } from "@/content";

const stepIcons = [ClipboardList, Wrench, Rocket, Headphones] as const;

export function Process() {
  const { process } = home;

  return (
    <section
      id="process"
      className="site-divider site-section-pad scroll-mt-20 border-border/50 bg-muted/25 sm:scroll-mt-24"
    >
      <Container>
        <Reveal variant="slideRight" className="max-w-3xl">
          <p className="site-eyebrow">{process.eyebrow}</p>
          <h2 className="site-section-title mt-4 sm:mt-5">{process.title}</h2>
        </Reveal>

        <RevealStagger
          className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-4"
          stagger={0.12}
          delayChildren={0.04}
        >
          {process.steps.map((step, i) => {
            const Icon = stepIcons[i] ?? ClipboardList;
            return (
              <RevealItem key={step.n}>
                <div className="relative flex h-full flex-col rounded-xl border border-border/60 bg-card p-5 pt-6 shadow-[var(--card-shadow)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--elevated-shadow)] lg:border-t-2 lg:border-primary/40">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <span className="font-display text-3xl font-semibold tabular-nums text-primary/90">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="site-body mt-3 flex-1 text-[0.9375rem] leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealStagger>

        <Reveal variant="fadeBlur" className="mt-14 sm:mt-16">
          <Button asChild size="lg" className="h-12 px-8 sm:h-11">
            <Link href="/contact">{process.cta}</Link>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
