/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        ibm: ['IBM Plex Sans', 'sans-serif'],
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1.0' },
        },
        moveup: {
          '0%': {
            opacity: '0',
            transform: 'translateY(100%)',
          },
          100: {
            opacity: '1.0',
            transform: 'translateY(-100%)',
          },
        },
        movedown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-100%)',
          },
          100: {
            opacity: '1.0',
            transform: 'translateY(100%)',
          },
        },
        moveleft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(100%)',
          },
          100: {
            opacity: '1.0',
            transform: 'translateX(-100%)',
          },
        },
        moveright: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          100: {
            opacity: '1.0',
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        fadein: 'fadein 0.4s ease-in',
        moveup: 'moveup 0.5s ease-in-out',
        movedown: 'movedown 0.5s ease-in-out',
        moveright: 'moveright 0.2s ease-in-out',
        moveleft: 'moveleft 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};
