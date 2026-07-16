import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { requireOfficeAuth } from "../../../../../_lib/auth";
import { getOfficeProject } from "../../../../projectData";

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

const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;
const MARGIN_X = 54;
const MARGIN_Y = 54;

type PdfFont = "regular" | "bold" | "mono";

type PdfLine = {
  text: string;
  font: PdfFont;
  fontSize: number;
  lineHeight: number;
  indent?: number;
  gapBefore?: number;
  gapAfter?: number;
};

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function htmlToMarkdownish(source: string) {
  return decodeHtmlEntities(
    source
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, "# $1\n\n")
      .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, "## $1\n\n")
      .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, "### $1\n\n")
      .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, "#### $1\n\n")
      .replace(/<li[^>]*>/gi, "- ")
      .replace(/<\/li>/gi, "\n")
      .replace(/<\/tr>/gi, "\n")
      .replace(/<t[dh][^>]*>/gi, " | ")
      .replace(/<\/t[dh]>/gi, "")
      .replace(/<\/(p|div|section|article)>/gi, "\n\n")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<strong[^>]*>|<b[^>]*>/gi, "**")
      .replace(/<\/strong>|<\/b>/gi, "**")
      .replace(/<[^>]+>/g, "")
  );
}

function normalizeForPdf(value: string) {
  return value
    .replace(/\r\n?/g, "\n")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[–—]/g, "-")
    .replace(/✓/g, "Yes")
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{4,}/g, "\n\n\n")
    .trim();
}

function stripMarkdownInline(value: string) {
  return value
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();
}

function isTableSeparator(line: string) {
  return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
}

function tableRowToText(line: string) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => stripMarkdownInline(cell).trim())
    .join(" | ");
}

function lineIsBold(line: string) {
  return /^\*\*.+\*\*$/.test(line.trim()) || /\*\*Total/i.test(line);
}

function lineStyleForHeading(level: number) {
  if (level === 1) {
    return { fontSize: 24, lineHeight: 30, gapBefore: 0, gapAfter: 10 };
  }

  if (level === 2) {
    return { fontSize: 17, lineHeight: 22, gapBefore: 16, gapAfter: 6 };
  }

  return { fontSize: 13, lineHeight: 18, gapBefore: 10, gapAfter: 4 };
}

function maxCharsForLine(fontSize: number, font: PdfFont, indent = 0) {
  const width = PAGE_WIDTH - MARGIN_X * 2 - indent;
  const factor = font === "mono" ? 0.6 : 0.52;

  return Math.max(24, Math.floor(width / (fontSize * factor)));
}

function wrapStyledLine(line: PdfLine) {
  const maxChars = maxCharsForLine(line.fontSize, line.font, line.indent);
  const wrapped: PdfLine[] = [];
  let remaining = line.text;

  if (!remaining) {
    return [{ ...line }];
  }

  while (remaining.length > maxChars) {
    const breakAt = remaining.lastIndexOf(" ", maxChars);
    const splitAt = breakAt > 24 ? breakAt : maxChars;

    wrapped.push({
      ...line,
      text: remaining.slice(0, splitAt).trimEnd(),
    });
    remaining = remaining.slice(splitAt).trimStart();
  }

  wrapped.push({ ...line, text: remaining });
  return wrapped;
}

function parseMarkdownLines(source: string, fallbackTitle: string) {
  const lines = normalizeForPdf(source).split("\n");
  const parsed: PdfLine[] = [];

  for (let index = 0; index < lines.length; index += 1) {
    const rawLine = lines[index];
    const trimmed = rawLine.trim();

    if (!trimmed) {
      parsed.push({
        text: "",
        font: "regular",
        fontSize: 11,
        lineHeight: 8,
      });
      continue;
    }

    if (isTableSeparator(trimmed)) {
      continue;
    }

    const heading = /^(#{1,6})\s+(.+)$/.exec(trimmed);

    if (heading) {
      const level = heading[1].length;
      parsed.push({
        text: stripMarkdownInline(heading[2]),
        font: "bold",
        ...lineStyleForHeading(level),
      });
      continue;
    }

    if (trimmed.startsWith("|")) {
      parsed.push({
        text: tableRowToText(trimmed),
        font: lineIsBold(trimmed) ? "bold" : "mono",
        fontSize: 9,
        lineHeight: 12,
        gapBefore:
          index > 0 && !lines[index - 1].trim().startsWith("|") ? 4 : 0,
      });
      continue;
    }

    const bullet = /^[-*+]\s+(.+)$/.exec(trimmed);

    if (bullet) {
      parsed.push({
        text: `- ${stripMarkdownInline(bullet[1])}`,
        font: "regular",
        fontSize: 11,
        lineHeight: 15,
        indent: 16,
      });
      continue;
    }

    parsed.push({
      text: stripMarkdownInline(trimmed),
      font: lineIsBold(trimmed) ? "bold" : "regular",
      fontSize: 11,
      lineHeight: 15,
    });
  }

  const hasHeading = parsed.some((line) => line.font === "bold" && line.fontSize >= 17);

  if (!hasHeading) {
    parsed.unshift({
      text: fallbackTitle,
      font: "bold",
      ...lineStyleForHeading(1),
    });
  }

  return parsed.flatMap(wrapStyledLine);
}

function fontResourceName(font: PdfFont) {
  if (font === "bold") {
    return "F2";
  }

  if (font === "mono") {
    return "F3";
  }

  return "F1";
}

function escapePdfText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function paginate(lines: PdfLine[]) {
  const pages: PdfLine[][] = [[]];
  let y = PAGE_HEIGHT - MARGIN_Y;

  for (const line of lines) {
    const height = (line.gapBefore ?? 0) + line.lineHeight + (line.gapAfter ?? 0);

    if (pages[pages.length - 1].length > 0 && y - height < MARGIN_Y) {
      pages.push([]);
      y = PAGE_HEIGHT - MARGIN_Y;
    }

    pages[pages.length - 1].push(line);
    y -= height;
  }

  return pages;
}

function createContentStream(lines: PdfLine[]) {
  let y = PAGE_HEIGHT - MARGIN_Y;
  const commands: string[] = [];

  for (const line of lines) {
    y -= line.gapBefore ?? 0;

    if (line.text) {
      const x = MARGIN_X + (line.indent ?? 0);

      commands.push(
        "BT",
        `/${fontResourceName(line.font)} ${line.fontSize} Tf`,
        `${x} ${y} Td`,
        `(${escapePdfText(line.text)}) Tj`,
        "ET"
      );
    }

    y -= line.lineHeight + (line.gapAfter ?? 0);
  }

  return commands.join("\n");
}

function createPdf(lines: PdfLine[]) {
  const pages = paginate(lines);
  const objects: string[] = [];

  function addObject(content: string) {
    objects.push(content);
    return objects.length;
  }

  const catalogId = addObject("<< /Type /Catalog /Pages 2 0 R >>");
  const pagesId = addObject("");
  const pageIds: number[] = [];

  for (const pageLines of pages) {
    const contentStream = createContentStream(pageLines);
    const contentId = addObject(
      `<< /Length ${Buffer.byteLength(contentStream, "utf8")} >>\nstream\n${contentStream}\nendstream`
    );
    const pageId = addObject(
      `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> /F2 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >> /F3 << /Type /Font /Subtype /Type1 /BaseFont /Courier >> >> >> /Contents ${contentId} 0 R >>`
    );

    pageIds.push(pageId);
  }

  objects[pagesId - 1] =
    `<< /Type /Pages /Kids [${pageIds
      .map((pageId) => `${pageId} 0 R`)
      .join(" ")}] /Count ${pageIds.length} >>`;

  const chunks = ["%PDF-1.4\n"];
  const offsets = [0];
  let currentOffset = Buffer.byteLength(chunks[0], "utf8");

  objects.forEach((object, index) => {
    offsets.push(currentOffset);
    const chunk = `${index + 1} 0 obj\n${object}\nendobj\n`;
    chunks.push(chunk);
    currentOffset += Buffer.byteLength(chunk, "utf8");
  });

  const xrefOffset = currentOffset;
  const xrefRows = offsets
    .map((offset, index) =>
      index === 0
        ? "0000000000 65535 f "
        : `${String(offset).padStart(10, "0")} 00000 n `
    )
    .join("\n");

  chunks.push(
    `xref\n0 ${objects.length + 1}\n${xrefRows}\ntrailer\n<< /Size ${
      objects.length + 1
    } /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`
  );

  return Buffer.from(chunks.join(""), "utf8");
}

function pdfFilename(filename: string) {
  return filename.replace(/\.[^.]+$/, ".pdf");
}

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ slug: string; documentId: string }>;
  }
) {
  const requestUrl = new URL(request.url);
  await requireOfficeAuth(`${requestUrl.pathname}${requestUrl.search}`);

  const { slug, documentId } = await params;
  const project = getOfficeProject(slug);
  const document = project?.documents.find((item) => item.id === documentId);

  if (!project || !document || document.type === "PDF") {
    notFound();
  }

  const reportsDir = getReportsDir(project.reportsFolder);
  const filePath = path.join(reportsDir, document.filename);

  if (!filePath.startsWith(reportsDir) || !fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf8");
  const markdownish =
    document.type === "HTML" ? htmlToMarkdownish(source) : source;
  const file = createPdf(parseMarkdownLines(markdownish, document.title));

  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${pdfFilename(
        document.filename
      )}"`,
    },
  });
}
