"use client";

import { motion } from "framer-motion";

/* Four numbers that carry the whole story. Dark band so it lands as a
 * statement rather than a row of footnotes. */

const stats = [
  {
    value: "14",
    unit: "CoPilots",
    label: "One for every stage",
    detail: "Intake → file → defend",
  },
  {
    value: "1",
    unit: "engine",
    label: "One version of the truth",
    detail: "AccuTax, under all of them",
  },
  {
    value: ">25",
    unit: "%",
    label: "Gross margin lift",
    detail: "Less labor, cheaper mix, more advisory",
  },
  {
    value: "90",
    unit: "days",
    label: "Free trial",
    detail: "Full platform, no card",
  },
];

export function StatsSection() {
  return (
    <section
      className="relative py-20 md:py-24 overflow-hidden bg-[var(--gray-950)]"
      aria-label="AccuMax at a glance"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--gray-900)] to-[var(--gray-950)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--gray-800)_1px,transparent_1px),linear-gradient(to_bottom,var(--gray-800)_1px,transparent_1px)] bg-[size:48px_48px] opacity-25" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[680px] h-[260px] bg-[var(--primary)]/15 rounded-full blur-3xl" />

      <div className="container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="relative text-center lg:text-left lg:pl-6 lg:border-l lg:border-[var(--gray-800)] first:lg:border-l-0 first:lg:pl-0"
            >
              <p className="flex items-baseline justify-center lg:justify-start gap-1.5">
                <span className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-white to-[var(--gray-400)] bg-clip-text text-transparent leading-none pb-[0.06em]">
                  {s.value}
                </span>
                <span className="text-lg md:text-xl font-bold text-[var(--accent)]">
                  {s.unit}
                </span>
              </p>
              <p className="mt-3 text-base font-bold text-white text-pretty">
                {s.label}
              </p>
              <p className="mt-1 text-sm text-[var(--gray-400)] text-pretty">
                {s.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
