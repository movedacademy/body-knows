import { CtaLink } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { getFeaturedEvent } from "@/lib/cms";

export default function NotFound() {
  const event = getFeaturedEvent();

  return (
    <section
      className={
        event
          ? "flex min-h-[100svh] items-end bg-olive px-5 pt-[calc(8.25rem+env(safe-area-inset-top,0px))] pb-20 text-chalk sm:px-8 lg:px-12"
          : "flex min-h-[100svh] items-end bg-olive px-5 py-20 text-chalk sm:px-8 lg:px-12"
      }
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionLabel tone="chalk">404</SectionLabel>
        <h1 className="mt-6 font-display font-light text-5xl tracking-[-0.03em] sm:text-7xl">
          This page is not here.
        </h1>
        <p className="mt-6 max-w-md text-lg text-chalk/75">
          The path you followed does not exist. Start with the experience, or
          return home.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <CtaLink href="/" variant="invert">
            BODY KNOWS
          </CtaLink>
          <CtaLink href="/experience" variant="secondary">
            EXPLORE THE EXPERIENCE
          </CtaLink>
          {event ? (
            <CtaLink href={event.href} variant="secondary">
              {event.navLabel}
            </CtaLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
