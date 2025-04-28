/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          200: '#BFEADF',
          500: '#2A9D83',
          600: '#1B8A72',
        },
        coral: {
          500: '#E57373',
          600: '#D32F2F',
        },
        neutral: {
          50: '#F5F3EE',
          700: '#8B917F',
        },
        text: {
          high: '#111827',
          medium: '#374151',
        },
      },
    },
  },
  plugins: [],
}; 