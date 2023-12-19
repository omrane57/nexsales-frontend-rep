/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutralGray600: "var(--Neutral-Gray-600, #475467)",
        neutralBlue: "var(--Primary-Navy-Blue-500, #232B7A)",
        neutralNavyBlue: "var(--Primary-Navy-Blue-50, #E9EAF2)",
        neutralwhite: "var(--Neutral-White, #FFF)",
        tableBg: "var(--Neutral-Gray-50, #F9FAFB);",
        primaryBlue: "var(--Primary-Navy-Blue-600, #20276F);",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
