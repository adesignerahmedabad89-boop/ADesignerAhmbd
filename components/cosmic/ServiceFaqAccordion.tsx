"use client";

import { useState } from "react";
import { CosmicSection, SectionHeading } from "@/components/cosmic/CosmicUI";
import { IconSparkle } from "@/components/cosmic/CosmicIcons";
import type { FaqBlock } from "@/lib/astrology-services-data";

export interface ServiceFaqAccordionProps {
  title: string;
  faq: FaqBlock[];
}

/**
 * Per-service FAQ accordion for the astrology service detail pages.
 *
 * Same single-open, height-animated accordion as the site-wide `FAQ.tsx`, but
 * driven by a service's own question set instead of the fixed logo-design FAQ.
 */
export function ServiceFaqAccordion({ title, faq }: ServiceFaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <CosmicSection id="faq" tint="deep" className="scroll-mt-24">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked"
        titleAccent="Questions"
        sub={`Everything you need to know before booking ${title}.`}
      />

      <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-4">
        {faq.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} data-aos="fade-up" data-aos-delay={Math.min(i, 6) * 50}>
              <div
                className={`overflow-hidden rounded-xl border bg-black/60 backdrop-blur-md transition-colors duration-300 ${
                  isOpen
                    ? "border-[#dfb15b]/45 shadow-[0_0_26px_rgba(223,177,91,0.12)]"
                    : "border-[#dfb15b]/15"
                }`}
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span
                      className={`font-display text-base font-bold transition-colors sm:text-lg ${
                        isOpen ? "text-[#dfb15b]" : "text-white"
                      }`}
                    >
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-xl leading-none text-[#dfb15b] transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                    >
                      +
                    </span>
                  </button>
                </h3>

                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-white/5 px-5 pb-5 pt-4 text-sm text-slate-400 sm:px-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p
        data-aos="fade-up"
        className="mt-12 flex items-center justify-center gap-2 text-center text-sm text-slate-500"
      >
        <IconSparkle className="h-4 w-4 text-[#dfb15b]" />
        Still curious? Reach out and we&apos;ll chart the answer for you.
      </p>
    </CosmicSection>
  );
}
