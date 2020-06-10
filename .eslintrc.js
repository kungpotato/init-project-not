module.exports = {
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'arrow-body-style': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    eqeqeq: ['error', 'always']
  }
}
