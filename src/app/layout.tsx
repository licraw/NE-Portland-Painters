import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import PencilBanner from "./components/PencilBanner";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import GoogleCaptchaWrapper from "./api/verifyRecaptcha/GoogleCaptchaWrapper";
import { getBaseMetadata } from "@/lib/siteConfig";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = getBaseMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleCaptchaWrapper>
          <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
            <Header>
              <PencilBanner ctaAction="/estimate" />
              <Nav />
            </Header>
            <main>{children}</main>
            <Footer />
          </div>
        </GoogleCaptchaWrapper>
      </body>
    </html>
  );
}
