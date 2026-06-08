"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const integrations = [
  "QuickBooks",
  "Xero",
  "Stripe",
  "DocuSign",
  "Zoho Sign",
  "Slack",
  "Microsoft 365",
  "Google Workspace",
  "Dropbox",
  "HubSpot",
];

export function Integrations() {
  return (
    <section id="integrations" className="py-16 md:py-24 bg-white" aria-labelledby="integrations-heading">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 id="integrations-heading" className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl">
            Connects With Your Stack
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            Integrate with the tools you already use—accounting, payments,
            storage, and CRM.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {integrations.map((name) => (
            <div
              key={name}
              className="px-6 py-4 rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] font-medium hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/5 transition-all hover:scale-105 hover-lift"
            >
              {name}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:underline"
          >
            See all integrations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
