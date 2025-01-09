import LetsWork from "../ui/LetsWork";

export default function Intro() {
  return (
    <div className="relative flex max-lg:flex-col items-start lg:items-center lg:justify-between gap-5 lg:bg-[url('/abstractDesign.svg')] bg-no-repeat bg-center bg-auto max-lg:py-10">
      <div className="flex flex-col lg:py-[89.5px]">
        <span className="font-medium text-sm lg:text-lg xl:text-[22px]/[30px] text-[#62646C]">
          Stunning Photography by
        </span>

        <h2 className="font-semibold text-[40px]/[54px] lg:text-[60px]/[80px] xl:text-[80px]/[109px] text-[#E4E4E6]">
          Damien Braun
        </h2>
      </div>

      <LetsWork />
    </div>
  );
}
