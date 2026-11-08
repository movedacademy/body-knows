/**
 * Production Stripe Payment Links for BODY KNOWS Italy early-bird tickets.
 * These are customer checkout URLs (buy.stripe.com). Do not replace them with
 * dashboard links, product IDs, or test-mode Payment Links.
 *
 * The prices shown on the retreat page already include the 10% early-bird
 * discount. Do not apply another discount in the interface.
 */
export const italyCheckoutLinks = {
  oneParticipantPrivateRoom: "https://buy.stripe.com/8x2eVdctieY82kYcDY4Vy08",
  oneParticipantSharedRoom: "https://buy.stripe.com/28EfZh50QdU45xa0Vg4Vy09",
  twoParticipantsPrivateRoom: "https://buy.stripe.com/8x24gz9h67vG7FifQa4Vy0a",
} as const;

export type ItalyCheckoutKey = keyof typeof italyCheckoutLinks;

export const italyTicketSectionId = "tickets";

export function italyTicketHref(path = ""): string {
  return `${path}#${italyTicketSectionId}`;
}

const PLACEHOLDER_TOKEN =
  /^(placeholder|example|test|todo|changeme|xxx|your[-_]?link|payment[-_]?link)$/i;

/**
 * Accept only a live Stripe Payment Link. Dashboard URLs, product IDs,
 * empty values, placeholders, and test-mode links (`/test_…`) are rejected
 * so they cannot be used as a checkout destination.
 */
export function isProductionStripePaymentLink(value: string): boolean {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return false;
  }

  if (url.protocol !== "https:") return false;
  if (url.username || url.password || url.port) return false;
  if (url.hostname !== "buy.stripe.com") return false;

  const segments = url.pathname.split("/").filter(Boolean);
  if (segments.length !== 1) return false;

  const token = segments[0];
  if (token.startsWith("test_") || token === "test") return false;
  if (PLACEHOLDER_TOKEN.test(token)) return false;
  if (!/^[A-Za-z0-9]+$/.test(token)) return false;

  const query = url.search.toLowerCase();
  if (
    query.includes("placeholder") ||
    query.includes("test_") ||
    query.includes("dashboard")
  ) {
    return false;
  }

  return true;
}
