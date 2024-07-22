import pluginVue from 'eslint-plugin-vue'

export default function vueConfig() {
  return [
    ...pluginVue.configs['flat/recommended'],
    {
      files: ['**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',
        'vue/max-attributes-per-line': ['error', {
          singleline: {
            max: 2,
          },
          multiline: {
            max: 1,
          },
        }],
        'vue/first-attribute-linebreak': ['error', {
          singleline: 'beside',
          multiline: 'beside',
        }],
        'vue/v-slot-style': ['error', {
          named: 'shorthand',
        }],
        'vue/html-closing-bracket-spacing': ['error', {
          selfClosingTag: 'always',
        }],
      },
    },
  ]
}
