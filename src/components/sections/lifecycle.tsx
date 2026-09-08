"use client";

import { motion } from "framer-motion";
/* The engagement, start to finish, with the CoPilot that helps at each stage.
 * Every one of the 14 CoPilots appears exactly once. */

export const stages = [
  {
    step: "01",
    stage: "Bring the client on",
    outcome: "A complete, structured client file before anyone touches a return.",
    tools: [{ name: "InTake", does: "Guided intake forms that prefill from uploads" }],
  },
  {
    step: "02",
    stage: "Take in the documents",
    outcome: "Whatever they send becomes clean data in your tax prep software.",
    tools: [
      { name: "Recognize", does: "Identifies and tags 250+ forms" },
      { name: "Extract", does: "Pulls the fields out of PDFs and images" },
      { name: "Bridge", does: "Moves the data into your TaxPrep tool" },
      { name: "Organize", does: "Consolidates chats, emails and uploads" },
    ],
  },
  {
    step: "03",
    stage: "Understand the engagement",
    outcome: "You know what this client needs before you start work.",
    tools: [{ name: "Profile", does: "Client snapshot and the forms required" }],
  },
  {
    step: "04",
    stage: "Answer the questions",
    outcome: "Prospects, clients and your team each get answers — without queuing for you.",
    tools: [
      { name: "QuikChek", does: "Prospects, on your website" },
      { name: "Assist", does: "Clients, in the portal" },
      { name: "Research", does: "Your team, with the full corpus" },
    ],
  },
  {
    step: "05",
    stage: "Do the return",
    outcome: "A prepared return with the gaps already flagged for your review.",
    tools: [
      { name: "Prepare", does: "Drafts the return from source documents" },
      { name: "Review", does: "Flags omissions, inconsistencies and audit risk" },
    ],
  },
  {
    step: "06",
    stage: "Advise and defend",
    outcome: "The advisory work you could never staff, and a defensible position if the IRS asks.",
    tools: [
      { name: "Plan", does: "Multi-year scenarios, cashflow and tax impact" },
      { name: "Defense", does: "Notice analysis, evidence and drafted responses" },
    ],
  },
  {
    step: "07",
    stage: "Communicate",
    outcome: "Every letter and message out the door, in your firm's voice.",
    tools: [
      { name: "Compose", does: "Client, team and IRS communications with e-signature" },
    ],
  },
];

export function Lifecycle() {
  return (
    <section
      id="lifecycle"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50/50"
      aria-labelledby="lifecycle-heading"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-4 py-1.5 text-sm font-medium text-[var(--primary)] mb-6">
            The engagement, end to end
          </span>
          <h2
            id="lifecycle-heading"
            className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl text-balance"
          >
            Seven stages. A CoPilot at every one.
          </h2>
          <p className="mt-5 text-lg text-[var(--muted-foreground)] leading-relaxed text-pretty">
            This is the work a firm actually does, in the order it happens — and
            what picks up the load at each step.
          </p>
        </div>

        <ol className="relative">
          {/* spine */}
          <div
            className="absolute left-[1.35rem] top-3 bottom-3 w-px bg-gradient-to-b from-[var(--primary)]/40 via-[var(--primary)]/20 to-transparent hidden sm:block"
            aria-hidden
          />

          {stages.map((s, i) => (
            <motion.li
              key={s.stage}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.06, duration: 0.4 }}
              className="relative sm:pl-16 pb-6 last:pb-0"
            >
              {/* step marker */}
              <span className="hidden sm:flex absolute left-0 top-1 items-center justify-center w-11 h-11 rounded-full border-2 border-[var(--primary)]/25 bg-white text-sm font-extrabold text-[var(--primary)] shadow-sm">
                {s.step}
              </span>

              <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="sm:hidden text-xs font-extrabold text-[var(--primary)]">
                    {s.step}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--foreground)] text-balance">
                    {s.stage}
                  </h3>
                </div>
                <p className="mt-1.5 text-[var(--muted-foreground)] leading-relaxed text-pretty">
                  {s.outcome}
                </p>

                <div className="mt-4 grid sm:grid-cols-2 gap-2">
                  {s.tools.map((t) => (
                    <div
                      key={t.name}
                      className="flex items-baseline gap-2 rounded-xl border border-[var(--primary)]/15 bg-[var(--primary)]/[0.03] px-3 py-2"
                    >
                      <span className="text-sm font-bold text-[var(--primary)] whitespace-nowrap">
                        AccuTax {t.name}
                      </span>
                      <span className="text-xs text-[var(--muted-foreground)] text-pretty">
                        {t.does}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
