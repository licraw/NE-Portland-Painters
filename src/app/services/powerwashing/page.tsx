import type { Metadata } from "next";
import Link from "next/link";
import CarouselGallery from "../../components/ImageGallery/CarouselGallery";
import imageFiles from "@/app/gallery/powerwashing/galleryFiles";
import { getBaseMetadata, siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = getBaseMetadata(
  siteConfig.powerwashingService.title,
  siteConfig.powerwashingService.metaDescription,
  "/services/powerwashing"
);

export default function PowerwashingPage() {
  const imageSet = imageFiles.slice(0, 12);

  return (
    <>
      <div>
        <div className="p-8 pl-6 lg:pl-20 lg:pr-20">
        <h1
          className="font-sans font-medium text-4xl lg:text-7xl leading-[1.2]"
        >
          {siteConfig.powerwashingService.title}
        </h1>

          {siteConfig.powerwashingService.intro.map((paragraph) => (
            <p key={paragraph} className="pb-4 pt-4">
              {paragraph}
            </p>
          ))}

          <div className="pt-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={siteConfig.powerwashingService.ctaHref}
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold theme-primary-button"
              >
                {siteConfig.powerwashingService.ctaLabel}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold border border-theme-border bg-white/70 hover:bg-white transition-colors"
              >
                Ask a Question
              </Link>
            </div>
            <p className="pt-4 text-sm text-theme-text-muted max-w-2xl">
              Great before painting. Great for curb appeal. We’ll confirm surfaces and scope so cleaning is safe and consistent.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 pl-6 lg:pl-20 lg:pr-20 light-green-bg">
        <h2 className="font-sans font-medium text-3xl lg:text-4xl leading-[1.2] pb-6 text-center">
          {siteConfig.powerwashingService.servicesHeading}
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {siteConfig.powerwashingService.services.slice(0, 6).map((service) => (
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
              {siteConfig.powerwashingService.services.slice(6).map((service) => (
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
            href={siteConfig.powerwashingService.ctaHref}
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold theme-primary-button"
          >
            {siteConfig.powerwashingService.ctaLabel}
          </Link>
        </div>
      </div>

      <div className="p-8 pl-6 lg:pl-20 lg:pr-20">
        <h2 className="font-sans font-medium text-3xl lg:text-4xl leading-[1.2] pb-4">
          How the estimate works
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-theme-text-muted max-w-3xl">
          <li>Tell us what you want washed and your timing.</li>
          <li>We confirm the surfaces and access (decks, siding, walkways).</li>
          <li>You get a clear scope and schedule options.</li>
        </ol>
        <div className="pt-6">
          <Link
            href={siteConfig.powerwashingService.ctaHref}
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold theme-primary-button"
          >
            Request an Estimate
          </Link>
        </div>
      </div>

      <CarouselGallery images={imageSet} />

      <div className="p-8 pl-6 lg:pl-20 lg:pr-20">
        <div className="rounded-2xl border border-theme-border bg-theme-surface-muted p-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold">
            {siteConfig.powerwashingService.closingHeading}
          </h2>
          <p className="pt-3 text-theme-text-muted max-w-2xl mx-auto">
            {siteConfig.powerwashingService.closingBody}
          </p>
          <div className="pt-6 flex justify-center">
            <Link
              href={siteConfig.powerwashingService.ctaHref}
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold theme-primary-button"
            >
              {siteConfig.powerwashingService.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
