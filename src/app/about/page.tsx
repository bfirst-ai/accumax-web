import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Target,
  TrendingUp,
  Sparkles,
  Heart,
  Layers,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About | AccuMaxio",
  description:
    "Our mission: leverage AI to empower accounting professionals with tools that enhance client relationships, streamline operations, and drive growth.",
};

const goals = [
  {
    icon: TrendingUp,
    title: "Scale",
    description:
      "Scale your company to 10X—clients, revenues, and profitability—non-linearly.",
  },
  {
    icon: Sparkles,
    title: "Leverage",
    description:
      "Leverage AI to reinvent marketing, operations, and customer service.",
  },
  {
    icon: Heart,
    title: "Increase",
    description:
      "Increase client satisfaction and loyalty: longer tenure, higher value per client.",
  },
  {
    icon: Layers,
    title: "Create",
    description:
      "Create new services and delivery methods: more self-service, more services.",
  },
  {
    icon: Zap,
    title: "Kindle",
    description:
      "Kindle operational transformation with compliance: increase efficiency, lower costs.",
  },
];

export default function AboutPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <div className="flex items-start gap-4 mb-12">
        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 flex items-center justify-center text-[var(--primary)]">
          <Target className="h-7 w-7" aria-hidden />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            Our Mission
          </h1>
          <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
            Leverage state-of-the-art Artificial Intelligence to empower
            accounting professionals with cutting-edge tools that enhance
            client relationships, streamline operations, and drive sustainable
            growth. The software increases the efficiency and effectiveness of
            delivering unparalleled value and insightful financial guidance.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[var(--foreground)] mt-16 mb-6">
        Strategic Goals
      </h2>
      <p className="text-[var(--muted-foreground)] mb-10">
        AccuMaxio is built to help firms achieve these outcomes:
      </p>

      <ul className="space-y-6">
        {goals.map((goal) => (
          <li
            key={goal.title}
            className="flex items-start gap-4 p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--primary)]/20 transition-colors"
          >
            <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 flex items-center justify-center text-[var(--primary)]">
              <goal.icon className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">
                {goal.title}
              </h3>
              <p className="mt-1 text-[var(--muted-foreground)]">
                {goal.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-16 pt-12 border-t border-[var(--border)]">
        <p className="text-[var(--muted-foreground)]">
          AccuMaxio is designed for modern accounting and professional services
          firms. We combine an online-first platform, role-based access (RBAC),
          and AI-augmented workflows so you can scale, stay compliant, and
          deliver more value to clients.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link href="/">
          <Button variant="primary">Back to Home</Button>
        </Link>
        <Link href="/features">
          <Button variant="outline">Explore Features</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline">Contact Us</Button>
        </Link>
      </div>
    </div>
  );
}
