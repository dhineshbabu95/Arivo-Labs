/**
 * Image slots for the marketing site — wire `src` to a file under /public when ready.
 * See IMAGE_SLOTS.md in the project root for a human-readable map.
 */

export type ImageSlot = {
  /** Path under public/, e.g. "/images/home/hero.jpg", or null until asset exists */
  src: string | null;
  alt: string;
  /** Photographer / context for your own notes (not always shown) */
  notes?: string;
};

export const mediaSlots = {
  heroVisual: {
    src: null,
    alt: "Optional hero still — workspace, architecture diagram, or calm portrait in context.",
    notes: "Target 1200×900 (4:3) via npm run images:resize — hero-visual in _source/",
  } satisfies ImageSlot,

  aboutPortrait: {
    src: "/images/profile.png",
    alt: "Dhinesh Babu — portrait.",
    notes: "832×832 after resize (profile in _source/) — about.portrait in content.ts",
  } satisfies ImageSlot,

  projectCovers: {
    deployment: {
      src: null,
      alt: "Abstract or screenshot suggesting pipelines / releases.",
      notes: "1600×1000 — deployments in _source/",
    },
    dashboards: {
      src: null,
      alt: "Dashboard or data viz — calm, not busy.",
      notes: "1600×1000 — ops-dashboards in _source/",
    },
    secureWorkflows: {
      src: null,
      alt: "Security / workflow abstraction.",
      notes: "1600×1000 — secure-workflows in _source/",
    },
  } satisfies Record<string, ImageSlot>,

  beyondWork: {
    src: null,
    alt: "Optional — BJJ, gym, or outdoor; authentic, not stock-looking if possible.",
    notes: "1200×800 (3:2) — beyond-work in _source/",
  } satisfies ImageSlot,
} as const;
