/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  semi: false,
  singleQuote: true,
  trailingComma: "all",
  printWidth: 100,
  tailwindFunctions: ["clsx"],
};

export default config;
