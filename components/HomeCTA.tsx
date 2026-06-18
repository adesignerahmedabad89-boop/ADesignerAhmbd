"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeCTA() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section 
      ref={ref} 
      style={{ 
        background: "linear-gradient(135deg, #0b3c5d 0%, #062438 100%)", 
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div 
        className="site-wrap flex flex-col md:flex-row items-center gap-10 md:gap-0 px-6 py-12 md:py-16"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          position: "relative",
          zIndex: 2
        }}
      >
        {/* Left Text Content */}
        <div style={{ flex: "1" }} className="text-center md:text-left">
          <h2 
            style={{ 
              color: "#fff", 
              fontSize: "clamp(2rem, 4vw, 3.2rem)", 
              fontWeight: 800, 
              lineHeight: 1.1,
              marginBottom: "16px",
              letterSpacing: "-0.02em"
            }}
          >
            Ready to Build Your Brand?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", lineHeight: 1.6, maxWidth: "550px", marginBottom: "32px", fontWeight: 400 }} className="mx-auto md:mx-0">
            Partner with us to create a powerful, memorable brand identity that resonates with your target audience and drives growth.
          </p>
          
          <Link 
            href="/contact" 
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#f58220",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "15px",
              transition: "all 0.3s ease",
            }}
            className="hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(245,130,32,0.4)] group"
          >
            Get Started Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right Image/Mascot */}
        <div style={{ flex: "0.8", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="relative w-full max-w-[200px] md:max-w-[260px] aspect-square flex justify-center items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Rocket/3D/rocket_3d.png" 
              alt="Brand Launch 3D" 
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.4))",
              }}
              className="hover:scale-110 hover:-translate-y-2 transition-all duration-500 ease-out"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div style={{ position: "absolute", top: "-30%", right: "-5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(245,130,32,0.08) 0%, rgba(255,255,255,0) 70%)", borderRadius: "50%", pointerEvents: "none", zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 70%)", borderRadius: "50%", pointerEvents: "none", zIndex: 1 }} />
    </section>
  );
}
