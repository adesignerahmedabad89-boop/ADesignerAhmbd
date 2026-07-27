"use client";

import { animated, useSpring } from "@react-spring/web";
import type { SkillItem } from "@/showreel/data/mocks/home-sections";
import { useDynamicInView } from "@/showreel/hooks/animation/use-dynamic-in-view";

export interface SkillBarProps extends SkillItem {
  /** Stagger delay in ms. */
  delay?: number;
}

/**
 * A labelled competency meter. The source animated `width` on a CSS transition;
 * this fills on a spring instead, and the percentage counts up on the same
 * value so the number and the bar can never disagree mid-flight.
 *
 * Exposed as a real `<meter>`-equivalent via ARIA so the figure is available to
 * assistive tech, which the original's bare `<div>`s were not.
 */
export const SkillBar = ({ label, value, delay = 0 }: SkillBarProps) => {
  const [setNode, inView] = useDynamicInView({ threshold: 0.3 });

  const { w } = useSpring({
    w: inView ? value : 0,
    delay: inView ? delay : 0,
    config: { tension: 45, friction: 24, clamp: true },
  });

  return (
    <div ref={setNode}>
      <div className="flex items-baseline justify-between">
        <span className="text-[1.7vmin] text-paper/70 max-sm:text-[3.2vmin]">
          {label}
        </span>
        <animated.span className="text-[1.7vmin] tabular-nums text-paper/45 max-sm:text-[3.2vmin]">
          {w.to((v) => `${Math.round(v)}%`)}
        </animated.span>
      </div>

      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-[1.2vmin] h-[0.5vmin] w-full overflow-hidden rounded-full bg-paper/10 max-sm:mt-[1.8vmin] max-sm:h-[1vmin]"
      >
        <animated.div
          className="h-full rounded-full bg-paper"
          style={{ width: w.to((v) => `${v}%`) }}
        />
      </div>
    </div>
  );
};
