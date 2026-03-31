import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/Container";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";
import { MotionProjectCard } from "@/components/site/MotionProjectCard";
import { home, work } from "@/content";

export function Projects() {
  return (
    <section
      id="projects"
      className="site-divider site-section-pad scroll-mt-20 border-border/50 sm:scroll-mt-24"
    >
      <Container>
        <div className="mb-14 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
          <Reveal variant="fadeBlur" className="min-w-0 max-w-3xl xl:max-w-4xl">
            <p className="site-eyebrow">{home.projects.title}</p>
            <h2 className="site-section-title mt-4 sm:mt-5">
              {home.projects.heading}
            </h2>
            <p className="site-body editorial-measure mt-5 sm:mt-6">
              {home.projects.intro}
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.12} className="shrink-0">
            <Link
              href="/work"
              className="group -mx-1 inline-flex min-h-11 items-center gap-1.5 rounded-full border border-transparent px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:border-primary/25 hover:bg-primary/[0.06] hover:text-primary dark:hover:bg-primary/10 sm:mx-0"
            >
              {home.projectsSection.viewAllLabel}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px" />
            </Link>
          </Reveal>
        </div>

        <RevealStagger
          className="grid gap-4 sm:gap-5 md:grid-cols-3 lg:gap-6"
          stagger={0.14}
          delayChildren={0.05}
        >
          {work.caseStudies.map((p) => (
            <RevealItem key={p.id}>
              <MotionProjectCard project={p} />
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
