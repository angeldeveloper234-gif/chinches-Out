/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#19D42B',
          darkGreen: '#11941E',
          yellow: '#FBC02D',
          dark: '#212121',
          gray: '#F3F4F6',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 20px 40px -15px rgba(25, 212, 43, 0.15)',
        'glow': '0 0 20px rgba(251, 192, 45, 0.5)',
      }
    },
  },
  plugins: [],
}
