import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : {
        'background-color' : '#333436',
        'dropmenu-color' : 'rgba(51, 52, 54, .7)',
        'primary-color' : '#baa178',
        'secondary-color' : '#ba3734',
        'font-color' : '#bebebc',
        'possible' : 'rgb(171, 255, 45)',
        'impossible' : 'red',
      },
      keyframes : {
        dropdown : {
          '0%' : { opacity : '0'},
          '100%' : {opacity : '1'}
        },
        scrollEventRight : {
          '0%' : { opacity : '0', transform : 'translateY(-10rem)'},
          '100%' : { opacity : '1', transform : 'translateY(0rem)'},
        },
        arrowDown : {
          '0%' : { opacity : '1'},
          '100%' : { opacity : '0', transform : 'translateY(0.5rem)'},
        },
      },
      animation : {
        dropdown : 'dropdown .5s ease-in-out',
        scrollEventRight : 'scrollEventRight 1s ease-in-out',
        arrowDown : 'arrowDown 1.5s ease-in-out infinite'
      },
      width : {
        'logoSize' : '240px'
      },
      height : {
        'basicHeight' : 'calc(100vh - 160px - 94px)',
        'date' : '60px',
      },
      minWidth : {
        'select-calendar' : '110px',
        'date' : '60px',
      },
      minHeight : {
        'main-carousel-height' : '60vh',
        'notice-container' : '500px',
        'calendar' : '400px',
        'date' : '60px',
      },
      top : {
        'nav-height' : '94px',
      },
    },
  },
  plugins: [],
}
export default config
