import { CtaLink, Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { italy } from "@/content/italy";
import { cn } from "@/lib/cn";
import { getFeaturedEvent } from "@/lib/cms";
import Image from "next/image";

export function FeaturedEvent() {
  const event = getFeaturedEvent();
  if (!event) return null;

  const image = event.href === "/italy" ? italy.place.images[0] : null;

  return (
    <section className="bg-stone text-olive">
      <div className="grid lg:grid-cols-2">
        {image ? (
          <Reveal className="relative min-h-[72vw] lg:min-h-[88vh]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={cn("object-cover", image.position)}
            />
          </Reveal>
        ) : null}
        <div className="flex flex-col justify-center px-5 py-16 sm:px-10 lg:px-16 lg:py-28">
          <Reveal>
            <SectionLabel>Next immersion</SectionLabel>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4.75rem)] leading-[0.92] font-light tracking-[-0.03em] uppercase">
              <span className="block">{event.headline[0]}</span>
              <span className="block">{event.headline[1]}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-olive/85">
              {italy.place.body}
            </p>
            <p className="mt-6 font-heading text-2xl italic sm:text-3xl">
              A small group. Individualized. Physical.
            </p>
          </Reveal>
          <Reveal delay={0.14} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={event.applyHref}>{event.applyLabel}</CtaLink>
            <CtaLink href={event.href} variant="ghost">
              {event.seeLabel}
            </CtaLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
