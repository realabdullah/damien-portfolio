import { aboutStats } from "../data/constants";

export default function About() {
  return (
    <div className="mt-[100px]">
      <div className="relative lg:min-h-[784px] rounded-[34px] lg:bg-[url('https://res.cloudinary.com/dxvhsze0l/image/upload/v1736425792/v9kiujbcekfwhdtfckzd.webp')] bg-no-repeat bg-center bg-cover">
        <div className="shadow-[5px_5px_black, -5px_-5px_black]">
          <div className="flex items-stretch justify-between gap-2">
            <div className="bg-black w-full flex flex-col">
              <span className="uppercase font-semibold text-xl text-[#797C86]">
                About
              </span>

              <h2 className="uppercase font-semibold xl:text-[58px]/[79px] text-white whitespace-nowrap">
                About damien braun
              </h2>
            </div>

            <div className="max-xl:hidden relative w-full h-[110px] rounded-[35px] bg-transparent">
              <div className="absolute top-0 -left-2 h-10 w-10 rounded-tl-[30px] bg-transparent shadow-[-10px_-10px_black]"></div>
              <div className="absolute bottom-[-1px] -left-2 h-10 w-10 rounded-bl-[30px] bg-transparent shadow-[-10px_10px_black]"></div>
              <div className="absolute bottom-[-1px] right-0 h-10 w-10 rounded-br-[30px] bg-transparent shadow-[10px_10px_black]"></div>
            </div>
          </div>

          <div className="bg-black grid grid-cols-6 gap-5 py-6">
            {aboutStats.map((stat, index) => (
              <div
                key={index}
                className="col-span-1 bg-[#0E0E10] border border-[#1C1C21] rounded-xl py-6 px-[30px] flex flex-col items-start"
              >
                <span className="font-semibold text-4xl text-white">
                  {stat.value}
                </span>
                <p className="font-normal text-base text-[#797C86] whitespace-nowrap">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>

          <div className="max-lg:hidden absolute bottom-0 w-full bg-transparent flex items-end justify-between">
            <div className="absolute -top-[35px] left-0 h-10 w-10 rounded-bl-[30px] bg-transparent shadow-[-10px_10px_black]"></div>
            <div className="absolute bottom-0 lg:left-[153px] xl:left-[192px] h-10 w-10 rounded-bl-[30px] bg-transparent shadow-[-10px_10px_black]"></div>

            <div className="lg:w-[153px] xl:w-[192px] lg:h-[155px] xl:h-[173px] bg-black rounded-tr-[34px] shadow-[-1px_1px_black] flex justify-center items-center">
              <div className="bg-[url('/bordered-asterik.svg')] bg-no-repeat bg-center bg-cover lg:h-[120px] xl:h-[137px] lg:w-[120px] xl:w-[137px] bg-transparent"></div>
            </div>

            <div className="lg:w-[227px] xl:w-[319px] lg:h-[146px] xl:h-[178px] bg-black rounded-tl-[34px] shadow-[-1px_1px_black] flex justify-center items-center p-3">
              <p className="uppercase font-medium text-base text-[#797C86] whitespace-nowrap">
                Scroll Down To See <br /> My Journey
              </p>
            </div>

            <div className="absolute -top-10 right-0 h-10 w-10 rounded-br-[30px] bg-transparent shadow-[10px_10px_black]"></div>
            <div className="absolute bottom-0 lg:right-[227px] xl:right-[319px] h-10 w-10 rounded-br-[30px] bg-transparent shadow-[10px_10px_black]"></div>
          </div>
        </div>
      </div>

      <div className="lg:mt-20 xl:mt-[100px] py-10 lg:py-[60px] xl:py-20 border-y border-[#1C1C21]">
        <h3 className="uppercase font-semibold text-2xl lg:text-[34px]/[46px] xl:text-[44px]/[60px] text-[#797C86]">
          My Biography
        </h3>

        <p className="mt-5 lg:mt-[30px] xl:mt-10 font-normal text-sm lg:text-base xl:text-xl text-[#797C86]">
          Damien Braun's love affair with photography began at a young age,
          nurtured by the captivating landscapes and vibrant cultures
          surrounding her in the heart of the USA. Her passion for storytelling
          through imagery led her to embark on a photography journey that has
          spanned over 15 years. Driven by an insatiable curiosity to explore
          the beauty in everyday moments, Damien has honed her craft
          meticulously. Her background in digital media provided her with a
          solid foundation, but it's her keen eye for detail and an innate
          ability to capture raw emotions that truly set her apart. Damien's
          journey is more than just taking pictures; it's about capturing the
          essence of the human spirit, the fleeting magic of nature, and the
          emotions that define our lives. With each click of her camera, she
          weaves stories that transcend time and space.
        </p>
      </div>
    </div>
  );
}
