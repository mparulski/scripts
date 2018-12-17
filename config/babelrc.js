module.exports = {
  "presets": [
    ["@babel/env", { "modules": false }],
    "@babel/preset-flow",
    "@babel/react",
    "@babel/typescript"
  ],
  "plugins": [
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-proposal-class-properties"
  ]
}