import Banner from "./components/Banner";
import Image from "next/image";
import About from "./components/home/About";
import Services from "./components/home/Services";
import { Metadata } from "next";
import Link from "next/link";
import ReviewsWidget from "./components/ReviewsWidget";
import { getBaseMetadata, siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = getBaseMetadata(
  "Painting Company Template",
  siteConfig.hero.description
);

export default function HomePage() {
  return (
    <>
      <div>
        <div className='p-8 pl-6 lg:pl-20 lg:pr-20'>
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
            {siteConfig.hero.headline}
          </h1>
        </div>

        <Banner
          ctaLink="/estimate"
          imagePath="/herobanner.webp"
          cta={siteConfig.hero.ctaLabel}
          description={siteConfig.hero.description}
        />

        <About />
        <Services />
        <ReviewsWidget title="Recent Testimonials" />
      </div>
    </>
  );
}
