/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        ebonyGreen: "#636B61",
        primary: "#E3D7FF",
        secondary: "#AFA2FF",
        tertiary: "#72788D",
        sage: "#C5C9A4",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
