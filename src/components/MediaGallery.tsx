import { Reveal } from "@/components/Reveal";
import type { MediaAsset } from "@/types/content";
import Image from "next/image";

type MediaGalleryProps = {
  items: MediaAsset[];
};

export function MediaGallery({ items }: MediaGalleryProps) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
      {items.map((item, index) => {
        const wide = index % 3 === 0;
        return (
          <Reveal
            key={`${item.src}-${index}`}
            className={
              wide
                ? "relative min-h-[62vw] md:col-span-8 md:min-h-[52vh]"
                : "relative min-h-[62vw] md:col-span-4 md:min-h-[52vh]"
            }
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={wide ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
              className="object-cover"
            />
          </Reveal>
        );
      })}
    </div>
  );
}
