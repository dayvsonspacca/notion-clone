module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#D7DEDC",
        secondary: "#7B1FA2",
        dark: "#0F0A0A",
        darklight: "#816F68",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
