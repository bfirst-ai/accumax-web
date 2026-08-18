"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  UserPlus,
  FileSignature,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";

const areas = [
  {
    icon: UserPlus,
    title: "Client Intake & Engagement",
    points: [
      "InTakePro customizable onboarding",
      "Tax organizer generation",
      "Zip / composite doc inputs + Forms Intelligence",
      "Draft returns & account-summary triage",
      "Outlook / Gmail / QuickBooks integration",
      "Transfer to TaxPrep SW",
    ],
  },
  {
    icon: FileSignature,
    title: "Approvals · Invoicing · Payments",
    points: [
      "DocuSign / Zoho Sign, any e-signature",
      "Send-for-approval workflows",
      "Immutable audit logs & document provenance",
      "Invoice templates with revision history",
      "Full / partial / recurring payments",
      "AR aging & account reconciliation",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Visibility · Control · Governance",
    points: [
      "Firm-wide dashboards & drilldowns",
      "Performance by person / group / service",
      "Entity-level provenance & audit logs",
      "Self-service migration in and out",
      "Enterprise-class admin flexibility",
      "Notifications across web, email & SMS",
    ],
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export function PracticeOs() {
  return (
    <section
      id="practice-os"
      className="relative py-20 md:py-28 overflow-hidden"
      aria-labelledby="practice-os-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[var(--gray-50)]" />

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-4 py-1.5 text-sm font-medium text-[var(--primary)] mb-6">
            Product breadth · Practice OS
          </span>
          <h2
            id="practice-os-heading"
            className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl"
          >
            Deep AI inside a{" "}
            <span className="gradient-text">complete practice OS</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--muted-foreground)] leading-relaxed">
            Every workflow your firm runs—from first client touch to final
            reconciliation—in one platform.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid lg:grid-cols-3 gap-6 md:gap-8"
        >
          {areas.map((area) => (
            <motion.div
              key={area.title}
              variants={item}
              className="group relative h-full"
            >
              <div className="relative h-full rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm hover:shadow-xl hover:border-[var(--primary)]/25 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 text-[var(--primary)] mb-6 group-hover:scale-110 transition-transform duration-300">
                    <area.icon className="h-7 w-7" aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-5">
                    {area.title}
                  </h3>
                  <ul className="space-y-3">
                    {area.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-[var(--gray-700)] leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:underline"
          >
            See everything in the platform
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}