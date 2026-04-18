import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#4f46e5',
          600: '#4338ca',
          700: '#3730a3'
        },
        accent: '#f59e0b',
        tealish: '#14b8a6'
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(15, 23, 42, 0.25)'
      }
    }
  },
  plugins: []
};

export default config;
