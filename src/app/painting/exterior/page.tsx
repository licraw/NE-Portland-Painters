import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CarouselGallery from "../../components/ImageGallery/CarouselGallery";
import imageFiles from "@/app/gallery/exterior/galleryFiles";
import ReviewsWidget from "../../components/ReviewsWidget";
import { getBaseMetadata, siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = getBaseMetadata(
  siteConfig.exteriorService.title,
  "Generic exterior painting service page copy for the reusable template.",
  "/painting/exterior"
);

export default function ExteriorPaintingPage() {
  const imageSet1 = imageFiles.slice(0, 12);
  const imageSet2 = imageFiles.slice(12, 24);
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
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 500,
              lineHeight: "1.2",
            }}
            className="font-sans font-medium text-4xl lg:text-7xl leading-[1.2]"
          >
            {siteConfig.exteriorService.title}
          </h1>
          {siteConfig.exteriorService.intro.map((paragraph) => (
            <p key={paragraph} className="pb-4 pt-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <CarouselGallery images={imageSet1} />
      <div className="p-8 pl-6 lg:pl-20 lg:pr-20 light-green-bg">
        <p className="pb-4 pt-4">
          Use this section for prep standards, coating systems, weather considerations, and finish expectations.
        </p>
        <p className="pb-4 pt-4">
          The content is now generic so it can be customized for any local painting business.
        </p>
        <p className="pb-12 pt-4">
          Swap in company-specific warranties, product preferences, or maintenance recommendations here.
        </p>
      </div>
      <CarouselGallery bgcolor="var(--color-primary-soft)" images={imageSet2} />
      <div className="p-8 pl-6 lg:pl-20 lg:pr-20 light-green-bg pt-0">
        <div className="pl-6 lg:pl-20 lg:pr-20 pb-8">
          <h2 className="font-sans font-medium text-4xl lg:text-4xl leading-[1.2] pb-8 text-center">
            {siteConfig.exteriorService.featuresHeading}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteConfig.exteriorService.featureColumns.map((column) => (
                <ul
                  key={column.join("-")}
                  className="list-disc list-inside text-left space-y-2 w-full max-w-[90%] mx-auto md:mx-0 md:max-w-full"
                >
                  {column.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 pl-6 lg:pl-20 lg:pr-20">
        <p className="pt-4 pb-4">
          Use this closing section to reinforce craftsmanship, communication, and exterior durability.
        </p>
        <p className="pt-4 pb-4">
          The template keeps the original flow while removing business-specific claims and service sprawl.
        </p>
      </div>
      <ReviewsWidget title="Exterior Painting Testimonials" className="theme-section-muted" />
    </>
  );
}
