/** @type {import('tailwindcss').Config} */

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
function generateFractionsWithDuplicates(maxDenominator) {
  const allFractions = {};
  const uniqueFractionsSet = {};
  /*
we are creating a list of all possible fractions with a denominator up to maxDenominator
if we want to just output unique fractions we can use unique fraction instead of all fractions
*/
  for (let denominator = 2; denominator <= maxDenominator; denominator++) {
    for (let numerator = 1; numerator < denominator; numerator++) {
      const fullFraction = `${numerator}/${denominator}`;
      allFractions[`${numerator}/${denominator}`] = eval(fullFraction) * 100 + '%'; // Add the unsimplified fraction

      // Simplify the fraction
      const divisor = gcd(numerator, denominator);
      const simplified = `${numerator / divisor}/${denominator / divisor}`;
      uniqueFractionsSet[simplified] = eval(simplified) * 100 + '%'; // Add the unsimplified fraction
    }
  }
  return {
    allFractions: allFractions, // Full list of unsimplified fractions
    uniqueFractions: uniqueFractionsSet, // List of unique simplified fractions
  };
}
const { allFractions } = generateFractionsWithDuplicates(16);

// "Decoloring" prose
const proseVars = [
  '--tw-prose-body',
  '--tw-prose-headings',
  '--tw-prose-lead',
  '--tw-prose-bold',
  '--tw-prose-counters',
  '--tw-prose-bullets',
  '--tw-prose-hr',
  '--tw-prose-quotes',
  '--tw-prose-quote-borders',
  '--tw-prose-captions',
  '--tw-prose-kbd',
  '--tw-prose-kbd-shadows',
  '--tw-prose-code',
  '--tw-prose-pre-code',
  '--tw-prose-pre-bg',
  '--tw-prose-th-borders',
  '--tw-prose-td-borders',
];

module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/pages/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class'],
  /* eslint-disable @typescript-eslint/no-require-imports */
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
  ],
  presets: [require('./brand-d.tailwind.preset.cjs')],
  /* eslint-enable @typescript-eslint/no-require-imports */
  safelist: [
    'position-left',
    'position-right',
    'position-center',
    'indent-top',
    'indent-bottom',
    'indent',
    'antialiased',
  ],
  theme: {
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      aspectRatio: {
        '560/356': '560/356',
        '280/196': '280/196',
        '280/356': '280/356',
        '670/356': '670/356',
      },
      backgroundImage: {
        'img-primary':
          'linear-gradient(to bottom, hsla(var(--colors-primary) / 90%), hsla(var(--colors-primary) / 60%)), var(--bg-img, url("/placeholder.svg"))',
        'img-secondary':
          'linear-gradient(to bottom, hsla(var(--colors-secondary) / 90%), hsla(var(--colors-secondary) / 60%)), var(--bg-img, url("/placeholder.svg"))',
        'img-muted':
          'linear-gradient(to bottom, hsla(var(--colors-muted) / 90%), hsla(var(--colors-muted) / 60%)), var(--bg-img, url("/placeholder.svg"))',
        'img-dark':
          'linear-gradient(to bottom, hsla(var(--colors-foreground) / 90%), hsla(var(--colors-foreground) / 60%)), var(--bg-img, url("/placeholder.svg"))',
        'img-light':
          'linear-gradient(to bottom, hsla(var(--colors-background) / 90%), hsla(var(--colors-background) / 60%)), var(--bg-img, url("/placeholder.svg"))',
        'img-accent':
          'linear-gradient(to bottom, hsla(var(--colors-accent) / 80%), hsla(var(--colors-accent) / 60%)), var(--bg-img, url("/placeholder.svg"))',
      },
      container: {
        center: true,
      },

      flexBasis: {
        ...allFractions,
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
        accent: 'var(--font-accent)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      spacing: {
        ...allFractions,
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-links': theme('colors.brand.DEFAULT'),
            ...proseVars.reduce((acc, key) => ({ ...acc, [key]: 'inherit' }), {}),
            h1: {
              fontSize: theme('fontSize.5xl'),
              fontWeight: 'normal',
              '@screen md': {
                fontSize: theme('fontSize.6xl'),
              },
            },
            h2: {
              fontSize: theme('fontSize.4xl'),
              fontWeight: 'normal',
              '@screen md': {
                fontSize: theme('fontSize.5xl'),
              },
            },
            h3: {
              fontSize: theme('fontSize.3xl'),
              fontWeight: 'normal',
              '@screen md': {
                fontSize: theme('fontSize.4xl'),
              },
            },
            h4: {
              fontSize: theme('fontSize.2xl'),
              fontWeight: 'normal',
              '@screen md': {
                fontSize: theme('fontSize.3xl'),
              },
            },
            h5: {
              fontSize: theme('fontSize.xl'),
              fontWeight: 'normal',
              '@screen md': {
                fontSize: theme('fontSize.2xl'),
              },
            },
          },
        },
      }),
      zIndex: {
        '-z-1': '-1',
      },
    },
  },
};
