"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What portals does AccuMaxio offer?",
    answer:
      "AccuMaxio provides self-service portals for every role: Client Portal (clients upload docs, view workflow status, see approvers), Team Portal (manage assigned accounts, workflows, chat, notifications), and Admin Portal (firm-wide settings, dashboards, RBAC). Each portal is tailored so users see only what they need.",
  },
  {
    question: "How does the AI CoPilot work?",
    answer:
      "We offer an Onboarding CoPilot (QuickT) and a CPA & CSR CoPilot (CPAL) with conversation tracking and natural language search. The platform also includes intelligent forms with ID and data extraction and tax organizer generation. These tools augment your team without replacing judgment.",
  },
  {
    question: "Can we migrate from our current practice management system?",
    answer:
      "Yes. We support migration of accounts, contacts, templates (as resources), client- and firm-uploaded documents, and team docs. Our team will work with you to map data and handle exceptions. Export from your current system (e.g. as PDFs for invoices) and we’ll help you go live.",
  },
  {
    question: "Is AccuMaxio secure and compliant?",
    answer:
      "Yes. The platform is online-first with no local database, uses role-based access (RBAC) as a core principle, and provides organized, searchable audit logs for key events including signatures and approvals. We use bank-level encryption and meet common compliance requirements.",
  },
  {
    question: "What billing and payment options are included?",
    answer:
      "Plans include price lists, agreements, invoices, and payments. Features include ACH as a payment option, per-account payment method override, partial payments, invoice notes, and export to Excel. Scheduled invoices and close-invoice workflows are on the roadmap.",
  },
  {
    question: "Can we try AccuMaxio before committing?",
    answer:
      "Yes. Start with a free trial—no credit card required. You’ll have access to portals, workflows, and core features. Our team can walk you through setup, RBAC, and dashboards so you can evaluate fit for your firm.",
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
            Everything you need to know about AccuMaxio. Can't find an answer?{" "}
            <a
              href="/contact"
              className="text-[var(--primary)] hover:underline font-medium"
            >
              Contact our team
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
