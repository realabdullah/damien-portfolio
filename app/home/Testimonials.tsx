"use client";

import SectionContent from "../ui/SectionContent";
import { Star } from "lucide-react";
import SocialsBox from "../ui/SocialsBox";
import { testimonials } from "../data/constants";
import type { CardProps } from "../types";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, wrap } from "motion/react";

function Card({ name, address, review, socials }: CardProps) {
  return (
    <div className="h-full relative bg-[#0E0E10] border border-[#1C1C21] rounded-xl px-10 py-[45.5px] flex flex-col gap-[30px] overflow-hidden isolate">
      <div className="flex items-center flex-wrap gap-6 justify-between">
        <div className="flex flex-col">
          <p className="font-medium text-xl text-[#E4E4E6]">{name}</p>
          <span className="font-normal text-lg text-[#62646C]">{address}</span>
        </div>

        <SocialsBox socials={socials} />
      </div>

      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <p className="flex-1 font-medium text-xl text-[#E4E4E6]">{review}</p>

      {/* bg */}
      <div className="absolute -right-[100px] -top-[133px] h-[300px] w-[300px] rounded-[22px] bg-card-gradient -rotate-45 -z-10"></div>
    </div>
  );
}

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

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const getVisibleTestimonials = () => {
    const totalItems = testimonials.length;
    const baseIndex = wrap(0, totalItems, page);

    if (isMobile) {
      return [testimonials[baseIndex]];
    }

    return [
      testimonials[baseIndex],
      testimonials[wrap(0, totalItems, baseIndex + 1)],
      testimonials[wrap(0, totalItems, baseIndex + 2)],
    ];
  };

  return (
    <div className="">
      <SectionContent
        title="Testimonials"
        description="What My Clients Say"
        sub={{ title: "Total Reviews", description: "323" }}
        link={{ title: "View All Testimonials", href: "/testimonials" }}
        arrow
        contentElement={
          <div className="w-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
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
                className="grid grid-cols-1 lg:grid-cols-3 gap-7"
              >
                {getVisibleTestimonials().map((testimonial, index) => (
                  <Card key={`${page}-${index}`} {...testimonial} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        }
        paginate={paginate}
      />
    </div>
  );
}
