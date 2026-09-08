"use client";

import { motion } from "framer-motion";
import { Users2, Clock, Hourglass } from "lucide-react";

/* Three beats, in order: the people are leaving, the work keeps growing,
 * and the window to fix it is closing. Each beat carries its own evidence. */

const beats = [
  {
    icon: Users2,
    step: "First",
    title: "The people are leaving",
    body: "The profession is losing capacity faster than it can replace it. You are not imagining the hiring market — the supply of qualified people is genuinely shrinking.",
    facts: [
      { value: "50–75%", label: "of CPAs are near retirement" },
      { value: "−6.6%", label: "accounting graduates in 2023–24" },
    ],
  },
  {
    icon: Clock,
    step: "Meanwhile",
    title: "The work keeps growing",
    body: "Every remaining person carries more. Most of the extra hours are not the work you bill best — they are the handling, chasing and re-keying around it.",
    facts: [
      { value: "40–60%", label: "of CPA time goes to admin, not advisory" },
      { value: "Stricter", label: "compliance rigor as capacity shrinks" },
    ],
  },
  {
    icon: Hourglass,
    step: "And",
    title: "The window is closing",
    body: "Clients expect faster, deeper answers, and buyers are actively pricing firms on margin. Firms that fix throughput now are the ones being valued well.",
    facts: [
      { value: "Faster", label: "client expectations, deeper insight" },
      { value: "Rising", label: "PE roll-ups, priced on revenue & EBITDA" },
    ],
  },
];

export function MarketProblem() {
  return (
    <section
      id="problem"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="problem-heading"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-4 py-1.5 text-sm font-medium text-[var(--primary)] mb-6">
            Why this is so hard right now
          </span>
          <h2
            id="problem-heading"
            className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl text-balance"
          >
            <span className="block">Fewer people.</span>
            <span className="block">
              <span className="whitespace-nowrap">More work.</span>{" "}
              <span className="whitespace-nowrap">Less time.</span>
            </span>
          </h2>
          <p className="mt-5 text-lg text-[var(--muted-foreground)] leading-relaxed text-pretty">
            Three things are happening at once, and they compound. Hiring your
            way out of it is no longer on the table.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {beats.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex flex-col rounded-2xl border border-[var(--border)] bg-white p-7 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-11 h-11 shrink-0 rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 text-[var(--primary)]">
                  <b.icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--muted-foreground)]">
                  {b.step}
                </span>
              </div>

              <p className="text-xl font-bold text-[var(--foreground)] text-pretty">
                {b.title}
              </p>
              <p className="mt-2 flex-1 text-[var(--muted-foreground)] leading-relaxed text-pretty">
                {b.body}
              </p>

              <dl className="mt-5 space-y-3 border-t border-[var(--border)] pt-4">
                {b.facts.map((f) => (
                  <div key={f.label} className="flex items-baseline gap-3">
                    <dt className="text-lg font-extrabold text-[var(--primary)] shrink-0 tabular-nums">
                      {f.value}
                    </dt>
                    <dd className="text-sm text-[var(--muted-foreground)] text-pretty">
                      {f.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center text-lg font-semibold text-[var(--foreground)] max-w-3xl mx-auto text-pretty"
        >
          The only lever left is how much each person can get through — which is
          exactly what AccuMax changes.
        </motion.p>
      </div>
    </section>
  );
}
