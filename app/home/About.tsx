import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CrossStar from "@/public/cross-star.svg";
import Facebook from "@/public/socials/facebook.svg";
import X from "@/public/socials/x.svg";
import LinkedIn from "@/public/socials/linkedin.svg";
import SectionContent from "../ui/SectionContent";

export default function About() {
  const socials = [
    { name: "", link: "", icon: Facebook },
    { name: "", link: "", icon: X },
    { name: "", link: "", icon: LinkedIn },
  ];
  return (
    <div>
      <SectionContent
        title="About"
        description="I am Damien"
        link={{ title: "Know More", href: "/about" }}
        borderless
      />

      <div className="grid grid-cols-1 lg:grid-cols-10 lg:min-h-[710px]">
        <div className="max-lg:h-[475px] lg:col-span-5 relative bg-[url('https://res.cloudinary.com/dxvhsze0l/image/upload/v1735948105/tll7rkfuhkejhs7pb06l.png')] bg-no-repeat bg-center bg-cover rounded-xl">
          <div className="absolute w-[227px] h-[212px] bg-transparent top-0 left-0 rounded-br-[181px] border-r-[25px] border-b-[25px] border-black"></div>
          <div className="absolute top-[212px] w-[50px] h-[50px] bg-transparent rounded-tl-xl shadow-[0_-10px_black]"></div>
          <div className="absolute top-[137px] w-[50px] h-[50px] bg-transparent rounded-bl-xl shadow-[0_10px_black]"></div>
          <div className="absolute top-0 left-[152px] w-[50px] h-[50px] bg-transparent rounded-tr-xl shadow-[0_-10px_black]"></div>
          <div className="absolute top-0 left-[227px] w-[50px] h-[50px] bg-transparent rounded-tl-xl shadow-[0_-10px_black]"></div>
          <div className="absolute w-[227px] h-[212px] bg-transparent bottom-0 right-0 rounded-tl-[181px] border-l-[25px] border-t-[25px] border-black"></div>
          <div className="absolute bottom-[137px] right-0 w-[50px] h-[50px] bg-transparent rounded-tr-xl shadow-[0_-10px_black]"></div>
          <div className="absolute bottom-[213px] right-0 w-[50px] h-[50px] bg-transparent rounded-br-xl shadow-[0_10px_black]"></div>
          <div className="absolute bottom-0 right-[227px] w-[50px] h-[50px] bg-transparent rounded-br-xl shadow-[0_10px_black]"></div>
          <div className="absolute bottom-0 right-[153px] w-[50px] h-[50px] bg-transparent rounded-bl-xl shadow-[0_10px_black]"></div>
        </div>
        <div className="lg:col-span-5 py-[49px] lg:pl-[30px]">
          <div className="rounded-[20px] border border-[#1C1C21] py-10">
            <div className="px-10 pb-10 flex flex-col gap-5 border-b border-[#1C1C21]">
              <div className="flex items-center gap-2.5">
                <Image src={CrossStar} alt="" />
                <h4 className="font-medium text-xl lg:text-2xl xl:text-3xl text-[#CACACE]">
                  Introduction
                </h4>
              </div>

              <p className="font-normal text-sm lg:text-base xl:text-lg text-[#AFB0B6]">
                My journey as a photographer has been a lifelong quest to
                capture the extraordinary in the ordinary, to freeze fleeting
                moments in time, and to share the world's beauty as I see it.
                Based in the enchanting landscapes of the USA, I find
                inspiration in every corner of this diverse and vibrant country.
                Join me as we embark on a visual odyssey, where each photograph
                tells a story, and every frame is a piece of my heart.
              </p>
            </div>

            <div className="px-10 pt-10 flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <Image src={CrossStar} alt="" />
                <h4 className="font-medium text-xl lg:text-2xl xl:text-3xl text-[#CACACE]">
                  Contact Information
                </h4>
              </div>

              <div className="flex justify-between flex-wrap max-lg:flex-col items-start gap-3">
                <div className="flex flex-col lg:gap-2.5">
                  <span className="font-medium text-base lg:text-base xl:text-lg text-[#E4E4E6]">
                    Email
                  </span>
                  <p className="font-normal text-base lg:text-lg xl:text-xl text-[#AFB0B6]">
                    damienbraun@gmail.com
                  </p>
                </div>

                <div className="flex flex-col lg:gap-2.5">
                  <span className="font-medium text-base lg:text-base xl:text-lg text-[#E4E4E6]">
                    Phone Number
                  </span>
                  <p className="font-normal text-base lg:text-lg xl:text-xl text-[#AFB0B6]">
                    +00 000000000
                  </p>
                </div>
              </div>

              <div className="pt-5 lg:pt-10 flex flex-wrap max-lg:flex-col items-start lg:items-center justify-between gap-5 lg:gap-[10px]">
                <div className="flex items-center gap-4 rounded-[100px] border border-[#1C1C21] p-2.5">
                  {socials.map((social, index) => (
                    <Link
                      href={social.link}
                      key={index}
                      className="rounded-[100px] h-12 w-12 bg-gradient-to-r from-[#2F2F37] to-[#2F2F3700] p-[1px]"
                    >
                      <div className="p-[14px] h-full w-full rounded-[100px] bg-[#1C1C21]">
                        <Image src={social.icon} alt="" />
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="max-lg:w-full flex max-lg:flex-col items-center gap-5">
                  <button
                    className="max-lg:w-full flex items-center rounded-[10px] pl-[1px] cursor-pointer bg-gradient-to-r from-[#2F2F37] to-[#2F2F3700]"
                    type="button"
                  >
                    <div className="w-full h-full flex items-center justify-center gap-2 rounded-[10px] font-medium text-sm lg:text-lg text-white px-[25px] py-[18px] bg-[#1C1C21] whitespace-nowrap">
                      Let’s Work
                    </div>
                  </button>
                  <button
                    className="max-lg:w-full flex items-center rounded-[10px] pl-[1px] cursor-pointer  bg-gradient-to-r from-[#2F2F37] to-[#2F2F3700]"
                    type="button"
                  >
                    <div className="w-full h-full flex items-center justify-center gap-2 rounded-[10px] font-medium text-sm lg:text-lg text-white px-[25px] py-[18px] bg-[#1C1C21] whitespace-nowrap">
                      Download CV
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
