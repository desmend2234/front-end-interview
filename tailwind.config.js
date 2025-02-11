/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      colors: {
        primary: {
          light: '#60a5fa', // blue-400
          DEFAULT: '#3b82f6', // blue-500
          dark: '#2563eb', // blue-600
        },
        secondary: {
          light: '#a5b4fc', // indigo-400
          DEFAULT: '#6366f1', // indigo-500
          dark: '#4f46e5', // indigo-600
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
        'gradient-secondary':
          'linear-gradient(135deg, #a5b4fc 0%, #6366f1 100%)',
        'gradient-page': 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
      },
    },
  },
  plugins: [],
};
