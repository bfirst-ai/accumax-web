import { Metadata } from "next";
import { AccuTaxSection } from "@/components/sections/accutax";
import { NoRipAndReplace } from "@/components/sections/how-it-works";
import { UnitEconomics } from "@/components/sections/unit-economics";
import { Cta } from "@/components/sections/cta";
import { MarginBasisNote } from "@/components/ui/margin-claim";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "Why AccuMax | AccuMax",
  description:
    "One AI engine over one client record, a platform that runs beside what you already have, and a measurable lift in gross margin. Why AccuMax is not another bolt-on.",
};

export default function WhyAccuMaxPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white pt-16 md:pt-24 pb-14">
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 h-[280px] w-[280px] rounded-full bg-[var(--primary)] opacity-15 blur-[100px]" />
        </div>
        <div className="container relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-3 py-1 text-sm font-medium text-[var(--primary)] mb-6">
            Why AccuMax
          </div>
          {/* clamp, not the step scale: at text-6xl the second sentence needs
              1034px in an 832px column and breaks after "nobody". */}
          <h1 className="text-[clamp(1.5rem,5.2vw,3.75rem)] font-bold tracking-tight text-[var(--foreground)] text-balance">
            <span className="block">Anyone can bolt on AI.</span>
            <span className="block gradient-text leading-[1.25] pb-[0.1em]">
              Few build on one engine.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-[var(--muted-foreground)] leading-relaxed text-pretty">
            Every AccuMax CoPilot runs on AccuTax, over a single client record.
            That is the difference between a plan and a return that agree, and
            four tools quietly telling you four different things.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <ButtonLink href="/contact#demo" variant="primary" size="lg">
              Book a Demo
            </ButtonLink>
            <ButtonLink href="/copilots" variant="outline" size="lg">
              See AccuTax CoPilots
            </ButtonLink>
          </div>
        </div>
      </section>

      <AccuTaxSection />
      <NoRipAndReplace />
      <UnitEconomics />
      <MarginBasisNote />
      <Cta />
    </>
  );
}
