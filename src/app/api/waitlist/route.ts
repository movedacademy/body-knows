import { forwardForm, validateWaitlist } from "@/lib/forms";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>;

  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return Response.json({ ok: true });
  }

  const result = validateWaitlist(body);
  if (!result.ok) {
    return Response.json({ ok: false, error: result.error }, { status: 400 });
  }

  try {
    await forwardForm("waitlist", result.data);
    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Unable to join the waitlist right now." },
      { status: 502 },
    );
  }
}
