/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Light Theme (Real Estate – Minimal)
        light: {
          background: "#FAFAFA",   // warm clean white
          surface: "#FFFFFF",     // cards / sheets
          text: "#0F172A",        // deep slate
          subtext: "#64748B",     // soft gray
          primary: "#1E40AF",     // trust blue
          accent: "#0F766E",      // muted teal
        },

        // Dark Theme (Luxury)
        dark: {
          background: "#020617",  // near-black navy
          surface: "#0F172A",     // cards
          text: "#F8FAFC",
          subtext: "#94A3B8",
          primary: "#3B82F6",
          accent: "#2DD4BF",
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
