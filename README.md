# metalsmith-emoji

  A Metalsmith plugin to convert emoji shortnames to emoji, using the EmojiOne list.

## Installation

    $ npm install metalsmith-emoji

## Usage

  This plugin will only process emoji in markdown files by default. This can be changed through the `pattern` option below, which takes an array of `minimatch` patterns.

## Example

```js
var markdown = require('metalsmith-emoji');

metalsmith.use(markdown({
  pattern: ["*.md", "*.markdown", "*.html", "data/*"]
}));
```
