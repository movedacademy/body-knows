"use client";

import { apply } from "@/content/apply";
import { cn } from "@/lib/cn";
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";

const initialValues = Object.fromEntries(
  apply.fields.map((field) => [field.name, ""]),
) as Record<string, string>;

const SEND_ERROR = "We couldn’t send your message right now. Please try again.";
const CONTACT_ERROR = "Please provide an email address or phone number.";

export function ApplicationForm() {
  const [values, setValues] = useState(initialValues);
  const [consent, setConsent] = useState(false);
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
    const missing = apply.fields
      .filter((field) => field.required && !(values[field.name] ?? "").trim())
      .map((field) => field.name);

    if (!consent) {
      missing.push("consent");
    }

    if (missing.length > 0) {
      setInvalidFields(missing);
      const first = missing[0];
      if (first === "consent") {
        document.getElementById("application-consent")?.focus();
      } else {
        document.getElementById(`application-${first}`)?.focus();
      }
      if (missing.includes("email") && missing.includes("phone")) {
        return CONTACT_ERROR;
      }
      return "Please complete every field.";
    }

    if (!values.email.trim() && !values.phone.trim()) {
      setInvalidFields(["email", "phone"]);
      document.getElementById("application-email")?.focus();
      return CONTACT_ERROR;
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
      // Submit through the internal API route so the GoHighLevel webhook URL stays server-side.
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          consent,
          website: honeypot,
          pageUrl: window.location.href,
        }),
      });

      let result: { success?: boolean; error?: string } = {};
      try {
        result = (await response.json()) as { success?: boolean; error?: string };
      } catch {
        throw new Error(SEND_ERROR);
      }

      if (!response.ok || !result.success) {
        throw new Error(result.error ?? SEND_ERROR);
      }

      setStatus("success");
      setValues(initialValues);
      setConsent(false);
    } catch (caught) {
      setStatus("error");
      setError(caught instanceof Error ? caught.message : SEND_ERROR);
    }
  }

  if (status === "success") {
    return (
      <div className="border border-olive/20 bg-chalk px-6 py-12 sm:px-10" aria-live="polite">
        <p className="eyebrow text-sea">Received</p>
        <h2 className="mt-4 font-heading text-4xl">{apply.confirmation.title}</h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-olive/80">
          {apply.confirmation.body}
        </p>
      </div>
    );
  }

  const contactInvalid =
    invalidFields.includes("email") || invalidFields.includes("phone");

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-8"
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

      <div className="grid gap-8 md:grid-cols-2">
        {apply.fields.map((field) => {
          const id = `application-${field.name}`;
          const fieldInvalid = invalidFields.includes(field.name);
          const describedBy = [
            fieldInvalid || (contactInvalid && (field.name === "email" || field.name === "phone"))
              ? "application-form-error"
              : null,
          ]
            .filter(Boolean)
            .join(" ") || undefined;
          const shared = {
            id,
            name: field.name,
            required: field.required,
            autoComplete: field.autoComplete,
            value: values[field.name] ?? "",
            "aria-invalid": fieldInvalid || undefined,
            "aria-describedby": describedBy,
            onChange: (
              event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) =>
              setValues((current) => ({
                ...current,
                [field.name]: event.target.value,
              })),
            className:
              "w-full border-0 border-b border-olive/25 bg-transparent py-3 text-olive placeholder:text-olive/35 focus:border-olive focus:outline-none",
          };

          return (
            <label
              key={field.name}
              htmlFor={id}
              className={cn(
                "block",
                field.type === "textarea" && "md:col-span-2",
              )}
            >
              <span className="eyebrow text-olive/70">{field.label}</span>
              {field.type === "textarea" ? (
                <textarea {...shared} rows={field.rows ?? 4} />
              ) : (
                <input {...shared} type={field.type} />
              )}
            </label>
          );
        })}
      </div>

      <label className="flex items-start gap-4 text-sm leading-relaxed text-olive/85 sm:text-base">
        <input
          id="application-consent"
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 h-4 w-4 accent-olive"
          required
          aria-invalid={invalidFields.includes("consent") || undefined}
          aria-describedby={invalidFields.includes("consent") ? "application-form-error" : undefined}
        />
        <span>{apply.consent}</span>
      </label>

      {error ? (
        <p
          id="application-form-error"
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
        className="bg-olive px-8 py-4 text-[11px] tracking-[0.28em] uppercase text-chalk transition-colors hover:bg-olive/90 disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : apply.submit}
      </button>
    </form>
  );
}
