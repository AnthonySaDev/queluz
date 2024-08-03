module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        'titillium': ['"Titillium Web"', 'sans-serif'],
        'tomorrow': ['"Tomorrow"', 'sans-serif'],
      },
      fontWeight: {
        extralight: 200,
        light: 300,
        regular: 400,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      screens: {
        xs: { max: '380px' },
      },
    },
  },
  plugins: [],
};
