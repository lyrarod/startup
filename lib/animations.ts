import { Variants } from "framer-motion";

export const fadeIn = (
  x: number = 0,
  y: number = 0,
  delay: number = 0,
  duration: number = 0.75
): Variants => {
  return {
    initial: {
      x,
      y,
      opacity: 0,
    },

    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration,
        ease: "easeInOut",
        opacity: { duration: 1 },
      },
    },
  };
};
