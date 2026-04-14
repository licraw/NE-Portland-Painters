import { Metadata } from "next";
import ContactContainer from "../components/contact/contactContainer";
import { getBaseMetadata } from "@/lib/siteConfig";

export const metadata: Metadata = getBaseMetadata(
  "Contact",
  "Contact page placeholder copy for a reusable painting company template.",
  "/contact"
);

export default function ContactPage() {
  return <ContactContainer />;
}
