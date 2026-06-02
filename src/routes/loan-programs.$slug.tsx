import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { loans } from "@/lib/data/loans";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export const Route = createFileRoute("/loan-programs/$slug")({
  loader: ({ params }) => {
    const loan = loans.find((l) => l.slug === params.slug);
    if (!loan) throw notFound();
    return { loan };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.loan.name} — VaultPath` },
          { name: "description", content: loaderData.loan.description.slice(0, 155) },
          { property: "og:title", content: `${loaderData.loan.name} — VaultPath` },
          { property: "og:description", content: loaderData.loan.tagline },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="grid min-h-[60vh] place-items-center px-4 text-center">
      <div>
        <h1 className="font-display text-3xl">Loan not found</h1>
        <Link to="/loan-programs" className="mt-4 inline-block text-[color:var(--brand-primary)]">← Back to loan programs</Link>
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
  component: LoanDetailPage,
});

function LoanDetailPage() {
  const { loan } = Route.useLoaderData();
  const related = loans.filter((l) => l.slug !== loan.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={loan.category}
        title={loan.name}
        subtitle={loan.tagline}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Loan Programs", to: "/loan-programs" }, { label: loan.name }]}
      />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <motion.article 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={viewportOnce} 
            className="lg:col-span-2"
          >
            <motion.div variants={fadeUp}>
              <h2 className="font-display text-3xl font-semibold">Overview</h2>
              <p className="mt-4 text-[color:var(--brand-muted)] text-lg leading-relaxed">{loan.description}</p>
            </motion.div>

            <div className="mt-16">
              <motion.h3 variants={fadeUp} className="font-display text-2xl font-semibold">Benefits</motion.h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {loan.benefits.map((b: string) => (
                  <motion.div variants={fadeUp} key={b} className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                    <div className="size-6 shrink-0 rounded-full bg-[color:var(--brand-primary)]/10 flex items-center justify-center text-[color:var(--brand-primary)]">
                      <Check className="size-4" />
                    </div>
                    <span className="text-sm font-medium leading-tight">{b}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <motion.h3 variants={fadeUp} className="font-display text-2xl font-semibold">Requirements</motion.h3>
              <div className="mt-6 space-y-3">
                {loan.requirements.map((r: string) => (
                  <motion.div variants={fadeUp} key={r} className="flex items-center gap-4 text-sm text-[color:var(--brand-muted)] font-medium p-4 rounded-xl bg-[color:var(--brand-surface)]/50 border border-border/50">
                    <span className="size-2 shrink-0 rounded-full bg-[color:var(--brand-primary)]" />
                    {r}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.article>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-xs uppercase tracking-widest text-[color:var(--brand-muted)]">Rate range</div>
              <div className="mt-1 font-display text-3xl font-semibold">{loan.rate}</div>
              <div className="mt-1 text-sm text-[color:var(--brand-muted)]">{loan.term}</div>
              <Link to="/contact" search={{ loan: loan.slug }} className="mt-5 block w-full rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-center text-sm font-semibold text-white">
                Apply for this loan
              </Link>
            </div>
            <Link to="/loan-programs" className="inline-flex items-center gap-1.5 text-sm text-[color:var(--brand-primary)]">
              <ArrowLeft className="size-4" /> Back to all programs
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-[color:var(--brand-surface)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold">Related programs</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((l) => (
              <Link key={l.slug} to="/loan-programs/$slug" params={{ slug: l.slug }} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="text-[10px] font-medium uppercase tracking-widest text-[color:var(--brand-primary)]">{l.category}</div>
                <h3 className="mt-2 font-display text-lg font-semibold">{l.name}</h3>
                <p className="mt-1 text-sm text-[color:var(--brand-muted)]">{l.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}