module.exports = {
  extends: ["plugin:astro/recommended"],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "astro/no-set-html-directive": "error",
        "astro/no-set-text-directive": "error",
        "astro/no-unused-css-selector": "error",
        semi: "off", // Don't need ESLint's semi
        "astro/semi": [
          "error",
          "always", // or "never"
          { omitLastInOneLineBlock: true },
          // or { "beforeStatementContinuationChars": "any" | "always" | "never" }
        ],
      },
    },
  ],
};
