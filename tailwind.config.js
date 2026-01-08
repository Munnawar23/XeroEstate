/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Light Theme — Bright, soft, neutral
        light: {
          background: "#FAFAFA", // almost white
          surface: "#FFFFFF",    // pure white cards
          text: "#1F2937",       // soft charcoal
          subtext: "#6B7280",    // neutral gray
          primary: "#60A5FA",    // soft sky blue
          accent: "#A7F3D0",     // light mint accent
          border: "#E5E7EB",     // subtle light gray
        },

        // Dark Theme — True gray dark mode
        dark: {
          background: "#0F0F10", // near-black gray
          surface: "#1A1A1D",    // dark gray cards
          text: "#F3F4F6",       // soft white
          subtext: "#9CA3AF",    // muted gray
          primary: "#93C5FD",    // softened blue (low contrast)
          accent: "#6EE7B7",     // soft mint highlight
          border: "#262626",     // subtle gray border
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
