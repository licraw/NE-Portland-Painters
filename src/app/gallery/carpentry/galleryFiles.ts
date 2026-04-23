import fs from "node:fs";
import path from "node:path";

const PLACEHOLDER_IMAGES = [
  "/gallery/carpentry1.jpg",
  "/gallery/carpentry2.jpg",
  "/gallery/carpentry3.jpg",
  "/gallery/carpentry1.jpg",
  "/gallery/carpentry2.jpg",
  "/gallery/carpentry3.jpg",
];

function isImageFile(filename: string) {
  return /\.(png|jpe?g|webp|gif)$/i.test(filename);
}

export function getCarpentryGalleryImages() {
  const dir = path.join(process.cwd(), "public", "gallery", "carpentry");
  if (!fs.existsSync(dir)) return PLACEHOLDER_IMAGES;

  const files = fs
    .readdirSync(dir)
    .filter((f) => !f.startsWith("."))
    .filter(isImageFile)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  if (files.length === 0) return PLACEHOLDER_IMAGES;
  return files.map((f) => `/gallery/carpentry/${f}`);
}

export default getCarpentryGalleryImages();

