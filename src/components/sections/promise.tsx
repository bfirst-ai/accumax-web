"use client";

import { motion } from "framer-motion";
import { TrendingUp, Target } from "lucide-react";
import { MarginAsterisk, MarginQualifier } from "@/components/ui/margin-claim";

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
            className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl leading-tight text-balance"
          >
            Three levers, and{" "}
            <span className="gradient-text">AccuMax pulls all three</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-3xl mx-auto text-pretty">
            A firm only grows profit three ways: push more work through, earn
            more from each client, or spend less delivering it. AccuMax moves
            all three at once. On an illustrative model that compounds into{" "}
            <strong className="text-[var(--foreground)]">
              30% more gross margin dollars
              <MarginAsterisk />
            </strong>
            .
          </p>
        </motion.div>

        {/* The three levers */}
        <div className="grid md:grid-cols-3 gap-5 mt-12 max-w-5xl mx-auto text-left">
          {[
            {
              lever: "Higher throughput",
              body: "Agents recognize the forms, extract the data, prepare the return and review it. The same team moves more work without another hire.",
            },
            {
              lever: "Increased ARPU",
              body: "Planning, audit defense and advisory you could never staff at scale — now billable on clients you already have.",
            },
            {
              lever: "Reduced costs",
              body: "Less labor per engagement, and a cheaper wage mix on the labor that remains. Fewer tools to license, nothing to integrate.",
            },
          ].map((l, i) => (
            <motion.div
              key={l.lever}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm"
            >
              <p className="text-lg font-bold text-[var(--foreground)]">
                {l.lever}
              </p>
              <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed text-pretty">
                {l.body}
              </p>
            </motion.div>
          ))}
        </div>

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
              +30%
            </p>
            <p className="text-sm font-semibold text-[var(--foreground)]">
              More gross margin dollars
              <MarginAsterisk />
            </p>
            <MarginQualifier />
          </div>
        </motion.div>
      </div>
    </section>
  );
}