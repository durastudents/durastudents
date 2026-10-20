/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  // Dark when the user picked dark, or when they have not picked and the system is dark.
  darkMode: [
    "variant",
    [
      '@media (prefers-color-scheme: dark) { &:not([data-theme="light"] *) }',
      '&:is([data-theme="dark"] *)',
    ],
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7f1",
          100: "#dcecde",
          200: "#b9d9bf",
          500: "#2f7d4a",
          600: "#256a3c",
          700: "#1e5632",
          800: "#19442a",
          900: "#12331f",
        },
        accent: "var(--accent)",
        earth: { 100: "#f6efe4", 500: "#b5733a" },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Noto Sans Devanagari",
          "Noto Sans",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
