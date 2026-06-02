import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, Vault } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/loan-programs", label: "Loan Programs" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
  { to: "/faq", label: "FAQ" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 80], ["rgba(26,26,46,0.6)", "rgba(26,26,46,0.95)"]);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  return (
    <>
      <motion.nav
        role="navigation"
        style={{ backgroundColor: navBg, backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}
        className="fixed inset-x-0 top-0 z-50 border-b border-white/5"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 text-white" aria-label="VaultPath home">
            <span className="grid size-9 place-items-center rounded-md bg-[color:var(--brand-primary)] text-white">
              <Vault className="size-5" />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">VaultPath</span>
          </Link>

          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => {
              const active = location.pathname === l.to || (l.to !== "/" && location.pathname.startsWith(l.to));
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`text-sm transition-colors ${active ? "text-[color:var(--brand-accent)]" : "text-white/80 hover:text-white"}`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-[color:var(--brand-primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[oklch(0.61_0.16_38/0.35)] transition-transform hover:scale-[1.03]"
            >
              Get Pre-Approved
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-md text-white lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden"
              style={{ backgroundColor: "rgba(26,26,46,0.98)" }}
            >
              <ul className="space-y-1 px-4 py-4">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-3 text-base text-white/90 hover:bg-white/5"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="block w-full rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-center text-sm font-semibold text-white"
                  >
                    Get Pre-Approved
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <div className="h-16" aria-hidden />
    </>
  );
}