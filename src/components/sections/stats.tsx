"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, LayoutDashboard, Award, FileCheck } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "4,600+",
    label: "Accounts Managed",
    description: "Scale with confidence",
  },
  {
    icon: LayoutDashboard,
    value: "3 Portals",
    label: "Client, Team, Admin",
    description: "Self-service for every role",
  },
  {
    icon: TrendingUp,
    value: "RBAC",
    label: "Role-Based Access",
    description: "Security by design",
  },
  {
    icon: FileCheck,
    value: "Audit Ready",
    label: "Logs & eSignatures",
    description: "Compliance built in",
  },
  {
    icon: Award,
    value: "Online-First",
    label: "No Local DB",
    description: "Always in sync",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function StatsSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50 border-y border-[var(--border)]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon
                  className="h-7 w-7 text-[var(--primary)]"
                  aria-hidden
                />
              </div>
              <p className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-1">
                {stat.value}
              </p>
              <p className="text-base font-semibold text-[var(--foreground)] mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-[var(--muted-foreground)]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
