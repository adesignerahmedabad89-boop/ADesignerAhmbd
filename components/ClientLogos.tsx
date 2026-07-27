"use client";

import Image from "next/image";
import { brandLogos } from "./brandLogosData";

/**
 * Client logo marquee in the Scientific Astrology theme.
 *
 * Two changes beyond the restyle:
 *  • **framer-motion is gone.** The strip is a CSS keyframe translation now —
 *    it runs on the compositor with no JS on the main thread and no runtime
 *    dependency for what is a single linear loop.
 *  • **`next/image` instead of raw `<img>`**, so the logos are served as
 *    AVIF/WebP at the right size and lazy-loaded below the fold.
 *
 * The marks are full-colour artwork drawn for white paper, so each sits on its
 * own frosted tile rather than directly on deep space — legible without
 * inverting or desaturating the brand it represents.
 */
export default function ClientLogos() {
  return (
    <section className="cosmic-rule relative w-full overflow-hidden py-16 md:py-20">
      <p className="mb-10 text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-[#dfb15b]/80">
        Trusted by leading brands
      </p>

      <div className="relative">
        {/* Edge fades so the strip dissolves into the sky rather than being cut. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-24 bg-gradient-to-r from-black to-transparent md:w-40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-24 bg-gradient-to-l from-black to-transparent md:w-40"
        />

        {/* Rendered twice and translated -50%, so the loop seam is invisible. */}
        <div className="cosmic-logo-track flex w-max items-center gap-6 md:gap-10">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-6 md:gap-10">
              {brandLogos.map((logo, i) => (
                <span
                  key={`${copy}-${i}`}
                  className="flex h-20 w-36 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/90 px-4 shadow-[0_0_24px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#dfb15b]/50 hover:shadow-[0_0_28px_rgba(223,177,91,0.28)] md:h-24 md:w-44"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={60}
                    sizes="176px"
                    loading="lazy"
                    className="max-h-14 w-auto object-contain md:max-h-16"
                    style={logo.style}
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
