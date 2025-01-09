import AsterikBlack from "@/public/asterik-black.svg";
import TopRightArrow from "@/public/top-right-arrow.svg";
import Image from "next/image";
import SectionContent from "../ui/SectionContent";

export default function Services() {
  const serviceHighlights = [
    "Coverage for weddings, parties, corporate functions, and more.",
    "Skilled photographers who know how to seize the moment.",
    "A mix of candid and posed shots for a comprehensive story.",
    "Quick turnaround for you to relive the day's highlights.",
  ];

  return (
    <div>
      <SectionContent
        title="Services"
        description="My Photography Services"
        link={{ title: "View All Services", href: "/services" }}
      />

      <div className="max-lg:flex max-lg:flex-col-reverse lg:grid lg:grid-cols-2 gap-10">
        <div className="">
          <div className="mb-3 lg:mb-5 flex items-center gap-4">
            <span className="uppercase font-semibold text-[28px]/[38px] lg:text-[34px]/[46px] xl:text-[44px]/[60px] text-[#797C86]">
              Events
            </span>

            <div className="w-20 lg:w-[104px] xl:w-[130px] h-12 lg:[56px] xl:h-[66px] flex items-center justify-center bg-[#4A2CED] rounded-[100px] shadow-[4px_4px_17.4px_0px_#FFFFFF47_inset]">
              <Image src={TopRightArrow} alt="" />
            </div>
          </div>

          <p className="mb-[50px] font-normal text-sm lg:text-lg text-[#797C86]">
            Our event photography service is dedicated to capturing the magic of
            your special occasions. Whether it's a wedding, corporate event, or
            milestone celebration, we're there to document every heartfelt
            moment. We blend into the background, ensuring natural and candid
            shots that reflect the emotions of the day.
          </p>

          <h4 className="mb-2.5 lg:mb-5 font-medium text-sm lg:text-lg text-[#CACACE]">
            Service Highlights
          </h4>

          <ul className="space-y-2.5">
            {serviceHighlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-center gap-2.5 uppercase font-normal text-sm lg:text-lg text-[#AFB0B6] border border-[#1C1C21] p-[14px] lg:py-[18px] lg:px-5 rounded-xl"
              >
                <Image
                  src={AsterikBlack}
                  className="text-[#474752]"
                  color="#474752"
                  alt=""
                />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        <div className="max-lg:h-[350px] w-full h-full bg-[url('https://res.cloudinary.com/dxvhsze0l/image/upload/v1735948139/rcvxmzdpdrk5xldcjbib.png')] bg-cover bg-center bg-no-repeat max-lg:rounded-t-xl max-lg:rounded-b-[30px] lg:rounded-[20px] rounded-bl-[100px]"></div>
      </div>
    </div>
  );
}
