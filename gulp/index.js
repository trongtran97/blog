'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var browserSync = require('browser-sync');

// Tasks
require('require-dir')('./tasks');

// Require base tasks
require('./watch');
require('./clean');

// Build
gulp.task('build', function() {
  gutil.log(gutil.colors.yellow('Building up'));
  gulp.start('templates', 'styles', 'scripts', 'images');
});

// Default task
gulp.task('default', ['build'], function() {
  gulp.start('serve', 'watch');
});
