"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { MediaFrame } from "@/components/media/MediaFrame";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { springReveal } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { home } from "@/content";

const storyRowContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.06,
    },
  },
};

/** Static variants only — function `show` + stagger broke child opacity (invisible section). */
const storyRowItem: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    transition: { duration: 0.3 },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: springReveal,
  },
};

/** Story: show once and stay visible — `once: false` was hiding everything when scrolling past. */
const storyViewport = {
  once: true,
  amount: 0.08,
  margin: "0px 0px -10% 0px",
} as const;

export function Story() {
  const steps = home.story.milestones;
  const reduce = useReducedMotion();

  return (
    <section
      id="story"
      className="site-section-pad scroll-mt-20 border-t border-border/50 sm:scroll-mt-24"
    >
      <Container>
        <Reveal variant="fadeBlur">
          <div className="mb-14 max-w-3xl sm:mb-16">
            <p className="site-eyebrow">{home.story.title}</p>
            <h2 className="site-section-title mt-4 sm:mt-5">
              {home.story.heading}
            </h2>
            <p className="site-body editorial-measure mt-5 sm:mt-6">
              {home.story.intro}
            </p>
          </div>
        </Reveal>

        {/* Collage-style rows: boxed image + compact text; order alternates; light “jumble” offsets on lg */}
        <div className="relative mx-auto max-w-6xl">
          {!reduce ? (
            <motion.div
              className="flex flex-col gap-14 sm:gap-16 lg:gap-20"
              initial="hidden"
              whileInView="show"
              viewport={storyViewport}
              variants={storyRowContainer}
            >
              {steps.map((step, i) => (
                <motion.article
                  key={`${step.phase}-${step.title}`}
                  variants={storyRowItem}
                  className={cn(
                    "relative will-change-transform",
                    i % 2 === 0 ? "-rotate-[0.65deg]" : "rotate-[0.65deg]",
                    i % 4 === 1 && "lg:ml-4 xl:ml-10",
                    i % 4 === 2 && "lg:-ml-2 xl:-ml-6",
                    i % 4 === 3 && "lg:ml-8 xl:ml-4"
                  )}
                >
                  <StoryRow step={step} index={i} />
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <div className="flex flex-col gap-14 sm:gap-16 lg:gap-20">
              {steps.map((step, i) => (
                <article key={`${step.phase}-${step.title}`}>
                  <StoryRow step={step} index={i} />
                </article>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

function StoryRow({
  step,
  index,
}: {
  step: (typeof home.story.milestones)[number];
  index: number;
}) {
  const imageOnRight = index % 2 === 1;
  const isMelbourne =
    step.phase === "Melbourne" && step.title === "A slower chapter";
  const isAlexa = step.phase === "AI" && step.title === "Alexa moment";
  const isStudy =
    step.phase === "Study" && step.title === "Engineering, then data";
  const isSydney = step.phase === "Sydney" && step.title === "Fresh start";
  const isGrowingUp = step.phase === "Growing up" && step.title === "Curious kid";
  const isToday = step.phase === "Today" && step.title === "What I focus on";
  const isPath = step.phase === "Path" && step.title === "Still building";
  const isWork = step.phase === "Work" && step.title === "Pipelines and platforms";

  return (
    <div
      className={cn(
        "flex flex-col gap-5 sm:gap-6 md:flex-row md:items-stretch md:gap-8 lg:gap-12",
        imageOnRight ? "md:flex-row-reverse" : ""
      )}
    >
      {/* Boxed image — clear frame; placeholder shows where to drop assets */}
      <div className="mx-auto w-full max-w-[280px] shrink-0 sm:max-w-[320px] md:mx-0 md:w-[38%] md:max-w-none lg:w-[36%]">
        <motion.div
          className="relative"
          whileHover={
            step.posterImage
              ? { scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 25 } }
              : undefined
          }
        >
          <MediaFrame
            variant="framed"
            src={step.posterImage}
            alt={step.posterAlt}
            slotLabel={`Drop image: /images/story/${slugForStoryPoster(step)}.webp — see IMAGE_SLOTS.md`}
            aspectClass={
              isMelbourne || isAlexa || isStudy || isSydney || isGrowingUp
                || isToday
                || isPath
                || isWork
                ? ""
                : "aspect-[3/4]"
            }
            fit="contain"
            imageWidth={
              isMelbourne
                ? 576
                : isAlexa
                  ? 768
                  : isStudy
                    ? 668
                    : isSydney
                      ? 768
                      : isGrowingUp
                        ? 576
                        : isToday
                          ? 682
                          : isPath
                            ? 682
                            : isWork
                              ? 768
                      : undefined
            }
            imageHeight={
              isMelbourne || isAlexa || isStudy || isSydney || isGrowingUp || isToday || isPath || isWork
                ? 1024
                : undefined
            }
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 38vw, 400px"
            className="grayscale shadow-[0_20px_50px_-24px_hsl(var(--primary)/0.2)] dark:shadow-[0_24px_60px_-20px_hsl(210_65%_5%/0.5)]"
          />
          <span
            className="pointer-events-none absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border border-border/80 bg-background/90 text-[10px] font-bold text-muted-foreground shadow-sm dark:bg-card/95"
            aria-hidden
          >
            {index + 1}
          </span>
        </motion.div>
      </div>

      {/* Small side text */}
      <div
        className={cn(
          "flex min-w-0 flex-1 flex-col justify-center md:py-2",
          imageOnRight ? "md:items-end md:text-right" : "md:items-start md:text-left"
        )}
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
          {step.phase}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl lg:text-2xl">
          {step.title}
        </h3>
        <p
          className={cn(
            "mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem] sm:leading-[1.75]",
            imageOnRight && "md:ml-auto"
          )}
        >
          {step.text}
        </p>
      </div>
    </div>
  );
}

function slugForStoryPoster(
  step: (typeof home.story.milestones)[number]
): string {
  const key = `${step.phase}-${step.title}`;
  const map: Record<string, string> = {
    "Growing up-Curious kid": "growing-up",
    "Study-Engineering, then data": "study-data",
    "AI-Alexa moment": "alexa-moment",
    "Melbourne-A slower chapter": "melbourne",
    "Sydney-Fresh start": "sydney",
    "Work-Pipelines and platforms": "work-pipelines",
    "Path-Still building": "path-building",
    "Today-What I focus on": "today-focus",
  };
  return map[key] ?? "story-chapter";
}
