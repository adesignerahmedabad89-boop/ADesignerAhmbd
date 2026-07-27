"use client";

import { useState } from "react";
import { CosmicSection, SectionHeading } from "@/components/cosmic/CosmicUI";
import { IconSparkle } from "@/components/cosmic/CosmicIcons";

const faqs = [
  {
    q: "When does my project start?",
    a: "Work on your project starts soon after we get your logo request along with the advance payment.",
  },
  {
    q: "How many concepts do you offer?",
    a: "We offer you 3 or 6 initial design concepts depending on the package that you choose.",
  },
  {
    q: "What file formats are supplied by you?",
    a: "For your convenience, we provide the designs in the following file formats: PNG, JPG, PDF, AI or CDR.",
  },
  {
    q: "Do you provide a vector format for the logo?",
    a: "Yes, we do provide EPS / .AI / .CDR files which are all vector files.",
  },
  {
    q: "How do you deliver logo design files to your client?",
    a: "We communicate via mail. We will send you the files via mail, or send you a link to download them if the file size is too big. We also use Dropbox or wetransfer.com in such cases to send heavy files.",
  },
  {
    q: "Do you provide a money back guarantee?",
    a: "No. Our services are not available with a money-back guarantee. However, we always ensure the needs and expectations of our clients are fulfilled. We tirelessly work on your design until you are satisfied with the results.",
  },
  {
    q: "What are the other design services that you offer?",
    a: "We have vast experience in designing different types of stationery which include brochures, business cards, flyers, banners, posters, signage, billboards and more. Our designers first understand the goals and objectives of your business, then produce designs that perfectly meet your requirements.",
  },
  {
    q: "Do you provide printing services?",
    a: "No. We provide print-ready files which can be printed by any local printer.",
  },
  {
    q: "Can I speak directly with the designers?",
    a: "Absolutely. We completely understand that you want to convey your opinions and the vision behind the logo. We follow a transparent process, which makes it easy for you to connect directly with our logo designers and get what you want.",
  },
  {
    q: "Do you provide support once the logo design process is complete?",
    a: "Absolutely. We value your opinions and provide you with service even after the logo design process is complete.",
  },
  {
    q: "I have a question I cannot find here. How do I get an answer?",
    a: "You can ask your question any time using the “Your requirement” field on the Contact page. We will get back to you with our answer.",
  },
];

/**
 * FAQ accordion in the Scientific Astrology theme.
 *
 * Single-open, matching the Scientific Logo page's own accordion down to its
 * gold `+` affordance. Two upgrades on that original: the panel is height-
 * animated with `grid-template-rows` (rather than mounting/unmounting, which
 * snapped), so a long answer can never be clipped, and the trigger is a real
 * `<button aria-expanded>` inside the heading for a correct outline.
 */
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <CosmicSection id="faq" tint="deep" className="scroll-mt-24">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked"
        titleAccent="Questions"
        sub="Everything you need to know before charting your brand's journey with us."
      />

      <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-4">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.q}
              data-aos="fade-up"
              data-aos-delay={Math.min(i, 6) * 50}
            >
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
