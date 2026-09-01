import type { Cta, NavLink } from "@/types/content";

export const site = {
  name: "BODY KNOWS",
  descriptor: "Movement. Breath. Transformation.",
  coreBelief: "Your body knows things your mind hasn’t figured out yet.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bodyknows.com",
  navigation: {
    links: [
      { label: "Experience", href: "/experience" },
      { label: "Who It’s For", href: "/#who-its-for" },
      { label: "About Richard", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Apply", href: "/apply" },
    ] satisfies NavLink[],
    primaryCta: { label: "APPLY", href: "/apply" } satisfies Cta,
    secondaryCta: {
      label: "EXPLORE THE EXPERIENCE",
      href: "/experience",
    } satisfies Cta,
  },
  footer: {
    wordmark: "BODY KNOWS",
    line: "Movement. Breath. Transformation.",
    links: [
      { label: "Experience", href: "/experience" },
      { label: "About Richard", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Apply", href: "/apply" },
    ] satisfies NavLink[],
  },
  metadata: {
    homeTitle: "BODY KNOWS | Movement. Breath. Transformation.",
    homeDescription:
      "BODY KNOWS is an immersive transformational movement experience for people who know something needs to change—but have not been able to change it through thinking alone.",
    founderTitle: "Richard Aceves | Founder of BODY KNOWS",
    founderDescription:
      "Richard Aceves is a movement coach and educator whose work explores the relationship between physical experience, awareness, effort, and change.",
    experienceTitle:
      "The BODY KNOWS Experience | Movement, Breath, Transformation",
    experienceDescription:
      "A physical way into awareness. BODY KNOWS is an immersive transformational movement experience for people who know something needs to change.",
    faqTitle: "FAQ | BODY KNOWS",
    faqDescription:
      "Answers about what BODY KNOWS is—and what it is not. Not therapy, not a fitness retreat, not a spiritual or psychedelic experience.",
    applyTitle: "Apply | BODY KNOWS",
    applyDescription:
      "Apply for the next BODY KNOWS immersion. A small, individualized experience for people ready to participate fully.",
  },
};
