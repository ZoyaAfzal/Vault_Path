import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Sparkles, ShieldCheck, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — VaultPath" },
      { name: "description", content: "VaultPath is a modern mortgage brokerage built on transparency, speed, and human guidance." },
      { property: "og:title", content: "About — VaultPath" },
      { property: "og:description", content: "Mortgages built around people, not paperwork." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Transparency first", desc: "Every rate, every fee, every step — clearly disclosed before you commit." },
  { icon: Heart, title: "People over paperwork", desc: "Our team takes the time to explain, so every borrower understands what they're signing." },
  { icon: Sparkles, title: "Built for speed", desc: "Modern tech and disciplined operations move you from application to keys faster." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="A brokerage built around people, not paperwork."
        subtitle="VaultPath was founded in 2012 by mortgage veterans who were tired of an industry that treated borrowers like file numbers. We rebuilt the experience around clarity, speed, and care."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="lg:col-span-2">
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-semibold sm:text-4xl">A decade of helping families home.</motion.h2>
            <motion.div variants={fadeUp} className="prose mt-6 max-w-none text-[color:var(--brand-muted)]">
              <p>What started as a two-person operation in San Francisco has grown into a team of 40+ licensed professionals serving borrowers across 38 states. We've funded over $2.4 billion in loans and helped 4,800 families step into homes they love.</p>
              <p className="mt-4">We're a broker — not a bank — which means we shop dozens of lenders to find your best rate and structure. No house product to push, no quota to meet. Just the right loan for your life.</p>
            </motion.div>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="space-y-4">
            {[
              { v: "$2.4B+", l: "Loans funded" },
              { v: "4,800+", l: "Families served" },
              { v: "4.9★", l: "Avg. client rating" },
              { v: "38", l: "States licensed" },
            ].map((s) => (
              <motion.div variants={fadeUp} key={s.l} className="rounded-2xl border border-border bg-card p-5">
                <div className="font-display text-3xl font-semibold">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-[color:var(--brand-muted)]">{s.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[color:var(--brand-surface)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="max-w-2xl">
            <motion.span variants={fadeUp} className="text-xs uppercase tracking-widest text-[color:var(--brand-primary)]">Our values</motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Three things we never compromise on.</motion.h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <motion.div variants={fadeUp} key={v.title} className="rounded-2xl border border-border bg-card p-7">
                <span className="grid size-12 place-items-center rounded-xl bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary)]">
                  <v.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--brand-muted)]">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}