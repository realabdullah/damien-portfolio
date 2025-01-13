"use client";

import { MoveRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { JSX } from "react";

type Props = {
  title: string;
  description?: string;
  link?: {
    title: string;
    href: string;
  };
  arrow?: boolean;
  borderless?: boolean;
  sub?: {
    title: string;
    description: string;
  };
  children?: React.ReactNode;
  padBottom?: boolean;
  paginate?: (newDirection: number) => void;
};

export default function SectionContent({
  title,
  description,
  link,
  arrow,
  borderless,
  sub,
  children,
  paginate,
  padBottom = true,
}: Props) {
  return (
    <div>
      <div
        className={`flex items-start lg:items-center justify-between gap-5
        ${!borderless && "border-b border-[#1C1C21]"}
        ${sub ? "flex-col w-full" : "flex-col lg:flex-row"}
        ${padBottom && "mb-5 lg:mb-10 xl:mb-20 pb-5 lg:pb-10 xl:pb-[50px]"}
      `}
      >
        <div className={`flex flex-col lg:gap-1 ${sub && "w-full"}`}>
          <span className="uppercase font-semibold text-sm lg:text-base xl:text-xl text-[#797C86]">
            {title}
          </span>
          {description && (
            <h2 className="uppercase font-semibold text-[28px]/[38px] lg:text-5xl xl:text-[58px] text-white">
              {description}
            </h2>
          )}
        </div>

        <div
          className={`flex max-lg:flex-col-reverse items-start lg:items-center justify-between gap-3 ${
            sub && "w-full"
          }`}
        >
          {sub && (
            <div className="flex flex-col gap-1">
              <span className="font-normal text-sm lg:text-base xl:text-lg text-[#62646C]">
                {sub.title}
              </span>
              <h2 className="font-medium text-xl lg:text-2xl xl:text-[28px] text-[#CACACE]">
                {sub.description}
              </h2>
            </div>
          )}

          {(arrow || link) && (
            <div className="flex items-center gap-7">
              {arrow && (
                <div className="hidden lg:flex items-center gap-4 rounded-[100px] border border-[#1C1C21] p-2.5">
                  <div
                    className="rounded-[100px] h-12 w-12 bg-gradient-to-r from-[#2F2F37] to-[#2F2F3700] p-[1px]"
                    onClick={() => paginate && paginate(-1)}
                  >
                    <div className="p-[14px] flex items-center justify-center text-white h-full w-full rounded-[100px] bg-[#1C1C21]">
                      <ChevronLeft />
                    </div>
                  </div>
                  <div
                    className="rounded-[100px] h-12 w-12 bg-gradient-to-r from-[#2F2F37] to-[#2F2F3700] p-[1px]"
                    onClick={() => paginate && paginate(1)}
                  >
                    <div className="p-[14px] flex items-center justify-center text-white h-full w-full rounded-[100px] bg-[#1C1C21]">
                      <ChevronRight />
                    </div>
                  </div>
                </div>
              )}

              {link && (
                <Link
                  href={link.href}
                  className="h-[59px] rounded-[10px] bg-gradient-to-r from-[#2F2F37] to-[#2F2F3700] p-[1px] cursor-pointer hover:from-yellow hover:to-white"
                >
                  <div className="flex items-center gap-2 rounded-[10px] font-medium text-sm lg:text-lg text-white py-4 px-6 bg-[#1C1C21] whitespace-nowrap">
                    {link.title}
                    <MoveRight />
                  </div>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {children}

      {arrow && (
        <div className="hidden w-fit mx-auto mt-10 max-lg:flex items-center gap-4 rounded-[100px] border border-[#1C1C21] p-2.5">
          <div
            className="rounded-[100px] h-12 w-12 bg-gradient-to-r from-[#2F2F37] to-[#2F2F3700] p-[1px]"
            onClick={() => paginate && paginate(-1)}
          >
            <div className="p-[14px] flex items-center justify-center text-white h-full w-full rounded-[100px] bg-[#1C1C21]">
              <ChevronLeft />
            </div>
          </div>
          <div
            className="rounded-[100px] h-12 w-12 bg-gradient-to-r from-[#2F2F37] to-[#2F2F3700] p-[1px]"
            onClick={() => paginate && paginate(1)}
          >
            <div className="p-[14px] flex items-center justify-center text-white h-full w-full rounded-[100px] bg-[#1C1C21]">
              <ChevronRight />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
