import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { loans } from "@/lib/data/loans";
import { LoanCard } from "../cards/LoanCard";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

export function LoanPrograms() {
  return (
    <section className="bg-[color:var(--brand-surface)] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="max-w-2xl">
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-widest text-[color:var(--brand-primary)]">Loan programs</motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Find the right loan for your needs
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-[color:var(--brand-muted)]">
            Six core programs and dozens of structures. We help you compare apples to apples — and pick the one that actually fits your life.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {loans.map((l) => (
            <LoanCard key={l.slug} loan={l} />
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link to="/loan-programs" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-secondary)]/15 px-6 py-3 text-sm font-semibold text-[color:var(--brand-secondary)] hover:bg-[color:var(--brand-secondary)] hover:text-white">
            View all programs <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}