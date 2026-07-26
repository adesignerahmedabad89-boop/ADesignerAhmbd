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
 */
import { homeContent } from "@/showreel/data/mocks/home";
import { IntroLoader } from "@/showreel/views/home/intro-loader";
import { ShowreelStage } from "@/showreel/views/home/showreel-stage";
import { ShowreelDocument } from "@/showreel/views/home/showreel-document";
import { AdaptiveGrid } from "@/showreel/components/common/grid";
import { ReducedMotion } from "@/showreel/components/common/reduced-motion";
import { ScrollLayout } from "@/showreel/layouts/scroll-layout";
import Navbar from "@/components/Navbar";

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
        </main>
      </div>
    </ScrollLayout>
  </>
);
