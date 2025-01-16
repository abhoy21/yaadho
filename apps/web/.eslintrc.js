module.exports = {
  extends: ["@repo/eslint-config/next.js"],
  rules: {
    "no-console": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        // Allow camelCase for variables and functions
        selector: "variable",
        format: ["camelCase"],
      },
      {
        // Allow PascalCase for classes and interfaces
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        // Allow UPPER_SNAKE_CASE for constants
        selector: "constant",
        format: ["UPPER_CASE", "UPPER_SNAKE_CASE"],
      },
      {
        // Allow specific names (e.g., 'props', 'context') in any format
        selector: "variable",
        format: null, // Disable formatting for these names
        filter: {
          regex: "^props$|^context$",
          match: true,
        },
      },
    ],
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "react/no-array-index-key": "off",
    "import/no-named-as-default": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-redundant-type-constituents": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          arguments: false,
          attributes: false,
        },
      },
    ],
    "turbo/no-undeclared-env-vars": [
      "error",
      {
        allowList: [
          "DATABASE_URL",
          "NEXTAUTH_SECRET",
          "GITHUB_ID",
          "GITHUB_SECRET",
          "GOOGLE_CLIENT_ID",
          "GOOGLE_CLIENT_SECRET",
          "GEMINI_API_KEY",
          "NODE_ENV",
        ],
      },
    ],
  },
};
