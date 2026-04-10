import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc',
          400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1',
          800: '#075985', 900: '#0c4a6e', 950: '#082f49',
        },
        secondary: {
          50: '#fdf4ff', 100: '#fae8ff', 200: '#f5d0fe', 300: '#f0abfc',
          400: '#e879f9', 500: '#d946ef', 600: '#c026d3', 700: '#a21caf',
          800: '#86198f', 900: '#701a75', 950: '#4a044e',
        },
        accent: {
          50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 300: '#fdba74',
          400: '#fb923c', 500: '#f97316', 600: '#ea580c', 700: '#c2410c',
          800: '#9a3412', 900: '#7c2d12', 950: '#431407',
        },
        text: { primary: '#0f172a', secondary: '#475569', muted: '#64748b' },
        surface: { DEFAULT: '#ffffff', alt: '#f8fafc', dark: '#f1f5f9' },
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      container: {
        center: true,
        padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem', xl: '4rem' },
        screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1440px' },
      },
      borderRadius: {
        sm: '0.125rem', DEFAULT: '0.375rem', md: '0.5rem', lg: '0.75rem',
        xl: '1rem', '2xl': '1.25rem', '3xl': '1.5rem', full: '9999px',
      },
    },
  },
  plugins: [typography],
  darkMode: 'class',
};
