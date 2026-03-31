"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Prevent the browser from restoring an old scroll offset for the same URL
 * (common on localhost refresh). Skip when a hash is present so in-page anchors work.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    try {
      window.history.scrollRestoration = "manual";
    } catch {
      /* ignore */
    }

    const hash = window.location.hash;
    if (hash && hash.length > 1) return;

    const goTop = () =>
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    goTop();
    const id = requestAnimationFrame(() => {
      if (window.location.hash && window.location.hash.length > 1) return;
      goTop();
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
