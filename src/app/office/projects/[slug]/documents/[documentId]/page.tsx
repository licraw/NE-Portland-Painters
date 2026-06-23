import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { requireOfficeAuth } from "../../../../_lib/auth";
import { getOfficeProject } from "../../../projectData";

const REPORTS_DIR = path.join(
  process.cwd(),
  "src",
  "app",
  "office",
  "ppe-estimate1",
  "reports"
);

async function renderMarkdown(source: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(source);

  return String(file);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; documentId: string }>;
}): Promise<Metadata> {
  const { slug, documentId } = await params;
  const project = getOfficeProject(slug);
  const document = project?.documents.find((item) => item.id === documentId);

  return {
    title: document ? `${document.title} | ${project?.title}` : "Office Document",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function OfficeProjectDocumentPage({
  params,
}: {
  params: Promise<{ slug: string; documentId: string }>;
}) {
  await requireOfficeAuth();

  const { slug, documentId } = await params;
  const project = getOfficeProject(slug);
  const document = project?.documents.find((item) => item.id === documentId);

  if (!project || !document) {
    notFound();
  }

  const filePath = path.join(REPORTS_DIR, document.filename);

  if (!filePath.startsWith(REPORTS_DIR) || !fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf8");
  const renderedMarkdown =
    document.type === "Markdown" ? await renderMarkdown(source) : "";

  return (
    <article className="px-6 py-12 lg:px-20 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <Link
          href={`/office/projects/${project.slug}`}
          className="text-theme-text-muted underline"
        >
          Back to Project
        </Link>

        <div className="mt-6 border-b border-theme-border pb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-theme-primary-deep">
            {document.audience} document
          </p>
          <h1 className="pt-3 text-4xl font-semibold text-theme-heading lg:text-5xl">
            {document.title}
          </h1>
          <p className="pt-4 max-w-3xl text-theme-text-muted">
            {document.description}
          </p>
          <p className="pt-3 font-mono text-sm text-theme-text-subtle">
            {document.filename}
          </p>
        </div>

        <div className="pt-8">
          {document.type === "HTML" ? (
            <iframe
              title={document.title}
              srcDoc={source}
              sandbox=""
              className="h-[80vh] w-full rounded-lg border border-theme-border bg-white"
            />
          ) : (
            <div className="rounded-lg border border-theme-border bg-theme-surface p-6 lg:p-8">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: renderedMarkdown }}
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
