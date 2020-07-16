# nuxt-amplitude

[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-amplitude/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-amplitude-plugin)
[![npm](https://img.shields.io/npm/dt/nuxt-amplitude.svg?style=flat-square)](https://npmjs.com/package/nuxt-amplitude-plugin)

> Amplitude module for Nuxtjs.

[📖 **Release Notes**](./CHANGELOG.md)

## Features

Amplitude module for nuxtjs via `vue-amplitude-js` module.

## Setup

- Add `nuxt-amplitude-plugin` dependency using yarn or npm to your project
- Add `nuxt-amplitude-plugin` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    "nuxt-amplitude-plugin",
    { apiKey: "[Your amplitude API_KEY]" }
  ];
}
```

## Options

|                   | Prop                                                                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| apiKey            | API Key of Amplitude                                                                                                                                         |
| userId (optional) | Initialize Amplitude instance with user id                                                                                                                   |
| config (optional) | The rest configs you can use simply same to Amplitude-Javascript https://amplitude.zendesk.com/hc/en-us/articles/115001361248#settings-configuration-options |

## Development

- Clone this repository
- Install dependencies using `yarn install` or `npm install`
- Start development server using `npm run dev`

## License

[MIT License](./LICENSE)
