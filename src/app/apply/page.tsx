import { ApplicationForm } from "@/components/ApplicationForm";
import { RetreatDetails } from "@/components/RetreatDetails";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { WaitlistForm } from "@/components/WaitlistForm";
import { apply } from "@/content/apply";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { getNextImmersion } from "@/lib/cms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: site.metadata.applyTitle,
  description: site.metadata.applyDescription,
};

export default function ApplyPage() {
  const nextImmersion = getNextImmersion();

  return (
    <>
      <section className="bg-olive px-5 pb-20 pt-32 text-chalk sm:px-8 lg:px-12 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionLabel tone="chalk">{apply.hero.eyebrow}</SectionLabel>
            <h1 className="mt-5 max-w-4xl font-display font-light text-4xl tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              {apply.hero.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-chalk/80">
              {apply.hero.body}
            </p>
          </Reveal>
          <div className="mt-12 text-chalk">
            <RetreatDetails
              retreat={nextImmersion}
              comingSoonLabel={home.application.comingSoon}
              tone="chalk"
            />
          </div>
        </div>
      </section>

      <section className="bg-chalk px-5 py-20 text-olive sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[860px]">
          <p className="mb-12 max-w-2xl text-olive/70">{apply.note}</p>
          <ApplicationForm />
        </div>
      </section>

      <section
        id={apply.waitlist.id}
        className="scroll-mt-24 bg-stone px-5 py-20 text-olive sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[860px]">
          <Reveal>
            <SectionLabel>{apply.waitlist.eyebrow}</SectionLabel>
            <h2 className="mt-5 font-heading text-4xl sm:text-5xl">
              {apply.waitlist.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg text-olive/80">
              {apply.waitlist.body}
            </p>
          </Reveal>
          <div className="mt-12">
            <WaitlistForm />
          </div>
        </div>
      </section>
    </>
  );
}
