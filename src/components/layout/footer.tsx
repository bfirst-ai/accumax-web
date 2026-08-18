"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const productLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Integrations" },
  { href: "/contact", label: "Demo" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "#", label: "Careers" },
];

const resourceLinks = [
  { href: "/resources", label: "Blog" },
  { href: "#", label: "Case Studies" },
  { href: "#", label: "Guides" },
  { href: "#", label: "Webinars" },
];

const legalLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Cookie Policy" },
];

const socialIcons = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-4 group"
              aria-label="AccuMax Home"
            >
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Logo.png`}
                alt="AccuMax"
                className="h-9 w-auto max-w-[120px] object-contain object-left transition-opacity group-hover:opacity-90"
              />
              <span className="text-2xl font-extrabold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                AccuMax
              </span>
            </Link>
            <p className="text-[var(--muted-foreground)] text-sm max-w-xs mb-6">
              CPA Practice Management Reinvented with AI. A workforce of
              tax-domain AI agents inside a complete practice operating
              system. Work smarter. Serve better. Stay compliant.
            </p>
            <p className="text-sm font-medium text-[var(--foreground)] mb-2">
              Stay updated
            </p>
            <form className="flex gap-2 flex-wrap" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-[200px]"
                aria-label="Email for newsletter"
              />
              <Button type="submit" variant="primary" size="default">
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </form>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-[var(--foreground)] mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-[var(--gray-900)] mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-[var(--gray-900)] mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[var(--gray-900)] mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
              <li>
                <a
                  href="mailto:nagesh@bfirst.ai"
                  className="inline-flex items-center gap-2 hover:text-[var(--primary)] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  nagesh@bfirst.ai
                </a>
              </li>
              <li>Founder &amp; CEO: Nagesh Pabbisetty</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {socialIcons.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-[var(--gray-500)] hover:text-[var(--primary)] transition-colors p-1"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center sm:text-left text-sm text-[var(--muted-foreground)]">
          &copy; {new Date().getFullYear()} AccuMax. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
