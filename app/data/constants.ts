import X from "@/public/socials/x.svg";
import linkedin from "@/public/socials/linkedin.svg";
import facebook from "@/public/socials/facebook.svg";
import type { CardProps } from "../types";

export const portfolios = [
  {
    title: "Faces of Resilience",
    date: "March 2022",
    href: "/portfolio/faces-of-resilience",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1735948175/bxxx3qy1kvn6kywud99u.webp",
  },
  {
    title: "A Wedding Tale",
    date: "January 2020",
    href: "/portfolio/a-wedding-tale",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1735948204/qlqruwkl8viw3xqwbp9x.webp",
  },
  {
    title: "Product Elegance",
    date: "January 2020",
    href: "/portfolio/product-elegance",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1736073713/qcxykutfqy4m6bonlib8.webp",
  },
];

export const faqOne = [
  {
    id: 1,
    question: "WHAT TYPE OF PHOTOGRAPHY DO YOU SPECIALIZE IN?",
    answer:
      "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
  },
  {
    id: 2,
    question: "HOW CAN I BOOK A PHOTOGRAPHY SESSION WITH YOU?",
    answer:
      "You can book a session by contacting me through my website or social media channels. I recommend booking at least two weeks in advance to secure your preferred date.",
  },
  {
    id: 3,
    question: "WHAT EQUIPMENT DO YOU USE FOR YOUR PHOTOGRAPHY?",
    answer:
      "I use professional-grade cameras and lenses, including Canon and Sony mirrorless systems, as well as lighting and stabilization equipment to ensure high-quality results.",
  },
  {
    id: 4,
    question: "CAN I REQUEST A SPECIFIC LOCATION FOR A",
    answer:
      "Absolutely! I’m happy to work with you to choose a location that suits your vision. Travel fees may apply for locations outside the local area.",
  },
];

export const faqTwo = [
  {
    id: 5,
    question: "WHAT IS YOUR EDITING PROCESS LIKE?",
    answer:
      "I carefully select the best shots from the session and apply professional editing techniques to enhance colors, lighting, and overall aesthetics, ensuring each photo reflects its full potential.",
  },
  {
    id: 6,
    question: "ARE DIGITAL FILES INCLUDED IN YOUR PHOTOGRAPHY PACKAGES?",
    answer:
      "Yes, all photography packages include high-resolution digital files. Additional prints and albums can be purchased separately.",
  },
  {
    id: 7,
    question: "DO YOU OFFER PRINTS OF YOUR PHOTOGRAPHS?",
    answer:
      "Yes, prints are available for purchase. Explore the 'Prints' section for more details on sizes and pricing.",
  },
  {
    id: 8,
    question:
      "HOW LONG DOES IT TAKE TO RECEIVE THE EDITED PHOTOS AFTER A SESSION?",
    answer:
      "Edited photos are typically delivered within 1-2 weeks after the session. Larger projects may take slightly longer, but I will keep you updated throughout the process.",
  },
];

export const socialIconsMap: { [key: string]: any } = { X, linkedin, facebook };

export const footerSocials = [
  { type: "facebook", href: "#" },
  { type: "X", href: "#" },
  { type: "linkedin", href: "#" },
];

export const footerLinks = [
  {
    title: "Home",
    links: [
      { title: "About me", href: "#" },
      { title: "My works", href: "#" },
      { title: "Testimonials", href: "#" },
    ],
  },
  {
    title: "Clients",
    links: [
      { title: "Klovesto", href: "#" },
      { title: "Nukeway", href: "#" },
      { title: "Cloven’s", href: "#" },
      { title: "MenVol", href: "#" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { title: "Events", href: "#" },
      { title: "Portrait", href: "#" },
      { title: "Branding", href: "#" },
      { title: "Commerciale", href: "#" },
      { title: "Wedding", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { title: "Portraits", href: "#" },
      { title: "Events", href: "#" },
      { title: "Commercial", href: "#" },
    ],
  },
];

export const testimonials: CardProps[] = [
  {
    name: "Emily Johnson",
    address: "USA, California",
    review:
      "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing.",
    socials: [
      { type: "X", href: "#" },
      { type: "linkedin", href: "#" },
      { type: "facebook", href: "#" },
    ],
  },
  {
    name: "John Smith",
    address: "USA, California",
    review:
      "Damien has an incredible talent for making every event feel effortless, and the results speak for themselves.",
    socials: [
      { type: "X", href: "#" },
      { type: "linkedin", href: "#" },
      { type: "facebook", href: "#" },
    ],
  },
  {
    name: "Samantha Davis",
    address: "USA, California",
    review:
      "I was blown away by Damien's ability to capture the essence of our wedding day. Hes photographs are our cherished memories.",
    socials: [
      { type: "X", href: "#" },
      { type: "linkedin", href: "#" },
      { type: "facebook", href: "#" },
    ],
  },
];
