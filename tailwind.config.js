/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#fef1f8',
          '100': '#fee5f3',
          '200': '#ffcae9',
          '300': '#ff9fd5',
          '400': '#ff63b8',
          '500': '#ff2491',
          '600': '#f01276',
          '700': '#d1055b',
          '800': '#ad074b',
          '900': '#8f0c41',
          '950': '#580022',
      },
      'secondary': {
          '50': '#edfffc',
          '100': '#c0fffa',
          '200': '#81fff6',
          '300': '#3afff2',
          '400': '#24ffe9',
          '500': '#00e2cd',
          '600': '#00b7aa',
          '700': '#009188',
          '800': '#00726d',
          '900': '#045d59',
          '950': '#003a3a',
      
      }
      
    },
  },
  plugins: [],
}
}