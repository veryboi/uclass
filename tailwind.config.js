/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#48C5EE",

          "secondary": "#EC6060",

          "accent": "#14b8a6",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#f5d0fe",

          "success": "#4ade80",

          "warning": "#facc15",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
}
