import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2, X } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { jobs } from "@/lib/data/jobs";

export const Route = createFileRoute("/careers/$slug")({
  loader: ({ params }) => {
    const job = jobs.find((j) => j.slug === params.slug);
    if (!job) throw notFound();
    return { job };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.job.title} — Careers — VaultPath` },
          { name: "description", content: loaderData.job.summary.slice(0, 155) },
          { property: "og:title", content: `${loaderData.job.title} — VaultPath` },
          { property: "og:description", content: loaderData.job.summary.slice(0, 155) },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="grid min-h-[60vh] place-items-center px-4 text-center">
      <div>
        <h1 className="font-display text-3xl">Role not found</h1>
        <Link to="/careers" className="mt-4 inline-block text-[color:var(--brand-primary)]">← Back to careers</Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="grid min-h-[60vh] place-items-center px-4 text-center">
      <div>
        <h1 className="font-display text-3xl">Something went wrong</h1>
        <button onClick={reset} className="mt-4 text-[color:var(--brand-primary)]">Try again</button>
      </div>
    </div>
  ),
  component: JobPage,
});

function JobPage() {
  const { job } = Route.useLoaderData();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow={job.department}
        title={job.title}
        subtitle={`${job.location} · ${job.type}`}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Careers", to: "/careers" }, { label: job.title }]}
      />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold">About the role</h2>
            <p className="mt-3 text-[color:var(--brand-muted)]">{job.summary}</p>

            <Section title="Responsibilities" items={job.responsibilities} />
            <Section title="Requirements" items={job.requirements} />
            <Section title="Benefits" items={job.benefits} />

            <Link to="/careers" className="mt-10 inline-flex items-center gap-1.5 text-sm text-[color:var(--brand-primary)]">
              <ArrowLeft className="size-4" /> Back to careers
            </Link>
          </div>

          <aside className="self-start rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-xl font-semibold">Ready to apply?</h3>
            <p className="mt-2 text-sm text-[color:var(--brand-muted)]">We review applications within 5 business days.</p>
            <button onClick={() => setOpen(true)} className="mt-5 block w-full rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white">
              Apply now
            </button>
          </aside>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
            <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} className="relative w-full max-w-xl rounded-2xl bg-card p-8">
              <button onClick={() => { setOpen(false); setSubmitted(false); }} aria-label="Close" className="absolute right-4 top-4 grid size-8 place-items-center rounded-full text-[color:var(--brand-muted)] hover:bg-muted">
                <X className="size-4" />
              </button>
              {submitted ? (
                <div className="py-8 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="mx-auto grid size-14 place-items-center rounded-full bg-[color:var(--brand-primary)]/15 text-[color:var(--brand-primary)]">
                    <CheckCircle2 className="size-7" />
                  </motion.div>
                  <h3 className="mt-4 font-display text-2xl font-semibold">Application received</h3>
                  <p className="mt-2 text-sm text-[color:var(--brand-muted)]">We'll review and be in touch within 5 business days.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-4"
                >
                  <h3 className="font-display text-2xl font-semibold">Apply: {job.title}</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Field label="Name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" />
                    <Field label="LinkedIn" name="linkedin" placeholder="https://" />
                  </div>
                  <label className="block text-sm">
                    <span className="font-medium">Resume</span>
                    <input type="file" className="mt-1 block w-full rounded-md border border-border bg-background p-2 text-sm" />
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium">Cover letter</span>
                    <textarea rows={4} className="mt-1 block w-full rounded-md border border-border bg-background p-3 text-sm" />
                  </label>
                  <button type="submit" className="w-full rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white">
                    Submit application
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <>
      <h3 className="mt-10 font-display text-xl font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it} className="flex gap-2 text-sm text-[color:var(--brand-muted)]">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[color:var(--brand-primary)]" />{it}
          </li>
        ))}
      </ul>
    </>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <label className="block text-sm">
      <span className="font-medium">{label}{required && " *"}</span>
      <input name={name} type={type} required={required} placeholder={placeholder} className="mt-1 block w-full rounded-md border border-border bg-background p-2.5 text-sm" />
    </label>
  );
}