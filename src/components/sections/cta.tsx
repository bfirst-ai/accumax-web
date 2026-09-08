"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { CalendarCheck, Sparkles } from "lucide-react";

/* Deliberately light. It closes the page; it should not compete with it. */

export function Cta() {
  return (
    <section
      id="cta"
      className="py-16 md:py-20 bg-gradient-to-b from-white to-[var(--gray-50)] border-t border-[var(--border)]"
      aria-labelledby="cta-heading"
    >
      <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="cta-heading"
          className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)] text-balance"
        >
          See it on your own returns
        </h2>
        <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed text-pretty">
          Book a 30-minute walkthrough, or start the trial and try it against a
          real engagement.
        </p>

        <div className="mt-7 flex flex-wrap gap-3 justify-center">
          <ButtonLink href="/contact#demo" variant="primary" size="lg">
            <CalendarCheck className="h-4 w-4" aria-hidden />
            Book a Demo
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline" size="lg">
            <Sparkles className="h-4 w-4" aria-hidden />
            Start Free Trial
          </ButtonLink>
        </div>

        <p className="mt-5 text-sm text-[var(--muted-foreground)]">
          90-day free trial · full platform access · no credit card
        </p>
      </div>
    </section>
  );
}
