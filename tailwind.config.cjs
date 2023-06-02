/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'Inter var',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    extend: {
      backgroundImage: {
        ChooseUsernamePage: 'url("/src/assets/images/cover-login.webp")',
        GenericBlue: 'url("/src/assets/images/background-blue.webp")',
        BlurCyan: 'url("/src/assets/images/blur-cyan.webp")',
        BlurCyan2: 'url("/src/assets/images/blur-cyan2.webp")',
        BeamsCover: 'url("/src/assets/images/beams-cover@95.webp")',
        BeamsHome: 'url("/src/assets/images/beams-home@95.webp")',
        illustrationPet1: 'url("/src/assets/images/pet-illustration.svg")',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
