import { Link } from "@tanstack/react-router";
import { Vault, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[color:var(--brand-secondary)] text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2 text-white">
            <span className="grid size-9 place-items-center rounded-md bg-[color:var(--brand-primary)]">
              <Vault className="size-5" />
            </span>
            <span className="font-display text-xl font-semibold">VaultPath</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Transparent rates. Expert guidance. Zero confusion. Your path to home ownership starts here.
          </p>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-white">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/loan-programs", label: "Loan Programs" },
              { to: "/about", label: "About Us" },
              { to: "/team", label: "Our Team" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2"><Mail className="size-4" /> hello@vaultpath.com</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-white">Follow</h3>
          <div className="mt-4 flex gap-3">
            {[
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Twitter, label: "Twitter" },
              { icon: Instagram, label: "Instagram" },
            ].map(({ icon: Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="grid size-10 place-items-center rounded-full border border-white/15 hover:bg-white/10">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-end gap-2 px-4 py-6 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <a 
            href="https://axistechgroup.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            Powered by AxisTechGroup
          </a>
        </div>
      </div>
    </footer>
  );
}