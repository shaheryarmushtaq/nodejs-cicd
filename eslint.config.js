/** @type {import('eslint').FlatConfig} */
const config = [
  {
    languageOptions: {
      globals: {
        browser: true,
        es2021: true,
      },
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
      },
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      // Add other rules as needed
    },
  },
];

module.exports = config;

