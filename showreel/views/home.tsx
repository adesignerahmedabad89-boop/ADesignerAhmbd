/**
 * Home view — Showreel ("Prompts that think ahead"), the 1:1 port of the
 * promptcode home page. A Server Component that composes the fixed nav and the
 * scroll stage; all motion/3D lives in the client leaves under `views/home/`
 * and `components/3d/`.
 *
 * Deltas from promptcode's `src/views/home.tsx` — nothing else changed:
 *  1. The segmented `SiteHeader` is replaced by the A Designer `Navbar`
 *     (`showreel/views/home/site-header.tsx` is kept in the tree for
 *     reference). It gets `revealAfterLoader` so it plays the exact entrance
 *     the SiteHeader did: held hidden until `useLoaderStore.revealed`, then a
 *     700ms `easeInOutCubic` fade + slide.
 *  2. The pieces promptcode mounts in its ROOT layout — `ScrollLayout` (Lenis),
 *     `AdaptiveGrid`, `ReducedMotion` — are mounted here instead, because this
 *     project's root layout is shared with 12 other routes that must keep
 *     native scrolling and their own root font-size.
 *  3. promptcode's `html`/`body` rules are scoped to this route by the
 *     `html:has(.showreel-root)` selectors in `showreel/showreel.css`;
 *     `ShowreelDocument` cleans up the inline properties the layout hooks write
 *     onto `<html>` at runtime.
 *  4. The page continues past the stage into `HomeSections` — the marketing
 *     blocks merged in from the ADesignerAhmbd site (`views/home/sections/`) —
 *     and closes on the shared site `Footer`. The stage itself is untouched:
 *     the merged content is appended after its scroll track, re-expressed in
 *     the Showreel's tokens and spring motion so the page reads as one site.
 *     Hero, Pricing and the source's closing CTA were not carried over (see
 *     `views/home/sections/index.tsx`).
 */
import { homeContent } from "@/showreel/data/mocks/home";
import { homeSectionsContent } from "@/showreel/data/mocks/home-sections";
import { IntroLoader } from "@/showreel/views/home/intro-loader";
import { ShowreelStage } from "@/showreel/views/home/showreel-stage";
import { ShowreelDocument } from "@/showreel/views/home/showreel-document";
import { HomeSections } from "@/showreel/views/home/sections";
import { AdaptiveGrid } from "@/showreel/components/common/grid";
import { ReducedMotion } from "@/showreel/components/common/reduced-motion";
import { ScrollLayout } from "@/showreel/layouts/scroll-layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const HomeView = () => (
  <>
    <ScrollLayout>
      <ShowreelDocument />
      <AdaptiveGrid />
      <ReducedMotion />

      {/* A Designer navbar — outside `.showreel-root` so it keeps the brand
          font and the site's own resets. Self-reveals once the loader has fully
          lifted; animating a wrapper's opacity around the fixed <header> snaps
          instead of fading, so the spring lives on the header itself. */}
      <Navbar revealAfterLoader />

      {/* Everything below carries the Showreel design tokens. The stage is NOT
          opacity-gated: it renders at full opacity *under* the opaque loader
          (WebGL warms up) and is simply UNCOVERED when the loader lifts —
          fading a live WebGL surface in would hitch the reveal. */}
      <div className="showreel-root">
        {/* Immersive intro: spins the brand star, then lifts to reveal the page.
            Flips `useLoaderStore.ready` (page uncover) then `revealed` (nav). */}
        <IntroLoader />

        <main>
          <ShowreelStage content={homeContent} />

          {/* Marketing sections merged in from the ADesignerAhmbd home page.
              They sit INSIDE `.showreel-root` on purpose: that wrapper carries
              the Showreel's colour and type tokens, so the imported content
              inherits the stage's palette and face instead of the site's, and
              the black `<body>` runs unbroken from the stage into them. They
              come after the 2000vh scroll track, so they scroll normally once
              the pinned stage releases. */}
          <HomeSections content={homeSectionsContent} />
        </main>
      </div>

      {/* Site footer — outside `.showreel-root`, for the same reason the navbar
          is: it is shared chrome across all 13 routes and must keep the brand
          font and the site's own resets. Its dark band closes the page against
          the Showreel's black backdrop. */}
      <Footer />
    </ScrollLayout>
  </>
);
