"use client";

import DesktopLogo from "@/public/logo/desktop.svg";
import Menu from "@/public/menu.svg";
import Image from "next/image";
import Link from "next/link";
import { headerNavs } from "../data/constants";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex w-full h-[119px] bg-black border-b border-b-[#1C1C21]">
      <div className="w-4 lg:w-[62px] xl:w-[125px] border-r border-r-[#1C1C21]"></div>
      <div className="w-full lg:px-10 flex items-end lg:items-center justify-between gap-3">
        <div className="max-lg:pl-4 max-lg:pb-6">
          <Image src={DesktopLogo} alt="" />
        </div>

        <nav className="self-end border border-b-[0] border-[#1C1C21] rounded-t-xl hidden lg:flex">
          {headerNavs.map((nav, index) => (
            <Link
              key={nav.title}
              href={nav.href}
              className={`font-medium lg:text-sm xl:text-lg text-white px-10 py-6 xl:py-[30px] ${
                nav.href === pathname && "bg-[#131316]"
              } ${
                index !== headerNavs.length - 1 && "border-r border-r-[#1C1C21]"
              }
               hover:bg-[#131316]`}
            >
              {nav.title}
            </Link>
          ))}
        </nav>

        <button className="hidden lg:block font-medium text-lg text-white px-5 xl:px-6 py-[14px] xl:py-4 bg-[#1C1C21] rounded-[10px] hover:bg-[#131316]">
          Contact Me
        </button>

        <button className="lg:hidden p-5 border border-[#1C1C21] rounded-tl-[20px]">
          <Image src={Menu} alt="menu" />
        </button>
      </div>
      <div className="w-4 lg:w-[62px] xl:w-[125px] border-l border-l-[#1C1C21]"></div>
    </header>
  );
}
