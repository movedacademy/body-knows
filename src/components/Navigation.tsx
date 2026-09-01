"use client";

import { SectionLabel } from "@/components/SectionLabel";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

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
  const { links, primaryCta, secondaryCta } = site.navigation;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        solid ? "bg-chalk/95 text-olive shadow-[0_1px_0_rgba(40,53,45,0.08)] backdrop-blur-md" : "bg-transparent text-chalk",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12"
      >
        <Link href="/" className="eyebrow text-current">
          {site.name}
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
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
                  className={cn(
                    "text-[12px] tracking-[0.16em] uppercase transition-opacity hover:opacity-100",
                    active ? "opacity-100" : "opacity-70",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href={secondaryCta.href}
            className="text-[11px] tracking-[0.22em] uppercase opacity-80 transition-opacity hover:opacity-100"
          >
            {secondaryCta.label}
          </Link>
          <Link
            href={primaryCta.href}
            className={cn(
              "px-5 py-2.5 text-[11px] tracking-[0.28em] uppercase transition-colors",
              solid
                ? "bg-olive text-chalk hover:bg-olive/90"
                : "bg-chalk text-olive hover:bg-stone",
            )}
          >
            {primaryCta.label}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href={primaryCta.href}
            className={cn(
              "px-4 py-2 text-[10px] tracking-[0.24em] uppercase",
              solid ? "bg-olive text-chalk" : "bg-chalk text-olive",
            )}
          >
            {primaryCta.label}
          </Link>
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

      <div
        id="mobile-nav"
        className={cn(
          "lg:hidden overflow-hidden bg-olive text-chalk transition-[max-height] duration-500",
          open ? "max-h-screen" : "max-h-0",
        )}
      >
        <div className="flex min-h-[100svh] flex-col justify-between px-5 pb-16 pt-6 sm:px-8">
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
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-col gap-3">
            <Link
              href={primaryCta.href}
              className="bg-chalk px-5 py-4 text-center text-[11px] tracking-[0.28em] uppercase text-olive"
              onClick={() => setOpen(false)}
            >
              {primaryCta.label}
            </Link>
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
