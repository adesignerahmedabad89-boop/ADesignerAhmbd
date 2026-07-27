"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { ServiceItem } from "@/showreel/data/mocks/home-sections";
import { Hover } from "@/showreel/components/animation/springs/hover";

export interface ServiceCardProps {
  item: ServiceItem;
  /** `sizes` hint for the card's image, matching its grid column. */
  sizes: string;
}

/**
 * One service tile. Split out of `services.tsx` so the section itself can stay a
 * Server Component and only the hover springs ship as client JS.
 *
 * The card surface is the stage's portfolio-card token (`--pf-card`) with the
 * glass hairline border it uses on its overlay chrome, and the radius is the
 * portfolio radius — the tile is deliberately the same object as the stage's own
 * cards. Hover lifts the card and pushes the image in, both on springs keyed off
 * the anchor, replacing the source's CSS `transform`/`scale` transitions.
 */
export const ServiceCard = ({ item, sizes }: ServiceCardProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const trigger = ref as React.RefObject<HTMLElement>;

  return (
    <Link
      ref={ref}
      href={item.href}
      className="group block h-full overflow-hidden rounded-pf border border-glass-border bg-pf-card"
    >
      <Hover
        tag="div"
        trigger={trigger}
        from={{ transform: "translateY(0px)" }}
        to={{ transform: "translateY(-6px)" }}
        config={{ tension: 260, friction: 26 }}
        className="flex h-full flex-col"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Hover
            tag="div"
            trigger={trigger}
            from={{ transform: "scale(1)" }}
            to={{ transform: "scale(1.06)" }}
            config={{ tension: 200, friction: 30 }}
            className="absolute inset-0"
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              sizes={sizes}
              className="object-cover"
            />
          </Hover>
        </div>

        <div className="flex flex-1 flex-col p-[3vmin] max-sm:p-[4.5vmin]">
          <h3 className="m-0 text-[2.2vmin] font-medium leading-tight tracking-[-0.01em] text-paper max-sm:text-[4vmin]">
            {item.title}
          </h3>
          <p className="m-0 mt-[1.4vmin] flex-1 text-[1.6vmin] leading-relaxed text-paper/55 max-sm:mt-[2.2vmin] max-sm:text-[3.1vmin]">
            {item.description}
          </p>
        </div>
      </Hover>
    </Link>
  );
};
