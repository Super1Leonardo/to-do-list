/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'second': '#1e1e1e', 
        'spotify': '#1fdd63'
      }
    }
  },
  plugins: []
};