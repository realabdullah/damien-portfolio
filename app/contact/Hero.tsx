import React from "react";
import { footerSocials } from "../data/constants";
import SocialsBox from "../ui/SocialsBox";

const ContactHero = () => {
  return (
    <div className="mt-10 lg:mt-20 xl:mt-[100px]">
      <div className="lg:hidden mb-[30px] h-[236px] rounded-[20px] bg-[url('https://res.cloudinary.com/dxvhsze0l/image/upload/v1737018275/kxr0sytqn9bq3lmmk4lh.webp')] bg-no-repeat bg-center bg-cover"></div>
      <div className="relative lg:grid grid-cols-10 lg:h-[784px] rounded-[34px] lg:bg-[url('https://res.cloudinary.com/dxvhsze0l/image/upload/v1737012556/q1emrx5gnulvdzjimo0z.webp')] bg-no-repeat bg-center bg-cover">
        <div className="col-span-7 lg:grid grid-rows-[168px_auto_1fr]">
          <div className="w-20 rounded-bl-[34px] shadow-[-10px_10px_black]"></div>

          <div className="relative bg-black h-fit rounded-br-[34px] rounded-tr-[34px] shadow-[5px_5px_black, -5px_-5px_black] pr-0 lg:pb-[53px] xl:pb-[57px] lg:pt-[38px] xl:pt-[62px] lg:pr-10">
            <h4 className="pb-[2px] xl:pb-1 uppercase font-semibold text-sm lg:text-base xl:text-xl text-[#797C86]">
              Contact Me
            </h4>

            <h1 className="pb-6 xl:pb-[30px] uppercase font-semibold text-2xl lg:text-5xl xl:text-[58px]/[79px] text-white">
              Get in Touch with Me
            </h1>

            <p className="font-normal text-sm lg:text-base xl:text-lg text-[#797C86]">
              Step into a world of timeless photography with Damien Braun.
              Explore our range of photography services, each crafted to tell
              your unique story through captivating images. Whether it&apos;s
              the magic of portraits, the emotion of events, or the allure of
              commercial photography, we&apos;re here to bring your vision to
              life.
            </p>
          </div>

          <div className="hidden lg:block w-20 h-20 rounded-tl-[34px] shadow-[-10px_-10px_black]"></div>
        </div>
        <div className="hidden relative col-span-3 lg:grid grid-rows-[160px_auto]">
          <div>
            <div className="w-20 h-[50px] ml-auto rounded-br-[10px] shadow-[10px_10px_black]"></div>

            <div className="w-fit ml-auto bg-black py-5 pl-5 rounded-[100px] shadow-[25px_0px_black] rounded-br-none">
              <SocialsBox socials={footerSocials} />
            </div>

            <div className="w-20 h-20 ml-auto rounded-tr-[34px] shadow-[30px_0px_black]"></div>
          </div>

          <div className="max-lg:hidden absolute bottom-0 w-full bg-transparent flex items-end justify-between">
            <div className="absolute top-[-30px] right-0 h-10 w-10 rounded-br-[30px] bg-transparent shadow-[20px_0px_black]"></div>
            <div></div>

            <div className="lg:w-[227px] xl:w-[319px] lg:h-[104px] xl:h-[123px] bg-black rounded-tl-[34px] shadow-[-1px_1px_black] flex justify-center items-center p-3">
              <p className="uppercase font-medium text-base text-[#797C86] whitespace-nowrap">
                Scroll Down To Send <br /> me a message
              </p>
            </div>

            <div className="absolute lg:-top-10 xl:top-2.5 right-0 h-10 w-10 rounded-br-[30px] bg-transparent shadow-[10px_10px_black]"></div>
            <div className="absolute bottom-0 lg:right-[227px] xl:right-[319px] h-10 w-10 rounded-br-[30px] bg-transparent shadow-[10px_10px_black]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
