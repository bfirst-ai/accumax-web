"use client";

import { motion, type Variants } from "framer-motion";
import {
  TrendingUp,
  Sparkles,
  Heart,
  Layers,
  Zap,
} from "lucide-react";

const goals = [
  {
    icon: TrendingUp,
    title: "Take on more work",
    short: "Without hiring to match",
    description: "Add clients and revenue without adding people in the same proportion.",
    accent: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: Sparkles,
    title: "Get admin off your desk",
    short: "Billable hours, not busywork",
    description: "Onboarding, chasing documents and re-keying data stop eating your day.",
    accent: "from-violet-500/20 to-violet-600/5",
  },
  {
    icon: Heart,
    title: "Keep clients longer",
    short: "And earn more from each",
    description: "Faster answers and a portal clients actually use—so they stay, and spend more.",
    accent: "from-rose-500/20 to-rose-600/5",
  },
  {
    icon: Layers,
    title: "Bill for advisory",
    short: "Not just compliance",
    description: "Planning and audit defense you can offer at scale, to clients you already have.",
    accent: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    icon: Zap,
    title: "Stay defensible",
    short: "On every single return",
    description: "Audit-ready logs and provenance on every return, without anyone remembering to.",
    accent: "from-amber-500/20 to-amber-600/5",
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

export function GoalsSection() {
  return (
    <section
      id="goals"
      className="relative py-20 md:py-28 overflow-hidden"
      aria-labelledby="goals-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--gray-50)] to-white" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--gray-200)_1px,transparent_1px),linear-gradient(to_bottom,var(--gray-200)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--primary)]/5 rounded-full blur-3xl" />

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-4 py-1.5 text-sm font-medium text-[var(--primary)] mb-6">
            What firms tell us they want
          </span>
          <h2
            id="goals-heading"
            className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl text-balance"
          >
            Grow the firm without growing the headcount
          </h2>
          <p className="mt-5 text-lg text-[var(--muted-foreground)] leading-relaxed">
            Five things nearly every firm we talk to is trying to do.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5"
        >
          {goals.map((goal, index) => (
            <motion.div
              key={goal.title}
              variants={item}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="group relative"
            >
              <div
                className={`
                  relative h-full rounded-2xl border border-[var(--border)] bg-white
                  p-6 shadow-sm
                  hover:border-[var(--primary)]/25 hover:shadow-xl hover:shadow-[var(--primary)]/5
                  transition-all duration-300 ease-out
                  overflow-hidden
                `}
              >
                {/* Left accent bar on hover */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${goal.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl`}
                />
                {/* Subtle top gradient */}
                <div
                  className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${goal.accent} opacity-30 rounded-t-2xl pointer-events-none`}
                />

                <div className="relative">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--gray-100)] text-xs font-bold text-[var(--gray-600)] group-hover:bg-[var(--primary)]/10 group-hover:text-[var(--primary)] transition-colors mb-4">
                    {index + 1}
                  </span>
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-[var(--border)] shadow-sm text-[var(--primary)] mb-5 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <goal.icon className="h-7 w-7" aria-hidden />
                  </div>
                  <h3 className="font-bold text-lg text-[var(--foreground)] mb-1.5 text-balance">
                    {goal.title}
                  </h3>
                  <p className="text-sm font-semibold text-[var(--primary)] mb-3">
                    {goal.short}
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
