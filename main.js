import eslint from '@eslint/js'
import options from './src/options.js'
import typescriptConfig from './src/typescript.js'
import stylisticConfig from './src/stylistic.js'
import vueConfig from './src/vue.js'
import tailwindConfig from './src/tailwind.js'

const pluginsDefault = {
  typescript: true,
  vue: true,
  tailwind: true,
}

export function config(plugins = { ...pluginsDefault }) {
  let configs = [
    eslint.configs.recommended,
    {
      ...options(plugins.typescript),
    }, {
      ...stylisticConfig(),
    },
  ]

  if (plugins.typescript) {
    configs.push(...typescriptConfig())
  }

  if (plugins.vue) {
    configs.push(...vueConfig())
  }

  if (plugins.tailwind) {
    configs.push(...tailwindConfig())
  }

  return configs
}
