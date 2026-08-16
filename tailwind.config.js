/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#050505', surface: '#0d0d0d', accent: '#715aff' },
      fontFamily: { sans: ['Space Grotesk', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
