"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { Input } from "@/components/ui/input";

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
            One platform for client relationships, workflows, and growth
          </div>
          <h2 id="cta-heading" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight">
            Ready to Empower <br className="hidden sm:block" />
            Your Practice with AI?
          </h2>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Start your free trial. No credit card required. Experience augmented
            intelligence, self-service portals, and streamlined operations.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ButtonLink
              href="/contact"
              size="xl"
              className="bg-white text-[var(--primary)] hover:bg-white/90 hover:scale-105 transition-transform border-0 shadow-2xl font-semibold"
            >
              Start Free Trial →
            </ButtonLink>
            <ButtonLink
              href="/contact#demo"
              size="xl"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm font-semibold"
            >
              Watch Demo
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-white/70">
            ✓ 14-day free trial &nbsp;•&nbsp; ✓ No credit card required &nbsp;•&nbsp; ✓ Cancel anytime
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
