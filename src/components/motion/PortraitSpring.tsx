"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { viewEnter } from "@/lib/motion";

/** Gentle spring reveal for the about portrait (or any block child). */
export function PortraitSpring({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.96, rotate: -0.5 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={viewEnter}
      transition={
        reduce
          ? { duration: 0 }
          : { type: "spring", stiffness: 260, damping: 26, mass: 0.9 }
      }
    >
      {children}
    </motion.div>
  );
}
