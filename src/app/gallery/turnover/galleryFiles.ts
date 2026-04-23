import fs from "node:fs";
import path from "node:path";

const PLACEHOLDER_IMAGES = [
  "/placeholders/interior-1.svg",
  "/placeholders/interior-2.svg",
  "/placeholders/interior-3.svg",
  "/placeholders/interior-1.svg",
  "/placeholders/interior-2.svg",
  "/placeholders/interior-3.svg",
];

function isImageFile(filename: string) {
  return /\.(png|jpe?g|webp|gif)$/i.test(filename);
}

export function getTurnoverGalleryImages() {
  const dir = path.join(process.cwd(), "public", "gallery", "turnover");
  if (!fs.existsSync(dir)) return PLACEHOLDER_IMAGES;

  const files = fs
    .readdirSync(dir)
    .filter((f) => !f.startsWith("."))
    .filter(isImageFile)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  if (files.length === 0) return PLACEHOLDER_IMAGES;
  return files.map((f) => `/gallery/turnover/${f}`);
}

export default getTurnoverGalleryImages();

