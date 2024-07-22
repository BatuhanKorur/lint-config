import globals from 'globals'
export default function options(typescript) {
  let opt = {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
  }

  if (typescript) {
    opt.languageOptions.parserOptions = {
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
    }
  }

  return opt
}
