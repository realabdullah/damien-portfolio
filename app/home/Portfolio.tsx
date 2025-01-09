"use client";

import TopRightArrow from "@/public/top-right-arrow.svg";
import Link from "next/link";
import Image from "next/image";
import { portfolios } from "../data/constants";
import SectionContent from "../ui/SectionContent";
import { motion, wrap } from "motion/react";
import { useState, useEffect } from "react";

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

export default function Portfolio() {
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

  const getVisiblePortfolios = () => {
    const totalItems = portfolios.length;
    const baseIndex = wrap(0, totalItems, page);

    if (isMobile) {
      return [portfolios[baseIndex]];
    }

    return [
      portfolios[baseIndex],
      portfolios[wrap(0, totalItems, baseIndex + 1)],
      portfolios[wrap(0, totalItems, baseIndex + 2)],
    ];
  };

  return (
    <div>
      <SectionContent
        title="Portfolio"
        description="Explore My photography work."
        link={{ title: "View All Works", href: "/portfolio" }}
        arrow
        contentElement={
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
            {getVisiblePortfolios().map((portfolio) => (
              <div className="w-full" key={portfolio.title}>
                <div
                  className={`w-full h-[519px] rounded-[20px] bg-cover bg-center bg-no-repeat`}
                  style={{ backgroundImage: `url('${portfolio.image}')` }}
                ></div>
                <div className="mt-5 flex items-center justify-between gap-2">
                  <div className="space-y-1">
                    <p className="font-medium text-base lg:text-lg xl:text-xl text-[#CACACE]">
                      {portfolio.title}
                    </p>
                    <span className="font-normal text-sm lg:text-base xl:text-lg text-[#797C86]">
                      {portfolio.date}
                    </span>
                  </div>

                  <Link
                    href={portfolio.href}
                    className="flex items-center gap-2.5"
                  >
                    <span className="font-medium text-sm lg:text-base xl:text-xl text-[#F2F2F3]">
                      View Project
                    </span>
                    <Image src={TopRightArrow} alt="" />
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        }
        paginate={paginate}
      />
    </div>
  );
}
