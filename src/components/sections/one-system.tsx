"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, Database, Layers } from "lucide-react";

/* The Practice OS and the CoPilots are halves of one product, but they have a
 * page each, which made them read as two things sold side by side. This band
 * says the relationship out loud and lives on BOTH pages: whichever half you
 * landed on, it names the other and shows how they join. */

type Half = "platform" | "copilots";

const halves = [
  {
    id: "platform" as const,
    icon: Layers,
    eyebrow: "The system your firm runs on",
    title: "Practice OS",
    body: "Client intake, organizers, documents, approvals, eSignature, invoicing, payments, dashboards and governance. The record of every client and every engagement.",
    href: "/features",
    cta: "Explore the Practice OS",
  },
  {
    id: "copilots" as const,
    icon: Bot,
    eyebrow: "The workforce inside it",
    title: "AccuTax CoPilots",
    body: "Fourteen CoPilots that do the work at each step — recognize, extract, prepare, review, plan, defend, compose. They run in the workflow, not in a separate tab.",
    href: "/copilots",
    cta: "See AccuTax CoPilots",
  },
];

export function OneSystem({ current }: { current: Half }) {
  return (
    <section
      id="one-system"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50"
      aria-labelledby="one-system-heading"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-4 py-1.5 text-sm font-medium text-[var(--primary)] mb-5">
            One system, not two products
          </span>
          <h2
            id="one-system-heading"
            className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl text-balance"
          >
            <span className="block">The CoPilots live inside</span>
            <span className="block gradient-text leading-[1.25] pb-[0.1em]">
              the Practice OS
            </span>
          </h2>
          <p className="mt-5 text-lg text-[var(--muted-foreground)] leading-relaxed text-pretty">
            AccuMax is one platform with two halves. Neither is sold on its own,
            and neither works without the other.
          </p>
        </div>

        {/* the outer frame is the point: both halves sit inside one platform */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border-2 border-[var(--primary)]/25 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 p-4 sm:p-6"
        >
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[var(--primary)] mb-4">
            AccuMax — one platform
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {halves.map((h) => {
              const here = h.id === current;
              return (
                <div
                  key={h.id}
                  className={`flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${
                    here
                      ? "border-[var(--primary)]/40"
                      : "border-[var(--border)]"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center w-11 h-11 shrink-0 rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 text-[var(--primary)]">
                      <h.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--muted-foreground)]">
                        {h.eyebrow}
                      </p>
                      <p className="text-lg font-bold text-[var(--foreground)]">
                        {h.title}
                      </p>
                    </div>
                  </div>

                  <p className="flex-1 text-sm text-[var(--muted-foreground)] leading-relaxed text-pretty">
                    {h.body}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[var(--border)]">
                    {here ? (
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
                        <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                        You are here
                      </span>
                    ) : (
                      <Link
                        href={h.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] hover:underline"
                      >
                        {h.cta}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* what actually joins them */}
          <div className="mt-4 flex items-start gap-3 rounded-2xl border border-[var(--primary)]/20 bg-white px-5 py-4">
            <Database
              className="h-5 w-5 shrink-0 mt-0.5 text-[var(--primary)]"
              aria-hidden
            />
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed text-pretty">
              <span className="font-bold text-[var(--foreground)]">
                One client record underneath both.
              </span>{" "}
              The CoPilots read and write the same file the Practice OS keeps, so
              there is nothing to sync between them — and no second copy of the
              client&apos;s numbers to drift.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
