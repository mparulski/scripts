const ERROR = 2

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },

  extends: ['plugin:prettier/recommended', 'eslint:recommended', './rules/errors', './rules/best-practices', './rules/es6', './rules/style', './rules/variables'].map(
    require.resolve
  ),

  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  plugins: ['babel', 'jest', 'jsx-a11y', 'react'],

  parser: 'babel-eslint',

  rules: {
    /* Variables */
    'init-declarations': [ERROR, 'always'],
    'no-label-var': ERROR,

    /* ECMAScript 6 */

    /* stylistic */
    indent: [ERROR, 2],
    'linebreak-style': [ERROR, 'unix'],
    'comma-dangle': [ERROR, 'never'],
    quotes: [ERROR, 'single'],
    semi: [ERROR, 'never']
  }
}
