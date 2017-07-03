# metalsmith-emoji
[![GitHub issues](https://img.shields.io/github/issues/tech4him1/metalsmith-emoji.svg)](https://github.com/tech4him1/metalsmith-emoji/issues) [![license](https://img.shields.io/github/license/tech4him1/metalsmith-emoji.svg)](https://github.com/tech4him1/metalsmith-emoji/blob/master/LICENSE) ![node](https://img.shields.io/node/v/metalsmith-emoji.svg)

  A Metalsmith plugin to convert emoji shortnames to emoji, using the EmojiOne list.

## Installation

    $ npm install metalsmith-emoji

## Usage

  This plugin will only process emoji in markdown and HTML files by default. This can be changed through the `pattern` option below, which takes an array of `minimatch` patterns.

### Default Options

```js
{
    pattern: ["**/*.md", "**/*.markdown", "**/*.html", "**/*.htm"]
}
```

## Example

```js
var emoji = require('metalsmith-emoji');

metalsmith.use(emoji({
  pattern: ["**/*.md", "**/*.markdown", "**/*.html", "data/*"]
}));
```
