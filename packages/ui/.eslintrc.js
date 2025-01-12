module.exports = {
  extends: ["@repo/eslint-config/react.js"],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    // Add custom rules here
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    // Add more rules as needed
  },
};
