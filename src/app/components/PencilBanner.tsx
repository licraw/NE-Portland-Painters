"use client";

import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { siteConfig } from "@/lib/siteConfig";

type PencilBannerProps = {
  ctaAction: string;
};

export default function PencilBanner({ ctaAction }: PencilBannerProps) {
  return (
    <div className="bg-theme-primary text-white py-2 px-4 text-sm font-medium">
      <div className="flex items-center justify-between w-full mx-auto px-2 lg:px-16">
        <div className="flex items-center gap-1">
          <span className="block sm:hidden">FREE QUOTE</span>
          <span className="hidden sm:block">
            Request a free quote for your next painting project
          </span>
          <Link
            href={ctaAction}
            className="underline hover:no-underline hover:text-theme-surface-subtle transition ml-1"
          >
            HERE
          </Link>
        </div>

        <a
          href={`tel:${siteConfig.phoneHref}`}
          className="flex items-center gap-1 hover:text-theme-surface-subtle transition"
        >
          <FiPhone />
          <span className="underline hover:no-underline">{siteConfig.phone}</span>
        </a>
      </div>
    </div>
  );
}
