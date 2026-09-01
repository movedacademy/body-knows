import { cn } from "@/lib/cn";

type SectionLabelProps = {
  children: string;
  className?: string;
  tone?: "olive" | "chalk" | "sea";
};

export function SectionLabel({
  children,
  className,
  tone = "olive",
}: SectionLabelProps) {
  const tones = {
    olive: "text-olive/70",
    chalk: "text-chalk/70",
    sea: "text-sea",
  } as const;

  return (
    <p className={cn("eyebrow", tones[tone], className)}>{children}</p>
  );
}
