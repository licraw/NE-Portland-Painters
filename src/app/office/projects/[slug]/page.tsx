import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImageGallery from "@/app/components/ImageGallery/ImageGallery";
import { requireOfficeAuth } from "../../_lib/auth";
import { getOfficeProject } from "../projectData";

const imageCategories = [
  "Satellite / measurements",
  "Front",
  "Right side",
  "Rear",
  "Left side",
  "Condition / prep details",
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getOfficeProject(slug);

  return {
    title: project?.title ?? "Office Project",
    robots: {
      index: false,
      follow: false,
    },
  };
}

function audienceClass(audience: string) {
  if (audience === "Customer-facing") {
    return "border-theme-primary bg-theme-primary-soft text-theme-primary-deep";
  }

  if (audience === "Internal") {
    return "border-theme-border-strong bg-theme-surface-subtle text-theme-heading";
  }

  return "border-theme-border bg-theme-surface text-theme-text-muted";
}

export default async function OfficeProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await requireOfficeAuth();

  const { slug } = await params;
  const project = getOfficeProject(slug);

  if (!project) {
    notFound();
  }

  const galleryImages = project.images.map((asset) => asset.image.src);

  return (
    <article className="px-6 py-12 lg:px-20 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <Link href="/office" className="text-theme-text-muted underline">
          Back to Office
        </Link>

        <div className="mt-6 border-b border-theme-border pb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-theme-primary-deep">
                Project workspace
              </p>
              <h1 className="pt-3 text-4xl font-semibold text-theme-heading lg:text-5xl">
                {project.title}
              </h1>
              <p className="pt-4 max-w-3xl text-theme-text-muted">
                {project.summary}
              </p>
            </div>
            <span className="inline-flex w-fit rounded-full bg-theme-primary-soft px-3 py-1 text-sm font-semibold text-theme-primary-deep">
              {project.status}
            </span>
          </div>
        </div>

        <section className="py-10">
          <h2 className="text-2xl font-semibold text-theme-heading">
            Summary
          </h2>
          <div className="mt-5 grid gap-4 rounded-lg border border-theme-border bg-theme-surface p-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Address", project.address],
              ["Type", project.type],
              ["Siding", project.siding],
              ["Working paintable body area", project.workingPaintableBodyArea],
              ["Paint cost assumption", project.paintCostAssumption],
              ["Labor assumption", project.laborAssumption],
              ["Crew plan", project.crewPlan],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-sm font-semibold text-theme-text-subtle">
                  {label}
                </p>
                <p className="pt-1 text-theme-heading">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-theme-border py-10">
          <h2 className="text-2xl font-semibold text-theme-heading">
            Documents
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {project.documents.map((document) => (
              <Link
                key={document.id}
                href={`/office/projects/${project.slug}/documents/${document.id}`}
                className={`block rounded-lg border p-5 transition hover:bg-theme-surface-subtle ${audienceClass(
                  document.audience
                )}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {document.title}
                    </h3>
                    <p className="pt-2 text-sm">{document.description}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-current px-2.5 py-1 text-xs font-semibold">
                    {document.type}
                  </span>
                </div>
                <div className="mt-5 flex items-center justify-between gap-3 text-sm font-semibold">
                  <span>{document.audience}</span>
                  <span>Open</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-theme-border py-10">
          <h2 className="text-2xl font-semibold text-theme-heading">
            Image Gallery
          </h2>
          <div className="mt-5">
            <ImageGallery images={galleryImages} />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {imageCategories.map((category) => {
              const assets = project.images.filter(
                (asset) => asset.category === category
              );

              if (assets.length === 0) {
                return null;
              }

              return (
                <div
                  key={category}
                  className="rounded-lg border border-theme-border bg-theme-surface p-5"
                >
                  <h3 className="font-semibold text-theme-heading">
                    {category}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-theme-text-muted">
                    {assets.map((asset) => (
                      <li key={asset.filename}>
                        <span className="font-medium text-theme-heading">
                          {asset.title}
                        </span>
                        <span className="block">{asset.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-t border-theme-border py-10">
          <h2 className="text-2xl font-semibold text-theme-heading">
            Internal Notes / Assumptions
          </h2>
          <div className="mt-5 rounded-lg border border-theme-border bg-theme-surface p-6">
            <ul className="space-y-3 text-theme-text-muted">
              {project.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </article>
  );
}
