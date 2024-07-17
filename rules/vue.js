export default {
  'vue/multi-word-component-names': 'off',
  'vue/max-attributes-per-line': ['error', {
    singleline: { max: 3 },
  }],
  'vue/singleline-html-element-content-newline': ['error', {
    ignoreWhenNoAttributes: true,
    ignoreWhenEmpty: true,
    ignores: ['pre', 'p', 'span'],
  }],
}
