import { Metadata } from "next";
import { Lifecycle } from "@/components/sections/lifecycle";
import { AiAgents } from "@/components/sections/ai-agents";
import { Cta } from "@/components/sections/cta";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "AccuTax CoPilots | AccuMax",
  description:
    "Fourteen AI CoPilots covering the whole engagement — intake, recognize, extract, bridge, organize, profile, research, prepare, review, plan, defend and compose. All on one engine, over one client record.",
};

export default function CoPilotsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white pt-16 md:pt-24 pb-14">
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 h-[280px] w-[280px] rounded-full bg-[var(--accent)] opacity-15 blur-[100px]" />
        </div>
        <div className="container relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-3 py-1 text-sm font-medium text-[var(--accent)] mb-6">
            AccuTax CoPilots
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl text-balance">
            <span className="block">A CoPilot for every</span>
            <span className="block gradient-text leading-[1.25] pb-[0.1em]">
              step of the engagement
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-[var(--muted-foreground)] leading-relaxed text-pretty">
            Fourteen CoPilots, from the first intake form to the last client
            letter. Each one does a real job — and every one of them works from
            the same client record.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <ButtonLink href="/contact#demo" variant="primary" size="lg">
              Book a Demo
            </ButtonLink>
            <ButtonLink href="/pricing" variant="outline" size="lg">
              See what&apos;s included
            </ButtonLink>
          </div>
        </div>
      </section>

      <Lifecycle />
      <AiAgents />
      <Cta />
    </>
  );
}
