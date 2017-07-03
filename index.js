var debug = require('debug')('metalsmith-emoji');
var emojione = require('emojione');
var multimatch = require('multimatch');
var path = require('path');

// Export plugin code.
module.exports = plugin;

function plugin(opts) {
    opts = opts || {};
    opts.pattern = opts.pattern || ["*.md", "*.markdown", "*.html", "*.htm"];

    return function (files, metalsmith, done){
        setImmediate(done);
        Object.keys(files).forEach(function(file){
            if (!isFileType(file, opts.pattern)) return;

            debug('processing file: %s', file);
            var output = emojione.shortnameToUnicode(files[file].contents.toString());
            files[file].contents = new Buffer(output);

        });
    };
}

function isFileType(filepath, patterns) {
    var filename = path.basename(filepath);
    return !!multimatch(filename, patterns).length;
}
