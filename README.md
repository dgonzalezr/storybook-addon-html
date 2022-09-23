# Storybook Addon HTML

This addon for Storybook adds a tab that displays the compiled HTML for each
story. It uses [highlight.js](https://highlightjs.org/) for syntax highlighting.

![Animated preview](https://raw.githubusercontent.com/whitespace-se/storybook-addon-html/master/image.gif)

## Getting Started

With NPM:

```sh
npm i --save-dev @dgonzalezr/storybook-addon-html
```

With Yarn:

```sh
yarn add -D @dgonzalezr/storybook-addon-html
```

### Register addon

```js
// .storybook/main.js

module.exports = {
  // ...
  addons: [
    '@dgonzalezr/storybook-addon-html',
    // ...
  ],
};
```

## Usage

The HTML is formatted with Prettier. You can override the Prettier config
(except `parser` and `plugins`) by providing an object following the
[Prettier API override format](https://prettier.io/docs/en/options.html) in the
`html` parameter:

```js
// .storybook/preview.js

export const parameters = {
  // ...
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  },
};
```

You can override the wrapper element selector used to grab the component HTML.

```js
export const parameters = {
  html: {
    root: '#my-custom-wrapper', // default: #root
  },
};
```

When using Web Components, the HTML will contain empty comments, i.e. `<!---->`, or `<!--..lit$..-->` if using [lit-html](https://lit.dev/docs/). If you want to remove these, use the `removeComments` parameter:

```js
export const parameters = {
  html: {
    removeComments: true, // default: false
  },
};
```

you can also provide your own regular expression to remove specific HTML comments:

```js
export const parameters = {
  html: {
    // Remove only lit HTML comments, eg: `<!--?lit$117057236$-->`
    removeComments: /<!--(.lit.*?)-->/g, 
  },
};
```

You can override the `showLineNumbers` and `wrapLines` settings for the syntax
highlighter by using the `highlighter` parameter:

```js
export const parameters = {
  html: {
    highlighter: {
      showLineNumbers: true, // default: false
      wrapLines: false, // default: true
    },
  },
};
```

## Supported frameworks

As of version 4.0.0 all frameworks are supported per default 🎉
