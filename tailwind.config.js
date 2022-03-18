module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './page-components/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#221833',
        'brown-beaver': '#C59176',
      },
    },
    fontFamily: { league: 'League\\ Spartan', space: 'Space\\ Mono' },
  },
  plugins: [],
};
