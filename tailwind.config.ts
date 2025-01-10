import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        CareerCraftPrimary: "#1B9AF5", // Blue
        CareerCraftPrimaryDark: "#007ACC", // 25% darker blue
        CareerCraftPrimaryHover: "#3AB0F7", // Slightly lighter blue
        CareerCraftSecondary: "bg-gray-700", // For any other elements background
        CareerCraftSecondaryHover: "#4B5563", // Slightly lighter than bg-gray-700

        CareerCraftBackground: "#111827", // Dark BG
        CareerCraftForeGround: "#1F2937", // This is for the forms
        CareerCraftForeGroundAlt: "#121921", // Darker alternative for forms
        CareerCraftForeGroundLight: "#374151", // This is for the input fields inside forms
        CareerCraftForeGroundLightAlt: "#4B5563", // Brighter alternative for input fields

        CareerCraftWhite: "#FFFFFF",
        CareerCraftText: "#D1D5DB", // Text color
        CareerCraftInputText: "#6B7280", // Text inside inputs
        CareerCraftInputBorder: "#374151", // Neutral border
        CareerCraftInputBorderFocus: "#1B9AF5", // Blue border on focus

        CareerCraftSuccess: "#4ADE80", // Green
        CareerCraftSuccessLight: "rgba(34, 197, 94, 0.2)", // Light green

        CareerCraftWarning: "#FACC15", // Yellow
        CareerCraftWarningLight: "rgba(234, 179, 8, 0.2)", // Light yellow

        CareerCraftDanger: "#EF4444", // Red

        // New Additions:
        CareerCraftCardNeutral: "#1C222A", // Neutral card background
        CareerCraftCardElevated: "#2F3A46", // Elevated card background
        CareerCraftCardLight: "#374151", // Light card background
        CareerCraftTertiary: "#F472B6", // Accent pink for links or highlights
      },
    },
  },
  plugins: [],
} satisfies Config;
