"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function StickyReviewsWidget() {
  if (!siteConfig.testimonials.enabled) {
    return null;
  }

  const [isVisible, setIsVisible] = useState(true);
  const storageKey = "sticky_reviews_widget_dismissed_v1";

  useEffect(() => {
    try {
      const dismissed = window.localStorage.getItem(storageKey);
      if (dismissed === "true") {
        setIsVisible(false);
      }
    } catch {
      // Ignore storage errors and keep widget visible.
    }
  }, []);

  const dismissWidget = () => {
    setIsVisible(false);
    try {
      window.localStorage.setItem(storageKey, "true");
    } catch {
      // Ignore storage errors; in-memory hide still works.
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <aside className="fixed bottom-4 right-4 left-4 md:left-auto z-40">
      <div className="mx-auto md:mx-0 max-w-md rounded-2xl border border-theme-border bg-white/95 backdrop-blur shadow-xl px-4 py-3">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => dismissWidget()}
            className="text-theme-text-faint hover:text-theme-text-muted text-3xl font-semibold leading-none cursor-pointer"
            aria-label="Dismiss reviews widget"
          >
            ×
          </button>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold text-theme-text-faint uppercase tracking-wide">
              Testimonials
            </p>
            <p className="text-sm font-semibold text-theme-heading truncate">
              {siteConfig.testimonials.summary}
            </p>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-4 text-sm">
          <Link href="/contact" className="text-theme-primary font-semibold hover:underline">
            Contact us
          </Link>
          <Link href="/estimate" className="text-theme-text-muted font-semibold hover:underline">
            Get estimate
          </Link>
        </div>
      </div>
    </aside>
  );
}
