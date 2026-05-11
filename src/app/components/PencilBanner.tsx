"use client";

import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { siteConfig } from "@/lib/siteConfig";

type PencilBannerProps = {
  ctaAction: string;
};

export default function PencilBanner({ ctaAction }: PencilBannerProps) {
  return (
    <div className="border-b border-theme-border bg-theme-primary-soft px-5 py-1.5 text-xs font-medium text-theme-primary-deep sm:px-8 lg:px-20">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-1 -ml-2 sm:-ml-4">
          <span className="block sm:hidden">FREE QUOTE</span>
          <span className="hidden sm:block">
            Request a free quote for your next painting project
          </span>
          <Link
            href={ctaAction}
            className="font-semibold underline underline-offset-2 transition hover:text-theme-primary-hover"
          >
            HERE
          </Link>
        </div>

        <a
          href={`tel:${siteConfig.phoneHref}`}
          className="flex items-center gap-1 transition hover:text-theme-primary-hover"
        >
          <FiPhone />
          <span className="font-semibold">{siteConfig.phone}</span>
        </a>
      </div>
    </div>
  );
}
