/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      // default breakpoints but with 40px removed
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    extend: {},
    fontSize: {
      xsm: "10px",
      sm: "12px",
      base: "14px",
      md: "16px",
      lg: "18px",
      xlg: "20px",
      "2xlg": "20px",
      "3xlg": "30px",
      "4xlg": "40px",
      "5xlg": "50px",
    },
  },
  plugins: [],
};
