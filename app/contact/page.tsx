import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | A Designer Ahmedabad",
  description: "Get in touch with A Designer Ahmedabad. Reach us at our Banglore or Ahmedabad offices.",
};

export default function ContactPage() {
  return <ContactClient />;
}
