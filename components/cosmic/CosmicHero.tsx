import type { ReactNode } from "react";
import { IconSparkle } from "./CosmicIcons";

export interface CosmicHeroProps {
  /** Small pill above the headline. */
  badge?: string;
  /** First headline line — plain white. */
  title: string;
  /** Second headline line — rendered in the gold→violet gradient. */
  titleAccent?: string;
  sub?: string;
  children?: ReactNode;
  /** Hides the scroll cue on short heroes (detail pages). */
  scrollCue?: boolean;
  badgeIcon?: ReactNode;
}

/**
 * The hero every inner page opens with.
 *
 * One component, per-page copy — so all fifteen heroes share the Scientific
 * Logo page's proportions, badge, gradient headline and trust row, and only the
 * words change. Replaces the old photographic `PageHero` (a stock Unsplash
 * image behind a dark scrim), which had nothing to do with this theme and cost
 * a ~200KB LCP image on every route.
 *
 * The decorative layers here are local to the hero — the page-wide starfield
 * lives in `CosmicBackground`. These are the orbital rings, the corner glows
 * and the scroll cue, all `aria-hidden` and all animating transform/opacity
 * only so they stay off the main thread.
 */
export const CosmicHero = ({
  badge,
  title,
  titleAccent,
  sub,
  children,
  scrollCue = true,
  badgeIcon,
}: CosmicHeroProps) => (
  <section className="cosmic-rule relative flex w-full flex-col items-center overflow-hidden px-5 pb-12 pt-16 sm:px-6 md:pb-16 md:pt-24">
    {/* Orbital rings behind the headline. */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 -z-[1] h-[110vmin] w-[110vmin] -translate-x-1/2 -translate-y-1/2 opacity-70"
    >
      <div className="cosmic-animate-orbit absolute inset-[18%] rounded-full border border-[#dfb15b]/15">
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dfb15b] shadow-[0_0_14px_5px_rgba(223,177,91,0.45)]" />
      </div>
      <div
        className="cosmic-animate-orbit-rev absolute inset-[30%] rounded-full border border-[#7c3aed]/18"
        style={{ animationDuration: "58s" }}
      >
        <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#7c3aed] shadow-[0_0_12px_4px_rgba(124,58,237,0.5)]" />
      </div>
    </div>

    {/* Soft lighting from the top corners. */}
    <div
      aria-hidden="true"
      className="cosmic-animate-pulse pointer-events-none absolute -top-24 left-1/2 -z-[1] h-72 w-[120%] -translate-x-1/2 rounded-full opacity-60 blur-[80px]"
      style={{
        background:
          "radial-gradient(ellipse, rgba(223,177,91,0.16) 0%, rgba(124,58,237,0.1) 45%, transparent 72%)",
      }}
    />

    <div className="site-wrap flex flex-col items-center text-center">
      {badge ? (
        <span data-aos="fade-down" className="cosmic-chip mb-8">
          {badgeIcon ?? <IconSparkle className="h-4 w-4" />}
          {badge}
        </span>
      ) : null}

      <h1
        data-aos="fade-up"
        className="font-display text-4xl font-black leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl"
      >
        {title}
        {titleAccent ? (
          <>
            <br />
            <span className="cosmic-gradient-text">{titleAccent}</span>
          </>
        ) : null}
      </h1>

      {sub ? (
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mx-auto mt-6 max-w-3xl text-base text-slate-300 md:text-lg"
        >
          {sub}
        </p>
      ) : null}

      {children ? (
        <div data-aos="fade-up" data-aos-delay="200" className="mt-10 w-full">
          {children}
        </div>
      ) : null}

      {scrollCue ? (
        <div
          aria-hidden="true"
          className="mt-8 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-slate-500"
        >
          Scroll
          <span className="relative flex h-9 w-5 justify-center rounded-full border border-[#dfb15b]/35">
            <span
              className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#dfb15b]"
              style={{
                animation: "cosmic-scroll-dot 1.9s ease-in-out infinite",
              }}
            />
          </span>
        </div>
      ) : null}
    </div>
  </section>
);
