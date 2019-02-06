const ERROR = 2

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },

  extends: [
    'plugin:prettier/recommended',
    'eslint:recommended',
    require.resolve('./rules/best-practices'),
    require.resolve('./rules/errors'),
    require.resolve('./rules/es6'),
    require.resolve('./rules/style'),
    require.resolve('./rules/variables')
  ],

  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  plugins: ['babel', 'jest', 'jsx-a11y', 'prettier', 'react'],

  parser: 'babel-eslint',

  rules: {}
}
