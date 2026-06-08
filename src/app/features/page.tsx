import { Metadata } from "next";
import {
  LayoutDashboard,
  Bot,
  Workflow,
  FileText,
  MessageSquare,
  CreditCard,
  Check,
  Users,
  UserCog,
  Shield,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Features | AccuMaxio",
  description:
    "Self-service portals, AI co-pilots, workflows, documents, approvals, chat, and billing for accounting and professional services firms.",
};

const featureAreas = [
  {
    icon: LayoutDashboard,
    title: "Self-Service Portals",
    description: "Tailored experiences for clients, your team, and admins—everyone sees only what they need.",
    items: [
      "Client Portal: upload docs, view workflow status, see approvers, rich-text updates",
      "Team Portal: assigned accounts, workflows, to-dos, chat, notifications",
      "Admin Portal: firm-wide settings, dashboards, RBAC & OBT",
      "Role-based access control across every persona",
    ],
  },
  {
    icon: Bot,
    title: "Augmented Intelligence",
    description: "AI co-pilots and intelligent forms that enhance your team—never replace their judgment.",
    items: [
      "QuickT: guided onboarding CoPilot for clients",
      "CPAL: CPA & CSR CoPilot with conversation tracking",
      "Natural-language search across account context",
      "Intelligent forms with ID & data extraction",
      "Tax organizer generation & document intelligence",
    ],
  },
  {
    icon: Workflow,
    title: "Workflows & Operations",
    description: "Model every service as a configurable workflow, then automate the busywork.",
    items: [
      "Multiple services & configurable stages",
      "Templates, to-dos, and batch automations",
      "Account priority, complexity, due dates",
      "Dashboards: firm-wide (OBT/Admin) & assigned-accounts (team)",
      "Reports by status: NEW, Assigned, On Hold, Completed",
    ],
  },
  {
    icon: FileText,
    title: "Documents & Approvals",
    description: "One secure home for every document, signature, and approval—fully audited.",
    items: [
      "Resources, client-, firm-, and team-uploaded docs",
      "eSignatures via DocuSign & Zoho Sign",
      "Built-in approvals, letters, notepads & notes",
      "Organized, searchable audit logs for signatures & approvals",
    ],
  },
  {
    icon: MessageSquare,
    title: "Chat, Notifications & Broadcasts",
    description: "Keep clients and team in sync with collaboration and event-driven alerts.",
    items: [
      "In-app chat: reply-with-quote, edit/delete, search, pin",
      "Message counters & unread badges in real time",
      "Notifications for new accounts, uploads, workflow events",
      "Firm-wide broadcasts to the right people via portal & email",
    ],
  },
  {
    icon: CreditCard,
    title: "Billing & Payments",
    description: "From price lists to paid invoices—billing that fits how your firm works.",
    items: [
      "Price lists, agreements, invoices & payments",
      "ACH and per-account payment method override",
      "Partial payments, invoice notes, export to Excel",
      "QuickBooks sync for accounting workflows",
    ],
  },
];

const portals = [
  {
    icon: Users,
    title: "Client Portal",
    tagline: "For your clients",
    points: ["Upload & download documents", "Track workflow status", "Sign & approve", "Chat with your team"],
  },
  {
    icon: UserCog,
    title: "Team Portal",
    tagline: "For CPAs & CSRs",
    points: ["Manage assigned accounts", "Run workflows & to-dos", "AI co-pilots & search", "Notifications & chat"],
  },
  {
    icon: Shield,
    title: "Admin Portal",
    tagline: "For firm owners",
    points: ["Firm-wide settings", "Dashboards & reports", "RBAC & OBT", "Audit logs & billing"],
  },
];

const integrations = [
  "QuickBooks", "DocuSign", "Zoho Sign", "Microsoft 365", "SharePoint",
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white pt-16 md:pt-24 pb-12">
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 h-[280px] w-[280px] rounded-full bg-[var(--primary)] opacity-15 blur-[100px]" />
        </div>
        <div className="container relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-3 py-1 text-sm font-medium text-[var(--primary)] mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[var(--primary)] mr-2 animate-pulse" />
            Everything your firm needs
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
            One platform for{" "}
            <span className="gradient-text">portals, AI & operations</span>
          </h1>
          <p className="mt-6 text-lg text-[var(--muted-foreground)] leading-relaxed">
            Self-service portals, augmented intelligence, workflows, documents, chat, and
            billing—optimized for accounting and professional services firms.
          </p>
          <div className="mt-9 flex flex-wrap gap-4 justify-center">
            <ButtonLink href="/contact" variant="primary" size="lg" className="shadow-lg shadow-[var(--primary)]/20">
              Request Demo
            </ButtonLink>
            <ButtonLink href="/pricing" variant="outline" size="lg">
              View Pricing
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Portals by persona */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              A portal for every role
            </h2>
            <p className="mt-3 text-[var(--muted-foreground)]">
              Three connected portals on one platform—so everyone stays in sync.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {portals.map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-[var(--border)] bg-white p-7 shadow-sm hover-lift hover:shadow-xl hover:border-[var(--primary)]/25 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 text-[var(--primary)] mb-5 group-hover:scale-110 transition-transform duration-300">
                  <p.icon className="h-7 w-7" aria-hidden />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">{p.tagline}</p>
                <h3 className="text-xl font-bold text-[var(--foreground)] mt-1">{p.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-[var(--gray-700)]">
                      <Check className="h-4 w-4 shrink-0 text-[var(--success)] mt-0.5" aria-hidden />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature areas */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Explore the platform
            </h2>
            <p className="mt-3 text-[var(--muted-foreground)]">
              Deep capabilities across six core areas, built for compliance and efficiency.
            </p>
          </div>

          <div className="space-y-6">
            {featureAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-[var(--border)] bg-white p-7 md:p-9 shadow-sm hover:shadow-lg hover:border-[var(--primary)]/20 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-10">
                  <div className="lg:col-span-1">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 text-[var(--primary)] mb-5">
                      <area.icon className="h-7 w-7" aria-hidden />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--foreground)]">{area.title}</h3>
                    <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed">{area.description}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                      {area.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[var(--gray-700)]">
                          <Check className="h-5 w-5 shrink-0 text-[var(--success)] mt-0.5" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Connects with your stack
          </h2>
          <p className="mt-3 text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Works with the accounting, eSignature, and document tools your firm already
            relies on—with more integrations on the way.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-5">
            {integrations.map((name) => (
              <div
                key={name}
                className="px-6 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] font-medium hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/5 hover:scale-105 transition-all"
              >
                {name}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/resources" className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:underline">
              See all integrations
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
