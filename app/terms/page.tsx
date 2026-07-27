import type { Metadata } from "next";
import { LegalPage } from "@/components/cosmic/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | A Designer Ahmedabad",
  description:
    "The terms governing your use of A Designer Ahmedabad's website and design, printing, web and marketing services.",
  alternates: {
    canonical: "https://jkbrandingindia.com/terms",
  },
};

/**
 * Terms of Service.
 *
 * This route did not exist before — the theme brief listed "Terms" alongside
 * the other inner pages, and the footer's legal column had nowhere to point.
 * The copy below is a plain-language baseline drawn from how the studio already
 * describes its process on the Pricing and FAQ pages (advance payment,
 * concept counts, revision policy, print-ready deliverables, no money-back
 * guarantee). It is not legal advice and should be reviewed by a solicitor
 * before being relied on.
 */
export default function TermsPage() {
  return (
    <LegalPage
      title="The Terms Of"
      titleAccent="Our Engagement"
      updated="July 27, 2026"
      intro="The agreement that governs your use of this site and the services we deliver."
    >
      <h2>1. Acceptance of These Terms</h2>
      <p>
        By accessing this website or commissioning work from A Designer Ahmedabad, you agree
        to these Terms of Service. If you do not agree with any part of them, please
        discontinue use of the site and do not place an order.
      </p>

      <h2>2. Services</h2>
      <p>
        We provide graphic design, branding, printing consultation, website development and
        digital marketing services. The precise deliverables, timeline and fee for any
        engagement are those set out in the package you select or in the written quote we
        issue for your project.
      </p>

      <h2>3. Orders, Payment &amp; Scheduling</h2>
      <ul>
        <li>
          Work begins once we receive your design brief together with the advance payment
          for the selected package.
        </li>
        <li>
          Packages are payable 100% in advance unless a different schedule is agreed in
          writing.
        </li>
        <li>
          Quoted delivery durations are working days and run from the date the brief and
          payment are both received.
        </li>
        <li>
          Delays in providing feedback, assets or approvals will extend the delivery
          timeline accordingly.
        </li>
      </ul>

      <h2>4. Concepts &amp; Revisions</h2>
      <p>
        Each package states the number of initial concepts included. Revisions are offered as
        described in that package; we continue refining the selected direction until you are
        satisfied with the result. Requests that fall outside the agreed scope — a new
        direction after approval, or deliverables not listed in the package — may be quoted
        separately.
      </p>

      <h2>5. Deliverables &amp; Intellectual Property</h2>
      <ul>
        <li>
          On full payment, ownership of the final approved design passes to you, together
          with the source files listed in your package.
        </li>
        <li>
          Concepts that are not selected, along with our working files, drafts and internal
          processes, remain our property.
        </li>
        <li>
          We may display completed work in our portfolio and marketing channels unless you
          ask us in writing not to.
        </li>
        <li>
          You are responsible for ensuring that any brief, name, text or asset you supply to
          us does not infringe a third party&apos;s rights.
        </li>
      </ul>

      <h2>6. Printing</h2>
      <p>
        We supply print-ready files; we do not operate a print service. Colour, material and
        finish will vary between printers, and we are not responsible for the output of a
        third-party printer.
      </p>

      <h2>7. Refunds</h2>
      <p>
        Because every engagement begins with bespoke creative work, fees are not refundable
        once a project has started. We instead commit to working on your design until it
        meets the brief we agreed.
      </p>

      <h2>8. Confidentiality</h2>
      <p>
        Charts, founder details, signatures, business data and any other material you share
        with us in the course of a project are treated as confidential and are not disclosed
        to third parties except where required to deliver the service or by law.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        Our total liability arising from any engagement is limited to the fees you have paid
        us for that engagement. We are not liable for indirect or consequential losses,
        including lost profits or business interruption.
      </p>

      <h2>10. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. The version published on this page at
        the date of your order is the one that applies to it.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms are governed by the laws of India, and the courts of Ahmedabad, Gujarat
        have exclusive jurisdiction over any dispute arising from them.
      </p>
    </LegalPage>
  );
}
