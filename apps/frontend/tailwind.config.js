/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // These match the blues and purples in your reference images
        brand: {
          blue: '#3B82F6',
          purple: '#A855F7',
          dark: '#05070A',
        }
      },
    },
  },
  plugins: [],
}