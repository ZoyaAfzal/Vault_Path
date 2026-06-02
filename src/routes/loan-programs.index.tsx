import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { loans, loanCategories } from "@/lib/data/loans";
import { LoanCard } from "@/components/cards/LoanCard";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export const Route = createFileRoute("/loan-programs/")({
  head: () => ({
    meta: [
      { title: "Loan Programs — VaultPath" },
      { name: "description", content: "Compare fixed-rate, adjustable, FHA, VA, jumbo, and refinance programs side-by-side." },
      { property: "og:title", content: "Loan Programs — VaultPath" },
      { property: "og:description", content: "Find the right mortgage for your needs." },
    ],
  }),
  component: LoanProgramsPage,
});

function LoanProgramsPage() {
  const [filter, setFilter] = useState<(typeof loanCategories)[number]>("All");
  const list = filter === "All" ? loans : loans.filter((l) => l.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Loan programs"
        title="Every program. One clear comparison."
        subtitle="Six core loan structures plus dozens of variations. Filter by purpose and pick the one that fits your plan."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Loan Programs" }]}
      />

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {loanCategories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${filter === c ? "border-[color:var(--brand-primary)] bg-[color:var(--brand-primary)] text-white" : "border-border bg-card text-[color:var(--brand-muted)] hover:text-foreground"}`}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((l) => (
              <motion.div key={l.slug} variants={fadeUp} className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-[color:var(--brand-primary)]/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-[color:var(--brand-primary)]">{l.category}</span>
                  <span className="text-xs text-[color:var(--brand-muted)]">{l.rate}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{l.name}</h3>
                <p className="mt-1 text-sm text-[color:var(--brand-muted)]">{l.tagline}</p>
                <ul className="mt-5 space-y-1.5 text-sm">
                  {l.benefits.slice(0, 3).map((b) => (
                    <li key={b} className="flex gap-2"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[color:var(--brand-primary)]" />{b}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to="/contact" search={{ loan: l.slug }} className="rounded-full bg-[color:var(--brand-primary)] px-4 py-2 text-sm font-semibold text-white">Get started</Link>
                  <Link to="/loan-programs/$slug" params={{ slug: l.slug }} className="rounded-full border border-border px-4 py-2 text-sm font-semibold">Learn more</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}