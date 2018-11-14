module.exports = {
    env: {
        browser: true,
        es6: true
    },

    extends: ["airbnb", "plugin:prettier/recommended"],

    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: "module"
    },

    plugins: [
        "prettier",
        "react"
    ],

    parser: "babel-eslint",

    rules: {
        "arrow-parens": ["error", "as-needed"],
        "class-methods-use-this": "off",
        "comma-dangle": ["error", {
            "arrays": "never",
            "objects": "never",
            "imports": "never",
            "exports": "never",
            "functions": "ignore"
        }],
        "indent": ["error", 2, { "SwitchCase": 1 }],
        "max-len": ["error", { "code": 120 }],
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],
        "no-underscore-dangle": ["off"],
        "quotes": ["error", "single"],
        "semi": ["error", "never"],
        "symbol-description": "off",

        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-indent": ["error", 2],
        "react/jsx-indent-props": ["error", 2],
        "react/prop-types": ["error", {
            "ignore": ["dispatch", "saveParameters", "intl"],
            "customValidators": [],
            "skipUndeclared": false
        }],
        "react/forbid-prop-types": ["error", {
            "forbid": ["array", "any"]
        }],

        "import/extensions": ["off"],
        "import/no-extraneous-dependencies": ["off"],
        "import/no-unresolved": ["off"],
        "import/prefer-default-export": ["off"],

        "prettier/prettier": "error"
    }
};