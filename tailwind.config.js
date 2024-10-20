/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FBFBFB',
          DEFAULT: '#0B050F',
          dark: '#BC47E7',
          xtra: '#814981',
          xtra2: '#360f36',
          xtra3: '#330E69',
        },
        secondary: {
          light: '#BF94FF',
          DEFAULT: '#EFE8EF',
          dark: '#A1FAAA',
          xtra: '#4B044B',
          xtra2: '#999999',
          xtra3: '#14119A',
        },
        danger: {
          light: '#fc8181',
          DEFAULT: '#f56565',
          dark: '#e53e3e',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        exo: ['Exo 2', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
