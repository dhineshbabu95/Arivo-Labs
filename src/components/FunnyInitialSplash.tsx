"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import { useNotifySplashExitStart } from "@/components/SplashTransitionLayout";

/**
 * On-trend workplace + internet humour (2025-ish): AI jokes, LinkedIn satire, Gen Z/millennial
 * slang used lightly so it still lands for everyone — not deep tech.
 */
const HEADLINES = [
  "Loading… it's giving patience. (You'll see.)",
  "Main-character energy for this one browser tab.",
  "Faster than a LinkedIn thought-leader's 47-slide 'framework.'",
  "AI didn't build this site. A human did. The bar is low; we're clearing it.",
  "Almost ready — unlike your colleague who's still on mute.",
  "RTO can wait. This page works from the couch too.",
  "Polishing pixels while your screen-time report silently judges us both.",
  "Still quicker than explaining what you actually do to relatives at lunch.",
  "Circle back? Never heard of her. We're almost done.",
  "Micro-break authorised. HR will pretend they saw this.",
  "Zero hustle-culture quotes were harmed in the making of this load.",
  "Teaching this progress bar to touch grass after we're finished.",
];

const SUBLINES = [
  "Millennials, Gen Z, boomers, whoever — if you laughed once, we're trending in the right direction.",
  "No cap: we'd have loaded instantly if the multiverse cooperated.",
  "If ChatGPT wrote this joke, it would add three disclaimers and a table.",
  "Your uncle still prints emails. He'd still approve of this wait. Barely.",
  "Reply-all energy: zero. Delulu levels: responsibly low.",
  "This is core memory… for the next twelve seconds, anyway.",
  "Slay, but in the 'compliant with company policy' sense.",
  "WFH, RTO, hybrid — we're just here to load and log off in peace.",
  "Not brain rot. Brain… lightly toasted. Professional toasted.",
  "Per my last loading screen: we're almost there.",
  "If this were a podcast, we'd spend eight minutes on an ad read first. We're not that cruel.",
  "Good vibes only — unless the Wi-Fi acts up, then we riot politely.",
];

function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

/**
 * How long the splash stays up:
 * - Usually **~minReadMs** — we always wait at least this long so you can read the joke.
 * - The screen also waits for **fonts to finish loading**; if that’s slower than the minimum,
 *   it stays until fonts are ready (so text doesn’t pop in mid-joke).
 * - **Never longer than maxWaitMs** (safety cap if something hangs).
 */
const MIN_READ_MS = 5_800;
const MAX_WAIT_MS = 11_000;

export function FunnyInitialSplash() {
  const reduce = useReducedMotion();
  const notifyContentReveal = useNotifySplashExitStart();
  const notifyRef = useRef(notifyContentReveal);
  notifyRef.current = notifyContentReveal;
  const [visible, setVisible] = useState(!reduce);
  const [progress, setProgress] = useState(0);
  const [headline, setHeadline] = useState(HEADLINES[0]);
  const [subline, setSubline] = useState(SUBLINES[0]);

  const tickLabels = useMemo(
    () => ["Vibes", "Coffee", "Almost", "Locked in*"] as const,
    []
  );

  useEffect(() => {
    if (reduce) return;

    setHeadline(pick(HEADLINES));
    setSubline(pick(SUBLINES));

    const progressTimer = window.setInterval(() => {
      setProgress((p) => {
        if (p >= 99) return 99;
        const bump = 4 + Math.random() * 18;
        if (Math.random() < 0.14) {
          return Math.max(3, p - (6 + Math.random() * 14));
        }
        return Math.min(99, p + bump);
      });
    }, 160);

    const minMs = MIN_READ_MS;
    const maxMs = MAX_WAIT_MS;
    let dismissed = false;
    /** DOM timer id — typed as number for browser `setTimeout` */
    let capTimer = 0;

    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;
      window.clearTimeout(capTimer);
      setProgress(100);
      /** Start main chrome fade / de-blur in sync with splash exit */
      notifyRef.current();
      window.setTimeout(() => setVisible(false), 320);
    };

    void Promise.all([
      document.fonts?.ready?.catch(() => undefined) ?? Promise.resolve(),
      new Promise<void>((resolve) => window.setTimeout(resolve, minMs)),
    ]).then(dismiss);

    capTimer = window.setTimeout(dismiss, maxMs) as number;

    return () => {
      dismissed = true;
      window.clearInterval(progressTimer);
      window.clearTimeout(capTimer);
    };
  }, [reduce]);

  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible]);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="splash"
          role="status"
          aria-live="polite"
          aria-busy="true"
          aria-label="Loading site"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center px-6
            bg-white/40 backdrop-blur-2xl backdrop-saturate-150
            dark:bg-zinc-950/45 dark:backdrop-blur-2xl"
          initial={{ opacity: 1, scale: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: "blur(10px)",
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/*
            Frosted / translucent overlay (glassmorphism) so the homepage shows through.
            Inner panel is a bit more opaque so the jokes stay readable.
          */}
          <motion.div
            className="w-full max-w-md rounded-2xl border border-white/50 bg-white/50 px-8 py-10 text-center font-sans shadow-[0_12px_48px_-16px_rgba(0,0,0,0.2)] backdrop-blur-md
              dark:border-white/10 dark:bg-zinc-900/55 dark:shadow-[0_16px_56px_-16px_rgba(0,0,0,0.55)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 30,
              mass: 0.9,
            }}
          >
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-500 dark:text-zinc-400">
              Loading — no notes
            </p>
            <h2 className="mt-5 text-lg font-semibold leading-snug tracking-tight text-neutral-950 dark:text-zinc-50 sm:text-xl">
              {headline}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-zinc-400 sm:text-[0.9375rem]">
              {subline}
            </p>

            <div className="mt-10">
              <div className="h-1.5 overflow-hidden rounded-sm border border-neutral-400/70 bg-neutral-200/80 dark:border-zinc-600 dark:bg-zinc-800/90">
                <motion.div
                  className="h-full bg-neutral-950 dark:bg-zinc-100"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ type: "tween", ease: "linear", duration: 0.2 }}
                />
              </div>
              <div className="mt-2 flex justify-between font-mono text-[10px] text-neutral-500 dark:text-zinc-500">
                <span>{Math.round(progress)}%</span>
                <span className="tabular-nums">
                  {progress < 30
                    ? tickLabels[0]
                    : progress < 55
                      ? tickLabels[1]
                      : progress < 85
                        ? tickLabels[2]
                        : tickLabels[3]}
                </span>
              </div>
            </div>

            <p className="mt-8 text-[10px] text-neutral-500 dark:text-zinc-500">
              *&quot;Locked in&quot; is aspirational. The site&apos;s real; your focus is between you
              and your 14 open tabs.
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
