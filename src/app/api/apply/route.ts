import { forwardForm, validateApplication } from "@/lib/forms";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>;

  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return Response.json({ ok: true });
  }

  const result = validateApplication(body);
  if (!result.ok) {
    return Response.json({ ok: false, error: result.error }, { status: 400 });
  }

  try {
    await forwardForm("application", result.data);
    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Unable to submit application right now." },
      { status: 502 },
    );
  }
}
