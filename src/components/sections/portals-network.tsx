"use client";

import { motion, type Variants } from "framer-motion";
import { Users, UserCog, Shield, ArrowRight } from "lucide-react";

const portals = [
  {
    id: "client",
    label: "Client Portal",
    description: "Upload docs · View status · Approve",
    icon: Users,
  },
  {
    id: "team",
    label: "Team Portal",
    description: "Assign · Work · Review",
    icon: UserCog,
  },
  {
    id: "admin",
    label: "Admin Portal",
    description: "Oversee · RBAC · Dashboards",
    icon: Shield,
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 24 },
  },
};

export function PortalsNetwork() {
  return (
    <section
      id="portals-network"
      className="relative py-20 md:py-28 overflow-hidden"
      aria-labelledby="portals-heading"
    >
      <div className="absolute inset-0 bg-[var(--gray-950)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/5 to-transparent" />

      <div className="container relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2
            id="portals-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
          >
            {"Three portals. One flow.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-3 text-[var(--gray-400)]"
          >
            Client uploads → Team works → Admin oversees → Back to client
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4"
        >
          {portals.map((portal, i) => (
            <motion.div
              key={portal.id}
              variants={card}
              transition={{ type: "spring", stiffness: 200, damping: 24 }}
              className="flex items-center"
            >
              <PortalCard portal={portal} index={i} />
              {i < portals.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.12 }}
                  className="hidden md:flex flex-shrink-0 px-2 text-[var(--accent)] overflow-visible"
                  aria-hidden
                >
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-6 w-6" />
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-center text-sm text-[var(--gray-500)] mt-10"
        >
          Connected by one platform. Everyone stays in sync.
        </motion.p>
      </div>
    </section>
  );
}

function PortalCard({
  portal,
  index,
}: {
  portal: (typeof portals)[0];
  index: number;
}) {
  const Icon = portal.icon;
  return (
    <motion.div
      className="group w-full max-w-[220px] rounded-2xl border border-[var(--gray-700)] bg-[var(--gray-900)]/90 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-[var(--accent)]/40 hover:shadow-lg hover:shadow-[var(--accent)]/5"
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        initial={{ scale: 0, rotate: -12 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
        className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] group-hover:shadow-[0_0_20px_var(--accent)]"
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="h-7 w-7" aria-hidden />
        </motion.div>
      </motion.div>
      <motion.h3
        className="font-bold text-white text-base mb-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2 }}
      >
        {portal.label}
      </motion.h3>
      <motion.p
        className="text-xs text-[var(--gray-500)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3 }}
      >
        {portal.description}
      </motion.p>
    </motion.div>
  );
}
