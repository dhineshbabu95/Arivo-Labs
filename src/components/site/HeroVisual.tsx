"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

import { MediaFrame } from "@/components/media/MediaFrame";
import { HeroVisualVideo } from "@/components/site/HeroVisualVideo";
import { HeroIllustration } from "@/components/visuals/HeroIllustration";
import { home } from "@/content";

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.15"],
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [28, -18]);
  const y = useSpring(yRaw, { stiffness: 100, damping: 32, mass: 0.45 });

  const { visual } = home.hero;

  const showIllustration =
    "illustration" in visual && visual.illustration === true;

  if (visual.src) {
    return (
      <motion.div
        ref={ref}
        style={{ y }}
        className="relative mt-6 block w-full justify-self-stretch sm:mt-0 lg:mt-0 lg:max-w-none"
      >
        <MediaFrame
          src={visual.src}
          alt={visual.alt}
          slotLabel="Add: public/images/_source/hero-visual.* then npm run images:resize → 1200×900 WebP."
          aspectClass="aspect-[4/3]"
          sizes="(max-width: 1023px) min(100vw - 3rem, 36rem), (max-width: 1279px) 320px, min(448px, 28rem)"
          priority
        />
      </motion.div>
    );
  }

  if (showIllustration) {
    return (
      <motion.div
        ref={ref}
        style={{ y }}
        className="relative mt-6 flex w-full justify-center justify-self-stretch sm:mt-0 lg:mt-0 lg:max-w-none"
      >
        <div className="rounded-2xl border border-border/70 bg-card/80 p-4 shadow-[var(--elevated-shadow)] backdrop-blur-sm dark:bg-card/50 sm:p-6">
          <HeroIllustration />
        </div>
      </motion.div>
    );
  }

  if (visual.videoSrc) {
    return (
      <div
        ref={ref}
        className="relative mt-6 block w-full justify-self-stretch sm:mt-0 lg:mt-0 lg:max-w-none"
      >
        <HeroVisualVideo src={visual.videoSrc} aspectClass="aspect-video" />
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="relative mt-6 flex w-full justify-center justify-self-stretch sm:mt-0 lg:mt-0 lg:max-w-none"
    >
      <div className="rounded-2xl border border-border/70 bg-card/80 p-4 shadow-[var(--elevated-shadow)] dark:bg-card/50 sm:p-6">
        <HeroIllustration />
      </div>
    </motion.div>
  );
}
