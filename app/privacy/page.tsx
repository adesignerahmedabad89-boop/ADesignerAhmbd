import type { Metadata } from "next";
import { LegalPage } from "@/components/cosmic/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | A Designer Ahmedabad",
  description:
    "Read our privacy policy to understand how A Designer Ahmedabad collects, uses, and safeguards your personal data.",
  alternates: {
    canonical: "https://jkbrandingindia.com/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Your Data,"
      titleAccent="Safeguarded In Orbit"
      updated="June 4, 2026"
      intro="How A Designer Ahmedabad collects, stores, shares and protects your information."
    >
      <h2>1. Introduction</h2>
      <p>
        Welcome to A Designer Ahmedabad. We are committed to protecting your personal data
        and respecting your privacy. This Privacy Policy describes how we collect, store,
        share, and protect your information when you visit our website, use our services,
        or contact us.
      </p>
      <p>
        By accessing our website or using our services, you consent to the data practices
        described in this policy. If you do not agree with the terms outlined here, please
        discontinue use of our site and services.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        We collect information to provide better services and improve your experience. The
        types of personal data we collect include:
      </p>
      <ul>
        <li>
          <strong>Contact Information:</strong> Your name, email address, phone number, and
          physical office address when you fill out contact or quote forms.
        </li>
        <li>
          <strong>Usage Details:</strong> Information about your visits to our site,
          including IP addresses, browser types, page interactions, referring URLs, and
          location data via Google Analytics.
        </li>
        <li>
          <strong>Inquiry Content:</strong> Project details, marketing goals, design
          preferences, and attachments uploaded through inquiry channels.
        </li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>A Designer Ahmedabad uses your data for the following purposes:</p>
      <ul>
        <li>
          To answer your requests, schedule consultation calls, and prepare custom project
          quotes.
        </li>
        <li>
          To deliver branding, web design, printing, and digital marketing services as
          agreed upon in B2B service contracts.
        </li>
        <li>To maintain and improve website performance, usability, and speed.</li>
        <li>
          To send you administrative updates, newsletters, and promotional marketing
          materials (which you can opt out of at any time).
        </li>
      </ul>

      <h2>4. Data Security &amp; Storage</h2>
      <p>
        We employ strict technical and organizational security measures to protect your
        personal information from unauthorized access, modification, disclosure, or
        destruction. This includes standard SSL encryption, secure hosting environments, and
        access controls for our internal teams.
      </p>
      <p>
        However, please note that no method of transmission over the internet or storage
        method is 100% secure. While we strive to protect your data, we cannot guarantee its
        absolute security.
      </p>

      <h2>5. Third-Party Disclosures</h2>
      <p>
        We do not sell, trade, or rent your personal identification information to others.
        We may share information with trusted third-party service providers who assist us in
        operating our website or conducting our business, so long as those parties agree to
        keep this information confidential.
      </p>
      <p>
        We may also release information when its release is appropriate to comply with
        federal or local laws, enforce our site policies, or protect ours or others&apos;
        rights, property, or safety.
      </p>

      <h2>6. Your Legal Rights &amp; Choices</h2>
      <p>
        Depending on your location, you may have specific data protection rights, including:
      </p>
      <ul>
        <li>
          The right to access, update, or delete the personal information we hold about you.
        </li>
        <li>The right to object to our processing of your personal data.</li>
        <li>The right to request data portability.</li>
        <li>
          The right to withdraw consent at any time where we relied on your consent to
          process your data.
        </li>
      </ul>
    </LegalPage>
  );
}
