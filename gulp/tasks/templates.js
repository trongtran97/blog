'use strict';

var gulp = require('gulp');
var jade = require('gulp-jade');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');

// Paths
var path = require('../paths');

// Jade > HTML
gulp.task('templates', function() {
  return gulp.src( path.SRC.templates + '*.jade')
    .pipe(plumber())
    // compile
    .pipe(jade({ pretty: true }))
    .pipe(notify({ title: 'Done', message: 'Converted Jade ✔' }))
    .pipe(gulp.dest( path.DEST.templates ))
});
