"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Briefcase,
  Calculator,
  Check,
  Cpu,
  Database,
  FileSpreadsheet,
  Layers,
  Minus,
  Puzzle,
  Rocket,
  ShieldCheck,
} from "lucide-react";

/* What one engine over one record actually buys the firm. */
const benefits = [
  {
    icon: Rocket,
    title: "Start anywhere. Grow at your own pace.",
    body: "Take the whole platform on day one, or adopt a single agent and add the rest when you are ready. Nothing has to be re-platformed later.",
  },
  {
    icon: Database,
    title: "One copy of the client file.",
    body: "Every agent reads and writes the same record through AccuTax. Client data and returns are never copied from one tool into another, so nothing drifts out of sync.",
  },
  {
    icon: ShieldCheck,
    title: "Provenance that holds up.",
    body: "A single source of truth means no version-control guesswork and no reconciliation — just one defensible audit trail across every workflow.",
  },
];

/* ------------------------------------------------------------------ *
 * The AccuTax differentiator: one AI engine and one client record
 * underneath every agent. Shared by the homepage and the pricing page
 * so the story is told identically in both places.
 * ------------------------------------------------------------------ */

/* The stack a firm assembles today. Pulled together from what used to be
 * two separate before/after graphics on this page. */
const fragmented = [
  {
    icon: Briefcase,
    category: "Tax research",
    detail: "Separate login · answers live outside the client file",
  },
  {
    icon: Calculator,
    category: "Tax planning",
    detail: "Separate login · re-key the client's numbers to model",
  },
  {
    icon: FileSpreadsheet,
    category: "Return preparation",
    detail: "Separate login · export, import, then reconcile",
  },
  {
    icon: Layers,
    category: "Practice management",
    detail: "Separate login · the system of record, without the AI",
  },
  {
    icon: Puzzle,
    category: "Offshore coordination",
    detail: "No system at all · spreadsheets and email threads",
  },
];

/* Module short-names — the "AccuTax" prefix is carried by the engine bar below. */
const engineAgents = [
  "InTake",
  "Recognize",
  "Extract",
  "Bridge",
  "Organize",
  "Profile",
  "QuikChek",
  "Assist",
  "Research",
  "Prepare",
  "Review",
  "Plan",
  "Defense",
  "Compose",
];

/* Each answering tool sees a different slice of the corpus. */
const CORPUS = ["IRS.gov", "Client context", "Knowledge Hub"] as const;

const answerers = [
  {
    name: "QuikChek",
    audience: "Prospects, on your website",
    blurb:
      "Answers a set number of questions free, then invites the visitor to create an account or complete a lead form.",
    sees: 1,
  },
  {
    name: "Assist",
    audience: "Clients, in the portal",
    blurb:
      "Self-serve answers on their own return and account — fewer trivial questions landing on the CPA.",
    sees: 2,
  },
  {
    name: "Research",
    audience: "Your firm",
    blurb:
      "The full corpus, including everything your firm has put in the Knowledge Hub.",
    sees: 3,
  },
];

export function AccuTaxEngine({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-3 py-1 text-sm font-medium text-[var(--primary)] mb-5">
          <Cpu className="h-3.5 w-3.5 mr-1.5" aria-hidden />
          The <span className="whitespace-nowrap">AccuTax difference</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)] text-balance">
          <span className="block">An entire stack of integrated tools.</span>
          <span className="block gradient-text leading-[1.3] pb-[0.12em]">
            One platform.
          </span>
        </h2>
        <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed text-pretty">
          <span className="block">
            Breadth or intelligence&mdash;everyone else picks one.
          </span>
          <span className="block">
            AccuMax delivers deep AI across the full platform, plus
            orchestration.
          </span>
          <span className="block">
            You can upgrade at your own pace, even one tool at a time.
          </span>
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 items-stretch max-w-6xl mx-auto">
        {/* fragmented stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col rounded-2xl border border-[var(--border)] bg-white shadow-sm overflow-hidden"
        >
          <div className="px-5 py-3.5 border-b border-[var(--border)] bg-[var(--gray-50)]">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)]">
              CPA practice of today
            </p>
          </div>
          <div className="flex-1 p-5 space-y-3">
            {fragmented.map((f) => (
              <div
                key={f.category}
                className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-white px-4 py-3"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 shrink-0 rounded-lg bg-[var(--gray-100)] text-[var(--gray-500)]">
                  <f.icon className="h-4 w-4" aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-sm font-semibold text-[var(--foreground)]">
                      {f.category}
                    </span>
                    <span className="inline-flex items-center gap-1 shrink-0 rounded-full bg-[var(--gray-100)] px-2 py-0.5 text-[10px] font-semibold text-[var(--muted-foreground)] whitespace-nowrap">
                      <Database className="h-2.5 w-2.5" aria-hidden />
                      its own copy
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-[var(--muted-foreground)] text-pretty">
                    {f.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="px-5 py-4 border-t border-[var(--border)] bg-[var(--gray-50)]">
            <p className="text-sm text-[var(--muted-foreground)] text-pretty">
              Five separately-licensed tools. Five copies of the client&apos;s numbers —
              re-keyed, re-reconciled, and free to drift apart.
            </p>
          </div>
        </motion.div>

        {/* AccuMax on AccuTax */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col rounded-2xl border-2 border-[var(--primary)] bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 shadow-xl overflow-hidden"
        >
          <div className="px-5 py-3.5 border-b border-[var(--primary)]/20">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">
              CPA practice with AccuMax
            </p>
          </div>

          <div className="flex-1 p-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {engineAgents.map((a) => (
                <span
                  key={a}
                  className="rounded-lg border border-[var(--primary)]/15 bg-white px-2.5 py-2 text-center text-xs font-semibold text-[var(--foreground)] text-pretty"
                >
                  {a}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 py-3 text-[var(--primary)]">
              <ArrowDown className="h-5 w-5" aria-hidden />
              <span className="text-[11px] font-bold uppercase tracking-widest">
                all read &amp; write through
              </span>
              <ArrowDown className="h-5 w-5" aria-hidden />
            </div>

            <div className="rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] px-4 py-3.5 shadow-lg text-center">
              <p className="text-base font-extrabold text-white leading-tight">AccuTax</p>
              <p className="text-[11px] text-white/85 mt-0.5">one tax-domain AI engine</p>
            </div>

            <div className="mt-2 rounded-xl border border-[var(--primary)]/20 bg-white px-4 py-3 text-center">
              <p className="text-sm font-bold text-[var(--foreground)]">
                One client record
              </p>
              <p className="text-[11px] text-[var(--muted-foreground)] mt-0.5">
                a single version of the truth
              </p>
            </div>
          </div>

          <div className="px-5 py-4 border-t border-[var(--primary)]/20">
            <p className="text-sm font-semibold text-[var(--foreground)] text-pretty">
              One engine. One record. Every agent sees the same facts, so the plan, the
              return and the defense can never disagree.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Corpus ladder — same engine, deliberately different knowledge per audience */}
      <div className="mt-16 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)] text-balance">
            One engine, three audiences — each with its own corpus
          </h3>
          <p className="mt-3 text-[var(--muted-foreground)] text-pretty">
            Prospects, clients and your own team all ask questions. AccuTax answers each
            from exactly the knowledge that audience should see, and no more.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {answerers.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`flex flex-col rounded-2xl border bg-white p-5 shadow-sm ${
                a.sees === 3
                  ? "border-2 border-[var(--primary)] shadow-lg"
                  : "border-[var(--border)]"
              }`}
            >
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--primary)]">
                AccuTax
              </p>
              <p className="text-lg font-bold text-[var(--foreground)] leading-tight">
                {a.name}
              </p>
              <p className="mt-1 text-xs font-semibold text-[var(--muted-foreground)]">
                {a.audience}
              </p>
              <p className="mt-3 text-sm text-[var(--gray-700)] leading-relaxed text-pretty flex-1">
                {a.blurb}
              </p>
              <ul className="mt-4 space-y-1.5 border-t border-[var(--border)] pt-3">
                {CORPUS.map((c, ci) => {
                  const on = ci < a.sees;
                  return (
                    <li
                      key={c}
                      className={`flex items-center gap-2 text-sm ${
                        on
                          ? "font-semibold text-[var(--foreground)]"
                          : "text-[var(--gray-400)]"
                      }`}
                    >
                      {on ? (
                        <Check
                          className="h-4 w-4 shrink-0 text-[var(--success)]"
                          aria-hidden
                        />
                      ) : (
                        <Minus className="h-4 w-4 shrink-0" aria-hidden />
                      )}
                      <span>{c}</span>
                      <span className="sr-only">
                        {on ? " included" : " not used"}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-[var(--muted-foreground)] mt-5 max-w-3xl mx-auto text-pretty">
          Same engine, same version of the truth — the difference is only how much of the
          corpus each audience is allowed to reach.
        </p>
      </div>

      {/* What one engine over one record buys the firm */}
      <div className="grid md:grid-cols-3 gap-5 mt-12 max-w-6xl mx-auto">
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
    </div>
  );
}

/** Full-width homepage section wrapper. */
export function AccuTaxSection() {
  return (
    <section
      id="accutax"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50/50"
      aria-labelledby="accutax-heading"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AccuTaxEngine />
      </div>
    </section>
  );
}
