# @BatuhanKorur/lint-config
---
Eslint rule configs for Javascript, Typescript and Vue.js projects

## Installation
To install, add it with eslint to your dev dependencies
```
pnpm add -D eslint @batuhankorur/lint-config
```

## Usage
```js
import { lint } from '@batuhankorur/lint-config'
export default [
  ...lint(),
]
```

## Config View
Open up eslint/config-inspector to view rules
```
pnpm run view
```
