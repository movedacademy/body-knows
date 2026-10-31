"use client";

import { EventAnnouncement } from "@/components/EventAnnouncement";
import { SectionLabel } from "@/components/SectionLabel";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import type { FeaturedEvent, NavLink } from "@/types/content";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

function HeaderCta({
  href,
  className,
  children,
  onClick,
}: {
  href: string;
  className: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export function Navigation({
  featured,
  links,
}: {
  featured: FeaturedEvent | null;
  links: NavLink[];
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const isItaly = pathname === "/italy";
  const showAnnouncement = Boolean(featured) && !isItaly;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !isHome || open;
  const { secondaryCta } = site.navigation;
  const headerCta = isItaly
    ? { label: site.navigation.primaryCta.label, href: "#apply" }
    : featured
      ? { label: featured.applyLabel, href: featured.applyHref }
      : site.navigation.restingCta;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        open && "flex h-[100svh] flex-col",
      )}
    >
      {showAnnouncement && featured ? (
        <EventAnnouncement
          href={featured.href}
          desktop={featured.announcement.desktop}
          mobile={featured.announcement.mobile}
          label={featured.announcement.ariaLabel}
        />
      ) : (
        <div className="shrink-0 pt-[env(safe-area-inset-top,0px)]" />
      )}

      <div
        className={cn(
          "shrink-0 transition-colors duration-500",
          solid
            ? "bg-chalk/95 text-olive shadow-[0_1px_0_rgba(40,53,45,0.08)] backdrop-blur-md"
            : "bg-transparent text-chalk",
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-[1440px] items-center justify-between gap-2 px-3 py-3 min-[380px]:gap-3 min-[380px]:px-4 min-[380px]:py-4 sm:px-8 lg:gap-4 lg:px-8 xl:px-12"
        >
          <Link
            href="/"
            className="eyebrow shrink-0 text-current max-[379px]:!text-[10px] max-[379px]:!tracking-[0.16em]"
          >
            {site.name}
          </Link>

          <ul className="hidden items-center gap-x-3 lg:flex xl:gap-x-5 2xl:gap-x-8">
            {links.map((link) => {
              const active =
                link.href === pathname ||
                (link.href !== "/" &&
                  !link.href.includes("#") &&
                  pathname.startsWith(link.href));

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "text-[11px] tracking-[0.12em] whitespace-nowrap uppercase transition-opacity hover:opacity-100 xl:text-[12px] xl:tracking-[0.14em]",
                      active ? "opacity-100" : "opacity-70",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-4 lg:flex xl:gap-5">
            <Link
              href={secondaryCta.href}
              className="hidden text-[11px] tracking-[0.14em] whitespace-nowrap uppercase opacity-80 transition-opacity hover:opacity-100 xl:inline xl:tracking-[0.18em]"
            >
              {secondaryCta.label}
            </Link>
            <HeaderCta
              href={headerCta.href}
              className={cn(
                "shrink-0 px-3 py-2.5 text-[10px] tracking-[0.14em] whitespace-nowrap uppercase transition-colors xl:px-5 xl:text-[11px] xl:tracking-[0.2em]",
                solid
                  ? "bg-olive text-chalk hover:bg-olive/90"
                  : "bg-chalk text-olive hover:bg-stone",
              )}
            >
              {headerCta.label}
            </HeaderCta>
          </div>

          <div className="flex items-center gap-1.5 min-[380px]:gap-3 lg:hidden">
            <HeaderCta
              href={headerCta.href}
              className={cn(
                "px-2 py-2 text-[8px] tracking-[0.08em] whitespace-nowrap uppercase min-[360px]:text-[9px] min-[360px]:tracking-[0.1em] min-[400px]:px-3 min-[400px]:text-[10px] min-[400px]:tracking-[0.14em]",
                solid ? "bg-olive text-chalk" : "bg-chalk text-olive",
              )}
            >
              {headerCta.label}
            </HeaderCta>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span className="relative block h-3.5 w-5">
                <span
                  className={cn(
                    "absolute left-0 h-px w-full bg-current transition-transform duration-300",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-1.5 h-px w-full bg-current transition-opacity duration-300",
                    open ? "opacity-0" : "opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-px w-full bg-current transition-transform duration-300",
                    open ? "top-1.5 -rotate-45" : "top-3",
                  )}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "bg-olive text-chalk lg:hidden",
          open ? "min-h-0 flex-1 overflow-y-auto" : "max-h-0 overflow-hidden",
        )}
        inert={!open}
        aria-hidden={open ? undefined : true}
      >
        <div className="flex h-full min-h-full flex-col justify-between px-5 pt-6 pb-[max(4rem,env(safe-area-inset-bottom,0px))] sm:px-8">
          <SectionLabel tone="chalk">Menu</SectionLabel>
          <ul className="mt-10 space-y-5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-heading text-4xl italic leading-none"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
                {featured && link.href === featured.href ? (
                  <p className="mt-2 font-heading text-lg italic leading-snug text-chalk/75">
                    {featured.menuDetail}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-col gap-3">
            <HeaderCta
              href={headerCta.href}
              className="bg-chalk px-5 py-4 text-center text-[11px] tracking-[0.22em] uppercase text-olive"
              onClick={() => setOpen(false)}
            >
              {headerCta.label}
            </HeaderCta>
            <Link
              href={secondaryCta.href}
              className="border border-chalk/40 px-5 py-4 text-center text-[11px] tracking-[0.22em] uppercase"
              onClick={() => setOpen(false)}
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
