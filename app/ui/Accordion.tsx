"use client";

import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Props = {
  shouldOpen?: boolean;
  title: string;
  description: string;
};

export default function Accordion({ title, description, shouldOpen }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(shouldOpen || false);

  return (
    <div className="py-5 lg:py-6 xl:py-[60px] px-6 lg:px-10 border-t border-[#1C1C21] flex flex-col">
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        layout
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          cursor: "pointer",
          gap: "10px",
        }}
      >
        <p className="font-semibold text-base lg:text-lg xl:text-xl text-[#AFB0B6] text-left">
          {title}
        </p>
        <div className="text-white border border-[#1C1C21] rounded-[100px] flex items-center justify-center p-2.5">
          <ChevronDown
            className={`${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-all duration-500`}
          />
        </div>
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            layout
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                height: "auto",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              collapsed: {
                opacity: 0,
                height: 0,
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
          >
            <p className="mt-5 lg:mt-[30px] font-normal text-sm lg:text-base xl:text-lg text-[#797C86]">
              {description}
            </p>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
