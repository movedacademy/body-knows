import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { NextImmersionCallout } from "@/components/NextImmersionCallout";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { faq, nextImmersionFaq } from "@/content/faq";
import { site } from "@/content/site";
import { getFeaturedEvent } from "@/lib/cms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: site.metadata.faqTitle,
  description: site.metadata.faqDescription,
};

export default function FaqPage() {
  const event = getFeaturedEvent();
  const items = event ? [nextImmersionFaq(event), ...faq.items] : faq.items;

  return (
    <>
      <section
        className={
          event
            ? "bg-olive px-5 pb-20 pt-[calc(10.5rem+env(safe-area-inset-top,0px))] text-chalk sm:px-8 lg:px-12 lg:pb-28 lg:pt-[calc(12.25rem+env(safe-area-inset-top,0px))]"
            : "bg-olive px-5 pb-20 pt-32 text-chalk sm:px-8 lg:px-12 lg:pb-28 lg:pt-40"
        }
      >
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
          <FAQAccordion items={items} />
        </div>
      </section>

      <NextImmersionCallout />

      <CTASection
        headline={faq.cta.headline}
        body={faq.cta.body}
        primaryCta={faq.cta.primaryCta}
        secondaryCta={faq.cta.secondaryCta}
      />
    </>
  );
}
