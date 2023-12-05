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
      },
      keyframes : {
        dropdown : {
          '0%' : { opacity : 0},
          '100%' : {opacity : 1}
        }
      },
      animation : {
        dropdown : 'dropdown .5s ease-in-out'
      },
      width : {
        'logoSize' : '240px'
      },
      top : {
        'nav-height' : '94px',
      },
    },
  },
  plugins: [],
}
export default config
