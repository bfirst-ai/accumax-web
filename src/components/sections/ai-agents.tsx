"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowRightLeft,
  BookOpenText,
  Braces,
  CalendarRange,
  ClipboardList,
  FileSpreadsheet,
  FolderTree,
  Globe,
  MessagesSquare,
  PenLine,
  ScanLine,
  SearchCheck,
  ShieldAlert,
  UserRound,
} from "lucide-react";

/* The AccuTax CoPilots suite. Names, headlines and descriptions come from
 * the product's own CoPilot list. */
const copilots = [
  {
    icon: ClipboardList,
    name: "AccuTax InTake",
    headline: "Simplify client intake",
    description:
      "Customizable guided intake forms that prefill from uploaded documents.",
  },
  {
    icon: ScanLine,
    name: "AccuTax Recognize",
    headline: "Recognize documents instantly",
    description: "Identify and tag tax forms and client documents automatically.",
  },
  {
    icon: Braces,
    name: "AccuTax Extract",
    headline: "Extract data with accuracy",
    description:
      "High-confidence extraction of fields from PDFs and images, with a review assistant for manual verification.",
  },
  {
    icon: ArrowRightLeft,
    name: "AccuTax Bridge",
    headline: "Transfer data to tax prep software",
    description:
      "Normalize extracted data and transfer it into your favorite TaxPrep tool.",
  },
  {
    icon: FolderTree,
    name: "AccuTax Organize",
    headline: "Organize client files automatically",
    description:
      "Consolidates everything a client sends — intake forms, chats, emails, direct uploads — into one organized file.",
  },
  {
    icon: UserRound,
    name: "AccuTax Profile",
    headline: "Client snapshot in seconds",
    description:
      "Summarizes every client input and synthesizes the work and forms needed.",
  },
  {
    icon: Globe,
    name: "AccuTax QuikChek",
    headline: "Quick IRS-based research for prospects",
    description:
      "Instant IRS-sourced answers to common tax questions on your own website, then converts the visitor into a lead.",
  },
  {
    icon: MessagesSquare,
    name: "AccuTax Assist",
    headline: "Self-help for clients",
    description:
      "IRS guidance plus the client's own profile — so trivial questions never reach your desk.",
  },
  {
    icon: BookOpenText,
    name: "AccuTax Research",
    headline: "Professional tax research engine",
    description:
      "Professional-grade research, citations and analysis from IRS.gov, client context and your Knowledge Hub.",
  },
  {
    icon: FileSpreadsheet,
    name: "AccuTax Prepare",
    headline: "Faster returns, ready for review",
    description:
      "Automated preparation of personal tax returns, with optional manual iteration.",
  },
  {
    icon: SearchCheck,
    name: "AccuTax Review",
    headline: "Identify gaps for professional review",
    description:
      "Multi-dimensional analysis surfacing audit flags, omissions, inconsistencies, inaccuracies and missed opportunities.",
  },
  {
    icon: CalendarRange,
    name: "AccuTax Plan",
    headline: "Advanced scenario-based tax planning",
    description: "Model outcomes, cashflow and tax impact across scenarios.",
  },
  {
    icon: ShieldAlert,
    name: "AccuTax Defense",
    headline: "Audit readiness and response",
    description:
      "Understand IRS notices, collect and analyze evidence, and draft responses.",
  },
  {
    icon: PenLine,
    name: "AccuTax Compose",
    headline: "Client, team and IRS communications",
    description:
      "Team, client and IRS communications with template, tone and e-signature support.",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function AiAgents() {
  return (
    <section
      id="ai-agents"
      className="relative py-20 md:py-28 overflow-hidden bg-[var(--gray-950)]"
      aria-labelledby="ai-agents-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--gray-900)] to-[var(--gray-950)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--gray-800)_1px,transparent_1px),linear-gradient(to_bottom,var(--gray-800)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[var(--accent)]/10 rounded-full blur-3xl" />

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 text-sm font-medium text-[var(--accent)] mb-6">
            AccuTax CoPilots
          </span>
          <h2
            id="ai-agents-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl text-balance"
          >
            A CoPilot for{" "}
            <span className="text-[var(--accent)]">every step of the work</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--gray-400)] leading-relaxed text-pretty">
            Fourteen CoPilots, one engine, one client record. They sit inside the
            work you already do — you stay in control, and every answer comes
            with its reasoning and its source.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {copilots.map((c) => (
            <motion.div
              key={c.name}
              variants={item}
              className="group relative rounded-2xl border border-[var(--gray-800)] bg-[var(--gray-900)]/80 p-6 backdrop-blur-sm hover:border-[var(--accent)]/40 hover:shadow-xl hover:shadow-[var(--accent)]/5 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-11 h-11 shrink-0 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] group-hover:scale-110 transition-transform duration-300">
                  <c.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[var(--accent)] transition-colors text-pretty text-balance">
                  {c.name}
                </h3>
              </div>
              <p className="text-sm font-semibold text-[var(--gray-300)] text-pretty">
                {c.headline}
              </p>
              <p className="mt-1.5 text-sm text-[var(--gray-400)] leading-relaxed text-pretty">
                {c.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold hover:underline"
          >
            Explore the CoPilots
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
