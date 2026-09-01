import type { FaqItem } from "@/types/content";

export const faq = {
  hero: {
    eyebrow: "FAQ",
    title: "Direct answers.",
    body: "BODY KNOWS is easier to misunderstand than to oversimplify. These questions exist to draw a clean line around what the experience is—and what it is not.",
  },
  items: [
    {
      question: "Is BODY KNOWS therapy?",
      answer:
        "No. BODY KNOWS is not psychotherapy. It is an experiential movement and breath-based immersion designed around physical awareness, exploration, challenge, and personal reflection.",
    },
    {
      question: "Is BODY KNOWS a fitness retreat?",
      answer:
        "No. Physical movement is part of the experience, but the goal is not athletic performance.",
    },
    {
      question: "Is BODY KNOWS spiritual?",
      answer:
        "BODY KNOWS is grounded in movement, breath, physical experience, and awareness rather than spiritual or religious practice.",
    },
    {
      question: "Is BODY KNOWS an ayahuasca or psychedelic retreat?",
      answer:
        "No. BODY KNOWS does not provide ayahuasca or psychedelic substances.",
    },
    {
      question: "What will happen to me?",
      answer:
        "Each person’s experience is different. BODY KNOWS does not promise a specific outcome. The experience is designed to create space for exploration, challenge, reflection, and awareness.",
    },
    {
      question: "Who is it for?",
      answer:
        "BODY KNOWS is for people who recognize that something needs to change and are curious about exploring that through experience rather than thought alone.",
    },
  ] satisfies FaqItem[],
  cta: {
    headline: "STILL HERE.",
    body: "If the questions are settling rather than multiplying, apply.",
    primaryCta: { label: "APPLY", href: "/apply" },
    secondaryCta: { label: "EXPLORE THE EXPERIENCE", href: "/experience" },
  },
};
