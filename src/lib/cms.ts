import { about } from "@/content/about";
import { apply } from "@/content/apply";
import { experience } from "@/content/experience";
import { faq } from "@/content/faq";
import { home } from "@/content/home";
import { media } from "@/content/media";
import { retreats } from "@/content/retreats";
import { site } from "@/content/site";
import type { FeaturedEvent, NavLink, Retreat } from "@/types/content";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

type CalendarDate = {
  year: number;
  month: number;
  day: number;
};

function parseISODate(value?: string): CalendarDate | null {
  if (!value) return null;
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (month < 1 || month > 12 || day < 1 || day > 31) return null;
  return { year, month, day };
}

function calendarToday(now: Date): CalendarDate {
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
  };
}

function isBefore(left: CalendarDate, right: CalendarDate) {
  if (left.year !== right.year) return left.year < right.year;
  if (left.month !== right.month) return left.month < right.month;
  return left.day < right.day;
}

function hasNotPassed(retreat: Retreat, now: Date) {
  const end = parseISODate(retreat.endDate);
  if (!end) return true;
  return !isBefore(end, calendarToday(now));
}

function monthName(month: number) {
  return MONTHS[month - 1] ?? "";
}

export function formatRetreatDateRange(
  startDate?: string,
  endDate?: string,
): string | null {
  const start = parseISODate(startDate);
  const end = parseISODate(endDate);
  if (start && end) {
    if (start.year === end.year && start.month === end.month) {
      if (start.day === end.day) {
        return `${monthName(start.month)} ${start.day}, ${start.year}`;
      }
      return `${monthName(start.month)} ${start.day}–${end.day}, ${start.year}`;
    }
    if (start.year === end.year) {
      return `${monthName(start.month)} ${start.day} – ${monthName(end.month)} ${end.day}, ${start.year}`;
    }
    return `${monthName(start.month)} ${start.day}, ${start.year} – ${monthName(end.month)} ${end.day}, ${end.year}`;
  }

  const only = start ?? end;
  if (!only) return null;
  return `${monthName(only.month)} ${only.day}, ${only.year}`;
}

function menuSpan(startDate?: string, endDate?: string, dateLabel?: string | null) {
  const start = parseISODate(startDate);
  const end = parseISODate(endDate);
  if (start && end && start.year === end.year && start.month === end.month) {
    return `${monthName(start.month)} ${start.day}–${end.day}`;
  }
  return dateLabel ?? "";
}

export function getFeaturedEvent(now = new Date()): FeaturedEvent | null {
  const retreat = retreats.find(
    (item) => item.status === "upcoming" && hasNotPassed(item, now),
  );
  if (!retreat?.location) return null;

  const dateLabel = formatRetreatDateRange(retreat.startDate, retreat.endDate);
  const start = parseISODate(retreat.startDate);
  if (!dateLabel || !start) return null;

  const [cityPart, countryPart] = retreat.location.split(",").map((part) => part.trim());
  const city = cityPart || retreat.location;
  const country = countryPart || city;
  const month = monthName(start.month);
  const year = String(start.year);
  const href = retreat.href ?? "/italy";
  const applyHref = retreat.applyHref ?? `${href}#apply`;
  const label = `${retreat.location} · ${dateLabel}`;
  const uppercaseDate = dateLabel.toUpperCase();

  return {
    retreat,
    name: retreat.name,
    href,
    applyHref,
    label,
    dateLabel,
    location: retreat.location,
    city,
    country,
    year,
    month,
    menuDetail: `${city} · ${menuSpan(retreat.startDate, retreat.endDate, dateLabel)}`,
    navLabel: `${country} ${year}`,
    applyLabel: `APPLY FOR ${country.toUpperCase()}`,
    seeLabel: `SEE THE ${country.toUpperCase()} IMMERSION`,
    waitlistLabel: `CAN’T MAKE ${month.toUpperCase()}? JOIN THE WAITLIST`,
    heroDetail: `Next immersion · ${label}`,
    announcement: {
      desktop: `${retreat.name.toUpperCase()} · ${city.toUpperCase()} · ${uppercaseDate} — APPLICATIONS OPEN →`,
      mobile: `${country.toUpperCase()} · ${uppercaseDate} · APPLY →`,
      ariaLabel: `${retreat.name}, ${city}, ${dateLabel}. Applications open. View the ${country} immersion.`,
    },
    headline: [`${city.toUpperCase()}, ${country.toUpperCase()}.`, `${uppercaseDate}.`],
    notice: {
      eyebrow: `Applying for ${country}?`,
      body: `The ${month} ${year} immersion in ${city} has its own application.`,
      link: `Go to the ${country} application →`,
    },
  };
}

export function linksForFeatured(links: NavLink[], event: FeaturedEvent | null): NavLink[] {
  const target = event?.href ?? "/italy";
  const rest = links.filter(
    (link) => link.href !== target && !link.href.startsWith(`${target}#`) && !link.href.startsWith(`${target}?`),
  );
  if (!event) return rest;
  return [{ label: event.navLabel, href: event.href }, ...rest];
}

const DESCRIPTION_LIMIT = 160;

export function withFeaturedDescription(base: string, event: FeaturedEvent | null) {
  if (!event) return base;
  const next = `${base} Next immersion: ${event.location}, ${event.dateLabel}.`;
  return next.length <= DESCRIPTION_LIMIT ? next : base;
}

export function getSite() {
  return site;
}

export function getHome() {
  return home;
}

export function getExperience() {
  return experience;
}

export function getAbout() {
  return about;
}

export function getFaq() {
  return faq;
}

export function getApply() {
  return apply;
}

export function getMedia() {
  return media;
}

export function getRetreats(): Retreat[] {
  return retreats;
}

export function getNextImmersion(now = new Date()): Retreat | null {
  return (
    retreats.find((retreat) => retreat.status === "upcoming" && hasNotPassed(retreat, now)) ??
    retreats.find((retreat) => retreat.status === "coming_soon") ??
    null
  );
}

export function hasConfirmedLogistics(retreat: Retreat | null): boolean {
  if (!retreat || retreat.status === "coming_soon") {
    return false;
  }

  return Boolean(
    retreat.startDate ||
      retreat.endDate ||
      retreat.location ||
      retreat.price ||
      retreat.capacity ||
      retreat.accommodation,
  );
}
