const test = require('tape');
const Metalsmith = require('metalsmith');
const emoji = require('..');

test('convert emoji shortnames to Unicode characters in Markdown', (t) => {
    t.plan(1);

    Metalsmith('test/examples')
      .source('.')
      .use(emoji({
          processShortnames: true
      }))
      .build(function(err, files) {
          if (err) return t.error(err);
          t.equal(files['shortnames.md'].contents.toString().trim(), '## 😄 ✔️ this is a MD file.',
              "Shortnames should be changed to Unicode emojis in the markdown file (markdown files are processed by default).");
      });
});

test('allow changing files to run on', (t) => {
    t.plan(2);

    Metalsmith('test/examples')
      .source('.')
      .use(emoji({
          pattern: ["shortnames.txt"],
          processShortnames: true
      }))
      .build(function(err, files) {
          if (err) return t.error(err);
          t.equal(files['shortnames.txt'].contents.toString().trim(), '## 😄 ✔️ this is a TXT file.',
              "Shortnames should be changed to Unicode emojis in the text file, because it was included in the pattern..");
          t.equal(files['shortnames.md'].contents.toString().trim(), '## :smile: :heavy_check_mark: this is a MD file.',
              "Shortnames should NOT be changed to Unicode emojis in the markdown file, because it was NOT included in the pattern.");
      });
});
