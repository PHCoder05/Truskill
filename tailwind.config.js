/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // This will include everything in the src folder
    './pages/**/*.{js,jsx,ts,tsx}',  // If you're using any pages directory
    './components/**/*.{js,jsx,ts,tsx}',  // If you're using any components directory
    './app/**/*.{js,jsx,ts,tsx}', // Make sure app directory is included for Next.js 13+ projects
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/about/hero-pattern.jpeg')",
      },
    },
  },
  plugins: [],
}
