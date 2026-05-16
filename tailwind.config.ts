import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
          soft: 'rgba(79, 70, 229, 0.10)',
        },
        secondary: {
          DEFAULT: '#9C4FE0',
          soft: 'rgba(156, 79, 224, 0.12)',
        },
        accent: {
          DEFAULT: '#7B4FD8',
          soft: 'rgba(123, 79, 216, 0.12)',
        },
        royal: '#7B4FD8',
        wisteria: {
          DEFAULT: '#F1EBF8',
          2: '#E6DAF3',
        },
        bg: '#FCFAFE',
        surface: '#FFFFFF',
        ink: '#1F1B4A',
        muted: '#6B5E8C',
        border: '#ECE3F4',
        subtle: '#F1EBF8',
        success: {
          DEFAULT: '#10B981',
          soft: '#E1F5EC',
          ink: '#047857',
        },
        warn: '#F97316',
        danger: '#EF4444',
        info: '#4F46E5',
      },
      fontFamily: {
        body: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '22px',
        '2xl': '28px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(31, 27, 74, 0.05), 0 4px 12px rgba(31, 27, 74, 0.06)',
        lifted: '0 8px 24px rgba(31, 27, 74, 0.08), 0 4px 8px rgba(31, 27, 74, 0.04)',
        modal: '0 20px 50px rgba(31, 27, 74, 0.20)',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.16, 1, 0.3, 1)',
        spring: 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
} satisfies Config;
