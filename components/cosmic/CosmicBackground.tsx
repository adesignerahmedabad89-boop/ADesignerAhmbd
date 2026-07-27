"use client";

import { useEffect, useRef } from "react";

/**
 * The deep-space backdrop shared by every inner page.
 *
 * The rotating spiral galaxy is the one from `app/scientific-logo/page.tsx`,
 * lifted here so all inner pages draw the identical sky instead of each
 * re-implementing it. Four changes were made on the way, all for performance —
 * the original ran a full-resolution rAF loop forever, on every device:
 *
 *  1. **Reduced motion** — the loop paints one static frame and stops.
 *  2. **Hidden tabs** — the loop is cancelled on `visibilitychange`, so a
 *     backgrounded tab costs nothing.
 *  3. **Star budget scales with the viewport** — 600 stars on desktop is a lot
 *     of `arc()` calls for a 390px phone; the count drops with the area.
 *  4. **DPR pinned to 1** — a starfield gains nothing from a retina buffer and
 *     it quadruples the fill cost on modern phones.
 *
 * The canvas is `fixed` and `pointer-events-none`, so it never intercepts a
 * click and never reflows with the page.
 */

interface Star {
  r: number;
  angle: number;
  size: number;
  color: string;
  speed: number;
}

const ARM_COUNT = 3;
const ARM_WIDTH = 0.4;
/** Mystical gold, brand blue, brand red, soft white — the source palette. */
const STAR_COLORS = ["#dfb15b", "#0046ad", "#e31e24", "#fcd34d", "#ffffff", "#38bdf8"];

export const CosmicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let frameId = 0;
    let angleOffset = 0;
    let stars: Star[] = [];

    const buildStars = () => {
      // ~1 star per 3,400 css px², clamped so phones stay cheap and ultra-wide
      // screens don't thin out. Desktop lands near the original 600.
      const area = canvas.width * canvas.height;
      const count = Math.round(Math.min(620, Math.max(180, area / 3400)));
      const maxR = Math.max(canvas.width, canvas.height) * 0.75;

      stars = Array.from({ length: count }, (_, i) => {
        const r = Math.pow(Math.random(), 2.5) * maxR;
        const armAngle = ((i % ARM_COUNT) / ARM_COUNT) * Math.PI * 2;
        const dispersion = (Math.random() - 0.5) * ARM_WIDTH;
        return {
          r,
          angle: armAngle + r * 0.005 + dispersion,
          size: Math.random() * 1.8 + 0.3,
          color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
          // Outer stars rotate slower — differential rotation, as in the source.
          speed: (Math.random() * 0.002 + 0.001) * (1 / (1 + r * 0.01)),
        };
      });
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      buildStars();
    };
    resize();

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const paint = (animate: boolean) => {
      const { width, height } = canvas;

      // Deep space gradient backdrop, anchored to the centre.
      const bg = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8,
      );
      bg.addColorStop(0, "#070414");
      bg.addColorStop(0.5, "#020108");
      bg.addColorStop(1, "#000000");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // Ease the galactic core toward the pointer — the mouse-parallax drift.
      if (animate) {
        const targetX =
          width / 2 + ((mouseX - width / 2) / (width / 2)) * width * 0.07;
        const targetY =
          height / 2 + ((mouseY - height / 2) / (height / 2)) * height * 0.07;
        currentX += (targetX - currentX) * 0.04;
        currentY += (targetY - currentY) * 0.04;
      }

      const cx = currentX;
      const cy = currentY;

      // Glowing central core.
      const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, 120);
      core.addColorStop(0, "rgba(223, 177, 91, 0.25)");
      core.addColorStop(0.4, "rgba(124, 58, 237, 0.12)");
      core.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(cx, cy, 120, 0, Math.PI * 2);
      ctx.fill();

      if (animate) angleOffset += 0.003;
      const now = Date.now() * 0.003;

      for (const star of stars) {
        const a = star.angle + angleOffset;
        const x = cx + Math.cos(a) * star.r;
        const y = cy + Math.sin(a) * star.r;
        if (x < 0 || x > width || y < 0 || y > height) continue;

        ctx.globalAlpha = animate ? 0.6 + 0.4 * Math.sin(now + star.r) : 0.85;
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      paint(true);
      frameId = requestAnimationFrame(loop);
    };

    const start = () => {
      if (frameId) return;
      frameId = requestAnimationFrame(loop);
    };
    const stop = () => {
      if (!frameId) return;
      cancelAnimationFrame(frameId);
      frameId = 0;
    };

    // A backgrounded tab should not burn a core redrawing a sky nobody sees.
    const handleVisibility = () => (document.hidden ? stop() : start());

    if (reduceMotion) {
      paint(false);
    } else {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      document.addEventListener("visibilitychange", handleVisibility);
      start();
    }
    window.addEventListener("resize", resize);

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      {/* Rotating spiral galaxy + deep-space gradient. */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Nebula clouds — two slow, counter-drifting radial blooms. Pure
          transform/opacity, so they stay on the compositor. */}
      <div
        className="cosmic-animate-nebula absolute -left-[15%] top-[-10%] h-[70vh] w-[70vh] rounded-full opacity-60 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.28) 0%, transparent 70%)",
        }}
      />
      <div
        className="cosmic-animate-nebula absolute -right-[10%] bottom-[-15%] h-[60vh] w-[60vh] rounded-full opacity-50 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,70,173,0.3) 0%, transparent 70%)",
          animationDelay: "-11s",
        }}
      />
      <div
        className="cosmic-animate-pulse absolute left-1/2 top-1/3 h-[45vh] w-[45vh] -translate-x-1/2 rounded-full opacity-40 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(223,177,91,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Light rays — a soft conic sweep from the top. */}
      <div
        className="cosmic-animate-ray absolute inset-x-0 top-0 h-[60vh]"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 0%, transparent 0deg, rgba(223,177,91,0.06) 25deg, transparent 55deg, rgba(124,58,237,0.05) 90deg, transparent 130deg)",
        }}
      />

      {/* Constellation + zodiac geometry. One tiled SVG rather than dozens of
          DOM nodes, so it costs a single paint. */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 320 320'%3E%3Cg fill='none' stroke='%23dfb15b' stroke-opacity='0.16' stroke-width='0.6'%3E%3Cpath d='M30 60L95 32L150 88L233 55L291 120'/%3E%3Cpath d='M42 210L118 250L188 196L262 238'/%3E%3Cpath d='M95 32L118 250'/%3E%3Cpath d='M233 55L188 196'/%3E%3Ccircle cx='160' cy='160' r='108'/%3E%3Ccircle cx='160' cy='160' r='74'/%3E%3Cpath d='M160 52L253 106L253 214L160 268L67 214L67 106Z'/%3E%3C/g%3E%3Cg fill='%23fcd34d' fill-opacity='0.5'%3E%3Ccircle cx='30' cy='60' r='1.4'/%3E%3Ccircle cx='95' cy='32' r='1.8'/%3E%3Ccircle cx='150' cy='88' r='1.3'/%3E%3Ccircle cx='233' cy='55' r='1.7'/%3E%3Ccircle cx='291' cy='120' r='1.2'/%3E%3Ccircle cx='42' cy='210' r='1.5'/%3E%3Ccircle cx='118' cy='250' r='1.9'/%3E%3Ccircle cx='188' cy='196' r='1.4'/%3E%3Ccircle cx='262' cy='238' r='1.6'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "620px 620px",
        }}
      />

      {/* Planet orbit rings, slowly counter-rotating. */}
      <div className="absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2">
        <div className="cosmic-animate-orbit absolute inset-0 rounded-full border border-[#dfb15b]/10">
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dfb15b] shadow-[0_0_12px_4px_rgba(223,177,91,0.5)]" />
        </div>
        <div className="cosmic-animate-orbit-rev absolute inset-[12%] rounded-full border border-[#7c3aed]/12">
          <span className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed] shadow-[0_0_10px_3px_rgba(124,58,237,0.5)]" />
        </div>
        <div className="cosmic-animate-orbit absolute inset-[26%] rounded-full border border-[#38bdf8]/10" style={{ animationDuration: "96s" }}>
          <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#38bdf8] shadow-[0_0_10px_3px_rgba(56,189,248,0.45)]" />
        </div>
      </div>

      {/* A vignette so the corners fall away and copy always wins the contrast
          fight against the sky. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
};
