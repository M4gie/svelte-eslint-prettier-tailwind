module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindConfig: "./tailwind.config.cjs",
  svelteSortOrder: "options-styles-scripts-markup",
  svelteStrictMode: true,
  svelteAllowShorthand: false,
  svelteIndentScriptAndStyle: false,
};
