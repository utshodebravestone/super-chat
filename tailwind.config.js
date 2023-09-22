/** @type {import('tailwindcss').Config} */

import * as colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: "#1bd071",
      },
    },
  },
  plugins: [],
};
