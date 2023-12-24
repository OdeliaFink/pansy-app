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
    animation: {
      'loop-scroll': 'loop-scroll 100s linear infinite',
    },
    keyframes: {
      'loop-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      },
    },
    colors: {
      'medium-beige': '#DCD0C5',
      'dark-beige': '#C8BCB2',
      'bg-beige': '#F5EDE5',
      'dark-green': '#214F2F',
      'lighter-green': '#3D8C55',
      'sage-green': '#BAB86C',
      'mossy-green': '#737F51',
      'slate-grey': '#4B4E58',
      'pansy-white': '#fff',
    },

    borderRadius: {
      'p-sm': '.5rem',
      'p-md': '1rem',
      'p-lg': '3rem',
    },
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },

      zIndex: {
        999: '999',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.hyphens-auto-custom': {
          hyphens: 'auto',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
