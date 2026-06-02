import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { loans } from "@/lib/data/loans";

type ContactSearch = { loan?: string; advisor?: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): ContactSearch => ({
    loan: typeof s.loan === "string" ? s.loan : undefined,
    advisor: typeof s.advisor === "string" ? s.advisor : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact — VaultPath" },
      { name: "description", content: "Get in touch with VaultPath. We typically respond within 2 hours, 7 days a week." },
      { property: "og:title", content: "Contact — VaultPath" },
      { property: "og:description", content: "Talk to a real loan officer today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { loan: preselectedLoan } = Route.useSearch();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your next home."
        subtitle="Fill out the form and a loan officer will reach out within 2 hours. No pressure, no commitment."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="ok" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="rounded-2xl border border-border bg-card p-10 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="mx-auto grid size-16 place-items-center rounded-full bg-[color:var(--brand-primary)]/15 text-[color:var(--brand-primary)]">
                    <CheckCircle2 className="size-8" />
                  </motion.div>
                  <h2 className="mt-5 font-display text-3xl font-semibold">Thanks — we've got it.</h2>
                  <p className="mt-2 text-[color:var(--brand-muted)]">A loan officer will reach out within 2 hours.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-5 rounded-2xl border border-border bg-card p-8"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" type="tel" />
                    <label className="block text-sm">
                      <span className="font-medium">Loan type</span>
                      <select defaultValue={preselectedLoan ?? ""} name="loan" className="mt-1 block w-full rounded-md border border-border bg-background p-2.5 text-sm">
                        <option value="">Not sure yet</option>
                        {loans.map((l) => <option key={l.slug} value={l.slug}>{l.name}</option>)}
                      </select>
                    </label>
                  </div>
                  <label className="block text-sm">
                    <span className="font-medium">Message</span>
                    <textarea name="message" rows={5} className="mt-1 block w-full rounded-md border border-border bg-background p-3 text-sm" />
                  </label>
                  <button type="submit" className="w-full rounded-full bg-[color:var(--brand-primary)] px-5 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]">
                    Send message
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <aside className="space-y-4 lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-xl font-semibold">Reach us directly</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-2"><Mail className="size-4 text-[color:var(--brand-primary)]" /> hello@vaultpath.com</li>
                <li className="flex items-center gap-2"><Clock className="size-4 text-[color:var(--brand-primary)]" /> Mon–Sat · 8a–8p PT</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-[color:var(--brand-primary)]/10 p-6 ring-1 ring-[color:var(--brand-primary)]/30">
              <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-primary)]">
                <span className="size-2 animate-pulse rounded-full bg-[color:var(--brand-primary)]" /> Team is online
              </div>
              <p className="mt-2 text-sm text-[color:var(--brand-muted)]">Average response time: under 2 hours.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block text-sm">
      <span className="font-medium">{label}{required && " *"}</span>
      <input name={name} type={type} required={required} className="mt-1 block w-full rounded-md border border-border bg-background p-2.5 text-sm" />
    </label>
  );
}