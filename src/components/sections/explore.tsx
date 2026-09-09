"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Layers, Sparkles, TrendingUp } from "lucide-react";

/* Homepage signpost: three doors into the site. The homepage sells and
 * points; the destination pages do the explaining. */

const doors = [
  {
    icon: Bot,
    eyebrow: "AccuTax CoPilots",
    title: "The AI that does the work",
    body: "Fourteen CoPilots covering the whole engagement — intake, recognize, extract, bridge, organize, profile, research, prepare, review, plan, defend, compose.",
    href: "/copilots",
    cta: "See AccuTax CoPilots",
    accent: true,
  },
  {
    icon: Layers,
    eyebrow: "Practice OS",
    title: "The system your firm runs on",
    body: "Client intake through approvals, eSignature, invoicing, payments, dashboards and governance — with the integrations your firm already depends on.",
    href: "/features",
    cta: "Explore the platform",
  },
  {
    icon: TrendingUp,
    eyebrow: "Why AccuMax",
    title: "Why it beats a bolt-on",
    body: "One AI engine over one client record, running beside what you already own — and a measurable lift in gross margin.",
    href: "/why-accumax",
    cta: "See the difference",
  },
];

const reasons = [
  {
    title: "One engine, one version of the truth",
    body: "Every CoPilot reads and writes the same client record, so the plan and the return can never disagree.",
  },
  {
    title: "Nothing to rip out",
    body: "Runs beside your current tax prep software. Start with one CoPilot and grow into the rest.",
  },
  {
    title: "Priced like practice management",
    body: "Per seat, per year, with most CoPilots unlimited on every tier. No integration bill.",
  },
];

export function Explore() {
  return (
    <section
      id="explore"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50/50"
      aria-labelledby="explore-heading"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-4 py-1.5 text-sm font-medium text-[var(--primary)] mb-6">
            <Sparkles className="h-3.5 w-3.5 mr-2" aria-hidden />
            Everything your practice runs on
          </span>
          {/* clamp, not the step scale: neither line may break mid-phrase. */}
          <h2
            id="explore-heading"
            className="text-[clamp(1.5rem,4.8vw,2.5rem)] font-bold tracking-tight text-[var(--foreground)] text-balance"
          >
            <span className="block">A modern practice management system,</span>
            <span className="block gradient-text leading-[1.25] pb-[0.1em]">
              and an AI workforce inside it
            </span>
          </h2>
          <p className="mt-5 text-lg text-[var(--muted-foreground)] leading-relaxed text-pretty">
            <span className="block">
              You stay in control of every return. The AI is on call the whole
              time —
            </span>
            <span className="block">ambient, explained and audit-ready.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {doors.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:shadow-xl ${
                d.accent
                  ? "border-2 border-[var(--primary)] bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 shadow-lg"
                  : "border-[var(--border)] bg-white shadow-sm hover:border-[var(--primary)]/25"
              }`}
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white text-[var(--primary)] shadow-sm mb-4">
                <d.icon className="h-6 w-6" aria-hidden />
              </span>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--primary)]">
                {d.eyebrow}
              </p>
              <p className="mt-1 text-xl font-bold text-[var(--foreground)] text-pretty">
                {d.title}
              </p>
              <p className="mt-3 flex-1 text-[var(--muted-foreground)] leading-relaxed text-pretty">
                {d.body}
              </p>
              <Link
                href={d.href}
                className="mt-5 inline-flex items-center gap-2 font-semibold text-[var(--primary)] hover:underline"
              >
                {d.cta}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Three reasons, stated once */}
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
              className="rounded-xl border border-[var(--border)] bg-white p-5"
            >
              <p className="text-sm font-bold text-[var(--foreground)] text-pretty">
                {r.title}
              </p>
              <p className="mt-1.5 text-sm text-[var(--muted-foreground)] leading-relaxed text-pretty">
                {r.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
