/** @type {import('tailwindcss').Config} */
module.exports = {
  // IMPORTANT: Add presets for NativeWind v4
  presets: [require("nativewind/preset")],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}