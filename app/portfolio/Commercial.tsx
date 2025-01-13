"use client";

import { Link } from "lucide-react";
import { commercialPhotography } from "../data/constants";
import TopRightArrow from "@/public/top-right-arrow.svg";
import SectionContent from "../ui/SectionContent";
import Image from "next/image";
import { useCarousel } from "../utils/useCarousel";
import CarouselCard from "../ui/CarouselCard";

export default function CommercialPhotography() {
  const { page, direction, visibleItems, paginate } = useCarousel({
    items: commercialPhotography,
  });

  return (
    <div>
      <SectionContent
        title="Commercial Photography"
        borderless
        arrow
        padBottom={false}
        paginate={paginate}
      >
        <div className="mt-5 lg:mt-10 xl:mt-[50px] pb-10 lg:pb-[60px] xl:pb-20 border-b border-[#1C1C21]">
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
        </div>
      </SectionContent>
    </div>
  );
}
