import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";
import { MortgageCalculator } from "../MortgageCalculator";
import heroFamily from "@/assets/hero-family.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--brand-secondary)] text-white">
      {/* Background Elements */}
      <div aria-hidden className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop"
          alt="Beautiful modern home in a warm sunlight"
          width={1600}
          height={1200}
          className="absolute inset-0 size-full object-cover opacity-50 brightness-90 transition-transform duration-10000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--brand-secondary)]/90 via-[color:var(--brand-secondary)]/70 to-transparent" />
        <div className="absolute -top-32 -left-20 size-[420px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(closest-side, oklch(0.61 0.16 38), transparent)", animation: "float-orb 14s ease-in-out infinite" }} />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-40 lg:pb-48">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white/90 backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--brand-accent)] opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-[color:var(--brand-accent)]"></span>
              </span>
              Top Rated Mortgage Broker
            </motion.div>
            <motion.h1 variants={fadeUp} className="mt-8 font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              Your Path to <span className="text-[color:var(--brand-accent)]">Home Ownership</span> Starts Here
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-8 max-w-xl text-lg text-white/80 sm:text-xl leading-relaxed">
              Experience a faster, simpler way to get a mortgage. We combine expert human advice with modern technology to find you the best rates.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-5">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-10 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:translate-y-[-2px] hover:shadow-[color:var(--brand-primary)]/40 active:translate-y-[1px]"
              >
                Get Pre-Approved
              </Link>
              <Link
                to="/loan-programs"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/5 px-10 py-4 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/50"
              >
                Loan Programs
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={scaleIn} 
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-10 rounded-[3rem] bg-[color:var(--brand-primary)]/10 blur-3xl" />
            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 p-2 backdrop-blur-sm shadow-2xl">
              <MortgageCalculator />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="size-8 stroke-[1.5]" />
      </motion.div>
    </section>
  );
}