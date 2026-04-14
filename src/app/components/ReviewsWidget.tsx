import { siteConfig } from "@/lib/siteConfig";

type ReviewsWidgetProps = {
  title?: string;
  limit?: number;
  className?: string;
};

export default function ReviewsWidget({
  title = "What Customers Are Saying",
  limit = 3,
  className = "",
}: ReviewsWidgetProps) {
  const visibleReviews = siteConfig.testimonials.items.slice(0, limit);

  return (
    <section className={`p-8 pl-6 lg:pl-20 lg:pr-20 ${className}`.trim()}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="font-sans font-medium text-3xl lg:text-4xl leading-tight">
            {title}
          </h2>
        </div>
        <p className="text-sm text-theme-text-subtle mt-2">
          {siteConfig.testimonials.summary}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {visibleReviews.map((review, index) => (
            <article
              key={`${review.author}-${index}`}
              className="rounded-xl border border-theme-border bg-theme-surface p-5 shadow-sm"
            >
              <p className="text-sm text-theme-text-muted italic">
                &ldquo;
                {review.text.length > 220
                  ? `${review.text.slice(0, 220)}...`
                  : review.text}
                &rdquo;
              </p>
              <p className="mt-3 text-sm font-semibold text-theme-heading">
                {review.author}
              </p>
              <p className="text-xs text-theme-text-faint mt-1">
                {Math.round(review.rating)} / 5
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
