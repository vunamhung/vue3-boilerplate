const plugin = require('tailwindcss/plugin');

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
      screens: {
        dlg: { max: '1023px' },
        dmd: { max: '767px' },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addVariant, e, addUtilities, theme, prefix, variants }) => {
      const escape = e || ((x) => x);

      ['after', 'backdrop ', 'before', 'cue', 'first-letter', 'first-line', 'grammar-error ', 'marker ', 'placeholder ', 'selection'].forEach(
        (pseudo) => {
          addVariant(pseudo, ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
              return `.${escape(`${pseudo}${separator}${className}`)}::${pseudo}`;
            });
          });
        },
      );

      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}`;
          rule.walkDecls((decl) => {
            decl.important = true;
          });
        });
      });

      addUtilities(
        {
          '.col-span-full': {
            'grid-column': '1 / -1',
          },
          '.grid-cols-2a': {
            'grid-template-columns': 'repeat(2, auto)',
          },
          '.flex-2': {
            flex: '2 1 0',
          },
          '.flex-3': {
            flex: '3 1 0',
          },
          '.border-core': {
            'border-color': 'var(--color-core)',
          },
          '.bg-core': {
            'background-color': 'var(--color-core)',
          },
        },
        ['responsive'],
      );

      addUtilities(
        {
          '.hide': {
            display: 'none',
          },
          '.show': {
            display: 'block',
          },
        },
        ['responsive', 'important'],
      );

      addUtilities(
        {
          '.empty-content': {
            content: "''",
          },
        },
        ['before'],
      );
    }),
  ],
};
