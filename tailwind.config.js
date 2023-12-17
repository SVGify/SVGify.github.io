module.exports = {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  screens: {
    'sm': '576px',
    // => @media (min-width: 576px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '992px',
    // => @media (min-width: 992px) { ... }

    'xl': '1200px',
    // => @media (min-width: 1200px) { ... }
  },
};
