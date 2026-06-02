import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { blogPosts } from "@/lib/data/blog";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — VaultPath` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="grid min-h-[60vh] place-items-center px-4 text-center">
      <div>
        <h1 className="font-display text-3xl">Article not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-[color:var(--brand-primary)]">← Back to blog</Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="grid min-h-[60vh] place-items-center px-4 text-center">
      <div>
        <h1 className="font-display text-3xl">Something went wrong</h1>
        <button onClick={reset} className="mt-4 text-[color:var(--brand-primary)]">Try again</button>
      </div>
    </div>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        subtitle={`${post.readTime} · ${new Date(post.date).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })}`}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: post.title }]}
      />

      <section className="bg-background py-20">
        <motion.article variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mx-auto max-w-2xl px-4 sm:px-6">
          {post.content.split("\n\n").map((para: string, i: number) => (
            <motion.p variants={fadeUp} key={i} className="mt-4 text-lg leading-relaxed text-foreground first:mt-0">
              {para}
            </motion.p>
          ))}

          <motion.div variants={fadeUp} className="mt-12 flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
            <div className="grid size-12 place-items-center rounded-full bg-[color:var(--brand-primary)]/15 font-display text-base font-semibold text-[color:var(--brand-primary)]">
              {post.author.initials}
            </div>
            <div>
              <div className="font-display text-base font-semibold">{post.author.name}</div>
              <div className="text-sm text-[color:var(--brand-muted)]">{post.author.role}</div>
            </div>
          </motion.div>

          <div className="mt-10">
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-[color:var(--brand-primary)]">
              <ArrowLeft className="size-4" /> Back to blog
            </Link>
          </div>
        </motion.article>
      </section>

      <section className="bg-[color:var(--brand-surface)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold">Related articles</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                <div className="text-[10px] font-medium uppercase tracking-widest text-[color:var(--brand-primary)]">{p.category}</div>
                <h3 className="mt-2 font-display text-lg font-semibold group-hover:text-[color:var(--brand-primary)]">{p.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--brand-muted)] line-clamp-2">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}