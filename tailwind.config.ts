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
        CareerCraftSecondary: "bg-gray-700", // For any other elements background

        CareerCraftBackground: "#111827", // Dark BG
        CareerCraftForeGround: "#1F2937", // This is for the forms
        CareerCraftForeGroundLight: "#374151", // This is for the input fields inside forms

        CareerCraftWhite: "#FFFFFF",
        CareerCraftText: "#D1D5DB", //This is the text color
        CareerCraftInputText: "#6B7280", // Color for the text inside the Input

        CareerCraftSuccess: "#4ADE80", // Green
        CareerCraftSuccessLight: "rgba(34, 197, 94, 0.2)", //Light Green

        CareerCraftWarning: "#FACC15", //Yellow
        CareerCraftWarningLight: "rgba(234, 179, 8, 0.2)", //Light Yellow

        CareerCraftDanger: "#EF4444", //Red color
      },
    },
  },
  plugins: [],
} satisfies Config;
