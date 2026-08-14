"use client";

import { motion } from "framer-motion";
import { TrendingUp, Target } from "lucide-react";

export function Promise() {
  return (
    <section
      id="promise"
      className="relative py-20 md:py-28 overflow-hidden"
      aria-labelledby="promise-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--gray-50)] to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[var(--primary)]/8 rounded-full blur-3xl" />

      <div className="container relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-4 py-1.5 text-sm font-medium text-[var(--primary)] mb-6">
            <Target className="h-3.5 w-3.5 mr-2" aria-hidden />
            The AccuMax Promise
          </span>
          <h2
            id="promise-heading"
            className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl leading-tight"
          >
            From a system of tasks to a{" "}
            <span className="gradient-text">system of intelligence</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-3xl mx-auto">
            AccuMax transforms practice management into a system of
            intelligence, insight, and client value—delivering a{" "}
            <strong className="text-[var(--foreground)]">
              &gt;30% increase in Gross Margins
            </strong>{" "}
            through less labor per return, a cheaper labor mix, and more
            advisory revenue.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          className="mt-12 inline-flex items-center gap-4 rounded-2xl border-2 border-[var(--primary)]/25 bg-white px-8 py-6 shadow-xl shadow-[var(--primary)]/10"
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 text-[var(--primary)]">
            <TrendingUp className="h-8 w-8" aria-hidden />
          </div>
          <div className="text-left">
            <p className="text-3xl md:text-4xl font-extrabold gradient-text">
              &gt;30%
            </p>
            <p className="text-sm font-semibold text-[var(--foreground)]">
              Gross Margin Improvement
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}