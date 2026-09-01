import { Reveal } from "@/components/Reveal";
import type { ExperienceVisual } from "@/types/content";
import Image from "next/image";

type ExperienceGridProps = {
  items: ExperienceVisual[];
};

export function ExperienceGrid({ items }: ExperienceGridProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 0.05} className="group relative min-h-[58vw] overflow-hidden sm:min-h-[42vw] lg:min-h-[38vh]">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-olive/80 via-olive/10 to-transparent" />
          <p className="absolute bottom-5 left-5 right-5 font-heading text-2xl italic text-chalk">
            {item.title}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
