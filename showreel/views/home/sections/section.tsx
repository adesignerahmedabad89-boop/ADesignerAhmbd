import type { ReactNode } from "react";

/** Page inset — the stage's `p-[4vmin]` margin doubled, as `CtaBlock` does. */
export const SECTION_INSET = "px-[8vmin] max-sm:px-[6vmin]";
/** Standard vertical rhythm between merged sections. */
export const SECTION_RHYTHM = "py-[13vmin] max-sm:py-[15vmin]";

export interface SectionProps {
  children: ReactNode;
  /** Anchor id — preserves the source site's `#about` / `#services` targets. */
  id?: string;
  className?: string;
  /** Accessible name for the landmark, when the visible heading is elsewhere. */
  label?: string;
  /** Horizontal inset. Override for full-bleed content (the logo rail). */
  inset?: string;
  /** Vertical rhythm. Override for the tighter connective sections. */
  rhythm?: string;
}

/**
 * Shell for every merged marketing section — the single source of the vertical
 * rhythm and page inset below the Showreel stage.
 *
 * The measurements are the stage's own: `vmin`-proportional (never `rem`, which
 * the route's adaptive root font-size would scale a second time). Spacing is
 * passed in rather than overridden through `className`, because Tailwind
 * utilities of the same kind carry equal specificity — which of `px-[8vmin]` and
 * `px-0` wins would come down to stylesheet order, not the order they appear in
 * the attribute.
 *
 * Backgrounds are deliberately transparent: `<body>` is black for this route, so
 * every section sits on one uninterrupted backdrop and the seams between them
 * are pure spacing rather than colour changes.
 */
export const Section = ({
  children,
  id,
  className,
  label,
  inset = SECTION_INSET,
  rhythm = SECTION_RHYTHM,
}: SectionProps) => (
  <section
    id={id}
    aria-label={label}
    className={`relative w-full ${inset} ${rhythm} ${className ?? ""}`}
  >
    {children}
  </section>
);
