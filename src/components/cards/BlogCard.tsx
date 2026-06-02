import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/data/blog";
import { fadeUp } from "@/lib/motion";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.article variants={fadeUp} className="group">
      <Link to="/blog/$slug" params={{ slug: post.slug }} className="block">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[color:var(--brand-secondary)] to-[color:var(--brand-primary)] ring-1 ring-border">
          <div className="size-full transition-transform duration-500 group-hover:scale-105 [background-image:radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:18px_18px]" />
        </div>
        <div className="mt-4 flex items-center gap-3 text-xs">
          <span className="rounded-full bg-[color:var(--brand-primary)]/10 px-2.5 py-1 font-medium uppercase tracking-widest text-[color:var(--brand-primary)]">{post.category}</span>
          <span className="text-[color:var(--brand-muted)]">{post.readTime}</span>
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-foreground group-hover:text-[color:var(--brand-primary)]">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-[color:var(--brand-muted)]">{post.excerpt}</p>
        <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-primary)]">
          Read article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.article>
  );
}