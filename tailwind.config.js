/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Light Theme: Focus on clarity and high-end photography
        light: {
          background: "#F1F5F9", // Slate-100: Makes white cards pop
          surface: "#FFFFFF",    // Pure White: For listing cards
          text: "#0F172A",       // Slate-900: Professional ink black
          subtext: "#475569",    // Slate-600: Accessible grey for details
          primary: "#2563EB",    // Blue-600: The "Action" color for buttons
          accent: "#F59E0B",     // Amber: For "Featured" or "Price Drop"
          border: "#CBD5E1",     // Slate-300: Clean lines
        },

        // Dark Theme: "OLED" optimized luxury
        dark: {
          background: "#020617", // Slate-950: Deepest navy-black
          surface: "#0F172A",    // Slate-900: Elevated card color
          text: "#F8FAFC",       // Slate-50: Crisp white
          subtext: "#94A3B8",    // Slate-400: Muted metadata
          primary: "#3B82F6",    // Blue-500: Vibrant digital blue
          accent: "#FBBF24",     // Amber-400: Golden highlights
          border: "#1E293B",     // Slate-800: Subtle separation
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