import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import ReviewsWidget from "./components/ReviewsWidget";
import EstimateForm from "./components/EstimateForm";
import { getBaseMetadata, siteConfig } from "@/lib/siteConfig";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = getBaseMetadata(
  siteConfig.siteName,
  siteConfig.hero.description
);

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <div className="w-full">
        <section className="px-6 lg:px-20 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
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
                {siteConfig.hero.headline}
              </h1>

              <h2 className="pt-6 text-xl lg:text-2xl text-theme-text-muted max-w-2xl">
                {siteConfig.hero.description}
              </h2>

              <div className="pt-10">
                <Link
                  href="/estimate"
                  className="inline-flex items-center rounded-full px-8 py-4 text-lg font-semibold theme-primary-button"
                >
                  {siteConfig.hero.ctaLabel}
                </Link>
              </div>
            </div>

            <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden border border-theme-border shadow-sm">
              <Image
                src={siteConfig.home.heroImage}
                alt="Interior painting project"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-20 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 relative w-full aspect-[16/11] rounded-2xl overflow-hidden border border-theme-border shadow-sm">
              <Image
                src={siteConfig.home.topRatedImage}
                alt="Exterior painting project"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-sans font-medium text-4xl lg:text-6xl leading-[1.15]">
                {siteConfig.home.topRatedHeadline}
              </h2>
              <p className="pt-6 text-xl text-theme-text-muted max-w-2xl">
                {siteConfig.home.topRatedDescription}
              </p>
              <div className="pt-10">
                <Link
                  href={siteConfig.home.topRatedCtaHref}
                  className="inline-flex items-center rounded-full px-8 py-4 text-lg font-semibold theme-primary-button"
                >
                  {siteConfig.home.topRatedCtaLabel}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-20 py-12 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.home.servicesTiles.map((tile) => (
              <Link
                key={tile.key}
                href={tile.href}
                className="group relative overflow-hidden rounded-2xl border border-theme-border bg-theme-surface shadow-sm"
              >
                <div className="relative h-64">
                  <Image
                    src={tile.image}
                    alt={tile.kicker}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                    <p className="text-sm font-semibold tracking-wide uppercase opacity-90">
                      {tile.kicker}{" "}
                      <span className="font-normal normal-case opacity-90">
                        {tile.blurb}
                      </span>
                    </p>
                    <h3 className="pt-3 text-2xl lg:text-3xl font-semibold">
                      {tile.title}
                    </h3>
                    <p className="pt-3 text-white/90">
                      {tile.subtitle}
                    </p>
                    <div className="pt-6">
                      <span className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 text-sm font-semibold transition group-hover:bg-white/80">
                        {tile.ctaLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="px-6 lg:px-20 py-12 lg:py-20">
          <h2 className="font-sans font-medium text-4xl lg:text-6xl leading-[1.15]">
            {siteConfig.home.latestPostsHeading}{" "}
            <span className="text-theme-text-muted text-2xl lg:text-3xl align-middle">
              Our Latest Posts
            </span>
          </h2>
          <div className="pt-10 space-y-4">
            {latestPosts.length === 0 ? (
              <p className="text-theme-text-muted">No posts imported yet.</p>
            ) : (
              latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block rounded-xl border border-theme-border bg-theme-surface p-6 hover:bg-theme-surface-subtle transition"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                    <span
                      className="text-lg font-semibold"
                      dangerouslySetInnerHTML={{ __html: post.titleHtml }}
                    />
                    <span className="text-theme-text-muted">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </Link>
              ))
            )}
          </div>
          <div className="pt-10">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full px-8 py-4 text-lg font-semibold theme-primary-button"
            >
              {siteConfig.home.latestPostsCtaLabel}
            </Link>
          </div>
        </section>

        <ReviewsWidget title="Recent Testimonials" />

        <section className="px-6 lg:px-20 py-12 lg:py-20">
          <h2 className="font-sans font-medium text-4xl lg:text-6xl leading-[1.15]">
            {siteConfig.home.contactHeading}
          </h2>

          <div className="pt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-theme-text-muted">
              <h3 className="text-2xl font-semibold text-theme-heading">
                {siteConfig.home.contactSubheading}
              </h3>
              <p className="pt-6 text-lg">
                <a href={`tel:${siteConfig.phoneHref}`} className="underline">
                  {siteConfig.phone}
                </a>
              </p>
              <p className="pt-2 text-lg">
                <a href={`mailto:${siteConfig.email}`} className="underline">
                  {siteConfig.email}
                </a>
              </p>
              <p className="pt-6 text-lg">{siteConfig.businessHours}</p>
              <p className="pt-6 text-lg">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.region}{" "}
                {siteConfig.address.postalCode}
              </p>

              <h3 className="pt-12 text-2xl font-semibold text-theme-heading">
                {siteConfig.home.quoteFormHeading}
              </h3>
              <p className="pt-4 text-theme-text-muted">
                {siteConfig.home.quoteFormDescription}
              </p>
            </div>
            <div>
              <EstimateForm embedded />
            </div>
          </div>
        </section>

        {siteConfig.home.stats.length > 0 ? (
          <section className="px-6 lg:px-20 py-12 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteConfig.home.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-theme-border bg-theme-surface p-10 text-center shadow-sm"
                >
                  <div className="text-sm font-semibold tracking-wide text-theme-text-muted">
                    {stat.prefix}
                  </div>
                  <div className="pt-4 text-5xl font-bold text-theme-primary-deep">
                    {stat.value}
                  </div>
                  <div className="pt-4 text-sm font-semibold tracking-wide text-theme-text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </>
  );
}
