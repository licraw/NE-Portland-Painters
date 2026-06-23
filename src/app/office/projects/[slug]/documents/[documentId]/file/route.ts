import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { requireOfficeAuth } from "../../../../../_lib/auth";
import { getOfficeProject } from "../../../../projectData";

const REPORTS_DIR = path.join(
  process.cwd(),
  "src",
  "app",
  "office",
  "ppe-estimate1",
  "reports"
);

export async function GET(
  _request: Request,
  {
    params,
  }: {
    params: Promise<{ slug: string; documentId: string }>;
  }
) {
  await requireOfficeAuth();

  const { slug, documentId } = await params;
  const project = getOfficeProject(slug);
  const document = project?.documents.find((item) => item.id === documentId);

  if (!project || !document || document.type !== "PDF") {
    notFound();
  }

  const filePath = path.join(REPORTS_DIR, document.filename);

  if (!filePath.startsWith(REPORTS_DIR) || !fs.existsSync(filePath)) {
    notFound();
  }

  const file = fs.readFileSync(filePath);

  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${document.filename}"`,
    },
  });
}
