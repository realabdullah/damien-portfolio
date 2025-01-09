import Header from "@/app/ui/Header";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Marquees from "./home/Marquees";
import Footer from "./ui/Footer";
import Image from "next/image";
import TextLogo from "@/public/logo-text.svg";
import Testimonials from "./home/Testimonials";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Damien Braun",
  description:
    "Personal portfolio website of Damien Braun, showcasing photography projects and professional experience",
  keywords:
    "photography, photographer, portfolio, professional photography, Damien Braun",
  creator: "Damien Braun",
  openGraph: {
    type: "website",
    title: "Damien Braun Photography",
    description:
      "Personal portfolio website of Damien Braun, showcasing photography projects and professional experience",
    images: "/og-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} bg-black`}>
        <Header />

        {children}

        <div className="my-20 lg:my-[150px] xl:my-[200px] px-4 lg:px-[8.44vw]">
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
      </body>
    </html>
  );
}
