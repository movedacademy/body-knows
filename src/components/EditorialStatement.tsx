import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";

type EditorialStatementProps = {
  statement: string;
  body?: string | string[];
  tone?: "light" | "dark";
  className?: string;
};

export function EditorialStatement({
  statement,
  body,
  tone = "light",
  className,
}: EditorialStatementProps) {
  const paragraphs = body ? (Array.isArray(body) ? body : [body]) : [];

  return (
    <section
      className={cn(
        "px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40",
        tone === "light" ? "bg-chalk text-olive" : "bg-olive text-chalk",
        className,
      )}
    >
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-8">
          <h2 className="font-heading text-[2.25rem] leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl whitespace-pre-line">
            {statement}
          </h2>
        </Reveal>
        {paragraphs.length > 0 ? (
          <Reveal delay={0.12} className="lg:col-span-4 lg:pt-4">
            <div className="max-w-sm space-y-5 font-editorial text-lg leading-relaxed sm:text-xl">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
