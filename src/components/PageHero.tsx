import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; to?: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--brand-secondary)] py-20 text-white sm:py-28">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -top-24 left-1/3 size-[420px] rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(closest-side, oklch(0.61 0.16 38), transparent)" }} />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <motion.nav variants={fadeUp} className="flex items-center gap-1.5 text-xs text-white/60" aria-label="Breadcrumb">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                {b.to ? <Link to={b.to} className="hover:text-white">{b.label}</Link> : <span className="text-white">{b.label}</span>}
                {i < breadcrumbs.length - 1 && <ChevronRight className="size-3" />}
              </span>
            ))}
          </motion.nav>
        )}
        {eyebrow && <motion.span variants={fadeUp} className="mt-6 inline-block text-xs uppercase tracking-widest text-[color:var(--brand-accent)]">{eyebrow}</motion.span>}
        <motion.h1 variants={fadeUp} className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
          {title}
        </motion.h1>
        {subtitle && <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-lg text-white/70">{subtitle}</motion.p>}
      </motion.div>
    </section>
  );
}