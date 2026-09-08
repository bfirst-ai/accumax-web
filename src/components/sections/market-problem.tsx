"use client";

import { motion, type Variants } from "framer-motion";
import {
  Users2,
  GraduationCap,
  TrendingUp,
  Brain,
  Clock,
  MessagesSquare,
  Scale,
} from "lucide-react";

const stats = [
  {
    icon: Users2,
    value: "50–75%",
    label: "of CPAs near retirement",
  },
  {
    icon: GraduationCap,
    value: "6.6%",
    label: "fewer accounting graduates in 2023–24",
  },
  {
    icon: TrendingUp,
    value: "Rising",
    label: "PE roll-ups—valuations tied to revenue & EBITDA",
  },
  {
    icon: Brain,
    value: "Confusion",
    label: "about the most prudent way to leverage AI",
  },
  {
    icon: Clock,
    value: "40–60%",
    label: "of CPA time spent on admin, not advisory",
  },
  {
    icon: MessagesSquare,
    value: "Faster",
    label: "client expectations demand deeper insight",
  },
  {
    icon: Scale,
    value: "Stricter",
    label: "compliance rigor while staff capacity shrinks",
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function MarketProblem() {
  return (
    <section
      id="problem"
      className="relative py-20 md:py-28 overflow-hidden bg-[var(--gray-950)]"
      aria-labelledby="problem-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--gray-900)] to-[var(--gray-950)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--gray-800)_1px,transparent_1px),linear-gradient(to_bottom,var(--gray-800)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 text-sm font-medium text-[var(--accent)] mb-6">
            Why this is so hard right now
          </span>
          <h2
            id="problem-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Firms are stuck in a{" "}
            <span className="text-[var(--accent)]">process treadmill</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--gray-400)] leading-relaxed">
            Too many tools. Too much process. Not enough talent.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="group rounded-2xl border border-[var(--gray-800)] bg-[var(--gray-900)]/80 p-6 backdrop-blur-sm hover:border-[var(--accent)]/40 hover:shadow-lg hover:shadow-[var(--accent)]/5 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-6 w-6" aria-hidden />
              </div>
              <p className="text-2xl md:text-3xl font-extrabold text-white mb-1.5">
                {stat.value}
              </p>
              <p className="text-sm text-[var(--gray-400)] leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-[var(--gray-400)] mt-12 max-w-2xl mx-auto"
        >
          The industry is at an inflection point—and AccuMax turns it into your
          biggest opportunity.
        </motion.p>
      </div>
    </section>
  );
}