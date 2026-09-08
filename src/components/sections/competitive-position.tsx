"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

/* Captions break at the comma, one clause per line. They are nowrap so the
 * box can never chop a clause in half. */
const quadrantDots = [
  {
    label: "Practice platforms",
    tools: ["broad workflow coverage,", "AI bolted on"],
    top: "28%",
    left: "27%",
    kind: "dot" as const,
  },
  {
    label: "Traditional prep",
    tools: ["return calculation,", "no practice layer"],
    top: "78%",
    left: "22%",
    kind: "dot" as const,
  },
  {
    label: "Point AI tools",
    tools: ["deep in one function,", "nothing either side"],
    top: "70%",
    left: "68%",
    kind: "box" as const,
  },
];

const takeaways = [
  {
    title: "Practice platforms",
    body: "give breadth, but their AI is a bolt-on.",
  },
  {
    title: "Point AI tools",
    body: "give deep AI in one function — research, planning, or prep — and nothing else.",
  },
  {
    title: "AccuMax",
    body: "is alone top-right: deep AI across the whole platform, plus orchestration.",
    accent: true,
  },
];



export function CompetitivePosition() {
  return (
    <section
      id="competitive-position"
      className="relative py-20 md:py-28 overflow-hidden"
      aria-labelledby="competitive-heading"
    >
      <div className="absolute inset-0 bg-white" />

      <div className="container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-4 py-1.5 text-sm font-medium text-[var(--primary)] mb-6">
            Why not just bolt on an AI tool?
          </span>
          <h2
            id="competitive-heading"
            className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl text-balance"
          >
            <span className="block">An entire stack of integrated tools.</span>
            <span className="block gradient-text leading-[1.25] pb-[0.1em]">One platform.</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--muted-foreground)] leading-relaxed">
            Breadth or intelligence—everyone else picks one. AccuMax delivers
            deep AI across the full platform, plus orchestration. You can
            upgrade at your own pace, even one tool at a time.
          </p>
        </motion.div>

        {/* Quadrant chart: Practice-OS breadth vs AI tax-domain depth */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 grid lg:grid-cols-[1.6fr_1fr] gap-5"
        >
          {/* Light panel: the dark ground made the plotted labels unreadable.
           * Axis labels sit ON their axes -- the Y label runs up the left edge
           * in vertical writing mode, the X label is centred under the plot. */}
          <div className="rounded-2xl border border-[var(--border)] bg-white p-5 md:p-7 shadow-sm">
            <div className="grid grid-cols-[auto_1fr] gap-x-3">
              {/* Y axis — row 1, so it centres on the plot alone */}
              <div className="flex items-center justify-center">
                <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)] whitespace-nowrap">
                  Practice-OS breadth &rarr;
                </span>
              </div>

              <div className="relative aspect-[4/3] w-full min-w-0 rounded-xl border border-[var(--border)] bg-[var(--gray-50)]">
                  {/* Quadrant dividers */}
                  <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-[var(--gray-300)]" />
                  <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-[var(--gray-300)]" />

                  {/* Point AI tools region */}
                  <div
                    className="absolute rounded-lg border border-dashed border-[var(--gray-400)]/50 bg-white/70"
                    style={{ top: "58%", left: "52%", right: "6%", bottom: "6%" }}
                  />

                  {/* AccuMax — top right */}
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                    style={{ top: "22%", left: "76%" }}
                  >
                    <span className="relative flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-full bg-[var(--primary)] shadow-lg shadow-[var(--primary)]/40 ring-4 ring-[var(--primary)]/15">
                      <Star className="h-3.5 w-3.5 md:h-4 md:w-4 text-white fill-white" aria-hidden />
                    </span>
                    <span className="mt-2 text-xs md:text-sm font-bold text-[var(--primary)] whitespace-nowrap">
                      AccuMax
                    </span>
                    <span className="hidden md:block text-[10px] text-[var(--muted-foreground)] text-center leading-snug mt-0.5">
                      <span className="block whitespace-nowrap">
                        deep AI across the full platform
                      </span>
                      <span className="block whitespace-nowrap">
                        + orchestration
                      </span>
                    </span>
                  </div>

                  {/* The rest of the market */}
                  {quadrantDots.map((d) => (
                    <div
                      key={d.label}
                      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                      style={{ top: d.top, left: d.left }}
                    >
                      <span className="h-3 w-3 rounded-full bg-[var(--gray-400)] ring-4 ring-[var(--gray-400)]/20" />
                      <span className="mt-1.5 text-[10px] md:text-xs font-semibold text-[var(--foreground)] whitespace-nowrap">
                        {d.label}
                      </span>
                      <span className="hidden sm:block text-[9px] md:text-[10px] text-[var(--muted-foreground)] text-center leading-snug">
                        {d.tools.map((clause) => (
                          <span key={clause} className="block whitespace-nowrap">
                            {clause}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
              </div>

              {/* X axis — row 2, second column, so it sits under the plot */}
              <div aria-hidden />
              <p className="mt-3 text-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)]">
                AI tax-domain depth &rarr;
              </p>
            </div>
          </div>

          {/* Takeaways */}
          <div className="rounded-2xl border border-[var(--border)] bg-white p-6 md:p-7 flex flex-col justify-center gap-5">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">
              The trade nobody escapes
            </p>
            {takeaways.map((t) => (
              <div key={t.title}>
                <p
                  className={`font-bold ${
                    t.accent ? "gradient-text" : "text-[var(--foreground)]"
                  }`}
                >
                  {t.title}
                </p>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-sm font-semibold text-[var(--foreground)]">
            Practice platforms give breadth, but their AI is a bolt-on. Point
            tools give deep AI in one function—and nothing else.{" "}
            <span className="gradient-text font-bold">
              AccuMax is alone top-right.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}