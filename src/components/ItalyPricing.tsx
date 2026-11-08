import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { isProductionStripePaymentLink } from "@/content/italy-checkout";
import { italy } from "@/content/italy";
import { cn } from "@/lib/cn";

const checkoutButtonClass =
  "inline-flex min-h-11 w-full items-center justify-center border border-olive bg-olive px-4 py-3.5 text-center text-[11px] leading-snug font-medium tracking-[0.16em] text-chalk uppercase transition-colors duration-300 hover:bg-olive/90 sm:px-6 sm:tracking-[0.22em]";

export function ItalyPricing() {
  const { pricing } = italy;

  return (
    <section
      id={pricing.id}
      aria-labelledby="italy-tickets-heading"
      className="bg-stone px-5 py-24 text-olive min-[375px]:px-6 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="max-w-3xl">
          <SectionLabel>{pricing.eyebrow}</SectionLabel>
          <h2
            id="italy-tickets-heading"
            className="mt-5 font-heading text-[clamp(2.4rem,5vw,5rem)] leading-[0.92] tracking-[-0.03em]"
          >
            {pricing.headline}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-olive/85">
            {pricing.intro}
          </p>
          <a
            href={pricing.questionsLink.href}
            className="mt-6 inline-flex min-h-11 items-center text-base leading-snug text-olive underline decoration-olive/40 underline-offset-4 hover:decoration-olive"
          >
            {pricing.questionsLink.label}
          </a>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:gap-6">
          {pricing.options.map((option, index) => {
            const checkoutUrl = pricing.checkout[option.checkoutKey];
            const href = isProductionStripePaymentLink(checkoutUrl)
              ? checkoutUrl
              : null;
            const priceId = `${option.id}-price`;

            return (
              <Reveal key={option.id} delay={index * 0.05} className="h-full">
                <article className="flex h-full flex-col bg-chalk px-6 py-8 sm:px-8 sm:py-10">
                  <p className="eyebrow text-sea">{option.label}</p>
                  <h3 className="mt-5 font-heading text-[1.85rem] leading-tight sm:text-4xl">
                    {option.title}
                  </h3>
                  <div id={priceId} className="mt-8">
                    <p className="font-heading text-[clamp(2.5rem,4vw,3.25rem)] leading-none tracking-[-0.03em]">
                      {option.price}
                    </p>
                    {option.perPerson ? (
                      <p className="mt-3 text-sm font-medium tracking-[0.2em] uppercase">
                        per person
                      </p>
                    ) : null}
                    {option.total ? (
                      <p className="mt-5 border-t border-olive/15 pt-5 font-heading text-[1.7rem] leading-snug sm:text-3xl">
                        {option.total}
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-olive/80">
                    {option.description}
                  </p>
                  <div className="mt-auto pt-10">
                    {href ? (
                      <a
                        href={href}
                        data-ticket={option.id}
                        aria-describedby={priceId}
                        className={checkoutButtonClass}
                      >
                        {option.button}
                      </a>
                    ) : (
                      <button
                        type="button"
                        data-ticket={option.id}
                        disabled
                        aria-describedby={priceId}
                        className={cn(
                          checkoutButtonClass,
                          "cursor-not-allowed opacity-45 hover:bg-olive",
                        )}
                      >
                        {option.button}
                        <span className="sr-only">Checkout is unavailable</span>
                      </button>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
