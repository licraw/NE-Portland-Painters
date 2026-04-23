import CarouselGallery from "../../components/ImageGallery/CarouselGallery";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  interiorServiceGalleryOneImages,
  interiorServiceGalleryTwoImages,
} from "@/app/gallery/interior/galleryFiles";
import { getBaseMetadata, siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = getBaseMetadata(
  siteConfig.interiorService.title,
  siteConfig.interiorService.metaDescription,
  "/services/interior"
);

export default function InteriorPaintingPage() {
  const imageSet1 = interiorServiceGalleryOneImages;
  return (
    <>
      <div>
        <div className="p-8 pl-6 lg:pl-20 lg:pr-20">
          <div className="theme-page-badge">
            <div className="theme-page-badge-icon">
              <Image
                src="/gallery/leaf.svg"
                alt={`${siteConfig.siteName} accent icon`}
                width={16}
                height={16}
              />
            </div>
            <p className="theme-page-badge-text">
              {siteConfig.hero.badge}
              <Link
                href="/estimate"
                className="theme-page-badge-link"
              >
                {siteConfig.hero.badgeLinkText}
              </Link>
            </p>
          </div>
        <h1
          className="font-sans font-medium text-4xl lg:text-7xl leading-[1.2]"
        >
          {siteConfig.interiorService.title}
        </h1>
          {siteConfig.interiorService.intro.map((paragraph) => (
            <p key={paragraph} className="pb-4 pt-4">
              {paragraph}
            </p>
          ))}
          <div className="pt-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={siteConfig.interiorService.ctaHref}
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold theme-primary-button"
              >
            {siteConfig.interiorService.ctaLabel}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold border border-theme-border bg-white/70 hover:bg-white transition-colors"
          >
            Ask a Question
          </Link>
        </div>
        <p className="pt-4 text-sm text-theme-text-muted max-w-2xl">
          Fast, clear estimates for Portland-area interiors. We’ll confirm prep, repairs, and finish expectations before scheduling.
        </p>
          </div>
        </div>
      </div>

      <div className="p-8 pl-6 lg:pl-20 lg:pr-20 light-green-bg">
        <h2 className="font-sans font-medium text-3xl lg:text-4xl leading-[1.2] pb-6 text-center">
          {siteConfig.interiorService.servicesHeading}
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {siteConfig.interiorService.services.slice(0, 6).map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-theme-border bg-white/70 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="pt-2 text-theme-text-muted">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="max-w-5xl mx-auto pt-6">
          <details className="rounded-xl border border-theme-border bg-white/60 p-5">
            <summary className="cursor-pointer font-semibold">
              See full service list
            </summary>
            <ul className="list-disc list-inside pt-4 space-y-3 text-theme-text-muted">
              {siteConfig.interiorService.services.slice(6).map((service) => (
                <li key={service.title}>
                  <span className="font-medium text-theme-text">
                    {service.title}
                  </span>
                  <span className="text-theme-text-muted">
                    {": "}
                    {service.description}
                  </span>
                </li>
              ))}
            </ul>
          </details>
        </div>
        <div className="pt-8 flex justify-center">
          <Link
            href={siteConfig.interiorService.ctaHref}
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold theme-primary-button"
          >
            {siteConfig.interiorService.ctaLabel}
          </Link>
        </div>
      </div>

      <div className="p-8 pl-6 lg:pl-20 lg:pr-20">
        <h2 className="font-sans font-medium text-3xl lg:text-4xl leading-[1.2] pb-4">
          How the estimate works
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-theme-text-muted max-w-3xl">
          <li>Tell us what you want painted and your timing.</li>
          <li>We confirm prep/repairs and the finish you want.</li>
          <li>You get a clear scope and schedule options.</li>
        </ol>
        <div className="pt-6">
          <Link
            href={siteConfig.interiorService.ctaHref}
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold theme-primary-button"
          >
            Request an Estimate
          </Link>
        </div>
      </div>

      <CarouselGallery images={imageSet1} />

      <div className="p-8 pl-6 lg:pl-20 lg:pr-20">
        <div className="rounded-2xl border border-theme-border bg-theme-surface-muted p-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold">
            {siteConfig.interiorService.closingHeading}
          </h2>
          <p className="pt-3 text-theme-text-muted max-w-2xl mx-auto">
            {siteConfig.interiorService.closingBody}
          </p>
          <div className="pt-6 flex justify-center">
            <Link
              href={siteConfig.interiorService.ctaHref}
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold theme-primary-button"
            >
              {siteConfig.interiorService.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
