import {
  italyCheckoutLinks,
  italyTicketHref,
  italyTicketSectionId,
  type ItalyCheckoutKey,
} from "@/content/italy-checkout";
import { media } from "@/content/media";
import type { FaqItem, MediaAsset } from "@/types/content";

/**
 * Photography for this page comes from the BODY KNOWS Drive folder
 * "Italia - June 2026" (id 1xpQz06K-oLn-DZWsWykw_K4kqAEjm65h).
 * Web files live in public/images/italy. EXIF, including location, is stripped.
 *
 * Slot map (Drive filename → public file):
 * - C62AAFF1-F87D-48B9-A5CC-9806C888F469.JPG → hero.jpg (Open Graph source)
 * - IMG_6100.JPG → hero-mobile.jpg
 * - IMG_6024.JPG → opening.jpg
 * - IMG_5968.JPG → movement.jpg
 * - IMG_6265.JPG → breath.jpg
 * - IMG_6018.JPG → challenge.jpg
 * - IMG_6047.JPG → individual.jpg
 * - IMG_6028.JPG → reflection.jpg
 * - 2DB1B4DE-908C-4200-A8E2-90D22B1B8908.JPG → place-terrace.jpg
 * - IMG_6053.JPG → place-seated.jpg
 * - IMG_6248.JPG → place-hills.jpg (source file is smaller than the others)
 * - IMG_6008.JPG → place-stone.jpg
 * - IMG_5963.JPG → final.jpg
 *
 * Founder portrait is the existing confirmed photograph of Richard Aceves.
 * The Drive folder has no file identified as him.
 */
const italyImage = (
  src: string,
  alt: string,
  position = "object-center",
): MediaAsset & { position: string } => ({ src, alt, position });

export const italy = {
  metadata: {
    title: "BODY KNOWS Italy | July 5–9, 2027",
    description:
      "An immersive movement, breath, and transformation experience in Cossano, Italy.",
  },
  hero: {
    eyebrow: "BODY KNOWS — ITALY",
    title: [
      "YOUR BODY KNOWS",
      "THINGS YOUR MIND",
      "HASN’T FIGURED OUT YET.",
    ],
    supporting:
      "An immersive movement, breath, and transformation experience for people who know something needs to change—but haven’t been able to change it through thinking alone.",
    detail: "Cossano, Italy · July 5–9, 2027",
    primaryCta: { label: "RESERVE YOUR PLACE", href: italyTicketHref() },
    secondaryCta: { label: "HAVE QUESTIONS? BOOK A CALL", href: "#calendar" },
    textLink: { label: "EXPLORE THE EXPERIENCE", href: "#experience" },
    image: italyImage(
      "/images/italy/hero.jpg",
      "Participants lying on a stone terrace in the hills, working with breath while a facilitator stands nearby.",
      "object-[center_42%]",
    ),
    mobileImage: italyImage(
      "/images/italy/hero-mobile.jpg",
      "A participant crouched over a sandbag on a grassy slope, another person resting behind him, wooded hills beyond.",
      "object-[center_30%]",
    ),
  },
  opening: {
    id: "opening",
    statement: "YOU CAN KNOW SOMETHING\nAND STILL NOT CHANGE IT.",
    body: [
      "You can understand it. Talk about it. Analyze it. Repeat it.",
      "BODY KNOWS takes you out of the conversation and into experience.",
    ],
    image: italyImage(
      "/images/italy/opening.jpg",
      "A close view of a participant with a hand against his face, seated above a wooded valley.",
      "object-[70%_center]",
    ),
  },
  definition: {
    headline: "THIS IS NOT A RETREAT TO ESCAPE YOUR LIFE.",
    body: [
      "BODY KNOWS creates an environment to explore through movement, breath, effort, awareness, reflection, and physical challenge.",
      "It is an opportunity to step outside your normal patterns long enough to experience yourself differently.",
    ],
    is: {
      label: "What it is",
      items: ["Physical", "Experiential", "Individualized", "Challenging", "Grounded"],
    },
    isNot: {
      label: "What it is not",
      items: [
        "A yoga retreat",
        "A spa retreat",
        "A fitness camp",
        "Traditional therapy",
        "A vacation",
        "A promise to fix you",
      ],
    },
  },
  experience: {
    id: "experience",
    headline: "WHAT YOU’LL STEP INTO",
    items: [
      {
        title: "Movement",
        body: "Not fitness or performance; a pathway to awareness.",
        image: italyImage(
          "/images/italy/movement.jpg",
          "A participant in a wide stance on a grassy slope, working with movement against a forested hillside.",
          "object-[center_82%]",
        ),
        span: "lg:col-span-7",
      },
      {
        title: "Breath",
        body: "An entry point into attention and presence.",
        image: italyImage(
          "/images/italy/breath.jpg",
          "A person lying on dry grass with arms open, hills beyond a wooden fence.",
          "object-[center_58%]",
        ),
        span: "lg:col-span-5",
      },
      {
        title: "Physical challenge",
        body: "A chance to notice resistance, control, avoidance, and choice.",
        image: italyImage(
          "/images/italy/challenge.jpg",
          "A close view of a participant folded forward in physical effort, hills behind.",
          "object-[center_40%]",
        ),
        span: "lg:col-span-4",
      },
      {
        title: "Individual exploration",
        body: "Each person’s experience is different.",
        image: italyImage(
          "/images/italy/individual.jpg",
          "A person sitting alone under a tree, facing a wooded valley.",
          "object-[center_45%]",
        ),
        span: "lg:col-span-4",
      },
      {
        title: "Reflection and integration",
        body: "Space to make meaning of what you experienced.",
        image: italyImage(
          "/images/italy/reflection.jpg",
          "A participant writing at a wooden table beneath a stone arch, looking toward the hills.",
          "object-[center_42%]",
        ),
        span: "lg:col-span-4",
      },
    ],
  },
  who: {
    headline: "YOU MAY BE HERE BECAUSE…",
    items: [
      "Something isn’t working.",
      "You understand the pattern, but still repeat it.",
      "You are successful in ways that no longer feel like enough.",
      "You are in transition, carrying stress physically, or feeling disconnected from yourself.",
      "You are tired of thinking about the problem and ready to experience something different.",
    ],
    closing:
      "This experience asks for curiosity, honesty, and a willingness to participate fully.",
  },
  place: {
    headline: "COSSANO, ITALY",
    body: "Five days away from the usual environment. Long enough to interrupt familiar momentum. Close enough to what matters to notice what is usually missed.",
    detail: "July 5–9, 2027 · Cossano, Italy",
    note: "Full travel and practical details will be shared with participants.",
    images: [
      italyImage(
        "/images/italy/place-terrace.jpg",
        "Participants on a stone terrace above the hills, between efforts.",
        "object-[center_45%]",
      ),
      italyImage(
        "/images/italy/place-hills.jpg",
        "Wooded hills and vine rows outside Cossano.",
        "object-center",
      ),
      italyImage(
        "/images/italy/place-stone.jpg",
        "Cracked stone paving in hard daylight.",
        "object-center",
      ),
      italyImage(
        "/images/italy/place-seated.jpg",
        "People sitting along a fence line, facing the valley.",
        "object-center",
      ),
    ],
  },
  founder: {
    headline: "LED BY RICHARD ACEVES",
    body: "Richard works at the intersection of movement, physical challenge, breath, and human behavior. BODY KNOWS is built around a simple premise: insight matters, but experience can reveal what thought alone cannot.",
    image: media.founder,
  },
  pricing: {
    id: italyTicketSectionId,
    eyebrow: "Italy",
    headline: "RESERVE YOUR PLACE",
    intro:
      "Choose the room arrangement that works for you. Each option takes you directly to secure checkout.",
    questionsLink: {
      label: "Have questions before booking? Talk with us first.",
      href: "#calendar",
    },
    options: [
      {
        id: "one-participant-private-room",
        title: "1 Participant / Private Room",
        price: "$3,794.40 USD",
        label: "Early Bird — 10% Off",
        description:
          "Participation in BODY KNOWS for one person, with a private room.",
        button: "Reserve My Private Room",
        checkoutKey: "oneParticipantPrivateRoom",
      },
      {
        id: "one-participant-shared-room",
        title: "1 Participant / Shared Room",
        price: "$3,359.70 USD",
        label: "Early Bird — 10% Off",
        description:
          "Participation in BODY KNOWS for one person, with a shared room.",
        button: "Reserve My Shared Room",
        checkoutKey: "oneParticipantSharedRoom",
      },
      {
        id: "two-participants-private-room",
        title: "2 Participants / Private Room",
        price: "$3,344.40 USD",
        perPerson: true,
        total: "Total: $6,688.80 USD for two participants",
        label: "Early Bird — 10% Off",
        description:
          "Participation in BODY KNOWS for two people sharing one private room. One purchase covers both participants.",
        button: "Reserve for Two",
        checkoutKey: "twoParticipantsPrivateRoom",
      },
    ] satisfies Array<{
      id: string;
      title: string;
      price: string;
      perPerson?: boolean;
      total?: string;
      label: string;
      description: string;
      button: string;
      checkoutKey: ItalyCheckoutKey;
    }>,
    checkout: italyCheckoutLinks,
  },
  questions: {
    id: "questions",
    headline: "CURIOUS, BUT HAVE QUESTIONS?",
    body: [
      "You might want to know more about the physical work, the setting, or whether BODY KNOWS is right for you.",
      "Book a call with us. Ask what you need to ask before deciding.",
    ],
    calendar: {
      id: "calendar",
      title: "Book a call with Richard Aceves",
      src: "https://scheduler.zoom.us/richard-aceves/bodyknows?embedStyle=%7B%22backgroundColor%22%3A%22%23d6d1c5%22%2C%22buttonColor%22%3A%22%23485958%22%7D&embed=true",
    },
    supporting:
      "Prefer that we contact you? Leave your details and tell us what you’d like to know.",
    inquiry: {
      id: "inquiry",
      nameLabel: "Name",
      emailLabel: "Email",
      phoneLabel: "Phone (optional)",
      questionLabel: "What would you like to know?",
      consent: "I agree to be contacted about my questions.",
      submit: "GET IN TOUCH",
      confirmation: "Thanks for getting in touch. We’ll respond to your questions.",
    },
  },
  faq: {
    headline: "FAQ",
    items: [
      {
        question: "Is BODY KNOWS therapy?",
        answer:
          "BODY KNOWS is not psychotherapy. It is an experiential movement and breath-based immersion designed around physical awareness, exploration, and personal reflection.",
      },
      {
        question: "Is this a fitness retreat?",
        answer:
          "No. Movement is part of the experience, but athletic performance is not the goal.",
      },
      {
        question: "Is this spiritual?",
        answer:
          "BODY KNOWS is grounded in physical experience, movement, breath, and awareness rather than spiritual or religious practice.",
      },
      {
        question: "Is this an ayahuasca or psychedelic retreat?",
        answer: "No. BODY KNOWS does not provide ayahuasca or psychedelic substances.",
      },
      {
        question: "What will happen to me?",
        answer:
          "Each person’s experience is different. BODY KNOWS is designed to create conditions for exploration, challenge, and reflection; it does not promise a specific outcome.",
      },
      {
        question: "Can I speak with someone before booking?",
        answer:
          "Yes. Book a call or send us your questions before deciding. If you’re ready, you can reserve your place directly on this page.",
      },
    ] satisfies FaqItem[],
  },
  finalCta: {
    headline: "CAN YOU LISTEN?",
    detail: "July 5–9, 2027 · Cossano, Italy",
    cta: { label: "RESERVE YOUR PLACE", href: italyTicketHref() },
    secondaryCta: { label: "HAVE QUESTIONS? BOOK A CALL", href: "#calendar" },
    image: italyImage(
      "/images/italy/final.jpg",
      "A participant standing with his back to the camera, looking out over the hills.",
      "object-[center_22%]",
    ),
  },
};
