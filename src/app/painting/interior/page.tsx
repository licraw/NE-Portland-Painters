import CarouselGallery from "../../components/ImageGallery/CarouselGallery";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  interiorServiceGalleryOneImages,
  interiorServiceGalleryTwoImages,
} from "@/app/gallery/interior/galleryFiles";
import ReviewsWidget from "../../components/ReviewsWidget";
import { getBaseMetadata, siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = getBaseMetadata(
  siteConfig.interiorService.title,
  "Generic interior painting service page copy for the reusable template.",
  "/painting/interior"
);

export default function InteriorPaintingPage() {
  const imageSet1 = interiorServiceGalleryOneImages;
  const imageSet2 = interiorServiceGalleryTwoImages;
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
            {siteConfig.interiorService.title}
          </h1>
          {siteConfig.interiorService.intro.map((paragraph) => (
            <p key={paragraph} className="pb-4 pt-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <CarouselGallery images={imageSet1} />
      <div className="p-8 pl-6 lg:pl-20 lg:pr-20 light-green-bg">
        <h2 className="font-sans font-medium text-4xl lg:text-4xl leading-[1.2] text-center pb-8">
          {siteConfig.interiorService.featuresHeading}
        </h2>
        <div className="max-w-4xl mx-auto pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.interiorService.featureColumns.map((column) => (
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

        {siteConfig.interiorService.outro.map((paragraph, index) => (
          <p
            key={paragraph}
            className={index === siteConfig.interiorService.outro.length - 1 ? "pb-12 pt-4" : "pb-4 pt-4"}
          >
            {paragraph}
          </p>
        ))}
      </div>
      <CarouselGallery bgcolor="var(--color-primary-soft)" images={imageSet2} />
      <div className="p-8 pl-6 lg:pl-20 lg:pr-20">
        <p className="pt-4 pb-4">
          Use this section for process details, material standards, scheduling expectations, and project communication.
        </p>
        <p className="pt-4 pb-4">
          The page remains gallery-led and service-focused while all copy is now reusable placeholder content.
        </p>
      </div>
      <ReviewsWidget title="Interior Painting Testimonials" className="theme-section-muted" />
    </>
  );
}
