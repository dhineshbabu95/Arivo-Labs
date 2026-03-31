"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type MediaFrameProps = {
  src: string | null;
  alt: string;
  /** Shown in empty state so you know what to drop in */
  slotLabel: string;
  /** Tailwind aspect ratio class, e.g. aspect-[4/3] */
  aspectClass?: string;
  /** `bare` = no outer border/shadow (e.g. inside project cards) */
  variant?: "framed" | "bare";
  className?: string;
  sizes?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
  imageWidth?: number;
  imageHeight?: number;
};

/**
 * Photo when `src` is set; otherwise a calm placeholder with the slot label.
 * Subtle motion: spring scale-in on scroll + light hover lift when an image exists.
 */
export function MediaFrame({
  src,
  alt,
  slotLabel,
  aspectClass = "aspect-[4/3]",
  variant = "framed",
  className,
  sizes = "(max-width: 1024px) 92vw, 440px",
  priority = false,
  fit = "cover",
  imageWidth,
  imageHeight,
}: MediaFrameProps) {
  const reduce = useReducedMotion();
  const framed = variant === "framed";

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden bg-muted/20 dark:bg-card/30",
        aspectClass,
        framed &&
          "rounded-lg border border-border/70 shadow-[var(--card-shadow)] dark:border-border/60 dark:bg-card/40",
        !framed && "rounded-none border-0 shadow-none",
        className
      )}
      initial={reduce ? false : { opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      /** `once: true` — avoids stuck opacity 0 when nested in motion parents + no vanish on scroll-away */
      viewport={{
        once: true,
        amount: 0.12,
        margin: "0px 0px -12% 0px",
      }}
      transition={
        reduce
          ? { duration: 0 }
          : { type: "spring", stiffness: 320, damping: 28, mass: 0.85 }
      }
      whileHover={
        reduce || !src
          ? undefined
          : { scale: 1.01, transition: { type: "spring", stiffness: 400, damping: 25 } }
      }
    >
      {src ? (
        imageWidth && imageHeight ? (
          <Image
            src={src}
            alt={alt}
            width={imageWidth}
            height={imageHeight}
            className="h-auto w-full"
            sizes={sizes}
            priority={priority}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className={fit === "contain" ? "object-contain" : "object-cover"}
            sizes={sizes}
            priority={priority}
          />
        )
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <span className="rounded-full border border-dashed border-border/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Image
          </span>
          <p className="max-w-[14rem] text-xs leading-relaxed text-muted-foreground">
            {slotLabel}
          </p>
        </div>
      )}
    </motion.div>
  );
}
