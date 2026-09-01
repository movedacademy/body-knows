import { Reveal } from "@/components/Reveal";
import { hasConfirmedLogistics } from "@/lib/cms";
import type { Retreat } from "@/types/content";

type RetreatDetailsProps = {
  retreat: Retreat | null;
  comingSoonLabel: string;
  tone?: "olive" | "chalk";
};

function formatDate(value?: string) {
  if (!value) return null;
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function RetreatDetails({
  retreat,
  comingSoonLabel,
  tone = "olive",
}: RetreatDetailsProps) {
  if (!hasConfirmedLogistics(retreat)) {
    return (
      <Reveal>
        <p className={tone === "chalk" ? "eyebrow text-sea" : "eyebrow text-sea"}>
          {comingSoonLabel}
        </p>
      </Reveal>
    );
  }

  const details = [
    {
      label: "Dates",
      value: [formatDate(retreat?.startDate), formatDate(retreat?.endDate)]
        .filter(Boolean)
        .join(" – "),
    },
    { label: "Location", value: retreat?.location },
    { label: "Investment", value: retreat?.price },
    {
      label: "Group",
      value: retreat?.capacity ? `${retreat.capacity} participants` : undefined,
    },
    { label: "Stay", value: retreat?.accommodation },
  ].filter((item) => item.value);

  return (
    <dl className="grid gap-8 sm:grid-cols-2">
      {details.map((item) => (
        <Reveal key={item.label}>
          <dt className={tone === "chalk" ? "eyebrow text-chalk/60" : "eyebrow text-olive/60"}>
            {item.label}
          </dt>
          <dd className="mt-2 font-heading text-2xl">{item.value}</dd>
        </Reveal>
      ))}
    </dl>
  );
}
