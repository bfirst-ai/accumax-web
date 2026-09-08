"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Infinity as InfinityIcon, Minus, Plus, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";

/* ------------------------------------------------------------------ *
 * Two pricing dimensions:
 *   1. Per user, per year — the seat licence, discounted by term length.
 *   2. Per activated account — AI capability allowances, metered beyond.
 * ------------------------------------------------------------------ */

type TermId = "1yr" | "2yr" | "3yr";

const terms: { id: TermId; label: string; short: string; save: string | null }[] = [
  { id: "1yr", label: "One-year", short: "1-year", save: null },
  { id: "2yr", label: "Two-year", short: "2-year", save: "Save up to 6.25%" },
  { id: "3yr", label: "Three-year", short: "3-year", save: "Save up to 12.5%" },
];

type Plan = {
  name: string;
  tier: string;
  description: string;
  cta: string;
  href: string;
  popular?: boolean;
  /** Per user, per year. Billed up front for the full term. */
  price: Record<TermId, number>;
  /** Advertised discount vs. the one-year rate. */
  discount: Record<TermId, string | null>;
  headline: string;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Standard",
    tier: "Access",
    description: "Solo & micro firms getting off the process treadmill",
    cta: "Start Free Trial",
    href: "/contact",
    price: { "1yr": 799, "2yr": 749, "3yr": 699 },
    discount: { "1yr": null, "2yr": "6.25%", "3yr": "12.5%" },
    headline: "Everything a solo practice needs, with real AI included",
    features: [
      "Complete Practice OS — unlimited (intake, approvals, eSignatures, invoices, payments & audit logs)",
      "Unlimited CoPilots: InTake, Recognize, Extract, Organize, Profile, Review & Compose",
      "AccuTax Research — 10 accounts",
      "AccuTax Prepare — 10 accounts",
      "AccuTax Bridge — 10 accounts",
    ],
  },
  {
    name: "Professional",
    tier: "Volume · Hero",
    description: "The everyday working firm, with advisory agents unlocked",
    cta: "Start Free Trial",
    href: "/contact",
    price: { "1yr": 999, "2yr": 949, "3yr": 899 },
    discount: { "1yr": null, "2yr": "5%", "3yr": "10%" },
    headline: "Double the AI allowances, plus the agents that win advisory work",
    features: [
      "Everything in Standard, plus:",
      "AccuTax Defense — 10 accounts",
      "AccuTax Plan — 10 accounts",
      "AccuTax Research — 20 accounts (2×)",
      "AccuTax Prepare — 20 accounts (2×)",
      "AccuTax Bridge — 20 accounts (2×)",
    ],
  },
  {
    name: "Premium",
    tier: "Scale · Hero",
    popular: true,
    description: "Scaling teams and high client volume — the tier most firms buy",
    cta: "Start Free Trial",
    href: "/contact",
    price: { "1yr": 1199, "2yr": 1149, "3yr": 1099 },
    discount: { "1yr": null, "2yr": "4.2%", "3yr": "8.3%" },
    headline: "Unlimited AccuTax Defense, client-portal Assist, and our deepest allowances",
    features: [
      "Everything in Professional, plus:",
      "AccuTax Assist — client-portal self-help, all accounts",
      "AccuTax Defense — unlimited",
      "AccuTax Plan — 20 accounts (2×)",
      "AccuTax Research — 40 accounts (4×)",
      "AccuTax Prepare — 40 accounts (4×)",
      "AccuTax Bridge — 40 accounts (4×)",
    ],
  },
];

/* ---------------- Per activated account allowances ---------------- */

type Allowance = {
  agent: string;
  note: string;
  /** Per tier: "unlimited", not-included (null), or an included count. */
  included: ("unlimited" | null | number)[];
  /** Overage per extra activated account, where metered. */
  overage: (number | null)[];
};

const allowances: Allowance[] = [
  {
    agent: "AccuTax InTake",
    note: "Guided, customizable intake forms that prefill from uploaded documents",
    included: ["unlimited", "unlimited", "unlimited"],
    overage: [null, null, null],
  },
  {
    agent: "AccuTax Recognize",
    note: "Identifies and tags 250+ IRS and non-IRS forms automatically",
    included: ["unlimited", "unlimited", "unlimited"],
    overage: [null, null, null],
  },
  {
    agent: "AccuTax Extract",
    note: "High-confidence field extraction from PDFs and images, with a review assistant",
    included: ["unlimited", "unlimited", "unlimited"],
    overage: [null, null, null],
  },
  {
    agent: "AccuTax Organize",
    note: "Consolidates intake, chats, emails and uploads into one organized client file",
    included: ["unlimited", "unlimited", "unlimited"],
    overage: [null, null, null],
  },
  {
    agent: "AccuTax Profile",
    note: "Summarizes every client input and synthesizes the work and forms needed",
    included: ["unlimited", "unlimited", "unlimited"],
    overage: [null, null, null],
  },
  {
    agent: "AccuTax Review",
    note: "Surfaces audit flags, omissions, inconsistencies and missed opportunities",
    included: ["unlimited", "unlimited", "unlimited"],
    overage: [null, null, null],
  },
  {
    agent: "AccuTax Compose",
    note: "Team, client and IRS communications with template, tone and e-signature support",
    included: ["unlimited", "unlimited", "unlimited"],
    overage: [null, null, null],
  },
  {
    agent: "AccuTax Bridge",
    note: "Transfers extracted data into the right screens and forms in your tax prep software",
    included: [10, 20, 40],
    overage: [25, 15, 10],
  },
  {
    agent: "AccuTax Assist",
    note: "Client-portal self-help — answers clients' own questions, all accounts",
    included: [null, null, "unlimited"],
    overage: [null, null, null],
  },
  {
    agent: "AccuTax Research",
    note: "IRS.gov + client context + your Knowledge Hub — the deepest corpus we offer",
    included: [10, 20, 40],
    overage: [20, 15, 10],
  },
  {
    agent: "AccuTax Prepare",
    note: "Automated preparation of personal returns, with optional manual iteration",
    included: [10, 20, 40],
    overage: [20, 20, 20],
  },
  {
    agent: "AccuTax Plan",
    note: "Models outcomes, cashflow and tax impact across scenarios",
    included: [null, 10, 20],
    overage: [null, 125, 100],
  },
  {
    agent: "AccuTax Defense",
    note: "Understands IRS notices, collects evidence and drafts responses",
    included: [null, 10, "unlimited"],
    overage: [null, 25, null],
  },
];

/* ---------------- Practice OS ----------------
 * Practice OS is unlimited on every tier, so this is presented as one
 * capability set rather than a tier-by-tier matrix. Sourced from the
 * AccuMax deck's platform slides.
 * --------------------------------------------- */

type PlatformGroup = { title: string; summary: string; items: string[] };

const platform: PlatformGroup[] = [
  {
    title: "Client Intake & Engagement",
    summary:
      "Onboarding, organizers, document intake, triage and client comms",
    items: [
      "InTakePro customizable onboarding",
      "Tax organizer generation",
      "Zip / composite document inputs",
      "Forms intelligence & draft returns",
      "Account summary triage",
      "Doc list templates & bulk account creation",
      "Outlook, Gmail & QuickBooks integration",
      "AccuTax Bridge",
      "Chat, broadcast & client engagement",
      "Mobile client & lead management",
    ],
  },
  {
    title: "Approvals, Invoicing & Payments",
    summary:
      "eSignature, approvals, invoicing, payments and AR",
    items: [
      "DocuSign, Zoho Sign — any eSignature",
      "Letter templates with variable data merge",
      "Send-for-approval, reject & approve workflows",
      "Immutable audit logs & document provenance",
      "Agreements folder",
      "Invoice templates with revision history",
      "Full, partial & recurring payments",
      "Credit card & ACH with defaults and overrides",
      "Discounts, write-offs & AR aging",
      "Account reconciliation",
    ],
  },
  {
    title: "Visibility, Control & Governance",
    summary:
      "Dashboards, audit logs, provenance and admin controls",
    items: [
      "Firm-wide dashboards on where the business is",
      "Workflow-level view of progress",
      "Performance by person, group, service & workflow",
      "Bills, invoices & ageing",
      "All info exported with drilldowns",
      "Entity-level provenance",
      "System-wide audit logs with fine-grain filters",
      "Notifications as alerts and emails, with drilldowns",
      "Self-service migration in and out",
      "Enterprise-class admin settings flexibility",
    ],
  },
  {
    title: "Ambient AI & Automation",
    summary:
      "Duplicate detection, comparisons, Knowledge Hub and workflow automations",
    items: [
      "Letter and document generation",
      "Forms data extraction with manual override",
      "Duplicate detection & forms comparison",
      "AccuTax Profile",
      "AI Tax Organizer",
      "Knowledge Hub — SOPs, training, audio/video/text",
      "Flexible workflow automations before and after each step",
    ],
  },
];

const faqs = [
  {
    q: "Can I try AccuMax before committing?",
    a: "Yes — start a 90-day free trial with full platform access and a dedicated success manager from day one. No credit card required.",
  },
  {
    q: "How does pricing work — seats or accounts?",
    a: "Both, and they do different jobs. The seat licence is per user, per year and covers the whole platform: practice OS, unlimited Review, Recognize, Extract, Organize, Compose and more. On top of that, the heavier AI agents carry an allowance measured in activated accounts, which scales with your tier. You only pay more when you do more work.",
  },
  {
    q: "What is an activated account?",
    a: "An activated account is a client account for which a particular AI tool has been activated. Activation is per tool, so each tool draws on its own allowance — activating both the AccuTax Prepare and the AccuTax Plan for the same client counts once against each. Accounts you simply store, invoice or communicate with are unlimited on every tier and never metered.",
  },
  {
    q: "What happens when I use up an allowance?",
    a: "Nothing stops. You continue at a flat per-account rate, and that rate falls as your tier rises — AccuTax Bridge runs $25 per extra account on Standard, $15 on Professional and $10 on Premium. Revenue grows with the work and margin holds as models get cheaper.",
  },
  {
    q: "Why commit to two or three years?",
    a: "Longer terms carry a lower rate: two-year and three-year commitments save up to 6.25% and 12.5% respectively, with the deepest discount on Standard. All plans are billed up front for the full term.",
  },
  {
    q: "Which tier should a firm like mine pick?",
    a: "Solo and micro firms start with Standard. Professional doubles every allowance and unlocks AccuTax Defense and AccuTax Plan. Most firms end up on Premium — unlimited Audit Defense, 4× allowances and the lowest overage rates across every agent, which is why it is the tier most firms buy.",
  },
  {
    q: "Can I add seats or upgrade mid-term?",
    a: "Yes. Seats can be added at any point and are prorated to your renewal date, and you can move up a tier at any time. Your unified renewal date stays fixed so billing never fragments.",
  },
  {
    q: "What's included in migration?",
    a: "We help migrate accounts, contacts, templates, and documents from your current system. Self-service streamlined migration with validation, export of data tables, metadata, and files is built into the platform.",
  },
];

function UnlimitedPill() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--success)]/10 px-2.5 py-1 text-xs font-bold text-[var(--success)]">
      <InfinityIcon className="h-3.5 w-3.5" aria-hidden />
      Unlimited
    </span>
  );
}

function NotIncluded() {
  return (
    <>
      <Minus className="h-4 w-4 text-[var(--gray-300)] mx-auto" aria-hidden />
      <span className="sr-only">Not included</span>
    </>
  );
}

export function PricingContent() {
  const [term, setTerm] = useState<TermId>("3yr");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activeTerm = terms.find((t) => t.id === term)!;

  return (
    <>
      {/* Commitment term selector */}
      <div className="flex flex-col items-center gap-3 mb-10">
        <div
          role="radiogroup"
          aria-label="Commitment term"
          className="inline-flex items-center rounded-full border border-[var(--border)] bg-white p-1 shadow-sm"
        >
          {terms.map((t) => (
            <button
              key={t.id}
              role="radio"
              aria-checked={term === t.id}
              onClick={() => setTerm(t.id)}
              className={`relative rounded-full px-4 sm:px-5 py-2 text-sm font-semibold transition-colors ${
                term === t.id
                  ? "bg-[var(--primary)] text-white shadow"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <p className="text-sm h-5">
          {activeTerm.save ? (
            <span className="font-semibold text-[var(--success)]">
              {activeTerm.save} vs. the one-year rate
            </span>
          ) : (
            <span className="text-[var(--muted-foreground)]">
              Billed up front · longer commitments cost less
            </span>
          )}
        </p>
      </div>

      {/* Tier cards */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => {
          const annual = plan.price[term];
          const monthly = Math.round(annual / 12);
          return (
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
                  <Badge className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] border-0 px-3 py-1 font-semibold shadow-lg whitespace-nowrap">
                    <Sparkles className="h-3 w-3 mr-1" aria-hidden />
                    Most Popular
                  </Badge>
                </div>
              )}
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--primary)]">
                {plan.tier}
              </p>
              <h3 className="text-xl font-bold text-[var(--foreground)] mt-1 text-balance">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-[var(--muted-foreground)] min-h-[40px]">
                {plan.description}
              </p>

              <div className="mt-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-[var(--foreground)]">$</span>
                  <motion.span
                    key={`${plan.name}-${term}`}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-5xl font-extrabold tracking-tight text-[var(--foreground)]"
                  >
                    {annual.toLocaleString()}
                  </motion.span>
                  <span className="text-sm font-medium text-[var(--muted-foreground)] ml-1">
                    /seat per year
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-[var(--muted-foreground)]">
                  ≈ ${monthly}/user per month · {activeTerm.short} commitment
                </p>
              </div>

              <ButtonLink
                href={plan.href}
                variant={plan.popular ? "primary" : "outline"}
                className={`w-full justify-center mt-5 ${
                  plan.popular ? "shadow-lg shadow-[var(--primary)]/30" : ""
                }`}
              >
                {plan.cta}
              </ButtonLink>

              <p className="mt-6 text-sm font-semibold text-[var(--foreground)] leading-snug">
                {plan.headline}
              </p>

              <ul className="mt-4 space-y-3 border-t border-[var(--border)] pt-5">
                {plan.features.map((f) => {
                  const isHeader = f.endsWith("plus:");
                  return (
                    <li
                      key={f}
                      className={`flex items-start gap-2.5 text-sm ${
                        isHeader
                          ? "font-semibold text-[var(--foreground)]"
                          : "text-[var(--gray-700)]"
                      }`}
                    >
                      {!isHeader && (
                        <Check
                          className="h-4 w-4 shrink-0 text-[var(--success)] mt-0.5"
                          aria-hidden
                        />
                      )}
                      <span>{f}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* Billing footnotes */}
      <div className="max-w-3xl mx-auto mt-10 space-y-1.5 text-center">
        <p className="text-xs text-[var(--muted-foreground)]">
          *All plans are billed up front for the full commitment term. Seats can be
          added mid-term and are prorated to your unified renewal date.
        </p>
        <p className="text-xs text-[var(--muted-foreground)]">
          **Seat pricing covers the whole platform. The AI agents below carry an
          allowance measured in activated accounts; beyond it you continue at a flat
          per-account rate that falls as your tier rises.
        </p>
      </div>

      {/* Trust strip */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-[var(--muted-foreground)]">
        {[
          "90-day free trial, full platform access",
          "Dedicated success manager",
          "No credit card required",
          "Free guided migration",
        ].map((item) => (
          <span key={item} className="inline-flex items-center gap-2">
            <Check className="h-4 w-4 text-[var(--success)]" aria-hidden />
            {item}
          </span>
        ))}
      </div>

      {/* Per activated account allowances */}
      <div className="mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl text-balance">
            AI included with every seat
          </h2>
          <p className="mt-3 text-[var(--muted-foreground)]">
            Seven CoPilots are unlimited on every tier. The heavier agents carry an
            allowance in activated accounts that doubles at Professional and doubles
            again at Premium — while the overage rate falls.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[var(--border)] bg-white shadow-sm">
          <table className="w-full min-w-[760px] border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--gray-50)]">
                <th className="text-left p-4 md:p-5 text-sm font-semibold text-[var(--muted-foreground)] w-[36%]">
                  Capability
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
              {allowances.map((a) => (
                <tr
                  key={a.agent}
                  className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--gray-50)]/50"
                >
                  <td className="px-4 md:px-5 py-4">
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      {a.agent}
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
                      {a.note}
                    </p>
                  </td>
                  {a.included.map((inc, i) => (
                    <td key={i} className="px-4 md:px-5 py-4 text-center align-middle">
                      {inc === null ? (
                        <NotIncluded />
                      ) : inc === "unlimited" ? (
                        <UnlimitedPill />
                      ) : (
                        <>
                          <span className="text-sm font-bold text-[var(--foreground)]">
                            {inc} accounts
                          </span>
                          {a.overage[i] !== null && (
                            <p className="text-xs text-[var(--muted-foreground)] mt-1">
                              then ${a.overage[i]}/account
                            </p>
                          )}
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-xs text-[var(--muted-foreground)] mt-4 max-w-3xl mx-auto">
          An activated account is a client account for which a particular AI tool has
          been activated — each tool draws on its own allowance. Storing, invoicing and
          communicating with accounts is unlimited on every tier.
        </p>
      </div>

      {/* Practice OS — included on every tier */}
      <div className="mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="success" className="mb-4 font-semibold">
            Included on every tier
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl text-balance">
            Practice OS
          </h2>
          <p className="mt-3 text-[var(--muted-foreground)]">
            Not an upsell ladder. The whole practice OS ships with every seat, on
            every plan — the tiers differ only in how much AI you run.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {platform.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[var(--success)]/10 text-[var(--success)] mb-3">
                <Check className="h-4.5 w-4.5" aria-hidden />
              </span>
              <p className="text-sm font-bold text-[var(--foreground)] text-pretty">
                {group.title}
              </p>
              <p className="mt-1.5 text-xs text-[var(--muted-foreground)] leading-relaxed text-pretty">
                {group.summary}
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-[var(--primary)]">
                {group.items.length} capabilities
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <ButtonLink href="/features" variant="outline">
            See the full capability list
          </ButtonLink>
        </div>
      </div>

      {/* Large-firm / custom quote strip */}
      <div className="mt-16 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 p-8 md:p-10 text-center">
        <h3 className="text-2xl font-bold text-[var(--foreground)] text-balance">
          25+ seats, offshore delivery, or a PE roll-up?
        </h3>
        <p className="mt-3 text-[var(--muted-foreground)] max-w-2xl mx-auto">
          Multi-entity firms get a custom platform agreement — offshore-delivery
          governance and standardization, white-glove SLA, SSO, custom domains, and
          data residency, with a dedicated success team.
        </p>
        <ButtonLink href="/contact" variant="primary" className="mt-6">
          Request a quote
        </ButtonLink>
      </div>

      {/* Pricing FAQ */}
      <div className="mt-24 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl text-balance">
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
                  {openFaq === index ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
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
                    <p className="px-5 pb-5 text-[var(--muted-foreground)] leading-relaxed">
                      {faq.a}
                    </p>
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
