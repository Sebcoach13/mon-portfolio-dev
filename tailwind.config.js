// tailwind.config.js - SYNTAXE ES MODULE

import defaultTheme from 'tailwindcss/defaultTheme'; 

/** @type {import('tailwindcss').Config} */
export default { // <-- Export par défaut
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: { 
          50: 'var(--color-primary-50)', 
          // ... (Le reste des nuances de bleu)
          900: 'var(--color-primary-900)', 
        },
      },
      fontFamily: {
        // Accès correct à la propriété fontFamily de l'objet importé
        sans: ["Inter", ...defaultTheme.fontFamily.sans], 
      },
    },
  },
  plugins: [],
};