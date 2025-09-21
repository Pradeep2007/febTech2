/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal-prime': '#00897B',
        'teal': {
          50: '#E0F2F1',
          100: '#B2DFDB',
          200: '#80CBC4',
          300: '#4DB6AC',
          400: '#26A69A',
          500: '#00897B',
          600: '#00796B',
          700: '#00695C',
          800: '#00574B',
          900: '#004D40',
          'prime': '#00897B',
        },
        'light-teal': '#80CBC4',
        'orange': {
          DEFAULT: '#FF7043',
          50: '#FFF3F0',
          100: '#FFE4DE',
          200: '#FFCAB8',
          300: '#FFB092',
          400: '#FF966C',
          500: '#FF7043',
          600: '#FF5722',
          700: '#E64A19',
          800: '#BF360C',
          900: '#8D2F0A',
        },
        'blue': {
          DEFAULT: '#4467A3',
          50: '#F0F2F8',
          100: '#E1E6F1',
          200: '#C3CDE3',
          300: '#A5B4D5',
          400: '#879BC7',
          500: '#4467A3',
          600: '#3A5A8F',
          700: '#2F4C7B',
          800: '#253F67',
          900: '#1A3153',
        },
        'light-gray': '#FAFAFA',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
