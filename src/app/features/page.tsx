import { Metadata } from "next";
import {
  Check,
  Users,
  UserCog,
  Shield,
  ArrowRight,
  FileSignature,
  Boxes,
  UserPlus,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Features | AccuMax",
  description:
    "A workforce of tax-domain AI agents—AccuTax Research, AccuTax Prepare, AccuTax Review, AccuTax Plan, AccuTax Defense, AccuTax Bridge—all running on AccuTax, one AI engine over one client record, inside a complete practice operating system.",
};


const aiFeatures = [
  "AccuTax Compose—team, client and IRS communications",
  "Letter and doc generation",
  "Forms data extraction with manual over-ride",
  "Duplicate detection",
  "Forms comparison",
  "AccuTax Profile",
  "AI Tax Organizer",
  "Knowledge Hub—your SOPs, training, audio-video-text",
  "Flexible workflow automations—before and after each step",
  "Ambient AI & automation for accelerated workflows (CPAL)",
];

const featureAreas = [
  {
    icon: UserPlus,
    title: "Client Intake & Engagement",
    description: "Best-in-class intake from lead to draft return.",
    items: [
      "Mobile client & lead management",
      "InTakePro customizable onboarding",
      "Tax organizer generation",
      "Zip / composite doc inputs + Forms Intelligence",
      "Draft returns & account-summary triage",
      "Doc list templates & bulk account creation",
      "Outlook and Gmail integration",
      "QuickBooks integration",
      "AccuTax Bridge",
      "Chat and effective client engagement, broadcasts",
    ],
  },
  {
    icon: FileSignature,
    title: "Approvals, Invoicing & Payments",
    description: "Everything your business needs to get paid.",
    items: [
      "DocuSign / Zoho Sign—eSignature, all, any",
      "Letter Gen templates—variable data merge, PDF, attachments, eSign",
      "Send for approval: Approve, Reject, …",
      "Immutable audit logs & document provenance",
      "Agreements folder",
      "Invoice templates with revision history",
      "Full, partial, recurring payments—credit card, ACH",
      "Discount %, discount $$, write-offs",
      "AR aging & account reconciliation",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Visibility, Control & Governance",
    description: "Unmatched out-of-the-box visibility and control.",
    items: [
      "Firm-wide dashboards on where the business is",
      "Workflow-level view of progress",
      "Performance by person / group / service / workflow",
      "Bills, invoices, ageing, lead management",
      "All info exported with drilldowns",
      "Entity-level provenance & system-wide audit logs with fine-grain filters",
      "Notifications as alerts and emails—both with drilldowns",
      "Self-service streamlined migration and validation",
      "Export of data tables, metadata, and files",
      "Enterprise-class admin settings flexibility",
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
    points: ["Manage assigned accounts", "Run workflows & to-dos", "AI agents & search", "Notifications & chat"],
  },
  {
    icon: Shield,
    title: "Admin Portal",
    tagline: "For firm owners",
    points: ["Firm-wide settings", "Dashboards & reports", "RBAC & OBT", "Audit logs & billing"],
  },
];

const integrations = [
  "QuickBooks", "Outlook", "Gmail", "DocuSign", "Zoho Sign", "Microsoft 365", "SharePoint", "Drake", "UltraTax", "Lacerte",
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
            The platform
          </div>
          {/* clamp, not the step scale: "practice management system" is 26
              characters and must never break across two lines. */}
          <h1 className="text-[clamp(1.5rem,5.6vw,3rem)] font-bold tracking-tight text-[var(--foreground)] text-balance">
            <span className="block">A state-of-the-art</span>
            <span className="block gradient-text leading-[1.25] pb-[0.1em]">
              practice management system
            </span>
          </h1>
          <p className="mt-6 text-lg text-[var(--muted-foreground)] leading-relaxed text-pretty">
            Client intake through approvals, eSignature, invoicing, payments,
            dashboards and governance — connected to the software your firm
            already depends on.
          </p>
          <div className="mt-9 flex flex-wrap gap-4 justify-center">
            <ButtonLink href="/contact#demo" variant="primary" size="lg" className="shadow-lg shadow-[var(--primary)]/20">
              Book a Demo
            </ButtonLink>
            <ButtonLink href="/copilots" variant="outline" size="lg">
              See the CoPilots
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Ambient AI + feature list */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-3 py-1 text-sm font-medium text-[var(--primary)] mb-5">
                <Sparkles className="h-3.5 w-3.5 mr-2" aria-hidden />
                Ambient Intelligence
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl text-balance">
                Intelligence everywhere, not in one feature
              </h2>
              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                The system anticipates, guides, and clarifies. CPAs stay in
                control—AI is a partner, not a replacement. Ambient AI and
                automation accelerate every workflow.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-white p-7 md:p-9 shadow-sm">
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {aiFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[var(--gray-700)]">
                    <Check className="h-5 w-5 shrink-0 text-[var(--success)] mt-0.5" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portals by persona */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl text-balance">
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
                <h3 className="text-xl font-bold text-[var(--foreground)] mt-1 text-balance">{p.title}</h3>
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

      {/* Practice OS feature areas */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-4 py-1.5 text-sm font-medium text-[var(--primary)] mb-6">
              <Boxes className="h-3.5 w-3.5 mr-2" aria-hidden />
              Product Breadth
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl text-balance">
              The complete practice operating system
            </h2>
            <p className="mt-3 text-[var(--muted-foreground)]">
              Every workflow your firm runs—from first client touch to final
              reconciliation—in one platform.
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
                    <h3 className="text-2xl font-bold text-[var(--foreground)] text-balance">{area.title}</h3>
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
      <section id="integrations" className="py-16 md:py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-4 py-1.5 text-sm font-medium text-[var(--primary)] mb-6">
            Integrations
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl text-balance">
            Connects with your stack
          </h2>
          <p className="mt-3 text-[var(--muted-foreground)] max-w-2xl mx-auto">
            AccuMax integrates with accounting, email, eSignature and TaxPrep
            software—with AccuTax Bridge built in.
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