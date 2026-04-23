"use client";

import { useEffect } from "react";

const TRANSPARENT_PIXEL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

function hashString(input: string) {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function placeholderColors(key: string) {
  const h = hashString(key) % 360;
  const bg = `hsl(${h} 55% 85%)`;
  const border = `hsl(${h} 55% 65%)`;
  return { bg, border };
}

function processImg(img: HTMLImageElement) {
  const alreadyPlaceholder = img.dataset.placeholderized === "true";

  const key =
    img.dataset.placeholderKey ||
    img.currentSrc ||
    img.src ||
    img.getAttribute("src") ||
    img.alt ||
    "img";
  const { bg, border } = placeholderColors(key);

  if (!alreadyPlaceholder) {
    img.dataset.placeholderized = "true";
    img.dataset.placeholderKey = key;
  }
  img.style.setProperty("--img-placeholder-bg", bg);
  img.style.setProperty("--img-placeholder-border", border);

  img.removeAttribute("srcset");
  img.removeAttribute("sizes");
  if (img.src !== TRANSPARENT_PIXEL) img.src = TRANSPARENT_PIXEL;
}

function processBackground(el: HTMLElement) {
  const alreadyPlaceholder = el.dataset.bgPlaceholderized === "true";
  const bgImage = getComputedStyle(el).backgroundImage;
  if (!bgImage || bgImage === "none") return;
  if (!bgImage.includes("url(")) return;

  const key = el.dataset.bgPlaceholderKey || bgImage;
  const { bg, border } = placeholderColors(key);
  if (!alreadyPlaceholder) {
    el.dataset.bgPlaceholderized = "true";
    el.dataset.bgPlaceholderKey = key;
  }
  el.style.setProperty("--bg-placeholder-bg", bg);
  el.style.setProperty("--bg-placeholder-border", border);
  if (el.style.backgroundImage !== "none") el.style.backgroundImage = "none";
}

function processRoot(root: ParentNode) {
  root.querySelectorAll("img").forEach((img) => processImg(img as HTMLImageElement));
  root
    .querySelectorAll<HTMLElement>("*")
    .forEach((el) => processBackground(el));
}

export default function ImagePlaceholderMode() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const html = document.documentElement;
    if (html.dataset.imagePlaceholders !== "true") return;

    processRoot(document);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          processRoot(node);
        });

        if (mutation.type === "attributes") {
          const target = mutation.target;
          if (target instanceof HTMLImageElement) processImg(target);
          if (target instanceof HTMLElement) processBackground(target);
        }
      }
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["src", "srcset", "style", "class"],
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
