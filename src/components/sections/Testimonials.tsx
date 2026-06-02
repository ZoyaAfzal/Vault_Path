import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const reviews = [
  { quote: "VaultPath made our first home purchase feel possible. Kira walked us through every step and we closed in 22 days.", name: "Jamie & Ryan T.", loan: "FHA Loan" },
  { quote: "I refinanced twice with David. Saved nearly $400/month combined. He's a genuine advocate.", name: "Priya S.", loan: "Refinancing" },
  { quote: "As a Navy veteran, I felt like Marcus actually understood my situation. Zero down, smooth close, real people.", name: "Carlos M.", loan: "VA Loan" },
  { quote: "Elena structured a complex jumbo loan for our new home in under three weeks. Pure professionalism.", name: "Hannah & Wes B.", loan: "Jumbo Loan" },
];

export function Testimonials() {
  return (
    <section className="bg-[color:var(--brand-surface)] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="flex items-end justify-between gap-6">
          <div>
            <motion.span variants={fadeUp} className="text-xs uppercase tracking-widest text-[color:var(--brand-primary)]">Testimonials</motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Words from real homeowners</motion.h2>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 flex gap-6 overflow-x-auto pb-4 [scrollbar-width:thin] snap-x snap-mandatory"
        >
          {reviews.map((r) => (
            <motion.figure
              key={r.name}
              variants={fadeUp}
              className="snap-start w-[85%] shrink-0 rounded-2xl border border-border bg-card p-7 sm:w-[420px]"
            >
              <div className="flex gap-1 text-[color:var(--brand-accent)]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 font-display text-lg leading-snug text-foreground">"{r.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center justify-between text-sm">
                <span className="font-semibold">{r.name}</span>
                <span className="rounded-full bg-[color:var(--brand-primary)]/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-[color:var(--brand-primary)]">{r.loan}</span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}