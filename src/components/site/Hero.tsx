"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { MediaFrame } from "@/components/media/MediaFrame";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
  easeOutExpo,
  exitTransition,
  springReveal,
  viewHero,
} from "@/lib/motion";
import { home, site } from "@/content";
import { HeroInteractiveField } from "@/components/site/HeroInteractiveField";
import { HeroVisual } from "@/components/site/HeroVisual";

const heroLineVariants = {
  hidden: { opacity: 0, x: -16, transition: exitTransition },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: easeOutExpo },
  },
};

const heroColumnStagger = {
  hidden: {
    transition: {
      staggerChildren: 0.07,
      staggerDirection: -1,
    },
  },
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0,
      staggerDirection: 1,
    },
  },
};

const heroRootStagger = {
  hidden: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 36, transition: exitTransition },
  show: {
    opacity: 1,
    y: 0,
    transition: springReveal,
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frame = useRef<number>();
  const [parallaxOn, setParallaxOn] = useState(false);
  /** Fine pointer only — skip cursor parallax on touch / coarse devices (performance + no jitter). */
  const [finePointer, setFinePointer] = useState(false);

  const cursorDrive = parallaxOn && finePointer;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const orbParallax = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduce ? 0 : 80]
  );

  const auroraParallax = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduce ? 0 : -40]
  );

  const smoothOrb = useSpring(orbParallax, {
    stiffness: 88,
    damping: 36,
    mass: 0.4,
  });
  const smoothAurora = useSpring(auroraParallax, {
    stiffness: 88,
    damping: 36,
    mass: 0.4,
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setParallaxOn(!mq.matches);
    const onChange = () => setParallaxOn(!mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const sync = () => setFinePointer(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const tick = useCallback(() => {
    const el = sectionRef.current;
    if (!el || !cursorDrive) return;

    const lerp = 0.048;
    current.current.x += (target.current.x - current.current.x) * lerp;
    current.current.y += (target.current.y - current.current.y) * lerp;

    el.style.setProperty("--hero-x", current.current.x.toFixed(4));
    el.style.setProperty("--hero-y", current.current.y.toFixed(4));

    frame.current = requestAnimationFrame(tick);
  }, [cursorDrive]);

  useEffect(() => {
    if (!cursorDrive) {
      sectionRef.current?.style.setProperty("--hero-x", "0");
      sectionRef.current?.style.setProperty("--hero-y", "0");
      if (frame.current) cancelAnimationFrame(frame.current);
      return;
    }
    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [cursorDrive, tick]);

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (!cursorDrive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    target.current = {
      x: Math.max(-1, Math.min(1, nx)),
      y: Math.max(-1, Math.min(1, ny)),
    };
  };

  const onPointerLeave = () => {
    target.current = { x: 0, y: 0 };
  };

  return (
    <section
      ref={sectionRef}
      className="hero-section relative isolate min-h-[min(88vh,52rem)] overflow-hidden pt-28 pb-24 sm:min-h-0 sm:pb-32 sm:pt-36 lg:pb-40 lg:pt-44"
      style={
        {
          "--hero-x": "0",
          "--hero-y": "0",
        } as React.CSSProperties
      }
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div className="pointer-events-none absolute inset-0 isolate overflow-hidden">
        {!reduce ? <HeroInteractiveField /> : null}
        <motion.div
          className="hero-aurora absolute -inset-[22%] opacity-100"
          style={{ y: smoothAurora }}
          aria-hidden
        />
        <div
          className="hero-grain pointer-events-none absolute inset-0"
          aria-hidden
        />

        <motion.div
          className="hero-orb hero-orb-a pointer-events-none absolute -right-[14%] top-[-20%] h-[min(28rem,88vw)] w-[min(28rem,88vw)] rounded-full bg-primary-bright/10 blur-3xl dark:bg-primary-bright/[0.12]"
          style={{ y: smoothOrb }}
          aria-hidden
        />
      </div>

      <Container className="relative z-10 flex min-h-[min(72vh,44rem)] flex-col justify-center sm:min-h-0">
        {reduce ? (
          <HeroCopy />
        ) : (
          <motion.div
            className="grid gap-10 lg:grid-cols-[auto_minmax(0,1fr)_minmax(300px,44%)] lg:items-center lg:gap-x-10 xl:gap-x-14"
            initial="hidden"
            whileInView="show"
            viewport={viewHero}
            variants={heroRootStagger}
          >
            <motion.div
              variants={heroLineVariants}
              className="mt-2 hidden h-[clamp(4rem,12vh,6.5rem)] w-1 shrink-0 rounded-full bg-primary sm:block"
              aria-hidden
            />
            <motion.div
              className="min-w-0 lg:col-start-2"
              variants={heroColumnStagger}
            >
              <motion.p
                variants={heroItemVariants}
                className="site-eyebrow mb-5 sm:mb-6"
              >
                {home.hero.eyebrow}
              </motion.p>
              <motion.h1
                variants={heroItemVariants}
                className="hero-headline font-display font-semibold tracking-[-0.03em] text-foreground"
              >
                {home.hero.headline}
              </motion.h1>
              <motion.p
                variants={heroItemVariants}
                className="hero-subhead site-body editorial-measure mt-7 sm:mt-9"
              >
                {home.hero.subheadline}
              </motion.p>
              <motion.div
                variants={heroItemVariants}
                className="mt-10 flex w-full flex-col gap-3 sm:mt-14 sm:max-w-xl sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="group h-12 w-full min-h-12 px-8 transition-[transform,box-shadow] duration-200 hover:-translate-y-px sm:h-11 sm:w-auto"
                >
                  <Link href="#contact">
                    {home.hero.primaryCta}
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 w-full min-h-12 border-border/80 bg-background/40 backdrop-blur-sm transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:bg-background/70 sm:h-11 sm:w-auto"
                >
                  <Link
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {home.hero.secondaryCta}
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            <div className="min-w-0 lg:col-span-1 lg:col-start-3 lg:row-start-1">
              <HeroVisual />
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}

function HeroCopy() {
  const { visual } = home.hero;
  return (
    <div className="grid gap-10 lg:grid-cols-[auto_minmax(0,1fr)_minmax(300px,44%)] lg:items-center lg:gap-x-10 xl:gap-x-14">
      <div
        className="mt-2 hidden h-[clamp(4rem,12vh,6.5rem)] w-1 shrink-0 rounded-full bg-primary sm:block"
        aria-hidden
      />
      <div className="min-w-0 lg:col-start-2">
        <p className="site-eyebrow mb-5 sm:mb-6">{home.hero.eyebrow}</p>
        <h1 className="hero-headline font-display font-semibold tracking-[-0.03em] text-foreground">
          {home.hero.headline}
        </h1>
        <p className="hero-subhead site-body editorial-measure mt-7 sm:mt-9">
          {home.hero.subheadline}
        </p>
        <div className="mt-10 flex w-full flex-col gap-3 sm:mt-14 sm:max-w-xl sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <Button
            asChild
            size="lg"
            className="group h-12 w-full min-h-12 px-8 transition-[transform,box-shadow] duration-200 hover:-translate-y-px sm:h-11 sm:w-auto"
          >
            <Link href="#contact">
              {home.hero.primaryCta}
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 w-full min-h-12 border-border/80 bg-background/40 backdrop-blur-sm transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:bg-background/70 sm:h-11 sm:w-auto"
          >
            <Link
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {home.hero.secondaryCta}
            </Link>
          </Button>
        </div>
      </div>
      <div className="hidden min-w-0 lg:col-start-3 lg:block">
        <MediaFrame
          src={visual.src}
          alt={visual.alt}
          slotLabel="Add: _source/hero-visual.* → npm run images:resize (1200×900). See IMAGE_SLOTS.md."
          aspectClass="aspect-[4/3]"
          sizes="(max-width: 1024px) 90vw, (max-width: 1280px) 400px, 512px"
          priority
        />
      </div>
    </div>
  );
}
