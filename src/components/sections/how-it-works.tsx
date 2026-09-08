"use client";

import { motion } from "framer-motion";
import { Layers, Bot, Hand, Plug } from "lucide-react";

/* How the outcome is produced: a real practice OS, with a workforce of
 * CoPilots inside it — and the CPA in the driver's seat throughout. */

const halves = [
  {
    icon: Layers,
    title: "A complete practice management system",
    body: "Intake, organizers, documents, approvals, eSignature, invoicing, payments, dashboards and governance. The system your firm actually runs on — not an add-on to one.",
  },
  {
    icon: Bot,
    title: "A workforce of AccuTax CoPilots inside it",
    body: "Recognize, extract, prepare, review, plan, defend and correspond. The CoPilots live in the workflow, not in a separate tab you have to remember to open.",
  },
];

const principles = [
  {
    title: "Ambient",
    body: "The AI is already where the work is. Nothing to launch, paste into, or copy back out.",
  },
  {
    title: "Explained",
    body: "Every answer shows its reasoning and its source, so you can check it before you sign it.",
  },
  {
    title: "Compliant",
    body: "Audit-ready logs and document provenance on every action, by default.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="how-heading"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-4 py-1.5 text-sm font-medium text-[var(--primary)] mb-6">
            How it works
          </span>
          <h2
            id="how-heading"
            className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl text-balance"
          >
            Your practice system,{" "}
            <span className="gradient-text">with a workforce inside it</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--muted-foreground)] leading-relaxed text-pretty">
            You stay in control of every return. The AI is on call the whole
            time — never in the way, never unexplained.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {halves.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="rounded-2xl border border-[var(--border)] bg-white p-7 shadow-sm"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 text-[var(--primary)] mb-4">
                <h.icon className="h-6 w-6" aria-hidden />
              </span>
              <p className="text-lg font-bold text-[var(--foreground)] text-pretty">
                {h.title}
              </p>
              <p className="mt-2 text-[var(--muted-foreground)] leading-relaxed text-pretty">
                {h.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* In control */}
        <div className="mt-6 rounded-2xl border-2 border-[var(--primary)]/25 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 p-7">
          <div className="flex items-start gap-4">
            <span className="inline-flex items-center justify-center w-12 h-12 shrink-0 rounded-2xl bg-white text-[var(--primary)] shadow-sm">
              <Hand className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <p className="text-lg font-bold text-[var(--foreground)]">
                You are always in control
              </p>
              <p className="mt-1.5 text-[var(--muted-foreground)] leading-relaxed text-pretty">
                Nothing is filed, sent or signed without you. The CoPilots do
                the gathering, the drafting and the checking — the judgment stays
                yours.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-[var(--primary)]/15 bg-white p-4"
              >
                <p className="text-sm font-bold text-[var(--primary)] uppercase tracking-widest">
                  {p.title}
                </p>
                <p className="mt-1.5 text-sm text-[var(--muted-foreground)] leading-relaxed text-pretty">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Answers the first objection every firm raises. */
export function NoRipAndReplace() {
  const points = [
    {
      title: "Keep what you already run",
      body: "AccuMax works alongside your current tax prep software and your existing systems. Bridge hands data straight into your favorite TaxPrep tool.",
    },
    {
      title: "Start with a subset",
      body: "Take one CoPilot, or the whole platform. Add the rest whenever the need shows up — nothing has to be re-platformed later.",
    },
    {
      title: "Grow at your own pace",
      body: "Allowances and modules scale with the firm. You are never buying capacity a year before you need it.",
    },
  ];

  return (
    <section
      id="no-rip-and-replace"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50/50"
      aria-labelledby="norip-heading"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center rounded-full border border-[var(--success)]/25 bg-[var(--success)]/5 px-4 py-1.5 text-sm font-medium text-[var(--success)] mb-6">
            <Plug className="h-3.5 w-3.5 mr-2" aria-hidden />
            No rip-and-replace
          </span>
          <h2
            id="norip-heading"
            className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl text-balance"
          >
            You don&apos;t have to tear out{" "}
            <span className="gradient-text">what you already have</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--muted-foreground)] leading-relaxed text-pretty">
            Run AccuMax next to your current setup. Start with one CoPilot and
            grow into the rest as the need shows up.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm"
            >
              <p className="text-base font-bold text-[var(--foreground)] text-pretty">
                {p.title}
              </p>
              <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed text-pretty">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
