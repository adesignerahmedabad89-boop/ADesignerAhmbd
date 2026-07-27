"use client";

import Link from "next/link";
import { useRef } from "react";
import { Hover } from "@/showreel/components/animation/springs/hover";

export interface PillButtonProps {
  href: string;
  label: string;
  /** `solid` is the stage's own CTA; `ghost` mirrors its hairline "See All" pill. */
  variant?: "solid" | "ghost";
  className?: string;
}

/**
 * The one button in the merged sections — the stage's CTA, made reusable.
 *
 * `solid` reproduces `CtaBlock`'s anchor exactly (paper fill, ink label,
 * `rounded-btn`, the same `vmin` padding and text size); `ghost` is the
 * `--hairline` outline the stage uses for its secondary "See All" pill.
 *
 * Hover is a spring on an inner `<span>` keyed off the anchor — the pattern from
 * `ui/arrow-button.tsx` — because the project forbids CSS transitions. `Hover`
 * self-disables under 768px, so touch devices simply get the resting state.
 */
export const PillButton = ({
  href,
  label,
  variant = "solid",
  className,
}: PillButtonProps) => {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <Link
      ref={ref}
      href={href}
      className={`inline-flex rounded-btn ${
        variant === "solid"
          ? "bg-paper text-ink"
          : "border border-hairline text-paper"
      } ${className ?? ""}`}
    >
      <Hover
        tag="span"
        trigger={ref as React.RefObject<HTMLElement>}
        from={{ transform: "translateY(0px)" }}
        to={{ transform: "translateY(-2px)" }}
        config={{ tension: 320, friction: 22 }}
        className="inline-flex items-center justify-center px-[4.6vmin] py-[2.2vmin] text-[2.5vmin] leading-none max-sm:px-[6vmin] max-sm:py-[3.2vmin] max-sm:text-[3.6vmin]"
      >
        {label}
      </Hover>
    </Link>
  );
};
