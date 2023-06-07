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
        primary: {
          50: '#008000',
          background: '#f2f2f2'
        }
      }
    },
    screens: {
      'desktop': '1024px',
      'mobile': '640px'
    }
  },
  plugins: [],
}
