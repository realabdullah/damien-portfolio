import { ChevronLeft, ChevronRight } from "lucide-react";
import ServicesHero from "./Hero";
import AsterikBlack from "@/public/asterik-black.svg";
import TopRightArrow from "@/public/top-right-arrow.svg";
import Link from "next/link";
import Image from "next/image";
import { servicesPricing } from "../data/constants";

export default function ServicesPage() {
  return (
    <div className="w-full max-w-[2000px] mx-auto px-4 lg:px-[8.44vw]">
      <ServicesHero />

      <div className="mt-20 lg:mt-[150px] xl:mt-[200px] max-lg:space-y-5">
        {servicesPricing.map((pricing, index) => (
          <>
            <div
              key={index}
              className="border-y border-[#1C1C21] pt-[30px] pb-[30px] lg:pb-[60px] xl:pb-[80px] lg:pt-[60px] xl:pt-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-[40%,60%] gap-[30px] lg:gap-10">
                <div className="xl:space-y-10">
                  <h3 className="uppercase font-semibold xl:text-[34px]/[46px] text-[#797C86]">
                    {pricing.heading}
                  </h3>

                  <p className="font-normal xl:text-base text-[#797C86]">
                    {pricing.content}
                  </p>

                  <Link
                    href={pricing.link}
                    className="w-fit flex items-center gap-2.5 border-b border-[#1C1C21] pb-[2px]"
                  >
                    <span className="uppercase font-medium text-sm lg:text-base xl:text-xl text-[#F2F2F3]">
                      View Projects
                    </span>
                    <Image src={TopRightArrow} alt="" />
                  </Link>
                </div>

                <div className="h-[345px] rounded-2xl bg-cover bg-center bg-no-repeat max-lg:pb-5">
                  <div
                    className="relative w-full h-full rounded-[20px] bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${pricing.image})`,
                    }}
                  >
                    <div className="absolute transform -translate-x-1/2 translate-y-0 bottom-[-10%] left-1/2 w-fit flex items-center gap-4 rounded-[100px] border border-[#1C1C21] p-2.5">
                      <div className="rounded-[100px] h-12 w-12 bg-gradient-to-r from-[#2F2F37] to-[#2F2F3700] p-[1px]">
                        <div className="p-[14px] flex items-center justify-center text-white h-full w-full rounded-[100px] bg-[#1C1C21]">
                          <ChevronLeft />
                        </div>
                      </div>
                      <div className="rounded-[100px] h-12 w-12 bg-gradient-to-r from-[#2F2F37] to-[#2F2F3700] p-[1px]">
                        <div className="p-[14px] flex items-center justify-center text-white h-full w-full rounded-[100px] bg-[#1C1C21]">
                          <ChevronRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {pricing.ranges.map((range, idx) => (
              <div
                key={idx}
                className="border-b border-[#1C1C21] pb-10 lg:py-[60px] xl:py-20 grid grid-cols-1 md:grid-cols-[33%,67%] items-center gap-[30px] lg:gap-10 xl:gap-20"
              >
                <div className="">
                  <p className="font-medium text-base xl:text-[22px] text-[#CACACE]">
                    {range.title}
                  </p>
                  <div className="flex items-center justify-between md:justify-normal gap-2 lg:gap-3 xl:gap-5">
                    <h1 className="font-medium text-[34px]/[51px] lg:text-[50px]/[75px] xl:text-[80px]/[120px] text-[#CACACE]">
                      {range.price}
                    </h1>
                    <Link
                      href="/"
                      className="w-fit flex items-center gap-2.5 border-b border-[#1C1C21] pb-[2px]"
                    >
                      <span className="uppercase font-medium text-sm xl:text-lg text-[#F2F2F3] whitespace-nowrap">
                        Book a Call
                      </span>
                      <Image src={TopRightArrow} alt="" />
                    </Link>
                  </div>
                </div>

                <ul className="w-full space-y-2.5">
                  {range.points.map((point, key) => (
                    <li
                      key={key}
                      className="w-full flex items-center gap-2.5 uppercase font-normal text-sm lg:text-lg text-[#AFB0B6] border border-[#1C1C21] p-[14px] lg:py-[18px] lg:px-5 rounded-xl"
                    >
                      <Image
                        src={AsterikBlack}
                        className="text-[#474752]"
                        color="#474752"
                        alt=""
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
}
