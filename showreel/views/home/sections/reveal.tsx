"use client";

import type { ReactNode } from "react";
import type { Tags } from "@/showreel/types/springs";
import { Inview } from "@/showreel/components/animation/springs/in-view";

export interface RevealProps {
  children: ReactNode;
  tag?: Tags;
  /** Stagger delay in ms. */
  delay?: number;
  /** Upward travel in px. */
  y?: number;
  /** Initial blur in px (the signature "progressive blur" reveal). */
  blur?: number;
  className?: string;
}

/**
 * Scroll-triggered twin of `components/ui/appear.tsx`.
 *
 * `Appear` is gated on the intro loader, which only makes sense above the fold —
 * these sections sit past a 2000vh scroll track, where the loader lifted long
 * ago. `Reveal` keeps Appear's exact entrance (same `from`/`to`, same
 * `{ tension: 80, friction: 22 }` config) but fires it from `Inview` instead, so
 * the marketing sections read as the same motion vocabulary as the stage.
 *
 * `mode="once"` — the reveal plays on first entry and stays settled, so
 * scrolling back up never re-blurs content the reader has already passed.
 */
export const Reveal = ({
  children,
  tag = "div",
  delay = 0,
  y = 24,
  blur = 16,
  className,
}: RevealProps) => (
  <Inview
    tag={tag}
    mode="once"
    delayIn={delay}
    from={{
      opacity: 0,
      filter: `blur(${blur}px)`,
      transform: `translateY(${y}px)`,
    }}
    to={{ opacity: 1, filter: "blur(0px)", transform: "translateY(0px)" }}
    config={{ tension: 80, friction: 22 }}
    className={className}
  >
    {children}
  </Inview>
);
