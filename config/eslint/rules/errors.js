const OFF = 0
const ERROR = 2

module.exports = {
  rules: {
    'for-direction': ERROR,
    'getter-return': [ERROR, {allowImplicit: true}],
    'no-async-promise-executor': ERROR,
    'no-await-in-loop': ERROR,
    'no-compare-neg-zero': ERROR,
    'no-cond-assign': [ERROR, 'always'],
    'no-console': ERROR,
    'no-constant-condition': ERROR,
    'no-control-regex': ERROR,
    'no-debugger': ERROR,
    'no-dupe-args': ERROR,
    'no-dupe-keys': ERROR,
    'no-duplicate-case': ERROR,
    'no-empty': ERROR,
    'no-empty-character-class': ERROR,
    'no-ex-assign': ERROR,
    'no-extra-boolean-cast': ERROR,
    'no-extra-parens': [
      OFF,
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false
      }
    ],
    'no-extra-semi': ERROR,
    'no-func-assign': ERROR,
    'no-inner-declarations': ERROR,
    'no-invalid-regexp': ERROR,
    'no-irregular-whitespace': ERROR,
    'no-misleading-character-class': ERROR,
    'no-obj-calls': ERROR,
    'no-prototype-builtins': ERROR,
    'no-regex-spaces': ERROR,
    'no-sparse-arrays': ERROR,
    'no-template-curly-in-string': ERROR,
    'no-unexpected-multiline': ERROR,
    'no-unreachable': ERROR,
    'no-unsafe-finally': ERROR,
    'no-unsafe-negation': ERROR,
    'require-atomic-updates': OFF,
    'use-isnan': ERROR,
    'valid-typeof': [ERROR, {requireStringLiterals: true}]
  }
}
