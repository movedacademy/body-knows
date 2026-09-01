"use client";

import { cn } from "@/lib/cn";
import { fadeUp, revealTransition } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px" }}
      variants={fadeUp}
      transition={revealTransition(delay)}
    >
      {children}
    </Tag>
  );
}

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "invert";
  className?: string;
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  className,
}: CtaLinkProps) {
  const styles = {
    primary:
      "bg-olive text-chalk hover:bg-olive/90 border border-olive",
    secondary:
      "bg-transparent text-chalk border border-chalk/70 hover:bg-chalk hover:text-olive",
    ghost:
      "bg-transparent text-olive border border-olive/30 hover:border-olive hover:bg-olive hover:text-chalk",
    invert:
      "bg-chalk text-olive hover:bg-stone border border-chalk",
  } as const;

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center px-6 py-3.5 text-[11px] tracking-[0.28em] uppercase font-medium transition-colors duration-300",
        styles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
