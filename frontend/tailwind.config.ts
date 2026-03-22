import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black:   '#050709',
        deep:    '#080c14',
        navy:    '#0b1120',
        accent:  '#c0392b',
        accent2: '#1a6cf5',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        body:    ['"Space Grotesk"', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
