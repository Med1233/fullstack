module.exports = {
  extends:
    './node_modules/@centreon/js-config/eslint/react/typescript.eslintrc.js',
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', '.']
      }
    }
  }
};
