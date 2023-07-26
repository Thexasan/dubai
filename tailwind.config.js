/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
       'sm': '340px',
      // => @media (min-width: 640px) { ... }
      'sm2': '580px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      'md1': '621px',

      // => @media (min-width: 768px) { ... }
      'md2': '860px',
      'md3': '980px',
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1260px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {},
  },
  plugins: [],
  plugins: [require("daisyui")],
  
}

