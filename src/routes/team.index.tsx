import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { team } from "@/lib/data/team";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/team/")({
  head: () => ({
    meta: [
      { title: "Our Team — VaultPath" },
      { name: "description", content: "Meet the licensed loan officers and specialists guiding your mortgage from application to keys." },
      { property: "og:title", content: "Our Team — VaultPath" },
      { property: "og:description", content: "Meet the people behind your loan." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="The team"
        title="Meet the people behind your loan."
        subtitle="Forty-plus licensed professionals, hand-picked for product expertise and human judgment."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Team" }]}
      />
      <section className="bg-background py-20">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {team.map((m) => (
            <motion.div variants={fadeUp} key={m.slug} className="group rounded-2xl border border-border bg-card p-7">
              <div className="flex items-center gap-4">
                <div
                  className="grid size-16 place-items-center rounded-full font-display text-xl font-semibold text-white"
                  style={{ background: `linear-gradient(135deg, ${m.accent}, oklch(0.18 0.03 270))` }}
                >
                  {m.initials}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{m.name}</h3>
                  <div className="text-sm text-[color:var(--brand-muted)]">{m.role}</div>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {m.specialties.map((s) => (
                  <span key={s} className="rounded-full bg-[color:var(--brand-primary)]/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-[color:var(--brand-primary)]">{s}</span>
                ))}
              </div>
              <Link to="/team/$slug" params={{ slug: m.slug }} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-primary)]">
                View profile <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <CTABanner />
    </>
  );
}