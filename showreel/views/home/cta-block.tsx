"use client";

import { animated, type SpringValue } from "@react-spring/web";
import { memo, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ctaReveal } from "@/showreel/utils/showreel/timeline";

export interface CtaBlockProps {
  /** Global scroll spring (0→1). */
  p: SpringValue<number>;
  heading: string;
  /** Second heading line, rendered semi-transparent (like the hero subtitle). */
  headingFaded: string;
  sub: string;
  button: string;
  href: string;
}

/**
 * Call-to-action overlaid on the final chrome-star block. Left-aligned copy (the
 * star sits to the right of the frame) that fades + rises in as the camera flies
 * into the block — driven by the global spring (`ctaReveal`), no CSS transition.
 * Heading uses the hero-H1 scale (`7vw`) and breaks onto two lines, the second
 * one semi-transparent like the hero subtitle.
 */
// `memo`: props are stable, so it mounts once and its interpolations are never
// re-created by the stage's visibility re-renders (avoids a one-frame reset).
export const CtaBlock = memo(({ p, heading, headingFaded, sub, button, href }: CtaBlockProps) => {
  // The visible card lives inside the stage's nested overflow-hidden +
  // perspective/preserve-3d camera-rig transform chain. In practice that stack
  // doesn't reliably hit-test a real click through to a descendant anchor here
  // (verified: the card paints pixel-correct, but a native click at the
  // button's on-screen coordinates resolves to an ancestor instead, even with
  // every layer's `pointer-events` correctly set to `none`). Rather than fight
  // that further, the actual click target below is a portal straight to
  // `<body>` — a plain, non-3D-transformed overlay outside that stack — so hit-
  // testing is trivial. Mount-gated since `document` doesn't exist on the server.
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  useEffect(() => setPortalRoot(document.body), []);

  return (
    <>
      <animated.div
        className="pointer-events-none absolute inset-0 z-[2] flex flex-col items-start justify-center gap-[2.5vmin] p-[9vmin]"
        style={{
          opacity: p.to(ctaReveal),
          transform: p.to((v) => `translateY(${(1 - ctaReveal(v)) * 6}vh)`),
        }}
      >
        <h2 className="m-0 flex max-w-[60vw] max-sm:max-w-[88vw] flex-col items-start text-[7vw] font-normal leading-[0.95] tracking-[-0.03em] text-paper">
          <span>{heading}</span>
          <span className="opacity-40">{headingFaded}</span>
        </h2>
        <p className="m-0 max-w-[26vw] max-sm:max-w-[80vw] text-[2.2vmin] max-sm:text-[3.4vmin] leading-snug text-paper/70">{sub}</p>
        {/* Purely decorative now — the real link is the portal below — so
            keyboard/screen-reader users land on the one that actually works. */}
        <a
          href={href}
          aria-hidden="true"
          tabIndex={-1}
          className="pointer-events-none mt-[1.5vmin] inline-flex items-center justify-center rounded-btn bg-paper px-[4.6vmin] py-[2.2vmin] text-[2.5vmin] leading-none text-ink"
        >
          {button}
        </a>
      </animated.div>

      {/* Real click target. Same heading/sub/button layout (invisible) so it
          naturally lands the anchor exactly where the visible one already is,
          with no manual position math. Only interactive once the visible card
          has essentially finished revealing (its own translateY has settled to
          a couple of px) — never earlier, so it can't shadow anything else. */}
      {portalRoot &&
        createPortal(
          <animated.div
            className="pointer-events-none fixed inset-[4vmin] max-sm:inset-[4px] z-[500] flex flex-col items-start justify-center gap-[2.5vmin] p-[9vmin] opacity-0"
            style={{ pointerEvents: p.to((v) => (ctaReveal(v) > 0.92 ? "auto" : "none")) }}
          >
            <h2
              aria-hidden="true"
              className="m-0 flex max-w-[60vw] max-sm:max-w-[88vw] flex-col items-start text-[7vw] font-normal leading-[0.95] tracking-[-0.03em]"
            >
              <span>{heading}</span>
              <span>{headingFaded}</span>
            </h2>
            <p aria-hidden="true" className="m-0 max-w-[26vw] max-sm:max-w-[80vw] text-[2.2vmin] max-sm:text-[3.4vmin] leading-snug">
              {sub}
            </p>
            <a
              href={href}
              className="mt-[1.5vmin] inline-flex items-center justify-center rounded-btn px-[4.6vmin] py-[2.2vmin] text-[2.5vmin] leading-none"
            >
              {button}
            </a>
          </animated.div>,
          portalRoot,
        )}
    </>
  );
});
CtaBlock.displayName = "CtaBlock";
