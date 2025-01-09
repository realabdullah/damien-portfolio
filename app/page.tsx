import Intro from "./home/Intro";
import Marquees from "./home/Marquees";
import GridImages from "./home/GridImages";
import About from "./home/About";
import Services from "./home/Services";
import Portfolio from "./home/Portfolio";
import FAQs from "./home/FAQs";
import Testimonials from "./home/Testimonials";
import Image from "next/image";
import TextLogo from "@/public/logo-text.svg";
import Footer from "./ui/Footer";

export default function Page() {
  return (
    <div className="space-y-20 lg:space-y-[150px] xl:space-y-[200px] w-full max-w-[2000px] mx-auto">
      <div>
        <div className="px-4 lg:px-[8.44vw]">
          <Intro />
        </div>
        <Marquees />
        <div className="px-4 lg:px-[8.44vw]">
          <GridImages />
        </div>
      </div>

      <div className="space-y-[200px] px-4 lg:px-[8.44vw]">
        <About />
        <Services />
        <Portfolio />
        <FAQs />
        <Testimonials />
      </div>
      <div>
        <div className="px-4 lg:px-[8.44vw] pb-5 lg:pb-[60px] xl:pb-[100px] ml-auto w-full">
          <Image
            src={TextLogo}
            alt="logo"
            className="ml-auto w-full max-w-[315px] lg:max-w-[926px] xl:max-w-[1058px]"
          />
        </div>
        <Marquees />
        <Footer />
      </div>
    </div>
  );
}
