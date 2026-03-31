"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

const DEFAULT_SRC = "/media/hero-ambient.mp4";

type HeroVisualVideoProps = {
  src?: string;
  className?: string;
  aspectClass?: string;
};

function configureMutedAutoplay(v: HTMLVideoElement) {
  v.muted = true;
  v.defaultMuted = true;
  v.volume = 0;
  v.loop = true;
  v.playsInline = true;
  v.setAttribute("muted", "");
  v.setAttribute("loop", "");
  v.setAttribute("playsinline", "");
  v.setAttribute("webkit-playsinline", "");
}

/**
 * Hero visual slot — plain DOM + no Framer on the `<video>` ancestors
 * (whileInView / opacity / scale on wrappers breaks muted autoplay in several browsers).
 */
export function HeroVisualVideo({
  src = DEFAULT_SRC,
  className,
  aspectClass = "aspect-video",
}: HeroVisualVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const tryPlay = useCallback(() => {
    const v = videoRef.current;
    if (!v || reduceMotion) return;
    configureMutedAutoplay(v);
    const p = v.play();
    if (p !== undefined) {
      void p.catch(() => {
        /* retry once after decode */
        window.setTimeout(() => void v.play().catch(() => {}), 200);
      });
    }
  }, [reduceMotion]);

  useEffect(() => {
    if (!mounted || reduceMotion) return;
    const v = videoRef.current;
    if (!v) return;

    configureMutedAutoplay(v);

    const onReady = () => tryPlay();

    /** Some engines still fire `ended` once; native `loop` usually handles the rest. */
    const onEnded = () => {
      v.currentTime = 0;
      tryPlay();
    };

    const onVis = () => {
      if (document.visibilityState === "visible") tryPlay();
    };

    v.addEventListener("loadedmetadata", onReady);
    v.addEventListener("loadeddata", onReady);
    v.addEventListener("canplay", onReady);
    v.addEventListener("canplaythrough", onReady);
    v.addEventListener("ended", onEnded);
    v.addEventListener("stalled", onReady);
    document.addEventListener("visibilitychange", onVis);

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) tryPlay();
      },
      { threshold: [0, 0.01, 0.1] }
    );
    io.observe(v);

    const t1 = window.setTimeout(tryPlay, 50);
    const t2 = window.setTimeout(tryPlay, 400);
    const t3 = window.setTimeout(tryPlay, 1200);

    tryPlay();

    /** If something pauses at loop boundary, nudge (muted decorative only). */
    const watchdog = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      if (v.paused && v.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        tryPlay();
      }
    }, 2500);

    return () => {
      window.clearInterval(watchdog);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      v.removeEventListener("loadedmetadata", onReady);
      v.removeEventListener("loadeddata", onReady);
      v.removeEventListener("canplay", onReady);
      v.removeEventListener("canplaythrough", onReady);
      v.removeEventListener("ended", onEnded);
      v.removeEventListener("stalled", onReady);
      document.removeEventListener("visibilitychange", onVis);
      io.disconnect();
    };
  }, [mounted, reduceMotion, src, tryPlay]);

  if (!mounted) {
    return (
      <div
        className={cn(
          "rounded-xl border border-border/60 bg-muted/20 dark:bg-card/30",
          aspectClass,
          className
        )}
        aria-hidden
      />
    );
  }

  if (reduceMotion) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-border/70 bg-muted/25 shadow-[var(--card-shadow)] dark:border-border/60 dark:bg-card/40",
          aspectClass,
          className
        )}
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-muted/40 dark:from-primary/10" />
      </div>
    );
  }

  /* No transform/animation on this wrapper — animated ancestors break muted autoplay in WebKit/Chromium. */
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-border/70 bg-muted/20 shadow-[var(--elevated-shadow)] dark:border-border/55 dark:bg-card/50",
        aspectClass,
        className
      )}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        aria-hidden
      />
    </div>
  );
}
