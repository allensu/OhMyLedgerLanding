/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef3ff',
          100: '#dee8ff',
          500: '#1E88E5',
          600: '#1976D2',
          700: '#1565C0',
        },
        ink: {
          900: '#111827',
          700: '#374151',
          500: '#6b7280',
          300: '#d1d5db',
        },
      },
      fontFamily: {
        sans: [
          '"Noto Sans TC"',
          '"Noto Sans SC"',
          '"Noto Sans JP"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 4px 14px 0 rgba(30, 136, 229, 0.10)',
      },
    },
  },
  plugins: [],
};
