"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRightLeft, Database } from "lucide-react";

/* The engagement, start to finish, with the CoPilot that helps at each stage.
 * Step 05 is a fork, not a sequence: prepare in your own tax software or in
 * AccuTax Prepare — either path lands in AccuTax Review. */

type Tool = { name: string; does: string };
type Stage = {
  step: string;
  stage: string;
  outcome: string;
  tools?: Tool[];
  fork?: true;
};

export const stages: Stage[] = [
  {
    step: "01",
    stage: "Bring the client on",
    outcome: "A complete, structured client file before anyone touches a return.",
    tools: [{ name: "InTake", does: "Guided intake forms that prefill from uploads" }],
  },
  {
    step: "02",
    stage: "Take in the documents",
    outcome: "Whatever they send becomes clean, structured data.",
    tools: [
      { name: "Recognize", does: "Identifies and tags 250+ forms" },
      { name: "Extract", does: "Pulls the fields out of PDFs and images" },
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
    outcome:
      "Prospects, clients and your team each get answers — without queuing for you.",
    tools: [
      { name: "QuikChek", does: "Prospects, on your website" },
      { name: "Assist", does: "Clients, in the portal" },
      { name: "Research", does: "Your team, with the full corpus" },
    ],
  },
  {
    step: "05",
    stage: "Prepare the return — your way",
    outcome:
      "Keep the tax software you prepare and file in, or prepare it here. Either path lands in the same review.",
    fork: true,
  },
  {
    step: "06",
    stage: "Advise and defend",
    outcome:
      "The advisory work you could never staff, and a defensible position if the IRS asks.",
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

function ToolChip({ t }: { t: Tool }) {
  return (
    <div className="flex items-baseline gap-2 rounded-xl border border-[var(--primary)]/15 bg-[var(--primary)]/[0.03] px-3 py-2">
      <span className="text-sm font-bold text-[var(--primary)] whitespace-nowrap">
        AccuTax {t.name}
      </span>
      <span className="text-xs text-[var(--muted-foreground)] text-pretty">
        {t.does}
      </span>
    </div>
  );
}

/** Two peer paths, converging on one review. */
function PrepareFork() {
  const paths = [
    {
      badge: "Keep your tool",
      title: "Your own tax prep software",
      body: "Prepare and file exactly where you do today — Drake, UltraTax, Lacerte, whatever your firm already runs.",
      feedIcon: ArrowRightLeft,
      feed: "AccuTax Bridge",
      feedNote: "sends the extracted data across",
      accent: false,
    },
    {
      badge: "Or let AccuMax do it",
      title: "AccuTax Prepare",
      body: "Drafts the federal return in minutes, with optional manual iteration wherever you want to step in.",
      feedIcon: Database,
      feed: "the client record",
      feedNote: "read directly — nothing to transfer",
      accent: true,
    },
  ];

  return (
    <div className="mt-4">
      <div className="grid sm:grid-cols-2 gap-3">
        {paths.map((p) => (
          <div
            key={p.title}
            className={`flex flex-col rounded-xl border-2 p-4 ${
              p.accent
                ? "border-[var(--primary)] bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5"
                : "border-[var(--border)] bg-white"
            }`}
          >
            <span
              className={`self-start rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ${
                p.accent
                  ? "bg-[var(--primary)] text-white"
                  : "bg-[var(--gray-100)] text-[var(--muted-foreground)]"
              }`}
            >
              {p.badge}
            </span>
            <p className="mt-2.5 text-base font-bold text-[var(--foreground)] text-pretty">
              {p.title}
            </p>
            <p className="mt-1.5 flex-1 text-sm text-[var(--muted-foreground)] leading-relaxed text-pretty">
              {p.body}
            </p>
            <div className="mt-3 flex items-start gap-2 border-t border-[var(--border)] pt-3">
              <p.feedIcon
                className="h-4 w-4 shrink-0 mt-0.5 text-[var(--primary)]"
                aria-hidden
              />
              <p className="text-xs text-[var(--muted-foreground)] text-pretty">
                Fed by{" "}
                <span className="font-bold text-[var(--foreground)]">{p.feed}</span> —{" "}
                {p.feedNote}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* both paths converge */}
      <div className="grid sm:grid-cols-2" aria-hidden>
        <div className="flex justify-center py-2 text-[var(--primary)]">
          <ArrowDown className="h-5 w-5" />
        </div>
        <div className="hidden sm:flex justify-center py-2 text-[var(--primary)]">
          <ArrowDown className="h-5 w-5" />
        </div>
      </div>

      <div className="rounded-xl border-2 border-[var(--primary)]/30 bg-white px-4 py-3 text-center">
        <p className="text-sm font-bold text-[var(--primary)]">
          Either way → AccuTax Review
        </p>
        <p className="mt-0.5 text-xs text-[var(--muted-foreground)] text-pretty">
          Flags omissions, inconsistencies, inaccuracies and audit risk before it
          reaches your desk.
        </p>
      </div>
    </div>
  );
}

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
            <span className="block">
              This is the work a firm actually does, in the order it happens —
            </span>
            <span className="block">
              and what picks up the load at each step.
            </span>
          </p>
        </div>

        <ol className="relative">
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
              <span className="hidden sm:flex absolute left-0 top-1 items-center justify-center w-11 h-11 rounded-full border-2 border-[var(--primary)]/25 bg-white text-sm font-extrabold text-[var(--primary)] shadow-sm">
                {s.step}
              </span>

              <div
                className={`rounded-2xl border bg-white p-6 shadow-sm ${
                  s.fork
                    ? "border-[var(--primary)]/30 shadow-md"
                    : "border-[var(--border)]"
                }`}
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="sm:hidden text-xs font-extrabold text-[var(--primary)]">
                    {s.step}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--foreground)] text-balance">
                    {s.stage}
                  </h3>
                  {s.fork && (
                    <span className="rounded-full bg-[var(--primary)]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[var(--primary)]">
                      Two ways
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-[var(--muted-foreground)] leading-relaxed text-pretty">
                  {s.outcome}
                </p>

                {s.fork ? (
                  <PrepareFork />
                ) : (
                  <div className="mt-4 grid sm:grid-cols-2 gap-2">
                    {s.tools?.map((t) => (
                      <ToolChip key={t.name} t={t} />
                    ))}
                  </div>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
