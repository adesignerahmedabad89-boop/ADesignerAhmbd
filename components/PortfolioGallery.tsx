"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { X, ZoomIn, ArrowUp, ArrowUpRight } from "lucide-react";
import AOS from "aos";

import { portfolioItems, portfolioCategories } from "@/lib/portfolio-data";
import { CosmicSection, SectionHeading, SectionDivider } from "@/components/cosmic/CosmicUI";

/* ── Studio story band ────────────────────────────────────────── */
function BrandStory() {
  return (
    <CosmicSection rule={false} rhythm="pt-8 pb-10 md:pt-10 md:pb-12">
      <div data-aos="fade-up" className="mx-auto max-w-[880px] text-center">
        <span className="cosmic-eyebrow mb-4">Est. 2016</span>
        <h2 className="font-display text-2xl font-extrabold leading-snug text-white md:text-4xl">
          A decade of turning emerging businesses into{" "}
          <span className="cosmic-gradient-text">unforgettable brands</span>
        </h2>
        <p className="mt-5 text-[15.5px] text-slate-400">
          Established in 2016, A Designer Ahmedabad was built on a foundation of over a
          decade of expertise in Designing, Printing and Brand Development. Founded by the
          Patel &amp; Sharma brothers, we bring a unique blend of global vision and local
          expertise to help transform emerging businesses into unforgettable brands.
        </p>
        <p className="mt-4 text-[15.5px] text-slate-400">
          Our objective is simple yet powerful: to make every customer feel{" "}
          <strong className="text-white">&ldquo;WoW.&rdquo;</strong> By blending strategic
          thinking with flawless creative execution, we deliver result-driven branding
          solutions that truly resonate with your audience and elevate your market presence.
        </p>
      </div>
    </CosmicSection>
  );
}

/* ── Gallery ──────────────────────────────────────────────────── */
const PAGE_SIZE = 24; // images rendered per batch — keeps the masonry grid fast

/**
 * Portfolio masonry gallery in the Scientific Astrology theme.
 *
 * The component's own navy/orange `PortfolioHero` was removed: the route now
 * opens with the shared `CosmicHero`, and keeping both would stack two heroes
 * (and two `<h1>`s) on the page. Its copy lives on in `BrandStory`.
 *
 * The batching, the Escape-to-close lightbox, the scroll lock and the
 * back-to-top button are all preserved as they were — only the surface is
 * restyled, plus the card frame moved from an injected `<style>` tag into
 * Tailwind utilities so the markup carries its own styling.
 */
export default function PortfolioGallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [showTop, setShowTop] = useState(false);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filtered =
    active === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === active);
  const shown = filtered.slice(0, visible);

  // Refresh AOS when the selected category or the batch size changes.
  useEffect(() => {
    AOS.refresh();
  }, [active, shown.length]);

  const selectCategory = (cat: string) => {
    setActive(cat);
    setVisible(PAGE_SIZE);
  };

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the lightbox on Escape + lock body scroll while it is open.
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <BrandStory />
      <SectionDivider variant="constellation" />

      <CosmicSection rule={false} rhythm="pt-8 pb-16 md:pt-10 md:pb-20">
        <SectionHeading
          eyebrow="The archive"
          title="Explore The"
          titleAccent="Constellation"
          sub="Filter by discipline to see the marks, packages and print work we've set into orbit."
        />

        {/* Filter tabs */}
        <div
          data-aos="fade-up"
          className="mb-11 mt-10 flex flex-wrap justify-center gap-2.5"
        >
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => selectCategory(cat)}
              aria-pressed={active === cat}
              className={`cursor-pointer rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                active === cat
                  ? "border border-transparent bg-gradient-to-r from-[#dfb15b] to-[#7c3aed] text-white shadow-[0_0_18px_rgba(223,177,91,0.35)]"
                  : "border border-white/15 bg-white/[0.03] text-slate-300 hover:border-[#dfb15b]/50 hover:text-[#dfb15b]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 gap-[18px] sm:columns-2 lg:columns-3">
          {shown.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightbox(item.image)}
              data-aos="fade-up"
              data-aos-delay={(i % 6) * 100}
              aria-label={`View ${item.category} design`}
              className="group relative mb-5 block w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-2xl border border-[#dfb15b]/15 bg-black/50 p-0 shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#dfb15b]/55 hover:shadow-[0_0_34px_rgba(223,177,91,0.2)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={`${item.category} design by A Designer Ahmedabad`}
                loading="lazy"
                className="block w-full transition-transform duration-700 group-hover:scale-[1.06]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <span
                aria-hidden="true"
                className="absolute right-3.5 top-3.5 flex h-10 w-10 scale-75 items-center justify-center rounded-full border border-[#dfb15b]/45 bg-black/70 text-white opacity-0 backdrop-blur-sm transition-all duration-400 group-hover:scale-100 group-hover:opacity-100"
              >
                <ZoomIn size={18} />
              </span>

              <span className="absolute bottom-3.5 left-3.5 translate-y-2 rounded-full border border-[#dfb15b]/35 bg-black/75 px-3.5 py-1.5 text-[11px] font-semibold text-[#dfb15b] opacity-0 backdrop-blur-sm transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                {item.category}
              </span>
            </button>
          ))}
        </div>

        {/* Load more */}
        {visible < filtered.length && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="cosmic-btn cosmic-btn-ghost px-8 py-3.5 text-sm"
            >
              Load More ({filtered.length - visible} more)
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-5 text-[15px] text-slate-400">
            Like what you see? Let&apos;s create something remarkable for your brand.
          </p>
          <Link href="/contact" className="cosmic-btn cosmic-btn-primary px-9 py-3.5 text-sm">
            Start Your Project <ArrowUpRight size={16} />
          </Link>
        </div>
      </CosmicSection>

      {/* Lightbox */}
      {mounted && lightbox && createPortal(
        <div
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio image"
          className="fixed inset-0 z-[99999] flex cursor-zoom-out items-center justify-center bg-[#05030f]/80 p-8 backdrop-blur-md"
        >
          <div 
            className="relative max-h-[88vh] max-w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute -right-4 -top-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#dfb15b]/45 bg-[#05030f] text-white transition-colors hover:border-[#dfb15b] hover:text-[#dfb15b] shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            >
              <X size={20} />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox}
              alt="A Designer Ahmedabad portfolio work"
              className="max-h-[88vh] max-w-full cursor-default object-contain shadow-[0_20px_70px_rgba(0,0,0,0.7)] rounded-xl border border-white/10"
            />
          </div>
        </div>,
        document.body
      )}

      {/* Scroll to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-[60] flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#dfb15b]/40 bg-gradient-to-br from-[#dfb15b] to-[#7c3aed] text-white shadow-[0_8px_28px_rgba(223,177,91,0.45)] transition-all duration-300 hover:scale-110"
        style={{
          opacity: showTop ? 1 : 0,
          transform: showTop ? "translateY(0)" : "translateY(16px)",
          pointerEvents: showTop ? "auto" : "none",
        }}
      >
        <ArrowUp size={22} />
      </button>
    </>
  );
}
