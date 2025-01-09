import TopRightArrow from "@/public/top-right-arrow.svg";
import Link from "next/link";
import Image from "next/image";
import { portfolios } from "../data/constants";
import SectionContent from "../ui/SectionContent";

export default function Portfolio() {
  return (
    <div>
      <SectionContent
        title="Portfolio"
        description="Explore My photography work."
        link={{ title: "View All Works", href: "/portfolio" }}
        arrow
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {portfolios.map((portfolio) => (
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

              <Link href={portfolio.href} className="flex items-center gap-2.5">
                <span className="font-medium text-sm lg:text-base xl:text-xl text-[#F2F2F3]">
                  View Project
                </span>
                <Image src={TopRightArrow} alt="" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
