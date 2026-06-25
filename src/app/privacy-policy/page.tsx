import { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | AccuMaxio",
  description:
    "How AccuMax by BusinessFirst LLC collects, uses, and protects your information, including connected email (Gmail and Outlook) data.",
};

const EFFECTIVE_DATE = "January 1, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 h-[280px] w-[280px] rounded-full bg-[var(--accent)] opacity-15 blur-[100px]" />
        </div>
        <div className="container relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-3 py-1 text-sm font-medium text-[var(--primary)] mb-6">
            <ShieldCheck className="h-3.5 w-3.5 mr-2" aria-hidden />
            Privacy Policy
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl leading-tight">
            Your data, <span className="gradient-text">protected</span>
          </h1>
          <p className="mt-6 text-lg text-[var(--muted-foreground)] leading-relaxed">
            This Privacy Policy describes how BusinessFirst LLC collects, uses,
            and safeguards your information when you use AccuMax and its connected
            services.
          </p>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">
            Effective Date: {EFFECTIVE_DATE}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose-policy space-y-12 text-[var(--muted-foreground)] leading-relaxed">
            {/* 1. Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-3">
                1. Introduction
              </h2>
              <p>
                This Privacy Policy describes how BusinessFirst LLC
                (&quot;BusinessFirst,&quot; &quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;) collects, uses, shares, and protects information
                about you when you use AccuMax practice management services (the
                &quot;Services&quot;), including through our websites at
                accumax.io, accumax.ai, bfirst.ai, and businessfirst.ai, and our
                web, browser, and desktop applications.
              </p>
              <p className="mt-3">
                By accessing or using the Services, you agree to this Privacy
                Policy. If you do not agree, you must not use the Services.
              </p>
            </div>

            {/* 2. Email Integration — the section Google reviewers look for */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-3">
                2. Connected Email (Gmail &amp; Outlook)
              </h2>

              <p>
                AccuMax lets you connect a personal mailbox (Google Gmail or
                Microsoft Outlook) so you can read, organize, and reply to your
                work email inside the platform. This integration is optional and
                is only enabled when you explicitly connect an account and grant
                consent through the provider&apos;s secure OAuth flow.
              </p>

              <h3 className="text-lg font-semibold text-[var(--foreground)] mt-6 mb-2">
                What we access
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Email addresses (sender, recipients, cc and bcc)</li>
                <li>Message subjects, bodies, and attachments</li>
                <li>Message dates, labels, folders, and read/flag status</li>
                <li>Your basic mailbox profile (name and email address)</li>
              </ul>

              <h3 className="text-lg font-semibold text-[var(--foreground)] mt-6 mb-2">
                How we use email data
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Display your messages in your AccuMax inbox</li>
                <li>Synchronize new and changed messages periodically</li>
                <li>Let you read, reply to, forward, and send messages</li>
                <li>Let you search, filter, flag, and link messages to client accounts</li>
              </ul>

              <h3 className="text-lg font-semibold text-[var(--foreground)] mt-6 mb-2">
                How email data is protected
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>OAuth tokens are encrypted at rest using AES-256-GCM</li>
                <li>All data is transmitted over HTTPS (encrypted in transit)</li>
                <li>Your mailbox is private to you — other users and admins cannot read it</li>
                <li>Email data is isolated per tenant and never shared across firms</li>
                <li>We never sell your email data or use it to train public AI models</li>
              </ul>

              <h3 className="text-lg font-semibold text-[var(--foreground)] mt-6 mb-2">
                Limited Use disclosure
              </h3>
              <p>
                AccuMax&apos;s use and transfer of information received from
                Google APIs adheres to the{" "}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] underline"
                >
                  Google API Services User Data Policy
                </a>
                , including its Limited Use requirements. We do not use Gmail data
                for advertising, and we only access the data needed to provide the
                features described above.
              </p>

              <h3 className="text-lg font-semibold text-[var(--foreground)] mt-6 mb-2">
                Revoking access
              </h3>
              <p>You can disconnect your mailbox at any time:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Inside AccuMax, open the Email screen and click Disconnect, or</li>
                <li>
                  Gmail:{" "}
                  <a
                    href="https://myaccount.google.com/permissions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--primary)] underline"
                  >
                    myaccount.google.com/permissions
                  </a>
                </li>
                <li>
                  Outlook:{" "}
                  <a
                    href="https://account.microsoft.com/privacy/app-access"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--primary)] underline"
                  >
                    account.microsoft.com/privacy/app-access
                  </a>
                </li>
              </ul>
              <p className="mt-3">
                When you disconnect, synchronization stops immediately and we
                delete stored messages and tokens for that mailbox within 30 days.
              </p>
            </div>

            {/* 3. Other data we collect */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-3">
                3. Other Information We Collect
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Account information</strong> — name, email, firm name,
                  phone, role, and profile details
                </li>
                <li>
                  <strong>Client and task data</strong> — documents, messages,
                  notes, and workflow information you create in the platform
                </li>
                <li>
                  <strong>Payment information</strong> — processed by third-party
                  processors; we do not store full card details
                </li>
                <li>
                  <strong>Usage and device data</strong> — IP address, browser,
                  device identifiers, and pages visited
                </li>
              </ul>
            </div>

            {/* 4. Security */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-3">
                4. Data Security
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Encryption at rest (AES-256-GCM) and in transit (HTTPS)</li>
                <li>Multi-factor authentication available on all accounts</li>
                <li>Role-based access controls and audit logging</li>
                <li>CSRF protection and account lockout against brute-force attacks</li>
                <li>Passwords hashed using industry-standard algorithms</li>
              </ul>
            </div>

            {/* 5. Retention */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-3">
                5. Data Retention
              </h2>
              <p>
                We retain your data while your account is active. When you stop
                being a customer, we provide a 30-day window to export your data,
                after which it is deleted from the platform. Connected mailbox
                data is deleted within 30 days of disconnecting that mailbox.
              </p>
            </div>

            {/* 6. Your rights */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-3">
                6. Your Rights and Choices
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Disconnect a connected mailbox at any time</li>
                <li>Opt out of non-essential communications</li>
              </ul>
            </div>

            {/* 7. Contact */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-3">
                7. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or wish to
                exercise your privacy rights, contact us at:
              </p>
              <p className="mt-3">
                <strong>BusinessFirst LLC</strong>
                <br />
                AccuMax Legal Department
                <br />
                14846 NE 17th PL, Bellevue, WA 98007
                <br />
                Email:{" "}
                <a
                  href="mailto:accumaxsupport@bfirst.ai"
                  className="text-[var(--primary)] underline"
                >
                  accumaxsupport@bfirst.ai
                </a>
              </p>
            </div>

            <p className="text-sm pt-6 border-t border-[var(--border)]">
              Effective Date: {EFFECTIVE_DATE}
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
