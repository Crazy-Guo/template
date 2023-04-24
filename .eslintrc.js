module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'vue/component-definition-name-casing': ['error', 'PascalCase' | 'kebab-case'],
    'new-cap': ['error', { newIsCap: false }],
    'vue/multi-word-component-names': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    'max-len': ['warn', { code: 880 }],
    indent: [2, 2, {
      SwitchCase: 1,
      outerIIFEBody: 1,
    }],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
    },
  ],
};
