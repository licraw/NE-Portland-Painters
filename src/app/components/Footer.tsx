"use client";
import axios from "axios";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import React, { useState } from "react";
import Link from "next/link";
import { getFullAddress, siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    if (!executeRecaptcha) {
      return;
    }

    // 1) Get reCAPTCHA token
    const gRecaptchaToken = await executeRecaptcha("contact_form");

    // 2) Verify reCAPTCHA token
    const response = await axios.post("/api/verifyRecaptcha", {
      gRecaptchaToken
    });

    if (response?.data?.success !== true) {
      console.error(`reCAPTCHA validation failed with score: ${response?.data?.score}`);
      setStatus("Failed reCAPTCHA. 😢");
      return;
    }

    // 3) Handle subscription
    const subscribeResponse = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    if (subscribeResponse.status === 200) {
      setStatus("Success! 🎉");
      setEmail("");
      setTimeout(() => {
        setStatus("");
      }, 5000);
    } else {
      setStatus("Failed to subscribe. 😢");
    }
  };

  return (
    <footer className="bg-theme-footer-bg text-white py-10">
      <div className="mx-auto px-6 lg:px-20">
        {/* Top: Newsletter Signup */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-theme-footer-border pb-6 mb-6 gap-6">
          {/* Left side: Text */}
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold">Stay in the loop</h3>
            <p className="text-theme-footer-text-muted text-sm mt-2">
              Use this area for email updates, promotions, or seasonal service reminders.
              <br />
              The copy is now generic and ready to customize.
            </p>
          </div>
          {/* Right side: Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-4 lg:w-1/2"
          >
            <input
              onChange={handleChange}
              type="email"
              value={email}
              placeholder="Email address"
              className="p-2 w-full sm:w-auto flex-grow rounded-lg bg-theme-footer-surface text-white border border-theme-footer-border focus:outline-none focus:ring-2 focus:ring-theme-primary"
            />
            <button
              type="submit"
              className="theme-primary-button px-4 py-2 rounded-lg"
            >
              Submit
            </button>
            {status && <p className="text-sm text-theme-footer-text-muted">{status}</p>}
          </form>
        </div>

        <div className="border-b border-theme-footer-border pb-6 mb-6">
          <h3 className="text-xl font-semibold">{siteConfig.siteName}</h3>
          <p className="text-theme-footer-text-muted mt-2 text-sm leading-relaxed">
            Replace this paragraph with your company overview, licensing details,
            service standards, and warranty language.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-semibold">Services</h4>
            <ul className="mt-2 space-y-1 text-theme-footer-text-muted">
              <li>
                <Link href="/painting/interior" className="hover:text-white">
                  Interior Painting
                </Link>
              </li>
              <li>
                <Link href="/painting/exterior" className="hover:text-white">
                  Exterior Painting
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
              {getFullAddress()}
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
