import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        inter: ["Inter", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        'primary-blue': '#4A5AB1',
        'button-red' : '#FF788F',
        'button-green' : '#78FFB3',
      },
    },
  },
  plugins: [],
} satisfies Config;
