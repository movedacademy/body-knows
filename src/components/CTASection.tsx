import { CtaLink, Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import type { Cta, MediaAsset } from "@/types/content";
import Image from "next/image";

type CTASectionProps = {
  headline: string;
  body?: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  tone?: "olive" | "chalk" | "image";
  image?: MediaAsset;
};

export function CTASection({
  headline,
  body,
  primaryCta,
  secondaryCta,
  tone = "olive",
  image,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden px-5 py-28 sm:px-8 lg:px-12 lg:py-36",
        tone === "olive" && "bg-olive text-chalk",
        tone === "chalk" && "bg-chalk text-olive",
        tone === "image" && "bg-olive text-chalk min-h-[80vh] flex items-end",
      )}
    >
      {tone === "image" && image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-olive/70" />
        </>
      ) : null}
      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        <Reveal>
          <h2 className="max-w-4xl font-display font-light leading-[0.9] tracking-[-0.03em] text-5xl sm:text-7xl lg:text-8xl">
            {headline}
          </h2>
        </Reveal>
        {body ? (
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed opacity-85">
              {body}
            </p>
          </Reveal>
        ) : null}
        <Reveal delay={0.16} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <CtaLink
            href={primaryCta.href}
            variant={tone === "chalk" ? "ghost" : "invert"}
          >
            {primaryCta.label}
          </CtaLink>
          {secondaryCta ? (
            <CtaLink
              href={secondaryCta.href}
              variant={tone === "chalk" ? "ghost" : "secondary"}
            >
              {secondaryCta.label}
            </CtaLink>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
