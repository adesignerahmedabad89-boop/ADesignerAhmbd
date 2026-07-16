"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, X, ShieldAlert, Sparkles, Trophy, Star, ArrowRight, Eye, Sun, Moon, Compass, Globe } from "lucide-react";

const getZodiacIcon = (name: string) => {
  const props = {
    className: "w-8 h-8 text-[#dfb15b] transition-transform group-hover:scale-110 duration-300",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    fill: "none",
    viewBox: "0 0 24 24"
  };

  switch (name) {
    case "Aries":
      return (
        <svg {...props}>
          <path d="M12 21v-10c0-2.2-1.8-4-4-4S4 8.8 4 11M12 11c0-2.2 1.8-4 4-4s4 1.8 4 4" />
        </svg>
      );
    case "Taurus":
      return (
        <svg {...props}>
          <circle cx="12" cy="14" r="5" />
          <path d="M4 6c0 3 3 5 8 5s8-2 8-5" />
        </svg>
      );
    case "Gemini":
      return (
        <svg {...props}>
          <path d="M8 4h8M8 20h8M9 4v16M15 4v16" />
        </svg>
      );
    case "Cancer":
      return (
        <svg {...props}>
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="16" r="3" />
          <path d="M8 5h8a4 4 0 0 1 4 4M16 19H8a4 4 0 0 1-4-4" />
        </svg>
      );
    case "Leo":
      return (
        <svg {...props}>
          <circle cx="7.5" cy="14.5" r="2.5" />
          <path d="M10 14.5c2.5-3.5 5.5-6.5 8-5.5s2.5 3.5.5 6-6.5 7-6.5 7" />
        </svg>
      );
    case "Virgo":
      return (
        <svg {...props}>
          <path d="M4 8v10M8 8v10M12 8v6c0 2 1 3 3 3s3-1.5 3-4V8" />
          <path d="M18 12c1-1 2-1 2.5 0s0 2.5-1.5 4.5l-3 3.5" />
        </svg>
      );
    case "Libra":
      return (
        <svg {...props}>
          <path d="M4 14h5a3 3 0 1 1 6 0h5M4 19h16" />
        </svg>
      );
    case "Scorpio":
      return (
        <svg {...props}>
          <path d="M4 8v10M8 8v10M12 8v8c0 1.5.5 2.5 2 2.5s2.5-1 2.5-3v-4" />
          <path d="M16.5 11.5l3-3 2.5 2.5 M19.5 8.5v3h-3" />
        </svg>
      );
    case "Sagittarius":
      return (
        <svg {...props}>
          <path d="M5 19L19 5M13 5h6v6M9 15l4-4" />
        </svg>
      );
    case "Capricorn":
      return (
        <svg {...props}>
          <path d="M4 12c0-3 3-5 5-2v7c0 2 2 3.5 4 2s2.5-2 2.5-4V11c0-2 1.5-3 3-1.5s1 3.5-1.5 5.5l-3 2" />
        </svg>
      );
    case "Aquarius":
      return (
        <svg {...props}>
          <path d="M4 9l3.5-3.5L12 10l4.5-4.5L20 9M4 15l3.5-3.5L12 16l4.5-4.5L20 15" />
        </svg>
      );
    case "Pisces":
      return (
        <svg {...props}>
          <path d="M7 4c-3 4-3 12 0 16M17 4c3 4 3 12 0 16M5 12h14" />
        </svg>
      );
    default:
      return null;
  }
};

export default function ScientificLogoPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Form states & submission handler
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedZodiac, setSelectedZodiac] = useState<string>("Aries");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };


  useEffect(() => {
    // Dynamic Spiral Galaxy Simulator on Canvas
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let angleOffset = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Generate stars in spiral arms
    const stars: {
      r: number; // distance from center
      angle: number; // base angle
      size: number;
      color: string;
      speed: number;
    }[] = [];

    const numStars = 600;
    const numArms = 3;
    const armWidth = 0.4; // dispersion

    for (let i = 0; i < numStars; i++) {
      // Distance from center
      const r = Math.pow(Math.random(), 2.5) * Math.max(canvas.width, canvas.height) * 0.75;

      // Determine which arm this star belongs to
      const armIndex = i % numArms;
      const armAngle = (armIndex / numArms) * Math.PI * 2;

      // Spiral curvature factor
      const spiralFactor = r * 0.005;

      // Random angle dispersion in the arm
      const dispersion = (Math.random() - 0.5) * armWidth;
      const angle = armAngle + spiralFactor + dispersion;

      // Color scheme (mystical gold, brand blue, brand orange/red, soft white)
      const colors = ["#dfb15b", "#0046ad", "#e31e24", "#fcd34d", "#ffffff", "#38bdf8"];
      const color = colors[Math.floor(Math.random() * colors.length)];

      stars.push({
        r,
        angle,
        size: Math.random() * 1.8 + 0.3,
        color,
        speed: (Math.random() * 0.002 + 0.001) * (1 / (1 + r * 0.01)), // outer stars rotate slower
      });
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep space gradient backdrop (anchored to center)
      const bgGrad = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) * 0.8
      );
      bgGrad.addColorStop(0, "#070414");
      bgGrad.addColorStop(0.5, "#020108");
      bgGrad.addColorStop(1, "#000000");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Shift core center smoothly toward mouse coords (parallax drift)
      const maxShiftX = canvas.width * 0.07;
      const maxShiftY = canvas.height * 0.07;
      const targetCx = canvas.width / 2 + ((mouseX - canvas.width / 2) / (canvas.width / 2)) * maxShiftX;
      const targetCy = canvas.height / 2 + ((mouseY - canvas.height / 2) / (canvas.height / 2)) * maxShiftY;

      currentX += (targetCx - currentX) * 0.04;
      currentY += (targetCy - currentY) * 0.04;

      const cx = currentX;
      const cy = currentY;

      // Draw glowing central cosmic core
      ctx.save();
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 120);
      coreGrad.addColorStop(0, "rgba(223, 177, 91, 0.25)");
      coreGrad.addColorStop(0.4, "rgba(124, 58, 237, 0.12)");
      coreGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 120, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Render rotating spiral galaxy
      angleOffset += 0.003; // Increased rotation rate for visible motion

      stars.forEach((star) => {
        const currentAngle = star.angle + angleOffset;

        // Calculate coordinates relative to drifted center
        const x = cx + Math.cos(currentAngle) * star.r;
        const y = cy + Math.sin(currentAngle) * star.r;

        // Skip drawing if outside bounds
        if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) return;

        // Draw star
        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);

        // Twinkling effect
        const twinkle = 0.6 + 0.4 * Math.sin(Date.now() * 0.003 + star.r);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = twinkle;
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* Dynamic Spiral Galaxy Canvas Background */}
      <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />

      {/* Cosmic Astrology UI Layout */}
      <div className="relative z-10 text-white overflow-hidden bg-transparent font-sans">

        {/* Fixed Header Spacer block to push content completely below the fixed Navbar */}
        <div style={{ height: "60px", width: "100%" }} className="shrink-0"></div>

        {/* ============ CELESTIAL HERO SECTION ============ */}
        <section
          style={{ width: "100%", paddingTop: "80px", paddingBottom: "80px" }}
          className="relative px-6 flex flex-col items-center justify-center border-b border-[#dfb15b]/10"
        >
          <div className="site-wrap text-center flex flex-col items-center">

            {/* Celestial Badge */}
            <div data-aos="fade-down" className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#dfb15b]/30 bg-black/60 shadow-[0_0_15px_rgba(223,177,91,0.15)] text-xs font-semibold text-[#dfb15b] mb-8 animate-pulse">
              <Moon className="w-4 h-4 text-[#dfb15b] fill-current" />
              Cosmic Alignment &amp; Astrological Logo Optimization
            </div>

            {/* Astrology Headline */}
            <h1 data-aos="fade-up" className="font-serif text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white mb-6 tracking-tight">
              Align Your Brand With the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfb15b] via-[#fcd34d] to-[#7c3aed] filter drop-shadow-[0_0_20px_rgba(223,177,91,0.2)]">
                Frequencies of the Universe
              </span>
            </h1>

            {/* Sub-headline */}
            <p data-aos="fade-up" data-aos-delay="100" className="text-base md:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Every design element possesses an energetic wavelength. We align your corporate logo, signature pattern, and name vibrations to match your zodiac ruler, planetary elements, and cosmic wealth frequencies.
            </p>

            {/* Astrology Diagnostic Display (Visual Astrology Charts & Grid Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left w-full">
              {[
                {
                  icon: <Sun className="w-6 h-6 text-[#dfb15b]" />,
                  title: "Solar Energy & Brand Authority",
                  desc: "Aligning your visual geometry with Sun frequencies to command market trust, leadership, and long-term prestige."
                },
                {
                  icon: <Moon className="w-6 h-6 text-[#7c3aed]" />,
                  title: "Lunar Flow & Customer Magnetism",
                  desc: "Optimizing color frequencies to match moon cycles, enhancing customer empathy, brand recall, and repeat interactions."
                },
                {
                  icon: <Compass className="w-6 h-6 text-[#ec4899]" />,
                  title: "Directional Vastu & Sacred Shapes",
                  desc: "Balancing vertical, horizontal, and radial curves to channel cosmological energies, clearing cash-flow bottlenecks."
                }
              ].map((item, idx) => (
                <div key={idx} data-aos="fade-up" data-aos-delay={idx * 150} style={{ padding: "40px 32px" }} className="relative rounded-2xl bg-black/75 border border-[#dfb15b]/20 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:border-[#dfb15b]/50 hover:shadow-[0_0_20px_rgba(223,177,91,0.08)] transition-all">
                  <div className="absolute top-0 right-0 p-3 text-[10px] font-mono text-[#dfb15b]/30">Arm #{idx + 1}</div>
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-[#dfb15b]/20 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div data-aos="zoom-in" className="mb-10">
              <a
                href="https://wa.me/916353117403"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-[#dfb15b] via-[#0046ad] to-[#e31e24] text-white font-extrabold text-lg rounded-full shadow-[0_0_30px_rgba(0,70,173,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,70,173,0.5)]"
              >
                Schedule Your 1:1 Cosmic Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>

            {/* Astrological Trust Indicators */}
            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
              {["🪐 Planetary Grid Audits", "✨ 15,000+ Astrological Profiles", "🔮 Zodiac Element Synthesis", "🌌 100% Cosmic Correction"].map((badge, idx) => (
                <span key={idx} className="px-5 py-2 rounded-full border border-[#dfb15b]/20 bg-black/60 text-xs text-slate-300">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>


        {/* ============ CELESTIAL WARNING SECTION ============ */}
        <section
          style={{ width: "100%", paddingTop: "50px", paddingBottom: "50px" }}
          className="px-6 bg-black/45 border-b border-[#dfb15b]/10"
        >
          <div className="site-wrap flex justify-center">
            <div data-aos="zoom-in" className="max-w-4xl w-full rounded-2xl border border-red-500/20 bg-[#0f0714] p-8 md:p-10 text-center backdrop-blur-md">
              <ShieldAlert className="mx-auto w-12 h-12 text-[#dfb15b] mb-4" />
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-medium font-serif">
                &ldquo;When a logo violates Vastu rules or contains colors that conflict with the founder&apos;s birth chart, it creates cosmic static — leading to unstable sales, friction, and expansion resistance.&rdquo;
              </p>
            </div>
          </div>
        </section>


        {/* ============ WHAT WE DO (ROTATING COSMIC STRUCTURE) ============ */}
        <section
          style={{ width: "100%", paddingTop: "80px", paddingBottom: "80px" }}
          className="px-6 border-b border-[#dfb15b]/10"
        >
          <div className="site-wrap px-8 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column: Rotating Cosmic SVG Structure */}
              <div data-aos="fade-right" className="lg:col-span-5 flex justify-center items-center relative min-h-[300px]">
                {/* Outer Glow Effect */}
                <div className="absolute w-[280px] h-[280px] bg-gradient-to-r from-[#dfb15b]/10 to-[#7c3aed]/10 rounded-full blur-2xl filter opacity-40"></div>

                {/* SVG Structure */}
                <svg viewBox="0 0 300 300" className="w-full max-w-[340px] md:max-w-[380px] mx-auto filter drop-shadow-[0_0_30px_rgba(223,177,91,0.15)] relative z-10">
                  {/* Outer boundary guidelines */}
                  <circle cx="150" cy="150" r="145" fill="none" stroke="rgba(223, 177, 91, 0.05)" strokeWidth="1" strokeDasharray="5 5" />
                  <circle cx="150" cy="150" r="125" fill="none" stroke="rgba(223, 177, 91, 0.03)" strokeWidth="1" />

                  {/* Outer Tilted Orbits */}
                  <ellipse cx="150" cy="150" rx="135" ry="55" fill="none" stroke="rgba(223, 177, 91, 0.15)" strokeWidth="1" transform="rotate(-30, 150, 150)" />
                  <ellipse cx="150" cy="150" rx="120" ry="75" fill="none" stroke="rgba(124, 58, 237, 0.15)" strokeWidth="1.2" transform="rotate(45, 150, 150)" />

                  {/* Outer Spinning Group (60s slow spin) */}
                  <g className="animate-[spin_60s_linear_infinite] origin-center">
                    <circle cx="150" cy="150" r="105" fill="none" stroke="rgba(255, 255, 255, 0.07)" strokeWidth="1" />
                    <circle cx="150" cy="150" r="85" fill="none" stroke="rgba(223, 177, 91, 0.1)" strokeWidth="1" strokeDasharray="3 3" />

                    {/* Floating Planets */}
                    <circle cx="150" cy="45" r="7" fill="url(#goldGrad)" className="filter drop-shadow-[0_0_8px_#dfb15b]" />
                    <circle cx="45" cy="150" r="4.5" fill="#7c3aed" />
                    <circle cx="150" cy="255" r="5" fill="#ec4899" />
                  </g>

                  {/* Inner Fast Reverse Spinning Group (30s spin) */}
                  <g className="animate-[spin_30s_linear_infinite_reverse] origin-center">
                    <ellipse cx="150" cy="150" rx="65" ry="65" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
                    <circle cx="215" cy="150" r="5.5" fill="#38bdf8" />
                    <circle cx="85" cy="150" r="4" fill="#dfb15b" />
                  </g>

                  {/* Central Sacred Geometry Structure */}
                  <g>
                    {/* Shadow core backdrop */}
                    <circle cx="150" cy="150" r="45" fill="black" stroke="rgba(223, 177, 91, 0.25)" strokeWidth="1" />

                    {/* Detailed Tetrahedron structure */}
                    <polygon points="150,118 112,176 188,176" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinejoin="round" />
                    <polygon points="150,132 122,176 178,176" fill="none" stroke="rgba(223, 177, 91, 0.4)" strokeWidth="1" strokeLinejoin="round" />

                    {/* Projection Lines */}
                    <line x1="150" y1="118" x2="150" y2="155" stroke="#ffffff" strokeWidth="1.2" />
                    <line x1="112" y1="176" x2="150" y2="155" stroke="#ffffff" strokeWidth="1.2" />
                    <line x1="188" y1="176" x2="150" y2="155" stroke="#ffffff" strokeWidth="1.2" />

                    {/* Center glowing focal point */}
                    <circle cx="150" cy="155" r="5" fill="#dfb15b" className="filter drop-shadow-[0_0_5px_#dfb15b]" />
                  </g>

                  <defs>
                    <radialGradient id="goldGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#fcd34d" />
                      <stop offset="100%" stopColor="#dfb15b" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>

              {/* Right Column: Content Section */}
              <div data-aos="fade-left" className="lg:col-span-7 flex flex-col justify-center text-left">
                <span className="text-xs uppercase tracking-widest text-[#dfb15b] font-bold block mb-3">
                  Predict Future
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                  What We Do
                </h2>
                <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed max-w-2xl">
                  At A Designer Ahmedabad, we blend creative graphic design with scientific logo principles, astrology, and Vastu Shastra to create powerful brand identities. Whether you’re launching a new venture, optimizing an existing corporate logo, or aligning your brand colors with your zodiac elements, we ensure your logo is not only visually stunning but mathematically and astronomically tuned to attract growth, success, and prosperity.
                </p>
                <div>
                  <a
                    href="https://wa.me/916353117403"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3.5 border border-[#dfb15b]/40 text-[#dfb15b] font-bold text-sm rounded-full transition-all hover:bg-[#dfb15b]/10 hover:border-[#dfb15b]"
                  >
                    Discover More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>



        {/* ============ INTERACTIVE ZODIAC BRAND ALIGNMENT CALCULATOR ============ */}
        <section
          id="zodiac-calculator"
          style={{ width: "100%", paddingTop: "60px", paddingBottom: "80px" }}
          className="border-b border-[#dfb15b]/10 bg-slate-950/10"
        >
          {/* Load Google Fonts directly inside page container */}
          <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

          <div className="site-wrap mx-auto px-8 md:px-12 flex flex-col items-center">
            <div data-aos="fade-up" className="text-center" style={{ marginBottom: "50px" }}>
              <span className="text-xs uppercase tracking-widest text-[#dfb15b] font-bold block mb-3">Astrological Tool</span>
              <h2 style={{ fontFamily: "'Cinzel', serif" }} className="text-3xl md:text-5xl font-extrabold text-white leading-tight text-center">
                Zodiac Brand Alignment Calculator
              </h2>
              <p className="text-sm text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed text-center">
                Select your Zodiac Sign (Rashi) to discover the ideal planetary elements, colors, and geometries for your brand logo.
              </p>
            </div>

            {/* Zodiac Selection Grid */}
            <div data-aos="fade-up" className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-10 max-w-5xl mx-auto w-full">
              {[
                { name: "Aries", hindi: "Mesh", symbol: "♈\uFE0E" },
                { name: "Taurus", hindi: "Vrishabha", symbol: "♉\uFE0E" },
                { name: "Gemini", hindi: "Mithuna", symbol: "♊\uFE0E" },
                { name: "Cancer", hindi: "Karka", symbol: "♋\uFE0E" },
                { name: "Leo", hindi: "Simha", symbol: "♌\uFE0E" },
                { name: "Virgo", hindi: "Kanya", symbol: "♍\uFE0E" },
                { name: "Libra", hindi: "Tula", symbol: "♎\uFE0E" },
                { name: "Scorpio", hindi: "Vrishchika", symbol: "♏\uFE0E" },
                { name: "Sagittarius", hindi: "Dhanu", symbol: "♐\uFE0E" },
                { name: "Capricorn", hindi: "Makara", symbol: "♑\uFE0E" },
                { name: "Aquarius", hindi: "Kumbha", symbol: "♒\uFE0E" },
                { name: "Pisces", hindi: "Meena", symbol: "♓\uFE0E" }
              ].map((zodiac) => {
                const isActive = selectedZodiac === zodiac.name;
                return (
                  <button
                    key={zodiac.name}
                    onClick={() => setSelectedZodiac(zodiac.name)}
                    style={{
                      borderColor: isActive ? "#dfb15b" : "rgba(223,177,91,0.15)",
                      backgroundColor: isActive ? "rgba(223,177,91,0.12)" : "rgba(0,0,0,0.6)"
                    }}
                    className="flex flex-col items-center justify-center p-5 rounded-2xl border text-center transition-all hover:border-[#dfb15b]/60 cursor-pointer hover:translate-y-[-2px] group"
                  >
                    <div className="mb-2 text-[#dfb15b]">{getZodiacIcon(zodiac.name)}</div>
                    <span className="font-serif text-sm font-bold text-white group-hover:text-[#dfb15b] transition-colors">{zodiac.name}</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">{zodiac.hindi}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamically Rendered Result Card */}
            {selectedZodiac && (
              <div 
                data-aos="zoom-in"
                style={{ padding: "40px" }}
                className="max-w-5xl mx-auto w-full rounded-3xl border border-[#dfb15b]/20 bg-gradient-to-br from-black/90 to-slate-950/90 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-md relative overflow-hidden"
              >
                <div className="absolute right-[-40px] top-[-40px] w-48 h-48 bg-[#dfb15b]/5 rounded-full blur-2xl filter pointer-events-none"></div>
                
                {/* Result Columns */}
                {(() => {
                  const data = [
                    { name: "Aries", hindi: "Mesh", symbol: "♈\uFE0E", planet: "Mars (Mangal)", element: "Fire", colors: "Crimson Red, Metallic Gold, Warm Orange", geometry: "Triangles, Sharp points, Dynamic angles", direction: "East (Purva)" },
                    { name: "Taurus", hindi: "Vrishabha", symbol: "♉\uFE0E", planet: "Venus (Shukra)", element: "Earth", colors: "Emerald Green, Pearl White, Olive Green", geometry: "Symmetric curves, circles, heavy borders", direction: "Southeast (Agneya)" },
                    { name: "Gemini", hindi: "Mithuna", symbol: "♊\uFE0E", planet: "Mercury (Budh)", element: "Air", colors: "Bright Yellow, Light Green, Soft Teal", geometry: "Hexagons, clean lines, twin elements, grids", direction: "West (Paschim)" },
                    { name: "Cancer", hindi: "Karka", symbol: "♋\uFE0E", planet: "Moon (Chandra)", element: "Water", colors: "Silver, Pearl White, Light Blue", geometry: "Crescents, soft waves, organic curves", direction: "North (Uttar)" },
                    { name: "Leo", hindi: "Simha", symbol: "♌\uFE0E", planet: "Sun (Surya)", element: "Fire", colors: "Metallic Gold, Deep Yellow, Crimson", geometry: "Radiant lines, sunbursts, bold circles", direction: "East (Purva)" },
                    { name: "Virgo", hindi: "Kanya", symbol: "♍\uFE0E", planet: "Mercury (Budh)", element: "Earth", colors: "Forest Green, Dark Ochre, Beige", geometry: "Mathematical grids, precise squares", direction: "North (Uttar)" },
                    { name: "Libra", hindi: "Tula", symbol: "♎\uFE0E", planet: "Venus (Shukra)", element: "Air", colors: "Royal Blue, Sky Blue, Rose Gold", geometry: "Perfect horizontal symmetry, balance scales", direction: "West (Paschim)" },
                    { name: "Scorpio", hindi: "Vrishchika", symbol: "♏\uFE0E", planet: "Mars (Mangal)", element: "Water", colors: "Deep Maroon, Dark Violet, Crimson Black", geometry: "Intricate spirals, strong upward points", direction: "Northwest (Vayavya)" },
                    { name: "Sagittarius", hindi: "Dhanu", symbol: "♐\uFE0E", planet: "Jupiter (Guru)", element: "Fire", colors: "Saffron, Royal Yellow, Purple", geometry: "Upward arrows, expanding radial lines", direction: "Northeast (Eeshanya)" },
                    { name: "Capricorn", hindi: "Makara", symbol: "♑\uFE0E", planet: "Saturn (Shani)", element: "Earth", colors: "Charcoal Black, Dark Cobalt, Olive Green", geometry: "Heavy solid structures, pillars, squares", direction: "South (Dakshin)" },
                    { name: "Aquarius", hindi: "Kumbha", symbol: "♒\uFE0E", planet: "Saturn / Rahu", element: "Air", colors: "Electric Blue, Indigo, Violet", geometry: "Zigzag waves, modern asymmetric grids", direction: "West (Paschim)" },
                    { name: "Pisces", hindi: "Meena", symbol: "♓\uFE0E", planet: "Jupiter (Guru)", element: "Water", colors: "Seafoam Green, Aquamarine, Deep Saffron", geometry: "Double overlapping circles, wavy lines", direction: "North (Uttar)" }
                  ].find(z => z.name === selectedZodiac);

                  if (!data) return null;

                  return (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                      
                      {/* Left Block: Info details */}
                      <div className="md:col-span-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-4 mb-6">
                            <div className="text-[#dfb15b] drop-shadow-[0_0_12px_rgba(223,177,91,0.4)] select-none w-14 h-14 flex items-center justify-center scale-[1.5] origin-left">{getZodiacIcon(data.name)}</div>
                            <div>
                              <h3 style={{ fontFamily: "'Cinzel', serif" }} className="text-2xl font-bold text-white tracking-wide">{data.name} <span className="text-sm font-sans text-[#dfb15b] font-semibold">({data.hindi})</span></h3>
                              <p className="text-xs text-slate-500 mt-0.5">Selected Zodiac Sign Profile</p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="border-b border-[#dfb15b]/10 pb-3 flex gap-4 items-center">
                              <span className="text-xs text-slate-400 font-bold w-36 shrink-0">Ruling Planet:</span>
                              <span className="text-xs text-[#dfb15b] font-black">{data.planet}</span>
                            </div>
                            <div className="border-b border-[#dfb15b]/10 pb-3 flex gap-4 items-center">
                              <span className="text-xs text-slate-400 font-bold w-36 shrink-0">Core Element:</span>
                              <span className="text-xs text-white font-bold">{data.element}</span>
                            </div>
                            <div className="border-b border-[#dfb15b]/10 pb-3 flex gap-4 items-center">
                              <span className="text-xs text-slate-400 font-bold w-36 shrink-0">Ideal Vastu Direction:</span>
                              <span className="text-xs text-white font-bold">{data.direction}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Block: Brand Recommendations */}
                      <div className="md:col-span-6 p-6 rounded-2xl bg-black/60 border border-[#dfb15b]/15 flex flex-col justify-center">
                        <h4 className="text-xs uppercase tracking-widest text-[#dfb15b] font-bold mb-4">Brand Logo Guidelines</h4>
                        
                        <div className="space-y-4 text-xs">
                          <div>
                            <div className="text-slate-400 font-bold mb-1.5">Recommended Colors:</div>
                            <div className="text-white bg-[#05020a]/60 px-3 py-2.5 rounded-lg border border-[#dfb15b]/5 font-medium leading-relaxed">{data.colors}</div>
                          </div>
                          <div>
                            <div className="text-slate-400 font-bold mb-1.5">Recommended Geometry:</div>
                            <div className="text-white bg-[#05020a]/60 px-3 py-2.5 rounded-lg border border-[#dfb15b]/5 font-medium leading-relaxed">{data.geometry}</div>
                          </div>
                        </div>
                      </div>

                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </section>


        {/* ============ OUR SERVICES SECTION ============ */}
        <section
          id="discover"
          style={{ width: "100%", paddingTop: "60px", paddingBottom: "80px" }}
          className="border-b border-[#dfb15b]/10"
        >
          <div className="site-wrap px-8 md:px-12">
            <div data-aos="fade-up" className="text-center" style={{ marginBottom: "60px" }}>
              <span className="text-xs uppercase tracking-widest text-[#dfb15b] font-bold block mb-3">About</span>
              <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Our Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {[
                {
                  img: "/mystical_moon_eye.png",
                  title: "Custom Logo Design",
                  desc: "Unique logos tailored to your scientific niche and branding goals."
                },
                {
                  img: "/celestial_planet.png",
                  title: "Research Group Identity Kits",
                  desc: "Logo, typography, and color palettes for research labs and academic groups."
                },
                {
                  img: "/hand_holding_universe.png",
                  title: "Science Startup Branding",
                  desc: "Full logo suites for biotech, pharma, and tech startups in the science sector."
                }
              ].map((card, idx) => (
                <div key={idx} data-aos="fade-up" data-aos-delay={idx * 150} className="group relative rounded-3xl border border-[#dfb15b]/10 bg-black/85 overflow-hidden flex flex-col justify-between shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all hover:border-[#dfb15b]/30 hover:translate-y-[-4px]">

                  {/* Card Image Wrapper with soft backdrop glow */}
                  <div className="w-full h-56 bg-[#0c0617] flex items-center justify-center relative border-b border-[#dfb15b]/5 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center opacity-5 filter blur-[2px]" style={{ backgroundImage: `url(${card.img})` }}></div>
                    <div className="absolute w-32 h-32 bg-gradient-to-r from-[#dfb15b]/10 to-[#7c3aed]/10 rounded-full blur-2xl filter opacity-30"></div>

                    {/* The Illustration with background-removal filters */}
                    {idx === 1 ? (
                      /* Planet - rendered as a circular sphere with gold glow */
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-44 h-44 rounded-full object-cover relative z-10 shadow-[0_0_30px_rgba(223,177,91,0.25)] transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      /* Line drawings (Card 1 & 3) - inverted to white-on-black lines with transparent backgrounds */
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-full p-3 object-contain relative z-10 filter invert brightness-110 contrast-125 mix-blend-screen transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>

                  {/* Card Info */}
                  <div style={{ padding: "32px 28px" }} className="flex-1 flex flex-col justify-between text-center items-center">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{card.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed mb-6">{card.desc}</p>
                    </div>

                    <div>
                      <a
                        href="https://wa.me/916353117403"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: "#ffffff", color: "#000000", padding: "12px 32px" }}
                        className="inline-flex items-center justify-center font-extrabold text-xs rounded-full transition-all hover:bg-slate-200 shadow-[0_4px_15px_rgba(255,255,255,0.1)] hover:scale-105"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>



        {/* ============ COSMIC STAGNATION WARNINGS ============ */}
        <section
          style={{ width: "100%", paddingTop: "60px", paddingBottom: "80px" }}
          className="bg-black/40 border-b border-[#dfb15b]/10"
        >
          <div className="site-wrap px-8 md:px-12">
            <div data-aos="fade-up" className="text-center" style={{ marginBottom: "60px" }}>
              <span className="text-xs uppercase tracking-widest text-[#dfb15b] font-bold block mb-3">Energetic Blocks</span>
              <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Signs of Planetary Conflict in Branding
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {[
                { emoji: "⚡", title: "Mercury Conflict: Weak Sales", desc: "Communication blocks. Marketing spends lead to zero traction. Ruling planet Mercury is unsupported." },
                { emoji: "🪐", title: "Saturn Block: Growth Delays", desc: "Extreme delays in project handovers, payments, and expansion plans. High friction across channels." },
                { emoji: "🔥", title: "Mars Imbalance: High Turnover", desc: "Aggressive arguments, workplace friction, and team instability. Brand logo colors trigger fire imbalances." },
                { emoji: "🌊", title: "Lunar Drain: Wild Cash Flows", desc: "Highly unstable financial patterns. Extreme cash inflow followed by immediate cash leaks." },
                { emoji: "🌙", title: "Venus Barrier: Poor Retention", desc: "Clients don&apos;t experience positive aesthetic association, leading to zero brand loyalty or repeat transactions." },
                { emoji: "🔮", title: "Solar Block: Lack of Brand Name", desc: "Founder does not get recognition. Brand is easily forgotten and fails to build an industry name." }
              ].map((card, idx) => (
                <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} style={{ padding: "40px 32px" }} className="rounded-2xl border border-[#dfb15b]/5 bg-black/60 transition-all hover:border-[#dfb15b]/25">
                  <span className="text-3xl mb-4 block">{card.emoji}</span>
                  <h3 className="text-lg font-bold text-[#dfb15b] mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ============ COSMIC BRANDING TEAM ============ */}
        <section
          id="about"
          style={{ width: "100%", paddingTop: "60px", paddingBottom: "80px" }}
          className="border-b border-[#dfb15b]/10"
        >
          <div className="site-wrap px-8 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
              {/* Info */}
              <div data-aos="fade-right" className="lg:col-span-7">
                <span className="text-xs uppercase tracking-widest text-[#dfb15b] font-bold block mb-3">Our Credentials</span>
                <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                  A Designer Ahmedabad
                </h2>
                <p className="text-[#dfb15b] font-semibold text-lg mb-6">Zodiac &amp; Planetary Geometry Specialists</p>

                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>We are India&apos;s leading brand optimization studio. We combine 10+ years of creative typography, geometry mapping, and custom Vastu protocols to build identities aligned with universal patterns.</p>
                  <p>By mapping your date of birth, zodiac element, and ruling planets, our diagnostics team designs brand structures that maximize energetic flow and command market trust.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8 w-full">
                  {[
                    { value: "Zodiac Synced", label: "Brand Layouts" },
                    { value: "15,000+", label: "Charts Audited" },
                    { value: "10+ Years", label: "Symmetry Design" },
                    { value: "100%", label: "Vibration Aligned" }
                  ].map((stat, idx) => (
                    <div key={idx} className="rounded-lg bg-black/60 border border-[#dfb15b]/10 p-4 text-center">
                      <div className="font-mono text-xl md:text-2xl font-bold text-[#dfb15b]">{stat.value}</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Astrology Elements */}
              <div data-aos="fade-left" className="lg:col-span-5 space-y-6 w-full">
                <div style={{ padding: "36px 30px" }} className="rounded-2xl bg-black/80 border border-[#dfb15b]/15 shadow-lg">
                  <Globe className="w-8 h-8 text-[#dfb15b] mb-3 animate-spin duration-10000" />
                  <h3 className="text-base font-bold text-white mb-2">Macro Cosmic Alignment</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">Creating clean branding guidelines that follow celestial geometries, supporting corporate expansion and market reputation.</p>
                </div>
                <div style={{ padding: "36px 30px" }} className="rounded-2xl bg-black/80 border border-[#dfb15b]/15 shadow-lg">
                  <Star className="w-8 h-8 text-[#dfb15b] mb-3 fill-current" />
                  <h3 className="text-base font-bold text-white mb-2">Planetary Color Coding</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">Selecting target Pantone ranges tuned to Mercury, Venus, and Jupiter grids to attract premium business alliances.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ============ PROCESS TIMELINE ============ */}
        <section
          id="framework"
          style={{ width: "100%", paddingTop: "60px", paddingBottom: "80px" }}
          className="border-b border-[#dfb15b]/10"
        >
          <div className="site-wrap px-8 md:px-12 flex flex-col items-center">
            <div className="max-w-3xl w-full">
              <div data-aos="fade-up" className="text-center" style={{ marginBottom: "60px" }}>
                <span className="text-xs uppercase tracking-widest text-[#dfb15b] font-bold block mb-3">Workflow</span>
                <h2 className="font-serif text-3xl font-extrabold text-white">6-Phase Brand Alignment Protocol</h2>
              </div>

              <div className="space-y-4">
                {[
                  { step: "1", title: "Brand Identity Discovery", desc: "Detailed consultation mapping your business objectives, industry sector, and client demographics." },
                  { step: "2", title: "Geometric Grid Audit", desc: "Deconstruction of existing assets to check shape weights, visual barriers, and angle alignments." },
                  { step: "3", title: "Color Frequency Mapping", desc: "Formulating primary and accent brand color structures matched to customer decision loops." },
                  { step: "4", title: "Typography Optimization", desc: "Structuring text weights, kerning, and line curves to project stability and premium values." },
                  { step: "5", title: "Diagnostic Remediation Plan", desc: "Drafting the modifications and layout guidelines to upgrade visual identity variables." },
                  { step: "6", title: "Strategic Design Hand-off", desc: "Delivering aligned logo formats, font families, stationery configurations, and execution blueprints." }
                ].map((item, idx) => (
                  <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} style={{ padding: "30px 24px" }} className="rounded-xl border border-[#dfb15b]/10 bg-slate-950/50 flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full border border-[#dfb15b] flex items-center justify-center font-mono font-bold text-[#dfb15b] shrink-0 text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ============ CELESTIAL PRICING PLANS ============ */}
        <section
          id="pricing"
          style={{ width: "100%", paddingTop: "60px", paddingBottom: "80px" }}
          className="bg-black/45 border-b border-[#dfb15b]/10"
        >
          <div className="site-wrap px-8 md:px-12">
            <div data-aos="fade-up" className="text-center" style={{ marginBottom: "60px" }}>
              <span className="text-xs uppercase tracking-widest text-[#dfb15b] font-bold block mb-3">Plans</span>
              <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white">Select Your Alignment Plan</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full">

              {/* Silver Plan */}
              <div data-aos="fade-up" data-aos-delay="0" style={{ padding: "40px 32px" }} className="rounded-2xl border border-[#dfb15b]/15 bg-black/80 flex flex-col justify-between transition-all hover:translate-y-[-4px]">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#dfb15b] mb-1">Silver Plan ✨</h3>
                  <div className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold bg-[#dfb15b]/10 text-[#dfb15b] mb-4">
                    Delivery: 4–7 Days
                  </div>
                  <div className="font-mono text-3xl font-bold text-white mb-6">₹4,999</div>
                  <div className="text-xs text-[#dfb15b] uppercase font-bold tracking-wider mb-3">Deliverables:</div>
                  <ul className="space-y-3 text-xs">
                    <li className="flex items-center gap-2 text-slate-300">✓ Scientific &amp; Astrology Logo Design</li>
                    <li className="flex items-center gap-2 text-slate-300">✓ Telephonic Session With Our Astrologer</li>
                    <li className="flex items-center gap-2 text-slate-500 opacity-60">✗ Business Card Design</li>
                    <li className="flex items-center gap-2 text-slate-500 opacity-60">✗ Invoice Design</li>
                    <li className="flex items-center gap-2 text-slate-500 opacity-60">✗ Letterhead Design</li>
                    <li className="flex items-center gap-2 text-slate-500 opacity-60">✗ Sign Board Design</li>
                    <li className="flex items-center gap-2 text-slate-500 opacity-60">✗ Offline Session (Physical meet)</li>
                  </ul>
                </div>
                <a href="https://wa.me/916353117403" target="_blank" rel="noopener noreferrer" className="mt-8 block text-center py-3 rounded-full border border-[#dfb15b]/30 text-[#dfb15b] font-bold text-sm transition-all hover:bg-[#dfb15b]/10">
                  Select Silver Plan
                </a>
              </div>

              {/* Gold Plan */}
              <div data-aos="fade-up" data-aos-delay="150" style={{ padding: "40px 32px" }} className="relative rounded-2xl border border-[#dfb15b] bg-black/90 flex flex-col justify-between shadow-[0_0_40px_rgba(0,70,173,0.25)] transition-all hover:translate-y-[-4px]">
                <div className="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] px-4 py-1 rounded-full bg-gradient-to-r from-[#dfb15b] to-[#0046ad] text-white text-[9px] font-black uppercase tracking-widest whitespace-nowrap">
                  Most Popular
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white mb-1">Gold Plan ✨</h3>
                  <div className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold bg-[#dfb15b]/15 text-[#dfb15b] mb-4">
                    Delivery: 5–7 Days
                  </div>
                  <div className="font-mono text-3xl font-bold text-[#dfb15b] mb-6">₹9,999</div>
                  <div className="text-xs text-[#dfb15b] uppercase font-bold tracking-wider mb-3">Deliverables:</div>
                  <ul className="space-y-3 text-xs">
                    <li className="flex items-center gap-2 text-white">✓ Scientific &amp; Astrology Logo Design</li>
                    <li className="flex items-center gap-2 text-white">✓ Business Card Design</li>
                    <li className="flex items-center gap-2 text-white">✓ Telephonic or Online Session</li>
                    <li className="flex items-center gap-2 text-slate-500 opacity-60">✗ Invoice Design</li>
                    <li className="flex items-center gap-2 text-slate-500 opacity-60">✗ Letterhead Design</li>
                    <li className="flex items-center gap-2 text-slate-500 opacity-60">✗ Sign Board Design</li>
                    <li className="flex items-center gap-2 text-slate-500 opacity-60">✗ Offline Session (Physical meet)</li>
                  </ul>
                </div>
                <a href="https://wa.me/916353117403" target="_blank" rel="noopener noreferrer" className="mt-8 block text-center py-3 rounded-full bg-gradient-to-r from-[#dfb15b] via-[#0046ad] to-[#e31e24] text-white font-extrabold text-sm transition-all hover:brightness-110">
                  Select Gold Plan
                </a>
              </div>

              {/* Diamond Plan */}
              <div data-aos="fade-up" data-aos-delay="300" style={{ padding: "40px 32px" }} className="rounded-2xl border border-[#dfb15b]/15 bg-black/80 flex flex-col justify-between transition-all hover:translate-y-[-4px]">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#dfb15b] mb-1">Diamond Plan ✨</h3>
                  <div className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold bg-[#dfb15b]/10 text-[#dfb15b] mb-4">
                    Delivery: 7–10 Days
                  </div>
                  <div className="font-mono text-3xl font-bold text-white mb-6">₹19,999</div>
                  <div className="text-xs text-[#dfb15b] uppercase font-bold tracking-wider mb-3">Deliverables:</div>
                  <ul className="space-y-3 text-xs text-slate-400">
                    <li className="flex items-center gap-2 text-slate-300">✓ Scientific &amp; Astrology Logo Design</li>
                    <li className="flex items-center gap-2 text-slate-300">✓ Business Card Design</li>
                    <li className="flex items-center gap-2 text-slate-300">✓ Letterhead Design</li>
                    <li className="flex items-center gap-2 text-slate-300">✓ Envelope Design</li>
                    <li className="flex items-center gap-2 text-slate-300">✓ Telephonic or Online Session</li>
                    <li className="flex items-center gap-2 text-slate-500 opacity-60">✗ Sign Board Design</li>
                    <li className="flex items-center gap-2 text-slate-500 opacity-60">✗ Offline Session (Physical meet)</li>
                  </ul>
                </div>
                <a href="https://wa.me/916353117403" target="_blank" rel="noopener noreferrer" className="mt-8 block text-center py-3 rounded-full border border-[#dfb15b]/30 text-[#dfb15b] font-bold text-sm transition-all hover:bg-[#dfb15b]/10">
                  Select Diamond Plan
                </a>
              </div>

              {/* Platinum Plan */}
              <div data-aos="fade-up" data-aos-delay="450" style={{ padding: "40px 32px" }} className="rounded-2xl border border-[#dfb15b]/15 bg-black/80 flex flex-col justify-between transition-all hover:translate-y-[-4px]">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#dfb15b] mb-1">Platinum Plan ✨</h3>
                  <div className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold bg-[#dfb15b]/10 text-[#dfb15b] mb-4">
                    Delivery: 7–10 Days
                  </div>
                  <div className="font-mono text-3xl font-bold text-white mb-6">₹34,999</div>
                  <div className="text-xs text-[#dfb15b] uppercase font-bold tracking-wider mb-3">Deliverables:</div>
                  <ul className="space-y-3 text-xs text-slate-400">
                    <li className="flex items-center gap-2 text-slate-300">✓ Scientific Logo Design</li>
                    <li className="flex items-center gap-2 text-slate-300">✓ Business Card Design</li>
                    <li className="flex items-center gap-2 text-slate-300">✓ Invoice Design</li>
                    <li className="flex items-center gap-2 text-slate-300">✓ Letterhead Design</li>
                    <li className="flex items-center gap-2 text-slate-300">✓ Sign Board Design</li>
                    <li className="flex items-center gap-2 text-slate-300">✓ Telephonic or Online Session</li>
                    <li className="flex items-center gap-2 text-slate-300">✓ Offline Session (Physical meet)</li>
                  </ul>
                </div>
                <a href="https://wa.me/916353117403" target="_blank" rel="noopener noreferrer" className="mt-8 block text-center py-3 rounded-full border border-[#dfb15b]/30 text-[#dfb15b] font-bold text-sm transition-all hover:bg-[#dfb15b]/10">
                  Select Platinum Plan
                </a>
              </div>

            </div>

            {/* Footnote disclaimer */}
            <div className="mt-12 text-center">
              <p className="inline-block px-6 py-3 rounded-xl border border-[#dfb15b]/20 bg-black/60 text-[#dfb15b] font-semibold text-sm">
                ✨ Note: Logo &amp; Remedies are delivered after 100% payment confirmation.
              </p>
            </div>
          </div>
        </section>


        {/* ============ CELESTIAL REVIEWS ============ */}
        <section
          style={{ width: "100%", paddingTop: "60px", paddingBottom: "80px" }}
          className="border-b border-[#dfb15b]/10"
        >
          <div className="site-wrap">
            <div data-aos="fade-up" className="text-center" style={{ marginBottom: "60px" }}>
              <span className="text-xs uppercase tracking-widest text-[#dfb15b] font-bold block mb-3">Testimonials</span>
              <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white font-black">Founder Experiences</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[
                { author: "Vikram Mehta", role: "MD, Paramount Projects", text: "We optimized our brand logo curves to Mars elements and aligned typography angles. The team synergy and client confidence noticed positive changes within 90 days." },
                { author: "Priya Chawla", role: "Founder, Lotus Organics", text: "The planetary color coding suggestions from A Designer Ahmedabad were outstanding. Our marketing conversions increased and referral retention metrics feel incredibly aligned." },
                { author: "Amit Trivedi", role: "CEO, Starline Logistics", text: "Excellent cosmic diagnostic. Synthesizing sacred shapes with logo numerology eliminated saturn friction and stabilized our cash flows." }
              ].map((t, idx) => (
                <div key={idx} data-aos="fade-up" data-aos-delay={idx * 150} style={{ padding: "40px 32px" }} className="rounded-2xl bg-black/80 border border-[#dfb15b]/15 shadow-xl">
                  <div className="flex gap-1 text-[#dfb15b] mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-300 text-sm italic mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <div className="font-bold text-white text-sm">{t.author}</div>
                    <div className="text-xs text-[#dfb15b] mt-0.5">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ============ HORIZONTAL CONTACT/CONSULTATION FORM ============ */}
        <section
          id="audit-form"
          style={{ width: "100%", paddingTop: "60px", paddingBottom: "80px" }}
          className="border-b border-[#dfb15b]/10 bg-slate-950/20"
        >
          <div className="site-wrap px-8 md:px-12">
            <div data-aos="zoom-in" className="max-w-4xl mx-auto rounded-2xl border border-[#dfb15b]/20 bg-black/85 p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-md">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">

                {/* Text Side */}
                <div className="lg:max-w-md">
                  <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-white leading-tight">
                    Ready to align your brand?
                  </h2>
                  <p className="text-sm text-slate-400 mt-2">
                    Submit your details for a free consultation or to request a custom astrological logo audit.
                  </p>
                </div>

                {/* Form Side - Horizontal Inline Layout */}
                <div className="flex-1 w-full">
                  {submitSuccess ? (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-[#dfb15b]/10 border border-[#dfb15b]/30 text-[#dfb15b]">
                      <Sparkles className="w-5 h-5 shrink-0 animate-pulse" />
                      <div className="text-sm font-semibold">Thank you! Our consultation team will contact you shortly.</div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
                      {/* Name Input */}
                      <div className="flex-1">
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Name"
                          className="w-full h-12 bg-slate-950/60 border border-slate-800 rounded-xl px-4 text-sm text-white focus:border-[#dfb15b] focus:outline-none transition-colors placeholder-slate-500"
                        />
                      </div>

                      {/* Email Input */}
                      <div className="flex-1">
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Email"
                          className="w-full h-12 bg-slate-950/60 border border-slate-800 rounded-xl px-4 text-sm text-white focus:border-[#dfb15b] focus:outline-none transition-colors placeholder-slate-500"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-12 px-8 bg-gradient-to-r from-[#dfb15b] to-[#7c3aed] text-white font-extrabold text-sm rounded-xl shadow-[0_0_15px_rgba(223,177,91,0.2)] transition-all hover:brightness-110 disabled:opacity-50 whitespace-nowrap"
                      >
                        {isSubmitting ? "Submitting..." : "Get Consultation"}
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* ============ FAQS (ACCORDION) ============ */}
        <section
          id="faq"
          style={{ width: "100%", paddingTop: "60px", paddingBottom: "70px" }}
          className="bg-black/45 border-b border-[#dfb15b]/10"
        >
          <div className="site-wrap px-8 md:px-12 flex flex-col items-center">
            <div className="max-w-3xl w-full">
              <div data-aos="fade-up" className="text-center" style={{ marginBottom: "60px" }}>
                <span className="text-xs uppercase tracking-widest text-[#dfb15b] font-bold block mb-3">FAQ</span>
                <h2 className="font-serif text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: "What is an astrological logo audit?", a: "It is a system that reviews your branding properties (colors, geometry, curves) to verify if they match the astrological details of the founder's date of birth and ruling planets." },
                  { q: "Can my existing design be corrected without starting over?", a: "Yes. Most remedies involve simple color adjustments, curve alignment updates, or spacing changes that allow you to keep your established brand assets." },
                  { q: "What parameters are checked in wristwatch audits?", a: "We check the wristwatch dial size, metal parameters, straps, and marker positions to ensure your timing frequency aligns with your zodiac ruler." },
                  { q: "How long does it take to implement changes?", a: "Our team delivers the corrected design guidelines and files within 7 to 10 working days after compiling your astrological elements." },
                  { q: "Is the consultation call confidential?", a: "Absolutely. All astrological charts, founder details, signatures, and business data are kept 100% confidential." }
                ].map((faq, idx) => (
                  <div key={idx} data-aos="fade-up" data-aos-delay={idx * 50} className="rounded-xl border border-[#dfb15b]/15 bg-black/60 overflow-hidden">
                    <button
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-white hover:text-[#dfb15b] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <span className="text-xl text-[#dfb15b] ml-4">{activeFaq === idx ? "−" : "+"}</span>
                    </button>
                    {activeFaq === idx && (
                      <div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ============ FINAL CTA ============ */}
        <section style={{ width: "100%", paddingTop: "60px", paddingBottom: "60px" }} className="text-center">
          <div data-aos="zoom-in" className="site-wrap flex flex-col items-center justify-center">
            <div className="max-w-3xl w-full">
              <span className="text-xs uppercase tracking-widest text-[#dfb15b] font-bold block mb-3">Cosmic Alignment</span>
              <h2 className="font-serif text-3xl md:text-5xl font-black text-white mb-6">
                Align Your Brand to the Universal Wavelengths
              </h2>
              <p className="text-slate-300 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Remove the planetary barriers in your brand visual identity and attract corporate growth.
              </p>
              <a
                href="https://wa.me/916353117403"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-[#dfb15b] via-[#0046ad] to-[#e31e24] text-white font-extrabold text-lg rounded-full shadow-[0_0_30px_rgba(0,70,173,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,70,173,0.5)]"
              >
                Book 1:1 Cosmic Session Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}