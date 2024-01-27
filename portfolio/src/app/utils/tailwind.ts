import twColors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

export const screens = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const colors = {
  dark: 'hsl(0, 0%, 7%)',
  light: 'hsl(0, 0%, 100%)',
  brand: twColors.teal,
  accent: twColors.purple,
} as const;

export const fontFamilies = {
  serif: ['var(--font-serif)', ...defaultTheme.fontFamily.serif],
}; 

export type Color = keyof typeof colors;
export type Screen = keyof typeof screens;
export type FontFamily = keyof typeof fontFamilies;
