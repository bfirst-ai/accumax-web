"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/utils";

const productItems = [
  "Client Portal",
  "Team Portal",
  "Admin Portal",
  "Workflows & Automation",
  "Document Management",
  "eSignatures & Approvals",
  "AI CoPilot (QuickT & CPAL)",
  "Intelligent Forms & Data Extraction",
  "Tax Organizer Generation",
  "Chat & Notifications",
  "Audit Logs",
  "Dashboards & Reports",
  "RBAC & OBT",
  "Price Lists & Agreements",
  "Invoices & Payments",
  "Batch Automations",
];

const serviceItems = [
  "Practice Management",
  "Client Onboarding",
  "Workflow Design",
  "Compliance & Audit",
  "Billing & Invoicing",
  "Document Workflows",
  "Multi-Service Support",
  "Team Collaboration",
  "Self-Service Portals",
  "API & Integrations",
  "Migration Support",
  "Training & Onboarding",
];

const resourcesItems = [
  "Blog",
  "Case Studies",
  "Guides & Tutorials",
  "Webinars",
  "Documentation",
  "API Reference",
  "Video Library",
  "Best Practices",
  "Industry Reports",
  "Release Notes",
  "FAQ",
  "Support Center",
  "Community",
  "Partners",
];

const whyAccumaxItems = [
  "Our Mission",
  "Strategic Goals",
  "Scale to 10X",
  "Leverage AI",
  "Client Loyalty",
  "Operational Transformation",
  "Online-First Platform",
  "Compliance Built-In",
  "Customer Stories",
  "Security & Privacy",
  "Why Choose Us",
  "Roadmap",
];

type NavItem =
  | { href: string; label: string }
  | { label: string; dropdown: string[]; dropdownHref: string };

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { label: "Product", dropdown: productItems, dropdownHref: "/features" },
  { label: "Services", dropdown: serviceItems, dropdownHref: "/features" },
  { href: "/pricing", label: "Pricing" },
  { label: "Resources", dropdown: resourcesItems, dropdownHref: "/resources" },
  { label: "Why Accumax", dropdown: whyAccumaxItems, dropdownHref: "/about" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur-xl before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-[var(--primary)]/20 before:to-transparent",
        scrolled 
          ? "border-gray-200/80 bg-white/90 supports-[backdrop-filter]:bg-white/85"
          : "border-gray-100/50 bg-white/70 supports-[backdrop-filter]:bg-white/60"
      )}
      style={{
        boxShadow: scrolled 
          ? '0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.06)'
          : '0 1px 3px 0 rgba(0, 0, 0, 0.03), 0 1px 2px -1px rgba(0, 0, 0, 0.03)',
        transition: 'box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Accumax Home"
          >
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Accumax-icon.ico`}
              alt="Accumax"
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="hidden sm:block text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent group-hover:from-[var(--primary)] group-hover:via-[var(--primary-dark)] group-hover:to-[var(--accent)] transition-all duration-300">
              Accumax
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1 px-4 py-1 rounded-2xl bg-gray-50/50 border border-gray-100/80"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              if ("href" in item) {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 py-2.5 text-[13px] font-semibold transition-all duration-200 rounded-xl relative group",
                      isActive
                        ? "text-[var(--primary)] bg-gradient-to-br from-[var(--primary)]/8 to-[var(--accent)]/8"
                        : "text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50/80"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 blur-sm" />
                    )}
                  </Link>
                );
              }
              const isOpen = openDropdown === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className={cn(
                      "px-4 py-2.5 text-[13px] font-semibold transition-all duration-200 rounded-xl flex items-center gap-1",
                      isOpen
                        ? "text-[var(--primary)] bg-gradient-to-br from-[var(--primary)]/8 to-[var(--accent)]/8"
                        : "text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50/80"
                    )}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} aria-hidden />
                  </button>
                  <AnimatePresence>
                    {isOpen && item.dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 p-2 w-[28rem] max-h-[70vh] overflow-y-auto rounded-xl border border-[var(--border)] bg-white shadow-xl z-50"
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {item.dropdown.map((point) => (
                            <Link
                              key={point}
                              href={item.dropdownHref}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-3 py-2.5 rounded-lg border border-[var(--border)] bg-gray-50/80 text-sm text-gray-700 hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)] transition-colors"
                            >
                              {point}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ButtonLink
              href="/contact"
              variant="primary"
              size="default"
              className="font-semibold text-[13px] px-6 py-2.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] hover:from-[var(--primary-dark)] hover:to-[var(--accent)] shadow-lg shadow-[var(--primary)]/30 hover:shadow-xl hover:shadow-[var(--primary)]/40 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Request Demo
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </ButtonLink>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100/50 hover:text-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-all duration-200 border border-transparent hover:border-gray-200/50"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden border-t border-gray-100/50 bg-white/95 backdrop-blur-xl overflow-hidden"
            style={{
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)'
            }}
          >
            <nav
              className="container max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => {
                if ("href" in item) {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-between group",
                        isActive
                          ? "bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent)]/10 text-[var(--primary)]"
                          : "text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50/80 hover:translate-x-1"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </Link>
                  );
                }
                const isExpanded = openMobileDropdown === item.label;
                return (
                  <div key={item.label} className="rounded-xl overflow-hidden border border-gray-100/80">
                    <button
                      type="button"
                      onClick={() => setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)}
                      className={cn(
                        "w-full py-3.5 px-4 font-semibold text-sm transition-all duration-200 flex items-center justify-between",
                        isExpanded
                          ? "bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent)]/10 text-[var(--primary)]"
                          : "text-gray-700 hover:bg-gray-50/80"
                      )}
                      aria-expanded={isExpanded}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-180")} aria-hidden />
                    </button>
                    <AnimatePresence initial={false}>
                      {isExpanded && item.dropdown && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden bg-gray-50/50"
                        >
                          <div className="py-2 px-2 max-h-64 overflow-y-auto grid grid-cols-2 gap-2">
                            {item.dropdown.map((point) => (
                              <Link
                                key={point}
                                href={item.dropdownHref}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2.5 px-3 text-sm text-gray-700 rounded-lg border border-[var(--border)] bg-white hover:border-[var(--primary)]/30 hover:text-[var(--primary)] transition-colors"
                              >
                                {point}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-gray-100/50">
                <ButtonLink
                  href="/contact"
                  variant="primary"
                  className="w-full justify-center shadow-lg shadow-[var(--primary)]/30 font-semibold py-3 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] hover:shadow-xl hover:shadow-[var(--primary)]/40 transition-all duration-300 relative overflow-hidden group"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Request Demo
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </ButtonLink>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
