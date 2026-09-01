import { CtaLink, Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { about } from "@/content/about";
import { site } from "@/content/site";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: site.metadata.founderTitle,
  description: site.metadata.founderDescription,
};

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate min-h-[88svh] overflow-hidden bg-olive text-chalk">
        <Image
          src={about.hero.image.src}
          alt={about.hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-olive via-olive/50 to-olive/25" />
        <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-[1440px] flex-col justify-end px-5 py-16 sm:px-8 lg:px-12">
          <SectionLabel tone="chalk">{about.hero.eyebrow}</SectionLabel>
          <h1 className="mt-5 font-display font-light leading-[0.9] tracking-[-0.03em] text-5xl sm:text-7xl lg:text-8xl">
            {about.hero.title}
          </h1>
        </div>
      </section>

      <section className="bg-chalk px-5 py-24 text-olive sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[860px] space-y-20">
          {about.sections.map((section, index) => (
            <Reveal key={section.headline} delay={index * 0.05}>
              <h2 className="font-heading text-4xl italic sm:text-5xl">
                {section.headline}
              </h2>
              <p className="mt-6 font-editorial text-xl leading-relaxed text-olive/85">
                {section.body}
              </p>
            </Reveal>
          ))}
          <Reveal>
            <p className="border-t border-olive/15 pt-12 font-heading text-3xl leading-snug sm:text-4xl">
              {about.closing}
            </p>
            <div className="mt-10">
              <CtaLink href={about.cta.href} variant="ghost">
                {about.cta.label}
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
