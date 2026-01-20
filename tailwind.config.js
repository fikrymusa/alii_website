

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#f8fafc',
        accent: '#3b82f6',
        customGray : '#f5f3ed',

//         bg-gradient-to-br from-yellow-200 to-cyan-400
// biru_jelas #0F67B1
// biru_soft #3FA2F6
// biru_light #96C9F4
// kuning_soft #FAFFAF
        biru_jelas : '#0F67B1',
        biru_soft : '#3FA2F6',
        biru_light : '#96C9F4',
        kuning_soft : '#FAFFAF',
        abu_soft : '#f5f3eb',
        gray: {
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
                kufi: ['NotoKufiArabic', 'sans-serif'],

        sans: ['Inter', 'system-ui', 'sans-serif'],
         inter: ['"Inter Display"', "sans-serif"],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
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