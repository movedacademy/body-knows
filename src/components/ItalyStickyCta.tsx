"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function ItalyStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const hero = document.getElementById("italy-hero");
      const apply = document.getElementById("apply");
      if (!hero || !apply) return;
      const heroBottom = hero.getBoundingClientRect().bottom;
      const applyTop = apply.getBoundingClientRect().top;
      setVisible(heroBottom < 72 && applyTop > window.innerHeight * 0.55);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-chalk/15 bg-olive px-4 pt-3 lg:hidden",
        "pb-[max(0.75rem,env(safe-area-inset-bottom))]",
        "transition-transform duration-300",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <a
        href="#apply"
        tabIndex={visible ? 0 : -1}
        className="flex min-h-11 items-center justify-center bg-chalk px-5 text-[11px] font-medium tracking-[0.28em] text-olive uppercase"
      >
        Apply for Italy
      </a>
    </div>
  );
}
