import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { team } from "@/lib/data/team";
import { TeamCard } from "../cards/TeamCard";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function TeamPreview() {
  return (
    <section className="bg-[color:var(--brand-surface)] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center">
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-widest text-[color:var(--brand-primary)]">The team</motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Meet your loan experts</motion.h2>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => <TeamCard key={m.slug} member={m} />)}
        </motion.div>
      </div>
    </section>
  );
}