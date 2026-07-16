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

  if (!project || !document || document.type !== "PDF") {
    notFound();
  }

  const reportsDir = getReportsDir(project.reportsFolder);
  const filePath = path.join(reportsDir, document.filename);

  if (!filePath.startsWith(reportsDir) || !fs.existsSync(filePath)) {
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
