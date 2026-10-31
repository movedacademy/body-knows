import type { Retreat } from "@/types/content";

/**
 * CMS-ready retreats collection.
 * Only include logistics that are confirmed. The site will not invent
 * dates, location, price, accommodation, itinerary, or capacity.
 *
 * Example of a confirmed upcoming immersion:
 *
 * {
 *   id: "immersion-001",
 *   name: "BODY KNOWS Immersion",
 *   status: "upcoming",
 *   startDate: "2026-10-12",
 *   endDate: "2026-10-16",
 *   location: "To be announced",
 * }
 */
export const retreats: Retreat[] = [
  {
    id: "italy-2027",
    name: "BODY KNOWS Italy",
    status: "upcoming",
    startDate: "2027-07-05",
    endDate: "2027-07-09",
    location: "Cossano, Italy",
    href: "/italy",
    applyHref: "/italy#apply",
  },
];
