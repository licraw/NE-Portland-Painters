import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CarouselGallery from "../../components/ImageGallery/CarouselGallery";
import imageFiles from "@/app/gallery/turnover/galleryFiles";
import { getBaseMetadata, siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = getBaseMetadata(
  siteConfig.turnoverPaintingService.title,
  siteConfig.turnoverPaintingService.metaDescription,
  "/services/turnover"
);

export default function TurnoverPaintingPage() {
  const imageSet = imageFiles.slice(0, 12);

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
              <Link href="/estimate" className="theme-page-badge-link">
                {siteConfig.hero.badgeLinkText}
              </Link>
            </p>
          </div>

          <h1
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 500,
              lineHeight: "1.2",
            }}
            className="font-sans font-medium text-4xl lg:text-7xl leading-[1.2]"
          >
            {siteConfig.turnoverPaintingService.title}
          </h1>

          {siteConfig.turnoverPaintingService.intro.map((paragraph) => (
            <p key={paragraph} className="pb-4 pt-4">
              {paragraph}
            </p>
          ))}

          <div className="pt-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={siteConfig.turnoverPaintingService.ctaHref}
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold theme-primary-button"
              >
                {siteConfig.turnoverPaintingService.ctaLabel}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold border border-theme-border bg-white/70 hover:bg-white transition-colors"
              >
                Property Manager Contact
              </Link>
            </div>
            <p className="pt-4 text-sm text-theme-text-muted max-w-2xl">
              Fast scheduling options for turns. Clear scope, clean jobsite, and punch list completion.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 pl-6 lg:pl-20 lg:pr-20 light-green-bg">
        <h2 className="font-sans font-medium text-3xl lg:text-4xl leading-[1.2] pb-6 text-center">
          {siteConfig.turnoverPaintingService.servicesHeading}
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {siteConfig.turnoverPaintingService.services.slice(0, 6).map((service) => (
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
              {siteConfig.turnoverPaintingService.services.slice(6).map((service) => (
                <li key={service.title}>
                  <span className="font-medium text-theme-text">{service.title}</span>
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
            href={siteConfig.turnoverPaintingService.ctaHref}
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold theme-primary-button"
          >
            {siteConfig.turnoverPaintingService.ctaLabel}
          </Link>
        </div>
      </div>

      <div className="p-8 pl-6 lg:pl-20 lg:pr-20">
        <h2 className="font-sans font-medium text-3xl lg:text-4xl leading-[1.2] pb-4">
          How the estimate works
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-theme-text-muted max-w-3xl">
          <li>Send unit details (address, beds/baths, timeline, access).</li>
          <li>We confirm scope (walls, ceilings, trim, doors, patching, paint).</li>
          <li>You get a clear scope, schedule options, and a punch list process.</li>
        </ol>
        <div className="pt-6">
          <Link
            href={siteConfig.turnoverPaintingService.ctaHref}
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold theme-primary-button"
          >
            Request a Turnover Estimate
          </Link>
        </div>
      </div>

      <CarouselGallery images={imageSet} />

      <div className="p-8 pl-6 lg:pl-20 lg:pr-20">
        <div className="rounded-2xl border border-theme-border bg-theme-surface-muted p-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold">
            {siteConfig.turnoverPaintingService.closingHeading}
          </h2>
          <p className="pt-3 text-theme-text-muted max-w-2xl mx-auto">
            {siteConfig.turnoverPaintingService.closingBody}
          </p>
          <div className="pt-6 flex justify-center">
            <Link
              href={siteConfig.turnoverPaintingService.ctaHref}
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold theme-primary-button"
            >
              {siteConfig.turnoverPaintingService.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
