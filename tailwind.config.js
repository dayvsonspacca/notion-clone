module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#D7DEDC",
        secondary: "#7B1FA2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
