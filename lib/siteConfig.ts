import type { Metadata } from "next";

export const siteConfig = {
  siteName: "NE Portland Painters",
  phone: "(971) 260-2177",
  phoneHref: "+19712602177",
  email: "info@example.com",
  businessHours: "Monday - Friday: 9 AM - 4 PM",
  address: {
    street: "123 Main Street",
    city: "Portland",
    region: "OR",
    postalCode: "972xx",
    country: "US",
  },
  serviceAreas: ["Portland", "Beaverton", "Tigard", "Lake Oswego", "Milwaukie"],
  analyticsIds: {
    googleAds: "",
    googleAnalytics: "",
  },
  domain: "https://www.neportlandpainters.com",
  hero: {
    badge: "Get a free quote",
    badgeLinkText: "here!",
    headline: "NE Portland Painters",
    description:
      "No project is too small. Your neighbors are here to help with interior painting, exterior painting, carpentry, and more.",
    ctaLabel: "Get a Free Quote",
  },
  home: {
    heroImage: "/gallery/exterior/689b8422deaa37a01160e077-row-163.jpeg",
    topRatedHeadline: "Top-Rated Portland House Painters",
    topRatedDescription:
      "With customer happiness as our top priority, we’re committed to premium service and quality for Portland-area homes.",
    topRatedCtaLabel: "Request a Free Estimate",
    topRatedCtaHref: "/estimate",
    topRatedImage: "/sps/hero-exterior.jpg",
    servicesTiles: [
      {
        key: "interior",
        kicker: "Interior Painting",
        blurb: "Prep and paint interior walls, ceilings, trim, cabinets, and more!",
        title: "Interior House Painting",
        subtitle:
          "Our friendly and professional house painters treat your home with the care and respect it deserves.",
        href: "/services/interior",
        ctaLabel: "Interior Page",
        image: "/gallery/interior/689ba98cb4b844028ac8b380-row-269.jpeg",
      },
      {
        key: "exterior",
        kicker: "Exterior Painting",
        blurb: "Prep and paint your home's exterior using quality paints and stains.",
        title: "Exterior House Painting",
        subtitle:
          "We handle the prep and coating systems common to Portland-area homes for a finish that lasts.",
        href: "/services/exterior",
        ctaLabel: "Exterior Page",
        image: "/gallery/exterior/689b83802971e94fb2f87317-row-162.jpeg",
      },
      {
        key: "commercial",
        kicker: "Commercial Painting",
        blurb: "Complete small to medium interior and exterior projects.",
        title: "Commercial Painting Services",
        subtitle:
          "From offices to retail and multi-family common areas, we plan around access and timelines.",
        href: "/services/commercial",
        ctaLabel: "Commercial Page",
        image: "/gallery/commercial/commercial-painting.jpg",
      },
      {
        key: "turnover",
        kicker: "Turnover Painting",
        blurb: "Fast, consistent unit turns for property managers.",
        title: "Rental Turnover Painting",
        subtitle:
          "Patch, paint, and punch lists for apartments and rentals with scheduling options that keep move-ins on track.",
        href: "/services/turnover",
        ctaLabel: "Turnover Page",
        image: "/gallery/turn-over/turn-over-1.jpg",
      },
      {
        key: "carpentry",
        kicker: "Carpentry",
        blurb: "Install interior molding, repair siding and decks, build fences, and more.",
        title: "Carpentry and Repairs",
        subtitle:
          "Carpentry is the perfect complement to painting. Let us be a one-stop shop for your home projects.",
        href: "/services/carpentry",
        ctaLabel: "Carpentry Page",
        image: "/gallery/carpentry/68911bc22e7a5128a8dd05b0-66611cd1e78703c64d53b723-image-20from-20ios-20-2.jpeg",
      },
      {
        key: "powerwashing",
        kicker: "Power Washing",
        blurb: "Exterior cleaning for curb appeal and paint prep.",
        title: "Power Washing",
        subtitle:
          "Siding, patios, walkways, decks, and paint-prep washes with safe methods for the surface.",
        href: "/services/powerwashing",
        ctaLabel: "Power Washing Page",
        image: "/gallery/powerwashing/pressure-wash.jpg",
      },
    ],
    differenceHeading: "NE Portland Painters: Our Difference",
    differenceItems: [
      {
        title: "Licensed, Bonded, and Insured",
        body:
          "We carry the licensing and insurance you should expect from a professional painting contractor, so you can feel confident inviting our team into your home.",
      },
      {
        title: "Pride in High-Quality Work",
        body:
          "We’re detail-focused from prep to final coat, and we aim for clean lines, consistent finishes, and a respectful jobsite every day.",
      },
      {
        title: "Portland-Focused Service",
        body:
          "We’re building our next chapter in Portland, serving homeowners across the metro with clear communication and reliable scheduling.",
      },
    ],
    badges: [
      {
        src: "/sps/badges/yelp.png",
        alt: '"People Love Us on Yelp" distinction',
        href: "https://www.yelp.com/biz/sound-painting-solutions-seattle-2",
      },
      {
        src: "/sps/badges/bbb.png",
        alt: "BBB Accredited and A+ Rated Business",
        href: "https://www.bbb.org/us/wa/seattle/profile/painting-contractors/sound-painting-solutions-llc-1296-22730040",
      },
      {
        src: "/sps/badges/threebestrated.jpg",
        alt: "Best Business of 2022 - ThreeBestRated",
        href: "https://threebestrated.com/painters-in-seattle-wa",
      },
      {
        src: "/sps/badges/safety-certified.png",
        alt: "Nolan Consulting Group - Summit Safety Certification",
        href: "https://www.nolancg.com/summit-certifications-awards/safety/",
      },
      {
        src: "/sps/badges/business-excellence.png",
        alt: "Nolan Consulting Group - Summit Business Excellence Award",
        href: "https://www.nolancg.com/summit-certifications-awards/business-excellence/",
      },
      {
        src: "/sps/badges/leadsafe.png",
        alt: "Washington State Department of Commerce Lead-Based Paint Program (RRP) Certification",
        href: "https://www.commerce.wa.gov/building-infrastructure/housing/lead-based-paint/renovation-repair-painting/",
      },
    ],
    latestPostsHeading: "House Painting Blog",
    latestPostsCtaLabel: "More Tips, News, and Recent Paint Jobs",
    latestPostsCtaHref: "/blog",
    latestPosts: [],
    contactHeading: "Contact Us",
    contactSubheading: "Request a Quote",
    quoteFormHeading: "Free Painting Quotes",
    quoteFormDescription:
      "Fill out this form for a free quote for interior painting, exterior painting, or carpentry. We serve Portland and nearby cities.",
    teamImage: "/sps/photos/team.jpg",
    stats: [] as Array<{ prefix: string; value: string; label: string }>,
  },
  about: {
    headline: "A family painting company for Portland neighbors",
    body: [
      "NE Portland Painters is a family business run by a father and his two sons. We take pride in doing honest work, showing up when we say we will, and treating your home or jobsite with care.",
      "No job is too small. We are here to help our neighbors maintain their homes and businesses with clear communication, practical guidance, and clean, durable finishes.",
      "Whether you need interior painting, exterior painting, or repairs, we will walk you through the scope, prep, and product choices so you know exactly what you are getting.",
    ],
    stats: [] as Array<{ value: string; description: string }>,
  },
  services: [
    {
      key: "interior",
      title: "Interior Painting",
      description: "Prep and paint interior walls, ceilings, trim, cabinets, and more!",
      image: "/sps/hero-interior.jpg",
      href: "/services/interior",
    },
    {
      key: "exterior",
      title: "Exterior Painting",
      description: "Prep and paint your home's exterior using quality paints and stains.",
      image: "/sps/hero-exterior.jpg",
      href: "/services/exterior",
    },
    {
      key: "commercial",
      title: "Commercial Painting",
      description: "Complete small to medium interior and exterior projects.",
      image: "/sps/hero-exterior.jpg",
      href: "/services/commercial",
    },
    {
      key: "turnover",
      title: "Turnover Painting",
      description: "Fast rental and apartment turnover painting for property managers.",
      image: "/sps/hero-interior.jpg",
      href: "/services/turnover",
    },
    {
      key: "powerwashing",
      title: "Power Washing",
      description: "Exterior cleaning for curb appeal and paint-prep washes.",
      image: "/gallery/powerwashing/pressure-wash.jpg",
      href: "/services/powerwashing",
    },
    {
      key: "carpentry",
      title: "Carpentry",
      description: "Install interior molding, repair siding and decks, build fences, and more.",
      image: "/carpentry.svg",
      href: "/services/carpentry",
    },
  ],
  interiorService: {
    title: "Portland Interior House Painting",
    metaDescription:
      "Interior house painting for Portland homes: walls, ceilings, trim, doors, cabinets, and light repairs with clean prep and clear communication.",
    intro: [
      "A great interior paint job starts long before the first coat. We focus on careful prep, crisp lines, and a clean, low-stress experience so your home looks refreshed without the mess.",
      "From single rooms to whole-home repaints, we help Portland homeowners choose the right sheen, product, and approach for the way you actually live in the space.",
    ],
    servicesHeading: "Our Portland Interior House Painting Services",
    services: [
      {
        title: "Walls, ceilings, trim, doors, wainscoting, and built-ins",
        description:
          "Clean cut lines, consistent finish, and a plan for protecting floors, furniture, and high-traffic areas.",
      },
      {
        title: "Cabinet painting (kitchens and baths)",
        description:
          "A durable cabinet finish comes from the right prep and products: degreasing, sanding, bonding primers, and the right topcoat for wear and cleaning.",
      },
      {
        title: "Baseboards, crown molding, and detailed trim",
        description:
          "Sharp edges and clean profiles, ideal for refreshes after remodels, flooring changes, or general wear and tear.",
      },
      {
        title: "Stair rails, spindles, and banisters",
        description:
          "High-touch surfaces that need extra durability and careful masking to avoid drips on floors and treads.",
      },
      {
        title: "Specialty finishes and stains",
        description:
          "Accent walls, feature finishes, and trim or wood-tone touchups when a standard wall repaint isn’t the goal.",
      },
      {
        title: "Color changes, accent walls, and feature areas",
        description:
          "Help with transitions between spaces, consistent sheens, and clean lines where colors meet.",
      },
      {
        title: "Brush, roll, and spray application",
        description:
          "We choose the method that fits the surface, the space, and the finish you want, without overspray surprises.",
      },
      {
        title: "Minor drywall repairs",
        description:
          "Small dings, nail pops, and patching so your paint goes on a surface that looks intentional, not “painted over.”",
      },
      {
        title: "Caulking, sealing, and gap filling",
        description:
          "Finish work that makes trim and transitions look tight, especially around baseboards, casings, and crown.",
      },
      {
        title: "Stain blocking and tricky coverage",
        description:
          "Guidance on primers and finish coats for water stains, old colors, and surfaces that tend to flash or bleed through.",
      },
      {
        title: "Wallpaper removal & wall prep (where applicable)",
        description:
          "Careful removal and surface prep so walls are ready for primer and paint, not a rushed skim over damage.",
      },
      {
        title: "Thorough prep and protection",
        description:
          "Masking, covering, caulking, sanding, and filling where it matters most, because prep is what makes paint look sharp.",
      },
      {
        title: "Clear communication and walkthroughs",
        description:
          "Up-front scope, daily touchpoints as needed, and a final walkthrough so you know exactly what’s completed.",
      },
      {
        title: "Punch lists & touch-ups",
        description:
          "Final detailing for edges, hardware, and small fixes so the job looks finished in real light, not just in photos.",
      },
    ],
    highlightsHeading: "Interior Painting Highlights",
    highlights: [
      "Detail-focused work for crisp lines, smooth finishes, and clean transitions between colors and sheens.",
      "Respectful jobsite practices: protect surfaces, keep pathways usable, and clean up at the end of each day.",
      "Product guidance for Portland homes, including bath and kitchen moisture, kids/pets, and high-touch trim durability.",
    ],
    featuredReview: {
      quote:
        "They were organized, careful with prep, and the finished paintwork looks clean and even. Communication was straightforward, and the house was kept tidy throughout the project.",
      attribution: "Homeowner in Portland",
    },
    serviceAreasHeading: "Service Areas",
    serviceAreasIntro:
      "Based in Portland, we serve homeowners across the metro area, including many neighborhoods on the east side and nearby cities.",
    serviceAreas: [
      "Portland (NE, SE, North Portland, and close-in west side)",
      "Beaverton",
      "Tigard",
      "Lake Oswego",
      "Milwaukie",
      "Happy Valley",
      "Gresham",
      "West Linn",
    ],
    closingHeading: "Ready for an Interior Painting Estimate?",
    closingBody:
      "Tell us a bit about your project and we’ll follow up with next steps, scheduling options, and a clear scope for your interior repaint.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/estimate",
  },
  carpentryService: {
    title: "Portland Carpentry and Repairs",
    metaDescription:
      "Carpentry and repair services for Portland homes, including trim, doors, small exterior repairs, and paint-ready prep work.",
    intro: [
      "Carpentry is the perfect complement to painting. Small repairs and upgrades make finishes look better, last longer, and prevent paint from failing early.",
      "We focus on practical, paint-ready carpentry for Portland homes, with clean details and clear scope before work starts.",
    ],
    servicesHeading: "Our Portland Carpentry Services",
    services: [
      {
        title: "Trim and finish carpentry",
        description:
          "Baseboards, casings, crown, and small detail upgrades or repairs to sharpen the look of a room.",
      },
      {
        title: "Doors and hardware alignment",
        description:
          "Sticking doors, latches, and small adjustments that improve function before paint or stain work.",
      },
      {
        title: "Baseboard and casing replacement (small areas)",
        description:
          "Replace damaged trim sections or update profiles in a room before painting.",
      },
      {
        title: "Caulk, fill, and seam cleanup",
        description:
          "Tighten up gaps, joints, and transitions so trim lines look crisp after painting.",
      },
      {
        title: "Dry rot and damaged wood repairs (light to moderate)",
        description:
          "Replace or repair small sections so we are not painting over soft or failing material.",
      },
      {
        title: "Siding and exterior trim repairs",
        description:
          "Patch or replace damaged boards, trim, or corners so exterior paint has a solid surface.",
      },
      {
        title: "Punch lists and paint-ready prep",
        description:
          "Fix the small things that slow down painting: loose trim, open joints, cracked corners, and minor patches.",
      },
      {
        title: "Small drywall patches (nail pops, dings, small holes)",
        description:
          "Minor wall repairs so paint does not highlight imperfections.",
      },
      {
        title: "Shelving and simple built-ins (small projects)",
        description:
          "Install basic shelves or small built-ins that can be painted for a clean finished look.",
      },
      {
        title: "Closet and storage upgrades (simple)",
        description:
          "Add shelf and rod systems or basic storage improvements to make space more usable.",
      },
      {
        title: "Cabinet hardware installs",
        description:
          "Swap pulls and knobs, align hardware, and clean up old holes when feasible.",
      },
      {
        title: "Weatherstripping and thresholds",
        description:
          "Reduce drafts and improve door function with simple sealing upgrades.",
      },
      {
        title: "Fence and gate repairs (simple)",
        description:
          "Replace pickets, straighten sections, and repair basic latch or hinge issues.",
      },
      {
        title: "Deck board replacement (small areas)",
        description:
          "Swap damaged boards or address trip hazards before stain or paint work.",
      },
      {
        title: "Porch and stair repairs (simple)",
        description:
          "Treads, risers, rails, and small fixes that improve safety and appearance.",
      },
      {
        title: "Interior trim touch-ups after remodels",
        description:
          "Finish small trim details after flooring, cabinet, or fixture changes so everything looks intentional.",
      },
      {
        title: "Small exterior projects (where applicable)",
        description:
          "Porch details, posts, railings, and other small repairs that support a clean paint finish.",
      },
      {
        title: "Coordination with painting scope",
        description:
          "We plan repairs in the right order so prep, priming, and topcoats go on once the substrate is ready.",
      },
    ],
    closingHeading: "Ready for a Carpentry Estimate?",
    closingBody:
      "Tell us what you want repaired or updated, where it is, and your timeline. We will follow up with next steps and a clear scope.",
    ctaLabel: "Request an Estimate",
    ctaHref: "/estimate",
  },
  powerwashingService: {
    title: "Portland Power Washing",
    metaDescription:
      "Power washing and exterior cleaning for Portland homes, including siding, walkways, patios, decks, and paint-prep washes.",
    intro: [
      "Power washing is one of the fastest ways to improve curb appeal and help coatings last longer. A proper wash removes grime and growth so paint and stain can bond to a clean surface.",
      "We focus on safe, appropriate cleaning methods for the surface, whether that means a lighter wash, a more thorough rinse, or targeted cleaning for problem areas.",
    ],
    servicesHeading: "Power Washing Services",
    services: [
      {
        title: "Siding washes (where appropriate)",
        description:
          "Remove dirt and buildup to refresh the look and prep for painting or staining.",
      },
      {
        title: "Walkways and steps",
        description:
          "Clean concrete or pavers to improve appearance and reduce slippery buildup.",
      },
      {
        title: "Patios and driveways",
        description:
          "General surface cleaning to brighten hardscapes and remove grime.",
      },
      {
        title: "Deck and porch cleaning (where applicable)",
        description:
          "Wash and rinse to prep for stain or paint and bring back a cleaner look.",
      },
      {
        title: "Fence cleaning (where applicable)",
        description:
          "Prepare wood surfaces for stain and remove surface grime or growth.",
      },
      {
        title: "Paint prep washes",
        description:
          "A prep step before exterior painting so coatings adhere more consistently.",
      },
      {
        title: "Targeted problem areas",
        description:
          "Spot cleaning for areas that collect grime, splashback, or buildup near gutters and downspouts.",
      },
      {
        title: "Jobsite protection and cleanup",
        description:
          "Protect nearby surfaces and leave the area tidy after the wash.",
      },
    ],
    closingHeading: "Ready for a Power Washing Estimate?",
    closingBody:
      "Tell us what you want cleaned and your timeline. We will confirm surfaces, access, and a clear scope before scheduling.",
    ctaLabel: "Request an Estimate",
    ctaHref: "/estimate",
  },
  turnoverPaintingService: {
    title: "Portland Turnover Painting for Property Managers",
    metaDescription:
      "Turnover apartment and rental painting for Portland property managers. Fast scheduling, clean prep, patching, and punch list completion.",
    intro: [
      "Turnovers need speed and consistency. We help Portland property managers get units paint-ready and back on the market with clear scope, predictable workflow, and clean jobsite practices.",
      "Whether it is a full repaint or a refresh, we focus on durable finishes, efficient prep, and punch list completion so move-ins stay on schedule.",
    ],
    servicesHeading: "Rental Turnover Painting Services",
    services: [
      {
        title: "Full unit repaints",
        description:
          "Walls, ceilings, trim, doors, and closets with clear scope and consistent finish.",
      },
      {
        title: "Patch and texture repair (light to moderate)",
        description:
          "Dings, nail holes, small patches, and touch-up texture work before paint.",
      },
      {
        title: "Trim, doors, and baseboards",
        description:
          "High-wear areas that benefit from durable products and clean edges.",
      },
      {
        title: "Stain blocking and odor sealing (when needed)",
        description:
          "Primers for water stains and prior issues so the finish looks consistent.",
      },
      {
        title: "Color standardization",
        description:
          "Match building colors and keep sheen and product choices consistent across turns.",
      },
      {
        title: "Punch list touch-ups",
        description:
          "Final detail work so the unit is ready for photos, showings, and move-in.",
      },
      {
        title: "Move-out touch-up packages",
        description:
          "Targeted patching and repainting for units that do not need a full repaint.",
      },
      {
        title: "Spot repairs for common damage",
        description:
          "Door dings, scuffs, corner wear, and small drywall fixes in high-traffic areas.",
      },
      {
        title: "Caulking and gap fixes (simple)",
        description:
          "Seal small gaps at trim and transitions for a cleaner finished look.",
      },
      {
        title: "Bathroom and kitchen moisture touch-ups",
        description:
          "Address peeling, mildew-prone spots, and high-splash areas as part of the repaint scope.",
      },
      {
        title: "Closet repainting and shelving touch-ups",
        description:
          "Freshen closets, shelves, and doors so storage areas photograph well.",
      },
      {
        title: "Door and trim hardware remove and reinstall",
        description:
          "Remove plates and hardware as needed for clean cut lines, then reinstall after paint cures.",
      },
      {
        title: "Wall washing and surface cleaning (light)",
        description:
          "Remove grime and residue so primer and paint adhere and look consistent.",
      },
      {
        title: "Anchor and nail removal",
        description:
          "Pull leftover hardware and patch so walls are ready for paint.",
      },
      {
        title: "Paint-ready coordination",
        description:
          "Sequence work around cleaners, flooring, and maintenance so the unit turns efficiently.",
      },
      {
        title: "Occupied unit touch-ups (where applicable)",
        description:
          "Targeted work with careful protection and communication around access and timing.",
      },
      {
        title: "Common areas (small projects)",
        description:
          "Hallways, stairwells, and entry areas when you need a quick refresh between larger projects.",
      },
      {
        title: "Coordination with other trades",
        description:
          "Work around flooring, cleaners, and maintenance tasks so the schedule stays efficient.",
      },
    ],
    closingHeading: "Need a fast turnover quote?",
    closingBody:
      "Send the unit address, size, desired scope, and target timeline. We will confirm access, prep needs, and a clear plan to complete the work.",
    ctaLabel: "Request a Turnover Estimate",
    ctaHref: "/estimate",
  },
  exteriorService: {
    title: "Portland Exterior House Painting",
    metaDescription:
      "Exterior house painting for Portland homes, including siding, trim, doors, and light repairs, with careful prep and weather-aware scheduling.",
    intro: [
      "A high-quality exterior paint job is mostly prep. We focus on surface prep, repairs, and clean finish details so your home looks great and holds up to Portland weather.",
      "From full repaints to trim refreshes, we help you choose a coating system that matches the material, sun exposure, and maintenance goals.",
    ],
    servicesHeading: "Our Portland Exterior Painting Services",
    services: [
      {
        title: "Full exterior repaints",
        description:
          "Siding and trim repaints with clear prep standards, product selection, and finish expectations.",
      },
      {
        title: "Siding, trim, soffits, fascia, and eaves",
        description:
          "Detailed cut lines, consistent sheen, and a plan for protecting landscaping and hardscapes.",
      },
      {
        title: "Single-side or partial repaints",
        description:
          "Target sun-exposed or weathered elevations while keeping the overall look consistent.",
      },
      {
        title: "Doors, shutters, railings, and small exterior details",
        description:
          "High-visibility areas that benefit from careful sanding, priming, and clean edges.",
      },
      {
        title: "Garage doors and exterior entry systems",
        description:
          "Prep and coatings that improve curb appeal and help stand up to frequent use.",
      },
      {
        title: "Porches, posts, beams, and porch ceilings",
        description:
          "Coatings for areas that take extra moisture, foot traffic, and seasonal wear.",
      },
      {
        title: "Deck and fence staining or painting (where applicable)",
        description:
          "Coating options that match the material, sun exposure, and maintenance cycle.",
      },
      {
        title: "Pressure washing (when appropriate)",
        description:
          "Clean the surface before prep and paint so coatings bond well and look consistent.",
      },
      {
        title: "Scraping, sanding, and spot-priming",
        description:
          "Address failing paint, rough edges, and bare wood before finish coats go on.",
      },
      {
        title: "Full priming and stain blocking (when needed)",
        description:
          "Use primers that fit the substrate and issues like tannins, stains, or prior color changes.",
      },
      {
        title: "Caulking and sealing",
        description:
          "Seal gaps and transitions to improve appearance and help reduce water intrusion.",
      },
      {
        title: "Light carpentry repairs",
        description:
          "Minor wood and trim repairs so we are not painting over rot, gaps, or damage.",
      },
      {
        title: "Trim replacement recommendations",
        description:
          "If we find damaged wood beyond a quick repair, we can recommend the right fix before repainting.",
      },
      {
        title: "Metal and specialty substrates (where applicable)",
        description:
          "Approach for metal railings, flashing, and other surfaces that need specific primers and prep.",
      },
      {
        title: "Masonry and foundation coatings (where applicable)",
        description:
          "Options for painted masonry surfaces with attention to moisture and surface condition.",
      },
      {
        title: "Stains and specialty exterior coatings (where applicable)",
        description:
          "Options for siding or wood elements that are better suited to a stain system than paint.",
      },
      {
        title: "Weather-aware scheduling",
        description:
          "We plan around dry-time needs, temperature, and access so the finish cures properly.",
      },
      {
        title: "Color changes and curb appeal updates",
        description:
          "Help choosing colors that work with roof, stone, and landscaping so the exterior feels cohesive.",
      },
      {
        title: "Touch-ups and maintenance plans",
        description:
          "Address small failures early to extend the life of the overall paint system.",
      },
      {
        title: "Final walkthrough and punch list",
        description:
          "We confirm coverage, edges, and touch-ups so the job looks finished in real light.",
      },
    ],
    closingHeading: "Ready for an Exterior Painting Estimate?",
    closingBody:
      "Tell us what you want painted, any known repairs, and your timeline. We will follow up with next steps, scheduling options, and a clear scope.",
    ctaLabel: "Request an Estimate",
    ctaHref: "/estimate",
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
    enabled: false,
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
    icons: {
      icon: [{ url: "/favicon.png", type: "image/png" }],
    },
    verification: {
      google: "tnx0gDZ0LQ5BDzrN9msiOQG3nzEQL3k8qMooPWVeLAw",
    },
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
