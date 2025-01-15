module.exports = {
  extends: ["@repo/eslint-config/next.js"],
  rules: {
    "@typescript-eslint/naming-convention": "error",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "react/no-array-index-key": "off",
    "import/no-named-as-default": "off",
    "@typescript-eslint/no-explicit-any": "off",
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
