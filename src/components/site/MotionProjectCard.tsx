"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { MediaFrame } from "@/components/media/MediaFrame";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { work } from "@/content";

type Case = (typeof work.caseStudies)[number];

export function MotionProjectCard({ project: p }: { project: Case }) {
  const reduce = useReducedMotion();
  const useOriginalSize = p.id === "1" || p.id === "2" || p.id === "3";
  const originalDims =
    p.id === "1"
      ? { width: 846, height: 684 }
      : p.id === "2"
        ? { width: 1024, height: 655 }
        : p.id === "3"
          ? { width: 988, height: 1024 }
        : null;

  return (
    <Link href={`/work#${p.id}`} className="group block h-full [perspective:1200px]">
      <motion.div
        className="h-full"
        whileHover={
          reduce
            ? undefined
            : {
                rotateX: 2,
                rotateY: -2,
                y: -6,
                transition: { type: "spring", stiffness: 420, damping: 28 },
              }
        }
        whileTap={reduce ? undefined : { scale: 0.995 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Card className="site-card-premium h-full overflow-hidden border-border/70 bg-card/90 ring-1 ring-inset ring-black/[0.03] hover:border-primary/40 hover:bg-card hover:shadow-[var(--elevated-shadow)] hover:shadow-primary/10 dark:ring-white/[0.04] dark:border-border/60 dark:bg-card/50 dark:hover:bg-card/95">
          <div className="border-b border-border/50">
            <MediaFrame
              variant="bare"
              src={p.coverImage ?? null}
              alt={p.coverAlt}
              slotLabel={`“${p.title}” → _source + resize → 1600×1000 WebP (IMAGE_SLOTS.md)`}
              aspectClass={useOriginalSize ? "" : "aspect-[16/10]"}
              fit={useOriginalSize ? "contain" : "cover"}
              imageWidth={originalDims?.width}
              imageHeight={originalDims?.height}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
              className={useOriginalSize ? "bg-card/20 p-3" : ""}
            />
          </div>
          <CardHeader className="pt-5">
            <CardTitle className="flex items-start justify-between gap-3 font-sans text-base font-semibold sm:text-lg">
              <span className="leading-snug">{p.title}</span>
              <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground opacity-60 transition-all duration-300 group-hover:translate-x-px group-hover:-translate-y-px group-hover:text-primary group-hover:opacity-100" />
            </CardTitle>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {p.client}
            </p>
          </CardHeader>
          <CardContent>
            <p className="text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-sm">
              {p.businessOutcome}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
