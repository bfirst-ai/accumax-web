import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  LayoutDashboard,
  Bot,
  Workflow,
  FileText,
  MessageSquare,
  CreditCard,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Features | AccuMaxio",
  description:
    "Self-service portals, AI co-pilots, workflows, documents, approvals, chat, and billing for accounting and professional services firms.",
};

const portalFeatures = [
  "Client Portal: upload docs, view workflow status, see approvers per workflow, rich-text status",
  "Team Portal: assigned accounts, workflows, to-dos, chat, notifications",
  "Admin Portal: firm-wide settings, dashboards (BETA), RBAC, OBT",
];

const aiFeatures = [
  "QuickT: Onboarding CoPilot",
  "CPAL: CPA & CSR CoPilot with conversation tracking and natural language search",
  "Intelligent forms: ID and data extraction",
  "Tax organizer generation",
  "Document intelligence foundation",
];

const opsFeatures = [
  "Multiple services and configurable workflows",
  "RBAC (role-based access) and OBT (owner-based teams)",
  "Templates, to-dos, batch automations",
  "Account priority, complexity, workflow priority and due date",
  "Dashboards: firm-wide (OBT/Admin) and assigned-accounts (team); reports by status: NEW, Assigned, Not Started, On Hold, Completed, by stage",
];

const docFeatures = [
  "Resources (templates), client- and firm-uploaded docs, team docs",
  "Approvals, eSignatures, letters, notepads, notes",
  "Audit logs: organized, searchable; events for signatures and approvals",
];

const chatFeatures = [
  "In-app chat: reply with quote, edit/delete (configurable timer), search, pin/unpin, message counters",
  "Notifications for key events (team portal and email): to OBT (new accounts, services, file uploads); to team (workflow events, file ops, signatures, approvals)",
  "Broadcasts",
];

const billingFeatures = [
  "Price lists, agreements, invoices, payments",
  "ACH as default; per-account payment method override; partial payments (BETA)",
  "Invoice notes, export to Excel",
  "Roadmap: scheduled invoices, close invoice, bulk role changes",
];

function FeatureBlock({
  icon: Icon,
  title,
  description,
  items,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <section className="mb-16 last:mb-0">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 flex items-center justify-center text-[var(--primary)]">
          <Icon className="h-6 w-6" aria-hidden />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            {title}
          </h2>
          <p className="mt-2 text-[var(--muted-foreground)]">{description}</p>
        </div>
      </div>
      <ul className="space-y-2 pl-1">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-[var(--gray-700)]"
          >
            <Check
              className="h-5 w-5 shrink-0 text-[var(--success)] mt-0.5"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function FeaturesPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
        Features
      </h1>
      <p className="mt-4 text-lg text-[var(--muted-foreground)] max-w-2xl">
        One platform for self-service portals, augmented intelligence,
        workflows, documents, chat, and billing—optimized for accounting and
        professional services firms.
      </p>

      <div className="mt-14 space-y-4">
        <FeatureBlock
          icon={LayoutDashboard}
          title="Self-Service Portals"
          description="Tailored experiences for clients, team members, and admins."
          items={portalFeatures}
        />
        <FeatureBlock
          icon={Bot}
          title="Augmented Intelligence"
          description="AI co-pilots and intelligent forms that enhance—not replace—your team."
          items={aiFeatures}
        />
        <FeatureBlock
          icon={Workflow}
          title="Workflows & Operations"
          description="Multiple services, RBAC, OBT, dashboards, and reports by status."
          items={opsFeatures}
        />
        <FeatureBlock
          icon={FileText}
          title="Documents & Approvals"
          description="Resources, client/firm/team docs, approvals, eSignatures, audit logs."
          items={docFeatures}
        />
        <FeatureBlock
          icon={MessageSquare}
          title="Chat, Notifications & Broadcasts"
          description="Collaboration and event-driven notifications to the right people."
          items={chatFeatures}
        />
        <FeatureBlock
          icon={CreditCard}
          title="Billing & Payments"
          description="Price lists, agreements, invoices, ACH, partial payments, export."
          items={billingFeatures}
        />
      </div>

      <div className="mt-16 pt-12 border-t border-[var(--border)] flex flex-wrap gap-4">
        <Link href="/">
          <Button variant="primary">Back to Home</Button>
        </Link>
        <Link href="/pricing">
          <Button variant="outline">View Pricing</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline">Request Demo</Button>
        </Link>
      </div>
    </div>
  );
}
