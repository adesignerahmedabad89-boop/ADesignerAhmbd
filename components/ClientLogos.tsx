"use client";

import { motion } from "framer-motion";

const logos = [
  { src: "/logos/idfc.svg", alt: "IDFC FIRST Bank", style: { transform: "scale(0.85)" } },
  { src: "/logos/welspun.svg", alt: "Welspun", style: { transform: "scale(1.15)" } },
  { src: "/logos/adani.svg", alt: "Adani", style: { transform: "scale(1.1)" } },
  { src: "/logos/fleet.svg", alt: "Fleet Management", style: { transform: "scale(1.1)" } },
  { src: "/logos/sagility.webp", alt: "Sagility", style: { transform: "scale(1.5)" } },
  { src: "/logos/uplers.svg", alt: "Uplers", style: { transform: "scale(1.1)" } },
  { src: "/logos/volkswagen.svg", alt: "Volkswagen", style: { transform: "scale(1.3)" } },
  { src: "/logos/hyfun.svg", alt: "Hyfun", style: { transform: "scale(1.2)" } },
  { src: "/logos/corona.svg", alt: "Corona", style: { transform: "scale(1.2)" } },
  { src: "/logos/rasna.svg", alt: "Rasna", style: { transform: "scale(1.2)" } },
  { src: "/logos/two-brothers.svg", alt: "Two Brothers", style: { transform: "scale(1.3)" } },
  { src: "/logos/mygate.svg", alt: "Mygate", style: { transform: "scale(1.2)" } },
  { src: "/logos/sahaj.svg", alt: "Sahaj", style: { transform: "scale(1.2)" } },
];

const track = [...logos, ...logos, ...logos];

export default function ClientLogos() {
  return (
    <section
      style={{
        background: "#f8f8f8",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        padding: "40px 0",
        overflow: "hidden",
      }}
    >
      <p
        style={{
          textAlign: "center",
          color: "#aaa",
          fontSize: "11px",
          letterSpacing: "5px",
          textTransform: "uppercase",
          marginBottom: "28px",
          fontWeight: 600,
        }}
      >
        Trusted By Leading Brands
      </p>

      <div style={{ overflow: "hidden", position: "relative" }}>
        {/* Fade edges */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "100px", background: "linear-gradient(to right, #f8f8f8, transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "100px", background: "linear-gradient(to left, #f8f8f8, transparent)", zIndex: 2, pointerEvents: "none" }} />

        <motion.div
          style={{ display: "flex", gap: "80px", width: "max-content", alignItems: "center", paddingRight: "80px" }}
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                height: "50px",
                width: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.3s ease",
              }}
              className="hover:scale-105 cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxHeight: "42px",
                  maxWidth: "130px",
                  objectFit: "contain",
                  transition: "all 0.3s ease",
                  ...logo.style,
                }}
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
