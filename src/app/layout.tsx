import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/scroll-progress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AccuMax | CPA Practice Management Reinvented with AI",
  description:
    "More throughput, higher ARPU, lower cost to serve. A workforce of AI agents—AccuTax Research, 1040 Preparer, Review, Plan and Defense—inside a complete practice operating system.",
  openGraph: {
    title: "AccuMax | CPA Practice Management Reinvented with AI",
    description:
      "More throughput, higher ARPU, lower cost to serve—a >30% gross margin improvement, from one AI engine over one client record.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans antialiased">
        <ScrollProgress />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--primary)] focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
