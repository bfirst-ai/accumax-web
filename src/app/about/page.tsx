import { Metadata } from "next";
import {
  Target,
  Cloud,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Layers,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { GoalsSection } from "@/components/sections/goals";
import { StatsSection } from "@/components/sections/stats";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "About | AccuMaxio",
  description:
    "Our mission: leverage AI to empower accounting professionals with tools that enhance client relationships, streamline operations, and drive growth.",
};

const values = [
  {
    icon: Cloud,
    title: "Online-first",
    description: "A cloud platform with no local database—your firm is always in sync, anywhere.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance built-in",
    description: "Role-based access, searchable audit logs, and eSignatures designed for regulated work.",
  },
  {
    icon: Sparkles,
    title: "AI that augments",
    description: "Co-pilots that enhance your team's judgment and speed—never replace it.",
  },
  {
    icon: HeartHandshake,
    title: "Client-centric",
    description: "Self-service portals that make clients feel cared for and keep them longer.",
  },
  {
    icon: Layers,
    title: "One platform",
    description: "Portals, workflows, documents, chat, and billing—unified, not bolted together.",
  },
  {
    icon: Target,
    title: "Built to scale",
    description: "Multi-tenant architecture and automation that grows with your firm to 10X.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero / Mission */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white pt-16 md:pt-24 pb-16 md:pb-20">
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 h-[280px] w-[280px] rounded-full bg-[var(--accent)] opacity-15 blur-[100px]" />
        </div>
        <div className="container relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-3 py-1 text-sm font-medium text-[var(--primary)] mb-6">
            <Target className="h-3.5 w-3.5 mr-2" aria-hidden />
            Our mission
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl leading-tight">
            Empowering firms with{" "}
            <span className="gradient-text">augmented intelligence</span>
          </h1>
          <p className="mt-6 text-lg text-[var(--muted-foreground)] leading-relaxed">
            We leverage state-of-the-art AI to empower accounting professionals with
            tools that enhance client relationships, streamline operations, and drive
            sustainable growth—so firms can deliver unparalleled value and insightful
            financial guidance, more efficiently than ever.
          </p>
        </div>
      </section>

      {/* Strategic goals (reused polished section) */}
      <GoalsSection />

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-4 py-1.5 text-sm font-medium text-[var(--primary)] mb-6">
              What we believe
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl">
              The principles behind AccuMaxio
            </h2>
            <p className="mt-4 text-lg text-[var(--muted-foreground)]">
              How we design the platform for modern accounting and professional services firms.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="group rounded-2xl border border-[var(--border)] bg-white p-7 shadow-sm hover-lift hover:shadow-xl hover:border-[var(--primary)]/25 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 text-[var(--primary)] mb-5 group-hover:scale-110 transition-transform duration-300">
                  <v.icon className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{v.title}</h3>
                <p className="mt-2 text-[var(--muted-foreground)] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats (reused) */}
      <StatsSection />

      {/* Closing band */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Built for the way modern firms work
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
            AccuMaxio combines an online-first platform, role-based access, and AI-augmented
            workflows so you can scale, stay compliant, and deliver more value to clients.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <ButtonLink href="/features" variant="primary" size="lg">Explore Features</ButtonLink>
            <ButtonLink href="/contact" variant="outline" size="lg">Contact Us</ButtonLink>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
