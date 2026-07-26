"use client";

import { useEffect } from "react";
import { SR_VARS } from "@/showreel/utils/showreel/geometry";

/**
 * Hands `<html>` back untouched when the Showreel route unmounts.
 *
 * promptcode owns its whole document, so its document-level rules (black
 * backdrop, hidden scrollbars, the adaptive root font-size, and the `overflow`
 * reset that `position: sticky` needs) sit on bare `html`/`body` selectors in
 * its `globals.css`. Here the Showreel is one route inside a 13-page site, so
 * the same rules are scoped to `html:has(.showreel-root)` in
 * `showreel/showreel.css` — purely declarative, so they apply to the
 * server-rendered markup at first paint and lapse on their own when the route
 * unmounts. Nothing to toggle.
 *
 * What still needs an explicit teardown are the *inline* properties
 * `useAdaptiveGrid` and `useShowreelLayout` write straight onto
 * `document.documentElement`: those are element styles, not stylesheet rules,
 * so they would survive a client-side navigation and leave the rest of the site
 * rescaled.
 */
export const ShowreelDocument = (): null => {
  useEffect(
    () => () => {
      const root = document.documentElement;
      // `useAdaptiveGrid` sets this above 1920px viewports.
      root.style.removeProperty("font-size");
      // `useShowreelLayout` sets these on every layout bucket flip.
      for (const name of Object.values(SR_VARS)) {
        root.style.removeProperty(name);
      }
    },
    []
  );

  return null;
};
