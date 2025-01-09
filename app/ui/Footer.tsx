import Link from "next/link";
import SocialsBox from "./SocialsBox";
import LetsWork from "./LetsWork";
import { footerLinks, footerSocials } from "../data/constants";

export default function Footer() {
  return (
    <footer className="grid grid-rows-10">
      <div className="row-span-8 max-lg:mx-4 max-lg:border-x border-[#1C1C21] grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-1 lg:border-r border-[#1C1C21] bg-[url('/footer-bg-left.svg')] bg-no-repeat bg-center bg-auto"></div>
        <div className="lg:col-span-4 max-lg:border-b py-10 lg:py-20 xl:py-[100px] px-5 lg:px-[60px] xl:px-20 lg:border-r border-[#1C1C21]">
          <h3 className="pb-[25px] lg:pb-[50px] xl:pb-[60px] uppercase font-semibold text-sm lg:text-base xl:text-xl text-[#797C86]">
            A more meaningful home for photography
          </h3>

          <LetsWork />
        </div>
        <div className="lg:col-span-6 py-10 lg:py-20 xl:py-[100px] px-5 lg:px-[60px] xl:px-20 lg:border-r border-[#1C1C21] max-lg:gap-y-10 grid-cols-2 grid lg:grid-cols-4 gap-2">
          {footerLinks.map((group) => (
            <div className="space-y-5" key={group.title}>
              <p className="uppercase font-semibold text-sm xl:text-lg text-[#797C86]">
                {group.title}
              </p>

              <ul className="space-y-[6px]">
                {group.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="uppercase text-sm xl:text-lg font-medium text-[#F2F2F3] pb-[6px] border-b border-[#2F2F37]"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="col-span-1 bg-[url('/footer-bg-right.svg')] bg-no-repeat bg-center bg-auto"></div>
      </div>

      <div className="row-span-2 flex items-center max-lg:flex-col justify-center lg:justify-between gap-4 px-4 lg:px-[8.44vw] border-t border-[#1C1C21] py-5">
        <div className="flex items-center gap-2">
          <Link
            href="/terms-conditions"
            className="font-normal text-sm xl:text-lg text-[#797C86]"
          >
            Terms & Conditions
          </Link>
          <hr className="w-[1px] lg:h-[21px] xl:h-[27px] bg-[#1C1C21]" />
          <Link
            href="/privacy-policy"
            className="font-normal text-sm xl:text-lg text-[#797C86]"
          >
            Privacy Policy
          </Link>
        </div>

        <SocialsBox socials={footerSocials} />

        <p className="text-sm xl:text-lg font-normal text-[#797C86]">
          © {new Date().getFullYear()} Damien Braun Photography. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
