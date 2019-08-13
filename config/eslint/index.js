const BABEL = 'babel'
const TYPESCRIPT = 'typescript'

const getIfDep = (has, dep) => (has ? dep : '')

const defaultConfig = {
  parser: BABEL, // BABEL | TYPESCRIPT
  react: true // true | false
}

const getParser = (option) => {
  switch (option) {
    case TYPESCRIPT:
      return '@typescript-eslint/parser'
    default:
      return 'babel-eslint'
  }
}

module.exports = (config = defaultConfig) => ({
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
  },

  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/style',
    './rules/variables',
    getIfDep(config.react, './react/react')
  ].filter(Boolean)
    .map(require.resolve),

  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: [
    'jest',
    'prettier',
    getIfDep(config.react, 'react'),
    getIfDep(config.react, 'jsx-a11y')
  ].filter(Boolean),

  parser: getParser(config.parser),

  rules: {},
})
