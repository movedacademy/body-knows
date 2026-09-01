import type { MediaAsset } from "@/types/content";

export const media = {
  hero: {
    src: "/images/hero-movement.jpg",
    alt: "A person in full-body movement, mid-reach, in hard studio light.",
  },
  movement: {
    src: "/images/movement-floor.jpg",
    alt: "Floor-based movement in a raw plaster studio, one limb blurred by motion.",
  },
  breath: {
    src: "/images/breath-profile.jpg",
    alt: "Close crop of a face in profile, eyes closed, mid-breath after effort.",
  },
  breathHands: {
    src: "/images/breath-hands.jpg",
    alt: "Hands resting on the chest, attention on breath.",
  },
  challenge: {
    src: "/images/physical-challenge.jpg",
    alt: "A person low to the ground in physical effort in a stone courtyard.",
  },
  running: {
    src: "/images/challenge.jpg",
    alt: "Figures running through hard light and long shadow.",
  },
  reflection: {
    src: "/images/stillness.jpg",
    alt: "A person sitting on a wooden floor in a spare room, looking down.",
  },
  awareness: {
    src: "/images/breath-hands.jpg",
    alt: "Close crop of hands on the ribs, listening through sensation.",
  },
  group: {
    src: "/images/group-session.jpg",
    alt: "A small group in a sunlit studio, each person in their own work.",
  },
  contact: {
    src: "/images/partner-attention.jpg",
    alt: "Two people standing together, one hand placed on the other’s back.",
  },
  founder: {
    src: "/images/founder-portrait.jpg",
    alt: "Portrait of Richard Aceves in a movement studio.",
  },
  stone: {
    src: "/images/mediterranean-stone.jpg",
    alt: "Weathered plaster, stone, and olive shadow in a Mediterranean courtyard.",
  },
  final: {
    src: "/images/final-listen.jpg",
    alt: "A figure standing in a dark doorway, looking out into hard sunlight.",
  },
} satisfies Record<string, MediaAsset>;
