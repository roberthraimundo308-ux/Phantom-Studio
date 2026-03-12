import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Syne', 'sans-serif'],
        headline: ['Bebas Neue', 'sans-serif'],
        code: ['DM Mono', 'monospace'],
        display: ['Bebas Neue', 'sans-serif'],
        ui: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        background: 'var(--bg)',
        foreground: 'var(--text)',
        accent: {
          DEFAULT: '#C8FF00',
          glow: 'rgba(200, 255, 0, 0.12)',
        },
        cobalt: '#2E3192',
        muted: '#4A4540',
        border: 'rgba(240, 235, 227, 0.06)',
        s1: '#0D0D0D',
        s2: '#141414',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;