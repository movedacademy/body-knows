import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { faq } from "@/content/faq";
import { site } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: site.metadata.faqTitle,
  description: site.metadata.faqDescription,
};

export default function FaqPage() {
  return (
    <>
      <section className="bg-olive px-5 pb-20 pt-32 text-chalk sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionLabel tone="chalk">{faq.hero.eyebrow}</SectionLabel>
            <h1 className="mt-5 font-display font-light text-5xl tracking-[-0.03em] sm:text-7xl">
              {faq.hero.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-chalk/80">
              {faq.hero.body}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-chalk px-5 py-16 text-olive sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[960px]">
          <FAQAccordion items={faq.items} />
        </div>
      </section>

      <CTASection
        headline={faq.cta.headline}
        body={faq.cta.body}
        primaryCta={faq.cta.primaryCta}
        secondaryCta={faq.cta.secondaryCta}
      />
    </>
  );
}
