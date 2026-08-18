"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Database,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

/* ------------------------------------------------------------------ *
 * Positioning only. By design this section names no competitor and
 * shows no competitor pricing — categories are described by what they
 * do, so a reader recognises their own stack without us pointing at
 * anyone.
 * ------------------------------------------------------------------ */

const stack = [
  {
    category: "Tax research",
    detail: "Separate login. Answers live outside the client file.",
  },
  {
    category: "Tax planning",
    detail: "Separate login. Re-key the client's numbers to model them.",
  },
  {
    category: "Return preparation",
    detail: "Separate login. Export, import, then reconcile.",
  },
  {
    category: "Practice management",
    detail: "Separate login. The system of record — without the AI.",
  },
  {
    category: "Offshore coordination",
    detail: "No system at all. Spreadsheets and email threads.",
  },
];

const accumaxDelivers = [
  "AI Tax Researcher — contextual, prior- and current-year facts",
  "AI Tax Planner — multi-year, goal-oriented, what-if scenarios",
  "AI 1040 Preparer — federal returns in minutes from source documents",
  "AI 1040 Reviewer — gaps, warnings, cross-form validations",
  "AI IRS Audit Defense — one-click evaluation and response",
  "AccuBridge — forms recognition, extraction & transfer to TaxPrep SW",
  "Full practice OS — intake → approvals → billing → governance",
];

const benefits = [
  {
    icon: Rocket,
    title: "Start anywhere. Grow at your own pace.",
    body: "Take the whole platform on day one, or adopt a single agent and add the rest when you are ready. Nothing has to be re-platformed later.",
  },
  {
    icon: Database,
    title: "One copy of the client file.",
    body: "Every agent reads and writes the same record. Client data and returns are never copied from one tool into another, so nothing drifts out of sync.",
  },
  {
    icon: ShieldCheck,
    title: "Provenance that holds up.",
    body: "A single source of truth means no version-control guesswork and no reconciliation — just one defensible audit trail across every workflow.",
  },
];

const quadrants = [
  {
    label: "Tax prep engines",
    desc: "Calculate and file the return — with no practice layer around it",
    pos: "bottom-6 left-6",
  },
  {
    label: "Practice suites",
    desc: "Broad workflow coverage, with AI bolted on afterwards",
    pos: "top-6 left-6",
  },
  {
    label: "Single-function AI",
    desc: "Deep in one task, and blind to everything either side of it",
    pos: "bottom-6 right-6",
  },
];

export function ValueStory() {
  return (
    <div className="mt-24">
      {/* Headline */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-3 py-1 text-sm font-medium text-[var(--accent)] mb-5">
          <Sparkles className="h-3.5 w-3.5 mr-1.5" aria-hidden />
          Why this is the best value in the category
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl text-balance">
          <span className="block">
            Take it all. Or <span className="whitespace-nowrap">grow into it</span>.
          </span>
          <span className="block gradient-text">
            Nothing to <span className="whitespace-nowrap">integrate</span>, either way.
          </span>
        </h2>
        <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed text-pretty">
          Adopt the whole platform on day one, or start with a single agent and
          add the rest at your own pace. Every piece is already connected — no
          integration project, and no client data copied between tools.
        </p>
      </div>

      {/* Three headline stats */}
      <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {[
          {
            icon: Layers,
            value: "5 → 1",
            label: "Separately-licensed tools replaced",
            sub: "Research, planning, prep, practice management, offshore",
            highlight: true,
          },
          {
            icon: Check,
            value: "$0",
            label: "Spent on integration",
            sub: "Every agent and module works together out of the box",
          },
          {
            icon: TrendingUp,
            value: ">30%",
            label: "Gross margin lift",
            sub: "Less labor per return · cheaper labor mix · more advisory",
          },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className={`rounded-2xl border p-6 text-center ${
              s.highlight
                ? "border-2 border-[var(--primary)] bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 shadow-lg"
                : "border-[var(--border)] bg-white shadow-sm"
            }`}
          >
            <s.icon
              className={`h-5 w-5 mx-auto mb-3 ${
                s.highlight ? "text-[var(--primary)]" : "text-[var(--muted-foreground)]"
              }`}
              aria-hidden
            />
            <p
              className={`text-3xl font-extrabold tracking-tight ${
                s.highlight ? "text-[var(--primary)]" : "text-[var(--foreground)]"
              }`}
            >
              {s.value}
            </p>
            <p className="mt-1.5 text-sm font-semibold text-[var(--foreground)] text-pretty">
              {s.label}
            </p>
            <p className="mt-1 text-xs text-[var(--muted-foreground)] text-pretty">
              {s.sub}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Stack collapse */}
      <div className="mt-16 grid lg:grid-cols-[1.15fr_auto_1fr] gap-6 lg:gap-4 items-center">
        {/* Today */}
        <div className="rounded-2xl border border-[var(--border)] bg-white shadow-sm overflow-hidden">
          <div className="px-5 py-3.5 border-b border-[var(--border)] bg-[var(--gray-50)]">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)]">
              What a firm assembles today
            </p>
          </div>
          <ul>
            {stack.map((s) => (
              <li
                key={s.category}
                className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-[var(--border)] last:border-0"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    {s.category}
                  </p>
                  <p className="text-xs text-[var(--muted-foreground)] text-pretty">
                    {s.detail}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--gray-50)] px-2.5 py-1 text-[11px] font-semibold text-[var(--muted-foreground)] whitespace-nowrap">
                  Separate tool
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Arrow */}
        <div className="flex lg:flex-col items-center justify-center gap-2 text-[var(--primary)]">
          <ArrowRight className="h-7 w-7 rotate-90 lg:rotate-0" aria-hidden />
          <span className="text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
            collapse into
          </span>
        </div>

        {/* AccuMax */}
        <div className="rounded-2xl border-2 border-[var(--primary)] bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 shadow-xl overflow-hidden">
          <div className="px-5 py-3.5 border-b border-[var(--primary)]/20">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">
              One platform
            </p>
          </div>
          <ul className="px-5 py-4 space-y-2.5">
            {accumaxDelivers.map((d) => (
              <li
                key={d}
                className="flex items-start gap-2.5 text-sm text-[var(--gray-700)] text-pretty"
              >
                <Check
                  className="h-4 w-4 shrink-0 text-[var(--success)] mt-0.5"
                  aria-hidden
                />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Why one platform beats five */}
      <div className="grid md:grid-cols-3 gap-5 mt-8">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] mb-4">
              <b.icon className="h-5 w-5" aria-hidden />
            </span>
            <p className="text-base font-bold text-[var(--foreground)] text-pretty">
              {b.title}
            </p>
            <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed text-pretty">
              {b.body}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Breadth x depth quadrant */}
      <div className="mt-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl text-balance">
            Breadth or intelligence — everyone else picks one
          </h3>
          <p className="mt-3 text-[var(--muted-foreground)] text-pretty">
            Broad platforms treat AI as a bolt-on. Single-function AI goes deep in
            one place and stops there. AccuMax is the only one doing both.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-7 sm:pl-8">
            {/* Y axis label — centred on the axis */}
            <div className="absolute left-0 inset-y-0 flex items-center" aria-hidden>
              <span className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-[11px] font-bold uppercase tracking-widest text-[var(--muted-foreground)]">
                Practice-OS breadth →
              </span>
            </div>
            <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl border border-[var(--border)] bg-white shadow-sm overflow-hidden">
            {/* grid lines */}
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:32px_32px]"
              aria-hidden
            />
            <div className="absolute left-1/2 inset-y-0 w-px bg-[var(--border)]" aria-hidden />
            <div className="absolute top-1/2 inset-x-0 h-px bg-[var(--border)]" aria-hidden />

            {quadrants.map((q) => (
              <div key={q.label} className={`absolute ${q.pos} max-w-[44%]`}>
                <p className="text-xs sm:text-sm font-bold text-[var(--muted-foreground)]">
                  {q.label}
                </p>
                <p className="text-[10px] sm:text-xs text-[var(--gray-400)] mt-0.5 leading-snug text-pretty">
                  {q.desc}
                </p>
              </div>
            ))}

            {/* AccuMax marker */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="absolute top-6 right-6 max-w-[46%]"
            >
              <div className="rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] px-3.5 py-2.5 shadow-xl">
                <p className="text-sm sm:text-base font-extrabold text-white leading-tight">
                  AccuMax
                </p>
                <p className="text-[10px] sm:text-xs text-white/85 leading-snug mt-0.5 text-pretty">
                  Deep AI across the whole platform, plus orchestration
                </p>
              </div>
            </motion.div>
            </div>
          </div>

          {/* X axis label */}
          <div className="mt-3 pl-7 sm:pl-8 text-center">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--muted-foreground)]">
              AI tax-domain depth →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
