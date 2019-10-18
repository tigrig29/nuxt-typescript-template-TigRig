# nuxt-typescript-template-TigRig
Nuxt 2.9 + TypeScript のテンプレート（個人的によく使うモジュール込み）

## 導入しているもの一覧

### 基本
- Nuxt 2.10.0
- Axios
- PWA
- ESLint
- Prettier

### TypeScript 関連
- @nuxt/typescript-build
- @nuxt/typescript-runtime
- nuxt-property-decorator
  - Nuxt TypeScript の Class API を使うため
- vuex-module-decorators
  - Vuex（Store）も TypeScript で記述するため
  
### SCSS

- node-sass
- sass-loader
- style-resources
  - グローバルに定義した SCSS 変数や mixins を呼び出すため

### その他
- FontAwesome
  - nuxt-fontawesome
  - @fortawesome/fontawesome-svg-core
  - @fortawesome/free-solid-svg-icons
  - @fortawesome/vue-fontawesome
