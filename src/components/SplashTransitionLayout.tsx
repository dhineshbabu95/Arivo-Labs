"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "framer-motion";

type SplashTransitionState = {
  notifySplashExitStart: () => void;
  contentRevealed: boolean;
};

const SplashTransitionContext = createContext<SplashTransitionState | null>(
  null
);

export function useNotifySplashExitStart() {
  return (
    useContext(SplashTransitionContext)?.notifySplashExitStart ?? (() => {})
  );
}

/**
 * Wraps the app shell. Place **`FunnyInitialSplash`** and **`SplashTransitionChrome`**
 * as siblings inside this provider.
 */
export function SplashTransitionProvider({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (reduce) setRevealed(true);
  }, [reduce]);

  const notifySplashExitStart = useCallback(() => {
    setRevealed(true);
  }, []);

  const contentRevealed = reduce || revealed;

  const value = useMemo(
    () => ({ notifySplashExitStart, contentRevealed }),
    [notifySplashExitStart, contentRevealed]
  );

  return (
    <SplashTransitionContext.Provider value={value}>
      {children}
    </SplashTransitionContext.Provider>
  );
}

/**
 * Animated wrapper for nav / main / footer — **not** the splash (keep splash outside this).
 */
export function SplashTransitionChrome({ children }: { children: ReactNode }) {
  const ctx = useContext(SplashTransitionContext);
  if (!ctx) {
    throw new Error(
      "SplashTransitionChrome must be used inside SplashTransitionProvider"
    );
  }

  const { contentRevealed } = ctx;
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="flex min-h-screen flex-col"
      initial={false}
      animate={
        contentRevealed
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }
          : {
              opacity: 0.82,
              y: 18,
              scale: 0.987,
              filter: "blur(10px)",
            }
      }
      transition={
        reduce
          ? { duration: 0.01 }
          : {
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              opacity: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
              y: { type: "spring", stiffness: 220, damping: 32, mass: 0.9 },
              scale: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
              filter: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            }
      }
    >
      {children}
    </motion.div>
  );
}
