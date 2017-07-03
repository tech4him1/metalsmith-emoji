const debug = require('debug')('metalsmith-emoji');
const emojione = require('emojione');
const multimatch = require('multimatch');
const path = require('path');

// Export plugin code.
module.exports = plugin;

function plugin({pattern = ["*.md", "*.markdown", "*.html", "*.htm"]} = {}) {
    return function(files, metalsmith, done) {
        setImmediate(done);
        Object.keys(files).forEach(function(file){
            if (!isFileType(file, pattern)) return;

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
