import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  titleHtml: string;
  excerptHtml: string;
  date: string; // ISO string
  coverImage?: string;
  contentHtml: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function normalizeImageKey(url: string) {
  const clean = String(url ?? "").split("?")[0].trim();
  if (!clean) return "";
  const fileName = clean.split("/").pop() ?? "";
  return fileName.replace(/-\d+x\d+(?=\.)/g, "").toLowerCase();
}

function stripLeadingDuplicateCoverImage(contentHtml: string, coverImage?: string) {
  if (!coverImage) return contentHtml;

  const coverKey = normalizeImageKey(coverImage);
  if (!coverKey) return contentHtml;

  const trimmed = contentHtml.trimStart();
  const head = trimmed.slice(0, 4000);
  const firstImgMatch = head.match(/<img\b[^>]*\bsrc="([^"]+)"/i);
  if (!firstImgMatch) return contentHtml;

  const firstImgKey = normalizeImageKey(firstImgMatch[1]);
  if (!firstImgKey || firstImgKey !== coverKey) return contentHtml;

  const leadingBlocks: RegExp[] = [
    /^\s*<div\b[^>]*wp-block-image[^>]*>[\s\S]*?<\/div>\s*/i,
    /^\s*(?:<p[^>]*>\s*)?<figure\b[\s\S]*?<\/figure>\s*(?:<\/p>)?\s*/i,
    /^\s*<p[^>]*>\s*<img\b[\s\S]*?<\/p>\s*/i,
  ];

  for (const re of leadingBlocks) {
    const m = trimmed.match(re);
    if (!m) continue;
    const block = m[0];
    const blockImgMatch = block.match(/<img\b[^>]*\bsrc="([^"]+)"/i);
    if (!blockImgMatch) continue;
    if (normalizeImageKey(blockImgMatch[1]) !== coverKey) continue;
    return trimmed.slice(block.length).trimStart();
  }

  return contentHtml;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const slugs = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p));

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);

  const titleHtml = String(parsed.data.title_html ?? "");
  const excerptHtml = String(parsed.data.excerpt_html ?? "");
  const date = String(parsed.data.date ?? "");
  const coverImage = parsed.data.cover_image ? String(parsed.data.cover_image) : undefined;
  const contentHtml = stripLeadingDuplicateCoverImage(parsed.content.trim(), coverImage);

  return {
    slug,
    titleHtml,
    excerptHtml,
    date,
    coverImage,
    contentHtml,
  };
}

export function getPostTitleText(post: Pick<BlogPost, "titleHtml">) {
  return stripHtml(post.titleHtml);
}
