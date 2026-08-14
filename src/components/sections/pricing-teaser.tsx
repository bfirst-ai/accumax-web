"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Essentials",
    tier: "Access",
    description: "Solo / micro firm",
    features: [
      "Practice OS + AI Reviewer, Researcher & triage",
      "Client intake & engagement",
      "eSignatures, approvals & invoices",
      "The on-ramp that beats incumbents' mid-tier",
    ],
  },
  {
    name: "Professional",
    tier: "Volume · Hero",
    popular: true,
    description: "Everyday working firm",
    features: [
      "Everything in Essentials, plus:",
      "AI Tax Preparer & full agent suite",
      "Entry-level Tax Planning",
      "Payments, AR aging & reconciliation",
      "The volume tier most firms buy",
    ],
  },
  {
    name: "Advisory",
    tier: "Expansion",
    description: "Multi-preparer firm",
    features: [
      "Everything in Professional, plus:",
      "High-end Tax Planning & IRS Audit Defense",
      "Firm-grade governance & dashboards",
      "Unlimited usage allowance",
    ],
  },
  {
    name: "Enterprise",
    tier: "Category",
    description: "PE roll-ups · offshore · multi-entity",
    features: [
      "Everything in Advisory, plus:",
      "Offshore-delivery governance layer",
      "Platform fee + usage, sold not self-served",
      "Dedicated Success Team, white-glove SLA",
    ],
  },
];

export function PricingTeaser() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50" aria-labelledby="pricing-heading">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 id="pricing-heading" className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl">
            Priced for Land-and-Expand
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            Tiers + usage + platform. We don&apos;t compete on price—we compete on
            the AI doing the work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden hover-lift group bg-white ${
                plan.popular
                  ? "border-2 border-[var(--primary)] shadow-2xl shadow-[var(--primary)]/20 md:scale-105"
                  : "border-[var(--border)] shadow-sm hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 z-10">
                  <Badge variant="default" className="rounded-none rounded-bl-lg bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white border-0 px-4 py-1.5 font-semibold">
                    <Sparkles className="h-3 w-3 mr-1" aria-hidden />
                    Most Popular
                  </Badge>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="pb-2 relative">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--primary)] mb-1">
                  {plan.tier}
                </p>
                <h3 className="text-2xl font-bold text-[var(--gray-900)] mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-4">
                  {plan.description}
                </p>
                <p className="text-sm font-semibold text-[var(--gray-700)]">
                  Annual plans · AI bundled as a baseline allowance
                </p>
              </CardHeader>
              <CardContent className="space-y-4 relative">
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-[var(--gray-700)]"
                    >
                      {f.endsWith("plus:") ? (
                        <span className="font-semibold text-[var(--foreground)]">
                          {f}
                        </span>
                      ) : (
                        <>
                          <Check
                            className="h-5 w-5 shrink-0 text-[var(--success)] mt-0.5"
                            aria-hidden
                          />
                          <span>{f}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href="/pricing"
                  variant={plan.popular ? "primary" : "outline"}
                  className={`w-full block text-center pt-2 mt-6 ${
                    plan.popular ? "shadow-lg shadow-[var(--primary)]/30" : ""
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                </ButtonLink>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-[var(--muted-foreground)] mt-8"
        >
          AI is bundled as a baseline allowance and metered as credits—returns
          &amp; usage. Revenue grows with the work; margins hold as models get
          cheaper.
        </motion.p>
      </div>
    </section>
  );
}