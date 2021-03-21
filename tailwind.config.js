module.exports = {
  purge: ['./src/**/*.vue', './public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '100%',
          md: '640px',
          lg: '960px',
          xl: '1220px',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
