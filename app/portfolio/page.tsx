import Marquees from "../home/Marquees";
import PortfolioHero from "./Hero";

import InfinityParker from "@/public/portfolio/infinity-parker.svg";
import OmegaMillion from "@/public/portfolio/omega-million.svg";
import WheelApp from "@/public/portfolio/wheelapp.svg";
import HighCountryClub from "@/public/portfolio/high-country-club.svg";
import EdgeKart from "@/public/portfolio/edge-kart.svg";
import Image from "next/image";
import PortfolioPortraits from "./Potraits";
import PortfolioEvents from "./Events";
import PortfolioCommercial from "./Commercial";
import FAQs from "../home/FAQs";

export default function AboutPage() {
  const portfolioItems = [
    InfinityParker,
    OmegaMillion,
    WheelApp,
    HighCountryClub,
    EdgeKart,
  ];

  return (
    <>
      <div className="space-y-20 lg:space-y-[150px] xl:space-y-[200px]">
        <div className="w-full max-w-[2000px] mx-auto px-4 lg:px-[8.44vw]">
          <PortfolioHero />
        </div>

        <div className="pb-20 lg:pb-[100px] xl:pb-[150px] xl:mt-20">
          <h5 className="pb-[14px] xl:pb-[18px] uppercase font-medium text-base text-[#797C86] text-center">
            bRANDS i hAVE wORKED wITH
          </h5>

          <Marquees>
            <>
              {portfolioItems.map((item, index) => (
                <Image key={index} src={item} alt="portfolio item" />
              ))}

              {portfolioItems.map((item, index) => (
                <Image key={index} src={item} alt="portfolio item" />
              ))}

              {portfolioItems.map((item, index) => (
                <Image key={index} src={item} alt="portfolio item" />
              ))}
            </>
          </Marquees>
        </div>
      </div>

      <div className="w-full max-w-[2000px] mx-auto px-4 lg:px-[8.44vw]">
        <div className="pt-10 lg:pt-[60px] xl:pt-20 border-t border-[#1C1C21]"></div>
        <div className="space-y-10 lg:space-y-[60px] xl:space-y-20">
          <PortfolioPortraits />
          <PortfolioEvents />
          <PortfolioCommercial />
          <FAQs />
        </div>
      </div>
    </>
  );
}
