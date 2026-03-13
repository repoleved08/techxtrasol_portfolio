import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'node_modules/@nuxt/ui/**/*.{js,ts,mjs}'],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'hsl(207 90% 95%)',
          100: 'hsl(207 90% 90%)',
          200: 'hsl(207 90% 80%)',
          300: 'hsl(207 90% 70%)',
          400: 'hsl(207 90% 60%)',
          500: 'hsl(207 90% 50%)',
          600: 'hsl(207 90% 40%)',
          700: 'hsl(207 90% 30%)',
          800: 'hsl(207 90% 20%)',
          900: 'hsl(207 90% 10%)',
        },
        accent: {
          50: 'hsl(280 85% 95%)',
          100: 'hsl(280 85% 90%)',
          200: 'hsl(280 85% 80%)',
          300: 'hsl(280 85% 70%)',
          400: 'hsl(280 85% 60%)',
          500: 'hsl(280 85% 50%)',
          600: 'hsl(280 85% 40%)',
          700: 'hsl(280 85% 30%)',
          800: 'hsl(280 85% 20%)',
          900: 'hsl(280 85% 10%)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.animation-delay-300': {
          'animation-delay': '300ms',
        },
        '.animation-delay-2000': {
          'animation-delay': '2s',
        },
        '.animation-delay-4000': {
          'animation-delay': '4s',
        },
        '.line-clamp-3': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '3',
        },
        '.line-clamp-2': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '2',
        },
      })
    }),
  ],
}
