import fs from "node:fs";
import path from "node:path";

const PLACEHOLDER_IMAGES = [
  "/placeholders/exterior-1.svg",
  "/placeholders/exterior-2.svg",
  "/placeholders/exterior-3.svg",
  "/placeholders/exterior-1.svg",
  "/placeholders/exterior-2.svg",
  "/placeholders/exterior-3.svg",
];

function isImageFile(filename: string) {
  return /\.(png|jpe?g|webp|gif)$/i.test(filename);
}

export function getPowerwashingGalleryImages() {
  const dir = path.join(process.cwd(), "public", "gallery", "powerwashing");
  if (!fs.existsSync(dir)) return PLACEHOLDER_IMAGES;

  const files = fs
    .readdirSync(dir)
    .filter((f) => !f.startsWith("."))
    .filter(isImageFile)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  if (files.length === 0) return PLACEHOLDER_IMAGES;
  return files.map((f) => `/gallery/powerwashing/${f}`);
}

export default getPowerwashingGalleryImages();

