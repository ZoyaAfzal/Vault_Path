import { CountUp } from "../CountUp";

const stats = [
  { v: 2.4, suffix: "B+", decimals: 1, label: "Loans funded", prefix: "$" },
  { v: 4800, suffix: "+", decimals: 0, label: "Families helped" },
  { v: 4.9, suffix: "★", decimals: 1, label: "Average rating" },
  { v: 12, suffix: "+", decimals: 0, label: "Years experience" },
];

export function TrustBar() {
  return (
    <section className="bg-[color:var(--brand-primary)] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl font-semibold sm:text-5xl">
              {s.prefix}<CountUp to={s.v} decimals={s.decimals} suffix={s.suffix} />
            </div>
            <div className="mt-1 text-sm uppercase tracking-widest text-white/80">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}