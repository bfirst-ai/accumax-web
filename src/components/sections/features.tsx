"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Workflow,
  FileText,
  Bot,
  LayoutDashboard,
  PenTool,
  CreditCard,
  ArrowRight,
  Shield,
  MessageSquare,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: LayoutDashboard,
    title: "Self-Service Portals",
    description:
      "Client Portal, Team Portal, and Admin Portal—each role gets a tailored experience. Clients upload docs and see workflow status; your team manages work by account with RBAC and OBT.",
  },
  {
    icon: Bot,
    title: "Augmented Intelligence",
    description:
      "Onboarding CoPilot (QuickT), CPA & CSR CoPilot (CPAL), intelligent forms with ID and data extraction, and tax organizer generation. Natural language search and document intelligence.",
  },
  {
    icon: Workflow,
    title: "Workflows & Operations",
    description:
      "Multiple services, configurable workflows, templates, to-dos, and batch automations. Track by stage: NEW, Assigned, On Hold, Completed. Firm-wide and assigned-account dashboards.",
  },
  {
    icon: FileText,
    title: "Documents & Approvals",
    description:
      "Resources, client- and firm-uploaded docs, team docs. Built-in approvals, eSignatures, letters, notepads, and notes. Audit logs for signatures and approvals.",
  },
  {
    icon: MessageSquare,
    title: "Chat, Notifications & Broadcasts",
    description:
      "In-app chat with reply-with-quote, search, pin, and message counters. Notifications for key events (new accounts, file uploads, workflow events) to the right people via portal and email.",
  },
  {
    icon: CreditCard,
    title: "Billing & Payments",
    description:
      "Price lists, agreements, invoices, and payments. ACH and per-account payment options, partial payments, invoice notes, and export to Excel.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50" aria-labelledby="features-heading">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl">
            Portals, AI, and Operations in One Place
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            Self-service portals, augmented intelligence co-pilots, workflows, documents, approvals, chat, and billing—optimized for efficiency and compliance.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={item}>
              <Card className="h-full hover-lift border-[var(--border)] bg-[var(--card)] group relative overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-6 md:p-8 relative">
                  <div className="rounded-xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 w-14 h-14 flex items-center justify-center mb-5 text-[var(--primary)] group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] leading-relaxed">
                    {feature.description}
                  </p>
                  <Link
                    href="/features"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)] hover:gap-2 transition-all"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/features">
            <span className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:underline">
              View all features
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
