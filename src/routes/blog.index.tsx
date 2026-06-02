import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { BlogCard } from "@/components/cards/BlogCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { blogPosts, blogCategories } from "@/lib/data/blog";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — VaultPath" },
      { name: "description", content: "Guides, market notes, and tips from VaultPath's mortgage experts." },
      { property: "og:title", content: "Blog — VaultPath" },
      { property: "og:description", content: "Insights for buyers, refinancers, and homeowners." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [cat, setCat] = useState<(typeof blogCategories)[number]>("All");
  const list = cat === "All" ? blogPosts : blogPosts.filter((p) => p.category === cat);

  return (
    <>
      <PageHero
        eyebrow="The blog"
        title="Guides, market notes, and tips"
        subtitle="Practical insights from people who've closed thousands of loans."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]}
      />
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${cat === c ? "border-[color:var(--brand-primary)] bg-[color:var(--brand-primary)] text-white" : "border-border bg-card text-[color:var(--brand-muted)] hover:text-foreground"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => <BlogCard key={p.slug} post={p} />)}
          </motion.div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}