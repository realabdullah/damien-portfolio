export default function PortfolioHero() {
  return (
    <div className="mt-10 lg:mt-20 xl:mt-[100px]">
      <div className="lg:hidden mb-[30px] min-h-[236px] rounded-[20px] bg-[url('https://res.cloudinary.com/dxvhsze0l/image/upload/v1736714570/vtm4i0crkppn2gmfyrgc.webp')] bg-no-repeat bg-center bg-cover"></div>
      <div className="relative lg:min-h-[784px] rounded-[34px] lg:bg-[url('https://res.cloudinary.com/dxvhsze0l/image/upload/v1736714570/vtm4i0crkppn2gmfyrgc.webp')] bg-no-repeat bg-center bg-cover">
        <div className="grid lg:grid-cols-[76%,24%] gap-0">
          <div className="relative bg-black rounded-br-[34px] shadow-[5px_5px_black, -5px_-5px_black] lg:pb-[53px] xl:pb-[57px] lg:pr-10 xl:pr-[52px]">
            <h4 className="pb-[2px] xl:pb-1 uppercase font-semibold text-sm lg:text-base xl:text-xl text-[#797C86]">
              Portfolio
            </h4>

            <h1 className="pb-6 xl:pb-[30px] uppercase font-semibold text-2xl lg:text-5xl xl:text-[58px]/[79px] text-white">
              Visual Poetry in Pixels
            </h1>

            <p className="font-normal text-sm lg:text-base xl:text-lg text-[#797C86]">
              Step into a visual journey that encapsulates the essence of my
              lens. Each photograph in this portfolio is a narrative, a frozen
              moment in time, and a testament to the artistry and passion poured
              into every frame. Explore the diverse tapestry of stories I&apos;ve had
              the privilege to capture and witness the world through my lens.
            </p>
          </div>

          <div className="max-lg:hidden relative bg-transparent rounded-tl-[34px] shadow-[0px_-30px_black]"></div>
        </div>

        <div className="h-10 w-10 rounded-tl-[30px] bg-transparent shadow-[-10px_-10px_black]"></div>

        <div className="max-lg:hidden absolute bottom-0 w-full bg-transparent flex items-end justify-between">
          <div className="absolute -top-[35px] left-0 h-10 w-10 rounded-bl-[30px] bg-transparent shadow-[-10px_10px_black]"></div>
          <div className="absolute bottom-0 lg:left-[153px] xl:left-[192px] h-10 w-10 rounded-bl-[30px] bg-transparent shadow-[-10px_10px_black]"></div>

          <div className="lg:w-[153px] xl:w-[192px] lg:h-[155px] xl:h-[173px] bg-black rounded-tr-[34px] shadow-[-1px_1px_black] flex justify-center items-center">
            <div className="bg-[url('/bordered-asterik.svg')] bg-no-repeat bg-center bg-cover lg:h-[120px] xl:h-[137px] lg:w-[120px] xl:w-[137px] bg-transparent"></div>
          </div>

          <div className="lg:w-[227px] xl:w-[319px] lg:h-[146px] xl:h-[178px] bg-black rounded-tl-[34px] shadow-[-1px_1px_black] flex justify-center items-center p-3">
            <p className="uppercase font-medium text-base text-[#797C86] whitespace-nowrap">
              Scroll Down To See <br /> the works
            </p>
          </div>

          <div className="absolute -top-10 right-0 h-10 w-10 rounded-br-[30px] bg-transparent shadow-[10px_10px_black]"></div>
          <div className="absolute bottom-0 lg:right-[227px] xl:right-[319px] h-10 w-10 rounded-br-[30px] bg-transparent shadow-[10px_10px_black]"></div>
        </div>
      </div>
    </div>
  );
}
