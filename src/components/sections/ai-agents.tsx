"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  BookOpenText,
  FileSpreadsheet,
  SearchCheck,
  CalendarRange,
  ShieldAlert,
  ArrowRightLeft,
  ArrowRight,
} from "lucide-react";

const agents = [
  {
    icon: BookOpenText,
    name: "Tax Researcher",
    description:
      "Contextual, comprehensive answers on prior- and current-year facts.",
  },
  {
    icon: FileSpreadsheet,
    name: "1040 Preparer",
    description: "Prepares federal returns in minutes from source documents.",
  },
  {
    icon: SearchCheck,
    name: "1040 Reviewer",
    description:
      "Reviews returns for gaps—errors, warnings, cross-form validations.",
  },
  {
    icon: CalendarRange,
    name: "Tax Planner",
    description:
      "Multi-year, goal-oriented opportunities with what-if scenario planning.",
  },
  {
    icon: ShieldAlert,
    name: "IRS Audit Defense",
    description: "One-click evaluation and response to IRS notices.",
  },
  {
    icon: ArrowRightLeft,
    name: "AccuBridge",
    description:
      "Recognizes uploaded forms, extracts data, and bridges it into TaxPrep software—ours or theirs.",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 text-sm font-medium text-[var(--accent)] mb-6">
            Product depth · AI agents
          </span>
          <h2
            id="ai-agents-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            A workforce of{" "}
            <span className="text-[var(--accent)]">
              tax-domain AI agents
            </span>
          </h2>
          <p className="mt-5 text-lg text-[var(--gray-400)] leading-relaxed">
            Not a chatbot bolt-on. A team of specialized agents that research,
            prepare, review, plan, and defend—end to end.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {agents.map((agent) => (
            <motion.div
              key={agent.name}
              variants={item}
              className="group relative rounded-2xl border border-[var(--gray-800)] bg-[var(--gray-900)]/80 p-7 backdrop-blur-sm hover:border-[var(--accent)]/40 hover:shadow-xl hover:shadow-[var(--accent)]/5 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] mb-5 group-hover:scale-110 group-hover:shadow-[0_0_20px_var(--accent)]/30 transition-all duration-300">
                <agent.icon className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
                {agent.name}
              </h3>
              <p className="text-[var(--gray-400)] leading-relaxed">
                {agent.description}
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
          <p className="text-[var(--gray-500)] text-sm mb-4">
            . . . Stay Tuned for More!
          </p>
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold hover:underline"
          >
            Explore the agent suite
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}