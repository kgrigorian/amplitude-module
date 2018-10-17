# @nuxtjs/amplitude
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/amplitude/latest.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/amplitude)
[![npm](https://img.shields.io/npm/dt/@nuxtjs/amplitude.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/amplitude)
[![CircleCI](https://img.shields.io/circleci/project/github/Calvin-Huang/amplitude-module.svg?style=flat-square)](https://circleci.com/gh/Calvin-Huang/amplitude-module)
[![Codecov](https://img.shields.io/codecov/c/github/Calvin-Huang/amplitude-module.svg?style=flat-square)](https://codecov.io/gh/Calvin-Huang/amplitude-module)
[![Dependencies](https://david-dm.org/Calvin-Huang/amplitude-module/status.svg?style=flat-square)](https://david-dm.org/Calvin-Huang/amplitude-module)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> Amplitude module for Nuxtjs

[📖 **Release Notes**](./CHANGELOG.md)

## Features

Amplitude module for nuxtjs via `vue-amplitude` module.

## Setup
- Add `@nuxtjs/amplitude` dependency using yarn or npm to your project
- Add `@nuxtjs/amplitude` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@nuxtjs/amplitude', { apiKey: '[Your amplitude API_KEY]' }
 ]
}
```

## Options
|       |Prop        |
|-------|------------|
|apiKey |API Key of Amplitude|
|userId (optional) |Initialize Amplitude instance with user id|
|config (optional) |The rest configs you can use simply same to Amplitude-Javascript https://amplitude.zendesk.com/hc/en-us/articles/115001361248#settings-configuration-options|

## Development

- Clone this repository
- Install dependencies using `yarn install` or `npm install`
- Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Calvin Huang <calvin.peak@capslock.tw>
