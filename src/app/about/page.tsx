import type { Metadata } from "next";
import About from "../components/home/About";
import { getBaseMetadata } from "@/lib/siteConfig";

export const metadata: Metadata = getBaseMetadata(
  "About",
  "NE Portland Painters is a family-run painting company serving Portland area homeowners and small businesses.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <About />
    </>
  );
}
