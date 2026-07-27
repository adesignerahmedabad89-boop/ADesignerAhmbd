import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CosmicBackground } from "./CosmicBackground";

export interface CosmicLayoutProps {
  children: ReactNode;
}

/**
 * The shell every inner page wraps itself in.
 *
 * It owns three things so no page has to repeat them:
 *  • the `.cosmic-root` class, which is what scopes the entire theme in
 *    `app/cosmic.css` — including the Navbar and Footer overrides. The home
 *    page never mounts this, so it is untouched by every rule in that file.
 *  • the fixed deep-space backdrop, mounted once per page behind everything.
 *  • the glass Navbar and the cosmic Footer, in the right stacking order.
 *
 * Content sits at `z-10` above the `z-0` backdrop. The `pt` on `<main>` clears
 * the fixed 72px navbar.
 *
 * A Server Component — only `CosmicBackground` (the canvas) and the Navbar's
 * menu state are client code.
 */
export const CosmicLayout = ({ children }: CosmicLayoutProps) => (
  <div className="cosmic-root relative min-h-screen bg-black text-white">
    <CosmicBackground />

    <Navbar cosmic />

    <main className="relative z-10 pt-[72px]">{children}</main>

    <div className="relative z-10">
      <Footer cosmic />
    </div>
  </div>
);
