import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, Minus } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { faqs, faqGroups } from "@/lib/data/faqs";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — VaultPath" },
      { name: "description", content: "Answers to common questions about VaultPath, the application process, loan programs, and rates." },
      { property: "og:title", content: "FAQ — VaultPath" },
      { property: "og:description", content: "Common questions, clearly answered." },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  const [q, setQ] = useState("");
  const [openKey, setOpenKey] = useState<string | null>(null);
  const filtered = useMemo(() => {
    const lower = q.trim().toLowerCase();
    if (!lower) return faqs;
    return faqs.filter((f) => f.question.toLowerCase().includes(lower) || f.answer.toLowerCase().includes(lower));
  }, [q]);

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
      />
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[color:var(--brand-muted)]" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Search FAQs"
              placeholder="Search questions…"
              className="w-full rounded-full border border-border bg-card py-3.5 pl-11 pr-4 text-sm"
            />
          </div>

          <div className="mt-10 space-y-10">
            {faqGroups.map((g) => {
              const items = filtered.filter((f) => f.group === g);
              if (!items.length) return null;
              return (
                <motion.div key={g} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                  <motion.h2 variants={fadeUp} className="font-display text-2xl font-semibold">{g}</motion.h2>
                  <ul className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
                    {items.map((f) => {
                      const key = `${g}:${f.question}`;
                      const isOpen = openKey === key;
                      return (
                        <motion.li variants={fadeUp} key={key}>
                          <button onClick={() => setOpenKey(isOpen ? null : key)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                            <span className="font-medium">{f.question}</span>
                            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary)]">
                              {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                            </span>
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                                <p className="px-5 pb-5 text-sm text-[color:var(--brand-muted)]">{f.answer}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.li>
                      );
                    })}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <CTABanner title="Still have questions?" subtitle="Talk to a real loan officer — no script, no pressure." ctaLabel="Contact us" />
    </>
  );
}