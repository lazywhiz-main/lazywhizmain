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
          200: '#F5ADA8',
          500: '#E57373',
          600: '#D32F2F',
        },
        orange: {
          200: '#F9C06A',
          300: '#F8B142',
          600: '#D98C23',
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
      fontFamily: {
        sans: ['Noto Sans JP', 'Public Sans', 'Hiragino Sans', 'Meiryo', 'sans-serif'],
        biz: ['Noto Sans JP', 'Hiragino Sans', 'Meiryo', 'sans-serif'],
        ui: ['Public Sans', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'heading': '700',
        'body': '400',
        'ui': '600',
      },
    },
  },
  plugins: [],
}; 