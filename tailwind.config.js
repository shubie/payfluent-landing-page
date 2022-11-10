/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#3B82F6",
        dark_blue: "#1E3A8A",
        light_blue: "#DBEAFE",
      },
      fontFamily: {
        "space-light": ["space-light"],
        "space-regular": ["space-regular"],
        "space-medium": ["space-medium"],
        "space-bold": ["space-bold"],
        "inter-regular": ["inter-regular"],
        "inter-bold": ["inter-bold"],
      },
    },
  },
  plugins: [],
};
