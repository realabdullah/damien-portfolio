import Intro from "./home/Intro";
import Marquees from "./home/Marquees";
import GridImages from "./home/GridImages";
import About from "./home/About";
import Services from "./home/Services";
import Portfolio from "./home/Portfolio";
import FAQs from "./home/FAQs";
import Testimonials from "./home/Testimonials";

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

      <div className="space-y-20 lg:space-y-[150px] xl:space-y-[200px] px-4 lg:px-[8.44vw]">
        <About />
        <Services />
        <Portfolio />
        <FAQs />
      </div>

    </div>
  );
}
