import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { FileText, Search, CheckCircle2, Key } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const steps = [
  { icon: FileText, title: "Apply Online", desc: "A 10-minute application, no commitment required." },
  { icon: Search, title: "Review Options", desc: "We shop dozens of lenders and present you the best fits." },
  { icon: CheckCircle2, title: "Get Approved", desc: "Underwriting in days, not weeks. Clear status at every step." },
  { icon: Key, title: "Close & Move In", desc: "We coordinate with title, escrow, and your agent through closing." },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--brand-secondary)] py-24 text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1573164067507-406cd3ad65a7?q=80&w=1600&auto=format&fit=crop" 
          alt="Professional handshake" 
          className="size-full object-cover opacity-10 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--brand-secondary)] via-[color:var(--brand-secondary)]/90 to-[color:var(--brand-secondary)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="max-w-2xl">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[color:var(--brand-accent)] font-bold">
            <span className="h-px w-8 bg-[color:var(--brand-accent)]" /> How it works
          </motion.div>
          <motion.h2 variants={fadeUp} className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Four steps from <span className="italic text-[color:var(--brand-accent)]">"what if"</span> to <span className="italic text-[color:var(--brand-primary)]">"welcome home"</span>
          </motion.h2>
        </motion.div>

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-20 grid gap-8 lg:grid-cols-4"
        >
          {steps.map((s, i) => (
            <motion.li 
              variants={fadeUp} 
              key={s.title} 
              className="group relative p-8 rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="grid size-14 place-items-center rounded-2xl bg-[color:var(--brand-primary)] text-white shadow-lg shadow-[color:var(--brand-primary)]/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <s.icon className="size-7" />
                  </div>
                  <span className="text-4xl font-display font-bold opacity-10 group-hover:opacity-20 transition-opacity">0{i + 1}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-white group-hover:text-[color:var(--brand-accent)] transition-colors">{s.title}</h3>
                <p className="mt-3 text-base text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">{s.desc}</p>
              </div>
              
              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="absolute top-1/2 -right-4 hidden w-8 h-px bg-gradient-to-r from-white/20 to-transparent lg:block" />
              )}
            </motion.li>
          ))}
        </motion.ol>

        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-20 flex flex-col items-center justify-center p-12 rounded-[3rem] bg-gradient-to-br from-[color:var(--brand-primary)]/20 to-transparent border border-white/10 backdrop-blur-sm"
        >
          <h3 className="font-display text-3xl font-semibold text-center mb-6">Ready to take the first step?</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 rounded-full bg-white text-[color:var(--brand-secondary)] font-bold transition-transform hover:scale-105 active:scale-95"
            >
              Start Application
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-bold transition-colors hover:bg-white/10"
            >
              Schedule a Call
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}