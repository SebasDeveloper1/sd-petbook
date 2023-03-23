/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'Inter',
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
        ChooseUsernamePage: 'url("/src/assets/images/cover-login.jpg")',
        GenericBlue: 'url("/src/assets/images/background-blue.jpg")',
        BlurCyan: 'url("/src/assets/images/blur-cyan.png")',
        BeamsCover: 'url("/src/assets/images/beams-cover@95.jpg")',
        illustrationPet1: 'url("/src/assets/images/pet-illustration.svg")',
      },
    },
  },
  plugins: [],
};
