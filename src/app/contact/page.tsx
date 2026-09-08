import { Metadata } from "next";
import {
  Mail,
  CalendarClock,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact & Demo | AccuMax",
  description:
    "Book a personalized 30-minute demo, start a 90-day free trial, or talk to our CPA specialist team. See AccuMax's AI agents and practice OS working for your firm.",
};

const expect = [
  "A personalized 30-minute demo—see AccuMax working in a firm just like yours",
  "Live look at the AI agent workforce and full practice OS",
  "Migration & onboarding plan for your data",
  "Pricing guidance for your team size",
];

const contacts = [
  {
    icon: Mail,
    label: "Email us",
    value: "nagesh@bfirst.ai",
    href: "mailto:nagesh@bfirst.ai",
  },
  {
    icon: CalendarClock,
    label: "Book a demo",
    value: "30 minutes, personalized",
  },
  {
    icon: ShieldCheck,
    label: "Response time",
    value: "Within 1 business day",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute right-0 top-0 -z-10 h-[280px] w-[280px] rounded-full bg-[var(--accent)] opacity-15 blur-[100px]" />
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: pitch */}
            <div className="lg:pt-6">
              <div className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-3 py-1 text-sm font-medium text-[var(--primary)] mb-6">
                <Sparkles className="h-3.5 w-3.5 mr-2" aria-hidden />
                Request a demo
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl leading-tight text-balance">
                <span className="block">See it live.</span>
                <span className="block gradient-text leading-[1.25] pb-[0.1em]">See AccuMax working for your firm.</span>
              </h1>
              <p className="mt-6 text-lg text-[var(--muted-foreground)] leading-relaxed max-w-xl">
                Book a personalized 30-minute demo and see AccuMax working in
                a firm just like yours—AI agents, intake, approvals, payments,
                and governance, all in one platform.
              </p>

              <ul className="mt-8 space-y-3">
                {expect.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[var(--gray-700)]">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--success)] mt-0.5" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid sm:grid-cols-3 gap-4">
                {contacts.map((c) => {
                  const inner = (
                    <div className="rounded-xl border border-[var(--border)] bg-white p-4 shadow-sm hover:border-[var(--primary)]/20 transition-colors h-full">
                      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] mb-3">
                        <c.icon className="h-4 w-4" aria-hidden />
                      </div>
                      <p className="text-xs text-[var(--muted-foreground)]">{c.label}</p>
                      <p className="text-sm font-semibold text-[var(--foreground)] mt-0.5">{c.value}</p>
                    </div>
                  );
                  return c.href ? (
                    <a key={c.label} href={c.href} className="block">
                      {inner}
                    </a>
                  ) : (
                    <div key={c.label}>{inner}</div>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                <ShieldCheck className="h-4 w-4 text-[var(--success)]" aria-hidden />
                Audit-ready · Traceable · Defensible
              </div>
            </div>

            {/* Right: form */}
            <div id="demo" className="scroll-mt-24">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
