"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Standard",
    tier: "Access",
    price: 799,
    description: "Solo / micro firm",
    features: [
      "Practice OS, InTake, Recognize, Extract, Organize, Profile, Review & Compose — all unlimited",
      "AccuTax Research, 1040 Preparer & Bridge — 10 accounts each",
      "The on-ramp that already beats incumbents' mid-tier",
    ],
  },
  {
    name: "Professional",
    tier: "Volume · Hero",
    price: 999,
    description: "Everyday working firm",
    features: [
      "Everything in Standard, plus:",
      "AccuTax Defense & AccuTax Plan — 10 accounts each",
      "AccuTax Research, 1040 Preparer & Bridge — 20 accounts each (2×)",
    ],
  },
  {
    name: "Premium",
    tier: "Scale",
    price: 1199,
    popular: true,
    description: "Scaling teams & high volume — the tier most firms buy",
    features: [
      "Everything in Professional, plus:",
      "AccuTax Assist — client-portal self-help",
      "AccuTax Defense — unlimited",
      "AccuTax Plan — 20 accounts",
      "AccuTax Research, 1040 Preparer & Bridge — 40 accounts each (4×)",
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
            From $699 per seat, per year — practice management prices for an
            entire AI workforce. We don&apos;t compete on price; we compete on the
            AI doing the work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
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
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-[var(--foreground)]">$</span>
                  <span className="text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
                    {plan.price.toLocaleString()}
                  </span>
                  <span className="text-sm font-medium text-[var(--muted-foreground)] ml-1">
                    /seat per year
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] mt-1">
                  Billed up front · save up to 12.5% on multi-year terms
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
                  Start Free Trial
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
          Seven AccuTax CoPilots are unlimited on every tier. Heavier agents carry an account allowance, then meter at a flat
          per-account rate that falls as your tier rises.
        </motion.p>
      </div>
    </section>
  );
}