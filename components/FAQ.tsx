"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How long does a typical branding project take?",
    a: "It depends on scope. A logo concept is usually ready in 3–7 working days, while a full brand identity or website project can take 2–4 weeks. We'll share a clear timeline before we begin.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "Just a short brief about your business, your goals, any references you like, and your preferred colors or style. If you have existing assets (old logo, brand guidelines), share those too — the more context, the better.",
  },
  {
    q: "How many revisions are included?",
    a: "Every package includes a set number of revisions on the chosen concept (3–5 depending on the plan). We work closely with you until the design feels right.",
  },
  {
    q: "Will I get the source files?",
    a: "Yes. You receive editable source files — CDR, PDF, PNG, JPG and AI — so you fully own your brand assets and can use them anywhere.",
  },
  {
    q: "What are your payment terms?",
    a: "Projects begin with 100% advance for our standard packages. For larger custom engagements we offer milestone-based billing — just ask.",
  },
  {
    q: "Do you offer custom packages?",
    a: "Absolutely. Beyond logo design we handle digital marketing, web development, SEO, photography and more. Tell us what you need and we'll tailor a package for you.",
  },
];

export default function FAQ() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" ref={ref} style={{ padding: "100px 0", background: "#f9fafb", position: "relative", overflow: "hidden", scrollMarginTop: "90px" }}>
      <div className="site-wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "14px" }}>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
            <span style={{ color: "#f58220", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>FAQ</span>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: "14px" }}>
            Frequently Asked <span style={{ color: "#f58220" }}>Questions</span>
          </h2>
          <p style={{ color: "#777", maxWidth: "520px", margin: "0 auto", lineHeight: 1.75 }}>
            Everything you need to know before starting your brand&apos;s journey with us.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ maxWidth: "780px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "14px" }}>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                style={{
                  border: isOpen ? "1px solid rgba(245,130,32,0.45)" : "1px solid rgba(0,0,0,0.08)",
                  background: "#fff",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s, border-color 0.25s ease`,
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                >
                  <span style={{ fontSize: "15px", fontWeight: 700, color: isOpen ? "#f58220" : "#1a1a1a", lineHeight: 1.4 }}>{item.q}</span>
                  <Plus
                    size={20}
                    style={{ color: isOpen ? "#f58220" : "#999", flexShrink: 0, transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s ease, color 0.2s ease" }}
                  />
                </button>
                <div style={{ maxHeight: isOpen ? "260px" : "0", overflow: "hidden", transition: "max-height 0.35s ease" }}>
                  <p style={{ padding: "0 24px 22px", color: "#666", fontSize: "14px", lineHeight: 1.75 }}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
