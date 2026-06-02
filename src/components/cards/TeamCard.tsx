import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { TeamMember } from "@/lib/data/team";
import { fadeUp } from "@/lib/motion";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.div 
      variants={fadeUp} 
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <Link to="/team/$slug" params={{ slug: member.slug }} className="block">
        <div className="relative mx-auto size-48 overflow-hidden rounded-[2.5rem] p-1 transition-all duration-500 group-hover:rounded-3xl shadow-xl group-hover:shadow-2xl">
          {/* Animated Border */}
          <div 
            className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: `conic-gradient(from 0deg, ${member.accent}, transparent 60%)`, animation: "spin 3s linear infinite" }}
          />
          
          <div className="relative z-10 size-full overflow-hidden rounded-[2.2rem] group-hover:rounded-2xl transition-all duration-500 bg-card">
            <img 
              src={member.image} 
              alt={member.name}
              className="size-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-secondary)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-[color:var(--brand-primary)] transition-colors">{member.name}</h3>
          <p className="mt-1 text-sm font-medium text-[color:var(--brand-muted)]">{member.role}</p>
          
          <div className="mt-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            {member.specialties.slice(0, 2).map(s => (
              <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-[color:var(--brand-surface)] border border-border text-[color:var(--brand-muted)]">
                {s}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}