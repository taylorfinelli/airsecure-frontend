// tailwind.config.mjs
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'], // Adjust if needed
  theme: {
    extend: {
      colors: {
        green_primary: '#3490dc',
        secondary: '#ffed4a',
        accent: '#6c757d',
        'custom-green': '#2d6a4f',
        'custom-blue': '#1e3a8a',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [animate],
};
