import { validateApplication } from "@/lib/forms";
import {
  FORM_SOURCES,
  LEAD_SEND_ERROR,
  forwardLeadToGhl,
  normalizeLead,
} from "@/lib/leads";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>;

  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return Response.json({ ok: true });
  }

  const result = validateApplication(body);
  if (!result.ok) {
    return Response.json({ ok: false, error: result.error }, { status: 400 });
  }

  const lead = normalizeLead({
    ...result.data,
    form_source: FORM_SOURCES.apply,
    page_url: body.page_url ?? body.pageUrl ?? "",
  });

  if (!lead.ok) {
    return Response.json({ ok: false, error: lead.error }, { status: 400 });
  }

  try {
    await forwardLeadToGhl(lead.data);
    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: LEAD_SEND_ERROR },
      { status: 502 },
    );
  }
}
