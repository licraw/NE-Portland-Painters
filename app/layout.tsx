import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://neportlandpainters.com"),
  title: {
    default: "NE Portland Painters",
    template: "%s | NE Portland Painters",
  },
  description:
    "Bare-bones marketing site scaffold for a residential and commercial painting company serving Northeast Portland.",
  applicationName: "NE Portland Painters",
  keywords: [
    "NE Portland painters",
    "Portland house painters",
    "interior painting",
    "exterior painting",
    "cabinet painting",
  ],
  openGraph: {
    title: "NE Portland Painters",
    description:
      "Interior, exterior, and trim painting for homes and small commercial spaces in Northeast Portland.",
    url: "https://neportlandpainters.com",
    siteName: "NE Portland Painters",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
