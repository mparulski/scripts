const BABEL = 'babel'
const TYPESCRIPT = 'typescript'

const getIfDep = (has, dep) => (has ? dep : '')

const defaultConfig = {
  parser: BABEL, // BABEL | TYPESCRIPT
  react: true // true | false
}

const getParser = function (option) {
  switch (option) {
    case TYPESCRIPT:
      return '@typescript-eslint/parser'
    default:
      return 'babel-eslint'
  }
}

module.exports = function (config = defaultConfig) {
  return {
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      jest: true,
    },

    extends: ['./rules/best-practices', './rules/errors', './rules/es6', './rules/style', './rules/variables', getIfDep(config.react, './react/react')]
      .filter(Boolean)
      .map(require.resolve),

    parserOptions: {
      ecmaVersion: 2019,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },

    plugins: ['jest', 'jsx-a11y', 'prettier', getIfDep(config.react, 'react')],

    parser: getParser(config.parser),

    rules: {},
  }
}
