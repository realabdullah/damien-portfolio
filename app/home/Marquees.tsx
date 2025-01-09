import Asterik from "@/public/asterik.svg";
import marqueestyle from "@/app/styles/marquee.module.css";
import Image from "next/image";

export default function Marquees() {
  const marquees = [
    "Event Photography",
    "Comercial Photography",
    "Product Photography",
    "Wedding Photography",
    "Landscape Photography",
    "Branding Photography",
    "Portrait Photography",
  ];

  return (
    <div className="border-t border-b border-[#1C1C21] bg-[#0E0E10] h-20 relative flex items-center overflow-x-hidden">
      <div className={`overflow-clip ${marqueestyle["fadeout-horizontal"]}`}>
        <div className="flex gap-5 w-max animate-marquee pl-5">
          {marquees.map((marquee, index) => (
            <div className="flex items-center gap-2.5" key={marquee}>
              <Image src={Asterik} alt="" />
              <span className="uppercase font-normal text-lg text-[#D6D0FB]">
                {marquee}
              </span>
            </div>
          ))}

          {marquees.map((marquee, index) => (
            <div
              aria-hidden="true"
              className="flex items-center gap-2.5"
              key={marquee + index}
            >
              <Image src={Asterik} alt="" />
              <span className="uppercase font-normal text-lg text-[#D6D0FB]">
                {marquee}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
