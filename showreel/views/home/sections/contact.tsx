"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { HomeSectionsContent } from "@/showreel/data/mocks/home-sections";
import { Reveal } from "./reveal";
import { Section } from "./section";
import { SectionHeading } from "./section-heading";

export interface ContactProps {
  content: HomeSectionsContent["contact"];
}

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  company: "",
};

/** Shared field chrome — dark surface, hairline rule, paper ink. Focus is a
 *  state selector, not a transition, so it stays inside the no-CSS-motion rule. */
const FIELD =
  "w-full rounded-xl border border-[#dfb15b]/20 bg-black/45 px-4 py-3 text-sm md:text-base text-white outline-none placeholder:text-white/30 focus:border-[#dfb15b]/60 focus:ring-1 focus:ring-[#dfb15b]/50 transition-all duration-200";

const LABEL =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#dfb15b]/70";

/**
 * Enquiry form. Posts the same payload to the same same-origin `/api/contact`
 * route the rest of the site uses — the route, its nodemailer transport and its
 * honeypot field are untouched, so only the presentation was ported.
 */
export const Contact = ({ content }: ContactProps) => {
  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    // Phone Validation (Strips formatting, requires 10 digits or 10-digit number with standard country code)
    const cleanPhone = form.phone.replace(/[^0-9]/g, "");
    const isValidPhone = (cleanPhone.length === 10) || 
                         (cleanPhone.length === 12 && cleanPhone.startsWith("91")) ||
                         (cleanPhone.length === 11 && cleanPhone.startsWith("0"));
    if (!isValidPhone) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data: { ok?: boolean; error?: string } = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong.");
      }
      setSent(true);
      setForm(EMPTY);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send your message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow={content.eyebrow}
        heading={content.heading}
        headingFaded={content.headingFaded}
        sub={content.sub}
      />

      <Reveal delay={120}>
        <form
          onSubmit={submit}
          className="mx-auto mt-10 flex w-full max-w-xl flex-col gap-5 rounded-2xl border border-[#dfb15b]/15 bg-black/40 p-8 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#dfb15b]/30"
        >
          <h3 className="m-0 text-center text-lg md:text-xl font-bold text-white">
            {content.formTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={LABEL} htmlFor="contact-name">
                Full name
              </label>
              <input
                suppressHydrationWarning
                id="contact-name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
                className={FIELD}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label className={LABEL} htmlFor="contact-email">
                Email
              </label>
              <input
                suppressHydrationWarning
                id="contact-email"
                type="email"
                required
                autoComplete="email"
                placeholder="your@email.com"
                className={FIELD}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label className={LABEL} htmlFor="contact-phone">
                Phone
              </label>
              <input
                suppressHydrationWarning
                id="contact-phone"
                type="tel"
                autoComplete="tel"
                placeholder="+91 00000 00000"
                className={FIELD}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
             <div className="relative">
              <label className={LABEL} htmlFor="contact-service">
                Service
              </label>
              <button
                type="button"
                id="contact-service"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`${FIELD} flex items-center justify-between text-left cursor-pointer`}
              >
                <span>
                  {content.options.find((o) => o.value === form.service)?.label || "Select service"}
                </span>
                <ChevronDown className={`w-4 h-4 text-[#dfb15b]/70 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <>
                  {/* Backdrop click target */}
                  <div className="fixed inset-0 z-40 cursor-default" onClick={() => setDropdownOpen(false)} />
                  
                  {/* Options Menu */}
                  <div className="absolute left-0 right-0 mt-2 max-h-[200px] overflow-y-auto rounded-xl border border-[#dfb15b]/30 bg-black/95 z-50 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md custom-scrollbar">
                    {content.options.map((o) => (
                      <button
                        key={o.value}
                        type="button"
                        onClick={() => {
                          setForm({ ...form, service: o.value });
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm transition-all duration-150 cursor-pointer ${
                          form.service === o.value
                            ? "bg-[#dfb15b] text-black font-semibold"
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div>
            <label className={LABEL} htmlFor="contact-message">
              Your requirement
            </label>
            <textarea
              suppressHydrationWarning
              id="contact-message"
              required
              rows={4}
              placeholder="Tell us about your project"
              className={`${FIELD} resize-y`}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>

          {/* Honeypot — the API silently accepts anything that fills this in. */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />

          <button
            type="submit"
            disabled={sending}
            className="mt-4 cursor-pointer self-center rounded-full bg-gradient-to-r from-[#dfb15b] to-[#7c3aed] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_18px_rgba(223,177,91,0.35)] transition-all duration-300 hover:scale-105 disabled:opacity-60"
          >
            {sending ? content.sending : content.submit}
          </button>

          <p
            role="status"
            aria-live="polite"
            className="m-0 min-h-[24px] text-center text-xs text-[#dfb15b]/70"
          >
            {error || (sent ? content.sent : "")}
          </p>
        </form>
      </Reveal>
    </Section>
  );
};
