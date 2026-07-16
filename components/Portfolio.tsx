"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import AOS from "aos";

import { projects } from "@/lib/projects-data";

const categories = ["All", "Real Estate", "FMCG", "Corporate", "Hospitality"];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  useEffect(() => {
    AOS.refresh();
  }, [active]);

  return (
    <section id="projects" style={{ padding: "100px 0", background: "#f9fafb", overflow: "hidden" }}>
      <div className="site-wrap">
        {/* Header */}
        <div data-aos="fade-up" style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "14px" }}>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
            <span style={{ color: "#f58220", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Our Work</span>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: "14px" }}>
            A Look at Our <span style={{ color: "#f58220" }}>Projects</span>
          </h2>
          <p style={{ color: "#777", maxWidth: "480px", margin: "0 auto", lineHeight: 1.75 }}>
            Explore our portfolio of successful branding projects across industries.
          </p>
        </div>

        {/* Filter tabs */}
        <div data-aos="fade-up" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginBottom: "48px" }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{ padding: "8px 20px", borderRadius: "0", fontSize: "13px", fontWeight: 600, border: active === cat ? "none" : "1.5px solid #e5e7eb", background: active === cat ? "#f58220" : "#fff", color: active === cat ? "#fff" : "#555", cursor: "pointer", transition: "all 0.2s" }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gap: "20px" }} className="sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Link key={project.id} href={`/projects/${project.slug}`} data-aos="fade-up" data-aos-delay={(i % 6) * 100} style={{ textDecoration: "none", color: "inherit", display: "block", borderRadius: "0", overflow: "hidden", background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }} className="card-hover group">
              <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.image} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} className="group-hover:scale-110" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent 60%)" }} />
                <div style={{ position: "absolute", top: "14px", left: "14px", padding: "4px 12px", background: "#f58220", color: "#fff", fontSize: "11px", fontWeight: 700, borderRadius: "999px" }}>{project.category}</div>
                <div style={{ position: "absolute", top: "14px", right: "14px", width: "34px", height: "34px", borderRadius: "50%", background: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.2s" }} className="group-hover:opacity-100">
                  <ExternalLink size={14} style={{ color: "#333" }} />
                </div>
              </div>
              <div style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px", transition: "color 0.2s" }} className="group-hover:text-[#f58220]">{project.title}</h3>
                <p style={{ color: "#888", fontSize: "13.5px", lineHeight: 1.65, marginBottom: "14px" }}>{project.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ padding: "4px 10px", fontSize: "11px", background: "#f3f4f6", color: "#666", borderRadius: "999px", fontWeight: 500 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div data-aos="zoom-in" style={{ textAlign: "center", marginTop: "48px" }}>
          <Link href="/projects" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 32px", border: "2px solid #f58220", fontWeight: 700, borderRadius: "999px", fontSize: "14px", background: "transparent", cursor: "pointer", transition: "all 0.2s" }} className="text-[#f58220] hover:bg-[#f58220] hover:text-white group">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .card-hover {
          position: relative;
          overflow: hidden;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s;
        }
        .card-hover::after {
          content: "";
          position: absolute;
          top: 0;
          left: -150%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.35) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
          transition: left 0.85s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 15;
          pointer-events: none;
        }
        .card-hover:hover::after {
          left: 150%;
        }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.01) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08) !important;
        }
      `}} />
    </section>
  );
}
