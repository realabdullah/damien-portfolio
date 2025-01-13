import { motion } from "motion/react";
import React from "react";

type Props = {
  children: React.ReactNode;
  page: number;
  direction: number;
};

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 500 : -500,
  }),
  center: {
    x: 0,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -500 : 500,
  }),
};

export default function CarouselCard({ children, page, direction }: Props) {
  return (
    <motion.div
      key={page}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-5"
    >
      {children}
    </motion.div>
  );
}
