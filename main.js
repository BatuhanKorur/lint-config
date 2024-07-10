// Plugins
import globals from 'globals'
import plugin_js from '@eslint/js'
import plugin_style from '@stylistic/eslint-plugin'
import plugin_vue from 'eslint-plugin-vue'
import plugin_typescript from 'typescript-eslint'
import plugin_tailwind from 'eslint-plugin-tailwindcss'
import plugin_unicorn from 'eslint-plugin-unicorn'

// Custom Rules
import rules_stylistic from './rules/stylistic.js'
import rules_vue from './rules/vue.js'
import rules_unicorn from './rules/unicorn.js'

export function lint(options = {
  typescript: true,
}) {
  const eslintConfig = [
    plugin_js.configs.recommended,
    plugin_style.configs['recommended-flat'],
    plugin_unicorn.configs['flat/recommended'],
    ...plugin_typescript.configs.recommended,
    ...plugin_vue.configs['flat/essential'],
    ...plugin_tailwind.configs['flat/recommended'],
  ]

  if (options.typescript) {
    eslintConfig.push({
      languageOptions: {
        parserOptions: {
          parser: '@typescript-eslint/parser',
          sourceType: 'module',
        },
      },
    })
  }

  eslintConfig.push({
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  }, {
    // @ Stylistic Rules
    plugins: {
      '@stylistic': plugin_style,
    },
    rules: rules_stylistic,
  }, {
    // @ Vue Rules
    files: ['**/*.vue'],
    rules: rules_vue,
  }, {
    // @ Unicorn Rules
    plugins: {
      '@unicorn': plugin_unicorn,
    },
    rules: rules_unicorn,
  })

  return eslintConfig
}
