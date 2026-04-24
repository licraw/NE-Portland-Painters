import type { Metadata } from "next";
import Link from "next/link";
import CarouselGallery from "../../components/ImageGallery/CarouselGallery";
import { interiorServiceGalleryOneImages } from "@/app/gallery/interior/galleryFiles";
import { getBaseMetadata } from "@/lib/siteConfig";

export const metadata: Metadata = getBaseMetadata(
  "Commercial Painting",
  "Commercial painting services for Portland-area offices, retail, and multi-family projects.",
  "/services/commercial"
);

export default function CommercialPaintingPage() {
  const imageSet = interiorServiceGalleryOneImages;

  return (
    <>
      <div className="p-8 pl-6 lg:pl-20 lg:pr-20">
        <h1 className="font-sans font-medium text-4xl lg:text-7xl leading-[1.2]">
          Commercial Painting in Portland
        </h1>

        <p className="pt-6 pb-4 max-w-3xl text-theme-text-muted">
          We handle small to medium commercial painting projects with clear
          scheduling, clean jobsite practices, and an eye for durability so your
          space looks sharp and stays that way.
        </p>
        <p className="pb-8 max-w-3xl text-theme-text-muted">
          Offices, retail, and multi-family common areas can be painted with
          minimal disruption by planning the work around your operating hours
          and access needs.
        </p>
      </div>

      <CarouselGallery images={imageSet} />

      <div className="p-8 pl-6 lg:pl-20 lg:pr-20 light-green-bg">
        <h2 className="font-sans font-medium text-4xl lg:text-4xl leading-[1.2] pb-6 text-center">
          Commercial Services
        </h2>
        <div className="max-w-4xl mx-auto">
          <ul className="list-disc list-inside space-y-3">
            <li className="marker:text-theme-primary-deep">
              Interior painting for offices, retail, and shared building spaces
            </li>
            <li className="marker:text-theme-primary-deep">
              Low-odor and fast-turnaround options where appropriate
            </li>
            <li className="marker:text-theme-primary-deep">
              Surface prep, patching, and clean finish work
            </li>
            <li className="marker:text-theme-primary-deep">
              Flexible scheduling to reduce downtime
            </li>
          </ul>
        </div>
      </div>

      <div className="p-8 pl-6 lg:pl-20 lg:pr-20">
        <div className="rounded-2xl border border-theme-border bg-theme-surface-muted p-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold">
            Request a commercial estimate
          </h2>
          <p className="pt-3 text-theme-text-muted max-w-2xl mx-auto">
            Send the address, timeline, access details, and any hours we should work around.
            We’ll reply with a clear scope and scheduling options.
          </p>
          <div className="pt-6 flex justify-center">
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold theme-primary-button"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}
