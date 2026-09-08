"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white pt-16 md:pt-24 lg:pt-32 pb-24 lg:pb-32"
      aria-label="Hero"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[var(--primary)] opacity-20 blur-[100px] floating"></div>
        <div className="absolute right-0 top-1/4 -z-10 h-[200px] w-[200px] rounded-full bg-[var(--accent)] opacity-15 blur-[80px] floating" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* clamp, not the step scale: the two nowrap phrases must never break,
            so the type shrinks with the viewport rather than overflowing. */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 lg:mb-16 text-center text-[clamp(1.65rem,4.6vw,3rem)] font-extrabold tracking-tight text-[var(--foreground)] text-balance"
        >
          <span className="block">
            <span className="whitespace-nowrap">CPA Practice Management</span>{" "}
            <span className="whitespace-nowrap gradient-text leading-[1.25] pb-[0.1em] inline-block">
              Reinvented with AI
            </span>
          </span>
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl leading-tight text-balance">
                <span className="block">More throughput.</span>
                <span className="block">Higher ARPU.</span>
                <span className="block text-[var(--primary)]">
                  Lower cost to serve.
                </span>
              </p>
              <p className="mt-6 text-lg md:text-xl text-[var(--muted-foreground)] max-w-xl leading-relaxed text-pretty">
                A workforce of AI agents inside a complete practice operating
                system. The same team moves more work, each client is worth
                more, and every hour of it costs you less.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink
                  href="/contact#demo"
                  variant="primary"
                  size="xl"
                  className="shadow-xl shadow-[var(--primary)]/20"
                >
                  <CalendarCheck className="h-5 w-5" aria-hidden />
                  Book a Demo
                </ButtonLink>
                <ButtonLink
                  href="/pricing"
                  variant="outline"
                  size="xl"
                  className="gap-2 bg-white/50 backdrop-blur-sm"
                >
                  <Sparkles className="h-5 w-5" aria-hidden />
                  Start Free Trial
                </ButtonLink>
              </div>
              <p className="mt-5 text-sm text-[var(--muted-foreground)]">
                ✓ 90-day free trial, full platform access &nbsp;•&nbsp; ✓ Dedicated success manager
              </p>
            </motion.div>
          </div>

          {/* Hero visual - AI Agent Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="relative perspective-1000"
          >
            <div className="relative rounded-xl border border-[var(--border)] bg-white shadow-2xl shadow-[var(--gray-900)]/10 overflow-hidden aspect-[4/3] max-w-2xl mx-auto transform rotate-y-12">
              {/* Mockup Header */}
              <div className="border-b border-[var(--border)] bg-[var(--gray-50)] p-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="ml-4 h-5 w-1/3 rounded-md bg-white border border-[var(--border)]" />
              </div>

              {/* Mockup Body */}
              <div className="flex h-full bg-[var(--gray-50)]">
                {/* Sidebar */}
                <div className="w-16 md:w-48 border-r border-[var(--border)] bg-white p-4 hidden sm:flex flex-col gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[var(--primary)]/10 mb-4" />
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-6 w-full rounded-md bg-[var(--gray-100)]"
                    />
                  ))}
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 overflow-hidden">
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-8 w-32 rounded-lg bg-[var(--gray-200)]" />
                    <div className="h-8 w-40 rounded-lg bg-[var(--primary)]" />
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {["AccuTax Prepare", "AccuTax Research", "AccuTax Plan"].map((agent) => (
                      <div
                        key={agent}
                        className="h-24 rounded-xl border border-[var(--border)] bg-white p-4 shadow-sm"
                      >
                        <div className="h-8 w-8 rounded-full bg-[var(--primary)]/10 mb-2" />
                        <div className="h-2 w-16 rounded bg-[var(--gray-100)]" />
                        <p className="text-[10px] font-semibold text-[var(--primary)] mt-1.5">
                          {agent}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl border border-[var(--border)] bg-white h-48 p-4 shadow-sm">
                    <div className="flex items-end gap-3 h-32 mt-4 px-2">
                      {[40, 70, 45, 90, 60, 80, 50, 75, 65].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm bg-[var(--primary)]/80"
                          style={{ height: `${h}%`, opacity: 0.5 + i * 0.05 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements (Glassmorphism Cards) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 z-20 rounded-lg border border-white/20 bg-white/80 backdrop-blur-md p-4 shadow-xl max-w-[220px]"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  ✓
                </div>
                <div>
                  <p className="text-xs text-[var(--muted-foreground)]">
                    Return prepared in minutes
                  </p>
                  <p className="font-semibold text-sm">AccuTax Prepare</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-6 -right-6 z-20 rounded-lg border border-white/20 bg-white/80 backdrop-blur-md p-4 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[var(--primary)] animate-pulse" />
                <p className="text-xs font-semibold">{">25% Gross Margin Lift"}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}