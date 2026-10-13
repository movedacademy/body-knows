import { media } from "@/content/media";
import type { FaqItem, MediaAsset } from "@/types/content";

/**
 * Photography for this page comes from the BODY KNOWS Drive folder
 * "Italy Retreat 2027" (id 1uZbnHmy3rhOX28ytem-KTjaE9mHJljFO).
 * Web files live in public/images/italy. EXIF, including location, is stripped.
 *
 * Slot map (Drive filename → public file):
 * - facade.avif → hero.jpg (also the mobile hero and Open Graph source)
 * - Copy of IMG_6024.JPG → opening.jpg
 * - Copy of IMG_5992.JPG → movement.jpg
 * - Copy of IMG_6050.JPG → breath.jpg
 * - Copy of IMG_6022.JPG → challenge.jpg
 * - Copy of IMG_5927.JPG → individual.jpg
 * - Copy of IMG_6028.JPG → reflection.jpg
 * - exterior 2.avif → place-house.jpg
 * - balcony.avif → place-balcony.jpg
 * - dining tble.avif → place-communal.jpg
 * - arial view.avif → place-land.jpg
 * - views!!!.avif → final.jpg
 *
 * Several property files in that folder are already small exports
 * (720px or 1200px on the long edge). They are used as supplied.
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
    primaryCta: { label: "APPLY FOR ITALY", href: "#apply" },
    secondaryCta: { label: "EXPLORE THE EXPERIENCE", href: "#experience" },
    image: italyImage(
      "/images/italy/hero.jpg",
      "Stone facade of the house in Cossano, with a wooden door, a bench, and shuttered windows in hard daylight.",
      "object-center",
    ),
    mobileImage: italyImage(
      "/images/italy/hero.jpg",
      "Stone facade of the house in Cossano, with a wooden door, a bench, and shuttered windows in hard daylight.",
      "object-center",
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
      "A close view of a man with his hand against his face, seated above wooded hills.",
      "object-[center_58%] lg:object-center",
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
          "A man lifting a sandbag overhead on a grassy slope, trees and hills behind him.",
          "object-center",
        ),
        span: "lg:col-span-7",
      },
      {
        title: "Breath",
        body: "An entry point into attention and presence.",
        image: italyImage(
          "/images/italy/breath.jpg",
          "People sitting on the grass at the edge of a stone terrace, facing wooded hills.",
          "object-[center_62%]",
        ),
        span: "lg:col-span-5",
      },
      {
        title: "Physical challenge",
        body: "A chance to notice resistance, control, avoidance, and choice.",
        image: italyImage(
          "/images/italy/challenge.jpg",
          "A man pressing a sandbag overhead beside a vineyard, another person's hands visible in the foreground.",
          "object-[center_30%]",
        ),
        span: "lg:col-span-4",
      },
      {
        title: "Individual exploration",
        body: "Each person’s experience is different.",
        image: italyImage(
          "/images/italy/individual.jpg",
          "A person writing in a notebook outdoors, seen from above, in hard sunlight.",
          "object-[center_58%]",
        ),
        span: "lg:col-span-4",
      },
      {
        title: "Reflection and integration",
        body: "Space to make meaning of what you experienced.",
        image: italyImage(
          "/images/italy/reflection.jpg",
          "A man writing in a notebook at a wooden table beneath a brick arch, hills beyond.",
          "object-center",
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
    note: "Full travel and practical details will be shared with accepted applicants.",
    images: [
      italyImage(
        "/images/italy/place-house.jpg",
        "The stone house in Cossano, with a tiled roof, above a gravel court and vineyards.",
        "object-[center_34%] sm:object-[center_26%] lg:object-[center_36%]",
      ),
      italyImage(
        "/images/italy/place-balcony.jpg",
        "A covered stone walkway with folding chairs and hard afternoon shadow.",
        "object-center",
      ),
      italyImage(
        "/images/italy/place-communal.jpg",
        "A long wooden table in a room with stone columns and tall windows looking onto trees.",
        "object-bottom",
      ),
      italyImage(
        "/images/italy/place-land.jpg",
        "Terraced vineyards and wooded hills in low light, with a small stone building on the ridge.",
        "object-[center_62%]",
      ),
    ],
  },
  founder: {
    headline: "LED BY RICHARD ACEVES",
    body: "Richard works at the intersection of movement, physical challenge, breath, and human behavior. BODY KNOWS is built around a simple premise: insight matters, but experience can reveal what thought alone cannot.",
    image: media.founder,
  },
  apply: {
    id: "apply",
    headline: "APPLY FOR ITALY",
    body: [
      "BODY KNOWS is a small, personal experience. The application is the first conversation—not a test.",
      "Tell us what is bringing you here. After applying, you’ll have the option to book a short call or hear from us directly.",
    ],
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
        question: "What happens after I apply?",
        answer:
          "We review your application. You will have the option to book a short call, and we will contact you directly if appropriate.",
      },
    ] satisfies FaqItem[],
  },
  finalCta: {
    headline: "CAN YOU LISTEN?",
    detail: "July 5–9, 2027 · Cossano, Italy",
    cta: { label: "APPLY FOR ITALY", href: "#apply" },
    image: italyImage(
      "/images/italy/final.jpg",
      "Vineyard rows and layered hills under a bright sun.",
      "object-[center_68%]",
    ),
  },
};
