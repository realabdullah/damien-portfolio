import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "card-gradient": "linear-gradient(206.57deg, #18181B 0%, rgba(24, 24, 27, 0) 83.33%)",
      },
      animation: {
        marquee: "marquee 25s linear infinite forwards",
      },
      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
