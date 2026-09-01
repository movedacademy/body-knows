import { CtaLink, Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { cn } from "@/lib/cn";
import type { Cta, MediaAsset } from "@/types/content";
import Image from "next/image";

type ImageTextSectionProps = {
  eyebrow?: string;
  title: string;
  body: string | string[];
  image: MediaAsset;
  reverse?: boolean;
  cta?: Cta;
  id?: string;
};

export function ImageTextSection({
  eyebrow,
  title,
  body,
  image,
  reverse = false,
  cta,
  id,
}: ImageTextSectionProps) {
  const paragraphs = Array.isArray(body) ? body : [body];

  return (
    <section id={id} className="bg-chalk text-olive">
      <div
        className={cn(
          "mx-auto grid max-w-[1440px] lg:grid-cols-2",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        <Reveal className="relative min-h-[70vw] lg:min-h-[90vh]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <div className="flex flex-col justify-center px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
          {eyebrow ? (
            <Reveal>
              <SectionLabel>{eyebrow}</SectionLabel>
            </Reveal>
          ) : null}
          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-xl font-heading text-4xl leading-[1.02] sm:text-5xl lg:text-6xl whitespace-pre-line">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.14} className="mt-8 max-w-md space-y-5 text-base leading-relaxed text-olive/85 sm:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
          {cta ? (
            <Reveal delay={0.2} className="mt-10">
              <CtaLink href={cta.href} variant="ghost">
                {cta.label}
              </CtaLink>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
