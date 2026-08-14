import { Metadata } from "next";
import {
  Target,
  Sparkles,
  Eye,
  ShieldCheck,
  TrendingUp,
  HeartHandshake,
  Layers,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { GoalsSection } from "@/components/sections/goals";
import { StatsSection } from "@/components/sections/stats";
import { Pillars } from "@/components/sections/pillars";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "About | AccuMax",
  description:
    "The AccuMax Promise: transform practice management from a system of tasks into a system of intelligence, insight, and client value—delivering >30% increase in Gross Margins.",
};

const values = [
  {
    icon: TrendingUp,
    title: "The AccuMax Promise",
    description:
      "A system of intelligence, insight, and client value—delivering >30% increase in Gross Margins.",
  },
  {
    icon: Sparkles,
    title: "Ambient Intelligence",
    description:
      "Intelligence is everywhere, not in one feature. The system anticipates, guides, and clarifies—CPAs stay in control.",
  },
  {
    icon: Eye,
    title: "Effortless Clarity",
    description:
      "Simplicity without dumbing down. Streamlined workflows and reduced cognitive load with visual and conceptual clarity.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Compliance",
    description:
      "Audit-ready, traceable, defensible, secure, and predictable. Accuracy you can defend, on every return.",
  },
  {
    icon: HeartHandshake,
    title: "Client-centric",
    description:
      "Self-service portals and faster answers that make clients feel cared for—longer tenure, higher ARPU.",
  },
  {
    icon: Layers,
    title: "One platform",
    description:
      "Deep AI across the full practice OS plus orchestration—five tools collapse into one system of record.",
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
            Elevating the CPA.{" "}
            <span className="gradient-text">Not the AI, not the process.</span>
          </h1>
          <p className="mt-6 text-lg text-[var(--muted-foreground)] leading-relaxed">
            AccuMax transforms practice management from a system of tasks into
            a system of intelligence, insight, and client value—delivering a{" "}
            <strong className="text-[var(--foreground)]">
              &gt;30% increase in Gross Margins
            </strong>{" "}
            through less labor per return, a cheaper labor mix, and more
            advisory revenue.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact#demo" variant="primary" size="lg" className="shadow-lg shadow-[var(--primary)]/20">
              Book a Demo
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Strategic goals (reused polished section) */}
      <GoalsSection />

      {/* Pillars */}
      <Pillars />

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-4 py-1.5 text-sm font-medium text-[var(--primary)] mb-6">
              What we believe
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl">
              The principles behind AccuMax
            </h2>
            <p className="mt-4 text-lg text-[var(--muted-foreground)]">
              How we design the platform for the AI-augmented accounting
              profession.
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
            The operating system for the AI-augmented accounting profession
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
            Every firm, everywhere. Work smarter. Serve better. Stay
            compliant.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <ButtonLink href="/features" variant="primary" size="lg">Explore Features</ButtonLink>
            <ButtonLink href="/contact" variant="outline" size="lg">Talk to Us</ButtonLink>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}