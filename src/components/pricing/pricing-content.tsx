"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Minus, Plus, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";

type Plan = {
  name: string;
  monthly: number | null;
  description: string;
  cta: string;
  href: string;
  popular?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Starter",
    monthly: 29,
    description: "Solo practitioners and small teams getting organized.",
    cta: "Get Early Access",
    href: "/contact",
    features: [
      "Client & Team portals",
      "Basic workflows & templates",
      "Document storage (10 GB)",
      "eSignatures & approvals",
      "In-app chat & notifications",
    ],
  },
  {
    name: "Professional",
    monthly: 59,
    popular: true,
    description: "Growing firms that need automation and AI.",
    cta: "Get Early Access",
    href: "/contact",
    features: [
      "Everything in Starter, plus:",
      "Admin portal, RBAC & OBT",
      "Workflow automation & batch actions",
      "AI CoPilot — QuickT onboarding & CPAL",
      "Invoices, payments & ACH",
      "Audit logs & broadcasts",
    ],
  },
  {
    name: "Business",
    monthly: 99,
    description: "Established practices running at scale.",
    cta: "Get Early Access",
    href: "/contact",
    features: [
      "Everything in Professional, plus:",
      "Unlimited accounts & contacts",
      "Firm-wide dashboards & reports",
      "Intelligent forms & data extraction",
      "Partial & scheduled invoices",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    monthly: null,
    description: "Multi-office firms with custom requirements.",
    cta: "Contact Sales",
    href: "/contact",
    features: [
      "Everything in Business, plus:",
      "Custom domains & SSO",
      "Dedicated tenant & data residency",
      "Onboarding & migration support",
      "SLA & dedicated success manager",
      "Custom integrations & API access",
    ],
  },
];

type Row = { label: string; values: (boolean | string)[] };
type Group = { title: string; rows: Row[] };

// Columns map to: Starter, Professional, Business, Enterprise
const comparison: Group[] = [
  {
    title: "Portals & Access",
    rows: [
      { label: "Client Portal", values: [true, true, true, true] },
      { label: "Team Portal", values: [true, true, true, true] },
      { label: "Admin Portal", values: [false, true, true, true] },
      { label: "RBAC & OBT (owner-based teams)", values: [false, true, true, true] },
      { label: "Single Sign-On (SSO)", values: [false, false, false, true] },
    ],
  },
  {
    title: "Workflows & Automation",
    rows: [
      { label: "Configurable workflows & stages", values: [true, true, true, true] },
      { label: "Templates & to-dos", values: [true, true, true, true] },
      { label: "Batch automations", values: [false, true, true, true] },
      { label: "Firm-wide dashboards & reports", values: [false, false, true, true] },
    ],
  },
  {
    title: "Augmented Intelligence",
    rows: [
      { label: "QuickT onboarding CoPilot", values: [false, true, true, true] },
      { label: "CPAL CPA & CSR CoPilot", values: [false, true, true, true] },
      { label: "Intelligent forms & data extraction", values: [false, false, true, true] },
      { label: "Tax organizer generation", values: [false, false, true, true] },
    ],
  },
  {
    title: "Documents & eSign",
    rows: [
      { label: "Document storage", values: ["10 GB", "100 GB", "1 TB", "Custom"] },
      { label: "eSignatures (DocuSign / Zoho)", values: [true, true, true, true] },
      { label: "Letters & approvals", values: [true, true, true, true] },
      { label: "Audit logs", values: [false, true, true, true] },
    ],
  },
  {
    title: "Billing & Payments",
    rows: [
      { label: "Price lists & agreements", values: [true, true, true, true] },
      { label: "Invoices & payments (ACH)", values: [false, true, true, true] },
      { label: "Partial & scheduled invoices", values: [false, false, true, true] },
      { label: "Export to Excel", values: [false, true, true, true] },
    ],
  },
  {
    title: "Security & Support",
    rows: [
      { label: "Bank-level encryption", values: [true, true, true, true] },
      { label: "Data residency & dedicated tenant", values: [false, false, false, true] },
      { label: "Support", values: ["Email", "Email", "Priority", "Dedicated CSM"] },
    ],
  },
];

const faqs = [
  {
    q: "Can I try AccuMaxio before it launches?",
    a: "Yes — join the early-access program to get hands-on with portals, workflows, and core features, with help from our team. No credit card required.",
  },
  {
    q: "How does per-user pricing work?",
    a: "Pricing is per team member, per month. Clients using the Client Portal are never charged — invite as many client users as you need at no extra cost.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. Upgrade or downgrade at any time; changes are prorated. Annual plans can switch to a higher tier mid-term with the difference applied.",
  },
  {
    q: "What's included in migration?",
    a: "We help migrate accounts, contacts, templates, and documents from your current system. Business and Enterprise plans include hands-on migration support.",
  },
  {
    q: "Do you offer discounts for annual billing?",
    a: "Yes — annual billing saves roughly two months versus paying monthly. Enterprise pricing is custom; contact sales for a quote.",
  },
];

function PriceDisplay({ plan, annual }: { plan: Plan; annual: boolean }) {
  if (plan.monthly === null) {
    return (
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-extrabold text-[var(--foreground)]">Custom</span>
      </div>
    );
  }
  const display = annual ? Math.round((plan.monthly * 10) / 12) : plan.monthly;
  return (
    <div className="flex items-baseline gap-1">
      <span className="text-5xl font-extrabold text-[var(--foreground)]">${display}</span>
      <span className="text-[var(--muted-foreground)] text-base">/user/mo</span>
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
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Billing toggle */}
      <div className="flex flex-col items-center gap-3 mb-12">
        <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-white p-1.5 shadow-sm">
          <button
            type="button"
            onClick={() => setAnnual(false)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
              !annual ? "bg-[var(--primary)] text-white shadow" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            }`}
            aria-pressed={!annual}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setAnnual(true)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-2 ${
              annual ? "bg-[var(--primary)] text-white shadow" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            }`}
            aria-pressed={annual}
          >
            Annual
            <span
              className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                annual ? "bg-white/20 text-white" : "bg-[var(--success)]/10 text-[var(--success)]"
              }`}
            >
              Save 17%
            </span>
          </button>
        </div>
      </div>

      {/* Tier cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  Recommended
                </Badge>
              </div>
            )}
            <h3 className="text-xl font-bold text-[var(--foreground)]">{plan.name}</h3>
            <p className="mt-1 text-sm text-[var(--muted-foreground)] min-h-[40px]">{plan.description}</p>
            <div className="mt-5 min-h-[56px]">
              <PriceDisplay plan={plan} annual={annual} />
              {plan.monthly !== null && (
                <p className="mt-1 text-xs text-[var(--muted-foreground)]">
                  {annual ? "billed annually" : "billed monthly"}
                </p>
              )}
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
        Introductory pricing for early-access firms. No credit card required to get started.
        Client portal users are always free.
      </p>

      {/* Comparison table */}
      <div className="mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Compare every plan
          </h2>
          <p className="mt-3 text-[var(--muted-foreground)]">
            A complete breakdown of what's included in each tier.
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
