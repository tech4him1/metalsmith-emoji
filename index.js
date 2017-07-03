var debug = require('debug')('metalsmith-emoji');
var multimatch = require('multimatch');

module.exports = plugin;

function plugin(options) {
    opts.pattern = opts.pattern || ["*.md", "*.markdown"];

    return function (files, metalsmith, done){
        setImmediate(done);
        Object.keys(files).forEach(function(file){
            if (!multimatch(file, opts.pattern).length) return;

            debug('processing file: %s', file);
            var output = emojione.shortnameToUnicode(files[file].contents.toString());
            files[file].contents = new Buffer(output);

        });
    };
}
