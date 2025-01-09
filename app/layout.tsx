import Header from "@/app/ui/Header";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

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
      </body>
    </html>
  );
}
