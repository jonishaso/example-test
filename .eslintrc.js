module.exports = {
  env: {
    browser: true,
    es6: true, // gets Promise working
    jest: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['react', 'sort-destructure-keys'],
  root: true,
  rules: {
    'dot-notation': 'error',
    eqeqeq: 'error',
    indent: 'off',
    'linebreak-style': ['error', 'unix'],
    'no-param-reassign': 'error',
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-exponentiation-operator': 'error',
    'prettier/prettier': ['error'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'react/display-name': 'off',
    'react/jsx-sort-props': [
      2,
      {
        ignoreCase: true
      }
    ],
    'react/no-unescaped-entities': 'off',
    'react/prop-types': [0],
    semi: 'off',
    'sort-destructure-keys/sort-destructure-keys': [2, { caseSensitive: false }],
    'sort-keys': ['error', 'asc', { caseSensitive: false, natural: true, minKeys: 2 }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
