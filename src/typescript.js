import tslint from 'typescript-eslint'

export default function typescriptConfig() {
  return [
    ...tslint.configs.recommended,
    {
      plugins: {
        typescript: tslint,
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ]
}
