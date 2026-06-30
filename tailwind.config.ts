import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1B6FC8',
        primaryHover: '#155AA0',
        surface: '#F9FAFB',
        border: '#E5E7EB',
        text: '#1F2937',
        muted: '#6B7280',
        gold: '#F59E0B',
        success: '#10B981',
        badge: '#EFF6FF'
      },
      boxShadow: {
        card: '0 10px 30px rgba(15, 23, 42, 0.06)'
      }
    }
  },
  plugins: []
};

export default config;
