import { Metadata } from "next";
import { Target } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { GoalsSection } from "@/components/sections/goals";
import { MarketProblem } from "@/components/sections/market-problem";
import { StatsSection } from "@/components/sections/stats";
import { Pillars } from "@/components/sections/pillars";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "About | AccuMax",
  description:
    "The AccuMax Promise: higher throughput, increased ARPU and reduced cost to serve—delivering >25% increase in Gross Margins.",
};


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
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl leading-tight text-balance">
            <span className="block">Built around the CPA.</span>
            <span className="block gradient-text leading-[1.25] pb-[0.1em]">Not around the AI.</span>
          </h1>
          <p className="mt-6 text-lg text-[var(--muted-foreground)] leading-relaxed">
            A firm only grows profit three ways: push more work through, earn
            more from each client, or spend less delivering it. AccuMax moves all
            three at once—compounding into a{" "}
            <strong className="text-[var(--foreground)]">
              &gt;25% increase in Gross Margins
            </strong>
            .
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact#demo" variant="primary" size="lg" className="shadow-lg shadow-[var(--primary)]/20">
              Book a Demo
            </ButtonLink>
          </div>
        </div>
      </section>

      <MarketProblem />

      {/* What firms are trying to do */}
      <GoalsSection />

      {/* Pillars */}
      <Pillars />

      {/* Stats (reused) */}
      <StatsSection />

      {/* Closing band */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)] text-balance">
            The software your firm runs on, with the AI already in it
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
            Every firm, everywhere. One AI engine — AccuTax — over one version
            of the truth. Work smarter. Serve better. Stay compliant.
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