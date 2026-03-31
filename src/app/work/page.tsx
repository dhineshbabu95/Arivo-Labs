import { work } from "@/content";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export const metadata = {
  title: "Work",
  description:
    "Case studies: releases, dashboards, and data workflows with calmer operations.",
};

export default function WorkPage() {
  return (
    <Section className="pt-24 sm:pt-32 lg:pt-36">
      <div className="max-w-4xl xl:max-w-5xl">
        <p className="site-eyebrow">Work</p>
        <h1 className="site-section-title mt-3 sm:mt-5">{work.title}</h1>
        <p className="site-body mt-6 sm:mt-8">{work.intro}</p>
      </div>

      <div className="mt-12 space-y-5 sm:mt-20 sm:space-y-6 lg:space-y-8">
        {work.caseStudies.map((study) => (
          <Card key={study.id} id={study.id} className="p-6 sm:p-8 md:p-10">
            <h2 className="font-sans text-xl font-semibold text-foreground">
              {study.title}
            </h2>
            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {study.client}
            </p>

            <div className="mt-12 space-y-10">
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/80 dark:text-primary/75">
                  What was messy
                </h3>
                <p className="site-body mt-4 text-foreground/90">
                  {study.businessChallenge}
                </p>
              </div>
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/80 dark:text-primary/75">
                  What I changed
                </h3>
                <p className="site-body mt-4 text-foreground/90">
                  {study.approachTaken}
                </p>
              </div>
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/80 dark:text-primary/75">
                  Tools
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.technologyUsed.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border/70 bg-muted/40 px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:border-border hover:text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/80 dark:text-primary/75">
                  Result
                </h3>
                <p className="mt-4 text-base font-medium leading-relaxed text-foreground">
                  {study.businessOutcome}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
