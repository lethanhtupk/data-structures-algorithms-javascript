module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "no-unused-vars": ["warn"],
    "prettier/prettier": ["error", {"endOfLine": "auto"}],
    "quotes": ["single"]
  },
};
