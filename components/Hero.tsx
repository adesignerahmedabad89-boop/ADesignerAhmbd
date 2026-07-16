"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, PenTool, Palette, Brush, Layers, Compass } from "lucide-react";

const words = ["Brands", "Identities", "Success", "Futures", "Legacy"];

// Stars data for the floating celestial particles
const STARS_COUNT = 40;
const roundVal = (n: number) => Math.round(n * 10000) / 10000;
interface StarData {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: string;
  duration: string;
}

interface FloatingIconData {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: string;
  duration: string;
  iconName: 'PenTool' | 'Palette' | 'Brush' | 'Layers' | 'Compass';
  rotation: number;
}

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [entered, setEntered] = useState(false);
  const [stars, setStars] = useState<StarData[]>([]);
  const [floatingIcons, setFloatingIcons] = useState<FloatingIconData[]>([]);

  // Generate random star and icon positions after client mount
  useEffect(() => {
    setEntered(true);
    const generatedStars = Array.from({ length: STARS_COUNT }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 0.8,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 4 + 2.5}s`,
    }));
    setStars(generatedStars);

    const iconTypes: ('PenTool' | 'Palette' | 'Brush' | 'Layers' | 'Compass')[] = [
      'PenTool', 'Palette', 'Brush', 'Layers', 'Compass'
    ];
    const generatedIcons = Array.from({ length: 8 }).map((_, i) => {
      const isLeftSide = i % 2 === 0;
      const leftVal = isLeftSide
        ? Math.random() * 30 + 5    // 5% to 35%
        : Math.random() * 30 + 65;  // 65% to 95%

      return {
        id: i,
        top: `${Math.random() * 70 + 10}%`,
        left: `${leftVal}%`,
        size: Math.random() * 12 + 20, // 20px to 32px
        delay: `${Math.random() * 5}s`,
        duration: `${Math.random() * 6 + 9}s`, // 9s to 15s
        iconName: iconTypes[i % iconTypes.length],
        rotation: Math.random() * 360,
      };
    });
    setFloatingIcons(generatedIcons);
  }, []);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % words.length);
        setFadeIn(true);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Per-word entrance animation style
  const wordEnter = (i: number): React.CSSProperties => ({
    display: "inline-block",
    opacity: entered ? 1 : 0,
    transform: entered ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.13}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.13}s`,
  });

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        background: "radial-gradient(circle at 80% 20%, #174261 0%, #051829 55%, #02080f 100%)",
      }}
    >
      {/* Inject premium CSS keyframe animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes spin-cw {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-ccw {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        @keyframes twinkle-star {
          0%, 100% { opacity: 0.15; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes nebula-pulse {
          0%, 100% { opacity: 0.35; filter: blur(60px); transform: scale(1); }
          50% { opacity: 0.55; filter: blur(75px); transform: scale(1.05); }
        }
        @keyframes shooting-star-left-right {
          0% { transform: translateX(-10vw) translateY(10vh) rotate(-35deg) scale(0); opacity: 0; }
          4% { transform: translateX(5vw) translateY(-5vh) rotate(-35deg) scale(1); opacity: 1; }
          12% { transform: translateX(35vw) translateY(-35vh) rotate(-35deg) scale(0); opacity: 0; }
          100% { transform: translateX(35vw) translateY(-35vh) rotate(-35deg) scale(0); opacity: 0; }
        }
        @keyframes button-shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Default spin states */
        .spin-clockwise-slow {
          animation: spin-cw 75s linear infinite;
          transition: animation-duration 0.6s ease;
        }
        .spin-counter-clockwise {
          animation: spin-ccw 55s linear infinite;
          transition: animation-duration 0.6s ease;
        }
        .spin-clockwise-fast {
          animation: spin-cw 35s linear infinite;
          transition: animation-duration 0.6s ease;
        }
        .chakra-float {
          animation: float-gentle 7s ease-in-out infinite;
        }
        .star-twinkle {
          animation: twinkle-star var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
        }
        .nebula {
          animation: nebula-pulse 12s ease-in-out infinite;
        }
        .shooting-star {
          position: absolute;
          width: 140px;
          height: 1.5px;
          background: linear-gradient(90deg, rgba(255,255,255,0.8), transparent);
          pointer-events: none;
          z-index: 2;
        }
        .shooting-star-1 {
          animation: shooting-star-left-right 14s linear infinite;
          animation-delay: 1s;
        }
        .shooting-star-2 {
          animation: shooting-star-left-right 19s linear infinite;
          animation-delay: 7s;
        }

        /* Interactive Hover: Accelerate spin on hover */
        .chakra-container:hover .spin-clockwise-slow {
          animation-duration: 35s;
        }
        .chakra-container:hover .spin-counter-clockwise {
          animation-duration: 25s;
        }
        .chakra-container:hover .spin-clockwise-fast {
          animation-duration: 15s;
        }
        .chakra-container:hover .chakra-core-glow {
          filter: drop-shadow(0 0 12px #f58220) brightness(1.25);
        }

        .btn-gradient-shimmer {
          background: linear-gradient(90deg, #f58220, #ff9e42, #f58220);
          background-size: 200% auto;
          animation: button-shimmer 3s linear infinite;
        }

        @keyframes float-icon-anim {
          0%, 100% { transform: translateY(0px) rotate(var(--rot, 0deg)); opacity: 0.16; }
          50% { transform: translateY(-16px) rotate(calc(var(--rot, 0deg) + 12deg)); opacity: 0.34; }
        }

        @keyframes space-drift {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.08) rotate(2deg); }
        }

        .bg-astrolabe-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          opacity: 1.0;
          overflow: hidden;
        }
        .bg-astrolabe-video video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 72% center;
        }
        .bg-astrolabe-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(2, 8, 15, 0.98) 0%, rgba(2, 8, 15, 0.5) 45%, rgba(2, 8, 15, 0) 75%);
          pointer-events: none;
          z-index: 2;
        }
        @media (max-width: 1024px) {
          .bg-astrolabe-video {
            opacity: 0.35;
          }
          .bg-astrolabe-video video {
            object-position: center center;
          }
          .bg-astrolabe-overlay {
            background: rgba(2, 8, 15, 0.78);
          }
        }
      `}} />

      {/* Shooting Stars */}
      <div className="shooting-star shooting-star-1" style={{ top: "35%", left: "20%" }} />
      <div className="shooting-star shooting-star-2" style={{ top: "60%", left: "40%" }} />

      {/* Full-section celestial astrolabe background video with dark overlay */}
      <div className="bg-astrolabe-video">
        <video autoPlay loop muted playsInline>
          {/* Local downloaded video source */}
          <source src="/watermarked_preview.mp4" type="video/mp4" />
          {/* Fallback CDN link */}
          <source src="https://video-previews.elements.envatousercontent.com/cac16edd-c76e-414a-96f5-a534966bcabb/watermarked_preview/watermarked_preview.mp4" type="video/mp4" />
        </video>
        <div className="bg-astrolabe-overlay" />
      </div>

      {/* Nebula glowing aura behind the chakra */}
      <div
        className="nebula"
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,130,32,0.22) 0%, rgba(21,78,115,0.12) 50%, transparent 75%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 1,
          transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)`,
          transition: "transform 0.3s cubic-bezier(0.1, 0.8, 0.2, 1)",
        }}
      />
      <div
        className="nebula"
        style={{
          position: "absolute",
          bottom: "-5%",
          left: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(21,78,115,0.18) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 1,
          animationDelay: "3s",
          transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)`,
          transition: "transform 0.3s cubic-bezier(0.1, 0.8, 0.2, 1)",
        }}
      />

      {/* Floating Constellation Stars (Parallax Outer + Orbit Inner) */}
      <div
        style={{
          position: "absolute",
          inset: "-60px",
          zIndex: 2,
          pointerEvents: "none",
          transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)`,
          transition: "transform 0.2s cubic-bezier(0.15, 0.85, 0.3, 1)",
        }}
      >
        <div style={{ width: "100%", height: "100%", animation: "space-drift 28s ease-in-out infinite" }}>
          {stars.map((star) => (
            <div
              key={star.id}
              className="star-twinkle"
              style={{
                position: "absolute",
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
                borderRadius: "50%",
                background: "#ffffff",
                boxShadow: star.size > 2 ? "0 0 6px #ffffff, 0 0 10px rgba(245,130,32,0.6)" : "none",
                WebkitAnimationDelay: star.delay,
                animationDelay: star.delay,
                animationDuration: star.duration,
                WebkitAnimationDuration: star.duration,
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>

      {/* Floating Design Icons (Parallax Outer + Drift Inner) */}
      <div
        style={{
          position: "absolute",
          inset: "-80px",
          zIndex: 2,
          pointerEvents: "none",
          overflow: "hidden",
          transform: `translate(${mousePos.x * -42}px, ${mousePos.y * -42}px)`,
          transition: "transform 0.18s cubic-bezier(0.15, 0.85, 0.3, 1)",
        }}
      >
        <div style={{ width: "100%", height: "100%", animation: "space-drift 38s ease-in-out infinite alternate" }}>
          {floatingIcons.map((item) => {
            let IconComponent;
            switch (item.iconName) {
              case 'PenTool': IconComponent = PenTool; break;
              case 'Palette': IconComponent = Palette; break;
              case 'Brush': IconComponent = Brush; break;
              case 'Layers': IconComponent = Layers; break;
              case 'Compass': IconComponent = Compass; break;
              default: IconComponent = PenTool;
            }
            return (
              <div
                key={item.id}
                style={{
                  position: "absolute",
                  top: item.top,
                  left: item.left,
                  color: "rgba(245, 130, 32, 0.22)",
                  filter: "drop-shadow(0 0 8px rgba(245,130,32,0.15))",
                  animation: `float-icon-anim ${item.duration} ease-in-out infinite`,
                  animationDelay: item.delay,
                  ['--rot' as any]: `${item.rotation}deg`,
                } as React.CSSProperties}
              >
                <IconComponent size={item.size} strokeWidth={1.2} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle Dot Grid */}
      <div
        style={{
          position: "absolute",
          inset: "-40px",
          backgroundImage: "radial-gradient(circle, rgba(245,130,32,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
          opacity: 0.6,
          zIndex: 2,
          transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)`,
          transition: "transform 0.25s cubic-bezier(0.1, 0.8, 0.2, 1)",
        }}
      />

      <div
        style={{ position: "relative", zIndex: 10, width: "100%", paddingTop: "100px", paddingBottom: "80px" }}
      >
        <div className="site-wrap">
          <div style={{ display: "grid", alignItems: "center", gap: "40px" }} className="lg:grid-cols-12">

            {/* Left side: Copy content */}
            <div className="lg:col-span-7" style={{ position: "relative", zIndex: 12 }}>
              <h1
                style={{
                  fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
                  fontWeight: 600,
                  lineHeight: 1.1,
                  marginBottom: "24px",
                  color: "#ffffff",
                }}
              >
                {["We", "are", "Helping", "\n", "to", "Build"].map((w, i) =>
                  w === "\n" ? (
                    <br key={`br-${i}`} />
                  ) : (
                    <span key={i} style={{ ...wordEnter(i), marginRight: "0.28em" }}>
                      {w}
                    </span>
                  )
                )}
                {/* Rotating word */}
                <span style={{ ...wordEnter(6), color: "#f58220" }}>
                  <span
                    style={{
                      display: "inline-block",
                      opacity: fadeIn ? 1 : 0,
                      transform: fadeIn ? "translateY(0)" : "translateY(10px)",
                      transition: "opacity 350ms ease, transform 350ms ease",
                    }}
                  >
                    {words[wordIdx]}
                  </span>
                </span>
              </h1>

              <p style={{ color: "#cbd5e1", fontSize: "1.1rem", lineHeight: 1.75, marginBottom: "36px", maxWidth: "540px" }}>
                Build Your Brand&apos;s Journey with A Designer Ahmedabad — your partner in
                Logo, Packaging, Brochure &amp; all things graphic design.
              </p>

              {/* CTA buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "56px" }}>
                <Link
                  href="#about"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 32px",
                    color: "#fff",
                    fontWeight: 700,
                    borderRadius: "999px",
                    fontSize: "15px",
                    transition: "all 0.3s ease",
                  }}
                  className="btn-gradient-shimmer hover:shadow-[0_0_20px_rgba(245,130,32,0.4)]"
                >
                  Discover More <ArrowRight size={17} />
                </Link>
              </div>

              {/* Stats row */}
              <div
                style={{ display: "grid", gap: "12px", maxWidth: "560px" }}
                className="grid-cols-3"
              >
                {[{ value: "5000+", label: "Projects Completed" }, { value: "4200+", label: "Happy Clients" }, { value: "10+", label: "Years Experience" }].map((s) => (
                  <div key={s.label} style={{ borderLeft: "2px solid #f58220", paddingLeft: "10px", minWidth: 0 }}>
                    <div style={{ fontSize: "clamp(1rem, 3vw, 1.55rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.1, whiteSpace: "nowrap" }}>{s.value}</div>
                    <div style={{ fontSize: "clamp(10px, 2vw, 11px)", color: "#cbd5e1", marginTop: "3px", fontWeight: 500 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side spacer to let the background astrolabe video float */}
            <div className="lg:col-span-5 hidden lg:block" style={{ height: "450px" }} />

          </div>
        </div>
      </div>
    </section>
  );
}
