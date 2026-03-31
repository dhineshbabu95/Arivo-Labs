import { Container } from "@/components/Container";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { home } from "@/content";
import {
  DiagramMarketingToInsights,
  DiagramUserAutomationOutcome,
  DiagramWebsiteToDashboard,
} from "@/components/visuals/HowItWorksDiagrams";

const diagramComponents = {
  "web-to-dashboard": DiagramWebsiteToDashboard,
  "user-automation": DiagramUserAutomationOutcome,
  "marketing-insights": DiagramMarketingToInsights,
} as const;

export function HowItWorks() {
  const { howItWorks } = home;

  return (
    <section
      id="how-it-works"
      className="site-section-pad scroll-mt-20 border-t border-border/60 bg-muted/35 sm:scroll-mt-24"
    >
      <Container>
        <Reveal variant="fadeBlur" className="mx-auto max-w-3xl text-center">
          <p className="site-eyebrow">{howItWorks.eyebrow}</p>
          <h2 className="site-section-title mt-4 sm:mt-5">{howItWorks.title}</h2>
          <p className="site-body mx-auto mt-5 max-w-2xl sm:mt-6">
            {howItWorks.intro}
          </p>
        </Reveal>

        <RevealStagger
          className="mx-auto mt-14 grid max-w-5xl gap-5 sm:mt-16 lg:grid-cols-3"
          stagger={0.12}
          delayChildren={0.06}
        >
          {howItWorks.diagrams.map((d) => {
            const Diagram =
              diagramComponents[d.id as keyof typeof diagramComponents];
            return (
              <RevealItem key={d.id}>
                <Card className="h-full border-border/80 bg-card shadow-[var(--card-shadow)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--elevated-shadow)]">
                  <CardHeader className="pb-2">
                    <p className="font-diagram text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                      {d.label}
                    </p>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                      {d.title}
                    </h3>
                    <p className="font-diagram text-sm text-muted-foreground">
                      {d.caption}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="rounded-xl border border-border/60 bg-muted/20 p-4 dark:bg-muted/10">
                      {Diagram ? <Diagram /> : null}
                    </div>
                    <p className="mt-3 text-center font-diagram text-[11px] text-muted-foreground">
                      {d.visualHint}
                    </p>
                  </CardContent>
                </Card>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </Container>
    </section>
  );
}
