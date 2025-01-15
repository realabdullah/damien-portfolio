import X from "@/public/socials/x.svg";
import linkedin from "@/public/socials/linkedin.svg";
import facebook from "@/public/socials/facebook.svg";
import type { CardProps } from "../types";

export const headerNavs = [
  { title: "Home", href: "/" },
  { title: "About Me", href: "/about" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Services", href: "/services" },
];

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

export const socialIconsMap: { [key: string]: string } = {
  X,
  linkedin,
  facebook,
};

export const footerSocials = [
  { type: "facebook", href: "#" },
  { type: "X", href: "#" },
  { type: "linkedin", href: "#" },
];

export const footerLinks = [
  {
    title: "Home",
    links: [
      { title: "About me", href: "/about" },
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

export const aboutStats = [
  { title: "Years in Business", value: "15+" },
  { title: "Happy Clients", value: "500+" },
  { title: "Photography Awards", value: "10+" },
  { title: "International Shoots", value: "05+" },
  { title: "Social Media Followers", value: "10,000+" },
  { title: "Client Retention Rate", value: "90%" },
];

export const journeyData = [
  {
    header: "Year - 2005",
    desc: "In 2005, Damien acquired her first camera, igniting her passion for photography. She started experimenting with landscapes and candid shots, marking the beginning of her visual storytelling journey.",
  },
  {
    header: "Year - 2010",
    desc: "Damien pursued a degree in Fine Arts with a focus on photography, refining her technical skills and artistic sensibilities.",
  },
  {
    header: "Year - 2012",
    desc: "In 2012, Damien held her first solo exhibition, showcasing her unique perspective on nature and people through her lens.",
  },
  {
    header: "Year - 2015",
    desc: "Damien officially launched her photography business in 2015, offering portrait, event, and commercial photography services.",
  },
  {
    header: "Year - 2017",
    desc: "Damien's work took her beyond the USA, capturing breathtaking scenes and cultures from around the world.",
  },
  {
    header: "Year - 2020",
    desc: "In 2020, Damien's dedication and creativity earned her several prestigious photography awards, solidifying her position as a visionary photographer.",
  },
];

export const portraitsPhotos = [
  {
    title: "Faces of Resilience",
    date: "March 2022",
    href: "/portfolio/faces-of-resilience",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1736773096/bw3nbia6zytbt6gumonr.webp",
  },
  {
    title: "Innocence Unveiled",
    date: "January 2020",
    href: "/portfolio/innocence-unveiled",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1736773123/wqxcuutnevnjdvbrfthg.webp",
  },
  {
    title: "Elegance in Monochrome",
    date: "January 2020",
    href: "/portfolio/elegance-in-monochrome",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1735947891/y8ldgfkeffat55xz0cc9.webp",
  },
];

export const eventsPhotography = [
  {
    title: "A Wedding Tale",
    date: "September 2021",
    href: "/portfolio/a-wedding-tale",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1736778015/uxqtpkfb3ptebvbahas6.webp",
  },
  {
    title: "Corporate Excellence Summit",
    date: "November 2019",
    href: "/portfolio/corporate-excellence-summit",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1736778056/pvdd2cymxqrv6deqrhap.webp",
  },
  {
    title: "Festival of Colors",
    date: "March 2018",
    href: "/portfolio/festival-of-colors",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1736778100/pwxxjwnmitetekomrrnm.webp",
  },
];

export const commercialPhotography = [
  {
    title: "Product Elegance",
    date: "August 2020",
    href: "/portfolio/product-elegance",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1736779079/zxqjw9evk692ffgt3hfp.webp",
  },
  {
    title: "Brand Storytelling",
    date: "May 2019",
    href: "/portfolio/brand-storytelling",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1736779231/t4xwqnpizlsej0b1h9kg.webp",
  },
  {
    title: "Culinary Delights",
    date: "February 2017",
    href: "/portfolio/culinary-delights",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1736779365/kiwrgjtnivubtgd33vrn.webp",
  },
];

export const servicesPricing = [
  {
    heading: "Portrait Photography",
    content:
      "Our portrait photography service is all about showcasing your unique personality. Whether you need a professional headshot, a family portrait, or a personal photoshoot, we create images that reflect your true self. We work closely with you to bring out your best angles and expressions, ensuring every portrait tells your story.",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1736972566/cnmuir1vc7ysnzw8xah0.webp",
    link: "/",
    ranges: [
      {
        title: "Individual Session",
        price: "$250",
        points: [
          "Ideal for capturing your unique personality and style.",
          "Includes a 2-hour photoshoot and 20 professionally edited images.",
          "Additional images can be purchased at $10 each.",
        ],
      },
      {
        title: "Family Session",
        price: "$400",
        points: [
          "Perfect for creating lasting memories with your loved ones.",
          "Includes a 3-hour photoshoot and 30 professionally edited images.",
          "Additional images can be purchased at $10 each.",
        ],
      },
      {
        title: "Couple Session",
        price: "$300",
        points: [
          "Celebrate your love story with an intimate photoshoot.",
          "Includes a 2.5-hour photoshoot and 25 professionally edited images.",
          "Additional images can be purchased at $10 each.",
        ],
      },
    ],
  },
  {
    heading: "Events Photography",
    content:
      "Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1736972564/sjbtknnhqxdrzrqipuct.webp",
    link: "/",
    ranges: [
      {
        title: "Wedding Photography",
        price: "$1,500",
        points: [
          "Capture the magic of your special day.",
          "Includes full-day coverage, a second photographer, and 300+ professionally edited images.",
          "Customizable packages are available to suit your specific wedding needs.",
        ],
      },
      {
        title: "Party Coverage",
        price: "$800",
        points: [
          "Preserve the fun and excitement of your event.",
          "Includes up to 4 hours of coverage and 150+ professionally edited images.",
          "Additional hours can be added at $150 per hour.",
        ],
      },
      {
        title: "Corporate Events",
        price: "Custom Pricing",
        points: [
          "Tailored solutions for corporate gatherings, conferences, and seminars.",
          "Contact us for a personalized quote based on your event's requirements.",
        ],
      },
    ],
  },
  {
    heading: "Commercial Photography",
    content:
      "In the world of business, a compelling image can make all the difference. Our commercial photography service is designed to enhance your brand's visual identity. We create striking images for your products, services, and marketing campaigns that leave a lasting impact on your audience.",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1736972570/akcugp5bskxadawvrlrv.webp",
    link: "/",
    ranges: [
      {
        title: "Product Photography",
        price: "$500",
        points: [
          "Showcase your products in the best light.",
          "Includes a half-day photoshoot, 20 professionally edited product images, and high-resolution files.",
          "Additional images can be purchased at $20 each.",
        ],
      },
      {
        title: "Real Estate Photography",
        price: "$700",
        points: [
          "Highlight the beauty of your properties.",
          "Includes interior and exterior shots, a 2-hour photoshoot, and 25 professionally edited images.",
          "Additional images can be purchased at $20 each.",
        ],
      },
      {
        title: "Brand Photography",
        price: "Custom Pricing",
        points: [
          "Craft a visual narrative that aligns with your brand identity.",
          "Contact us to discuss your brand photography needs and receive a personalized quote.",
        ],
      },
    ],
  },
];
