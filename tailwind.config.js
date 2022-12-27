/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      backgroundImage: {
        hero: "url('/src/assets/images/n01.jpg')",
        halamantiket: "url('/src/assets/images/header-halaman-tiket.jpg')",
        voc: "url('/src/assets/images/bg-voc.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
