"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Work email is required").email("Enter a valid email"),
  company: z.string().min(1, "Firm name is required"),
  firmSize: z.string().min(1, "Select a firm size"),
  industry: z.string().min(1, "Select an industry"),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const firmSizes = ["1–5", "6–20", "21–50", "51–200", "200+"];
const industries = [
  "Accounting / CPA",
  "Tax & Advisory",
  "Bookkeeping",
  "Legal",
  "Financial Services",
  "Other professional services",
];

const fieldClass =
  "block text-sm font-medium text-[var(--foreground)] mb-1.5";
const selectClass =
  "flex h-11 w-full rounded-lg border border-[var(--input)] bg-transparent px-4 py-2 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit() {
    // Static marketing site: simulate submission. Wire to a real endpoint
    // (e.g. /api/lead or a form service) when a backend is available.
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-[var(--border)] bg-white p-8 md:p-10 shadow-sm text-center"
      >
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--success)]/10 text-[var(--success)]">
          <CheckCircle2 className="h-8 w-8" aria-hidden />
        </div>
        <h3 className="text-2xl font-bold text-[var(--foreground)]">Thanks — we&apos;ll be in touch!</h3>
        <p className="mt-3 text-[var(--muted-foreground)] max-w-md mx-auto">
          A member of our team will reach out within one business day to
          schedule your personalized 30-minute demo of AccuMax.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-[var(--border)] bg-white p-6 md:p-8 shadow-sm"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className={fieldClass}>First name</label>
          <Input id="firstName" {...register("firstName")} aria-invalid={!!errors.firstName} />
          {errors.firstName && <p className="mt-1 text-sm text-[var(--error)]">{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className={fieldClass}>Last name</label>
          <Input id="lastName" {...register("lastName")} aria-invalid={!!errors.lastName} />
          {errors.lastName && <p className="mt-1 text-sm text-[var(--error)]">{errors.lastName.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className={fieldClass}>Work email</label>
          <Input id="email" type="email" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email && <p className="mt-1 text-sm text-[var(--error)]">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={fieldClass}>Phone <span className="text-[var(--muted-foreground)] font-normal">(optional)</span></label>
          <Input id="phone" type="tel" {...register("phone")} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="company" className={fieldClass}>Firm name</label>
          <Input id="company" {...register("company")} aria-invalid={!!errors.company} />
          {errors.company && <p className="mt-1 text-sm text-[var(--error)]">{errors.company.message}</p>}
        </div>
        <div>
          <label htmlFor="firmSize" className={fieldClass}>Firm size</label>
          <select id="firmSize" defaultValue="" className={cn(selectClass)} {...register("firmSize")} aria-invalid={!!errors.firmSize}>
            <option value="" disabled>Select…</option>
            {firmSizes.map((s) => (
              <option key={s} value={s}>{s} people</option>
            ))}
          </select>
          {errors.firmSize && <p className="mt-1 text-sm text-[var(--error)]">{errors.firmSize.message}</p>}
        </div>
        <div>
          <label htmlFor="industry" className={fieldClass}>Industry</label>
          <select id="industry" defaultValue="" className={cn(selectClass)} {...register("industry")} aria-invalid={!!errors.industry}>
            <option value="" disabled>Select…</option>
            {industries.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.industry && <p className="mt-1 text-sm text-[var(--error)]">{errors.industry.message}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={fieldClass}>What would you like to see? <span className="text-[var(--muted-foreground)] font-normal">(optional)</span></label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            className="flex w-full rounded-lg border border-[var(--input)] bg-transparent px-4 py-3 text-base shadow-sm transition-colors placeholder:text-[var(--muted-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y"
            placeholder="Tell us about your firm, current tools, and goals…"
          />
        </div>
      </div>

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full justify-center mt-6">
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> Sending…
          </>
        ) : (
          "Book my demo"
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-[var(--muted-foreground)]">
        By submitting, you agree to be contacted about AccuMax. We never share your information.
      </p>
    </form>
  );
}
