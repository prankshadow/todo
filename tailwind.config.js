/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dotted': 'radial-gradient(lightgrey 1px, transparent 1px), radial-gradient(lightgrey 1px, transparent 1px)',
      },
      backgroundSize: {
        'dotted': '50px 50px',
      },
      backgroundPosition: {
        'dotted': '0 0, 100px 100px',
      },
    },
  },
  plugins: [],
}
