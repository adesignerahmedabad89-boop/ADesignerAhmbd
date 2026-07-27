"use client";

import { animated, easings, useSpring } from "@react-spring/web";
import Image from "next/image";
import { memo } from "react";
import { brandLogos } from "@/components/brandLogosData";
import { Reveal } from "./reveal";
import { Section } from "./section";

export interface LogoMarqueeProps {
  label: string;
}

/**
 * Client logo strip — the source site's framer-motion `animate={{ x }}` loop
 * rebuilt on the stage's own marquee technique (`views/home/marquee.tsx`): the
 * track is rendered twice and translated 0→-50% on an infinite linear spring, so
 * the seam is invisible and no CSS keyframe is involved.
 *
 * The logos are full-colour artwork drawn for light backgrounds, so each one
 * sits on its own `--paper` tile rather than on the black page. That keeps every
 * mark legible without inverting or desaturating it, and reuses the light-card
 * surface the stage already establishes (the Catalist light card, the hero's
 * white margin band).
 */
const Track = ({ items }: { items: typeof brandLogos }) => (
  <>
    {items.map((logo, i) => (
      <span
        key={i}
        className="flex h-[11vmin] w-[20vmin] shrink-0 items-center justify-center rounded-pf bg-paper px-[2.4vmin] max-sm:h-[16vmin] max-sm:w-[30vmin]"
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          width={150}
          height={60}
          sizes="(max-width: 640px) 30vmin, 20vmin"
          loading="lazy"
          className="max-h-[7vmin] w-auto object-contain max-sm:max-h-[10vmin]"
          style={logo.style}
        />
      </span>
    ))}
  </>
);

// `memo` for the same reason the stage memoises its marquee: a re-render would
// re-attach the loop spring and the strip would visibly jump mid-travel.
export const LogoMarquee = memo(({ label }: LogoMarqueeProps) => {
  const [styles] = useSpring(() => ({
    from: { x: 0 },
    to: { x: -50 },
    loop: true,
    config: { duration: 70000, easing: easings.linear },
  }));

  return (
    <Section
      label={label}
      inset="px-0"
      rhythm="py-[10vmin] max-sm:py-[12vmin]"
    >
      <Reveal tag="p" y={16} blur={10}>
        <span className="block text-center text-[1.4vmin] uppercase leading-none tracking-[0.28em] text-paper/40 max-sm:text-[2.6vmin] max-sm:tracking-[0.2em]">
          {label}
        </span>
      </Reveal>

      {/* Edge fades — the strip dissolves into the page backdrop instead of
          being clipped, matching how the stage feathers its own overflow. */}
      <div className="relative mt-[6vmin] overflow-hidden max-sm:mt-[7vmin]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[12vmin] bg-gradient-to-r from-[var(--background)] to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-[12vmin] bg-gradient-to-l from-[var(--background)] to-transparent"
        />

        <animated.div
          className="flex w-max items-center gap-[3vmin] max-sm:gap-[4vmin]"
          style={{ transform: styles.x.to((x) => `translateX(${x}%)`) }}
        >
          <Track items={brandLogos} />
          <Track items={brandLogos} />
        </animated.div>
      </div>
    </Section>
  );
});
LogoMarquee.displayName = "LogoMarquee";
