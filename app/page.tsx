const services = [
  "Interior walls, ceilings, and trim",
  "Exterior siding, doors, and decks",
  "Cabinet refreshes and built-ins",
  "Rental turnovers and punch-list work",
];

const process = [
  "Walk-through and clear written scope",
  "Protection, prep, patching, and sanding",
  "Clean lines, durable coatings, daily cleanup",
  "Final review and touch-up list",
];

const highlights = [
  "Built for local SEO and future service pages",
  "Simple content structure that is easy to expand",
  "Ready for quote forms, project galleries, and reviews",
];

type HomePageProps = {
  searchParams: Promise<{
    isadmin?: string;
  }>;
};

export default async function Home({ searchParams }: HomePageProps) {
  const { isadmin } = await searchParams;

  if (isadmin !== "true") {
    return (
      <main>
        <section className="site-shell">
          <section className="section coming-soon">
            <div className="stack-md">
              <p className="eyebrow">NE Portland Painters</p>
              <h1 className="hero-title">Coming soon.</h1>
              <p className="hero-copy">
                A new website for NE Portland Painters is on the way.
              </p>
            </div>
          </section>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="site-shell">
        <header className="section header-row">
          <a className="brand-mark" href="#top">
            NE Portland Painters
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="section hero-grid" id="top">
          <div className="stack-lg">
            <p className="eyebrow">Local painting company website skeleton</p>
            <h1 className="hero-title">
              Clean, durable paintwork for homes across Northeast Portland.
            </h1>
            <p className="hero-copy">
              This starter strips out the boilerplate and gives you a solid base
              for a painter site: strong headline, service blocks, a trust
              section, and a quote CTA that can be wired into forms later.
            </p>
            <div className="cta-row">
              <a className="button-primary" href="#contact">
                Request a quote
              </a>
              <a className="button-secondary" href="#services">
                View services
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <p className="panel-label">Service area</p>
            <p className="panel-value">Northeast Portland</p>
            <p className="panel-copy">
              Expand this block later with neighborhoods, licensing details,
              review snippets, or a project gallery.
            </p>
            <div className="divider" />
            <p className="panel-label">Typical work</p>
            <ul className="detail-list">
              <li>Occupied homes</li>
              <li>Exterior repaints</li>
              <li>Trim and detail work</li>
            </ul>
          </aside>
        </section>

        <section className="section stack-md" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Start with the core offers people actually search for.</h2>
          </div>
          <div className="card-grid">
            {services.map((service) => (
              <article className="card" key={service}>
                <p className="card-kicker">Painting</p>
                <h3>{service}</h3>
                <p>
                  Keep these descriptions short for now, then turn each one into
                  its own service page when you are ready to target more search
                  terms.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" id="process">
          <div className="section-heading">
            <p className="eyebrow">Process</p>
            <h2>A simple structure for explaining how you work.</h2>
            <p>
              Home service sites convert better when the process is explicit.
              This gives you a place to explain prep, communication, and finish
              quality without writing a wall of text.
            </p>
          </div>

          <div className="numbered-list">
            {process.map((step, index) => (
              <div className="numbered-item" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section stack-md">
          <div className="section-heading">
            <p className="eyebrow">Why this starter</p>
            <h2>Lean now, expandable later.</h2>
          </div>
          <div className="highlight-grid">
            {highlights.map((item) => (
              <div className="highlight" key={item}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact-banner" id="contact">
          <div className="stack-sm">
            <p className="eyebrow">Contact</p>
            <h2>Ready for your real phone number, email, and lead form.</h2>
            <p>
              For now this is a clean placeholder CTA. Next steps are usually a
              simple contact form, testimonial strip, and individual pages for
              interior, exterior, and cabinet painting.
            </p>
          </div>
          <a className="button-primary" href="#top">
            Add contact details
          </a>
        </section>

        <footer className="section footer-row">
          <p>NE Portland Painters</p>
          <p>Minimal Next.js starter for a local painting business</p>
        </footer>
      </section>
    </main>
  );
}
