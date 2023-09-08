/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purpleNormal: '#8860E6',
        purpleDark: '#5B409B',
        grayDark: '#202024',
        grayLight: '#F3F4FE',
        greenSucess: '#04D361',
        redDanger: '#FF8F8F',
        degradeStart: '#DEE0FC',
        degradeMiddle: '#996DFF',
        degradeEnd: '#BC9FFF',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        bgCardTicket: "url('/src/assets/bgCardTicket.png')",
        imgHero: "url('/src/assets/imgHero.jpg')",
      },
    },
    screens: {
      tablet: { min: '401px', max: '650px' },

      smallTablet: { max: '400px' },
    },
  },
  plugins: [],
}
