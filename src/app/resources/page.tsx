import { Metadata } from "next";
import {
  BookOpen,
  FileText,
  GraduationCap,
  Video,
  Code2,
  Newspaper,
  LifeBuoy,
  Mail,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Resources | AccuMaxio",
  description:
    "Guides, case studies, webinars, and documentation to help your firm get the most out of AccuMaxio. Coming soon.",
};

const categories = [
  { icon: Newspaper, title: "Blog", description: "Trends, tips, and product news for modern firms." },
  { icon: FileText, title: "Case Studies", description: "How firms scale with portals, AI, and automation." },
  { icon: GraduationCap, title: "Guides & Tutorials", description: "Step-by-step setup for workflows, RBAC, and billing." },
  { icon: Video, title: "Webinars", description: "Live and on-demand sessions with product experts." },
  { icon: BookOpen, title: "Documentation", description: "Reference for every feature across all portals." },
  { icon: Code2, title: "API Reference", description: "Integrate AccuMaxio with the tools you already use." },
  { icon: Video, title: "Video Library", description: "Short walkthroughs for clients and team members." },
  { icon: LifeBuoy, title: "Support Center", description: "Answers, troubleshooting, and best practices." },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white pt-16 md:pt-24 pb-12">
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 h-[280px] w-[280px] rounded-full bg-[var(--primary)] opacity-15 blur-[100px]" />
        </div>
        <div className="container relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-3 py-1 text-sm font-medium text-[var(--primary)] mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[var(--primary)] mr-2 animate-pulse" />
            Coming soon
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
            Resources are{" "}
            <span className="gradient-text">on the way</span>
          </h1>
          <p className="mt-6 text-lg text-[var(--muted-foreground)] leading-relaxed">
            We're building guides, case studies, webinars, and documentation to help your firm
            get the most out of AccuMaxio. Here's what's coming.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group relative rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm hover:border-[var(--primary)]/25 hover:shadow-lg transition-all duration-300"
              >
                <span className="absolute top-4 right-4 inline-flex items-center rounded-full bg-[var(--gray-100)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--muted-foreground)]">
                  Coming soon
                </span>
                <div className="rounded-xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 w-12 h-12 flex items-center justify-center mb-4 text-[var(--primary)] group-hover:scale-110 transition-transform duration-300">
                  <cat.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{cat.title}</h3>
                <p className="mt-1.5 text-sm text-[var(--muted-foreground)] leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Be the first to know */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[var(--border)] bg-white p-8 md:p-10 shadow-sm text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 text-[var(--primary)]">
              <Mail className="h-7 w-7" aria-hidden />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
              Be the first to know
            </h2>
            <p className="mt-3 text-[var(--muted-foreground)] max-w-xl mx-auto">
              Want early access and a heads-up when our guides and documentation go live?
              Get in touch and we'll keep you posted.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 justify-center">
              <ButtonLink href="/contact" variant="primary" size="lg">Get Early Access</ButtonLink>
              <ButtonLink href="/features" variant="outline" size="lg">Explore Features</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
