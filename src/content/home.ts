import { media } from "@/content/media";
import type { ExploreItem, ExperienceVisual } from "@/types/content";

export const home = {
  hero: {
    descriptor: "Movement. Breath. Transformation.",
    title: "Your body knows things your mind hasn’t figured out yet.",
    body: "An immersive experience for people who know something needs to change—but haven’t been able to change it through thinking alone.",
    primaryCta: {
      label: "APPLY FOR THE NEXT IMMERSION",
      href: "/apply",
    },
    secondaryCta: {
      label: "EXPLORE THE EXPERIENCE",
      href: "/experience",
    },
    image: media.hero,
  },
  tension: {
    statement: "YOU CAN KNOW SOMETHING\nAND STILL NOT CHANGE IT.",
    body: [
      "Understand it. Talk about it. Analyze it. Repeat it.",
      "BODY KNOWS takes you out of the conversation and into experience.",
    ],
  },
  experience: {
    eyebrow: "THE EXPERIENCE",
    headline: "This is not a retreat to escape your life.",
    body: [
      "Movement. Breath. Meditation. Physical challenge. Individual exploration. Reflection. Integration.",
      "BODY KNOWS creates space to step outside your usual patterns long enough to experience yourself differently.",
    ],
    visuals: [
      { title: "Movement", image: media.movement },
      { title: "Breath", image: media.breath },
      { title: "Physical challenge", image: media.challenge },
      { title: "Reflection", image: media.reflection },
      { title: "Individual awareness", image: media.awareness },
      { title: "Group environment", image: media.group },
    ] satisfies ExperienceVisual[],
    cta: { label: "EXPLORE THE EXPERIENCE", href: "/experience" },
  },
  explore: {
    eyebrow: "WHAT WE EXPLORE",
    headline: "The work is physical.\nThe questions are yours.",
    items: [
      {
        title: "The Body",
        body: "Awareness through sensation: tension, stress, fear, breath, and effort.",
      },
      {
        title: "Patterns",
        body: "The habits of control, avoidance, performance, fear, and repetition.",
      },
      {
        title: "Movement",
        body: "Not fitness. Not performance. A pathway into experience.",
      },
      {
        title: "Breath",
        body: "An entry point into physical awareness and presence.",
      },
      {
        title: "Resistance",
        body: "The urge to stop, avoid, control, escape, or push through.",
      },
      {
        title: "Change",
        body: "The difference between knowing something and experiencing it.",
      },
    ] satisfies ExploreItem[],
  },
  who: {
    id: "who-its-for",
    headline: "FOR PEOPLE AT A CROSSROADS.",
    intro:
      "You may be successful, capable, and self-aware. You may also know that something is not working.",
    items: [
      "You feel stuck in a pattern you understand but keep repeating.",
      "You are burned out, disconnected, or in transition.",
      "You have tried talking, reading, analyzing, traveling, exercising, or working harder.",
      "You are looking for something more experiential.",
      "You are ready to be challenged—not entertained.",
    ],
    closing: "You do not need to have the answer. You need to be willing to look.",
  },
  whoNot: {
    headline: "THIS MAY NOT BE WHAT YOU EXPECT.",
    body: "BODY KNOWS is not a spa weekend, a yoga retreat, a fitness camp, traditional therapy, or a promise that someone else can change your life for you.",
    supporting:
      "It is a physical, individualized experience for people willing to participate fully.",
    image: media.stone,
  },
  founder: {
    eyebrow: "FOUNDER",
    headline:
      "Richard Aceves works with what happens when thinking is no longer enough.",
    body: [
      "Richard is a movement coach and educator whose work explores the relationship between physical experience, awareness, effort, and change.",
      "BODY KNOWS brings this work into an immersive environment: one designed to challenge familiar patterns and make room for a different kind of attention.",
    ],
    quote: "Your body has been adapting to your life. What happens when you listen?",
    cta: { label: "ABOUT RICHARD", href: "/about" },
    image: media.founder,
  },
  application: {
    headline: "SOMETHING NEEDS TO CHANGE.",
    body: "The next BODY KNOWS immersion is for a small group of people ready to step outside their usual environment and participate fully.",
    comingSoon: "Next immersion details coming soon.",
    primaryCta: {
      label: "APPLY FOR THE NEXT IMMERSION",
      href: "/apply",
    },
    secondaryCta: {
      label: "JOIN THE WAITLIST",
      href: "/apply#waitlist",
    },
  },
  finalCta: {
    headline: "CAN YOU LISTEN?",
    cta: { label: "EXPLORE BODY KNOWS", href: "/experience" },
    image: media.final,
  },
};
