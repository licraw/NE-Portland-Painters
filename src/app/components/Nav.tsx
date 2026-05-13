"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { siteConfig } from "@/lib/siteConfig";

const navItems = [
  { href: "/services/interior", label: "Interior Painting" },
  { href: "/services/exterior", label: "Exterior Painting" },
  { href: "/services/turnover", label: "Turnover Painting" },
  { href: "/services/commercial", label: "Commercial Painting" },
  { href: "/services/powerwashing", label: "Power Washing" },
  { href: "/services/carpentry", label: "Carpentry & Repairs" },
] as const;

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      setServicesOpen(false);
    }
  };

  const isServicesActive = navItems.some((item) => item.href === pathname);
  const isAboutActive = pathname === "/about";

  return (
    <>
      <style jsx>{`
        li {
          font-family: var(--font-geist-sans), ui-sans-serif, system-ui,
            sans-serif;
          font-size: inherit;
          font-weight: 400;
          line-height: inherit;
          text-align: left;
          text-underline-position: from-font;
          text-decoration-skip-ink: none;
          color: inherit;
        }
        li:active {
          color: black;
        }
      `}</style>

      {/* Top Nav Bar */}
      <nav className="relative z-50 border-b border-theme-border bg-theme-surface">
        <div className="flex items-center justify-between px-6 lg:px-20 py-2 lg:py-3">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex">
              <Image
                src="/logos/main-logo-nav.png"
                alt={`${siteConfig.siteName} logo`}
                width={1800}
                height={326}
                sizes="(min-width: 1024px) 240px, (min-width: 640px) 220px, 205px"
                className="-translate-x-1.5 w-[205px] sm:w-[220px] lg:w-[240px] h-auto"
                priority
              />
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1 text-sm font-medium text-theme-text-muted">
            <li>
              <Link
                href="/"
                className={`rounded-full px-3 py-2 transition hover:bg-theme-primary-soft hover:text-theme-primary-deep ${
                  pathname === "/" ? "font-semibold text-theme-primary-deep" : ""
                }`}
              >
                Home
              </Link>
            </li>

            <li className="group relative">
              <Link
                href="#"
                className={`flex items-center rounded-full px-3 py-2 transition hover:bg-theme-primary-soft hover:text-theme-primary-deep ${
                  isServicesActive ? "font-semibold text-theme-primary-deep" : ""
                }`}
              >
                Services
                <span className="ml-2 inline-flex h-5 w-5 items-center justify-center text-lg leading-none">▾</span>
              </Link>
              <div className="hidden group-hover:block absolute top-full left-0 w-56 bg-theme-surface shadow-xl rounded-xl p-2 mt-0 border border-theme-border z-20">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-lg px-3 py-2.5 text-sm transition hover:bg-theme-surface-subtle hover:text-theme-primary-deep ${
                      pathname === item.href ? "font-semibold text-theme-primary-deep" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link
                href="/about"
                className={`rounded-full px-3 py-2 transition hover:bg-theme-primary-soft hover:text-theme-primary-deep ${
                  isAboutActive ? "font-semibold text-theme-primary-deep" : ""
                }`}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={`rounded-full px-3 py-2 transition hover:bg-theme-primary-soft hover:text-theme-primary-deep ${pathname === "/contact" ? "font-semibold text-theme-primary-deep" : ""
                  }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="hidden lg:flex items-center space-x-2">
            <Link href="/estimate">
              <button className="theme-primary-button rounded-lg px-5 py-2 text-sm font-semibold">
                Get Estimate
              </button>
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-theme-border bg-theme-surface-subtle text-theme-primary focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } lg:hidden`}
          onClick={toggleMenu}
          aria-hidden={!menuOpen}
        />

        <div
          className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-theme-surface z-50 transform transition-transform duration-300 lg:hidden flex flex-col ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-theme-border">
            <Link href="/" className="flex items-center space-x-4">
              <span className="text-lg font-semibold text-theme-heading">
                {siteConfig.siteName}
              </span>
            </Link>
            <button
              onClick={toggleMenu}
              className="text-theme-primary focus:outline-none"
              aria-label="Close Menu"
            >
              <FiX size={24} />
            </button>
          </div>

          <ul className="flex-1 overflow-y-auto px-4 py-6 space-y-4 text-lg">
            <li>
              <Link
                href="/"
                onClick={toggleMenu}
                className={`block transition ${pathname === "/" ? "text-theme-heading" : ""
                  }`}
              >
                Home
              </Link>
            </li>

            <li>
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center justify-between w-full text-left transition ${
                  isServicesActive ? "text-theme-heading" : ""
                }`}
              >
                <span>Services</span>
                <span className="ml-3 inline-flex h-6 w-6 items-center justify-center text-xl leading-none">
                  {servicesOpen ? "▴" : "▾"}
                </span>
              </button>
              <ul
                className={`mt-2 ml-4 space-y-2 overflow-hidden transition-all duration-300 ${
                  servicesOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={toggleMenu}
                      className={`block px-2 py-1 rounded-md hover:bg-theme-surface-subtle ${
                        pathname === item.href ? "text-theme-heading" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link
                href="/about"
                onClick={toggleMenu}
                className={`block transition ${isAboutActive ? "text-theme-heading" : ""}`}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className={`block transition ${pathname === "/contact" ? "text-theme-heading" : ""
                  }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="p-4 border-t border-theme-border">
            <Link href="/estimate" onClick={toggleMenu}>
              <button className="theme-primary-button w-full py-3 rounded-full">
                Get Estimate
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
