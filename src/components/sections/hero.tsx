"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-3 py-1 text-sm font-medium text-[var(--primary)] mb-6">
                <span className="flex h-2 w-2 rounded-full bg-[var(--primary)] mr-2 animate-pulse"></span>
                AI-Powered Practice Management
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl leading-tight">
                Empower Your Firm with{" "}
                <span className="gradient-text">
                  Augmented Intelligence
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[var(--muted-foreground)] max-w-xl leading-relaxed">
                State-of-the-art AI tools that enhance client relationships, streamline operations, and drive growth. One platform for portals, workflows, documents, and billing—delivering unparalleled value and insightful guidance.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink
                  href="/contact"
                  variant="primary"
                  size="xl"
                  className="shadow-xl shadow-[var(--primary)]/20"
                >
                  Start Free Trial
                </ButtonLink>
                <ButtonLink
                  href="/contact#demo"
                  variant="outline"
                  size="xl"
                  className="gap-2 bg-white/50 backdrop-blur-sm"
                >
                  <Play className="h-5 w-5" aria-hidden />
                  Watch Demo
                </ButtonLink>
              </div>
            </motion.div>
          </div>

          {/* Hero visual - Detailed Dashboard Mockup */}
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
                    <div className="h-8 w-24 rounded-lg bg-[var(--primary)]" />
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-24 rounded-xl border border-[var(--border)] bg-white p-4 shadow-sm"
                      >
                        <div className="h-8 w-8 rounded-full bg-[var(--primary)]/10 mb-2" />
                        <div className="h-2 w-16 rounded bg-[var(--gray-100)]" />
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
              className="absolute -bottom-6 -left-6 z-20 rounded-lg border border-white/20 bg-white/80 backdrop-blur-md p-4 shadow-xl max-w-[200px]"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  ✓
                </div>
                <div>
                  <p className="text-xs text-[var(--muted-foreground)]">
                    Task Completed
                  </p>
                  <p className="font-semibold text-sm">Monthly Return</p>
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
                <p className="text-xs font-semibold">Live Real-time Sync</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Built for / integrations strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-20 md:mt-28"
        >
          <div className="rounded-2xl border border-[var(--border)] bg-white/80 backdrop-blur-sm shadow-sm overflow-hidden">
            <div className="px-6 py-5 md:px-8 md:py-6">
              <p className="text-center text-base md:text-lg font-semibold text-[var(--foreground)] mb-1">
                Built for modern accounting and professional services firms
              </p>
              <p className="text-center text-sm text-[var(--muted-foreground)] mb-6 max-w-2xl mx-auto">
                One platform for client management, workflows, and billing—trusted by firms who demand reliability and compliance.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-[var(--gray-500)]">
                {["QuickBooks", "Xero", "Stripe", "DocuSign", "Slack"].map(
                  (name) => (
                    <span
                      key={name}
                      className="text-lg font-semibold hover:text-[var(--primary)] transition-colors cursor-default"
                    >
                      {name}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
