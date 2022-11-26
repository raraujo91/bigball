module.exports = {
  plugins: {
    tailwindcss: {
      content: ['./src/**/*.{html,js,svelte,ts}'],  
      theme: {
        extend: {
          dropShadow: {
            'emerald': '0px 0px 7px rgb(16 185 129)'
          }
        },
      },
      plugins: [],
    },
    autoprefixer: {},
  },
}
