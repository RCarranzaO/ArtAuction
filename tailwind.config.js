module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#333",
        sky: "#019fcb",
        azure: "#0050a2",
        powder: "#c9dee9",
        royal: "#0c3c7c",
        slate: "#687d90"
      },
      backgroundImage: {
        my_bg_image: "url('../components/assets/IMAGEART08.jpg')"
      }
    }
  },
  variants: {},
  plugins: []
};
