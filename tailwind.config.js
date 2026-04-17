/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f7f7f8',
          100: '#ededf0',
          200: '#d7d7dd',
          300: '#b5b6c0',
          400: '#8f92a1',
          500: '#6f7285',
          600: '#575a6d',
          700: '#454758',
          800: '#2f303b',
          900: '#1b1c24',
          950: '#0b0c10',
        },
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#0b1b4a',
        },
      },
    },
  },
  plugins: [],
}

