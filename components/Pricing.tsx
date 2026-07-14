"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const logoPlans = ["Basic Bliss Package", "Premium Prestige Package", "Ultimate Elegance Package"];

const logoRows = [
  { label: "INR", values: ["₹1,999", "₹4,999", "₹9,999"], price: true },
  { label: "Logo Design Samples/Concept", values: ["5", "5", "5"], highlight: true },
  { label: "Design Revisions/Changes Option in the Sample", values: ["Unlimited", "Unlimited", "Unlimited"] },
  { label: "Designers Working on Your Project", values: ["1", "2", "2"], highlight: true },
  { label: "Mode of Communication", values: ["Whatsapp / Messenger", "Whatsapp / Messenger", "Whatsapp / Messenger"] },
  { label: "Logo Design Duration", values: ["3-4 Working Days", "5-7 Working Days", "5-7 Working Days"] },
  { label: "Logo Design Sample Format", values: ["JPG", "JPG", "JPG"] },
  { label: "Logo Source File", values: ["CDR, PDF, PNG, JPG, AI", "CDR, PDF, PNG, JPG, AI", "CDR, PDF, PNG, JPG, AI"], highlight: true },
  { label: "Free Logo Animation Video", values: ["2", "3", "5"] },
  { label: "Stationery Design (Business Card, Letterhead & Envelope) (2 Sample Of Each)", values: ["No", "Yes", "Yes"] },
  { label: "Festival Post", values: ["No", "20 QTY", "50 QTY"] },
  { label: "Customize Business Promotional Post", values: ["No", "5 QTY", "15 QTY"] },
  { label: "Payment Options - 100% Advance", values: ["Yes", "Yes", "Yes"] },
];

const vibrationPlans = [
  "Silver Plan ✨",
  "Gold Plan ✨",
  "Diamond Plan ✨",
  "Platinum Plan ✨",
];

const vibrationRows = [
  { label: "Program Investment", values: ["₹4,999", "₹9,999", "₹19,999", "₹34,999"], price: true },
  { label: "Delivery Duration", values: ["4–7 Days", "5–7 Days", "7–10 Days", "7–10 Days"], highlight: true },
  { label: "Scientific & Astrology Logo Design", values: ["Yes", "Yes", "Yes", "Scientific Logo Only"] },
  { label: "Business Card Design", values: ["No", "Yes", "Yes", "Yes"] },
  { label: "Invoice Design", values: ["No", "No", "No", "Yes"] },
  { label: "Letterhead Design", values: ["No", "No", "Yes", "Yes"] },
  { label: "Envelope Design", values: ["No", "No", "Yes", "No"] },
  { label: "Sign Board Design", values: ["No", "No", "No", "Yes"] },
  { label: "Session with Astrologer (Telephonic/Online)", values: ["Telephonic Only", "Telephonic or Online", "Telephonic or Online", "Telephonic or Online"] },
  { label: "Offline Session (Physical meet)", values: ["No", "No", "No", "Yes"] },
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"logo" | "vibration">("logo");
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  const currentPlans = activeTab === "logo" ? logoPlans : vibrationPlans;
  const currentRows = activeTab === "logo" ? logoRows : vibrationRows;

  const isPopular = (tab: "logo" | "vibration", idx: number) => {
    return idx === 1; // Both tabs have their second plan (index 1) as the popular option
  };

  const cell: React.CSSProperties = {
    padding: "13px 18px",
    borderBottom: "1px solid #eee",
    fontSize: "13px",
    color: "#555",
    textAlign: "center",
    verticalAlign: "middle",
  };
  const labelCell: React.CSSProperties = {
    ...cell,
    textAlign: "left",
    fontWeight: 700,
    color: "#333",
    fontSize: "13px",
  };

  return (
    <section
      id="pricing"
      ref={ref}
      style={{
        padding: "100px 0",
        background: "#ffffff",
        position: "relative",
        overflow: "hidden",
        scrollMarginTop: "90px",
      }}
    >
      <div className="site-wrap">
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "14px" }}>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
            <span style={{ color: "#f58220", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>
              Pricing Packages
            </span>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: "14px" }}>
            We <span style={{ color: "#f58220" }}>Help You</span>
          </h2>
          <p style={{ color: "#777", maxWidth: "550px", margin: "0 auto", lineHeight: 1.75 }}>
            {activeTab === "logo"
              ? "Transparent logo design packages - pick the one that fits your brand's journey."
              : "Align your corporate logo, remedies, and design vibes with scientific astrology."}
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "48px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}
        >
          <div style={{ display: "inline-flex", background: "#f1f5f9", padding: "4px", borderRadius: "999px", border: "1px solid #e2e8f0" }}>
            <button
              onClick={() => setActiveTab("logo")}
              style={{
                padding: "10px 24px",
                fontSize: "13.5px",
                fontWeight: 700,
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                background: activeTab === "logo" ? "#0b3c5d" : "transparent",
                color: activeTab === "logo" ? "#fff" : "#64748b",
                transition: "all 0.2s ease",
              }}
            >
              Logo Design Packages
            </button>
            <button
              onClick={() => setActiveTab("vibration")}
              style={{
                padding: "10px 24px",
                fontSize: "13.5px",
                fontWeight: 700,
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                background: activeTab === "vibration" ? "#0b3c5d" : "transparent",
                color: activeTab === "vibration" ? "#fff" : "#64748b",
                transition: "all 0.2s ease",
              }}
            >
              Vibration Alignment Program ✨
            </button>
          </div>
        </div>

        {/* Table View (Desktop) */}
        <div
          className="pricing-table-wrap"
          style={{
            overflowX: "auto",
            border: "1px solid #eee",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "850px" }}>
            <thead>
              <tr>
                <th style={{ padding: "26px 18px", background: "#0b3c5d", color: "#fff", fontSize: "15px", fontWeight: 800, textAlign: "left", width: "28%" }}>
                  Features
                </th>
                {currentPlans.map((p, i) => (
                  <th
                    key={p}
                    style={{
                      padding: "26px 18px",
                      background: "#0b3c5d",
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: 800,
                      textAlign: "center",
                      lineHeight: 1.3,
                      borderLeft: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {p}
                    {isPopular(activeTab, i) && (
                      <span style={{ display: "block", marginTop: "6px", fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: "#f58220" }}>
                        ★ MOST POPULAR
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row, ri) => (
                <tr
                  key={row.label}
                  style={{
                    background: ri % 2 === 0 ? "#fafafa" : "#fff",
                  }}
                >
                  <td style={labelCell}>{row.label}</td>
                  {row.values.map((v, ci) => (
                    <td
                      key={ci}
                      style={{
                        ...cell,
                        ...(row.price ? { fontSize: "1.4rem", fontWeight: 800, color: "#1a1a1a" } : {}),
                        ...(v === "Yes" ? { color: "#16a34a", fontWeight: 700 } : {}),
                        ...(v === "No" ? { color: "#bbb", fontWeight: 600 } : {}),
                        ...(row.highlight ? { color: "#f58220", fontWeight: 800 } : {}),
                        background: isPopular(activeTab, ci) ? "rgba(11,60,93,0.03)" : "transparent",
                      }}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td style={{ ...cell, borderBottom: "none" }} />
                {currentPlans.map((p, i) => (
                  <td
                    key={p}
                    style={{
                      padding: "20px 18px",
                      borderBottom: "none",
                      textAlign: "center",
                      background: isPopular(activeTab, i) ? "rgba(11,60,93,0.03)" : "transparent",
                    }}
                  >
                    <Link
                      href="/contact"
                      style={{
                        display: "block",
                        padding: "14px 10px",
                        background: "#f58220",
                        color: "#fff",
                        fontWeight: 800,
                        fontSize: "13px",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        textAlign: "center",
                        transition: "background 0.2s",
                      }}
                      className="hover:bg-[#ff933c]"
                    >
                      Order Now
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cards View (Mobile) */}
        <div
          className="pricing-cards"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          {currentPlans.map((plan, ci) => {
            const popular = isPopular(activeTab, ci);
            return (
              <div
                key={plan}
                style={{
                  border: popular ? "2px solid #0b3c5d" : "1px solid #eee",
                  overflow: "hidden",
                  background: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)",
                }}
              >
                <div style={{ padding: "22px 18px", background: "#0b3c5d", color: "#fff", textAlign: "center" }}>
                  <div style={{ fontSize: "17px", fontWeight: 800, lineHeight: 1.3 }}>{plan}</div>
                  {popular && (
                    <span style={{ display: "block", marginTop: "6px", fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: "#f58220" }}>
                      ★ MOST POPULAR
                    </span>
                  )}
                </div>
                <div>
                  {currentRows.map((row, ri) => {
                    const v = row.values[ci];
                    return (
                      <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", padding: "12px 16px", borderBottom: "1px solid #eee", background: ri % 2 === 0 ? "#fafafa" : "#fff" }}>
                        <span style={{ fontSize: "12.5px", fontWeight: 700, color: "#333", textAlign: "left" }}>{row.label}</span>
                        <span
                          style={{
                            fontSize: row.price ? "1.4rem" : "13px",
                            fontWeight: row.price ? 800 : (row.highlight ? 800 : 600),
                            color: row.price ? "#1a1a1a" : v === "Yes" ? "#16a34a" : v === "No" ? "#bbb" : (row.highlight ? "#f58220" : "#555"),
                            textAlign: "right",
                            whiteSpace: "normal",
                          }}
                        >
                          {v}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div style={{ padding: "18px 16px" }}>
                  <Link
                    href="/contact"
                    style={{
                      display: "block",
                      padding: "14px 10px",
                      background: "#f58220",
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "13px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      textAlign: "center",
                      transition: "background 0.2s",
                    }}
                    className="hover:bg-[#ff933c]"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer / Notes */}
        {activeTab === "vibration" && (
          <div
            style={{
              marginTop: "32px",
              padding: "16px 24px",
              background: "#fffbeb",
              border: "1px dashed #f59e0b",
              borderRadius: "8px",
              color: "#b45309",
              fontSize: "14px",
              fontWeight: 600,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
            }}
          >
            <span>✨</span>
            <span><strong>Note:</strong> Logo &amp; Remedies are delivered after 100% payment confirmation.</span>
          </div>
        )}
      </div>
    </section>
  );
}
