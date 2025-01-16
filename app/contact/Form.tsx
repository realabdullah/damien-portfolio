import TopRightArrow from "@/public/top-right-arrow.svg";
import Image from "next/image";
import { formFields } from "../data/constants";

const Form = () => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:gap-10 xl:gap-[50px]">
      {formFields.map((field) => (
        <div
          key={field.id}
          className={`flex flex-col gap-4 xl:gap-6 ${
            field.id === "message" ? "col-span-1 md:col-span-2" : "col-span-1"
          }`}
        >
          <label
            htmlFor={field.id}
            className="font-normal text-base xl:text-lg text-[#E4E4E6]"
          >
            {field.label}
          </label>

          {field.id === "message" ? (
            <textarea
              id={field.id}
              placeholder={field.placeholder}
              className="bg-transparent border-b border-[#2F2F37] text-[#E4E4E6] placeholder:text-[#62646C] placeholder:uppercase text-lg xl:text-[22px]/[30px] pb-[14px] outline-none w-full transition-all focus:border-[#E4E4E6]"
            ></textarea>
          ) : (
            <input
              type={field.type}
              id={field.id}
              placeholder={field.placeholder}
              className="bg-transparent border-b border-[#2F2F37] text-[#E4E4E6] placeholder:text-[#62646C] placeholder:uppercase text-lg xl:text-[22px]/[30px] pb-[14px] outline-none w-full transition-all focus:border-[#E4E4E6]"
            />
          )}
        </div>
      ))}

      <button className="col-span-1 md:col-span-2 flex items-center gap-2.5">
        <span className="uppercase font-semibold text-[28px]/[38px] lg:text-[38px]/[51px] xl:text-[58px]/[79.23px] text-white whitespace-nowrap">
          Send Message
        </span>

        <div className="w-20 h-12 lg:w-[104px] xl:w-[130px] lg:h-[56px] xl:h-[66px] flex items-center justify-center bg-[#4A2CED] rounded-[100px] shadow-[4px_4px_17.4px_0px_#FFFFFF47_inset]">
          <Image src={TopRightArrow} alt="" />
        </div>
      </button>
    </form>
  );
};

export default Form;
