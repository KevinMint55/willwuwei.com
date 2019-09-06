module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base'
  ],
  settings: {},
  rules: {
    "template-curly-spacing" : "off",
    indent : "off",
    'linebreak-style': 'off',
    'no-mixed-operators': 'off',
    'max-len': [1, 200],
    'default-case': 0,
    'func-names': 0,
    'no-param-reassign': 0,
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'no-lonely-if': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'global-require': 0,
    'prefer-promise-reject-errors': 'off',
    'no-restricted-globals': ['error', 'event'],
  }
}
