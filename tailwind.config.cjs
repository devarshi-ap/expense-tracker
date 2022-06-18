/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  theme: {
    extend: {
        'animation': {
            'text':'text 10s ease infinite',
        },
        'keyframes': {
            'text': {
                '0%, 100%': {
                   'background-size':'200% 200%',
                    'background-position': 'left center'
                },
                '50%': {
                   'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            },
        },
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      metal: '#565584',
      blue: '#87ceeb',
      green: '#80e316',
      red: '#d6001b',
    },
  },
  plugins: [],
};
