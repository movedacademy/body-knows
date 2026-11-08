"use client";

import { italy } from "@/content/italy";
import { FORM_SOURCES, LEAD_SEND_ERROR, submitLead } from "@/lib/submit-lead";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";

const copy = italy.questions.inquiry;

/**
 * Questions from the Italy page. This is not a ticket purchase and does not
 * record a booking. Completed payments happen only in Stripe checkout.
 */
export function ItalyInquiryForm() {
  const baseId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [question, setQuestion] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");
  const [invalid, setInvalid] = useState<string[]>([]);
  const errorRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (error) {
      errorRef.current?.focus();
    }
  }, [error]);

  function fieldId(name: string) {
    return `${baseId}-${name}`;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const missing: string[] = [];
    if (!name.trim()) missing.push("name");
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      missing.push("email");
    }
    if (!question.trim()) missing.push("question");
    if (!consent) missing.push("consent");

    if (missing.length > 0) {
      setInvalid(missing);
      setStatus("error");
      setError(
        missing.includes("email") && email.trim()
          ? "Please enter a valid email address."
          : missing.includes("consent") && missing.length === 1
            ? "Please agree to be contacted about your questions."
            : "Please complete the required fields.",
      );
      const first = missing[0];
      document.getElementById(fieldId(first))?.focus();
      return;
    }

    setInvalid([]);
    setError("");
    setStatus("submitting");

    try {
      await submitLead({
        fullName: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: question.trim(),
        consent: true,
        website: honeypot,
        form_source: FORM_SOURCES.italyInquiry,
      });
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setQuestion("");
      setConsent(false);
    } catch (caught) {
      setStatus("error");
      setError(caught instanceof Error ? caught.message : LEAD_SEND_ERROR);
    }
  }

  if (status === "success") {
    return (
      <div className="bg-chalk px-6 py-12 text-olive sm:px-10" aria-live="polite">
        <h3 className="max-w-xl font-heading text-4xl leading-tight">
          {copy.confirmation}
        </h3>
      </div>
    );
  }

  const errorId = fieldId("error");
  const inputClass =
    "w-full border-0 border-b border-olive/25 bg-transparent py-3 text-base text-olive placeholder:text-olive/35 focus:border-olive focus:outline-none";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-busy={status === "submitting"}
      className="space-y-8 bg-chalk px-6 py-10 text-olive sm:px-10"
    >
      <p className="sr-only" aria-live="polite">
        {status === "submitting" ? "Sending your message." : ""}
      </p>
      <p className="sr-only">
        Do not fill the following field.
        <input
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
          name="website"
        />
      </p>

      <div className="grid gap-8 sm:grid-cols-2">
        <label htmlFor={fieldId("name")} className="block">
          <span className="eyebrow text-olive/70">{copy.nameLabel}</span>
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            aria-invalid={invalid.includes("name") || undefined}
            aria-describedby={invalid.includes("name") ? errorId : undefined}
            onChange={(event) => setName(event.target.value)}
            className={inputClass}
          />
        </label>
        <label htmlFor={fieldId("email")} className="block">
          <span className="eyebrow text-olive/70">{copy.emailLabel}</span>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={email}
            aria-invalid={invalid.includes("email") || undefined}
            aria-describedby={invalid.includes("email") ? errorId : undefined}
            onChange={(event) => setEmail(event.target.value)}
            className={inputClass}
          />
        </label>
        <label htmlFor={fieldId("phone")} className="block sm:col-span-2">
          <span className="eyebrow text-olive/70">{copy.phoneLabel}</span>
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className={inputClass}
          />
        </label>
        <label htmlFor={fieldId("question")} className="block sm:col-span-2">
          <span className="eyebrow text-olive/70">{copy.questionLabel}</span>
          <textarea
            id={fieldId("question")}
            name="question"
            required
            rows={5}
            value={question}
            aria-invalid={invalid.includes("question") || undefined}
            aria-describedby={invalid.includes("question") ? errorId : undefined}
            onChange={(event) => setQuestion(event.target.value)}
            className={inputClass}
          />
        </label>
      </div>

      <label className="flex items-start gap-4 text-sm leading-relaxed text-olive/85 sm:text-base">
        <input
          id={fieldId("consent")}
          name="consent"
          type="checkbox"
          checked={consent}
          required
          aria-invalid={invalid.includes("consent") || undefined}
          aria-describedby={invalid.includes("consent") ? errorId : undefined}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 h-4 w-4 accent-olive"
        />
        <span>{copy.consent}</span>
      </label>

      {error ? (
        <p
          id={errorId}
          ref={errorRef}
          role="alert"
          tabIndex={-1}
          className="text-sm text-terra"
        >
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-11 items-center justify-center bg-olive px-8 py-4 text-[11px] tracking-[0.22em] text-chalk uppercase transition-colors hover:bg-olive/90 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : copy.submit}
      </button>
    </form>
  );
}
