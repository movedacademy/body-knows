import { CtaLink } from "@/components/Reveal";
import { getFeaturedEvent } from "@/lib/cms";

export function NextImmersionCallout() {
  const event = getFeaturedEvent();
  if (!event) return null;

  return (
    <section className="border-t border-olive/15 bg-chalk px-5 py-16 text-olive sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-[1440px] items-end gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow text-olive/70">Next immersion</p>
          <p className="mt-4 font-heading text-3xl italic leading-tight text-pretty sm:text-4xl">
            {event.label}
          </p>
        </div>
        <div className="lg:justify-self-end">
          <p className="max-w-sm text-lg leading-relaxed text-olive/85">
            Applications are open for a small group.
          </p>
          <div className="mt-6">
            <CtaLink href={event.applyHref}>{event.applyLabel}</CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
