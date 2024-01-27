import { colors, fontFamilies, screens } from './src/app/utils/tailwind';
import type { Config } from 'tailwindcss';
const twColors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic":
  //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //   },
  // },

  theme: {
    screens,
    extend: {
      colors,
      fontFamily: fontFamilies,
      typography: {
        brand: {
          css: {
            '--tw-prose-links': twColors.teal[700],
            '--tw-prose-invert-links': twColors.teal[400],
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
