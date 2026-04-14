import type { Metadata } from "next";

export const siteConfig = {
  siteName: "Painting Company Template",
  phone: "(555) 123-4567",
  phoneHref: "+15551234567",
  email: "hello@example.com",
  address: {
    street: "123 Main Street",
    city: "Your City",
    region: "ST",
    postalCode: "12345",
    country: "US",
  },
  serviceAreas: ["Primary Service Area", "Secondary Service Area"],
  analyticsIds: {
    googleAds: "",
    googleAnalytics: "",
  },
  domain: "https://example.com",
  hero: {
    badge: "Get a free estimate today",
    badgeLinkText: "here!",
    headline:
      "Professional painting services for interiors, exteriors, and curb appeal.",
    description:
      "Use this template to launch a painting company site with polished layouts, reusable sections, and editable content from a single config file.",
    ctaLabel: "Get Estimate",
  },
  about: {
    headline: "Reliable painters. Clear communication. Consistent results.",
    body: [
      "This reusable template is designed for residential and light commercial painting businesses that want a clean, credible web presence.",
      "Update the company details, service areas, messaging, and testimonials in one place to tailor the site for a new business without reworking the UI.",
    ],
    stats: [
      {
        value: "10+ Years",
        description: "Replace with your company history or years in business.",
      },
      {
        value: "5-Star Service",
        description: "Use this slot for reputation, responsiveness, or quality proof.",
      },
      {
        value: "500+ Projects",
        description: "Swap in your own project volume or specialty metric.",
      },
    ],
  },
  services: [
    {
      key: "painting",
      title: "Painting",
      description:
        "Showcase interior and exterior painting with flexible messaging and imagery that can be updated for any market.",
      image: "/gallery/interior/Photo Mar 26 2025, 5 39 20 PM.jpg",
      secondImage: "/gallery/exterior1.jpeg",
      href: {
        interior: "/painting/interior",
        exterior: "/painting/exterior",
      },
    },
    {
      key: "prep",
      title: "Surface Prep",
      description:
        "Use this card to highlight patching, sanding, priming, masking, and other prep work that supports a durable finish.",
      image: "/gallery/interior3.jpeg",
      href: "/about",
    },
    {
      key: "finishes",
      title: "Specialty Finishes",
      description:
        "Position this area around trim, doors, cabinets, stain work, or other detail-focused services your painting company provides.",
      image: "/gallery/exterior3.jpeg",
      href: "/contact",
    },
  ],
  interiorService: {
    title: "Interior Painting",
    intro: [
      "Use this page to describe your interior painting process, project communication, and the types of rooms or finishes you handle best.",
      "The layout stays intact while the copy can be tailored for residential repainting, cabinet refinishing, trim work, or light repair services.",
    ],
    featuresHeading: "Interior Painting Capabilities",
    featureColumns: [
      [
        "Masking and protection",
        "Wall and ceiling painting",
        "Drywall patching",
        "Primer and topcoat systems",
        "Clean jobsite practices",
      ],
      [
        "Trim, doors, and millwork",
        "Caulking and spackling",
        "Cabinet and built-in refreshes",
        "Brush, roll, and spray application",
        "Low-odor paint options",
      ],
      [
        "Color change repaints",
        "Accent walls and detailed finishes",
        "Occupied-home scheduling",
        "Final walkthroughs",
        "Touch-up coordination",
      ],
    ],
    outro: [
      "Swap in your own differentiators here, such as premium materials, dust control, cabinet work, or designer collaboration.",
      "This section is intentionally generic so it can be customized quickly for a new painting company without changing the structure.",
    ],
  },
  exteriorService: {
    title: "Exterior Painting",
    intro: [
      "Use this page to explain your exterior painting approach, from prep and repairs to weather protection and final walkthroughs.",
      "The template supports a broad range of exterior work while keeping the existing gallery-driven layout and section rhythm.",
    ],
    featuresHeading: "Exterior Painting Capabilities",
    featureColumns: [
      [
        "Pressure washing",
        "Scraping and sanding",
        "Primer and stain-blocking",
        "Caulking and sealing",
        "Wood and trim repairs",
      ],
      [
        "Siding and trim painting",
        "Doors, shutters, and railings",
        "Deck and fence coatings",
        "Spray, brush, and roll application",
        "Weather-conscious scheduling",
      ],
      [
        "Color updates and curb appeal",
        "Maintenance-focused repaints",
        "Detailed punch lists",
        "Final inspections",
        "Long-term finish planning",
      ],
    ],
    outro: [
      "Replace this copy with the prep standards, products, and warranties that match your business.",
      "All content on this page is now generic and can be adapted without editing component structure.",
    ],
  },
  contact: {
    heading: "Get In Touch",
    description:
      "Use this form for project questions, scheduling, and general inquiries.",
  },
  estimate: {
    heading: "Request an Estimate",
    description:
      "Share a few project details and your team can follow up with next steps.",
  },
  testimonials: {
    sourceLabel: "Customer Feedback",
    summary: "Trusted by homeowners who value clear communication and clean results.",
    items: [
      {
        author: "Customer Name",
        rating: 5,
        text: "Replace this testimonial with a real review from your business.",
      },
      {
        author: "Customer Name",
        rating: 5,
        text: "This placeholder keeps the review layout intact while removing proprietary content.",
      },
      {
        author: "Customer Name",
        rating: 5,
        text: "Update these testimonials in the site config when customizing the template for a new company.",
      },
    ],
  },
  referralOptions: [
    "Previous customer",
    "Friend or neighbor",
    "Google",
    "Instagram",
    "Facebook",
    "Yelp",
    "Referral partner",
    "Community event",
    "Other",
  ],
} as const;

export function getFullAddress() {
  const { street, city, region, postalCode } = siteConfig.address;
  return `${street}, ${city}, ${region} ${postalCode}`;
}

export function getBaseMetadata(
  title?: string,
  description?: string,
  pathname = "/"
): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.siteName}` : siteConfig.siteName;
  const pageDescription = description ?? siteConfig.hero.description;
  const url = new URL(pathname, siteConfig.domain).toString();

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
  };
}
