import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      boxShadow: {
        btn: "1px 1px #ffffe3, 2px 2px #ffffe3, 3px 3px #ffffe3, 4px 4px #30302b",
      },
      colors: {
        darker: "#10100e",
        dark: "#30302b",
        light: "#ffffe3",
      },
    },
  },
  plugins: [],
} satisfies Config;
