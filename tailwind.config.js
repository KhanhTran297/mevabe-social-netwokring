/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        title: [
          " 1.375rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "500",
          },
        ],
      },
      backgroundColor: {
        tab: "rgba(31, 31, 31)",
        menu: "rgba(167, 53, 116, 0.08)",
        modal: "rgba(0, 0, 0, 0.32)",
        menuOption: "rgba(31, 26, 28, 0.08)",
        buttonHoverLight: "rgba(167, 53, 116, 0.08)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans"],
      },
      boxShadow: {
        search: "0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
        mobile: "0px 4px 16px 1px rgba(8, 53, 141, 0.16)",
        modal:
          "0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)",
        tile: " 0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)",
        buttonHover:
          "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)",
      },

      colors: {
        primary: "#FFD8E8",
        secondary: "#FFF8F8",
        light_surface_on_surface: "#1F1A1C",
      },
      textColor: {
        light: "#1F1A1C",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const gradients = {
        ".bg-post": {
          backgroundImage:
            "linear-gradient(0deg, #FFF8F8 0%, rgba(255, 248, 248, 0.00) 100%)",
        },
        ".buttonHover": {
          backgroundImage:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.08) 100%)",
        },
      };

      addUtilities(gradients, ["backgroundColor"]);
    },
  ],
};
