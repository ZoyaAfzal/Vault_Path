import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Home, TrendingUp, Building2, Shield, Landmark, Repeat } from "lucide-react";
import type { Loan } from "@/lib/data/loans";
import { fadeUp } from "@/lib/motion";

const icons = { Home, TrendingUp, Building2, Shield, Landmark, Repeat } as const;

export function LoanCard({ loan }: { loan: Loan }) {
  const Icon = icons[loan.icon as keyof typeof icons] ?? Home;
  return (
    <motion.div 
      variants={fadeUp} 
      whileHover={{ y: -12 }} 
      transition={{ type: "spring", stiffness: 300, damping: 20 }} 
      className="group relative"
    >
      <Link
        to="/loan-programs/$slug"
        params={{ slug: loan.slug }}
        className="relative block h-full overflow-hidden rounded-[2rem] border border-border bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-[color:var(--brand-primary)]/10"
      >
        {/* Card Header with Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={loan.image} 
            alt={loan.name}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className="rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
              {loan.category}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-8">
          <div className="flex items-start justify-between">
            <motion.span
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="grid size-14 place-items-center rounded-2xl bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary)] group-hover:bg-[color:var(--brand-primary)] group-hover:text-white transition-colors duration-300"
            >
              <Icon className="size-7" />
            </motion.span>
          </div>
          <h3 className="mt-6 font-display text-2xl font-semibold text-foreground group-hover:text-[color:var(--brand-primary)] transition-colors">{loan.name}</h3>
          <p className="mt-3 text-base text-[color:var(--brand-muted)] leading-relaxed">{loan.tagline}</p>
          
          <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
            <div className="inline-flex items-center gap-2 text-sm font-bold text-[color:var(--brand-primary)]">
              Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-2" />
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-wider text-[color:var(--brand-muted)] font-bold">Starting at</div>
              <div className="text-lg font-display font-bold text-[color:var(--brand-secondary)]">{loan.rate.split(' ')[0]}</div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}