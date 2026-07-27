"use client";

import { useId, useState } from "react";
import type { FaqItem, HomeSectionsContent } from "@/showreel/data/mocks/home-sections";
import { Reveal } from "./reveal";
import { Section } from "./section";
import { SectionHeading } from "./section-heading";

export interface FaqProps {
  content: HomeSectionsContent["faq"];
}

interface FaqRowProps {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
}

/**
 * One question row.
 *
 * The panel opens by springing `grid-template-rows` from `0fr` to `1fr` rather
 * than tweening a guessed `max-height` as the source did — the row measures
 * itself, so a long answer can never be clipped and a short one leaves no dead
 * space. The `+` glyph rotates to `×` on the same spring value, so the icon and
 * the panel are always in step.
 */
const FaqRow = ({ item, open, onToggle }: FaqRowProps) => {
  const panelId = useId();
  const buttonId = useId();

  return (
    <li
      className={`overflow-hidden rounded-xl border bg-black/60 backdrop-blur-md transition-all duration-300 ${
        open
          ? "border-[#dfb15b]/45 shadow-[0_0_26px_rgba(223,177,91,0.12)]"
          : "border-[#dfb15b]/15 hover:border-[#dfb15b]/35"
      }`}
    >
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
        >
          <span
            className={`font-display text-base font-bold transition-colors sm:text-lg ${
              open ? "text-[#dfb15b]" : "text-white"
            }`}
          >
            {item.q}
          </span>
          <span
            aria-hidden="true"
            className="shrink-0 text-xl leading-none text-[#dfb15b] transition-transform duration-300"
            style={{ transform: open ? "rotate(45deg)" : "none" }}
          >
            +
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
          <p className="border-t border-white/5 px-5 pb-5 pt-4 text-sm text-slate-400 sm:px-6">
            {item.a}
          </p>
        </div>
      </div>
    </li>
  );
};

/**
 * Frequently asked questions. Single-open accordion, matching the source's
 * behaviour; the first row starts open so the section never reads as an inert
 * list of headings.
 */
export const Faq = ({ content }: FaqProps) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionHeading
        eyebrow={content.eyebrow}
        heading={content.heading}
        headingFaded={content.headingFaded}
        sub={content.sub}
      />

      <Reveal delay={120}>
        <ul className="mx-auto mt-14 flex max-w-3xl flex-col gap-4 list-none p-0">
          {content.items.map((item, i) => (
            <FaqRow
              key={item.q}
              item={item}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </ul>
      </Reveal>
    </Section>
  );
};
