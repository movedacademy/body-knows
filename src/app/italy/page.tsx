import { FAQAccordion } from "@/components/FAQAccordion";
import { ItalyApplyForm } from "@/components/ItalyApplyForm";
import { ItalyStickyCta } from "@/components/ItalyStickyCta";
import { CtaLink, Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { italy } from "@/content/italy";
import { cn } from "@/lib/cn";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: italy.metadata.title,
  description: italy.metadata.description,
  alternates: { canonical: "/italy" },
  openGraph: {
    title: italy.metadata.title,
    description: italy.metadata.description,
    url: "/italy",
  },
  twitter: {
    card: "summary_large_image",
    title: italy.metadata.title,
    description: italy.metadata.description,
  },
};

type FramedImage = {
  src: string;
  alt: string;
  position?: string;
};

function FramedImage({
  image,
  sizes,
  className,
  preload = false,
}: {
  image: FramedImage;
  sizes: string;
  className?: string;
  preload?: boolean;
}) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      preload={preload || undefined}
      className={cn("object-cover", image.position, className)}
    />
  );
}

export default function ItalyPage() {
  return (
    <>
      <ItalyStickyCta />

      <section
        id="italy-hero"
        className="relative isolate min-h-[100svh] overflow-hidden bg-olive text-chalk"
      >
        <div className="hero-drift absolute inset-0">
          <FramedImage
            image={italy.hero.mobileImage}
            sizes="100vw"
            preload
            className="md:hidden"
          />
          <FramedImage
            image={italy.hero.image}
            sizes="100vw"
            preload
            className="hidden md:block"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-olive from-[8%] via-olive/70 via-[46%] to-olive/30"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col justify-end px-5 pt-[calc(6rem+env(safe-area-inset-top,0px))] pb-[calc(2.25rem+env(safe-area-inset-bottom,0px))] min-[375px]:px-6 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
          <Reveal>
            <SectionLabel tone="chalk">{italy.hero.eyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 font-heading text-[clamp(2.15rem,5.6vw,6.5rem)] leading-[0.88] font-medium tracking-[-0.035em]">
              {italy.hero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-chalk/88 sm:mt-8 sm:text-lg">
              {italy.hero.supporting}
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-5 text-[12px] tracking-[0.22em] text-chalk/75 uppercase">
              {italy.hero.detail}
            </p>
          </Reveal>
          <Reveal
            delay={0.28}
            className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row"
          >
            <CtaLink
              href={italy.hero.primaryCta.href}
              variant="invert"
              className="min-h-11 w-full sm:w-auto sm:min-w-[15.5rem]"
            >
              {italy.hero.primaryCta.label}
            </CtaLink>
            <CtaLink
              href={italy.hero.secondaryCta.href}
              variant="secondary"
              className="min-h-11 w-full sm:w-auto sm:min-w-[15.5rem]"
            >
              {italy.hero.secondaryCta.label}
            </CtaLink>
          </Reveal>
          <a
            href={`#${italy.opening.id}`}
            className="mt-10 inline-flex w-fit items-center gap-3 text-[10px] tracking-[0.28em] text-chalk/70 uppercase"
          >
            <span className="sr-only">Scroll to the next section</span>
            <span
              aria-hidden
              className="relative block h-12 w-px overflow-hidden bg-chalk/30"
            >
              <span className="scroll-cue absolute inset-x-0 h-1/2 bg-chalk" />
            </span>
          </a>
        </div>
      </section>

      <section
        id={italy.opening.id}
        className="overflow-hidden bg-chalk text-olive"
      >
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12">
          <div className="flex flex-col justify-end px-5 pt-24 pb-10 min-[375px]:px-6 sm:px-8 sm:pt-32 lg:col-span-7 lg:px-12 lg:pt-40 lg:pb-28">
            <Reveal>
              <h2 className="font-heading text-[clamp(2.4rem,5.5vw,5.5rem)] leading-[0.9] tracking-[-0.03em] whitespace-pre-line">
                {italy.opening.statement}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 max-w-md space-y-5 text-lg leading-relaxed text-olive/85">
              {italy.opening.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-28">
            <Reveal className="relative min-h-[92vw] lg:min-h-[78vh]">
              <FramedImage
                image={italy.opening.image}
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-chalk px-5 py-24 text-olive min-[375px]:px-6 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="max-w-4xl">
            <h2 className="font-heading text-[clamp(2.4rem,5vw,5rem)] leading-[0.92] tracking-[-0.03em]">
              {italy.definition.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-olive/85">
            {italy.definition.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
          <div className="mt-16 grid border-t border-olive/15 lg:grid-cols-2">
            {[italy.definition.is, italy.definition.isNot].map((column, columnIndex) => (
              <Reveal
                key={column.label}
                delay={columnIndex * 0.08}
                className={cn(
                  "py-8 lg:py-12",
                  columnIndex === 0
                    ? "border-b border-olive/15 lg:border-r lg:border-b-0 lg:pr-14"
                    : "lg:pl-14",
                )}
              >
                <h3 className="eyebrow text-olive/60">{column.label}</h3>
                <ul className="mt-6">
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-olive/10 py-4 font-heading text-[1.75rem] leading-tight last:border-b-0 sm:text-3xl"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id={italy.experience.id}
        className="bg-stone px-5 py-24 text-olive min-[375px]:px-6 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionLabel>The experience</SectionLabel>
            <h2 className="mt-5 max-w-4xl font-heading text-[clamp(2.4rem,5vw,5rem)] leading-[0.92] tracking-[-0.03em]">
              {italy.experience.headline}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-6 gap-y-14 lg:grid-cols-12">
            {italy.experience.items.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05} className={item.span}>
                <div
                  className={cn(
                    "relative overflow-hidden bg-olive/10",
                    index < 2 ? "aspect-[3/4] sm:aspect-[4/5]" : "aspect-[4/5]",
                  )}
                >
                  <FramedImage
                    image={item.image}
                    sizes={
                      index < 2
                        ? "(min-width: 1024px) 50vw, 100vw"
                        : "(min-width: 1024px) 33vw, 100vw"
                    }
                  />
                </div>
                <p className="mt-5 text-[11px] tracking-[0.28em] text-olive/50 uppercase">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-heading text-3xl leading-tight italic sm:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-sm text-base leading-relaxed text-olive/80">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-olive px-5 py-24 text-chalk min-[375px]:px-6 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4.75rem)] leading-[0.92] tracking-[-0.03em]">
              {italy.who.headline}
            </h2>
          </Reveal>
          <div className="lg:col-span-7">
            <ul>
              {italy.who.items.map((item, index) => (
                <li key={item} className="border-t border-chalk/15">
                  <Reveal delay={index * 0.04}>
                    <p className="py-5 font-heading text-2xl leading-snug sm:text-[1.75rem]">
                      {item}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
            <Reveal>
              <p className="mt-8 border-t border-chalk/15 pt-8 font-heading text-2xl leading-snug italic sm:text-3xl">
                {italy.who.closing}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-chalk px-5 py-24 text-olive min-[375px]:px-6 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="max-w-3xl">
            <h2 className="font-heading text-[clamp(2.6rem,6vw,6rem)] leading-[0.9] tracking-[-0.03em]">
              {italy.place.headline}
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-12 gap-3">
            <Reveal className="relative col-span-12 aspect-[4/5] sm:aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[78vh]">
              <FramedImage
                image={italy.place.images[0]}
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            </Reveal>
            <div className="col-span-12 grid grid-cols-2 gap-3 lg:col-span-5 lg:grid-cols-1">
              <Reveal className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[38vh]">
                <FramedImage
                  image={italy.place.images[1]}
                  sizes="(min-width: 1024px) 40vw, 50vw"
                />
              </Reveal>
              <Reveal delay={0.08} className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[38vh]">
                <FramedImage
                  image={italy.place.images[2]}
                  sizes="(min-width: 1024px) 40vw, 50vw"
                />
              </Reveal>
            </div>
            <Reveal className="relative col-span-12 aspect-[16/9] lg:aspect-[21/8]">
              <FramedImage image={italy.place.images[3]} sizes="100vw" />
            </Reveal>
          </div>
          <div className="mt-12 grid gap-8 border-t border-olive/15 pt-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <p className="max-w-xl text-lg leading-relaxed text-olive/85">
                {italy.place.body}
              </p>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
              <p className="text-[12px] tracking-[0.2em] uppercase">{italy.place.detail}</p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-olive/70">
                {italy.place.note}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-stone text-olive">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12">
          <Reveal className="relative min-h-[92vw] grayscale lg:col-span-7 lg:min-h-[92vh]">
            <FramedImage
              image={italy.founder.image}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-[center_40%]"
            />
          </Reveal>
          <div className="flex flex-col justify-center px-5 py-16 min-[375px]:px-6 sm:px-10 lg:col-span-5 lg:px-14 lg:py-24">
            <Reveal>
              <SectionLabel>Founder</SectionLabel>
              <h2 className="mt-5 font-heading text-4xl leading-[1.02] sm:text-5xl">
                {italy.founder.headline}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-olive/85">
                {italy.founder.body}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id={italy.apply.id}
        className="bg-olive px-5 py-24 text-chalk min-[375px]:px-6 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="max-w-2xl">
            <h2 className="font-heading text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.9] tracking-[-0.03em]">
              {italy.apply.headline}
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-chalk/85">
              {italy.apply.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <div className="mx-auto mt-12 w-full max-w-[820px] lg:mt-16">
            <ItalyApplyForm />
          </div>
        </div>
      </section>

      <section className="bg-chalk px-5 py-24 text-olive min-[375px]:px-6 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[860px]">
          <Reveal>
            <h2 className="font-heading text-4xl tracking-[-0.03em] sm:text-5xl">
              {italy.faq.headline}
            </h2>
          </Reveal>
          <div className="mt-10">
            <FAQAccordion items={italy.faq.items} />
          </div>
        </div>
      </section>

      <section className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-olive text-chalk">
        <FramedImage image={italy.finalCta.image} sizes="100vw" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-olive via-olive/60 to-olive/25"
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pt-24 pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] min-[375px]:px-6 sm:px-8 lg:px-12 lg:pb-24">
          <Reveal>
            <h2 className="max-w-4xl font-heading text-[clamp(3.25rem,9vw,8rem)] leading-[0.86] tracking-[-0.04em]">
              {italy.finalCta.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-[12px] tracking-[0.22em] text-chalk/80 uppercase">
              {italy.finalCta.detail}
            </p>
          </Reveal>
          <Reveal delay={0.14} className="mt-10">
            <CtaLink
              href={italy.finalCta.cta.href}
              variant="invert"
              className="min-h-11 w-full sm:w-auto"
            >
              {italy.finalCta.cta.label}
            </CtaLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
