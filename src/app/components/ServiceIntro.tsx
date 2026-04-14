"use client";

type ServiceIntroProps = {
  heading: string;
  children: React.ReactNode;
};

export default function ServiceIntro({ heading, children }: ServiceIntroProps) {
  return (
    <section className="py-12 px-6 lg:py-16 lg:px-8 bg-theme-surface-muted">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-theme-heading">{heading}</h2>
        <div className="mt-4 text-theme-text-muted text-base lg:text-lg leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}
