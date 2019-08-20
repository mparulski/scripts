const { defaults } = require("jest-config");

module.exports = {
    browser: true,
    collectCoverage: true,
    moduleFileExtensions: ["js", "json", "jsx", "node"],
    notify: true,
    testMatch: [
        "**/__tests__/**/?(*.)+(spec|test).js?(x)",
        "**/?(*.)+(spec|test).js?(x)"
    ],
    testPathIgnorePatterns: [
        "/dist/",
        '[/\\\\]node_modules[/\\\\](?!@assecobs).*\\.(js|jsx|mjs)$',
        "/src/",
        "/__tests__/helpers/"
    ],
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    verbose: true
};