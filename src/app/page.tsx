import { CTASection } from "@/components/CTASection";
import { CtaLink, Reveal } from "@/components/Reveal";
import { EditorialStatement } from "@/components/EditorialStatement";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import { ExploreCards } from "@/components/ExploreCards";
import { FeaturedEvent } from "@/components/FeaturedEvent";
import { FounderSection } from "@/components/FounderSection";
import { HeroSection } from "@/components/HeroSection";
import { RetreatDetails } from "@/components/RetreatDetails";
import { SectionLabel } from "@/components/SectionLabel";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { getFeaturedEvent, withFeaturedDescription } from "@/lib/cms";
import type { Metadata } from "next";
import Image from "next/image";

export function generateMetadata(): Metadata {
  return {
    title: site.metadata.homeTitle,
    description: withFeaturedDescription(
      site.metadata.homeDescription,
      getFeaturedEvent(),
    ),
  };
}

export default function HomePage() {
  const event = getFeaturedEvent();
  const heroPrimary = event
    ? { label: event.applyLabel, href: event.applyHref }
    : home.hero.restingCta;
  const applicationPrimary = event
    ? { label: event.applyLabel, href: event.applyHref }
    : home.application.restingCta;
  const applicationSecondary = event
    ? { label: event.waitlistLabel, href: home.application.secondaryCta.href }
    : home.application.restingSecondaryCta;

  return (
    <>
      <HeroSection
        descriptor={home.hero.descriptor}
        title={home.hero.title}
        body={home.hero.body}
        detail={event?.heroDetail}
        image={home.hero.image}
        primaryCta={heroPrimary}
        secondaryCta={home.hero.secondaryCta}
        clearance={event ? "announcement" : "header"}
      />

      <EditorialStatement
        statement={home.tension.statement}
        body={home.tension.body}
      />

      <FeaturedEvent />

      <section className="bg-chalk px-5 pb-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 border-t border-olive/15 py-16 lg:grid-cols-12 lg:py-20">
            <Reveal className="lg:col-span-5">
              <SectionLabel>{home.experience.eyebrow}</SectionLabel>
              <h2 className="mt-5 font-heading text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                {home.experience.headline}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-olive/85 lg:col-span-6 lg:col-start-7">
              {home.experience.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="pt-4">
                <CtaLink href={home.experience.cta.href} variant="ghost">
                  {home.experience.cta.label}
                </CtaLink>
              </div>
            </Reveal>
          </div>
          <ExperienceGrid items={home.experience.visuals} />
        </div>
      </section>

      <section className="bg-chalk px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="mb-12 max-w-3xl">
            <SectionLabel>{home.explore.eyebrow}</SectionLabel>
            <h2 className="mt-5 font-heading text-4xl leading-[1.05] whitespace-pre-line sm:text-6xl">
              {home.explore.headline}
            </h2>
          </Reveal>
          <ExploreCards items={home.explore.items} />
        </div>
      </section>

      <section
        id={home.who.id}
        className="bg-olive px-5 py-24 text-chalk sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display font-light text-4xl leading-[0.95] tracking-[-0.03em] sm:text-6xl">
              {home.who.headline}
            </h2>
            <p className="mt-8 max-w-md font-heading text-2xl italic text-chalk/90">
              {home.who.intro}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <ul className="space-y-0">
              {home.who.items.map((item) => (
                <li
                  key={item}
                  className="border-t border-chalk/15 py-5 text-lg leading-relaxed text-chalk/90 last:border-b"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-10 font-heading text-2xl italic">
              {home.who.closing}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-stone text-olive">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <Image
            src={home.whoNot.image.src}
            alt={home.whoNot.image.alt}
            fill
            sizes="50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone via-stone/20 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <Reveal className="max-w-xl">
            <h2 className="font-display font-light text-4xl leading-[0.95] tracking-[-0.03em] sm:text-5xl">
              {home.whoNot.headline}
            </h2>
            <p className="mt-8 text-lg leading-relaxed">{home.whoNot.body}</p>
            <p className="mt-6 font-heading text-2xl italic">
              {home.whoNot.supporting}
            </p>
          </Reveal>
        </div>
      </section>

      <FounderSection
        eyebrow={home.founder.eyebrow}
        headline={home.founder.headline}
        body={home.founder.body}
        quote={home.founder.quote}
        cta={home.founder.cta}
        image={home.founder.image}
      />

      <section className="bg-chalk px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <h2 className="font-display font-light text-4xl tracking-[-0.03em] sm:text-6xl">
              {home.application.headline}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-olive/85">
              {home.application.body}
            </p>
          </Reveal>
          <div className="mt-12">
            <RetreatDetails
              retreat={event?.retreat ?? null}
              comingSoonLabel={home.application.comingSoon}
            />
          </div>
          <Reveal delay={0.12} className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaLink href={applicationPrimary.href} className="w-full sm:w-auto">
              {applicationPrimary.label}
            </CtaLink>
            <CtaLink
              href={applicationSecondary.href}
              variant="ghost"
              className="w-full text-center whitespace-normal sm:w-auto"
            >
              {applicationSecondary.label}
            </CtaLink>
          </Reveal>
        </div>
      </section>

      <CTASection
        headline={home.finalCta.headline}
        primaryCta={home.finalCta.cta}
        tone="image"
        image={home.finalCta.image}
      />
    </>
  );
}
