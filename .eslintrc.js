module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ['standard'],
  globals: {
    program: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {}
}
