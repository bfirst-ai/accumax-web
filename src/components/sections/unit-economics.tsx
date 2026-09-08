"use client";

import { motion, type Variants } from "framer-motion";
import {
  Clock,
  UserMinus,
  TrendingDown,
  ShieldAlert,
  Bot,
  SearchCheck,
  ShieldCheck,
  CalendarRange,
  BadgeCheck,
  ArrowRight,
  Layers,
} from "lucide-react";

const before = [
  {
    icon: Clock,
    text: "40–60% of time on admin — on-boarding, paper/PDF to tax-prep software, communication & coordination overhead",
  },
  {
    icon: UserMinus,
    text: "Senior staff on low-value prep & review",
  },
  {
    icon: TrendingDown,
    text: "Advisory capped by available human hours",
  },
  {
    icon: ShieldAlert,
    text: "Rising compliance risk per return",
  },
];

const after = [
  {
    icon: Bot,
    text: "AI agents for the e2e tax-prep pipeline: on-boarding, form recognition & data extraction, data-xfer into tax-prep software, Tax Preparer — minutes, not hours",
  },
  {
    icon: SearchCheck,
    text: "AI Tax Review of prepared returns before the boss's review",
  },
  {
    icon: ShieldCheck,
    text: "AccuTax Defense that gathers the right documents, compares the IRS view with the client view, and prepares a defense with evidence — in minutes",
  },
  {
    icon: CalendarRange,
    text: "AccuTax Plan for highly customized plans — goals, scenarios, what-ifs, and reports — iterative, engaging, impactful",
  },
  {
    icon: BadgeCheck,
    text: "Defensible, audit-ready compliance on every return",
  },
];

const levers = [
  "Less labor per return",
  "Cheaper labor mix (when offshored)",
  "More advisory revenue",
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function UnitEconomics() {
  return (
    <section
      id="unit-economics"
      className="relative py-20 md:py-28 overflow-hidden bg-[var(--gray-950)]"
      aria-labelledby="unit-economics-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--gray-900)] to-[var(--gray-950)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--gray-800)_1px,transparent_1px),linear-gradient(to_bottom,var(--gray-800)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[var(--success)]/10 rounded-full blur-3xl" />

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center rounded-full border border-[var(--success)]/30 bg-[var(--success)]/10 px-4 py-1.5 text-sm font-medium text-[var(--success-light)] mb-6">
            What it does to your P&L
          </span>
          <h2
            id="unit-economics-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl text-balance"
          >
            Delivering{" "}
            <span className="text-[var(--success-light)]">&gt;30% margin lift</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--gray-400)] leading-relaxed">
            <span className="block">
              More throughput, higher ARPU, and a lower cost to serve —
            </span>
            <span className="block">the three levers, pulled at once.</span>
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-4 items-stretch"
        >
          {/* BEFORE */}
          <motion.div
            variants={item}
            className="rounded-2xl border border-[var(--warning)]/30 bg-[var(--warning)]/5 p-7 md:p-8"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--warning)] mb-1">
              Before
            </p>
            <h3 className="text-xl font-bold text-white mb-6 text-balance">
              Fragmented tools, manual handoffs
            </h3>
            <ul className="space-y-4">
              {before.map((b) => (
                <li key={b.text} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg bg-[var(--warning)]/15 text-[var(--warning)]">
                    <b.icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-sm text-[var(--gray-400)] leading-relaxed pt-1">
                    {b.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow */}
          <motion.div
            variants={item}
            className="flex lg:flex-col items-center justify-center gap-2 py-2 lg:py-0"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--success)] text-white shadow-lg shadow-[var(--success)]/20 rotate-90 lg:rotate-0">
              <ArrowRight className="h-6 w-6" aria-hidden />
            </div>
          </motion.div>

          {/* AFTER */}
          <motion.div
            variants={item}
            className="rounded-2xl border border-[var(--success)]/30 bg-[var(--success)]/5 p-7 md:p-8"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--success-light)] mb-1">
              After
            </p>
            <h3 className="text-xl font-bold text-white mb-6 text-balance">
              One platform, one engine
            </h3>
            <ul className="space-y-4">
              {after.map((a) => (
                <li key={a.text} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg bg-[var(--success)]/15 text-[var(--success-light)]">
                    <a.icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-sm text-[var(--gray-300)] leading-relaxed pt-1">
                    {a.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-14 rounded-2xl border border-[var(--gray-800)] bg-[var(--gray-900)]/80 backdrop-blur-sm px-6 py-7 md:px-10 md:py-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3 text-[var(--success-light)]">
            <Layers className="h-5 w-5" aria-hidden />
            <p className="text-sm font-bold uppercase tracking-widest">
              Three levers compound
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-4">
            {levers.map((lever, i) => (
              <span key={lever} className="flex items-center gap-3">
                <span className="text-base md:text-lg font-semibold text-white">
                  {lever}
                </span>
                {i < levers.length - 1 && (
                  <span className="text-[var(--gray-600)]">·</span>
                )}
              </span>
            ))}
          </div>
          <p className="text-[var(--gray-400)] max-w-2xl mx-auto">
            Every lever is measurable per workflow and per account — offshore
            amplifies it, but domestic firms capture it too.
          </p>
        </motion.div>

        {/* Valuation angle — matters to anyone building toward a sale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-14 rounded-2xl border border-[var(--gray-800)] bg-[var(--gray-900)]/70 p-7 md:p-9 max-w-4xl mx-auto"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--warning)]">
            If you are building toward a sale
          </p>
          <p className="mt-3 text-xl md:text-2xl font-bold text-white text-balance">
            Firms trade on EBITDA. Gross margin is where EBITDA comes from.
          </p>
          <p className="mt-3 text-[var(--gray-400)] leading-relaxed text-pretty">
            A ~30% lift in gross margin lands straight in EBITDA — and buyers pay
            a multiple of it. AccuMax also gives you the meters to measure it:
            utilization, realization, throughput per preparer, AR aging and
            margin by service, all in one place, all traceable. Cleaner metrics
            and a higher margin are what turn a good practice into a
            better-valued one.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
