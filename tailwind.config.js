module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          700: "#565c5e",
          900: "#0e1618",
          "900_01": "#1e1e1e",
          "700_01": "#5e5e5e",
        },
        black: { 900: "#0b1012", "900_3f": "#0000003f" },
        white: { A700_a5: "#ffffffa5", A700: "#ffffff" },
        deep_orange: { 200: "#deb789" },
      },
      boxShadow: {
        bs1: "0px 0px  15px 0px #0000003f",
        bs: "0px 4px  4px 0px #0000003f",
      },
      fontFamily: { poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
