import type { Metadata } from "next";
import About from "../components/home/About";
import { getBaseMetadata } from "@/lib/siteConfig";

export const metadata: Metadata = getBaseMetadata(
  "About",
  "Generic about page placeholder copy for a reusable painting company template.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <About />
    </>
  );
}
