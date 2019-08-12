var BABEL = 'babel'
var TYPESCRIPT = 'typescript'

var defaultConfig = {
  parser: BABEL // BABEL | TYPESCRIPT
}

var getParser = function(option) {
  switch (option) {
    case TYPESCRIPT:
      return '@typescript-eslint/parser'
    default:
      return 'babel-eslint'
  }
}

module.exports = function(config = defaultConfig) {
  return {
    env: {
      amd: true,
      browser: true,
      commonjs: true,
      es6: true,
      jest: true,
      node: true,
      worker: true
    },

    extends: ['./rules/best-practices', './rules/errors', './rules/es6', './rules/style', './rules/variables'].map(require.resolve),

    parserOptions: {
      ecmaVersion: 2019,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },

    plugins: ['jest', 'jsx-a11y', 'prettier', 'react'],

    parser: getParser(config.parser),

    rules: {}
  }
}
