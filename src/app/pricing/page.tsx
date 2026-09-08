import { Metadata } from "next";
import { PricingContent } from "@/components/pricing/pricing-content";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Pricing | AccuMax",
  description:
    "Practice management pricing with an AI workforce included. Standard $799, Professional $999, Premium $1,199 per seat, per year — save up to 12.5% on multi-year terms. Nine AccuTax CoPilots are unlimited on every tier Start a 90-day free trial.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white pt-16 md:pt-24 pb-12">
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 h-[280px] w-[280px] rounded-full bg-[var(--primary)] opacity-15 blur-[100px]" />
        </div>
        <div className="container relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-3 py-1 text-sm font-medium text-[var(--primary)] mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[var(--primary)] mr-2 animate-pulse" />
            Pricing
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl text-balance">
            <span className="block">
              Pay for <span className="whitespace-nowrap">practice management</span>.
            </span>
            <span className="block gradient-text">
              Get an <span className="whitespace-nowrap">AI workforce</span>, too.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-[var(--muted-foreground)] leading-relaxed text-pretty">
            From $699 per seat, per year — at or below what firms already pay for
            practice management alone, with a whole workforce of{" "}
            <span className="whitespace-nowrap">tax-domain</span> AI agents
            included. Seven CoPilots — including Recognize, Extract, Organize and
            Compose — are unlimited on every tier, from day one.
          </p>
        </div>
      </section>

      {/* Plans + comparison + FAQ */}
      <section className="pb-20 md:pb-28 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingContent />
        </div>
      </section>

      <Cta />
    </>
  );
}