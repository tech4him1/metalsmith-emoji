# metalsmith-emoji
[![GitHub issues](https://img.shields.io/github/issues/tech4him1/metalsmith-emoji.svg)](https://github.com/tech4him1/metalsmith-emoji/issues) [![license](https://img.shields.io/github/license/tech4him1/metalsmith-emoji.svg)](https://github.com/tech4him1/metalsmith-emoji/blob/master/LICENSE) ![node](https://img.shields.io/node/v/metalsmith-emoji.svg) [![Greenkeeper badge](https://badges.greenkeeper.io/tech4him1/metalsmith-emoji.svg)](https://greenkeeper.io/) [![Build Status](https://travis-ci.org/tech4him1/metalsmith-emoji.svg?branch=master)](https://travis-ci.org/tech4him1/metalsmith-emoji)

  A Metalsmith plugin to process emoji and convert emoji shortnames, using the EmojiOne list.

## Installation

    $ npm install metalsmith-emoji

## Usage

  This plugin will only process emoji in markdown and HTML files by default. This can be changed through the `pattern` option below, which takes an array of `minimatch` patterns.

  If you want the emoji to be images (PNG) instead of Unicode characters, set `convertToImages` to `true`.

  *Deprecated: If you don't want the plugin to convert shortnames (like `:smile:`) to actual emoji, set `processShortnames` to `false`.*

### Default Options

```js
{
    pattern: ["**/*.md", "**/*.markdown", "**/*.html", "**/*.htm"],
    convertToImages: false
}
```

## Example

```js
var emoji = require('metalsmith-emoji');

metalsmith.use(emoji({
  pattern: ["**/*.md", "**/*.markdown", "**/*.html", "data/*"],
  convertToImages: true
}));
```
