/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0B',
        paper: '#FFFFFF',
        mist: '#F6F7F9',
        line: '#E7E9EC',
        muted: '#6B7280',
        brand: {
          DEFAULT: '#2563EB',
          50: '#EEF3FF',
          100: '#DCE6FF',
          200: '#B9CDFF',
          400: '#4F7DFB',
          500: '#2563EB',
          600: '#1D4FC4',
          700: '#173E9B',
        },
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        xl2: '1.25rem',
        xl3: '1.75rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10,10,11,0.04), 0 8px 24px -8px rgba(10,10,11,0.08)',
        softer: '0 1px 1px rgba(10,10,11,0.03), 0 2px 8px -2px rgba(10,10,11,0.06)',
        glow: '0 0 0 1px rgba(37,99,235,0.08), 0 12px 40px -12px rgba(37,99,235,0.35)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
