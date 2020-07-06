module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "git.confirmSync": false,
  "window.zoomLevel": 1,
  "typescript.validate.enable": true,
  "explorer.confirmDragAndDrop": false,
  "javascript.updateImportsOnFileMove.enabled": "never",
  "workbench.editor.showTabs": true,
  "eslint.alwaysShowStatus": true,
    "typescript.updateImportsOnFileMove.enabled": "never",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue"
};
