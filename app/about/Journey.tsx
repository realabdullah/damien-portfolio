import { journeyData } from "../data/constants";
import SectionContent from "../ui/SectionContent";

function Card({
  header,
  description,
}: {
  header: string;
  description: string;
}) {
  return (
    <div className="h-full relative bg-[#0E0E10] border border-[#1C1C21] rounded-xl p-6 lg:p-10 xl:p-[50px] overflow-hidden isolate">
      <h2 className="font-semibold text-2xl lg:text-[34px]/[46px] xl:text-[44px]/[60px] text-[#797C86]">
        {header}
      </h2>
      <p className="mt-2.5 lg:mt-[14px] xl:mt-5 font-normal text-sm lg:text-base xl:text-lg text-[#797C86]">
        {description}
      </p>

      {/* bg */}
      <div className="absolute -right-[100px] -top-[133px] h-[300px] w-[300px] rounded-[22px] bg-card-gradient -rotate-45 -z-10"></div>
    </div>
  );
}

export default function Journey() {
  return (
    <div className="">
      <SectionContent
        title="Journey"
        description="Damien's Journey - A Timeline"
      />

      <div className="mt-10 lg:mt-[60px] xl:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-[30px]">
        {journeyData.map((data, index) => (
          <Card key={index} header={data.header} description={data.desc} />
        ))}
      </div>
    </div>
  );
}
