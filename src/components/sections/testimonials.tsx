"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "The Client and Team portals plus RBAC changed how we serve clients. Onboarding is faster and everyone sees only what they need.",
    name: "Sarah Chen",
    role: "Managing Partner",
    company: "Chen & Associates CPA",
    avatar: "SC",
    rating: 5,
  },
  {
    quote:
      "Workflow automation and dashboards by status—NEW, Assigned, On Hold, Completed—gave us control we never had before.",
    name: "Michael Torres",
    role: "Operations Director",
    company: "Torres Legal Group",
    avatar: "MT",
    rating: 5,
  },
  {
    quote:
      "One place for documents, approvals, eSignatures, chat, and billing. Audit logs and notifications keep us compliant and in sync.",
    name: "Emily Watson",
    role: "Practice Manager",
    company: "Watson Advisory",
    avatar: "EW",
    rating: 5,
  },
];

const stats = [
  { value: "Portals", label: "Client, Team, Admin" },
  { value: "AI CoPilots", label: "Onboarding & CPA" },
  { value: "Compliance", label: "Audit logs & RBAC" },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl">
            Loved by Practitioners Everywhere
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            See why accounting and legal firms choose AccuMaxio to run their
            practice.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-[var(--muted-foreground)] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full bg-white hover-lift group relative overflow-hidden shadow-sm hover:shadow-xl border border-[var(--border)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-6 md:p-8 relative">
                  <Quote className="h-10 w-10 text-[var(--primary)]/20 mb-4 group-hover:text-[var(--primary)]/30 transition-colors" aria-hidden />
                  <div className="flex gap-1 mb-4" aria-label={`Rated ${t.rating} out of 5`}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-5 w-5 fill-[var(--warning)] text-[var(--warning)]"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <p className="text-[var(--foreground)] mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 flex items-center justify-center text-sm font-bold text-[var(--primary)]">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--foreground)]">
                        {t.name}
                      </p>
                      <p className="text-sm text-[var(--muted-foreground)]">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
