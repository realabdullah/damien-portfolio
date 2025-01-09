import Image from "next/image";
import { socialIconsMap } from "../data/constants";

type Props = {
  socials: { type: string; href: string }[];
};

export default function SocialsBox({ socials }: Props) {
  return (
    <div className="flex items-center gap-4 rounded-[100px] border border-[#1C1C21] p-2 xl:p-2.5">
      {socials.map((social, index) => (
        <div
          key={index}
          className="rounded-[100px] h-[38px] w-[38px] xl:h-12 xl:w-12 bg-gradient-to-r from-[#2F2F37] to-[#2F2F3700] p-[1px]"
        >
          <div className="p-2.5 xl:p-[14px] flex items-center justify-center text-white h-full w-full rounded-[100px] bg-[#1C1C21]">
            <Image src={socialIconsMap[social.type]} alt="social" />
          </div>
        </div>
      ))}
    </div>
  );
}
