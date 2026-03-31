"use client";

import Image from "next/image";
import { useCallback, useId, useState, type KeyboardEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import { about } from "@/content";

const SIZE_CLASSES =
  "h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 xl:h-[26rem] xl:w-[26rem]";

type ProfilePortraitProps = {
  className?: string;
  /** Use on first screen if this block is above the fold */
  priority?: boolean;
};

export function ProfilePortrait({
  className,
  priority = false,
}: ProfilePortraitProps) {
  /** Single update so back-face copy matches visit count on the same paint. */
  const [card, setCard] = useState({ flipped: false, backVisits: 0 });
  const reduce = useReducedMotion();
  const labelId = useId();
  const hintId = useId();

  const flipped = card.flipped;
  const backVisits = card.backVisits;

  const toggle = useCallback(() => {
    setCard((s) => {
      if (!s.flipped) {
        return { flipped: true, backVisits: s.backVisits + 1 };
      }
      return { ...s, flipped: false };
    });
  }, []);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    },
    [toggle]
  );

  return (
    <div
      className={cn(
        "relative shrink-0 [perspective:1400px]",
        SIZE_CLASSES,
        className
      )}
    >
      <button
        type="button"
        onClick={toggle}
        onKeyDown={onKeyDown}
        aria-pressed={flipped}
        aria-labelledby={labelId}
        aria-describedby={hintId}
        className={cn(
          "relative h-full w-full cursor-pointer rounded-lg border-0 bg-transparent p-0 text-left shadow-[var(--card-shadow)] transition-shadow duration-300",
          "hover:shadow-[var(--elevated-shadow)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        )}
      >
        <span id={labelId} className="sr-only">
          {flipped
            ? backVisits >= 2
              ? "Back of card — activate to show portrait again"
              : "Classified back of card — activate to show portrait again"
            : "Portrait photo — activate to flip card"}
        </span>
        <span id={hintId} className="sr-only">
          {backVisits >= 2
            ? "Playful denial message on the back."
            : "Easter egg on the back. Not actually classified."}
        </span>

        <motion.div
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
          initial={false}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={
            reduce
              ? { duration: 0.2, ease: "easeInOut" }
              : { type: "spring", stiffness: 76, damping: 15, mass: 0.75 }
          }
        >
          {/* Front — real photo */}
          <div
            className={cn(
              "absolute inset-0 overflow-hidden rounded-lg border border-border/80 bg-muted/20 dark:border-border/70 dark:bg-card/40",
              "[backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
            )}
          >
            <Image
              src={about.portrait}
              alt=""
              fill
              className="object-cover object-[center_18%]"
              sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, (max-width: 1280px) 384px, 416px"
              priority={priority}
              aria-hidden
            />
          </div>

          {/* Back — first visit: Batman bit; second+ visits: full denial */}
          <div
            className={cn(
              "absolute inset-0 flex flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border border-border/80 bg-card p-5 text-center shadow-inner dark:border-border/60 dark:bg-card/95",
              "[transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
            )}
          >
            {backVisits >= 2 ? (
              <>
                <span className="text-2xl" aria-hidden>
                  🙈
                </span>
                <p className="font-display text-base font-semibold leading-snug tracking-tight text-foreground sm:text-lg">
                  Never mind
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  I don&apos;t know what you thought you&apos;d find here. You heard{" "}
                  <span className="font-semibold text-foreground">nothing</span>. We never had
                  this conversation. Go look at the hero section or something.
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Tap again · forget this happened
                </p>
              </>
            ) : (
              <>
                <span className="text-2xl" aria-hidden>
                  🦇
                </span>
                <p className="font-display text-base font-semibold leading-snug tracking-tight text-foreground sm:text-lg">
                  Classified
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Between us: I&apos;m secretly Batman. This whole &quot;cloud engineer&quot; thing
                  is the cover story. Do{" "}
                  <span className="font-semibold text-foreground">not</span> tell anyone —
                  especially not LinkedIn.
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-accent">
                  Tap again · resume civilian mode
                </p>
              </>
            )}
          </div>
        </motion.div>
      </button>
    </div>
  );
}
