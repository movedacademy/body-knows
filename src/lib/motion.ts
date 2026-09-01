export const easeEditorial = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const revealTransition = (delay = 0) => ({
  duration: 0.8,
  delay,
  ease: easeEditorial,
});
