"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is AccuMax?",
    answer:
      "AccuMax is an AI-powered practice platform that elevates the CPA. It combines a workforce of tax-domain AI agents—AccuTax Research, AccuTax Prepare, AccuTax Review, AccuTax Plan, AccuTax Defense, and AccuTax Bridge—inside a complete practice operating system covering intake, approvals, invoicing, payments, and governance.",
  },
  {
    question: "How is AccuMax different from other practice platforms?",
    answer:
      "Broad practice platforms give breadth but treat AI as a bolt-on. Single-function AI tools go deep in one area—research, planning, or prep—and nothing else. AccuMax is alone top-right: deep AI across the full platform, plus orchestration. Five separately-licensed tools collapse into one system of record.",
  },
  {
    question: "What is AccuTax?",
    answer:
      "AccuTax is the single tax-domain AI engine every AccuMax agent runs on. Research, planning, preparation, review and audit defense are not separate products stitched together—they are one engine working on one client record. A firm assembling the same capability from separate tools ends up with a copy of the client's numbers inside each one: the planner works from one version, the preparer from another, and the two quietly stop agreeing. On AccuTax there is only ever one version of the truth, so what you planned is what you file and what you defend.",
  },
  {
    question: "What does the AI agent workforce do?",
    answer:
      "Agents cover the entire tax pipeline: AccuTax Research answers contextual questions on prior- and current-year facts; the AccuTax Prepare drafts federal returns in minutes from source documents; the AccuTax Review checks for gaps, errors, and cross-form validations; the AccuTax Plan runs multi-year what-if scenarios; AccuTax Defense evaluates and responds to IRS notices in one click; and AccuTax Bridge extracts data from uploaded forms into TaxPrep software—ours or theirs. All of them run on AccuTax, so they share one version of the client’s numbers.",
  },
  {
    question: "How does the AI handle compliance?",
    answer:
      "Compliance is a core pillar. Everything is audit-ready, traceable, and defensible—immutable audit logs, document provenance, eSignatures via DocuSign or Zoho Sign, entity-level governance, and secure, predictable workflows. AI is a partner that augments judgment, never a replacement.",
  },
  {
    question: "How does AccuMax pricing work?",
    answer:
      "Three per-seat tiers—Standard at $799, Professional at $999, and Premium at $1,199 per seat, per year, with up to 12.5% off on multi-year terms. That's at or below what firms already pay for practice management alone. Seven AccuTax CoPilots are unlimited on every tier; heavier agents carry an allowance in activated accounts and meter at a flat per-account rate that falls as your tier rises. Revenue grows with the work and margins hold as models get cheaper.",
  },
  {
    question: "Can we try AccuMax before committing?",
    answer:
      "Yes. Start a 90-day free trial with full platform access and a dedicated success manager from day one—no credit card required. Or book a personalized 30-minute demo to see AccuMax working in a firm just like yours.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            Everything you need to know about AccuMax. Can&apos;t find an answer?{" "}
            <a
              href="/contact"
              className="text-[var(--primary)] hover:underline font-medium"
            >
              Talk to our team
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[var(--border)] rounded-lg overflow-hidden bg-[var(--card)] hover:border-[var(--primary)]/30 transition-colors"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                  {faq.question}
                </span>
                <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5" aria-hidden />
                  ) : (
                    <Plus className="h-5 w-5" aria-hidden />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-[var(--muted-foreground)] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]">
            <div className="flex-1 text-left">
              <p className="font-semibold text-[var(--foreground)] mb-1">
                Still have questions?
              </p>
              <p className="text-sm text-[var(--muted-foreground)]">
                Our team is here to help you find the right solution.
              </p>
            </div>
            <a
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--primary-dark)] transition-colors shadow-lg shadow-[var(--primary)]/20"
            >
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
