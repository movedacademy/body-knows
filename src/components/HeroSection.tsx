"use client";

import { CtaLink, Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { cn } from "@/lib/cn";
import type { Cta, MediaAsset } from "@/types/content";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type HeroSectionProps = {
  eyebrow?: string;
  descriptor?: string;
  title: string | string[];
  supporting?: string;
  body?: string;
  image: MediaAsset;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  size?: "full" | "page";
  align?: "start" | "end";
};

function formatDescriptor(text: string) {
  return text.replace(/^(\S+\.)\s+/, "$1\u00A0");
}

export function HeroSection({
  eyebrow,
  descriptor,
  title,
  supporting,
  body,
  image,
  primaryCta,
  secondaryCta,
  size = "full",
  align = "end",
}: HeroSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const titleLines = Array.isArray(title) ? title : [title];
  const isStatementHero = Boolean(descriptor);

  return (
    <section
      ref={ref}
      className={cn(
        "relative isolate overflow-x-clip overflow-y-hidden bg-olive text-chalk",
        size === "full" ? "min-h-[100svh]" : "min-h-[78svh]",
      )}
    >
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { scale }}
      >
        {image.video && !reduce ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={image.src}
            aria-hidden
          >
            <source src={image.video} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_30%]"
          />
        )}
      </motion.div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-olive from-[12%] via-olive/55 via-[48%] to-olive/25"
        aria-hidden
      />

      <div
        className={cn(
          "relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col",
          "px-5 min-[375px]:px-6 sm:px-8 lg:px-12",
          size === "full" ? "min-h-[100svh]" : "min-h-[78svh]",
          "pt-[calc(5.75rem+env(safe-area-inset-top,0px))] sm:pt-[calc(6.25rem+env(safe-area-inset-top,0px))]",
          align === "end"
            ? "justify-end pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))] sm:pb-16 lg:pb-20"
            : "justify-center pb-[calc(2rem+env(safe-area-inset-bottom,0px))]",
        )}
      >
        {eyebrow ? (
          <Reveal>
            <SectionLabel tone="chalk">{eyebrow}</SectionLabel>
          </Reveal>
        ) : null}

        {descriptor ? (
          <Reveal>
            <p className="max-w-full font-display text-[clamp(0.9375rem,2vw+0.55rem,1.25rem)] font-medium leading-snug tracking-[0.06em] text-pretty text-chalk/90">
              {formatDescriptor(descriptor)}
            </p>
          </Reveal>
        ) : null}

        <Reveal delay={descriptor || eyebrow ? 0.08 : 0}>
          <h1
            className={cn(
              "max-w-5xl text-pretty",
              descriptor || eyebrow ? "mt-4 sm:mt-5 lg:mt-6" : null,
              isStatementHero
                ? "font-heading font-normal leading-[1.15] tracking-[-0.02em] text-[clamp(1.875rem,5vw+0.9rem,4.25rem)]"
                : "font-display font-light leading-[0.95] tracking-[-0.03em] text-[clamp(2.25rem,7vw+0.65rem,6.75rem)]",
            )}
          >
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
        </Reveal>

        {supporting ? (
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-2xl font-heading text-[clamp(1.25rem,2vw+0.85rem,2.25rem)] italic leading-snug text-pretty text-chalk/95 sm:mt-7">
              {supporting}
            </p>
          </Reveal>
        ) : null}

        {body ? (
          <Reveal delay={0.22}>
            <p className="mt-5 max-w-xl text-base leading-[1.55] text-pretty text-chalk/85 sm:mt-6 sm:text-lg sm:leading-relaxed">
              {body}
            </p>
          </Reveal>
        ) : null}

        {(primaryCta || secondaryCta) && (
          <Reveal
            delay={0.28}
            className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:items-stretch sm:gap-4"
          >
            {primaryCta ? (
              <CtaLink
                href={primaryCta.href}
                variant="invert"
                className="min-h-11 w-full px-5 sm:w-auto sm:min-w-[15.5rem]"
              >
                {primaryCta.label}
              </CtaLink>
            ) : null}
            {secondaryCta ? (
              <CtaLink
                href={secondaryCta.href}
                variant="secondary"
                className="min-h-11 w-full px-5 sm:w-auto sm:min-w-[15.5rem]"
              >
                {secondaryCta.label}
              </CtaLink>
            ) : null}
          </Reveal>
        )}
      </div>
    </section>
  );
}
