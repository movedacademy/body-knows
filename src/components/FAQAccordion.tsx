"use client";

import { Reveal } from "@/components/Reveal";
import type { FaqItem } from "@/types/content";
import Link from "next/link";
import { useState } from "react";

type FAQAccordionProps = {
  items: FaqItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-olive/15 border-y border-olive/15">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <Reveal key={item.question} as="article">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-baseline justify-between gap-6 py-7 text-left"
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span className="font-heading text-2xl leading-tight sm:text-3xl">
                  {item.question}
                </span>
                <span aria-hidden className="font-display text-xl text-terra">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-8 pr-8 text-base leading-relaxed text-olive/80 sm:max-w-3xl sm:text-lg"
            >
              <p>{item.answer}</p>
              {item.href ? (
                <Link
                  href={item.href}
                  className="mt-5 inline-block text-[11px] tracking-[0.2em] uppercase underline-offset-4 hover:underline"
                >
                  {item.linkLabel ?? "View"} →
                </Link>
              ) : null}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
