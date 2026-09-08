"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is AccuMax?",
    answer:
      "A complete practice management system for CPA firms, with a workforce of AI CoPilots built into it. Client intake, documents, approvals, eSignature, invoicing, payments, dashboards and governance — plus fourteen AccuTax CoPilots that do the tax work alongside your team.",
  },
  {
    question: "What is AccuTax?",
    answer:
      "The single tax-domain AI engine every CoPilot runs on. Research, preparation, review, planning and audit defense are not separate products stitched together — they are one engine working on one client record. That is why the plan, the return and the defense can never quietly disagree.",
  },
  {
    question: "How is AccuMax different from bolting AI onto what I have?",
    answer:
      "Broad practice platforms give you breadth, but their AI is an add-on. Single-function AI tools go deep in one area and are blind to everything either side of it. AccuMax is one engine across the whole platform, so every CoPilot works from the same client file instead of its own copy.",
  },
  {
    question: "Do I have to replace my current tax software?",
    answer:
      "No. AccuMax runs beside what you already own — AccuTax Bridge hands normalized data straight into your existing tax prep tool. You can also start with a single CoPilot and add the rest as the need shows up; nothing has to be re-platformed later.",
  },
  {
    question: "What does it cost?",
    answer:
      "Three per-seat tiers billed annually, from $699 per seat/year, with most CoPilots unlimited on every tier. Full plans, allowances and terms are on the pricing page.",
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
            className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl text-balance"
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
