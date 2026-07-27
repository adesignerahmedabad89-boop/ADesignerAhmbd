"use client";

import { animated, useSpring } from "@react-spring/web";
import type { StatItem } from "@/showreel/data/mocks/home-sections";
import { useDynamicInView } from "@/showreel/hooks/animation/use-dynamic-in-view";
import { Reveal } from "./reveal";
import { Section } from "./section";

export interface StatsProps {
  items: StatItem[];
}

/** Deterministic thousands separator — avoids `toLocaleString` drifting between
 *  the server render and the client's locale. */
const group = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [setNode, inView] = useDynamicInView({ threshold: 0.4 });

  // The source used `react-countup` (a tween). Counting on a spring instead
  // keeps every animated number on the same engine as the rest of the page and
  // gives the figure the settle the stage's motion has.
  const { n } = useSpring({
    n: inView ? value : 0,
    config: { tension: 40, friction: 26, clamp: true },
  });

  return (
    <span ref={setNode} className="flex items-baseline">
      <animated.span>{n.to((v) => group(Math.round(v)))}</animated.span>
      <span>{suffix}</span>
    </span>
  );
};

/**
 * Three headline figures. The source rendered them as bordered white cards with
 * an orange icon chip; here they are typographic — the numbers are set at the
 * stage's display scale so they read as a continuation of its headlines rather
 * than as widgets, separated by the same hairline the Showreel uses elsewhere.
 */
export const Stats = ({ items }: StatsProps) => (
  <Section label="By the numbers" rhythm="py-[9vmin] max-sm:py-[11vmin]">
    <div className="grid grid-cols-3 gap-[4vmin] border-y border-hairline/40 py-[7vmin] max-sm:grid-cols-1 max-sm:gap-[7vmin] max-sm:py-[9vmin]">
      {items.map((stat, i) => (
        <Reveal
          key={stat.label}
          delay={i * 90}
          className="flex flex-col items-center text-center"
        >
          <p className="m-0 text-[6vw] font-normal leading-[0.95] tracking-[-0.03em] text-paper max-sm:text-[13vw]">
            <Counter value={stat.value} suffix={stat.suffix} />
          </p>
          <p className="m-0 mt-[1.6vmin] text-[1.5vmin] uppercase tracking-[0.22em] text-paper/45 max-sm:mt-[2.5vmin] max-sm:text-[2.8vmin] max-sm:tracking-[0.18em]">
            {stat.label}
          </p>
        </Reveal>
      ))}
    </div>
  </Section>
);
