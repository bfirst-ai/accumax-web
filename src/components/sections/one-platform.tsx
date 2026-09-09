"use client";

import { motion } from "framer-motion";

/* Closing reassurance band: it works with what the firm already runs.
 * Lives at the bottom of the page, not inside the hero. */

import { integrations } from "@/lib/integrations";

export function OnePlatform() {
  return (
    <section
      id="one-platform"
      className="py-16 md:py-20 bg-white border-t border-[var(--border)]"
      aria-labelledby="one-platform-heading"
    >
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="one-platform-heading"
          className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)] text-balance"
        >
          <span className="block">One platform.</span>
          <span className="block gradient-text leading-[1.3] pb-[0.1em]">
            Every tool your firm already uses.
          </span>
        </h2>
        <p className="mt-4 text-[var(--muted-foreground)] max-w-2xl mx-auto text-pretty">
          AccuMax runs beside your existing stack and hands data straight into
          the tax software you already prepare and file in.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-[var(--gray-500)]"
        >
          {integrations.map((name) => (
            <span
              key={name}
              className="text-lg font-semibold hover:text-[var(--primary)] transition-colors cursor-default"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
