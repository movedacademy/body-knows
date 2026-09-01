import { media } from "@/content/media";
import type { ExperienceComponent } from "@/types/content";

export const experience = {
  hero: {
    eyebrow: "THE EXPERIENCE",
    title: "A physical way into awareness.",
    body: "BODY KNOWS is an immersive transformational movement experience for people who know something needs to change—but have not been able to change it through thought alone.",
    cta: { label: "APPLY", href: "/apply" },
    image: media.movement,
  },
  intro: {
    eyebrow: "HOW IT WORKS",
    headline: "Not a program to complete.\nA set of conditions to enter.",
    body: "The days are built from movement, breath, stillness, challenge, and attention. The structure is held. What you meet inside it is yours.",
  },
  components: [
    {
      id: "movement",
      title: "Movement",
      body: "The body is asked to move in ways that interrupt habit. Not to perform. Not to get fit. To notice what shows up when the usual strategies are unavailable.",
      image: media.movement,
    },
    {
      id: "breath",
      title: "Breath",
      body: "Breath is used as an entry point—something you can feel. Attention moves from analysis into sensation: where it is easy, where it is held, where it wants to leave.",
      image: media.breath,
    },
    {
      id: "meditation",
      title: "Meditation",
      body: "Periods of stillness sit alongside physical work. Not as an escape from the body, but as another way of staying with what is already happening.",
      image: media.reflection,
    },
    {
      id: "challenge",
      title: "Physical challenge",
      body: "Effort is part of the design. Challenge reveals the urge to stop, control, perform, or push through. The work is to stay present with that—not to win at it.",
      image: media.challenge,
    },
    {
      id: "individual",
      title: "Individual exploration",
      body: "The group is small so the work can be specific. You are not asked to follow a script. You are asked to participate, pay attention, and work with what is true for you.",
      image: media.contact,
    },
    {
      id: "reflection",
      title: "Reflection",
      body: "Time is given to name what you noticed. Not to explain it away. Not to be told what it means. To let experience have language without replacing the experience.",
      image: media.awareness,
    },
    {
      id: "integration",
      title: "Integration",
      body: "The immersion ends. Life does not. Integration is the attention you take with you—not a prescription for who to become when you leave.",
      image: media.final,
    },
  ] satisfies ExperienceComponent[],
  keyMessage: {
    statement: "Each person’s experience is different.",
    body: "The point is not to perform, achieve, or become someone else. The point is to participate and pay attention.",
  },
  gallery: [media.group, media.breath, media.challenge, media.stone, media.contact, media.running],
  cta: {
    headline: "SOMETHING NEEDS TO CHANGE.",
    body: "If this is landing, the next step is not more reading. It is an application.",
    primaryCta: { label: "APPLY FOR THE NEXT IMMERSION", href: "/apply" },
    secondaryCta: { label: "JOIN THE WAITLIST", href: "/apply#waitlist" },
  },
};
