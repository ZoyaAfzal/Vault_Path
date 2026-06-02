import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";
import { BlogCard } from "../cards/BlogCard";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function BlogPreview() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="flex items-end justify-between gap-6">
          <div className="max-w-xl">
            <motion.span variants={fadeUp} className="text-xs uppercase tracking-widest text-[color:var(--brand-primary)]">From the blog</motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Guides, tips, and market notes</motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-primary)]">
              View all articles <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((p) => <BlogCard key={p.slug} post={p} />)}
        </motion.div>
      </div>
    </section>
  );
}