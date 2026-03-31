"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

import { MediaFrame } from "@/components/media/MediaFrame";
import { HeroVisualVideo } from "@/components/site/HeroVisualVideo";
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

  /* Video: no Framer `transform` on the wrapper — it can prevent muted autoplay. */
  if (!visual.src) {
    return (
      <div
        ref={ref}
        className="relative mt-6 block w-full justify-self-stretch sm:mt-0 lg:mt-0 lg:max-w-none"
      >
        <HeroVisualVideo
          src={visual.videoSrc ?? undefined}
          aspectClass="aspect-video"
        />
      </div>
    );
  }

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
        sizes="(max-width: 1024px) 90vw, (max-width: 1280px) 400px, 512px"
        priority
      />
    </motion.div>
  );
}
