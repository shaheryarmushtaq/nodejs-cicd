/** @type {import('eslint').FlatConfig} */
const config = [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
      },
    },
    rules: {
      'no-console': 'warn',
    },
  },
];

module.exports = config;

