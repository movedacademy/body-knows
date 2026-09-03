import {
  FORM_SOURCES,
  LEAD_SEND_ERROR,
  type FormSource,
} from "@/lib/lead-constants";

export { FORM_SOURCES, LEAD_SEND_ERROR, type FormSource };

type SubmitLeadInput = Record<string, unknown> & {
  form_source: FormSource;
};

export async function submitLead(input: SubmitLeadInput): Promise<void> {
  const response = await fetch("/api/submit-lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...input,
      page_url:
        typeof input.page_url === "string" && input.page_url
          ? input.page_url
          : window.location.href,
    }),
  });

  let result: { success?: boolean; error?: string } = {};
  try {
    result = (await response.json()) as { success?: boolean; error?: string };
  } catch {
    throw new Error(LEAD_SEND_ERROR);
  }

  if (!response.ok || !result.success) {
    throw new Error(result.error ?? LEAD_SEND_ERROR);
  }
}
