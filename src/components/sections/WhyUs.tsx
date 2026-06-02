import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Clock, BadgePercent, Users, MessageSquare } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import whyUsInterior from "@/assets/why-us-interior.jpg";

const features = [
  { icon: BadgePercent, title: "Transparent pricing", desc: "Every fee itemized upfront, no surprises at the closing table." },
  { icon: ShieldCheck, title: "Licensed in 38 states", desc: "Wherever you are, we can help you finance your home." },
  { icon: Clock, title: "Fast closings", desc: "Most loans close in 21-30 days from application to keys." },
  { icon: Users, title: "Dedicated team", desc: "One loan officer, one processor, one closer for your whole journey." },
  { icon: Sparkles, title: "Smart tech, human touch", desc: "Modern tooling for speed; real humans for every decision." },
  { icon: MessageSquare, title: "Always reachable", desc: "Average response time under 2 hours, 7 days a week." },
];

export function WhyUs() {
  return (
    <section className="relative bg-background py-24 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-[600px] rounded-full bg-[color:var(--brand-primary)]/5 blur-3xl opacity-50" />
      
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          <motion.div variants={fadeUp} className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop"
              alt="Professional team collaborating on mortgage solutions"
              width={1400}
              height={1600}
              className="size-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-secondary)]/40 via-transparent to-transparent" />
            
            <div className="absolute inset-0 border-[12px] border-white/10 rounded-[2.5rem] pointer-events-none" />
          </motion.div>
          
          <motion.div
            variants={fadeUp}
            className="absolute -bottom-8 -right-4 hidden w-72 rounded-3xl border border-border bg-card/80 p-6 shadow-2xl backdrop-blur-md sm:block"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="size-10 rounded-full bg-[color:var(--brand-primary)]/10 flex items-center justify-center text-[color:var(--brand-primary)]">
                <Clock className="size-5" />
              </div>
              <div className="text-xs uppercase tracking-widest text-[color:var(--brand-muted)]">Average closing</div>
            </div>
            <div className="mt-1 font-display text-4xl font-semibold text-[color:var(--brand-secondary)]">24 days</div>
            <div className="mt-2 text-xs text-[color:var(--brand-muted)] font-medium flex items-center gap-1">
              <span className="text-emerald-600 font-bold">↑ 46% faster</span> vs. industry average
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary)] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="size-3" /> Why VaultPath
          </motion.div>
          <motion.h2 variants={fadeUp} className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Built for people, <span className="text-[color:var(--brand-primary)]">not paperwork</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg text-[color:var(--brand-muted)] leading-relaxed">
            We obsess over the parts of mortgages that usually feel broken clarity, speed, and access — so the process feels less like a transaction and more like a partnership.
          </motion.p>
          <motion.ul variants={staggerContainer} className="mt-10 grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <motion.li 
                variants={fadeUp} 
                key={f.title} 
                className="group relative flex gap-4 p-4 rounded-2xl transition-all hover:bg-white hover:shadow-xl hover:shadow-[color:var(--brand-primary)]/5"
              >
                <div className="mt-1 size-10 shrink-0 rounded-xl bg-[color:var(--brand-surface)] flex items-center justify-center transition-colors group-hover:bg-[color:var(--brand-primary)] group-hover:text-white">
                  <f.icon className="size-5" />
                </div>
                <div>
                  <div className="font-display text-base font-semibold group-hover:text-[color:var(--brand-primary)] transition-colors">
                    {f.title}
                  </div>
                  <p className="mt-1 text-sm text-[color:var(--brand-muted)] leading-snug">{f.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}