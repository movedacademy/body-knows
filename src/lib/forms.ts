export type ApplicationPayload = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  interest: string;
  currentlyExperiencing: string;
  explore: string;
  experienceDifferently: string;
  priorExperiences: string;
  additionalContext: string;
  consent: boolean;
};

export type WaitlistPayload = {
  fullName: string;
  email: string;
};

type FormKind = "application" | "waitlist";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validateApplication(
  input: Record<string, unknown>,
): { ok: true; data: ApplicationPayload } | { ok: false; error: string } {
  const fields: Array<keyof ApplicationPayload> = [
    "fullName",
    "email",
    "phone",
    "city",
    "country",
    "interest",
    "currentlyExperiencing",
    "explore",
    "experienceDifferently",
    "priorExperiences",
    "additionalContext",
  ];

  for (const field of fields) {
    if (!isNonEmptyString(input[field])) {
      return { ok: false, error: "Please complete every field." };
    }
  }

  if (!isEmail(String(input.email))) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (input.consent !== true) {
    return {
      ok: false,
      error:
        "Please confirm that you understand BODY KNOWS is not therapy or medical treatment.",
    };
  }

  return {
    ok: true,
    data: {
      fullName: String(input.fullName).trim(),
      email: String(input.email).trim(),
      phone: String(input.phone).trim(),
      city: String(input.city).trim(),
      country: String(input.country).trim(),
      interest: String(input.interest).trim(),
      currentlyExperiencing: String(input.currentlyExperiencing).trim(),
      explore: String(input.explore).trim(),
      experienceDifferently: String(input.experienceDifferently).trim(),
      priorExperiences: String(input.priorExperiences).trim(),
      additionalContext: String(input.additionalContext).trim(),
      consent: true,
    },
  };
}

export function validateWaitlist(
  input: Record<string, unknown>,
): { ok: true; data: WaitlistPayload } | { ok: false; error: string } {
  if (!isNonEmptyString(input.fullName) || !isNonEmptyString(input.email)) {
    return { ok: false, error: "Please enter your name and email." };
  }

  if (!isEmail(String(input.email))) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  return {
    ok: true,
    data: {
      fullName: String(input.fullName).trim(),
      email: String(input.email).trim(),
    },
  };
}

async function postJson(url: string, body: unknown) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Form webhook failed with ${response.status}`);
  }
}

function toHubSpotFields(payload: Record<string, unknown>) {
  return Object.entries(payload)
    .filter(([, value]) => value !== undefined)
    .map(([name, value]) => ({
      name,
      value: typeof value === "boolean" ? String(value) : String(value),
    }));
}

export async function forwardForm(kind: FormKind, payload: object) {
  const webhookUrl = process.env.FORM_WEBHOOK_URL;
  const provider = process.env.FORM_PROVIDER ?? "custom";
  const hubspotPortalId = process.env.HUBSPOT_PORTAL_ID;
  const hubspotFormId =
    kind === "application"
      ? process.env.HUBSPOT_APPLICATION_FORM_ID
      : process.env.HUBSPOT_WAITLIST_FORM_ID;

  const envelope = {
    kind,
    submittedAt: new Date().toISOString(),
    source: "body-knows-website",
    ...payload,
  };

  if (provider === "hubspot" && hubspotPortalId && hubspotFormId) {
    await postJson(
      `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormId}`,
      {
        fields: toHubSpotFields(payload as Record<string, unknown>),
        context: {
          pageUri: process.env.NEXT_PUBLIC_SITE_URL,
          pageName: kind === "application" ? "Application" : "Waitlist",
        },
      },
    );
    return;
  }

  if (webhookUrl) {
    await postJson(webhookUrl, envelope);
    return;
  }

  console.info(`[body-knows] ${kind} received (no FORM_WEBHOOK_URL set)`, envelope);
}
