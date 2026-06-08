"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Award, CheckCircle } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "SOC 2 Type II",
    description: "Certified",
  },
  {
    icon: Lock,
    title: "256-bit SSL",
    description: "Encryption",
  },
  {
    icon: Award,
    title: "GDPR",
    description: "Compliant",
  },
  {
    icon: CheckCircle,
    title: "99.9%",
    description: "Uptime SLA",
  },
];

export function TrustBadges() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[var(--gray-50)]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-2">
            Enterprise-grade security and compliance
          </h2>
          <p className="text-sm md:text-base text-[var(--muted-foreground)]">
            Your data is protected with bank-level encryption, role-based access, and audit trails. Built for firms that need to meet strict regulatory requirements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-stretch gap-4 md:gap-6"
        >
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-white px-5 py-4 shadow-sm hover:shadow-md hover:border-[var(--primary)]/20 transition-all duration-300 min-w-[140px]"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--primary)]/10 shrink-0">
                <badge.icon
                  className="h-6 w-6 text-[var(--primary)]"
                  aria-hidden
                />
              </div>
              <div>
                <p className="text-sm font-bold text-[var(--foreground)]">
                  {badge.title}
                </p>
                <p className="text-xs text-[var(--muted-foreground)]">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
