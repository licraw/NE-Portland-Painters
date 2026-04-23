import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug, getPostTitleText } from "@/lib/blog";
import { getBaseMetadata, siteConfig } from "@/lib/siteConfig";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return getBaseMetadata("Blog", undefined, "/blog");
  return getBaseMetadata(getPostTitleText(post), undefined, `/blog/${post.slug}`);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="px-6 lg:px-20 py-12 lg:py-20">
      <Link href="/blog" className="text-theme-text-muted underline">
        ← Back to blog
      </Link>

      <h1
        style={{
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
          fontWeight: 500,
          lineHeight: "1.2",
        }}
        className="pt-6 font-sans font-medium text-4xl lg:text-7xl leading-[1.2]"
        dangerouslySetInnerHTML={{ __html: post.titleHtml }}
      />

      <p className="pt-4 text-theme-text-muted">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {post.coverImage ? (
        <div className="mt-10 relative w-full h-[420px] rounded-2xl overflow-hidden border border-theme-border shadow-sm">
          <Image
            src={post.coverImage}
            alt={getPostTitleText(post)}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      ) : null}

      <div
        className="blog-content pt-10"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <div className="pt-12">
        <Link
          href="/estimate"
          className="inline-flex items-center rounded-full px-8 py-4 text-lg font-semibold theme-primary-button"
        >
          Get a Free Quote
        </Link>
      </div>
    </article>
  );
}
