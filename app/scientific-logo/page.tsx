"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, X, ShieldAlert, Sparkles, Trophy, Star, ArrowRight, Eye, Sun, Moon, Compass, Globe } from "lucide-react";

export default function ScientificLogoPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

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

      // Color scheme (mystical gold, deep indigo, neon violet, soft white)
      const colors = ["#dfb15b", "#7c3aed", "#ec4899", "#fcd34d", "#ffffff", "#38bdf8"];
      const color = colors[Math.floor(Math.random() * colors.length)];

      stars.push({
        r,
        angle,
        size: Math.random() * 1.8 + 0.3,
        color,
        speed: (Math.random() * 0.002 + 0.001) * (1 / (1 + r * 0.01)), // outer stars rotate slower
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Deep space gradient backdrop
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

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

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
      angleOffset += 0.0005; // Base rotation rate

      stars.forEach((star) => {
        const currentAngle = star.angle + angleOffset;
        
        // Calculate coordinates relative to center
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
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#dfb15b]/30 bg-black/60 shadow-[0_0_15px_rgba(223,177,91,0.15)] text-xs font-semibold text-[#dfb15b] mb-8 animate-pulse">
              <Moon className="w-4 h-4 text-[#dfb15b] fill-current" />
              Cosmic Alignment &amp; Astrological Logo Optimization
            </div>

            {/* Astrology Headline */}
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white mb-6 tracking-tight">
              Align Your Brand With the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfb15b] via-[#fcd34d] to-[#7c3aed] filter drop-shadow-[0_0_20px_rgba(223,177,91,0.2)]">
                Frequencies of the Universe
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base md:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
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
                <div key={idx} style={{ padding: "40px 32px" }} className="relative rounded-2xl bg-black/75 border border-[#dfb15b]/20 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:border-[#dfb15b]/50 hover:shadow-[0_0_20px_rgba(223,177,91,0.08)] transition-all">
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
            <div className="mb-10">
              <a
                href="https://wa.me/919979992804"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-[#dfb15b] to-[#7c3aed] text-white font-extrabold text-lg rounded-full shadow-[0_0_30px_rgba(223,177,91,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(124,58,237,0.4)]"
              >
                Schedule Your 1:1 Cosmic Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>

            {/* Astrological Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
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
          style={{ width: "100%", paddingTop: "50px", paddingBottom: "80px" }}
          className="px-6 bg-black/45 border-b border-[#dfb15b]/10"
        >
          <div className="site-wrap flex justify-center">
            <div className="max-w-4xl w-full rounded-2xl border border-red-500/20 bg-[#0f0714] p-8 md:p-10 text-center backdrop-blur-md">
              <ShieldAlert className="mx-auto w-12 h-12 text-[#dfb15b] mb-4" />
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-medium font-serif">
                &ldquo;When a logo violates Vastu rules or contains colors that conflict with the founder&apos;s birth chart, it creates cosmic static — leading to unstable sales, friction, and expansion resistance.&rdquo;
              </p>
            </div>
          </div>
        </section>


        {/* ============ ASTRO-METRICS AUDIT SCOPE ============ */}
        <section
          id="discover"
          style={{ width: "100%", paddingTop: "60px", paddingBottom: "80px" }}
          className="border-b border-[#dfb15b]/10"
        >
          <div className="site-wrap px-8 md:px-12">
            <div className="text-center" style={{ marginBottom: "60px" }}>
              <span className="text-xs uppercase tracking-widest text-[#dfb15b] font-bold block mb-3">Astrological Core</span>
              <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Astrological Auditing Framework
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {[
                { icon: "🪐", title: "Zodiac Element Balance", desc: "Verifying whether your brand elements align with Fire, Earth, Air, or Water representations according to your birth chart." },
                { icon: "✨", title: "Planetary Color Tuning", desc: "Choosing primary brand hues that match your ruling planets (e.g. Sun, Jupiter, Mercury) to remove growth barriers." },
                { icon: "📐", title: "Vastu Shape Geometry", desc: "Auditing logo shapes to ensure visual lines facilitate positive energetic directions and avoid blocked patterns." },
                { icon: "🔮", title: "Vibrational Numerology", desc: "Syncing logo stroke counts, typography weights, and company character names to optimal wealth numbers." },
                { icon: "✍️", title: "Signature Graphology", desc: "Reviewing the founder&apos;s signature to ensure the start, angle, and end strokes reflect professional scaling." },
                { icon: "🕰️", title: "Wristwatch Energy Alignment", desc: "Analyzing dial parameters, straps, and dials to synchronize decision-making with cosmological time." }
              ].map((card, idx) => (
                <div key={idx} style={{ padding: "40px 32px" }} className="group relative rounded-2xl border border-[#dfb15b]/10 bg-black/80 transition-all hover:border-[#dfb15b]/40 hover:translate-y-[-4px] hover:shadow-[0_0_20px_rgba(223,177,91,0.05)]">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-[#dfb15b]/20 flex items-center justify-center text-2xl mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
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
            <div className="text-center" style={{ marginBottom: "60px" }}>
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
                <div key={idx} style={{ padding: "40px 32px" }} className="rounded-2xl border border-[#dfb15b]/5 bg-black/60 transition-all hover:border-[#dfb15b]/25">
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
              <div className="lg:col-span-7">
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
              <div className="lg:col-span-5 space-y-6 w-full">
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
              <div className="text-center" style={{ marginBottom: "60px" }}>
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
                  <div key={idx} style={{ padding: "30px 24px" }} className="rounded-xl border border-[#dfb15b]/10 bg-slate-950/50 flex gap-4 items-start">
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
            <div className="text-center" style={{ marginBottom: "60px" }}>
              <span className="text-xs uppercase tracking-widest text-[#dfb15b] font-bold block mb-3">Plans</span>
              <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white">Select Your Alignment Plan</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full">
              
              {/* Starter Plan */}
              <div style={{ padding: "40px 32px" }} className="rounded-2xl border border-[#dfb15b]/15 bg-black/80 flex flex-col justify-between transition-all hover:translate-y-[-4px]">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#dfb15b] mb-1">Starter / Lunar Plan</h3>
                  <div className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold bg-[#dfb15b]/10 text-[#dfb15b] mb-4">
                    Diagnostics &amp; Audit
                  </div>
                  <div className="font-mono text-3xl font-bold text-white mb-1">₹45,000</div>
                  <div className="text-xs text-slate-500 mb-6">+ 18% GST</div>
                  <div className="text-xs text-[#dfb15b] uppercase font-bold tracking-wider mb-3">Details:</div>
                  <ul className="space-y-3 text-xs text-slate-400">
                    <li className="flex items-center gap-2">✓ Existing Logo Vibration Audit</li>
                    <li className="flex items-center gap-2">✓ Planetary Element Check</li>
                    <li className="flex items-center gap-2">✓ Color Remediation Sheet</li>
                  </ul>
                  <p className="text-[10px] text-slate-500 italic mt-6 leading-relaxed">
                    *Focused on diagnosing existing layout errors. Custom logo design files are not included.
                  </p>
                </div>
                <a href="https://wa.me/919979992804" target="_blank" rel="noopener noreferrer" className="mt-8 block text-center py-3 rounded-full border border-[#dfb15b]/30 text-[#dfb15b] font-bold text-sm transition-all hover:bg-[#dfb15b]/10">
                  Select Lunar Plan
                </a>
              </div>

              {/* Silver Plan */}
              <div style={{ padding: "40px 32px" }} className="relative rounded-2xl border border-[#dfb15b] bg-black/90 flex flex-col justify-between shadow-[0_0_40px_rgba(223,177,91,0.2)] transition-all hover:translate-y-[-4px]">
                <div className="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] px-4 py-1 rounded-full bg-gradient-to-r from-[#dfb15b] to-[#7c3aed] text-white text-[9px] font-black uppercase tracking-widest whitespace-nowrap">
                  Most Popular
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white mb-1">Silver / Solar Plan</h3>
                  <div className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold bg-[#dfb15b]/15 text-[#dfb15b] mb-4">
                    Turnover: ₹10 Cr - ₹100 Cr
                  </div>
                  <div className="font-mono text-3xl font-bold text-[#dfb15b] mb-1">₹90,000</div>
                  <div className="text-xs text-slate-500 mb-6">+ 18% GST</div>
                  <div className="text-xs text-[#dfb15b] uppercase font-bold tracking-wider mb-3">Details:</div>
                  <ul className="space-y-3 text-xs text-slate-300">
                    <li className="flex items-center gap-2">✓ Zodiac Aligned Logo Design</li>
                    <li className="flex items-center gap-2">✓ Signature Graphology Remedy</li>
                    <li className="flex items-center gap-2">✓ Wristwatch Alignment Advice</li>
                    <li className="flex items-center gap-2">✓ Astrological Visiting Card Layout</li>
                    <li className="flex items-center gap-2">✓ Letterhead &amp; Invoice Standards</li>
                    <li className="flex items-center gap-2">✓ Dedicated Alignment Manager</li>
                    <li className="flex items-center gap-2">✓ 90 Days Dynamic Support</li>
                  </ul>
                </div>
                <a href="https://wa.me/919979992804" target="_blank" rel="noopener noreferrer" className="mt-8 block text-center py-3 rounded-full bg-gradient-to-r from-[#dfb15b] to-[#7c3aed] text-white font-extrabold text-sm transition-all hover:brightness-110">
                  Select Solar Plan
                </a>
              </div>

              {/* Gold Plan */}
              <div style={{ padding: "40px 32px" }} className="rounded-2xl border border-[#dfb15b]/15 bg-black/80 flex flex-col justify-between transition-all hover:translate-y-[-4px]">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#dfb15b] mb-1">Gold / Cosmic Plan</h3>
                  <div className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold bg-[#dfb15b]/10 text-[#dfb15b] mb-4">
                    Turnover: ₹100 Cr+
                  </div>
                  <div className="font-mono text-3xl font-bold text-white mb-1">₹1,80,000</div>
                  <div className="text-xs text-slate-500 mb-6">+ 18% GST</div>
                  <div className="text-xs text-[#dfb15b] uppercase font-bold tracking-wider mb-3">Details:</div>
                  <ul className="space-y-3 text-xs text-slate-400">
                    <li className="flex items-center gap-2 text-white">✓ Everything in Solar Plan +</li>
                    <li className="flex items-center gap-2">✓ 1:1 Live Alignment Session</li>
                    <li className="flex items-center gap-2">✓ Personal Brand Astrology Audit</li>
                    <li className="flex items-center gap-2">✓ Numerological Name Tuning</li>
                    <li className="flex items-center gap-2">✓ Mobile Number Numerology</li>
                    <li className="flex items-center gap-2">✓ Market Sector Strategy Tuning</li>
                  </ul>
                </div>
                <a href="https://wa.me/919979992804" target="_blank" rel="noopener noreferrer" className="mt-8 block text-center py-3 rounded-full border border-[#dfb15b]/30 text-[#dfb15b] font-bold text-sm transition-all hover:bg-[#dfb15b]/10">
                  Select Cosmic Plan
                </a>
              </div>

              {/* Platinum Plan */}
              <div style={{ padding: "40px 32px" }} className="rounded-2xl border border-[#dfb15b]/15 bg-black/80 flex flex-col justify-between transition-all hover:translate-y-[-4px]">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#dfb15b] mb-1">Platinum / Galactic Plan</h3>
                  <div className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold bg-[#dfb15b]/10 text-[#dfb15b] mb-4">
                    IPO &amp; Enterprise Brands
                  </div>
                  <div className="font-mono text-3xl font-bold text-white mb-1">₹4,50,000</div>
                  <div className="text-xs text-slate-500 mb-6">+ 18% GST</div>
                  <div className="text-xs text-[#dfb15b] uppercase font-bold tracking-wider mb-3">Details:</div>
                  <ul className="space-y-3 text-xs text-slate-400">
                    <li className="flex items-center gap-2 text-white">✓ Everything in Cosmic Plan +</li>
                    <li className="flex items-center gap-2">✓ In-Person Alignment Sessions</li>
                    <li className="flex items-center gap-2">✓ Entire Corporate Audit Profile</li>
                    <li className="flex items-center gap-2">✓ Executive Team Compatibility</li>
                  </ul>
                </div>
                <a href="https://wa.me/919979992804" target="_blank" rel="noopener noreferrer" className="mt-8 block text-center py-3 rounded-full border border-[#dfb15b]/30 text-[#dfb15b] font-bold text-sm transition-all hover:bg-[#dfb15b]/10">
                  Select Galactic Plan
                </a>
              </div>

            </div>
          </div>
        </section>


        {/* ============ CELESTIAL REVIEWS ============ */}
        <section
          style={{ width: "100%", paddingTop: "60px", paddingBottom: "80px" }}
          className="border-b border-[#dfb15b]/10"
        >
          <div className="site-wrap">
            <div className="text-center" style={{ marginBottom: "60px" }}>
              <span className="text-xs uppercase tracking-widest text-[#dfb15b] font-bold block mb-3">Testimonials</span>
              <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white font-black">Founder Experiences</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[
                { author: "Vikram Mehta", role: "MD, Paramount Projects", text: "We optimized our brand logo curves to Mars elements and aligned typography angles. The team synergy and client confidence noticed positive changes within 90 days." },
                { author: "Priya Chawla", role: "Founder, Lotus Organics", text: "The planetary color coding suggestions from A Designer Ahmedabad were outstanding. Our marketing conversions increased and referral retention metrics feel incredibly aligned." },
                { author: "Amit Trivedi", role: "CEO, Starline Logistics", text: "Excellent cosmic diagnostic. Synthesizing sacred shapes with logo numerology eliminated saturn friction and stabilized our cash flows." }
              ].map((t, idx) => (
                <div key={idx} style={{ padding: "40px 32px" }} className="rounded-2xl bg-black/80 border border-[#dfb15b]/15 shadow-xl">
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


        {/* ============ FAQS (ACCORDION) ============ */}
        <section
          id="faq"
          style={{ width: "100%", paddingTop: "60px", paddingBottom: "70px" }}
          className="bg-black/45 border-b border-[#dfb15b]/10"
        >
          <div className="site-wrap px-8 md:px-12 flex flex-col items-center">
            <div className="max-w-3xl w-full">
              <div className="text-center" style={{ marginBottom: "60px" }}>
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
                  <div key={idx} className="rounded-xl border border-[#dfb15b]/15 bg-black/60 overflow-hidden">
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
          <div className="site-wrap flex flex-col items-center justify-center">
            <div className="max-w-3xl w-full">
              <span className="text-xs uppercase tracking-widest text-[#dfb15b] font-bold block mb-3">Cosmic Alignment</span>
              <h2 className="font-serif text-3xl md:text-5xl font-black text-white mb-6">
                Align Your Brand to the Universal Wavelengths
              </h2>
              <p className="text-slate-300 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Remove the planetary barriers in your brand visual identity and attract corporate growth.
              </p>
              <a
                href="https://wa.me/919979992804"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-[#dfb15b] to-[#7c3aed] text-white font-extrabold text-lg rounded-full shadow-[0_0_30px_rgba(223,177,91,0.3)] transition-all hover:scale-105"
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