module.exports = {
    extends: [
        "eslint:recommended",
        "react-app",
        'plugin:react/recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'jest', 'prettier'],
    rules: {},
};