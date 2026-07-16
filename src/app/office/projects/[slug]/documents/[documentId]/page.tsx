import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { requireOfficeAuth } from "../../../../_lib/auth";
import { getOfficeProject } from "../../../projectData";

function getReportsDir(reportsFolder: string) {
  return path.join(
    process.cwd(),
    "src",
    "app",
    "office",
    reportsFolder,
    "reports"
  );
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isTableSeparator(line: string) {
  return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
}

function parseTableRow(line: string) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function tableBlockToHtml(lines: string[]) {
  const [headerLine, , ...bodyLines] = lines;
  const headers = parseTableRow(headerLine);

  const headerHtml = headers
    .map((header) => `<th>${escapeHtml(header)}</th>`)
    .join("");

  const bodyHtml = bodyLines
    .map((line) => {
      const cells = parseTableRow(line);
      return `<tr>${cells
        .map((cell) => `<td>${escapeHtml(cell)}</td>`)
        .join("")}</tr>`;
    })
    .join("");

  return `<table><thead><tr>${headerHtml}</tr></thead><tbody>${bodyHtml}</tbody></table>`;
}

function renderMarkdownTables(source: string) {
  const lines = source.split("\n");
  const output: string[] = [];

  for (let index = 0; index < lines.length; index += 1) {
    const currentLine = lines[index];
    const nextLine = lines[index + 1];

    if (
      currentLine?.trim().startsWith("|") &&
      nextLine &&
      isTableSeparator(nextLine)
    ) {
      const tableLines = [currentLine, nextLine];
      index += 2;

      while (index < lines.length && lines[index].trim().startsWith("|")) {
        tableLines.push(lines[index]);
        index += 1;
      }

      output.push(tableBlockToHtml(tableLines));
      index -= 1;
      continue;
    }

    output.push(currentLine);
  }

  return output.join("\n");
}

function pdfHref(projectSlug: string, documentId: string) {
  return `/office/projects/${projectSlug}/documents/${documentId}/pdf`;
}

async function renderMarkdown(source: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(renderMarkdownTables(source));

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
  const { slug, documentId } = await params;
  await requireOfficeAuth(`/office/projects/${slug}/documents/${documentId}`);

  const project = getOfficeProject(slug);
  const document = project?.documents.find((item) => item.id === documentId);

  if (!project || !document) {
    notFound();
  }

  const reportsDir = getReportsDir(project.reportsFolder);
  const filePath = path.join(reportsDir, document.filename);

  if (!filePath.startsWith(reportsDir) || !fs.existsSync(filePath)) {
    notFound();
  }

  const source =
    document.type === "PDF" ? "" : fs.readFileSync(filePath, "utf8");
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
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
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

            {document.type !== "PDF" ? (
              <Link
                href={pdfHref(project.slug, document.id)}
                className="inline-flex w-fit shrink-0 items-center justify-center rounded-md bg-theme-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-theme-primary-hover"
              >
                Download PDF
              </Link>
            ) : null}
          </div>
        </div>

        <div className="pt-8">
          {document.type === "PDF" ? (
            <iframe
              title={document.title}
              src={`/office/projects/${project.slug}/documents/${document.id}/file`}
              className="h-[80vh] w-full rounded-lg border border-theme-border bg-white"
            />
          ) : document.type === "HTML" ? (
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
