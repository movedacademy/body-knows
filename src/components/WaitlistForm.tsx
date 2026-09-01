"use client";

import { apply } from "@/content/apply";
import { useState, type FormEvent } from "react";

export function WaitlistForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
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
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, website: honeypot }),
      });
      const result = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "Unable to join the waitlist.");
      }

      setStatus("success");
    } catch (caught) {
      setStatus("error");
      setError(
        caught instanceof Error ? caught.message : "Unable to join the waitlist.",
      );
    }
  }

  if (status === "success") {
    return (
      <div>
        <h3 className="font-heading text-3xl">{apply.waitlist.confirmation.title}</h3>
        <p className="mt-4 max-w-lg text-olive/80">
          {apply.waitlist.confirmation.body}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-8" noValidate>
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
        <p role="alert" className="text-sm text-terra">
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
