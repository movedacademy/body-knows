export { FORM_SOURCES, LEAD_SEND_ERROR, type FormSource } from "@/lib/lead-constants";

export type LeadPayload = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
  form_source: string;
  page_url: string;
};

export const DEFAULT_GHL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/zoWuu8eRHZNMHlduLFZp/webhook-trigger/28e22c0d-9642-4dfc-b98d-0905a981a756";

const WEBHOOK_TIMEOUT_MS = 10_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MESSAGE_SECTIONS: Array<{ key: string; label: string }> = [
  { key: "city", label: "City" },
  { key: "country", label: "Country" },
  { key: "interest", label: "Why interested" },
  { key: "currentlyExperiencing", label: "Currently experiencing" },
  { key: "explore", label: "Would like to explore" },
  { key: "experienceDifferently", label: "Understand or experience differently" },
  { key: "priorExperiences", label: "Prior experiences" },
  { key: "additionalContext", label: "Additional context" },
];

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value);
}

function splitName(fullName: string): { first_name: string; last_name: string } {
  const parts = fullName.split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return { first_name: "", last_name: "" };
  }

  if (parts.length === 1) {
    return { first_name: parts[0], last_name: "" };
  }

  return {
    first_name: parts[0],
    last_name: parts.slice(1).join(" "),
  };
}

function composeMessage(input: Record<string, unknown>): string {
  const direct = asTrimmedString(input.message);
  if (direct) {
    return direct;
  }

  return MESSAGE_SECTIONS.flatMap(({ key, label }) => {
    const value = asTrimmedString(input[key]);
    return value ? [`${label}: ${value}`] : [];
  }).join("\n\n");
}

export function normalizeLead(
  input: Record<string, unknown>,
): { ok: true; data: LeadPayload } | { ok: false; error: string } {
  const fullName = asTrimmedString(input.fullName);
  const split = splitName(fullName);
  const first_name = asTrimmedString(input.first_name) || split.first_name;
  const last_name = asTrimmedString(input.last_name) || split.last_name;
  const email = asTrimmedString(input.email);
  const phone = asTrimmedString(input.phone);
  const page_url =
    asTrimmedString(input.page_url) || asTrimmedString(input.pageUrl);
  const form_source = asTrimmedString(input.form_source);
  const message = composeMessage(input);

  if (!email && !phone) {
    return {
      ok: false,
      error: "Please provide an email address or phone number.",
    };
  }

  if (email && !isEmail(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  return {
    ok: true,
    data: {
      first_name,
      last_name,
      email,
      phone,
      message,
      form_source,
      page_url,
    },
  };
}

export async function forwardLeadToGhl(payload: LeadPayload): Promise<void> {
  const webhookUrl =
    process.env.GHL_WEBHOOK_URL?.trim() || DEFAULT_GHL_WEBHOOK_URL;

  try {
    new URL(webhookUrl);
  } catch {
    console.error("[body-knows] GHL webhook is not configured");
    throw new Error("missing-webhook");
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
  });

  if (!response.ok) {
    console.error(`[body-knows] GHL webhook rejected lead (${response.status})`);
    throw new Error("webhook-failed");
  }
}
