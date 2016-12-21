'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

// Paths
var path = require('../paths');

// BrowserSync
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: path.serve
        }
    });
});