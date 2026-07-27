"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Share2, ChevronRight } from "lucide-react";
import { CosmicLayout } from "@/components/cosmic/CosmicLayout";
import { CosmicSection, CosmicButton } from "@/components/cosmic/CosmicUI";
import type { BlogPost } from "@/lib/blog-data";
import { posts } from "@/lib/blog-data";

/**
 * Blog article in the Scientific Astrology theme.
 *
 * The hero is now a self-contained cosmic band — the article's own image sits
 * behind a deep-space scrim rather than the old navy/orange wash — and the
 * body uses the shared `.cosmic-prose` typography so long-form copy reads the
 * same here as on the legal pages.
 *
 * Justified body text was dropped: on narrow columns it produces rivers of
 * whitespace and hurts readability, which the theme brief explicitly asks to
 * protect.
 */
export default function BlogPageClient({ post }: { post: BlogPost }) {
  const recentPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const share = (network: "facebook" | "twitter" | "linkedin") => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    const endpoints = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };
    window.open(endpoints[network], "_blank", "noopener,noreferrer");
  };

  return (
    <CosmicLayout>
      {/* ── Hero ── */}
      <section className="cosmic-rule relative flex min-h-[420px] items-end overflow-hidden pb-14 pt-20">
        <Image
          src={post.image}
          alt=""
          aria-hidden="true"
          fill
          priority
          unoptimized
          className="object-cover object-[center_30%] opacity-35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/25 via-transparent to-[#dfb15b]/15"
        />

        <div className="site-wrap relative z-10">
          <span
            data-aos="fade-down"
            className="cosmic-chip mb-5 uppercase tracking-wider"
          >
            {post.category}
          </span>

          <h1
            data-aos="fade-up"
            className="max-w-4xl font-display text-3xl font-black leading-tight text-white md:text-5xl"
          >
            {post.title}
          </h1>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-6 flex flex-wrap items-center gap-5 text-[13px] text-slate-400"
          >
            <span className="flex items-center gap-2">
              <Calendar size={14} className="text-[#dfb15b]" /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-[#dfb15b]" /> {post.readTime}
            </span>
          </div>

          <nav
            aria-label="Breadcrumb"
            className="mt-6 flex items-center gap-1.5 text-[13px] text-slate-500"
          >
            <Link href="/" className="transition-colors hover:text-[#dfb15b]">
              Home
            </Link>
            <ChevronRight size={13} aria-hidden="true" />
            <Link href="/blog" className="transition-colors hover:text-[#dfb15b]">
              Blog
            </Link>
            <ChevronRight size={13} aria-hidden="true" />
            <span className="max-w-[200px] truncate text-slate-300 sm:max-w-none">
              {post.title}
            </span>
          </nav>
        </div>
      </section>

      {/* ── Article ── */}
      <CosmicSection rule={false}>
        <div className="grid gap-12 lg:grid-cols-[2.4fr_1fr]">
          <article data-aos="fade-up">
            <div className="cosmic-panel cosmic-prose p-8 md:p-10">
              {post.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}

              {/* `cosmic-pull-quote` rather than utilities: `.cosmic-prose p`
                  would otherwise win on specificity, and Tailwind v4's important
                  modifier is a suffix (`text-white!`) — the `!text-white` form
                  compiles to nothing. */}
              <blockquote className="cosmic-pull-quote">
                <p>
                  &ldquo;A brand is no longer what we tell the consumer it is — it is what
                  consumers tell each other it is.&rdquo;
                </p>
                <cite>— Brandingo Editorial Insights</cite>
              </blockquote>
            </div>

            {/* Share */}
            <div className="cosmic-panel mt-8 flex flex-wrap items-center justify-between gap-4 p-6">
              <span className="inline-flex items-center gap-2 text-sm font-bold text-white">
                <Share2 size={16} className="text-[#dfb15b]" /> Share This Article
              </span>
              <div className="flex flex-wrap gap-2">
                {(["facebook", "twitter", "linkedin"] as const).map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => share(n)}
                    className="cursor-pointer rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs font-semibold capitalize text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#dfb15b]/60 hover:text-[#dfb15b]"
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </article>

          {/* ── Sidebar ── */}
          <aside className="flex flex-col gap-8">
            <div data-aos="fade-left" className="cosmic-panel p-7">
              <h2 className="cosmic-eyebrow mb-4">Author</h2>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dfb15b]/35 bg-black/60 text-lg"
                >
                  ✍️
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-bold text-white">Brandingo Editorial</span>
                  <span className="text-xs text-slate-500">Senior Brand Strategist</span>
                </span>
              </div>
              <p className="mt-4 text-[13px] text-slate-400">
                Our team brings decades of experience in creative strategy, digital
                communication, and visual system design.
              </p>
            </div>

            <div data-aos="fade-left" data-aos-delay="100" className="cosmic-panel p-7">
              <h2 className="cosmic-eyebrow mb-5">Recent Articles</h2>
              <div className="flex flex-col gap-5">
                {recentPosts.map((p) => (
                  <Link key={p.id} href={`/blog/${p.slug}`} className="group flex gap-3.5">
                    <span className="relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-lg border border-white/10">
                      <Image
                        src={p.image}
                        alt=""
                        fill
                        sizes="70px"
                        unoptimized
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </span>
                    <span className="flex flex-col justify-center">
                      <span className="mb-1 text-[11px] font-bold uppercase text-[#dfb15b]">
                        {p.category}
                      </span>
                      <span className="line-clamp-2 text-[13.5px] font-bold leading-snug text-slate-200 transition-colors group-hover:text-[#dfb15b]">
                        {p.title}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div data-aos="fade-left" data-aos-delay="200" className="cosmic-panel p-7">
              <h2 className="cosmic-eyebrow mb-4">Categories</h2>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {["Branding", "Logo Design", "Packaging", "Print Design", "Menu Design"].map(
                  (c) => (
                    <li key={c}>
                      <Link
                        href="/blog"
                        className="flex items-center justify-between text-[13.5px] text-slate-400 transition-colors hover:text-[#dfb15b]"
                      >
                        <span>{c}</span>
                        <span className="rounded border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-slate-500">
                          View
                        </span>
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="cosmic-panel p-7 text-center"
            >
              <h2 className="font-display text-lg font-extrabold text-white">
                Ready to align your brand?
              </h2>
              <p className="mt-2 text-[13px] text-slate-400">
                Let&apos;s chart the route from where you are to where you belong.
              </p>
              <CosmicButton href="/contact" className="mt-5 w-full">
                Start a Project
              </CosmicButton>
            </div>
          </aside>
        </div>
      </CosmicSection>
    </CosmicLayout>
  );
}
