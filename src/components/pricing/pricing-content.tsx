"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Minus, Plus, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";

type Plan = {
  name: string;
  tier: string;
  description: string;
  cta: string;
  href: string;
  popular?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Essentials",
    tier: "Access",
    description: "Solo / micro firm",
    cta: "Start Free Trial",
    href: "/contact",
    features: [
      "Practice OS + AI Reviewer, Researcher & triage",
      "Client intake & engagement",
      "Tax organizer generation",
      "eSignatures, approvals & invoices",
      "The on-ramp that already beats incumbents' mid-tier",
    ],
  },
  {
    name: "Professional",
    tier: "Volume · Hero",
    popular: true,
    description: "Everyday working firm",
    cta: "Start Free Trial",
    href: "/contact",
    features: [
      "Everything in Essentials, plus:",
      "AI Tax Preparer & full agent suite",
      "Entry-level Tax Planning",
      "Payments, AR aging & account reconciliation",
      "Dashboards, audit logs & governance",
      "The volume tier most firms buy",
    ],
  },
  {
    name: "Advisory",
    tier: "Expansion",
    description: "Multi-preparer firm",
    cta: "Start Free Trial",
    href: "/contact",
    features: [
      "Everything in Professional, plus:",
      "High-end Tax Planning",
      "IRS Audit Defense",
      "Firm-grade governance & dashboards",
      "Unlimited usage allowance",
    ],
  },
  {
    name: "Enterprise",
    tier: "Category",
    description: "PE roll-ups · offshore · multi-entity",
    cta: "Contact Sales",
    href: "/contact",
    features: [
      "Everything in Advisory, plus:",
      "Offshore-delivery governance & standardization layer",
      "Platform fee + usage, sold not self-served",
      "Dedicated Success Team, white-glove SLA",
      "Custom domains, SSO & data residency",
    ],
  },
];

type Row = { label: string; values: (boolean | string)[] };
type Group = { title: string; rows: Row[] };

// Columns map to: Essentials, Professional, Advisory, Enterprise
const comparison: Group[] = [
  {
    title: "AI Agent Workforce",
    rows: [
      { label: "AI Tax Researcher", values: [true, true, true, true] },
      { label: "AI 1040 Reviewer", values: [true, true, true, true] },
      { label: "AI 1040 Preparer", values: [false, true, true, true] },
      { label: "AI Tax Planner (entry-level)", values: [false, true, true, true] },
      { label: "AI Tax Planner (high-end, multi-year, what-if)", values: [false, false, true, true] },
      { label: "IRS Audit Defense", values: [false, false, true, true] },
      { label: "AccuBridge forms extraction", values: [false, true, true, true] },
    ],
  },
  {
    title: "Practice OS",
    rows: [
      { label: "Client intake & engagement", values: [true, true, true, true] },
      { label: "Tax organizer generation", values: [true, true, true, true] },
      { label: "Workflows & automations", values: [true, true, true, true] },
      { label: "eSignatures (DocuSign / Zoho Sign)", values: [true, true, true, true] },
      { label: "Invoices, payments & ACH", values: [true, true, true, true] },
      { label: "AR aging & reconciliation", values: [false, true, true, true] },
      { label: "Firm-wide dashboards & drilldowns", values: [false, false, true, true] },
      { label: "Offshore-delivery orchestration", values: [false, false, false, true] },
    ],
  },
  {
    title: "Governance & Support",
    rows: [
      { label: "Immutable audit logs & provenance", values: [true, true, true, true] },
      { label: "Entity-level governance", values: [false, true, true, true] },
      { label: "AI usage allowance", values: ["Baseline", "Baseline", "Unlimited", "Custom"] },
      { label: "Support", values: ["Email", "Email", "Priority", "Dedicated Success Team"] },
      { label: "White-glove SLA", values: [false, false, false, true] },
    ],
  },
];

const faqs = [
  {
    q: "Can I try AccuMax before committing?",
    a: "Yes — start a 90-day free trial with full platform access and a dedicated success manager from day one. No credit card required.",
  },
  {
    q: "How does AI usage / credits work?",
    a: "AI is bundled as a baseline allowance in every plan and metered as credits beyond it (returns & usage). Packs of credits are added per user, so revenue grows with the work and margins hold as models get cheaper.",
  },
  {
    q: "Are plans billed annually?",
    a: "Yes — annual plans are pre-purchased. We're an accessible entry with value-based expansion, not a discount play.",  },
  {
    q: "Which tier should a firm like mine pick?",
    a: "Solo and micro firms start with Essentials. Most everyday working firms land in Professional — the volume tier. Multi-preparer firms choose Advisory, and PE roll-ups or offshore teams go Enterprise.",
  },
  {
    q: "What's included in migration?",
    a: "We help migrate accounts, contacts, templates, and documents from your current system. Self-service streamlined migration with validation, export of data tables, metadata, and files is built into the platform.",
  },
];

function PlanPrice() {
  return (
    <div className="flex items-baseline gap-1">
      <span className="text-3xl font-extrabold text-[var(--foreground)]">
        Annual plan
      </span>
    </div>
  );
}

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--success)]/10 text-[var(--success)]">
        <Check className="h-4 w-4" aria-hidden />
      </span>
    );
  }
  if (value === false) {
    return <Minus className="h-4 w-4 text-[var(--gray-300)] mx-auto" aria-hidden />;
  }
  return <span className="text-sm font-medium text-[var(--foreground)]">{value}</span>;
}

export function PricingContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Intro note */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-[var(--muted-foreground)]">
          Annual plans pre-purchased · AI bundled as a baseline allowance and
          metered as credits (returns &amp; usage) · Packs of credits, added
          per user
        </p>
      </div>

      {/* Tier cards */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
            className={`relative flex flex-col rounded-2xl border bg-white p-6 transition-all duration-300 ${
              plan.popular
                ? "border-2 border-[var(--primary)] shadow-2xl shadow-[var(--primary)]/15 lg:-mt-2 lg:mb-2"
                : "border-[var(--border)] shadow-sm hover:shadow-xl hover:border-[var(--primary)]/25"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] border-0 px-3 py-1 font-semibold shadow-lg">
                  <Sparkles className="h-3 w-3 mr-1" aria-hidden />
                  Most Popular
                </Badge>
              </div>
            )}
            <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--primary)]">
              {plan.tier}
            </p>
            <h3 className="text-xl font-bold text-[var(--foreground)] mt-1">{plan.name}</h3>
            <p className="mt-1 text-sm text-[var(--muted-foreground)] min-h-[40px]">{plan.description}</p>
            <div className="mt-4">
              <PlanPrice />
              <p className="mt-1 text-xs text-[var(--muted-foreground)]">
                per user · annual pre-purchased
              </p>
            </div>
            <ButtonLink
              href={plan.href}
              variant={plan.popular ? "primary" : "outline"}
              className={`w-full justify-center mt-6 ${
                plan.popular ? "shadow-lg shadow-[var(--primary)]/30" : ""
              }`}
            >
              {plan.cta}
            </ButtonLink>
            <ul className="mt-6 space-y-3 border-t border-[var(--border)] pt-6">
              {plan.features.map((f) => {
                const isHeader = f.endsWith("plus:");
                return (
                  <li
                    key={f}
                    className={`flex items-start gap-2.5 text-sm ${
                      isHeader ? "font-semibold text-[var(--foreground)]" : "text-[var(--gray-700)]"
                    }`}
                  >
                    {!isHeader && (
                      <Check className="h-4 w-4 shrink-0 text-[var(--success)] mt-0.5" aria-hidden />
                    )}
                    <span>{f}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-sm text-[var(--muted-foreground)] mt-8">
        Revenue grows with the work and with every acquisition, and margin
        holds as models get cheaper.
      </p>

      {/* Comparison table */}
      <div className="mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Compare every plan
          </h2>
          <p className="mt-3 text-[var(--muted-foreground)]">
            A complete breakdown of what&apos;s included in each tier.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[var(--border)] bg-white shadow-sm">
          <table className="w-full min-w-[720px] border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left p-4 md:p-5 text-sm font-semibold text-[var(--muted-foreground)] w-[34%]">
                  Features
                </th>
                {plans.map((p) => (
                  <th key={p.name} className="p-4 md:p-5 text-center">
                    <span
                      className={`text-sm font-bold ${
                        p.popular ? "text-[var(--primary)]" : "text-[var(--foreground)]"
                      }`}
                    >
                      {p.name}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((group) => (
                <FragmentGroup key={group.title} group={group} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pricing FAQ */}
      <div className="mt-24 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Pricing questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="border border-[var(--border)] rounded-xl overflow-hidden bg-white hover:border-[var(--primary)]/30 transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 group"
                aria-expanded={openFaq === index}
              >
                <span className="font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                  {faq.q}
                </span>
                <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                  {openFaq === index ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-[var(--muted-foreground)] leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function FragmentGroup({ group }: { group: Group }) {
  return (
    <>
      <tr className="bg-[var(--gray-50)]">
        <td
          colSpan={5}
          className="px-4 md:px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-[var(--muted-foreground)]"
        >
          {group.title}
        </td>
      </tr>
      {group.rows.map((row) => (
        <tr key={row.label} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--gray-50)]/50">
          <td className="px-4 md:px-5 py-3.5 text-sm text-[var(--gray-700)]">{row.label}</td>
          {row.values.map((v, i) => (
            <td key={i} className="px-4 md:px-5 py-3.5 text-center">
              <Cell value={v} />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}