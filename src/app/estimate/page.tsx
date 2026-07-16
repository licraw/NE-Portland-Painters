import { Metadata } from "next";
import EstimateForm from "../components/EstimateForm";
import { getBaseMetadata } from "@/lib/siteConfig";

export const metadata: Metadata = getBaseMetadata(
  "Estimate",
  "Estimate page placeholder copy for a reusable painting company template.",
  "/estimate"
);

export default function Estimate() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6">
      <EstimateForm />
    </div>
  );
}