"use client";

import { useState } from "react";
import Link from "next/link";
import { CosmicSection, SectionHeading } from "@/components/cosmic/CosmicUI";

const logoPlans = ["Basic Bliss Package", "Premium Prestige Package", "Ultimate Elegance Package"];

const logoRows = [
  { label: "INR", values: ["₹1,999", "₹4,999", "₹9,999"], price: true },
  { label: "Logo Design Samples/Concept", values: ["5", "5", "5"], highlight: true },
  { label: "Design Revisions/Changes Option in the Sample", values: ["Unlimited", "Unlimited", "Unlimited"] },
  { label: "Designers Working on Your Project", values: ["1", "2", "2"], highlight: true },
  { label: "Mode of Communication", values: ["Whatsapp / Messenger", "Whatsapp / Messenger", "Whatsapp / Messenger"] },
  { label: "Logo Design Duration", values: ["3-4 Working Days", "5-7 Working Days", "5-7 Working Days"] },
  { label: "Logo Design Sample Format", values: ["JPG", "JPG", "JPG"] },
  { label: "Logo Source File", values: ["CDR, PDF, PNG, JPG, AI", "CDR, PDF, PNG, JPG, AI", "CDR, PDF, PNG, JPG, AI"], highlight: true },
  { label: "Free Logo Animation Video", values: ["2", "3", "5"] },
  { label: "Stationery Design (Business Card, Letterhead & Envelope) (2 Sample Of Each)", values: ["No", "Yes", "Yes"] },
  { label: "Festival Post", values: ["No", "20 QTY", "50 QTY"] },
  { label: "Customize Business Promotional Post", values: ["No", "5 QTY", "15 QTY"] },
  { label: "Payment Options - 100% Advance", values: ["Yes", "Yes", "Yes"] },
];

const vibrationPlans = [
  "Silver Plan ✨",
  "Gold Plan ✨",
  "Diamond Plan ✨",
  "Platinum Plan ✨",
];

const vibrationRows = [
  { label: "Program Investment", values: ["₹4,999", "₹9,999", "₹19,999", "₹34,999"], price: true },
  { label: "Delivery Duration", values: ["4–7 Days", "5–7 Days", "7–10 Days", "7–10 Days"], highlight: true },
  { label: "Scientific & Astrology Logo Design", values: ["Yes", "Yes", "Yes", "Scientific Logo Only"] },
  { label: "Business Card Design", values: ["No", "Yes", "Yes", "Yes"] },
  { label: "Invoice Design", values: ["No", "No", "No", "Yes"] },
  { label: "Letterhead Design", values: ["No", "No", "Yes", "Yes"] },
  { label: "Envelope Design", values: ["No", "No", "Yes", "No"] },
  { label: "Sign Board Design", values: ["No", "No", "No", "Yes"] },
  { label: "Session with Astrologer (Telephonic/Online)", values: ["Telephonic Only", "Telephonic or Online", "Telephonic or Online", "Telephonic or Online"] },
  { label: "Offline Session (Physical meet)", values: ["No", "No", "No", "Yes"] },
];

/** The second plan in each tab is the featured one. */
const isPopular = (idx: number) => idx === 1;

/**
 * Pricing comparison, in the Scientific Astrology theme.
 *
 * Keeps the original two-tab structure and both presentations — a wide
 * comparison table on desktop, stacked cards under 768px (the switch lives in
 * `globals.css` as `.pricing-table-wrap` / `.pricing-cards`). Only the surface
 * changed: glass panels over deep space, gold rules, and the featured column
 * lit with a gold wash instead of the old navy tint.
 *
 * The `useInView` fade was dropped in favour of AOS, which the site already
 * loads — one scroll-reveal mechanism instead of two.
 */
export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"logo" | "vibration">("logo");

  const currentPlans = activeTab === "logo" ? logoPlans : vibrationPlans;
  const currentRows = activeTab === "logo" ? logoRows : vibrationRows;

  const valueTone = (v: string, row: { price?: boolean; highlight?: boolean }) => {
    if (row.price) return "text-2xl font-extrabold text-white";
    if (v === "Yes") return "font-bold text-emerald-400";
    if (v === "No") return "font-semibold text-slate-600";
    if (row.highlight) return "font-extrabold text-[#dfb15b]";
    return "text-slate-300";
  };

  return (
    <CosmicSection id="pricing" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Pricing packages"
        title="We"
        titleAccent="Help You"
        sub={
          activeTab === "logo"
            ? "Transparent logo design packages — pick the one that fits your brand's journey."
            : "Align your corporate logo, remedies and design vibrations with scientific astrology."
        }
      />

      {/* Tab switcher */}
      <div data-aos="fade-up" className="mt-10 flex justify-center">
        <div className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-[#dfb15b]/25 bg-black/60 p-1 backdrop-blur-md">
          {(
            [
              ["logo", "Logo Design Packages"],
              ["vibration", "Vibration Alignment Program ✨"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              aria-pressed={activeTab === key}
              className={`cursor-pointer rounded-full px-6 py-2.5 text-[13.5px] font-bold transition-all duration-300 ${
                activeTab === key
                  ? "bg-gradient-to-r from-[#dfb15b] to-[#7c3aed] text-white shadow-[0_0_18px_rgba(223,177,91,0.35)]"
                  : "text-slate-400 hover:text-[#dfb15b]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison table — desktop */}
      <div
        data-aos="fade-up"
        data-aos-delay="120"
        className="pricing-table-wrap cosmic-panel mt-12 overflow-x-auto"
      >
        <table className="w-full min-w-[850px] border-collapse">
          <thead>
            <tr>
              <th className="w-[28%] border-b border-[#dfb15b]/20 bg-black/70 px-5 py-6 text-left font-display text-[15px] font-extrabold text-white">
                Features
              </th>
              {currentPlans.map((p, i) => (
                <th
                  key={p}
                  className={`border-b border-l border-[#dfb15b]/20 px-5 py-6 text-center font-display text-base font-extrabold leading-tight text-white ${
                    isPopular(i) ? "bg-[#dfb15b]/10" : "bg-black/70"
                  }`}
                >
                  {p}
                  {isPopular(i) && (
                    <span className="mt-1.5 block text-[9px] font-bold tracking-[2px] text-[#dfb15b]">
                      ★ MOST POPULAR
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, ri) => (
              <tr key={row.label} className={ri % 2 === 0 ? "bg-white/[0.02]" : ""}>
                <td className="border-b border-white/5 px-5 py-3.5 text-left text-[13px] font-bold text-slate-200">
                  {row.label}
                </td>
                {row.values.map((v, ci) => (
                  <td
                    key={ci}
                    className={`border-b border-white/5 px-5 py-3.5 text-center align-middle text-[13px] ${valueTone(
                      v,
                      row,
                    )} ${isPopular(ci) ? "bg-[#dfb15b]/[0.06]" : ""}`}
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td />
              {currentPlans.map((p, i) => (
                <td
                  key={p}
                  className={`px-4 py-5 text-center ${
                    isPopular(i) ? "bg-[#dfb15b]/[0.06]" : ""
                  }`}
                >
                  <Link
                    href="/contact"
                    className="cosmic-btn cosmic-btn-primary w-full px-4 py-3.5 text-[13px] uppercase tracking-wider"
                  >
                    Order Now
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Stacked cards — under 768px */}
      <div className="pricing-cards mt-12">
        {currentPlans.map((plan, ci) => {
          const popular = isPopular(ci);
          return (
            <div
              key={plan}
              data-aos="fade-up"
              className={`cosmic-panel overflow-hidden ${
                popular
                  ? "border-[#dfb15b]/55 shadow-[0_0_32px_rgba(223,177,91,0.18)]"
                  : ""
              }`}
            >
              <div
                className={`px-5 py-6 text-center ${
                  popular ? "bg-[#dfb15b]/12" : "bg-black/60"
                }`}
              >
                <div className="font-display text-lg font-extrabold leading-tight text-white">
                  {plan}
                </div>
                {popular && (
                  <span className="mt-1.5 block text-[10px] font-bold tracking-[2px] text-[#dfb15b]">
                    ★ MOST POPULAR
                  </span>
                )}
              </div>

              <div>
                {currentRows.map((row, ri) => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between gap-4 border-b border-white/5 px-4 py-3 ${
                      ri % 2 === 0 ? "bg-white/[0.02]" : ""
                    }`}
                  >
                    <span className="text-left text-[12.5px] font-bold text-slate-300">
                      {row.label}
                    </span>
                    <span
                      className={`shrink-0 text-right text-[12.5px] ${valueTone(
                        row.values[ci],
                        row,
                      )}`}
                    >
                      {row.values[ci]}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4">
                <Link
                  href="/contact"
                  className="cosmic-btn cosmic-btn-primary w-full px-4 py-3.5 text-[13px] uppercase tracking-wider"
                >
                  Order Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </CosmicSection>
  );
}
