"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

import { cn } from "@/lib/utils";
import {
  revealVariants,
  staggerItem,
  staggerItemSoft,
  viewEnter,
  type RevealVariant,
} from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay before this block animates (seconds) */
  delay?: number;
  variant?: RevealVariant;
};

/**
 * Scroll-triggered reveal (fade / slide / scale / blur).
 * Respects prefers-reduced-motion — renders static markup when enabled.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "fadeUp",
}: RevealProps) {
  const reduce = useReducedMotion();
  const variants = revealVariants[variant];

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewEnter}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
};

/**
 * Staggers direct child RevealItem (or any motion element using same variant keys).
 */
export function RevealStagger({
  children,
  className,
  stagger = 0.11,
  delayChildren = 0.06,
}: RevealStaggerProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewEnter}
      variants={{
        hidden: {
          transition: {
            staggerChildren: Math.max(0.05, stagger * 0.65),
            staggerDirection: -1,
          },
        },
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
            staggerDirection: 1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  /** Softer motion for text-heavy stacks */
  soft?: boolean;
};

export function RevealItem({ children, className, soft }: RevealItemProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={soft ? staggerItemSoft : staggerItem}
    >
      {children}
    </motion.div>
  );
}
