"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { animated, easings, useSpring } from "@react-spring/web";
import { useLoaderStore } from "@/showreel/hooks/use-loader";

export interface NavbarProps {
  revealAfterLoader?: boolean;
  cosmic?: boolean;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Scientific Logo", href: "/scientific-logo" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Career", href: "/career" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({
  revealAfterLoader = false,
  cosmic = false,
}: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const revealed = useLoaderStore((s) => s.revealed);
  const shown = revealAfterLoader ? revealed : true;
  const reveal = useSpring({
    opacity: shown ? 1 : 0,
    y: shown ? 0 : -16,
    immediate: !revealAfterLoader,
    config: { duration: 700, easing: easings.easeInOutCubic },
  });

  const logoFilter   = cosmic ? "brightness(0) invert(1)" : "none";
  const capsuleBg    = cosmic ? "rgba(10,8,25,0.82)"      : "#ffffff";
  const capsuleBdr   = cosmic ? "rgba(223,177,91,0.28)"   : "rgba(0,0,0,0.09)";
  const capsuleShadow = cosmic
    ? "0 8px 32px rgba(0,0,0,0.65)"
    : "0 4px 24px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)";
  const innerPillBg  = cosmic ? "rgba(255,255,255,0.07)"  : "#f3f4f6";
  const innerPillBdr = cosmic ? "rgba(223,177,91,0.18)"   : "rgba(0,0,0,0.07)";
  const activeBg     = cosmic ? "#dfb15b"                 : "#111827";
  const activeColor  = cosmic ? "#111827"                 : "#ffffff";
  const linkColor    = cosmic ? "rgba(255,255,255,0.80)"  : "#374151";
  const phoneColor   = cosmic ? "rgba(255,255,255,0.72)"  : "#555555";
  const ctaBg        = cosmic
    ? "linear-gradient(90deg,#dfb15b 0%,#7c3aed 55%,#e31e24 100%)"
    : "#e31e24";

  return (
    <animated.div
      className="adz-navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pointerEvents: "none",
        opacity: reveal.opacity,
        transform: reveal.y.to((y) => `translateY(${y}px)`),
      }}
    >
      {/* ── Floating outer capsule ── */}
      <div
        style={{
          pointerEvents: "auto",
          width: "calc(100% - 32px)",
          maxWidth: "1400px",
          marginTop: "12px",
          background: capsuleBg,
          backdropFilter: cosmic ? "blur(20px) saturate(150%)" : "blur(4px)",
          WebkitBackdropFilter: cosmic ? "blur(20px) saturate(150%)" : "blur(4px)",
          borderRadius: "999px",
          border: `1px solid ${capsuleBdr}`,
          boxShadow: capsuleShadow,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "60px",
          padding: "0 8px 0 16px",
          gap: "10px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", flexShrink: 0, padding: "0 6px" }}>
          <Image
            src="/A designer 2.png"
            alt="A Designer Ahmedabad"
            width={256}
            height={183}
            style={{ height: "34px", width: "auto", objectFit: "contain", filter: logoFilter, transition: "filter 0.3s ease" }}
          />
        </Link>

        {/* Inner nav pill — desktop only */}
        <nav
          className="hidden lg:flex"
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            background: innerPillBg,
            borderRadius: "999px",
            padding: "4px",
            gap: "2px",
            border: `1px solid ${innerPillBdr}`,
          }}
        >
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "5px 13px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? activeColor : linkColor,
                  background: isActive ? activeBg : "transparent",
                  transition: "background 0.18s ease, color 0.18s ease",
                  whiteSpace: "nowrap",
                }}
                className={
                  isActive
                    ? ""
                    : cosmic
                    ? "hover:bg-white/10 hover:!text-white"
                    : "hover:bg-white hover:!text-gray-900"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: phone + CTA — desktop only */}
        <div className="hidden lg:flex items-center" style={{ gap: "12px", flexShrink: 0 }}>
          <a
            href="https://wa.me/916353117403"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, color: phoneColor, whiteSpace: "nowrap", transition: "color 0.2s" }}
            className={cosmic ? "hover:!text-[#dfb15b]" : "hover:!text-[#e31e24]"}
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            +91 63531 17403
          </a>

          <Link
            href="/contact"
            style={{
              padding: "9px 22px",
              background: ctaBg,
              color: "#fff",
              fontWeight: 700,
              fontSize: "13px",
              borderRadius: "999px",
              boxShadow: cosmic ? "0 0 18px rgba(223,177,91,0.35)" : "0 2px 8px rgba(227,30,36,0.30)",
              transition: "opacity 0.2s, transform 0.2s",
              whiteSpace: "nowrap",
            }}
            className={
              cosmic
                ? "hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(223,177,91,0.55)]"
                : "hover:opacity-90 hover:-translate-y-0.5"
            }
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: cosmic ? "#ffffff" : "#333", padding: "8px", background: "none", border: "none", cursor: "pointer", flexShrink: 0 }}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile dropdown — below the capsule ── */}
      <div
        style={{
          pointerEvents: mobileOpen ? "auto" : "none",
          width: "calc(100% - 32px)",
          maxWidth: "1400px",
          marginTop: "6px",
          maxHeight: mobileOpen ? "600px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease, opacity 0.25s ease",
          opacity: mobileOpen ? 1 : 0,
          background: cosmic ? "rgba(10,8,25,0.95)" : "#ffffff",
          backdropFilter: cosmic ? "blur(20px)" : undefined,
          WebkitBackdropFilter: cosmic ? "blur(20px)" : undefined,
          borderRadius: "24px",
          border: `1px solid ${capsuleBdr}`,
          boxShadow: capsuleShadow,
        }}
        className="lg:hidden"
      >
        <div style={{ padding: "12px 12px 16px" }}>
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "11px 16px",
                  fontSize: "14px",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? activeColor : linkColor,
                  backgroundColor: isActive ? activeBg : "transparent",
                  borderRadius: "12px",
                  transition: "background 0.15s, color 0.15s",
                  marginBottom: "2px",
                }}
                className={
                  cosmic
                    ? "hover:bg-[#dfb15b]/10 hover:text-[#dfb15b]"
                    : "hover:bg-gray-100 hover:text-gray-900"
                }
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block",
              marginTop: "10px",
              textAlign: "center",
              padding: "13px",
              background: ctaBg,
              color: "#fff",
              fontWeight: 700,
              borderRadius: "999px",
              fontSize: "14px",
              boxShadow: cosmic ? "0 0 18px rgba(223,177,91,0.35)" : undefined,
            }}
          >
            Get Quote
          </Link>
        </div>
      </div>
    </animated.div>
  );
}
