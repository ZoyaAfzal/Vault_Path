import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Mail, Phone, Linkedin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { team } from "@/lib/data/team";

export const Route = createFileRoute("/team/$slug")({
  loader: ({ params }) => {
    const member = team.find((m) => m.slug === params.slug);
    if (!member) throw notFound();
    return { member };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.member.name} — VaultPath` },
          { name: "description", content: loaderData.member.bio.slice(0, 155) },
          { property: "og:title", content: `${loaderData.member.name} — ${loaderData.member.role}` },
          { property: "og:description", content: loaderData.member.bio.slice(0, 155) },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="grid min-h-[60vh] place-items-center px-4 text-center">
      <div>
        <h1 className="font-display text-3xl">Member not found</h1>
        <Link to="/team" className="mt-4 inline-block text-[color:var(--brand-primary)]">← Back to team</Link>
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
  component: TeamMemberPage,
});

function TeamMemberPage() {
  const { member } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow={member.role}
        title={member.name}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Team", to: "/team" }, { label: member.name }]}
      />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <div
              className="grid aspect-square w-full place-items-center rounded-3xl font-display text-7xl font-semibold text-white"
              style={{ background: `linear-gradient(135deg, ${member.accent}, oklch(0.18 0.03 270))` }}
            >
              {member.initials}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl border border-border p-3"><div className="font-display text-xl font-semibold">{member.yearsExperience}</div><div className="mt-0.5 text-[10px] uppercase tracking-widest text-[color:var(--brand-muted)]">Years</div></div>
              <div className="rounded-xl border border-border p-3"><div className="font-display text-xl font-semibold">{member.loansClosed.toLocaleString()}</div><div className="mt-0.5 text-[10px] uppercase tracking-widest text-[color:var(--brand-muted)]">Loans</div></div>
              <div className="rounded-xl border border-border p-3"><div className="font-display text-xl font-semibold">{member.rating}★</div><div className="mt-0.5 text-[10px] uppercase tracking-widest text-[color:var(--brand-muted)]">Rating</div></div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl font-semibold">About {member.name.split(" ")[0]}</h2>
            <p className="mt-4 text-[color:var(--brand-muted)]">{member.bio}</p>

            <h3 className="mt-10 font-display text-xl font-semibold">Specialties</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {member.specialties.map((s: string) => (
                <span key={s} className="rounded-full bg-[color:var(--brand-primary)]/10 px-3 py-1.5 text-xs font-medium text-[color:var(--brand-primary)]">{s}</span>
              ))}
            </div>

            <div className="mt-10 grid gap-3 rounded-2xl border border-border bg-card p-6 sm:grid-cols-3">
              <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm hover:text-[color:var(--brand-primary)]"><Mail className="size-4" /> {member.email}</a>
              <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-sm hover:text-[color:var(--brand-primary)]"><Phone className="size-4" /> {member.phone}</a>
              <a href={member.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-[color:var(--brand-primary)]"><Linkedin className="size-4" /> LinkedIn</a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" search={{ advisor: member.slug }} className="rounded-full bg-[color:var(--brand-primary)] px-6 py-3 text-sm font-semibold text-white">Book a consultation</Link>
              <Link to="/team" className="inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-3 text-sm font-semibold">
                <ArrowLeft className="size-4" /> Back to team
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}