/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2563eb',
          soft: '#3b82f6'
        }
      },
      boxShadow: {
        card: '0 8px 24px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
};