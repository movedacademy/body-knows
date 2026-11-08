export const LEAD_SEND_ERROR =
  "We couldn’t send your message right now. Please try again.";

export const FORM_SOURCES = {
  apply: "apply_form",
  waitlist: "waitlist_form",
  /** A question from the Italy page. Not a ticket sale or a completed booking. */
  italyInquiry: "italy_inquiry",
} as const;

export type FormSource = (typeof FORM_SOURCES)[keyof typeof FORM_SOURCES];
