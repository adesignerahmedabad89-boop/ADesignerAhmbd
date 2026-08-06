"use client";

import { useState } from "react";
import { User, MapPin, Calendar, Sparkles, ArrowRight, ArrowLeft, Send } from "lucide-react";
import { CosmicLayout } from "@/components/cosmic/CosmicLayout";
import { CosmicHero } from "@/components/cosmic/CosmicHero";
import { CosmicSection } from "@/components/cosmic/CosmicUI";

const INITIAL_FORM = {
  name: "",
  email: "",
  whatsapp: "",
  gender: "",
  profession: "",
  jobType: "",
  currentLocation: "",
  dob: "",
  tob: "",
  pob: "",
  concern: "",
  query: "",
  company: "", // Honeypot
};

export default function KundliDetailsForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(INITIAL_FORM);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setError("");

    // Validate step before advancing
    if (step === 1) {
      if (!form.name || !form.email || !form.whatsapp || !form.gender) {
        setError("Please fill in all details to proceed.");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        setError("Please enter a valid email address.");
        return;
      }
    } else if (step === 2) {
      if (!form.profession || !form.jobType || !form.currentLocation) {
        setError("Please fill in your profession and location details.");
        return;
      }
    } else if (step === 3) {
      if (!form.dob || !form.tob || !form.pob) {
        setError("Please enter your birth date, time and place.");
        return;
      }
    }

    setStep((prev) => prev + 1);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setError("");
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.concern) {
      setError("Please select a main area of concern.");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/kundli", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed to submit.");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <CosmicLayout>
      <CosmicHero
        badge="Accurate Kundli Leads"
        badgeIcon={<Sparkles className="h-4 w-4 text-[#dfb15b]" />}
        title="Share Your"
        titleAccent="Birth Details"
        sub="Fill this form so we can prepare and send your Kundli Analysis. No payment required here."
      />

      <CosmicSection rhythm="pt-[20px] pb-16 md:pb-20 lg:pb-24">
        <div className="mx-auto max-w-2xl px-4 pt-0">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-slate-400 mb-2">
              <span className="font-semibold uppercase tracking-wider text-[#dfb15b]">
                {step === 1 && "Step 1: About You"}
                {step === 2 && "Step 2: Profession & Location"}
                {step === 3 && "Step 3: Birth Details"}
                {step === 4 && "Step 4: Areas of Concern"}
              </span>
              <span>Step {step} of 4</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#dfb15b] via-[#fcd34d] to-purple-600 transition-all duration-500 ease-out"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          <div className="cosmic-panel p-6 md:p-10 relative overflow-hidden backdrop-blur-md">
            {submitted ? (
              <div className="text-center py-12" data-aos="zoom-in">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#dfb15b]/10 text-[#dfb15b] shadow-[0_0_30px_rgba(223,177,91,0.2)]">
                  <Sparkles className="h-10 w-10 animate-pulse" />
                </div>
                <h3 className="font-display text-3xl font-extrabold text-white">Details Submitted!</h3>
                <p className="mt-4 text-slate-300 leading-relaxed max-w-md mx-auto">
                  Thank you for sharing your birth details. Our expert astrologers will analyze your Kundli and get in touch with you shortly.
                </p>
                <button
                  onClick={() => {
                    setForm(INITIAL_FORM);
                    setSubmitted(false);
                    setStep(1);
                  }}
                  className="cosmic-btn cosmic-btn-primary mt-8 px-8 py-3"
                >
                  Submit Another Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Step 1: About You */}
                {step === 1 && (
                  <div className="flex flex-col gap-5" data-aos="fade-right">
                    <div className="mb-2 rounded-lg border border-[#dfb15b]/20 bg-[#dfb15b]/5 p-4 text-sm text-slate-300 flex gap-3 items-start">
                      <span className="text-[#dfb15b] mt-0.5">🔒</span>
                      <span>Your birth details are used only for preparing your report. No spam calls. No data sharing.</span>
                    </div>

                    <div>
                      <label className="cosmic-label" htmlFor="name">Name *</label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="cosmic-input"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="cosmic-label" htmlFor="email">Email *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="cosmic-input"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="cosmic-label" htmlFor="whatsapp">Your WhatsApp Number *</label>
                      <div className="flex gap-2">
                        <span className="flex items-center gap-1 bg-black/40 border border-[#dfb15b]/20 px-3 rounded-lg text-sm text-slate-300">
                          🇮🇳 +91
                        </span>
                        <input
                          id="whatsapp"
                          type="tel"
                          required
                          placeholder="98765 43210"
                          className="cosmic-input flex-1"
                          value={form.whatsapp}
                          onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                        />
                      </div>
                      <span className="text-[11px] text-slate-500 mt-1 block">Enter your 10-digit number.</span>
                    </div>

                    <div>
                      <label className="cosmic-label" htmlFor="gender">Gender *</label>
                      <select
                        id="gender"
                        required
                        className="cosmic-input"
                        value={form.gender}
                        onChange={(e) => setForm({ ...form, gender: e.target.value })}
                      >
                        <option value="">Select an option</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Profession & Location */}
                {step === 2 && (
                  <div className="flex flex-col gap-5" data-aos="fade-right">
                    <div>
                      <label className="cosmic-label" htmlFor="profession">What is your profession? *</label>
                      <select
                        id="profession"
                        required
                        className="cosmic-input"
                        value={form.profession}
                        onChange={(e) => setForm({ ...form, profession: e.target.value })}
                      >
                        <option value="">Select an option</option>
                        <option value="Job">Job / Corporate Professional</option>
                        <option value="Business">Business Owner / Entrepreneur</option>
                        <option value="Student">Student</option>
                        <option value="Housewife">Housewife / Homemaker</option>
                        <option value="Self-Employed">Self-Employed / Freelancer</option>
                        <option value="Unemployed">Unemployed</option>
                      </select>
                    </div>

                    <div>
                      <label className="cosmic-label" htmlFor="jobType">Please specify type of job / business / role *</label>
                      <input
                        id="jobType"
                        type="text"
                        required
                        placeholder="e.g. IT Engineer, Shop Owner, Consulting, etc."
                        className="cosmic-input"
                        value={form.jobType}
                        onChange={(e) => setForm({ ...form, jobType: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="cosmic-label" htmlFor="location">Current City / Country *</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-slate-500" />
                        <input
                          id="location"
                          type="text"
                          required
                          placeholder="Start typing a city..."
                          className="cosmic-input pl-10"
                          value={form.currentLocation}
                          onChange={(e) => setForm({ ...form, currentLocation: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Birth Details */}
                {step === 3 && (
                  <div className="flex flex-col gap-5" data-aos="fade-right">
                    <div>
                      <label className="cosmic-label" htmlFor="dob">Date of Birth *</label>
                      <input
                        id="dob"
                        type="date"
                        required
                        className="cosmic-input text-slate-300"
                        value={form.dob}
                        onChange={(e) => setForm({ ...form, dob: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="cosmic-label" htmlFor="tob">Time of Birth *</label>
                      <input
                        id="tob"
                        type="time"
                        required
                        className="cosmic-input text-slate-300"
                        value={form.tob}
                        onChange={(e) => setForm({ ...form, tob: e.target.value })}
                      />
                      <span className="text-[11px] text-slate-500 mt-1 block">If exact time is not known, pick the closest approximate time.</span>
                    </div>

                    <div>
                      <label className="cosmic-label" htmlFor="pob">Place of Birth *</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-slate-500" />
                        <input
                          id="pob"
                          type="text"
                          required
                          placeholder="City/State/Country of Birth"
                          className="cosmic-input pl-10"
                          value={form.pob}
                          onChange={(e) => setForm({ ...form, pob: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Area of Concern & Query */}
                {step === 4 && (
                  <div className="flex flex-col gap-5" data-aos="fade-right">
                    <div>
                      <label className="cosmic-label" htmlFor="concern">Primary Area of Concern *</label>
                      <select
                        id="concern"
                        required
                        className="cosmic-input"
                        value={form.concern}
                        onChange={(e) => setForm({ ...form, concern: e.target.value })}
                      >
                        <option value="">Select main topic</option>
                        <option value="Career/Job">Career & Job Prospects</option>
                        <option value="Business/Wealth">Business growth & Finance</option>
                        <option value="Marriage/Relationship">Marriage & Relationships</option>
                        <option value="Health/Well-being">Health & Well-being</option>
                        <option value="Education/Studies">Education & Studies</option>
                        <option value="Other">Other Concerns</option>
                      </select>
                    </div>

                    <div>
                      <label className="cosmic-label" htmlFor="query">Detail your query or questions (Optional)</label>
                      <textarea
                        id="query"
                        rows={4}
                        placeholder="Write down any specific details or questions you want analyzed..."
                        className="cosmic-input resize-none"
                        value={form.query}
                        onChange={(e) => setForm({ ...form, query: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                {/* Honeypot */}
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

                {/* Nav buttons */}
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-[#dfb15b]/20">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="cosmic-btn border border-white/20 bg-white/[0.03] px-8 py-3 text-slate-300 hover:border-[#dfb15b] hover:text-[#dfb15b]"
                    >
                      <ArrowLeft size={16} /> Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="cosmic-btn cosmic-btn-primary px-8 py-3"
                    >
                      Next <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={sending}
                      className="cosmic-btn cosmic-btn-primary px-8 py-3"
                    >
                      {sending ? "Submitting..." : (
                        <>
                          Submit Details <Send size={16} />
                        </>
                      )}
                    </button>
                  )}
                </div>

                {error && (
                  <p className="text-center text-sm text-[#e31e24] mt-4" role="status">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </CosmicSection>
    </CosmicLayout>
  );
}
