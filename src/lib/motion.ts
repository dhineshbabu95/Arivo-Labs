import type { Transition, Variants } from "framer-motion";

/** Shared easing — smooth deceleration */
export const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const defaultTransition: Transition = {
  duration: 0.65,
  ease: easeOutExpo,
};

/** Slightly snappier when scrolling away (reverse) */
export const exitTransition: Transition = {
  duration: 0.42,
  ease: [0.4, 0, 0.2, 1],
};

/**
 * Reversible scroll: animate in when entering viewport, back to "hidden" when leaving.
 * `once: false` = replay when you scroll down again.
 */
export const viewEnter = {
  once: false,
  amount: 0.15,
  margin: "0px 0px -12% 0px",
} as const;

/** Hero block — reversible when scrolling away from / back to top */
export const viewHero = {
  once: false,
  amount: 0.22,
  margin: "-12% 0px -38% 0px",
} as const;

/** Stagger container — use with RevealItem children */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.06,
    },
  },
};

/** Modern spring — precise, not bouncy */
export const springReveal = {
  type: "spring" as const,
  stiffness: 380,
  damping: 32,
  mass: 0.82,
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 42,
    scale: 0.96,
    transition: exitTransition,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springReveal,
  },
};

export const staggerItemSoft: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    transition: exitTransition,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 340,
      damping: 30,
      mass: 0.75,
    },
  },
};

/**
 * Hero right column — slide in from the right only (no opacity fade).
 * Opacity:0 on this wrapper blocks muted video autoplay in Chromium / Safari.
 */
export const heroVisualVariants: Variants = {
  hidden: { x: 40, transition: exitTransition },
  show: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 28,
      mass: 0.8,
    },
  },
};

export const revealVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 48, transition: exitTransition },
    show: {
      opacity: 1,
      y: 0,
      transition: defaultTransition,
    },
  },
  fade: {
    hidden: { opacity: 0, transition: exitTransition },
    show: { opacity: 1, transition: { duration: 0.55, ease: easeOutExpo } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40, transition: exitTransition },
    show: {
      opacity: 1,
      x: 0,
      transition: defaultTransition,
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: 40, transition: exitTransition },
    show: {
      opacity: 1,
      x: 0,
      transition: defaultTransition,
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92, transition: exitTransition },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: easeOutExpo },
    },
  },
  fadeBlur: {
    hidden: {
      opacity: 0,
      y: 32,
      filter: "blur(10px)",
      transition: exitTransition,
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.75, ease: easeOutExpo },
    },
  },
} satisfies Record<string, Variants>;

export type RevealVariant = keyof typeof revealVariants;
