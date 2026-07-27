"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { CosmicLayout } from "@/components/cosmic/CosmicLayout";
import { CosmicHero } from "@/components/cosmic/CosmicHero";
import {
  CosmicSection,
  SectionHeading,
  SectionDivider,
  IconOrb,
} from "@/components/cosmic/CosmicUI";
import { IconComet } from "@/components/cosmic/CosmicIcons";

const branches = [
  { label: "Head Office", city: "Ahmedabad", address: "607, Iconic Shyamal, Shyamal Cross Roads, 132 Feet Ring Rd, Shyamal, Ahmedabad, Gujarat 380015", mapUrl: "https://maps.app.goo.gl/QHnofgohkDA459Hj9" },
  { label: "Banglore Branch", city: "Bengaluru", address: "Shanti Apartments, Behind Indian Bike Showroom, Bhaskaran Rd, Bengaluru, Karnataka 560042", mapUrl: "https://maps.google.com/?q=Shanti+Apartments,+Behind+Indian+Bike+Showroom,+Bhaskaran+Rd,++Bengaluru,+Karnataka+560042" },
];

const SocialFacebook = () => <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const SocialLinkedin = () => <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10V9h4v1.5A6 6 0 0 1 16 8zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>;
const SocialInstagram = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>;
const SocialYoutube = () => <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" /></svg>;

const socialLinks = [
  { Icon: SocialFacebook, href: "https://www.facebook.com/Logodesigner0001", label: "Facebook" },
  { Icon: SocialLinkedin, href: "https://www.linkedin.com/company/brandingoindia/", label: "LinkedIn" },
  { Icon: SocialInstagram, href: "https://www.instagram.com/adesigner_ahmedabad/", label: "Instagram" },
  { Icon: SocialYoutube, href: "https://www.youtube.com/@BRANDINGO-Designer", label: "YouTube" },
];

const EMPTY = { name: "", email: "", phone: "", message: "", company: "" };

/**
 * Contact page in the Scientific Astrology theme.
 *
 * The API contract is untouched — same same-origin `POST /api/contact`, same
 * payload, same honeypot field. Only the presentation moved: glass panels over
 * deep space, gold-focus inputs, and cosmic orbs in place of the orange icon
 * chips.
 *
 * The decorative "I'm not a robot" checkbox from the old form was removed: it
 * was never wired to anything and validated nothing, so it only implied a
 * protection that did not exist. The real bot defence is the honeypot the API
 * already checks.
 */
export default function ContactClient() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data: { ok?: boolean; error?: string } = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.");
      setSent(true);
      setForm(EMPTY);
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send your message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <CosmicLayout>
      <CosmicHero
        badge="We reply within 24 hours"
        badgeIcon={<IconComet className="h-4 w-4" />}
        title="Let's Build Your"
        titleAccent="Cosmic Brand"
        sub="Tell us where your brand is headed and we'll chart the route — from first mark to full identity system."
      />

      {/* ── Form ── */}
      <CosmicSection>
        <SectionHeading
          eyebrow="Contact"
          title="Reach Out For"
          titleAccent="Expert Advice"
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Aside */}
          <div data-aos="fade-right" className="flex flex-col items-center gap-8">
            <div className="cosmic-panel w-full max-w-md p-9 text-center">
              <IconOrb className="mx-auto h-20 w-20">
                <Phone className="h-8 w-8" />
              </IconOrb>
              <h3 className="mt-6 font-display text-2xl font-extrabold text-white">
                Contact Us Now!
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Have questions about branding, design, or marketing? We&apos;re here to help.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {["Logo Design", "Stationery", "Packaging", "Menu Design", "Branding"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#dfb15b]/30 bg-black/50 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="text-center">
              <p className="cosmic-eyebrow mb-3">Follow Us</p>
              <div className="flex justify-center gap-3">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#dfb15b] hover:text-[#dfb15b] hover:shadow-[0_0_18px_rgba(223,177,91,0.4)]"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div data-aos="fade-left" className="cosmic-panel p-8 md:p-10">
            <h3 className="font-display text-xl font-extrabold text-white">
              Feel Free to Ask!
            </h3>
            <p className="mt-1 text-[13px] text-slate-500">
              We typically respond within 24 hours.
            </p>

            <form onSubmit={submit} className="mt-7 flex flex-col gap-5">
              <div>
                <label className="cosmic-label" htmlFor="c-name">Name</label>
                <input
                  suppressHydrationWarning
                  id="c-name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="cosmic-input"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="cosmic-label" htmlFor="c-email">Email</label>
                <input
                  suppressHydrationWarning
                  id="c-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="your@email.com"
                  className="cosmic-input"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="cosmic-label" htmlFor="c-phone">Contact number</label>
                <input
                  suppressHydrationWarning
                  id="c-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 00000 00000"
                  className="cosmic-input"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="cosmic-label" htmlFor="c-message">Message</label>
                <textarea
                  suppressHydrationWarning
                  id="c-message"
                  required
                  rows={4}
                  placeholder="Tell us about your project"
                  className="cosmic-input resize-y"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              {/* Honeypot — the API silently accepts anything that fills this in. */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-px w-px opacity-0"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />

              <button
                type="submit"
                disabled={sending}
                className={`cosmic-btn w-full py-4 text-[15px] uppercase tracking-wider ${
                  sent ? "bg-emerald-500 text-white" : "cosmic-btn-primary"
                } ${sending ? "cursor-wait opacity-70" : ""}`}
              >
                {sent ? (
                  "Message Sent!"
                ) : sending ? (
                  "Sending…"
                ) : (
                  <>
                    Send <Send size={16} />
                  </>
                )}
              </button>

              <p
                role="status"
                aria-live="polite"
                className="min-h-[20px] text-center text-[13px] text-[#e31e24]"
              >
                {error}
              </p>
            </form>
          </div>
        </div>
      </CosmicSection>

      <SectionDivider variant="wave" />

      {/* ── Direct lines + branches ── */}
      <CosmicSection tint="soft">
        <SectionHeading
          eyebrow="Coordinates"
          title="Find Us Across"
          titleAccent="Two Cities"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {[
            { Icon: Phone, label: "Phone", value: "+91 63531 17403", href: "tel:+916353117403" },
            { Icon: Mail, label: "Email", value: "sales@adesignerahmedabad.com", href: "mailto:sales@adesignerahmedabad.com" },
          ].map(({ Icon, label, value, href }, i) => (
            <a
              key={label}
              href={href}
              data-aos="fade-up"
              data-aos-delay={i * 110}
              className="cosmic-card cosmic-shimmer flex flex-col items-center gap-3 p-9 text-center"
            >
              <IconOrb>
                <Icon className="h-6 w-6" />
              </IconOrb>
              <span className="cosmic-eyebrow">{label}</span>
              <span className="text-[15px] font-bold text-white">{value}</span>
            </a>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {branches.map((b, i) => (
            <a
              key={b.city}
              href={b.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={i * 110}
              className="cosmic-card cosmic-shimmer flex flex-col items-center gap-3 p-9 text-center"
            >
              <IconOrb>
                <MapPin className="h-6 w-6" />
              </IconOrb>
              <span className="font-display text-base font-extrabold text-white">
                {b.label}
              </span>
              <span className="text-[13px] text-slate-400">{b.address}</span>
            </a>
          ))}
        </div>

        {/* Map — lazy-loaded, and tinted to sit inside the palette rather than
            glaring white against deep space. */}
        <div
          data-aos="fade-up"
          className="cosmic-panel mt-12 overflow-hidden p-1.5"
        >
          <iframe
            title="A Designer Ahmedabad location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0465223067807!2d72.5284149!3d23.0149495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d19d6627024bd35%3A0x1ae76a3e511005b9!2sBRANDINGO!5e0!3m2!1sen!2sin!4v1719310000000!5m2!1sen!2sin"
            width="100%"
            height={420}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="block rounded-xl border-0 opacity-90 [filter:invert(0.92)_hue-rotate(180deg)_saturate(0.7)_contrast(0.9)]"
          />
        </div>
      </CosmicSection>
    </CosmicLayout>
  );
}
