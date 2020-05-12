module.exports = {
  extends: ['prettier-standard'],
  plugins: ['node'],
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  }
}
