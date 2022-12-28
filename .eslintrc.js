module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "no-console": 0,
    "no-debugger": 0,
    "prettier/prettier": 1,
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/no-unused-vars": 1,
    "@typescript-eslint/ban-types": 1,
    "@typescript-eslint/ban-ts-comment": 1,
    "@typescript-eslint/no-non-null-assertion": 1,
  },
};
