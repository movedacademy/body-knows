import { about } from "@/content/about";
import { apply } from "@/content/apply";
import { experience } from "@/content/experience";
import { faq } from "@/content/faq";
import { home } from "@/content/home";
import { media } from "@/content/media";
import { retreats } from "@/content/retreats";
import { site } from "@/content/site";
import type { Retreat } from "@/types/content";

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

export function getNextImmersion(): Retreat | null {
  return (
    retreats.find((retreat) => retreat.status === "upcoming") ??
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
