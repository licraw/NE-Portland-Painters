import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, getPostTitleText } from "@/lib/blog";
import { getBaseMetadata, siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = getBaseMetadata(
  "Blog",
  `Painting and home improvement tips from ${siteConfig.siteName}.`,
  "/blog"
);

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="px-6 lg:px-20 py-12 lg:py-20">
      <h1
        className="font-sans font-medium text-4xl lg:text-7xl leading-[1.2]"
      >
        {siteConfig.siteName} Blog
      </h1>

      <div className="pt-10 space-y-6">
        {posts.length === 0 ? (
          <p className="text-theme-text-muted">No posts imported yet.</p>
        ) : (
          posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-theme-border bg-theme-surface shadow-sm overflow-hidden"
            >
              {post.coverImage ? (
                <div className="relative w-full h-64">
                  <Image
                    src={post.coverImage}
                    alt={getPostTitleText(post)}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              ) : null}
              <div className="p-8">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold theme-primary-button"
                >
                  View Post
                </Link>
                <h2 className="pt-5 text-2xl lg:text-3xl font-semibold">
                  <Link
                    href={`/blog/${post.slug}`}
                    dangerouslySetInnerHTML={{ __html: post.titleHtml }}
                  />
                </h2>
                <p className="pt-3 text-theme-text-muted">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                {post.excerptHtml ? (
                  <div
                    className="pt-5 text-theme-text-muted blog-content"
                    dangerouslySetInnerHTML={{ __html: post.excerptHtml }}
                  />
                ) : null}
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
