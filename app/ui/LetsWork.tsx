import TopRightArrow from "@/public/top-right-arrow.svg";
import Image from "next/image";

export default function LetsWork() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2.5">
        <span className="font-semibold text-[28px]/[38px] lg:text-5xl xl:text-[58px]/[79.23px] text-white">
          Let’s
        </span>

        <div className="w-20 h-12 lg:w-[104px] xl:w-[130px] lg:h-[56px] xl:h-[66px] flex items-center justify-center bg-[#4A2CED] rounded-[100px] shadow-[4px_4px_17.4px_0px_#FFFFFF47_inset]">
          <Image src={TopRightArrow} alt="" />
        </div>
      </div>

      <span className="font-semibold text-[28px]/[38px] lg:text-5xl xl:text-[58px]/[79.23px] text-white">
        Work Together
      </span>
    </div>
  );
}
