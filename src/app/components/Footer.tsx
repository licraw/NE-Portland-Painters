"use client";
import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-theme-footer-bg text-white py-10">
      <div className="mx-auto px-6 lg:px-20">
        <div className="border-b border-theme-footer-border pb-6 mb-6">
          <h3 className="text-xl font-semibold">{siteConfig.siteName}</h3>
          <p className="text-theme-footer-text-muted mt-2 text-sm leading-relaxed">
            Portland-area painting and carpentry with a focus on clear
            communication, thorough prep, and clean finishes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-semibold">Services</h4>
            <ul className="mt-2 space-y-1 text-theme-footer-text-muted">
              <li>
                <Link href="/services/interior" className="hover:text-white">
                  Interior Painting
                </Link>
              </li>
              <li>
                <Link href="/services/exterior" className="hover:text-white">
                  Exterior Painting
                </Link>
              </li>
              <li>
                <Link href="/services/commercial" className="hover:text-white">
                  Commercial Painting
                </Link>
              </li>
              <li>
                <Link href="/services/carpentry" className="hover:text-white">
                  Carpentry
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-2 space-y-1 text-theme-footer-text-muted">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/estimate" className="hover:text-white">
                  Estimate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact Us</h4>
            <p className="text-theme-footer-text-muted mt-2 leading-relaxed">
              <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-white">
                {siteConfig.phone}
              </a>
              <br />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
              <br />
              Serving {siteConfig.serviceAreas.join(", ")}
            </p>
          </div>
        </div>

        <div className="text-center text-theme-footer-text-muted text-xs mt-10">
          © 2026 {siteConfig.siteName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
