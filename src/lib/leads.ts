export type LeadPayload = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  pageUrl: string;
  submittedAt: string;
};

export const LEAD_SEND_ERROR =
  "We couldn’t send your message right now. Please try again.";

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
  const email = asTrimmedString(input.email);
  const phone = asTrimmedString(input.phone);
  const pageUrl = asTrimmedString(input.pageUrl);
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
      fullName,
      email,
      phone,
      message,
      pageUrl,
      submittedAt: new Date().toISOString(),
    },
  };
}

export async function forwardLeadToGhl(payload: LeadPayload): Promise<void> {
  const webhookUrl = process.env.GHL_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    console.error("[body-knows] GHL webhook is not configured");
    throw new Error("missing-webhook");
  }

  try {
    new URL(webhookUrl);
  } catch {
    console.error("[body-knows] GHL webhook is not configured");
    throw new Error("missing-webhook");
  }

  // Forward the sanitized payload to GoHighLevel's inbound webhook.
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
