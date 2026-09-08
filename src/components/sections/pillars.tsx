"use client";

import { motion, type Variants } from "framer-motion";
import { Sparkles, Eye, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "Ambient Intelligence",
    subtitle: "AI that adapts to you",
    points: [
      "Intelligence is everywhere, not in one feature",
      "The system anticipates, guides, and clarifies",
      "CPAs stay in control",
      "AI is a partner, not a replacement",
    ],
    accent: "from-violet-500/20 to-violet-600/5",
    text: "text-[var(--accent)]",
  },
  {
    icon: Eye,
    title: "Effortless Clarity",
    subtitle: "Power that feels simple",
    points: [
      "Simplicity without dumbing down",
      "Streamlined workflows",
      "Cognitive load reduction",
      "Visual clarity and conceptual clarity",
    ],
    accent: "from-sky-500/20 to-sky-600/5",
    text: "text-[var(--primary)]",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Compliance",
    subtitle: "Accuracy you can defend",
    points: [
      "Audit-ready",
      "Traceable",
      "Defensible",
      "Secure and predictable",
    ],
    accent: "from-emerald-500/20 to-emerald-600/5",
    text: "text-[var(--success)]",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Pillars() {
  return (
    <section
      id="pillars"
      className="relative py-20 md:py-28 overflow-hidden"
      aria-labelledby="pillars-heading"
    >
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--gray-200)_1px,transparent_1px),linear-gradient(to_bottom,var(--gray-200)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-4 py-1.5 text-sm font-medium text-[var(--primary)] mb-6">
            The AccuMax pillars
          </span>
          <h2
            id="pillars-heading"
            className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl text-balance"
          >
            The AI-powered practice platform that{" "}
            <span className="gradient-text">elevates the CPA</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--muted-foreground)] leading-relaxed">
            Not AI, not the process—you. Three design pillars guide everything
            we build.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={item}
              className="group relative h-full"
            >
              <div
                className={`relative h-full rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm hover:shadow-xl hover:shadow-[var(--primary)]/5 hover:border-[var(--primary)]/25 transition-all duration-300 ease-out overflow-hidden`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${pillar.accent} opacity-30 rounded-t-2xl pointer-events-none`}
                />
                <div className="relative">
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-[var(--border)] shadow-sm mb-6 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 ${pillar.text}`}
                  >
                    <pillar.icon className="h-8 w-8" aria-hidden />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--foreground)] mb-1 text-balance">
                    {pillar.title}
                  </h3>
                  <p className={`text-sm font-semibold ${pillar.text} mb-5`}>
                    {pillar.subtitle}
                  </p>
                  <ul className="space-y-2.5">
                    {pillar.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-[var(--muted-foreground)] leading-relaxed"
                      >
                        <span
                          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${pillar.text}`}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}