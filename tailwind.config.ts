import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        paper: '#f7f7f4',
        line: '#e8e8e3',
        muted: '#6f716c',
        moss: '#536253',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(17,17,17,0.08)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(.2,.7,.2,1)',
      },
    },
  },
  plugins: [],
}

export default config
