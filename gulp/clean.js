'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');

// Paths
var path = require('./paths');

// Clean
gulp.task('clean', function(cb) {
  gutil.log(gutil.colors.red('Cleanin up yo mess'));
  del([
    // Removes old .HTML
    path.DEST.templates + '*.html',
    // Removes old .CSS
    path.DEST.styles + '**/*.css',
    // Removes old .JS
    path.DEST.scripts + '**/*.js.',
    // Removes old IMAGES
    path.DEST.images + '**/*'
  ], cb)
});
