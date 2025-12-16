// tailwind.config.js - VERSION STABLE AVEC VALEURS HEXADECIMALES

import defaultTheme from 'tailwindcss/defaultTheme'; 

/** @type {import('tailwindcss').Config} */
export default { 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // CORRECTION: Utilisation des valeurs HEX en dur pour éviter les conflits PostCSS/Turbopack
        primary: { 
          50: '#eff6ff',  // Ancien --color-primary-50
          100: '#dbeafe', // Ancien --color-primary-100
          200: '#bfdbfe', // Ancien --color-primary-200
          300: '#93c5fd', // Ancien --color-primary-300
          400: '#60a5fa', // Ancien --color-primary-400
          500: '#3b82f6', // Ancien --color-primary-500
          600: '#2563eb', // Ancien --color-primary-600
          700: '#1d4ed8', // Ancien --color-primary-700
          800: '#1e40af', // Ancien --color-primary-800
          900: '#1e3a8a', // Ancien --color-primary-900
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans], 
      },
    },
    plugins: [],
  },
};