"use client";

import TopRightArrow from "@/public/top-right-arrow.svg";
import Link from "next/link";
import Image from "next/image";
import { portfolios } from "../data/constants";
import SectionContent from "../ui/SectionContent";
import { useCarousel } from "../utils/useCarousel";
import CarouselCard from "../ui/CarouselCard";

export default function Portfolio() {
  const { page, direction, visibleItems, paginate } = useCarousel({
    items: portfolios,
  });

  return (
    <div>
      <SectionContent
        title="Portfolio"
        description="Explore My photography work."
        link={{ title: "View All Works", href: "/portfolio" }}
        arrow
        paginate={paginate}
      >
        <CarouselCard page={page} direction={direction}>
          {visibleItems.map((item) => (
            <div className="w-full" key={item.title}>
              <div
                className={`w-full h-[519px] rounded-[20px] bg-cover bg-center bg-no-repeat`}
                style={{ backgroundImage: `url('${item.image}')` }}
              ></div>
              <div className="mt-5 flex items-center justify-between gap-2">
                <div className="space-y-1">
                  <p className="font-medium text-base lg:text-lg xl:text-xl text-[#CACACE]">
                    {item.title}
                  </p>
                  <span className="font-normal text-sm lg:text-base xl:text-lg text-[#797C86]">
                    {item.date}
                  </span>
                </div>

                <Link href={item.href} className="flex items-center gap-2.5">
                  <span className="font-medium text-sm lg:text-base xl:text-xl text-[#F2F2F3]">
                    View Project
                  </span>
                  <Image src={TopRightArrow} alt="" />
                </Link>
              </div>
            </div>
          ))}
        </CarouselCard>
      </SectionContent>
    </div>
  );
}
