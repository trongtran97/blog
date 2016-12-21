'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');

// Paths
var path = require('../paths');

// SASS > CSS
gulp.task('styles', function() {
  return gulp.src( path.SRC.styles + 'all.{scss,sass}' )
    .pipe(plumber())
    // compile
    .pipe(sass({ style: 'expanded', errLogToConsole: true }))
    .pipe(notify({ title: 'Done', message: 'Converted SASS ✔' }))
    // prefix
    .pipe(prefix({ browsers: ['last 20 version'], cascade: false }))
    .pipe(notify({ title: 'Done', message: 'Prefixed CSS ✔' }))
    .pipe(gulp.dest( path.DEST.styles ))
    // minify
    .pipe(minify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(notify({ title: 'Done', message: 'Minified CSS ✔ (<%= file.relative %>)' }))
    .pipe(gulp.dest( path.DEST.styles ))
    .pipe(browserSync.stream());
});
