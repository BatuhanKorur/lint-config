import tailwind from 'eslint-plugin-tailwindcss'

export default function tailwindConfig() {
  return [
    ...tailwind.configs['flat/recommended'],
    {
      rules: {
        'tailwindcss/no-custom-classname': 'off',
      },
    },
  ]
}
