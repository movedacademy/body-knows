import { Reveal } from "@/components/Reveal";
import type { ExploreItem } from "@/types/content";

type ExploreCardsProps = {
  items: ExploreItem[];
};

export function ExploreCards({ items }: ExploreCardsProps) {
  return (
    <div className="no-scrollbar -mx-5 flex snap-x gap-0 overflow-x-auto border-y border-olive/15 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
      {items.map((item, index) => (
        <Reveal
          key={item.title}
          as="article"
          delay={index * 0.04}
          className="min-w-[80vw] snap-start border-olive/15 px-5 py-10 sm:min-w-0 sm:border-r sm:px-8 sm:py-12 last:border-r-0"
        >
          <p className="font-heading text-4xl italic text-olive/30">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-8 font-display text-sm tracking-[0.22em] uppercase">
            {item.title}
          </h3>
          <p className="mt-4 max-w-xs text-base leading-relaxed text-olive/80">
            {item.body}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
