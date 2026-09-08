"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { Input } from "@/components/ui/input";
import { CalendarCheck, Rocket, MessageCircle } from "lucide-react";

export function Cta() {
  return (
    <section id="cta" className="relative py-20 md:py-28 overflow-hidden" aria-labelledby="cta-heading">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--accent)]" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl floating" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[var(--accent-light)] rounded-full blur-3xl floating" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-white mr-2 animate-pulse"></span>
            Join CPA firms across the Pacific Northwest already working smarter
          </div>
          <h2 id="cta-heading" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight text-balance">
            Ready to Elevate <br className="hidden sm:block" />
            Your Practice?
          </h2>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Work smarter. Serve better. Stay compliant. Three ways to get
            started with AccuMax.
          </p>

          {/* Three CTAs */}
          <div className="mt-12 grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-white/25 bg-white/10 p-6 backdrop-blur-sm hover:bg-white/15 transition-colors flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/15 mb-4">
                <CalendarCheck className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="text-lg font-bold mb-1 text-balance">See It Live</h3>
              <p className="text-sm text-white/80 mb-5">
                Book a personalized 30-minute demo and see AccuMax working in a
                firm just like yours.
              </p>
              <ButtonLink
                href="/contact#demo"
                size="default"
                className="mt-auto bg-white text-[var(--primary)] hover:bg-white/90 hover:scale-105 transition-transform border-0 shadow-lg font-semibold w-full"
              >
                Book a Demo →
              </ButtonLink>
            </div>

            <div className="rounded-2xl border-2 border-white bg-white/15 p-6 backdrop-blur-sm hover:bg-white/20 transition-colors flex flex-col items-center text-center relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white text-[var(--primary)] px-3 py-0.5 text-[11px] font-bold shadow">
                ★ Most Popular
              </span>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/15 mb-4">
                <Rocket className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="text-lg font-bold mb-1 text-balance">Try It Free</h3>
              <p className="text-sm text-white/80 mb-5">
                Start a 90-day free trial with full platform access and a
                dedicated success manager from day one.
              </p>
              <ButtonLink
                href="/pricing"
                size="default"
                className="mt-auto bg-white text-[var(--primary)] hover:bg-white/90 hover:scale-105 transition-transform border-0 shadow-lg font-semibold w-full"
              >
                Start Free Trial →
              </ButtonLink>
            </div>

            <div className="rounded-2xl border border-white/25 bg-white/10 p-6 backdrop-blur-sm hover:bg-white/15 transition-colors flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/15 mb-4">
                <MessageCircle className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="text-lg font-bold mb-1 text-balance">Talk to Us</h3>
              <p className="text-sm text-white/80 mb-5">
                Speak directly with our CPA specialist team—no scripts, just
                honest conversations.
              </p>
              <ButtonLink
                href="/contact"
                size="default"
                className="mt-auto bg-white text-[var(--primary)] hover:bg-white/90 hover:scale-105 transition-transform border-0 shadow-lg font-semibold w-full"
              >
                Contact Us →
              </ButtonLink>
            </div>
          </div>

          <p className="mt-8 text-sm text-white/70">
            Nagesh Pabbisetty — Founder &amp; CEO, BusinessFirst LLC · nagesh@bfirst.ai
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-white/20 max-w-xl mx-auto"
        >
          <p className="text-center text-sm font-medium text-white/90 mb-3">
            Get product updates and tips in your inbox.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/60 focus-visible:ring-white"
              aria-label="Email for newsletter"
            />
            <Button
              type="submit"
              variant="secondary"
              className="bg-white text-[var(--primary)] hover:bg-white/90"
            >
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}