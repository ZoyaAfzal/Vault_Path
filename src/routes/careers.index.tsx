import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { jobs } from "@/lib/data/jobs";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export const Route = createFileRoute("/careers/")({
  head: () => ({
    meta: [
      { title: "Careers — VaultPath" },
      { name: "description", content: "Build your future with VaultPath. Open roles across lending, operations, and marketing." },
      { property: "og:title", content: "Careers — VaultPath" },
      { property: "og:description", content: "Join a team rebuilding the mortgage experience." },
    ],
  }),
  component: CareersPage,
});

const values = [
  { title: "Borrowers first", desc: "Every decision starts with what's right for the family across the table." },
  { title: "Own the outcome", desc: "We hire owners — people who close the loop and ship the work." },
  { title: "Learn out loud", desc: "Curiosity is required. So is sharing what you discover." },
];

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your future with us."
        subtitle="We're rebuilding the mortgage experience. Join a team that values craft, transparency, and the people we serve."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Careers" }]}
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <motion.div variants={fadeUp} key={v.title} className="rounded-2xl border border-border bg-card p-7">
                <h3 className="font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--brand-muted)]">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[color:var(--brand-surface)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Open roles</h2>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
            {jobs.map((j) => (
              <motion.div variants={fadeUp} key={j.slug} className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold">{j.title}</h3>
                  <div className="mt-1.5 flex flex-wrap gap-3 text-xs text-[color:var(--brand-muted)]">
                    <span className="inline-flex items-center gap-1"><Briefcase className="size-3" />{j.department}</span>
                    <span className="inline-flex items-center gap-1"><MapPin className="size-3" />{j.location}</span>
                    <span className="rounded-full bg-[color:var(--brand-primary)]/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-[color:var(--brand-primary)]">{j.type}</span>
                  </div>
                </div>
                <Link to="/careers/$slug" params={{ slug: j.slug }} className="inline-flex items-center gap-1.5 self-start rounded-full bg-[color:var(--brand-secondary)] px-5 py-2.5 text-sm font-semibold text-white sm:self-auto">
                  View details <ArrowRight className="size-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner title="Don't see your role?" subtitle="We're always looking for thoughtful people. Reach out anytime." ctaLabel="Say hello" />
    </>
  );
}