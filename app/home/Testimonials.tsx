"use client";

import SectionContent from "../ui/SectionContent";
import { Star } from "lucide-react";
import SocialsBox from "../ui/SocialsBox";
import { testimonials } from "../data/constants";
import type { CardProps } from "../types";
import { useCarousel } from "../utils/useCarousel";
import CarouselCard from "../ui/CarouselCard";

function Card({ name, address, review, socials }: CardProps) {
  return (
    <div className="h-full relative bg-[#0E0E10] border border-[#1C1C21] rounded-xl px-10 py-[45.5px] flex flex-col gap-[30px] overflow-hidden isolate">
      <div className="flex items-center flex-wrap gap-6 justify-between">
        <div className="flex flex-col">
          <p className="font-medium text-xl text-[#E4E4E6]">{name}</p>
          <span className="font-normal text-lg text-[#62646C]">{address}</span>
        </div>

        <SocialsBox socials={socials} />
      </div>

      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <p className="flex-1 font-medium text-xl text-[#E4E4E6]">{review}</p>

      {/* bg */}
      <div className="absolute -right-[100px] -top-[133px] h-[300px] w-[300px] rounded-[22px] bg-card-gradient -rotate-45 -z-10"></div>
    </div>
  );
}

export default function Testimonials() {
  const { page, direction, visibleItems, paginate } = useCarousel({
    items: testimonials,
  });

  return (
    <div className="">
      <SectionContent
        title="Testimonials"
        description="What My Clients Say"
        sub={{ title: "Total Reviews", description: "323" }}
        link={{ title: "View All Testimonials", href: "/testimonials" }}
        arrow
        paginate={paginate}
      >
        <CarouselCard page={page} direction={direction}>
          {visibleItems.map((testimonial, index) => (
            <Card key={`${page}-${index}`} {...testimonial} />
          ))}
        </CarouselCard>
      </SectionContent>
    </div>
  );
}
