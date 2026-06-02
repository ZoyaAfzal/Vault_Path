import { useMemo, useState } from "react";
import { motion } from "framer-motion";

export function MortgageCalculator() {
  const [amount, setAmount] = useState(450000);
  const [term, setTerm] = useState<15 | 30>(30);
  const [rate, setRate] = useState(6.75);

  const monthly = useMemo(() => {
    const r = rate / 100 / 12;
    const n = term * 12;
    if (r === 0) return amount / n;
    return (amount * r) / (1 - Math.pow(1 + r, -n));
  }, [amount, term, rate]);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md sm:p-8">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-white">Quick payment estimate</h2>
        <div className="flex rounded-full border border-white/15 p-1 text-xs">
          {[15, 30].map((t) => (
            <button
              key={t}
              onClick={() => setTerm(t as 15 | 30)}
              className={`rounded-full px-3 py-1 transition-colors ${term === t ? "bg-[color:var(--brand-primary)] text-white" : "text-white/70"}`}
            >
              {t}yr
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <label className="block">
          <div className="flex items-baseline justify-between text-sm text-white/70">
            <span>Loan amount</span>
            <span className="font-medium text-white">${amount.toLocaleString()}</span>
          </div>
          <input
            aria-label="Loan amount"
            type="range"
            min={50000}
            max={2000000}
            step={5000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="mt-3 w-full accent-[color:var(--brand-primary)]"
          />
        </label>

        <label className="block">
          <div className="flex items-baseline justify-between text-sm text-white/70">
            <span>Interest rate</span>
            <span className="font-medium text-white">{rate.toFixed(2)}%</span>
          </div>
          <input
            aria-label="Interest rate"
            type="range"
            min={3}
            max={10}
            step={0.05}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="mt-3 w-full accent-[color:var(--brand-primary)]"
          />
        </label>
      </div>

      <div className="mt-6 flex items-end justify-between rounded-2xl bg-[color:var(--brand-primary)]/15 p-5 ring-1 ring-[color:var(--brand-primary)]/30">
        <div>
          <div className="text-xs uppercase tracking-widest text-white/60">Estimated monthly</div>
          <motion.div
            key={Math.round(monthly)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="font-display text-4xl font-semibold text-white"
          >
            ${monthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </motion.div>
        </div>
        <p className="text-xs text-white/50">Principal & interest only. Get a real quote in minutes.</p>
      </div>
    </div>
  );
}