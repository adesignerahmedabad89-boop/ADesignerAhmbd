"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowRight, Search } from "lucide-react";
import { CosmicLayout } from "@/components/cosmic/CosmicLayout";
import { CosmicHero } from "@/components/cosmic/CosmicHero";
import { CosmicSection } from "@/components/cosmic/CosmicUI";
import { IconComet } from "@/components/cosmic/CosmicIcons";

import { posts } from "@/lib/blog-data";

const categories = ["All", "Branding", "Logo Design", "Packaging", "Print Design", "Menu Design", "Stationery", "Banner & Standee", "Invitation Cards"];

/**
 * Blog index in the Scientific Astrology theme.
 *
 * The old three-button pagination strip was removed: it was hard-coded to
 * `[1, 2, 3]` with no click handler and no paging state, so it rendered
 * controls that could not do anything. Every post already renders in the grid,
 * so there is nothing to page through — if the archive outgrows one screen,
 * add real batching the way `PortfolioGallery` does.
 */
export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch =
      search === "" ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const featured = posts[0];
  const showFeatured = activeCategory === "All" && search === "";
  const grid = showFeatured ? filtered.filter((p) => p.id !== featured.id) : filtered;

  return (
    <CosmicLayout>
      <CosmicHero
        badge="Field notes"
        badgeIcon={<IconComet className="h-4 w-4" />}
        title="Dispatches From"
        titleAccent="The Design Cosmos"
        sub="Essays on branding, logo craft, packaging and print — written by the team that makes them."
        scrollCue={false}
      />

      {/* ── Search + filters ── */}
      <CosmicSection rule tint="soft" rhythm="py-8 md:py-10">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="relative min-w-[220px] max-w-sm flex-1">
            <Search
              size={16}
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
              suppressHydrationWarning
              type="search"
              aria-label="Search articles"
              placeholder="Search articles…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              // Clears the search icon sitting at `left-4`.
              style={{ paddingLeft: "2.75rem" }}
              className="cosmic-input"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`cursor-pointer rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "border border-transparent bg-gradient-to-r from-[#dfb15b] to-[#7c3aed] text-white shadow-[0_0_16px_rgba(223,177,91,0.35)]"
                    : "border border-white/15 bg-white/[0.03] text-slate-300 hover:border-[#dfb15b]/50 hover:text-[#dfb15b]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </CosmicSection>

      {/* ── Featured ── */}
      {showFeatured && (
        <CosmicSection rule={false} rhythm="pt-16 md:pt-20 lg:pt-24">
          <span className="cosmic-eyebrow mb-7">Featured post</span>
          <article
            data-aos="fade-up"
            className="cosmic-card group grid overflow-hidden lg:grid-cols-2"
          >
            <div className="relative min-h-[300px] overflow-hidden lg:min-h-[380px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"
              />
              <span className="absolute left-5 top-5 rounded-full border border-[#dfb15b]/40 bg-black/70 px-3.5 py-1.5 text-[11px] font-bold text-[#dfb15b] backdrop-blur-sm">
                {featured.category}
              </span>
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} /> {featured.readTime}
                </span>
              </div>

              <h2 className="mt-4 font-display text-2xl font-extrabold leading-snug text-white md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-[15px] text-slate-400">{featured.excerpt}</p>

              <Link
                href={`/blog/${featured.slug}`}
                className="cosmic-btn cosmic-btn-primary mt-7 self-start px-7 py-3 text-sm"
              >
                Read Article <ArrowRight size={15} />
              </Link>
            </div>
          </article>
        </CosmicSection>
      )}

      {/* ── Grid ── */}
      <CosmicSection rule={false}>
        {showFeatured ? (
          <span className="cosmic-eyebrow mb-8">Latest articles</span>
        ) : (
          <p className="mb-8 text-[13px] text-slate-500">
            {filtered.length} article{filtered.length !== 1 ? "s" : ""} found
            {activeCategory !== "All" ? ` in "${activeCategory}"` : ""}
            {search ? ` for "${search}"` : ""}
          </p>
        )}

        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-3xl">🔭</p>
            <p className="mt-3 text-[15px] text-slate-400">
              Nothing in this sector. Try a different search or category.
            </p>
          </div>
        ) : (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {grid.map((post, i) => (
              <article
                key={post.id}
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 110}
                className="cosmic-card cosmic-shimmer group flex flex-col overflow-hidden"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-52 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                    />
                    <span className="absolute left-3.5 top-3.5 rounded-full border border-[#dfb15b]/40 bg-black/70 px-3 py-1 text-[10px] font-bold tracking-wide text-[#dfb15b] backdrop-blur-sm">
                      {post.category}
                    </span>
                    <span className="absolute bottom-3 right-3.5 flex items-center gap-1 text-[11px] text-white/90">
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar size={12} /> {post.date}
                  </div>

                  <h3 className="mt-2.5 font-display text-base font-bold leading-snug text-white transition-colors group-hover:text-[#dfb15b]">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="mt-2.5 line-clamp-3 flex-1 text-[13.5px] text-slate-400">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Tag size={12} /> {post.category}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#dfb15b] transition-all hover:gap-2.5"
                    >
                      Read More <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </CosmicSection>
    </CosmicLayout>
  );
}
