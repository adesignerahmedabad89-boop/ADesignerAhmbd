import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Cosmic UI primitives — the building blocks every inner page composes.
 *
 * The styling lives in `app/cosmic.css` as `.cosmic-*` classes rather than in
 * long className strings here, so the treatments exist once and a change to,
 * say, the card hover glow lands on all fifteen pages at once. These are all
 * Server Components: none of them needs state, so none of them ships JS.
 */

/* ── Buttons ─────────────────────────────────────────────────────────────── */

export interface CosmicButtonProps {
  href: string;
  children: ReactNode;
  /** `primary` is the gold→blue→red gradient; `ghost` is the glass outline. */
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
}

const BTN_SIZE = {
  md: "px-7 py-3 text-sm",
  lg: "px-10 py-4 text-base md:px-12 md:py-5 md:text-lg",
};

export const CosmicButton = ({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
}: CosmicButtonProps) => {
  const cls = `cosmic-btn ${
    variant === "primary" ? "cosmic-btn-primary" : "cosmic-btn-ghost"
  } ${BTN_SIZE[size]} ${className ?? ""}`;

  // External destinations (WhatsApp, socials) must stay plain anchors — `Link`
  // would try to client-navigate them.
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
};

/* ── Cards ───────────────────────────────────────────────────────────────── */

export interface GlassCardProps {
  children: ReactNode;
  className?: string;
  /** Adds the light-sweep on hover. Off for dense/text-heavy cards. */
  shimmer?: boolean;
  /** AOS stagger index — keeps the reveal cadence identical across pages. */
  index?: number;
  as?: "div" | "li" | "article";
}

export const GlassCard = ({
  children,
  className,
  shimmer = true,
  index,
  as: Tag = "div",
}: GlassCardProps) => (
  <Tag
    data-aos="fade-up"
    data-aos-delay={index !== undefined ? (index % 3) * 120 : undefined}
    className={`cosmic-card ${shimmer ? "cosmic-shimmer" : ""} ${
      className ?? ""
    }`}
  >
    {children}
  </Tag>
);

/** Icon chip used at the top of a card — a haloed circle around a cosmic mark. */
export const IconOrb = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <span
    className={`relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#dfb15b]/25 bg-gradient-to-br from-[#0b0718] to-[#05030f] text-[#dfb15b] shadow-[0_0_22px_rgba(223,177,91,0.15)] ${
      className ?? ""
    }`}
  >
    <span
      aria-hidden="true"
      className="cosmic-animate-pulse absolute inset-0 rounded-full bg-[#dfb15b]/10 blur-md"
    />
    <span className="relative">{children}</span>
  </span>
);

/* ── Section scaffolding ─────────────────────────────────────────────────── */

/** Page inset — shared by every section so the left/right gutter never drifts. */
export const SECTION_INSET = "px-5 sm:px-6";
/** Standard vertical rhythm between sections. */
export const SECTION_RHYTHM = "py-16 md:py-20 lg:py-24";

export interface CosmicSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Adds the faint gold hairline along the bottom edge. */
  rule?: boolean;
  /** Optional tinted plate behind the content, as on the Scientific Logo page. */
  tint?: "none" | "soft" | "deep";
  /**
   * Vertical rhythm override, e.g. `"pt-0 pb-16"` for a section that continues
   * the one above it.
   *
   * A prop rather than an `!`-prefixed utility in `className`: Tailwind v4 moved
   * the important modifier to a *suffix* (`py-0!`), so the old `!py-0` form
   * compiles to nothing at all — and without `!important` a second padding
   * utility only wins on stylesheet order, which is not something to rely on.
   * Passing the value in sidesteps the question entirely.
   */
  rhythm?: string;
  /** Horizontal inset override — for full-bleed content. */
  inset?: string;
}

const TINT = {
  none: "",
  soft: "bg-slate-950/20",
  deep: "bg-black/45",
};

export const CosmicSection = ({
  children,
  id,
  className,
  rule = true,
  tint = "none",
  rhythm = SECTION_RHYTHM,
  inset = SECTION_INSET,
}: CosmicSectionProps) => (
  <section
    id={id}
    className={`relative w-full ${inset} ${rhythm} ${TINT[tint]} ${
      rule ? "cosmic-rule" : ""
    } ${className ?? ""}`}
  >
    <div className="site-wrap">{children}</div>
  </section>
);

export interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  /** Rendered in the gold→violet gradient, on its own line. */
  titleAccent?: string;
  sub?: string;
  align?: "center" | "left";
  className?: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  titleAccent,
  sub,
  align = "center",
  className,
}: SectionHeadingProps) => (
  <div
    data-aos="fade-up"
    className={`${align === "center" ? "mx-auto text-center" : "text-left"} ${
      className ?? ""
    }`}
  >
    {eyebrow ? <span className="cosmic-eyebrow mb-3">{eyebrow}</span> : null}
    <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
      {title}
      {titleAccent ? (
        <>
          {" "}
          <span className="cosmic-gradient-text">{titleAccent}</span>
        </>
      ) : null}
    </h2>
    {sub ? (
      <p
        className={`mt-5 max-w-2xl text-base text-slate-300 ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {sub}
      </p>
    ) : null}
  </div>
);

/* ── Dividers ────────────────────────────────────────────────────────────── */

export type DividerVariant = "wave" | "orbit" | "constellation" | "glow";

/**
 * Section separator. Instead of plain whitespace, each variant draws a piece of
 * cosmic geometry — an energy wave, an orbit, a constellation, or a soft
 * glowing rule. Purely decorative, so all of them are `aria-hidden`.
 */
export const SectionDivider = ({
  variant = "glow",
  className,
}: {
  variant?: DividerVariant;
  className?: string;
}) => {
  if (variant === "glow") {
    return (
      <div aria-hidden="true" className={`relative h-px w-full ${className ?? ""}`}>
        <div className="absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-[#dfb15b]/60 to-transparent shadow-[0_0_12px_rgba(223,177,91,0.45)]" />
      </div>
    );
  }

  if (variant === "orbit") {
    return (
      <div
        aria-hidden="true"
        className={`relative flex h-16 md:h-20 w-full items-center justify-center overflow-hidden ${
          className ?? ""
        }`}
      >
        <div className="absolute inset-x-[8%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/35 to-transparent" />
        <div className="cosmic-animate-orbit relative h-16 w-16 rounded-full border border-[#dfb15b]/30">
          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dfb15b] shadow-[0_0_10px_3px_rgba(223,177,91,0.55)]" />
        </div>
      </div>
    );
  }

  if (variant === "constellation") {
    return (
      <div
        aria-hidden="true"
        className={`flex w-full justify-center overflow-hidden py-4 md:py-6 ${className ?? ""}`}
      >
        <svg
          viewBox="0 0 400 40"
          className="h-10 w-full max-w-2xl"
          fill="none"
          stroke="#dfb15b"
          strokeOpacity="0.45"
          strokeWidth="0.8"
        >
          <path d="M20 28L80 12L150 26L215 8L285 24L350 14L380 22" />
          {[
            [20, 28, 1.6], [80, 12, 2.2], [150, 26, 1.5],
            [215, 8, 2.4], [285, 24, 1.6], [350, 14, 2.1], [380, 22, 1.4],
          ].map(([cx, cy, r], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              fill="#fcd34d"
              stroke="none"
              className="cosmic-animate-twinkle"
              style={{ animationDelay: `${i * 0.35}s` }}
            />
          ))}
        </svg>
      </div>
    );
  }

  // wave
  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden py-4 md:py-6 ${className ?? ""}`}
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="h-12 w-full"
        fill="none"
      >
        <path
          d="M0 30c150-30 300 30 450 0s300-30 450 0 150 15 300 0"
          stroke="url(#cosmic-wave-a)"
          strokeWidth="1.2"
        />
        <path
          d="M0 40c150-24 300 24 450 0s300-24 450 0 150 12 300 0"
          stroke="url(#cosmic-wave-b)"
          strokeWidth="1"
          opacity="0.55"
        />
        <defs>
          <linearGradient id="cosmic-wave-a" x1="0" x2="1200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#dfb15b" stopOpacity="0" />
            <stop offset="0.5" stopColor="#dfb15b" stopOpacity="0.75" />
            <stop offset="1" stopColor="#dfb15b" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cosmic-wave-b" x1="0" x2="1200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7c3aed" stopOpacity="0" />
            <stop offset="0.5" stopColor="#7c3aed" stopOpacity="0.7" />
            <stop offset="1" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
