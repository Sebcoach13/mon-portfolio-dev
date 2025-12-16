// tailwind.config.js - SYNTAXE ES MODULE

import defaultTheme from 'tailwindcss/defaultTheme'; 

/** @type {import('tailwindcss').Config} */
export default { // Export par défaut
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // CORRECTION: Utiliser 'primary' pour correspondre aux variables CSS --color-primary-xxx
        primary: { 
          50: 'var(--color-primary-50)', 
          100: 'var(--color-primary-100)', 
          200: 'var(--color-primary-200)', 
          300: 'var(--color-primary-300)', 
          400: 'var(--color-primary-400)', 
          500: 'var(--color-primary-500)', 
          600: 'var(--color-primary-600)', 
          700: 'var(--color-primary-700)', 
          800: 'var(--color-primary-800)', 
          900: 'var(--color-primary-900)', 
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans], 
      },
    },
  },
  plugins: [],
};