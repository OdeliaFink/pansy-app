module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/slices/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      body: ['var(--font-work-sans)'],
      display: ['var(--font-caprasimo)'],
    },
    colors: {
      'medium-beige': '#DCD0C5',
      'dark-beige': '#C8BCB2',
      'bg-beige': '#F5EDE5',
      'dark-green': '#214F2F',
      'lighter-green': '#3D8C55',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
