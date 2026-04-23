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

  return {
    slug,
    titleHtml,
    excerptHtml,
    date,
    coverImage,
    contentHtml: parsed.content.trim(),
  };
}

export function getPostTitleText(post: Pick<BlogPost, "titleHtml">) {
  return stripHtml(post.titleHtml);
}

