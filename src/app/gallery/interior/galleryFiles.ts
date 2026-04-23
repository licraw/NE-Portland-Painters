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

export function getInteriorGalleryImages() {
  const dir = path.join(process.cwd(), "public", "gallery", "interior");
  if (!fs.existsSync(dir)) return PLACEHOLDER_IMAGES;

  const files = fs
    .readdirSync(dir)
    .filter((f) => !f.startsWith("."))
    .filter(isImageFile)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  if (files.length === 0) return PLACEHOLDER_IMAGES;
  return files.map((f) => `/gallery/interior/${f}`);
}

const images = getInteriorGalleryImages();

export const interiorServiceGalleryOneImages = images.slice(0, 12);
export const interiorServiceGalleryTwoImages = images.slice(12, 24);

export default images;
