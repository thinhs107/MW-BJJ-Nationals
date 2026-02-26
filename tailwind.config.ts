import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#CC0000',
          hot: '#FF1A1A',
          dark: '#8B0000',
        },
        black: {
          DEFAULT: '#0A0A0A',
          mid: '#111111',
          card: '#161616',
          border: '#222222',
        },
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'cursive'],
        barlow: ['var(--font-barlow)', 'sans-serif'],
        barlowc: ['var(--font-barlow-condensed)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
