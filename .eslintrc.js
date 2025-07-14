module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  settings: { react: { version: 'detect' } },
  env: { browser: true, es2021: true },
  rules: { 'react/prop-types': 'off' },
};