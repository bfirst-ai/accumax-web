import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Resources | AccuMaxio",
  description: "Blog, case studies, guides, and webinars.",
};

export default function ResourcesPage() {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <Link href="/" className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline mb-8">
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--gray-900)]">
        Resources
      </h1>
      <p className="mt-4 text-lg text-[var(--muted-foreground)] max-w-2xl">
        Resource categories (Blog, Case Studies, Guides, Webinars), featured content, and search will be built here.
      </p>
      <Link href="/" className="mt-8 inline-block">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </div>
  );
}
