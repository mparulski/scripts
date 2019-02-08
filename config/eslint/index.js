const ERROR = 2

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },

  extends: ['./rules/best-practices', './rules/errors', './rules/es6', './rules/style', './rules/variables'].map(require.resolve),

  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  plugins: ['jest', 'jsx-a11y', 'prettier', 'react'],

  parser: 'babel-eslint',

  rules: {}
}
