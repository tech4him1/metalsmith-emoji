const debug = require('debug')('metalsmith-emoji');
const emojione = require('emojione');
const multimatch = require('multimatch');
const path = require('path');

// Export plugin code.
module.exports = plugin;

function plugin({pattern = ["**/*.md", "**/*.markdown", "**/*.html", "**/*.htm"], convertToImages = false} = {}) {
    return function(files, metalsmith, done) {
        setImmediate(done);
        Object.keys(files).forEach(function(file){
            // Make sure this file is the correct type (from `pattern`).
            if (!isFileType(file, pattern)) return;

            debug('processing file: %s', file);
            if (convertToImages) {
                // If we are to convert to images, convert shortnames and Unicode emojis.
                const output = emojione.toImage(files[file].contents.toString());
            } else {
                // Otherwise, just convert shortnames to Unicode emojis.
                const output = emojione.shortnameToUnicode(files[file].contents.toString());
            }

            // Update the file contents.
            files[file].contents = new Buffer(output);
        });
    };
}

function isFileType(filepath, patterns) {
    return !!multimatch(filepath, patterns).length;
}
