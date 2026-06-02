import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function CTABanner({
  title = "Ready to find your perfect rate?",
  subtitle = "Apply in 10 minutes. Get a real answer in days.",
  ctaLabel = "Start your application",
}: { title?: string; subtitle?: string; ctaLabel?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--brand-primary)] py-20 text-white">
      <div aria-hidden className="absolute inset-0 bg-diagonal-lines opacity-30" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        <motion.h2 variants={fadeUp} className="font-display text-4xl font-semibold leading-tight sm:text-6xl">{title}</motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-xl text-white/85">{subtitle}</motion.p>
        <motion.div variants={fadeUp} className="mt-8">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-[color:var(--brand-secondary)] transition-transform hover:scale-[1.04]">
            {ctaLabel} <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}