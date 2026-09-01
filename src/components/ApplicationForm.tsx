"use client";

import { apply } from "@/content/apply";
import { cn } from "@/lib/cn";
import { useState, type ChangeEvent, type FormEvent } from "react";

const initialValues = Object.fromEntries(
  apply.fields.map((field) => [field.name, ""]),
) as Record<string, string>;

export function ApplicationForm() {
  const [values, setValues] = useState(initialValues);
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setStatus("submitting");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, consent, website: honeypot }),
      });
      const result = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "Unable to submit application.");
      }

      setStatus("success");
    } catch (caught) {
      setStatus("error");
      setError(
        caught instanceof Error
          ? caught.message
          : "Unable to submit application.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="border border-olive/20 bg-chalk px-6 py-12 sm:px-10">
        <p className="eyebrow text-sea">Received</p>
        <h2 className="mt-4 font-heading text-4xl">{apply.confirmation.title}</h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-olive/80">
          {apply.confirmation.body}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
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
          const shared = {
            id,
            name: field.name,
            required: field.required,
            autoComplete: field.autoComplete,
            value: values[field.name] ?? "",
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
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 h-4 w-4 accent-olive"
          required
        />
        <span>{apply.consent}</span>
      </label>

      {error ? (
        <p role="alert" className="text-sm text-terra">
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
