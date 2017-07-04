const Metalsmith = require('metalsmith');
const emoji = require('../src/index.js');

    Metalsmith('test/examples')
      .source('.')
      .use(emoji({
          processShortnames: true
      }))
      .build('build', function(err, files) {
          if (err) return console.error(err);
          console.log(files)
      });
