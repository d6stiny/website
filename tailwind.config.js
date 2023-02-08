const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    {
      handler: (tw) => {
        tw.matchUtilities(
          {
            "text-glow": (value) => ({
              "text-shadow": `0 0 10px ${value}, 0 0 150px ${value}`,
            }),
            glow: (value) => ({
              filter: `drop-shadow(0px 0px 7px ${value})`,
            }),
          },
          {
            values: flattenColorPalette(tw.theme("colors")),
            type: "color",
          }
        );
      },
    },
  ],
};
