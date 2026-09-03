import { validateApplication } from "@/lib/forms";
import { FORM_SOURCES } from "@/lib/lead-constants";
import {
  LEAD_SEND_ERROR,
  forwardLeadToGhl,
  normalizeLead,
} from "@/lib/leads";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isApplicationPayload(input: Record<string, unknown>): boolean {
  return (
    "consent" in input ||
    "currentlyExperiencing" in input ||
    "additionalContext" in input
  );
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  if (!isRecord(body)) {
    return Response.json(
      { success: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return Response.json({ success: true });
  }

  if (isApplicationPayload(body)) {
    const application = validateApplication(body);
    if (!application.ok) {
      return Response.json(
        { success: false, error: application.error },
        { status: 400 },
      );
    }
  }

  if (typeof body.form_source !== "string" || !body.form_source.trim()) {
    body.form_source = isApplicationPayload(body)
      ? FORM_SOURCES.apply
      : FORM_SOURCES.waitlist;
  }

  const lead = normalizeLead(body);
  if (!lead.ok) {
    return Response.json(
      { success: false, error: lead.error },
      { status: 400 },
    );
  }

  try {
    await forwardLeadToGhl(lead.data);
    return Response.json({ success: true });
  } catch (error) {
    const timedOut =
      error instanceof Error &&
      (error.name === "TimeoutError" || error.name === "AbortError");

    console.error(
      timedOut
        ? "[body-knows] GHL webhook timed out"
        : "[body-knows] GHL webhook request failed",
    );

    return Response.json(
      { success: false, error: LEAD_SEND_ERROR },
      { status: error instanceof Error && error.message === "missing-webhook" ? 500 : 502 },
    );
  }
}
