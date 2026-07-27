"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { IconConstellation } from "./CosmicIcons";

/**
 * The cosmic footer's upper band: a golden divider, a drifting starfield, and
 * the glassmorphism newsletter card.
 *
 * Split out of `Footer.tsx` rather than inlined there because the newsletter
 * card holds state, and the footer is otherwise a presentational component
 * shared with the home page — keeping this separate means the home page's
 * footer imports none of it beyond the (tree-shaken) module reference.
 *
 * The stars are a fixed set of hand-placed positions rather than
 * `Math.random()`: a random layout differs between the server and client render
 * and would trip a hydration mismatch.
 */
const STARS = [
  { x: 6, y: 22, s: 1.5, d: 0 }, { x: 14, y: 68, s: 2, d: 0.6 },
  { x: 23, y: 38, s: 1, d: 1.2 }, { x: 31, y: 80, s: 1.5, d: 0.3 },
  { x: 39, y: 16, s: 2, d: 1.8 }, { x: 47, y: 58, s: 1, d: 0.9 },
  { x: 55, y: 30, s: 1.5, d: 2.1 }, { x: 63, y: 74, s: 2, d: 0.4 },
  { x: 71, y: 44, s: 1, d: 1.5 }, { x: 79, y: 20, s: 1.5, d: 2.4 },
  { x: 87, y: 64, s: 2, d: 0.7 }, { x: 94, y: 36, s: 1, d: 1.1 },
];

export const CosmicFooterTop = () => {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <div className="relative overflow-hidden px-5 pb-4 pt-16 sm:px-6 md:pt-20">
      {/* Drifting nebula wash. */}
      <div
        aria-hidden="true"
        className="cosmic-animate-nebula pointer-events-none absolute -top-1/2 left-1/2 h-[60vh] w-[80%] -translate-x-1/2 rounded-full opacity-50 blur-[90px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(124,58,237,0.3) 0%, rgba(223,177,91,0.12) 45%, transparent 72%)",
        }}
      />

      {/* Twinkling stars. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {STARS.map((st, i) => (
          <span
            key={i}
            className="cosmic-animate-twinkle absolute rounded-full bg-[#fcd34d]"
            style={{
              left: `${st.x}%`,
              top: `${st.y}%`,
              width: `${st.s}px`,
              height: `${st.s}px`,
              animationDelay: `${st.d}s`,
              boxShadow: "0 0 6px 1px rgba(252,211,77,0.6)",
            }}
          />
        ))}
      </div>

      <div className="site-wrap relative z-10">
        <div className="cosmic-panel mx-auto max-w-3xl p-8 text-center md:p-10">
          <span
            aria-hidden="true"
            className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#dfb15b]/30 bg-black/60 text-[#dfb15b]"
          >
            <IconConstellation className="h-6 w-6" />
          </span>

          <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">
            Signals From <span className="cosmic-gradient-text">The Studio</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-slate-400">
            Occasional notes on branding, design craft and what we&apos;re building. No
            noise, no spam.
          </p>

          {done ? (
            <p
              role="status"
              className="mt-7 text-sm font-semibold text-[#dfb15b]"
            >
              ✦ You&apos;re on the list — welcome aboard.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
              className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="cosmic-newsletter" className="sr-only">
                Email address
              </label>
              <input
                suppressHydrationWarning
                id="cosmic-newsletter"
                type="email"
                required
                autoComplete="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="cosmic-input flex-1"
              />
              <button
                type="submit"
                className="cosmic-btn cosmic-btn-primary shrink-0 px-7 py-3.5 text-sm"
              >
                Subscribe <Send size={15} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
