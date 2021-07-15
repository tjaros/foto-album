// tailwind.config.js
module.exports = {
  future: {},
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'landingPicture': "url('../images/landingPicture.png')"
      }),
      fontFamily: {
        secondary: ['Qwigley'],
      }
    },
  },
  variants: {},
  plugins: [],
}
