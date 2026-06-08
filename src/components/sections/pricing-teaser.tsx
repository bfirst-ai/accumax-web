"use client";

import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Starter",
    price: 29,
    description: "Solo practitioners and small teams",
    features: [
      "Client portal & team portal",
      "Basic workflows & templates",
      "Document storage 10GB",
      "eSignatures & approvals",
    ],
  },
  {
    name: "Professional",
    price: 59,
    popular: true,
    description: "Growing firms",
    features: [
      "All portals (Client, Team, Admin)",
      "Workflow automation & RBAC",
      "AI CoPilot (onboarding & CPA)",
      "Invoices, payments, ACH",
      "Chat, notifications, audit logs",
    ],
  },
  {
    name: "Business",
    price: 99,
    description: "Established practices",
    features: [
      "Unlimited users & accounts",
      "Firm-wide dashboards & reports",
      "Intelligent forms & data extraction",
      "Partial payments, scheduled invoices",
      "Priority support",
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
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            Plans that scale with your practice. Start free, upgrade when you
            need more.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {plans.map((plan, index) => (
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
                    Most Popular
                  </Badge>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="pb-2 relative">
                <h3 className="text-2xl font-bold text-[var(--gray-900)] mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-[var(--gray-900)]">
                    ${plan.price}
                  </span>
                  <span className="text-[var(--muted-foreground)] text-base">
                    /user/month
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 relative">
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-[var(--gray-700)]"
                    >
                      <Check
                        className="h-5 w-5 shrink-0 text-[var(--success)] mt-0.5"
                        aria-hidden
                      />
                      <span>{f}</span>
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
                  {plan.name === "Business" ? "Contact Sales" : "Start Free Trial"}
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
          All plans include a 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
