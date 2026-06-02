import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/data/faqs";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function FAQSection({ items, showCTA = true }: { items?: typeof faqs; showCTA?: boolean }) {
  const list = (items ?? faqs).slice(0, 6);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center">
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-widest text-[color:var(--brand-primary)]">FAQ</motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Questions, answered</motion.h2>
        </motion.div>

        <motion.ul variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
          {list.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.li variants={fadeUp} key={f.question}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-semibold">{f.question}</span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary)]">
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-[color:var(--brand-muted)]">{f.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </motion.ul>

        {showCTA && (
          <div className="mt-10 text-center">
            <Link to="/faq" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-primary)]">
              View all FAQs <ArrowRight className="size-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}