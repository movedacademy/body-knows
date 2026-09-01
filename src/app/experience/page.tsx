import { CTASection } from "@/components/CTASection";
import { EditorialStatement } from "@/components/EditorialStatement";
import { HeroSection } from "@/components/HeroSection";
import { ImageTextSection } from "@/components/ImageTextSection";
import { MediaGallery } from "@/components/MediaGallery";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { experience } from "@/content/experience";
import { site } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: site.metadata.experienceTitle,
  description: site.metadata.experienceDescription,
};

export default function ExperiencePage() {
  return (
    <>
      <HeroSection
        eyebrow={experience.hero.eyebrow}
        title={experience.hero.title}
        body={experience.hero.body}
        image={experience.hero.image}
        primaryCta={experience.hero.cta}
        size="page"
      />

      <section className="bg-chalk px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionLabel>{experience.intro.eyebrow}</SectionLabel>
            <h2 className="mt-5 max-w-3xl font-heading text-4xl leading-[1.05] whitespace-pre-line sm:text-6xl">
              {experience.intro.headline}
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-olive/80">
              {experience.intro.body}
            </p>
          </Reveal>
        </div>
      </section>

      {experience.components.map((component, index) => (
        <ImageTextSection
          key={component.id}
          id={component.id}
          eyebrow={`0${index + 1}`}
          title={component.title}
          body={component.body}
          image={component.image}
          reverse={index % 2 === 1}
        />
      ))}

      <EditorialStatement
        statement={experience.keyMessage.statement}
        body={experience.keyMessage.body}
        tone="dark"
      />

      <section className="bg-chalk px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <MediaGallery items={experience.gallery} />
        </div>
      </section>

      <CTASection
        headline={experience.cta.headline}
        body={experience.cta.body}
        primaryCta={experience.cta.primaryCta}
        secondaryCta={experience.cta.secondaryCta}
      />
    </>
  );
}
