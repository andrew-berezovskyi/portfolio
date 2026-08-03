/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // --- Dark theme (default) ---
        graphite: {
          bg: '#12161C',      // основний фон
          surface: '#1A2029', // картки/поверхні
          border: '#262E3A',
          textPrimary: '#E4E7EB',
          textMuted: '#8B94A3',
        },
        // --- Light theme ---
        paper: {
          bg: '#F5F4F1',
          surface: '#FFFFFF',
          border: '#DEDBD4',
          textPrimary: '#1B1F27',
          textMuted: '#5B6270',
        },
        // --- Accents (shared) ---
        copper: {
          DEFAULT: '#F0A356',
          light: '#F7C08C',
          dim: '#B9773D',
        },
        cyan: {
          DEFAULT: '#5EC9C0',
          light: '#8FDCD5',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'blueprint-grid':
          'linear-gradient(rgba(240,163,86,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(240,163,86,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        tracePulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        tracePulse: 'tracePulse 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
