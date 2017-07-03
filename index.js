const debug = require('debug')('metalsmith-emoji');
const emojione = require('emojione');
const multimatch = require('multimatch');
const path = require('path');

// Export plugin code.
module.exports = plugin;

function plugin({pattern = ["**/*.md", "**/*.markdown", "**/*.html", "**/*.htm"], convertToImages = false, processShortnames = true} = {}) {
    return function(files, metalsmith, done) {
        setImmediate(done);
        Object.keys(files).forEach(function(file){
            // Make sure this file is the correct type (from `pattern`).
            if (!isFileType(file, pattern)) return;

            debug('processing file: %s', file);
            let data = files[file].contents.toString();
            switch (true) {
                case !convertToImages && processShortnames:
                    // Convert shortnames to Unicode emojis (default).
                    data = emojione.shortnameToUnicode(data);
                    break;
                case convertToImages && processShortnames:
                    // Convert shortnames and Unicode emojis to EmojiOne images.
                    data = emojione.toImage(data);
                    break;
                case convertToImages && !processShortnames:
                    // Convert Unicode emojis (but not shortnames) to EmojiOne images.
                    data = emojione.unicodeToImage(data);
                    break;
                default:
                  debug("please check options -- nothing done to file: %s");
            }

            // Update the file contents.
            files[file].contents = new Buffer(data);
        });
    };
}

function isFileType(filepath, patterns) {
    return !!multimatch(filepath, patterns).length;
}
