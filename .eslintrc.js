module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'react-hooks',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/require-default-props': 'off',
    'react/button-has-type': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'no-shadow': 'off',
    'require-await': 'off',
    // '@typescript-eslint/require-await': 'error',
    'import/extensions': ['error', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      scss: 'always',
    }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
