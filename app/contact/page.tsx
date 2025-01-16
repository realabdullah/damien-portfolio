import TopRightArrow from "@/public/top-right-arrow.svg";
import ContactHero from "./Hero";
import ContactForm from "./Form";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="w-full max-w-[2000px] mx-auto px-4 lg:px-[8.44vw]">
      <ContactHero />

      <div className="mt-10 lg:mt-20 xl:mt-[100px] py-10 lg:py-[60px] xl:py-20 border-t border-[#1C1C21] grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="col-span-2 space-y-[14px] lg:space-y-6 xl:space-y-[30px]">
          <h3 className="uppercase font-semibold text-[28px]/[38px] lg:text-[34px]/[46px] xl:text-[44px]/[60px] text-[#797C86] whitespace-nowrap">
            Contact Information
          </h3>
          <p className="font-normal text-sm lg:text-base xl:text-lg text-[#797C86]">
            Feel free to reach out to us through various channels. We are
            available by phone, email, and social media for your convenience.
          </p>
        </div>

        <div className="col-span-3 flex flex-col md:flex-row items-start md:items-center gap-5 lg:gap-10 xl:gap-[50px]">
          <Link
            href="tel:+1-123-456-7890"
            className="w-fit flex items-center gap-2.5 border-b border-[#1C1C21] pb-[2px]"
          >
            <span className="uppercase font-medium text-sm lg:text-base xl:text-lg text-[#F2F2F3] whitespace-nowrap">
              +1-123-456-7890
            </span>
            <Image src={TopRightArrow} alt="" />
          </Link>

          <Link
            href="mailto:info@damien braunphotography.com"
            className="w-fit flex items-center gap-2.5 border-b border-[#1C1C21] pb-[2px]"
          >
            <span className="uppercase font-medium text-sm lg:text-base xl:text-lg text-[#F2F2F3] whitespace-nowrap">
              info@damien braunphotography.com
            </span>
            <Image src={TopRightArrow} alt="" />
          </Link>
        </div>
      </div>

      <div className="py-10 lg:py-[60px] xl:py-20 border-t border-[#1C1C21] grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-[14px] lg:space-y-6 xl:space-y-[30px]">
          <h3 className="uppercase font-semibold text-[28px]/[38px] lg:text-[34px]/[46px] xl:text-[44px]/[60px] text-[#797C86] whitespace-nowrap">
            Send Me a Message
          </h3>
          <p className="font-normal text-sm lg:text-base xl:text-lg text-[#797C86]">
            Have a specific inquiry or message for us? Please use the contact
            form below, and we&apos;ll get back to you promptly.
          </p>
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
