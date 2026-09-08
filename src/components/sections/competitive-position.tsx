"use client";

import { motion, type Variants } from "framer-motion";
import {
  Layers,
  Briefcase,
  Calculator,
  Puzzle,
  X,
  Sparkles,
  FileSpreadsheet,
  Star,
  Check,
  TrendingUp,
} from "lucide-react";

const quadrantDots = [
  {
    label: "Practice platforms",
    tools: "broad workflow coverage, AI bolted on",
    top: "28%",
    left: "27%",
    kind: "dot" as const,
  },
  {
    label: "Traditional prep",
    tools: "return calculation, no practice layer",
    top: "78%",
    left: "22%",
    kind: "dot" as const,
  },
  {
    label: "Point AI tools",
    tools: "deep in one function, nothing either side",
    top: "70%",
    left: "68%",
    kind: "box" as const,
  },
];

const takeaways = [
  {
    title: "Practice platforms",
    body: "give breadth, but their AI is a bolt-on.",
  },
  {
    title: "Point AI tools",
    body: "give deep AI in one function — research, planning, or prep — and nothing else.",
  },
  {
    title: "AccuMax",
    body: "is alone top-right: deep AI across the whole platform, plus orchestration.",
    accent: true,
  },
];

const comparison = [
  {
    icon: Briefcase,
    title: "Tax research",
    tools: "Separate login · answers live outside the client file",
  },
  {
    icon: Calculator,
    title: "Tax planning",
    tools: "Separate login · re-key the client's numbers to model",
  },
  {
    icon: FileSpreadsheet,
    title: "Return prep",
    tools: "Separate login · export, import, then reconcile",
  },
  {
    icon: Layers,
    title: "Practice management",
    tools: "Separate login · the system of record, without the AI",
  },
  {
    icon: Puzzle,
    title: "Offshore coordination",
    tools: "No system at all · spreadsheets and email threads",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export function CompetitivePosition() {
  return (
    <section
      id="competitive-position"
      className="relative py-20 md:py-28 overflow-hidden"
      aria-labelledby="competitive-heading"
    >
      <div className="absolute inset-0 bg-white" />

      <div className="container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-4 py-1.5 text-sm font-medium text-[var(--primary)] mb-6">
            Why not just bolt on an AI tool?
          </span>
          <h2
            id="competitive-heading"
            className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl"
          >
            An entire stack of integrated tools.{" "}
            <span className="gradient-text">One platform.</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--muted-foreground)] leading-relaxed">
            Breadth or intelligence—everyone else picks one. AccuMax delivers
            deep AI across the full platform, plus orchestration. You can
            upgrade at your own pace, even one tool at a time.
          </p>
        </motion.div>

        {/* Quadrant chart: Practice-OS breadth vs AI tax-domain depth */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 grid lg:grid-cols-[1.6fr_1fr] gap-5"
        >
          <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--gray-950)] p-5 md:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--gray-800)_1px,transparent_1px),linear-gradient(to_bottom,var(--gray-800)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
            {/* Plot area */}
            <div className="relative pl-8 pb-8">
              {/* Y axis label */}
              <span className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--gray-500)] whitespace-nowrap">
                Practice-OS breadth →
              </span>
              <div className="relative aspect-[4/3] w-full rounded-xl border border-[var(--gray-800)] bg-[var(--gray-900)]/60">
                {/* Quadrant divider lines */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--gray-700)] border-l border-dashed border-[var(--gray-700)]" />
                <div className="absolute top-1/2 left-0 right-0 h-px bg-[var(--gray-700)] border-t border-dashed border-[var(--gray-700)]" />

                {/* Point AI tools dashed box */}
                <div className="absolute rounded-lg border border-dashed border-[var(--success)]/30 bg-[var(--success)]/5" style={{ top: "58%", left: "52%", right: "6%", bottom: "6%" }} />

                {/* AccuMax — top right, glowing */}
                <div className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center" style={{ top: "22%", left: "76%" }}>
                  <span className="relative flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-full bg-[var(--warning)] shadow-[0_0_24px_6px_var(--warning)] ring-4 ring-[var(--warning)]/20">
                    <Star className="h-3.5 w-3.5 md:h-4 md:w-4 text-[var(--gray-950)] fill-[var(--gray-950)]" aria-hidden />
                  </span>
                  <span className="mt-2 text-xs md:text-sm font-bold text-[var(--warning)] whitespace-nowrap">
                    AccuMax
                  </span>
                  <span className="hidden md:block text-[10px] text-[var(--gray-400)] text-center max-w-[9rem] leading-snug mt-0.5">
                    deep AI across the full platform + orchestration
                  </span>
                </div>

                {/* Other dots */}
                {quadrantDots.map((d) => (
                  <div
                    key={d.label}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                    style={{ top: d.top, left: d.left }}
                  >
                    <span className="h-3 w-3 rounded-full bg-[var(--success)] ring-4 ring-[var(--success)]/15" />
                    <span className="mt-1.5 text-[10px] md:text-xs font-semibold text-white whitespace-nowrap">
                      {d.label}
                    </span>
                    <span className="hidden sm:block text-[9px] md:text-[10px] text-[var(--gray-500)] text-center max-w-[10rem] leading-snug">
                      {d.tools}
                    </span>
                  </div>
                ))}
              </div>
              {/* X axis label */}
              <span className="block mt-2 text-right text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--gray-500)]">
                AI tax-domain depth →
              </span>
            </div>
          </div>

          {/* Takeaways */}
          <div className="rounded-2xl border border-[var(--border)] bg-white p-6 md:p-7 flex flex-col justify-center gap-5">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">
              The trade nobody escapes
            </p>
            {takeaways.map((t) => (
              <div key={t.title}>
                <p
                  className={`font-bold ${
                    t.accent ? "gradient-text" : "text-[var(--foreground)]"
                  }`}
                >
                  {t.title}
                </p>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid md:grid-cols-2 gap-5"
        >
          {/* What a firm assembles today */}
          <div className="rounded-2xl border-2 border-dashed border-[var(--gray-300)] bg-[var(--gray-50)] p-7">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--gray-200)] text-[var(--gray-600)]">
                  <X className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-[var(--gray-600)]">
                  What a firm assembles today
                </h3>
              </div>
            </div>
            <div className="space-y-3">
              {comparison.map((c) => (
                <div
                  key={c.title}
                  className="flex items-center gap-3 rounded-xl border border-[var(--gray-200)] bg-white px-4 py-3"
                >
                  <c.icon className="h-5 w-5 text-[var(--gray-500)] shrink-0" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-[var(--gray-700)]">
                      {c.title}
                    </p>
                    <p className="text-xs text-[var(--gray-500)]">{c.tools}</p>
                  </div>
                </div>
              ))}
              <p className="text-xs text-[var(--gray-500)] px-1 pt-1">
                Five separately-licensed tools—plus offshore run on
                spreadsheets. Four copies of the client’s numbers.
              </p>
            </div>
          </div>

          {/* One platform */}
          <div className="relative rounded-2xl border-2 border-[var(--primary)] bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 p-7 shadow-xl shadow-[var(--primary)]/10">
            <div className="absolute -top-3 right-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] px-3 py-1 text-xs font-bold text-white shadow-lg">
                <Sparkles className="h-3 w-3" aria-hidden />
                ONE PLATFORM
              </span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white">
                <Sparkles className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-[var(--foreground)]">
                AccuMax
              </h3>
            </div>
            <div className="space-y-3">
              {[
                "AccuTax — one AI engine, one client record",
                "AccuTax Research",
                "AccuTax Plan (multi-year, what-if)",
                "AccuTax Prepare",
                "AccuTax Review",
                "Full practice OS (intake → bill → govern)",
                "Offshore-delivery orchestration (roadmap)",
              ].map((line) => (
                <div
                  key={line}
                  className="flex items-center gap-3 rounded-xl border border-[var(--primary)]/15 bg-white px-4 py-3"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]" />
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    {line}
                  </p>
                </div>
              ))}
              <p className="text-xs text-[var(--muted-foreground)] px-1 pt-1">
                Five tools collapse into one system of record — one copy of the client file, no re-keying between tools, one audit trail.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-sm font-semibold text-[var(--foreground)]">
            Practice platforms give breadth, but their AI is a bolt-on. Point
            tools give deep AI in one function—and nothing else.{" "}
            <span className="gradient-text font-bold">
              AccuMax is alone top-right.
            </span>
          </p>
        </motion.div>

        {/* What consolidation is worth */}
        <div className="grid sm:grid-cols-3 gap-5 mt-14 max-w-5xl mx-auto">
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
              value: "ZERO",
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
                  s.highlight
                    ? "text-[var(--primary)]"
                    : "text-[var(--muted-foreground)]"
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
      </div>
    </section>
  );
}