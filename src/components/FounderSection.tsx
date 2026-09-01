import { CtaLink, Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import type { Cta, MediaAsset } from "@/types/content";
import Image from "next/image";

type FounderSectionProps = {
  eyebrow: string;
  headline: string;
  body: string[];
  quote: string;
  cta: Cta;
  image: MediaAsset;
};

export function FounderSection({
  eyebrow,
  headline,
  body,
  quote,
  cta,
  image,
}: FounderSectionProps) {
  return (
    <section className="bg-stone text-olive">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12">
        <Reveal className="relative min-h-[80vw] grayscale lg:col-span-7 lg:min-h-[92vh]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-top"
          />
        </Reveal>
        <div className="flex flex-col justify-center px-5 py-16 sm:px-10 lg:col-span-5 lg:px-14 lg:py-24">
          <Reveal>
            <SectionLabel>{eyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-heading text-4xl leading-[1.05] sm:text-5xl">
              {headline}
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="mt-8 space-y-5 text-base leading-relaxed text-olive/85">
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
          <Reveal delay={0.18}>
            <blockquote className="mt-10 border-l-2 border-terra pl-5 font-heading text-2xl italic leading-snug sm:text-3xl">
              {quote}
            </blockquote>
          </Reveal>
          <Reveal delay={0.22} className="mt-10">
            <CtaLink href={cta.href} variant="ghost">
              {cta.label}
            </CtaLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
