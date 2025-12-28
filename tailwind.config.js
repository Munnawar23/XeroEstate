/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Light Theme (unchanged)
        light: {
          background: "#FAFAFA",
          surface: "#FFFFFF",
          text: "#0F172A",
          subtext: "#64748B",
          primary: "#1E40AF",
          accent: "#0F766E",
        },

        // Dark Theme (Grey Luxury)
        dark: {
          background: "#0B0B0C",  // deep charcoal
          surface: "#171717",     // card background
          text: "#F5F5F5",        // off-white
          subtext: "#A1A1AA",     // neutral grey
          primary: "#737373",     // elegant grey (replaces blue)
          accent: "#D4D4D8",      // soft silver highlight
        },
      },

      fontFamily: {
        heading: ["Poppins-SemiBold"],
        body: ["SourceSans3-Regular"],
        bodyMedium: ["SourceSans3-SemiBold"],
        accent: ["Manrope-Medium"],
      },
    },
  },
  plugins: [],
};
