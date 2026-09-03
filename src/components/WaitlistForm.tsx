"use client";

import { apply } from "@/content/apply";
import { FORM_SOURCES, LEAD_SEND_ERROR, submitLead } from "@/lib/submit-lead";
import { useEffect, useRef, useState, type FormEvent } from "react";

const CONTACT_ERROR = "Please provide an email address or phone number.";

export function WaitlistForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");
  const [invalidFields, setInvalidFields] = useState<string[]>([]);
  const errorRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (error) {
      errorRef.current?.focus();
    }
  }, [error]);

  function validateClient(): string | null {
    const missing: string[] = [];
    if (!fullName.trim()) missing.push("fullName");
    if (!email.trim()) missing.push("email");

    if (missing.length > 0) {
      setInvalidFields(missing);
      document.getElementById(`waitlist-${missing[0]}`)?.focus();
      if (missing.includes("email")) {
        return CONTACT_ERROR;
      }
      return "Please enter your name and email.";
    }

    setInvalidFields([]);
    return null;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationError = validateClient();
    if (validationError) {
      setStatus("error");
      setError(validationError);
      return;
    }

    setError("");
    setStatus("submitting");

    try {
      await submitLead({
        fullName,
        email,
        form_source: FORM_SOURCES.waitlist,
        website: honeypot,
      });

      setStatus("success");
      setFullName("");
      setEmail("");
    } catch (caught) {
      setStatus("error");
      setError(caught instanceof Error ? caught.message : LEAD_SEND_ERROR);
    }
  }

  if (status === "success") {
    return (
      <div aria-live="polite">
        <h3 className="font-heading text-3xl">{apply.waitlist.confirmation.title}</h3>
        <p className="mt-4 max-w-lg text-olive/80">
          {apply.waitlist.confirmation.body}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-xl space-y-8"
      noValidate
      aria-busy={status === "submitting"}
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
      {apply.waitlist.fields.map((field) => {
        const id = `waitlist-${field.name}`;
        const fieldInvalid = invalidFields.includes(field.name);
        return (
          <label key={field.name} htmlFor={id} className="block">
            <span className="eyebrow text-olive/70">{field.label}</span>
            <input
              id={id}
              name={field.name}
              type={field.type}
              required={field.required}
              autoComplete={field.autoComplete}
              value={field.name === "email" ? email : fullName}
              aria-invalid={fieldInvalid || undefined}
              aria-describedby={fieldInvalid ? "waitlist-form-error" : undefined}
              onChange={(event) =>
                field.name === "email"
                  ? setEmail(event.target.value)
                  : setFullName(event.target.value)
              }
              className="w-full border-0 border-b border-olive/25 bg-transparent py-3 text-olive focus:border-olive focus:outline-none"
            />
          </label>
        );
      })}
      {error ? (
        <p
          id="waitlist-form-error"
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
        className="border border-olive px-8 py-4 text-[11px] tracking-[0.28em] uppercase text-olive transition-colors hover:bg-olive hover:text-chalk disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : apply.waitlist.submit}
      </button>
    </form>
  );
}
