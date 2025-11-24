/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        merino: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5f5',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        pine: '#0b5c4f',
        ember: '#d97757',
        sand: '#f6e8d7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 48px -24px rgba(15, 23, 42, 0.3)',
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle at top left, rgba(217, 119, 87, 0.18), transparent 45%), radial-gradient(circle at top right, rgba(11, 92, 79, 0.14), transparent 40%)',
      },
    },
  },
  plugins: [],
}
