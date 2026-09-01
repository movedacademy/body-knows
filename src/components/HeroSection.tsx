"use client";

import { CtaLink, Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { cn } from "@/lib/cn";
import type { Cta, MediaAsset } from "@/types/content";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type HeroSectionProps = {
  eyebrow: string;
  title: string | string[];
  supporting?: string;
  body?: string;
  image: MediaAsset;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  size?: "full" | "page";
  align?: "start" | "end";
};

export function HeroSection({
  eyebrow,
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

  return (
    <section
      ref={ref}
      className={cn(
        "relative isolate overflow-hidden bg-olive text-chalk",
        size === "full" ? "min-h-[100svh]" : "min-h-[78svh] pt-20",
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
      <div className="absolute inset-0 bg-gradient-to-t from-olive via-olive/45 to-olive/20" />

      <div
        className={cn(
          "relative z-10 mx-auto flex h-full max-w-[1440px] flex-col px-5 py-10 sm:px-8 lg:px-12",
          size === "full" ? "min-h-[100svh] pt-28" : "min-h-[78svh]",
          align === "end" ? "justify-end pb-16 lg:pb-20" : "justify-center",
        )}
      >
        <Reveal>
          <SectionLabel tone="chalk">{eyebrow}</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-5xl font-display font-light leading-[0.9] tracking-[-0.03em] text-[3rem] sm:text-[4.5rem] lg:text-[6.75rem]">
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
        </Reveal>
        {supporting ? (
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl font-heading text-2xl italic leading-snug text-chalk/95 sm:text-3xl lg:text-4xl">
              {supporting}
            </p>
          </Reveal>
        ) : null}
        {body ? (
          <Reveal delay={0.22}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-chalk/85 sm:text-lg">
              {body}
            </p>
          </Reveal>
        ) : null}
        {(primaryCta || secondaryCta) && (
          <Reveal delay={0.28} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            {primaryCta ? (
              <CtaLink href={primaryCta.href} variant="invert">
                {primaryCta.label}
              </CtaLink>
            ) : null}
            {secondaryCta ? (
              <CtaLink href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </CtaLink>
            ) : null}
          </Reveal>
        )}
      </div>
    </section>
  );
}
