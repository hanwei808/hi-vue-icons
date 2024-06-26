# Hi, Vue Icons!

[![license](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**English** | [中文说明](README-CN.md)

A [Vue](https://vuejs.org/) component for including inline SVG icons from different popular icon packs easily.

&nbsp;

## Features

- Works for both Vue 2 & 3
- Supports tree-shaking: only import the icons you want
- 30000+ icons from 21 popular icon packs, see [here](#supported-icon-packs)

&nbsp;

## Supported Icon Packs

Now the following 21 icon packs are supported:

| Icon Pack                                                                         | Prefix | License                                                                                    | Counts |
| --------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------ | ------ |
| [Element Plus Icons](https://github.com/element-plus/element-plus-icons)          | `el`   | [MIT](https://github.com/element-plus/element-plus-icons/blob/main/LICENSE)                | 293    |
| [academicons](https://github.com/jpswalsh/academicons)                            | `ai`   | [SIL OFL 1.1](http://scripts.sil.org/OFL)                                                  | 149    |
| [Bootstrap Icons](https://github.com/twbs/icons)                                  | `bi`   | [MIT](https://github.com/twbs/icons/blob/main/LICENSE.md)                                  | 1668   |
| [CoreUI Icons Free](https://github.com/coreui/coreui-icons) (Colorful)            | `co`   | [CC BY 4.0 License](https://github.com/coreui/coreui-icons/blob/master/LICENSE)            | 1575   |
| [Cryptocurrency Icons](https://github.com/spothq/cryptocurrency-icons) (Colorful) | `ci`   | [CC0 1.0 Universal](https://github.com/spothq/cryptocurrency-icons/blob/master/LICENSE.md) | 942    |
| [Font Awesome 5 Free](https://github.com/FortAwesome/Font-Awesome)                | `fa`   | [CC BY 4.0](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt)           | 1610   |
| [Flat Color Icons](https://github.com/icons8/flat-color-icons) (Colorful)         | `fc`   | [MIT / Good Boy](https://github.com/icons8/flat-color-icons/blob/master/LICENSE.md)        | 329    |
| [Flag Icon](https://github.com/lipis/flag-icon-css) (Colorful)                    | `fi`   | [MIT](https://github.com/lipis/flag-icon-css/blob/master/LICENSE)                          | 530    |
| [gameicons](https://github.com/game-icons/icons)                                  | `gi`   | [CC BY 3.0](https://github.com/game-icons/icons/blob/master/license.txt)                   | 4052   |
| [Heroicons](https://github.com/tailwindlabs/heroicons)                            | `hi`   | [MIT](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE)                       | 460    |
| [Ionicons](https://github.com/ionic-team/ionicons)                                | `io`   | [MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)                          | 1332   |
| [Line Awesome](https://github.com/icons8/line-awesome)                            | `la`   | [MIT / Good Boy](https://github.com/icons8/line-awesome/blob/master/LICENSE.md)            | 1544   |
| [Material Design icons](https://github.com/google/material-design-icons)          | `md`   | [Apache 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE)          | 10537  |
| [Octicons](https://github.com/primer/octicons)                                    | `oi`   | [MIT](https://github.com/primer/octicons/blob/main/LICENSE)                                | 259    |
| [Pokemon Icons](https://github.com/TheArtificial/pokemon-icons) (Colorful)        | `pi`   | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)                                  | 1453   |
| [PrimeIcons](https://github.com/primefaces/primeicons)                            | `pr`   | [MIT](https://github.com/primefaces/primeicons/blob/master/LICENSE)                        | 238    |
| [Pixelarticons](https://github.com/halfmage/pixelarticons)                        | `px`   | [MIT](https://github.com/halfmage/pixelarticons/blob/master/LICENSE)                       | 460    |
| [Remix Icon](https://github.com/Remix-Design/RemixIcon)                           | `ri`   | [Apache 2.0](https://github.com/Remix-Design/RemixIcon/blob/master/License)                | 2271   |
| [Simple Icons](https://github.com/simple-icons/simple-icons)                      | `si`   | [CC0 1.0 Universal](https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md)  | 2233   |
| [VSCode Icons](https://github.com/vscode-icons/vscode-icons) (Colorful)           | `vi`   | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)                            | 1125   |
| [Weather Icons](https://github.com/erikflowers/weather-icons)                     | `wi`   | [SIL OFL 1.1](http://scripts.sil.org/OFL)                                                  | 219    |

&nbsp;

## Documentation

Search for icons and view the documentation [here](https://icons.hanwei.io).

&nbsp;

## Installation

```bash
yarn add hi-vue-icons
# or
npm install hi-vue-icons
```

For Vue 2, you'll also need `@vue/composition-api`:

```bash
yarn add @vue/composition-api -D
```

Or if you are using [Nuxt 2](https://nuxtjs.org/), you'll need `@nuxtjs/composition-api` instead:

```bash
yarn add @nuxtjs/composition-api -D
```

then add `@nuxtjs/composition-api/module` to the `buildModules` option in your `nuxt.config.js`, see [here](https://composition-api.nuxtjs.org/getting-started/setup) for details.

&nbsp;

## Import

### Global Import

Import `hi-vue-icons` and install it into Vue in `main.js`. You can only import the icons you need to reduce the bundle size.

#### Vue 3

```js
// main.js
import { createApp } from "vue";
import App from "./App.vue";

import { HiVueIcon, addIcons } from "hi-vue-icons";
import { FaFlag, RiZhihuFill } from "hi-vue-icons/icons";

addIcons(FaFlag, RiZhihuFill);

const app = createApp(App);
app.component("v-icon", HiVueIcon);
app.mount("#app");
```

If you don't care about the bundle size and want to import a whole icon pack, you may should:

```js
// main.js
// import Font Awesome
import * as FaIcons from "hi-vue-icons/icons/fa";

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);
```

#### Vue 2

```js
// main.js
import Vue from "vue";
import App from "./App.vue";

import { HiVueIcon, addIcons } from "hi-vue-icons";
import { FaFlag, RiZhihuFill } from "hi-vue-icons/icons";

addIcons(FaFlag, RiZhihuFill);

Vue.component("v-icon", HiVueIcon);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
```

&nbsp;

### Local Import

```js
import HiVueIcon from "hi-vue-icons";

export default {
  components: {
    "v-icon": HiVueIcon
  }
};
```

&nbsp;

## Usage

The icon names should be passed using **kebab-case**.

```html
<template>
  <div>
    <v-icon name="fa-flag" />
    <v-icon name="ri-zhihu-fill" />
  </div>
</template>
```

For [Font Awesome 5](https://fontawesome.com/) icons, icons from `regular` pack have name prop values like `fa-regular-flag`. Icons from `solid` and `brands` pack have name prop values like `fa-beer` and `fa-github`.

See the [documentation](https://icons.hanwei.io/docs#basic-usage) for more about the usage.

&nbsp;

## Props

| Name        | Description                              | Type      | Accepted Values                                                         | Default value  |
| ----------- | ---------------------------------------- | --------- | ----------------------------------------------------------------------- | -------------- |
| `scale`     | Icon size                                | `number`  | /                                                                       | `1`            |
| `animation` | Type of animation                        | `string`  | `wrench` / `ring` / `pulse` / `spin` / `spin-pulse` / `flash` / `float` | /              |
| `speed`     | Animation speed                          | `string`  | `slow` / `fast`                                                         | /              |
| `hover`     | Enable animation only when being hovered | `boolean` | `true` / `false`                                                        | `false`        |
| `flip`      | Used to flip icon                        | `string`  | `vertical` / `horizontal` / `both`                                      | /              |
| `fill`      | Fill color of icon                       | `string`  | HEX color code or color name                                            | `currentColor` |
| `label`     | Icon lable                               | `string`  | /                                                                       | /              |
| `title`     | Icon title                               | `string`  | /                                                                       | /              |
| `inverse`   | Make icon color white?                   | `boolean` | `true` / `false`                                                        | `false`        |

Some examples could be found in the [documentation](https://icons.hanwei.io/docs#examples).

&nbsp;

## Nuxt

When using Nuxt, you need to register `hi-vue-icons` as a plugin following [Nuxt's documentation](https://nuxtjs.org/docs/directory-structure/plugins#vue-plugins).

It should be noted that, `hi-vue-icons` should be added to the `build.transpile` option in your `nuxt.config.js` (see [here](https://nuxtjs.org/docs/directory-structure/plugins/#es6-plugins) for details):

```js
export default {
  // ...
  build: {
    transpile: ["hi-vue-icons"]
  }
};
```

To render the icon component only on client-side, you may need to wrap it in a `<client-only>` tag:

```html
<template>
  <div>
    <client-only>
      <v-icon name="fa-flag" />
      <v-icon name="ri-zhihu-fill" />
    </client-only>
  </div>
</template>
```

&nbsp;

## Vite

When using [Vite](https://vitejs.dev/), it is suggested to exclude `hi-vue-icons` from pre-bundling:

```js
// vite.config.js

export default {
  // ...
  optimizeDeps: {
    exclude: ["hi-vue-icons/icons"]
  }
};
```

When using Vite's [Server-Side Rendering (SSR)](https://vitejs.dev/guide/ssr.html) support ([VuePress](https://v2.vuepress.vuejs.org/), [Vite SSG](https://github.com/antfu/vite-ssg), etc.), `hi-vue-icons` should be added to the `ssr.noExternal` option (see [here](https://vitejs.dev/guide/ssr.html#ssr-externals) for details):

```js
// vite.config.js

export default {
  // ...
  ssr: {
    noExternal: ["hi-vue-icons"]
  }
};
```

&nbsp;

## Contributing

Contributions are welcomed, see the [contribution guides](CONTRIBUTING.md).

&nbsp;

## Acknowledgements

- This project is inspired by and based on [vue-awesome](https://github.com/Justineo/vue-awesome) and [react-icons](https://github.com/react-icons/react-icons)

&nbsp;

## License

This project is [MIT](LICENSE) licensed. Icons are taken from [other projects](#supported-icon-packs), so check the license of each accordingly.
